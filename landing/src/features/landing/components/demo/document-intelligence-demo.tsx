"use client";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import {
  ChevronDown,
  ChevronRight,
  Database,
  FileText,
  FolderOpen,
  Layers,
  Maximize2,
  Moon,
  PanelLeftOpen,
  PanelRightClose,
  PanelRightOpen,
  RotateCw,
  Search,
  Sun,
  Tag,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import {
  ACTIONS,
  type EventData,
  EVENTS,
  Joyride,
  STATUS,
} from "react-joyride";
import { Document, Page, pdfjs } from "react-pdf";

import { Safari } from "@/components/shared";
import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { cn } from "@/lib/utils";

import { ChatPanel, Spinner, ThreadSidebar } from "./chat";
import {
  demoChunks,
  demoDocumentConfig,
  demoMetadata,
  demoOrchestrationDelays,
  demoPdfLines,
  demoPdfUrl,
} from "./demo-config";
import { getDemoCopy } from "./demo-copy";
import { buildSteps } from "./demo-steps";
import { getGuidedTourSteps } from "./demo-tour";
import { getDemoUi } from "./demo-ui";
import {
  fuzzyMatch,
  readTextLayer,
  styleTextLayerSpans,
  type TextHit,
} from "./pdf-highlight";

import type { DemoCitation, DemoMessage } from "./demo-types";
import type { PDFDocumentProxy } from "pdfjs-dist";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

const sourcePanelIcons = {
  chunks: Layers,
  entities: Tag,
  metadata: Database,
};

function PdfLoadError({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 p-4 text-center text-xs text-muted-foreground">
      <FileText className="h-8 w-8 text-muted-foreground/40" />
      <p className="font-medium text-foreground/70">Unable to load PDF</p>
      <p className="text-muted-foreground/60">
        The demo document failed to render.
      </p>
      <Button
        variant="outline"
        size="sm"
        className="mt-2 text-xs"
        onClick={onRetry}
      >
        Retry
      </Button>
    </div>
  );
}

function EmptyDocumentPanel() {
  const { i18n } = useTranslation();
  const ui = useMemo(() => getDemoUi(i18n.language), [i18n.language]);

  return (
    <div
      data-demo-tour="pdf"
      className="flex h-full w-full flex-col border-l border-border/40 bg-background"
    >
      <div className="flex min-h-0 flex-1 items-center justify-center bg-muted/20 p-6">
        <div className="max-w-sm text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-border/60 bg-background text-muted-foreground shadow-sm">
            <FileText className="h-5 w-5" />
          </div>
          <h3 className="text-sm font-semibold text-foreground">
            {ui.emptyTitle}
          </h3>
          <p className="mt-2 text-xs leading-5 text-muted-foreground">
            {ui.emptySubtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

function PdfSidebar({
  activeCitation,
  activeTab,
  citationFocusTick,
  sourceOnly = false,
  onSourcePanelOpenChange,
  onTabChange,
  sourcePanelOpen,
}: {
  activeCitation: DemoCitation;
  activeTab: "chunks" | "entities" | "metadata";
  citationFocusTick: number;
  sourceOnly?: boolean;
  onSourcePanelOpenChange: (open: boolean) => void;
  onTabChange: (tab: "chunks" | "entities" | "metadata") => void;
  sourcePanelOpen: boolean;
}) {
  const { i18n } = useTranslation();
  const ui = useMemo(() => getDemoUi(i18n.language), [i18n.language]);
  const [findOpen, setFindOpen] = useState(false);
  const [findQuery, setFindQuery] = useState("");
  const [highlightQuery, setHighlightQuery] = useState("");
  const [highlightedEntity, setHighlightedEntity] = useState("");
  const [entityFilter, setEntityFilter] = useState("");
  const [findIndex, setFindIndex] = useState(0);
  const [pageNumber, setPageNumber] = useState(activeCitation.page);
  const [zoom, setZoom] = useState(100);
  const markedRef = useRef<HTMLElement[]>([]);
  const pageMapRef = useRef<Map<number, HTMLDivElement>>(new Map());
  const scrollRef = useRef<HTMLDivElement>(null);
  const [textHits, setTextHits] = useState<TextHit[]>([]);
  const [numPages, setNumPages] = useState(demoDocumentConfig.pdf.totalPages);
  const [pageRenderTick, setPageRenderTick] = useState(0);
  const [pdfLoadError, setPdfLoadError] = useState(false);
  const scrollPdfToElement = useCallback((element: HTMLElement | undefined) => {
    const container = scrollRef.current;
    if (!container || !element) {
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    const nextTop =
      container.scrollTop +
      elementRect.top -
      containerRect.top -
      container.clientHeight / 2 +
      elementRect.height / 2;

    container.scrollTo({
      behavior: "smooth",
      top: Math.max(0, nextTop),
    });
  }, []);

  useEffect(() => {
    setPageNumber(activeCitation.page);
    if (citationFocusTick === 0) {
      return;
    }
    const citationQuery =
      activeCitation.highlightText ??
      activeCitation.quote.replace("...", "").trim();
    if (citationQuery) {
      setFindOpen(false);
      setFindQuery("");
      setHighlightQuery(citationQuery);
      setFindIndex(0);
      setHighlightedEntity("");
    }
  }, [
    activeCitation.highlightText,
    activeCitation.page,
    activeCitation.quote,
    citationFocusTick,
  ]);

  const pdfLines = demoPdfLines;
  const chunks = demoChunks;

  const entities = useMemo(() => {
    const map = new Map<
      string,
      { count: number; label: string; pages: number[]; type?: string }
    >();

    for (const chunk of chunks) {
      for (const entity of chunk.entities) {
        const key = `${entity.text.toLowerCase()}::${entity.type ?? ""}`;
        const current = map.get(key);
        if (current) {
          current.count += 1;
          if (!current.pages.includes(chunk.pageNumber)) {
            current.pages.push(chunk.pageNumber);
          }
        } else {
          map.set(key, {
            count: 1,
            label: entity.text,
            pages: [chunk.pageNumber],
            type: entity.type,
          });
        }
      }
    }

    return [...map.values()].sort((left, right) => right.count - left.count);
  }, [chunks]);
  const filteredEntities = entityFilter
    ? entities.filter(
        (entity) =>
          entity.label.toLowerCase().includes(entityFilter.toLowerCase()) ||
          (entity.type ?? "")
            .toLowerCase()
            .includes(entityFilter.toLowerCase()),
      )
    : entities;
  const activeFindQuery = (
    findOpen && findQuery.trim() ? findQuery : highlightQuery
  ).trim();
  const normalizedFindQuery = activeFindQuery.toLowerCase();
  const findHits = useMemo(
    () =>
      normalizedFindQuery
        ? pdfLines.filter((line) =>
            line.content.toLowerCase().includes(normalizedFindQuery),
          )
        : [],
    [normalizedFindQuery, pdfLines],
  );
  const activeHit = findHits[findIndex] ?? findHits[0] ?? null;
  const effectiveHitCount = textHits.length || findHits.length;
  const findStatus = !findQuery.trim()
    ? ui.findNoQuery
    : effectiveHitCount === 0
      ? ui.findNoResults
      : `${Math.min(findIndex + 1, effectiveHitCount)}/${effectiveHitCount}`;

  useEffect(() => {
    setFindIndex(0);
  }, [activeFindQuery]);

  useEffect(() => {
    if (activeHit) {
      setPageNumber(activeHit.page);
    }
  }, [activeHit]);

  useEffect(() => {
    scrollPdfToElement(pageMapRef.current.get(pageNumber));
  }, [pageNumber, scrollPdfToElement]);

  const setHitActive = useCallback(
    (spans: HTMLElement[] | undefined, active: boolean) => {
      for (const span of spans ?? []) {
        const marks =
          span.dataset.demoPdfHighlight === "true"
            ? [span]
            : Array.from(
                span.querySelectorAll<HTMLElement>(
                  "[data-demo-pdf-highlight='true']",
                ),
              );

        for (const mark of marks) {
          mark.style.backgroundColor = active
            ? "rgba(16, 185, 129, 0.48)"
            : "rgba(34, 197, 94, 0.34)";
          mark.style.boxShadow = active
            ? "0 0 0 1px rgba(5, 150, 105, 0.25)"
            : "none";
        }
      }
    },
    [],
  );

  useEffect(() => {
    window.getSelection()?.removeAllRanges();
    for (const element of markedRef.current) {
      if (element.dataset.demoPdfHighlight === "true") {
        element.remove();
        continue;
      }
      element.style.removeProperty("background-color");
      element.style.removeProperty("background-image");
      element.style.removeProperty("background-repeat");
      element.style.removeProperty("background-size");
      element.style.removeProperty("border-radius");
      element.style.removeProperty("box-decoration-break");
      element.style.removeProperty("box-shadow");
      element.style.removeProperty("mix-blend-mode");
      element.style.removeProperty("outline");
      element.style.removeProperty("-webkit-box-decoration-break");
    }
    markedRef.current = [];
    setTextHits([]);

    const query = (findOpen && findQuery.trim() ? findQuery : highlightQuery)
      .trim()
      .toLowerCase();
    if (!query || numPages === 0) {
      return;
    }

    const run = (): boolean => {
      const hits: TextHit[] = [];
      let readyPages = 0;

      const pageOrder = [
        pageNumber,
        ...Array.from({ length: numPages }, (_, index) => index + 1).filter(
          (page) => page !== pageNumber,
        ),
      ];

      for (const page of pageOrder) {
        const pageElement = pageMapRef.current.get(page);
        if (!pageElement) {
          continue;
        }

        const layer = readTextLayer(pageElement);
        if (!layer) {
          continue;
        }
        readyPages += 1;

        const hay = layer.raw.toLowerCase();
        const normalizedHay = hay.replace(/\s+/g, " ");
        const normalizedQuery = query.replace(/\s+/g, " ");
        let match = null as null | { end: number; start: number };
        const exactIndex = hay.indexOf(query);
        if (exactIndex !== -1) {
          match = { end: exactIndex + query.length, start: exactIndex };
        } else if (normalizedHay.includes(normalizedQuery)) {
          match = fuzzyMatch(layer.low, normalizedQuery);
        } else {
          match = fuzzyMatch(layer.low, query);
        }

        if (!match) {
          continue;
        }

        const matched: HTMLElement[] = [];
        const first = styleTextLayerSpans(
          layer.spans,
          match.start,
          match.end,
          matched,
        );
        if (first) {
          hits.push({
            from: match.start,
            page,
            spans: matched,
            to: match.end,
          });
          markedRef.current.push(...matched);
        }
      }

      setTextHits(hits);
      if (hits.length > 0) {
        setFindIndex(0);
        setHitActive(hits[0].spans, true);
        setPageNumber(hits[0].page);
        scrollPdfToElement(hits[0].spans[0]);
      }

      return hits.length > 0 || readyPages >= numPages;
    };

    let attempts = 0;
    let timer: ReturnType<typeof setTimeout>;
    const poll = () => {
      attempts += 1;
      if (run() || attempts >= 12) {
        return;
      }
      timer = setTimeout(poll, 200);
    };

    timer = setTimeout(poll, 80);
    return () => clearTimeout(timer);
  }, [
    citationFocusTick,
    findOpen,
    findQuery,
    highlightQuery,
    numPages,
    pageNumber,
    pageRenderTick,
    scrollPdfToElement,
    setHitActive,
    zoom,
  ]);

  const goToFindHit = (direction: -1 | 1) => {
    if (textHits.length > 0) {
      const previous = textHits[findIndex];
      setHitActive(previous?.spans, false);

      const next = (findIndex + direction + textHits.length) % textHits.length;
      const hit = textHits[next];
      setFindIndex(next);
      setPageNumber(hit.page);
      setHitActive(hit.spans, true);
      scrollPdfToElement(hit.spans[0]);
      return;
    }

    if (findHits.length === 0) {
      return;
    }

    setFindIndex((current) => {
      const next = (current + direction + findHits.length) % findHits.length;
      setPageNumber(findHits[next].page);
      return next;
    });
  };

  const sourcePanel = (
    <div
      data-demo-tour="entities"
      className={cn(
        "flex min-h-0 flex-col border-l border-border/40 bg-background",
        sourceOnly
          ? "h-full w-full border-l-0"
          : "hidden w-56 shrink-0 lg:flex",
      )}
    >
      <div className="grid grid-cols-3 gap-1 border-b border-border/40 bg-muted/20 p-1.5">
        {demoDocumentConfig.sourcePanelTabs.map(({ icon, labelKey, value }) => {
          const Icon = sourcePanelIcons[icon];
          const label = ui[labelKey];

          return (
            <button
              key={value}
              className={cn(
                "flex items-center justify-center gap-1 rounded-md px-1 py-1 text-[10px] font-medium transition-all",
                activeTab === value
                  ? "border border-border/50 bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
              )}
              onClick={() => onTabChange(value)}
            >
              <Icon className="h-3 w-3" />
              <span className="truncate">{label}</span>
            </button>
          );
        })}
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto p-3 text-xs">
        {activeTab === "entities" ? (
          <div className="flex h-full min-h-0 flex-col">
            <div className="px-0 pb-2">
              <div className="relative">
                <Search className="absolute left-2 top-2 h-3 w-3 text-muted-foreground" />
                <input
                  value={entityFilter}
                  onChange={(event) => setEntityFilter(event.target.value)}
                  placeholder={ui.entitySearch}
                  className="h-7 w-full rounded-md border border-border/50 bg-background pl-7 pr-2 text-xs outline-none focus:border-primary/40"
                />
              </div>
            </div>
            <p className="mb-1.5 text-[10px] font-medium text-muted-foreground dark:text-neutral-400">
              {filteredEntities.length} {ui.entities}
            </p>
            {highlightedEntity ? (
              <div className="mb-2 flex items-center gap-1.5 rounded-md border border-primary/25 bg-primary/5 px-2 py-1 dark:border-orange-500/35 dark:bg-orange-500/10">
                <span className="min-w-0 flex-1 truncate text-xs font-medium text-primary">
                  {highlightedEntity}
                </span>
                <span className="shrink-0 text-[10px] tabular-nums text-muted-foreground">
                  {effectiveHitCount > 0
                    ? `${Math.min(findIndex + 1, effectiveHitCount)}/${effectiveHitCount}`
                    : "0/0"}
                </span>
                <button
                  className="shrink-0 rounded p-0.5 hover:bg-primary/10"
                  onClick={() => goToFindHit(-1)}
                >
                  <ChevronDown className="h-3 w-3 rotate-180 text-primary" />
                </button>
                <button
                  className="shrink-0 rounded p-0.5 hover:bg-primary/10"
                  onClick={() => goToFindHit(1)}
                >
                  <ChevronDown className="h-3 w-3 text-primary" />
                </button>
              </div>
            ) : null}
            <div className="flex flex-wrap gap-1">
              {filteredEntities.map((entity, index) => {
                const isActive =
                  highlightedEntity.toLowerCase() ===
                  entity.label.toLowerCase();

                return (
                  <button
                    key={`${entity.label}-${entity.type ?? "entity"}-${index}`}
                    className={cn(
                      "group inline-flex max-w-full items-center rounded-full border px-2 py-1 text-[10px] font-medium shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground dark:hover:border-orange-500 dark:hover:bg-orange-500 dark:hover:text-white",
                      isActive
                        ? "border-primary bg-primary/10 text-primary ring-1 ring-primary dark:border-orange-500 dark:bg-orange-500/15 dark:text-orange-200 dark:ring-orange-500/70"
                        : "border-neutral-200 bg-white text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200",
                    )}
                    onClick={() => {
                      const next = isActive ? "" : entity.label;
                      setHighlightedEntity(next);
                      setFindOpen(Boolean(next));
                      setFindQuery(next);
                      setHighlightQuery(next);
                      setFindIndex(0);
                      setPageNumber(entity.pages[0] ?? 1);
                    }}
                  >
                    <span className="truncate">{entity.label}</span>
                    {entity.count > 1 ? (
                      <span className="ml-0.5 text-neutral-500 group-hover:text-primary-foreground/70 dark:text-neutral-400">
                        x{entity.count}
                      </span>
                    ) : null}
                    <span className="ml-1 text-[9px] opacity-70">
                      {entity.pages.length <= 3
                        ? entity.pages.map((page) => `p.${page}`).join(", ")
                        : `${entity.pages
                            .slice(0, 2)
                            .map((page) => `p.${page}`)
                            .join(", ")} +${entity.pages.length - 2}`}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ) : null}
        {activeTab === "metadata" ? (
          <div className="space-y-1.5 text-muted-foreground">
            {demoDocumentConfig.metadataRows.map((row) => {
              const label = row.labelKey
                ? {
                    pages: ui.pages,
                    sourceAccess: ui.sourceAccessLabel,
                    sourceFile: ui.sourceFile,
                    sourceMatch: ui.sourceMatch,
                    sourceParser: ui.sourceParserLabel,
                  }[row.labelKey]
                : row.label;
              const value = row.valueKey
                ? demoMetadata[row.valueKey]
                : `[${activeCitation.id}] p.${activeCitation.page}`;

              return (
                <div
                  key={label}
                  className="group flex items-start gap-2 rounded-md px-1.5 py-1.5 text-[11px] transition-colors hover:bg-muted/35"
                >
                  <span className="min-w-[76px] shrink-0 text-left font-medium text-muted-foreground group-hover:text-primary">
                    {label}:
                  </span>
                  <span className="min-w-0 flex-1 break-words text-left text-foreground/90">
                    {value}
                  </span>
                </div>
              );
            })}
          </div>
        ) : null}
        {activeTab === "chunks" ? (
          <div className="space-y-2">
            <p className="px-1 text-[10px] text-muted-foreground">
              {chunks.length} {ui.chunks}
            </p>
            {chunks.map((chunk) => (
              <div
                key={chunk.id}
                className="space-y-1 rounded-md border border-neutral-200 bg-white p-2 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/80"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="rounded border border-border/60 px-1 py-0 text-[9px] uppercase">
                      {chunk.type}
                    </span>
                    <button
                      className="text-[10px] text-primary hover:underline"
                      onClick={() => setPageNumber(chunk.pageNumber)}
                    >
                      p.{chunk.pageNumber}
                    </button>
                  </div>
                  <div className="flex items-center gap-1.5 text-[9px] text-muted-foreground">
                    <Search className="h-2.5 w-2.5" />
                    {chunk.retrievalCount}
                  </div>
                </div>
                <p className="line-clamp-4 text-[10px] leading-relaxed text-neutral-600 dark:text-neutral-300">
                  {chunk.content}
                </p>
                <div className="flex flex-wrap gap-0.5 pt-0.5">
                  {chunk.entities.map((entity) => (
                    <span
                      key={`${chunk.id}-${entity.text}`}
                      className="rounded border border-neutral-200 bg-neutral-50 px-1 py-0 text-[8px] font-medium text-neutral-600 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-300"
                    >
                      {entity.text}
                    </span>
                  ))}
                </div>
                <div className="space-y-0.5 border-t border-border/30 pt-1 text-[9px] text-muted-foreground/70">
                  {Object.entries(chunk.metadata).map(([key, value]) => (
                    <div key={`${chunk.id}-${key}`}>
                      <span className="font-medium">{key}:</span> {value}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );

  if (sourceOnly) {
    return (
      <div
        data-demo-tour="pdf"
        className="flex h-full w-full flex-col bg-background"
      >
        {sourcePanel}
      </div>
    );
  }

  return (
    <div
      data-demo-tour="pdf"
      className="flex h-full w-full flex-col border-l border-border/40 bg-background transition-all duration-200"
    >
      <div className="flex items-center border-b border-border/40 bg-muted/20">
        <div className="flex-1 overflow-x-auto">
          <div className="flex items-center gap-0.5 p-1">
            <div className="group relative flex min-w-[160px] max-w-[220px] cursor-pointer items-center gap-1.5 rounded-lg border border-border/50 bg-background px-2 py-1.5 text-xs text-foreground shadow-sm">
              <FileText className="h-3.5 w-3.5 shrink-0 text-primary" />
              <div className="min-w-0 flex-1">
                <span className="block truncate text-[11px] font-medium leading-tight">
                  {activeCitation.fileName}
                </span>
              </div>
              <X className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 border-l border-border/40 px-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-muted-foreground hover:text-foreground"
            aria-label={ui.pdfSearch}
            onClick={() => {
              setFindOpen((open) => {
                const next = !open;
                if (next) {
                  setFindQuery("");
                }
                return next;
              });
            }}
          >
            <Search className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-muted-foreground hover:text-foreground"
            aria-label={ui.folders}
          >
            <FolderOpen className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-1.5 border-b border-border/40 bg-background px-2 py-1.5 text-xs">
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7"
          aria-label="Previous page"
          disabled={pageNumber <= 1}
          onClick={() => setPageNumber((page) => Math.max(1, page - 1))}
        >
          <ChevronRight className="h-3.5 w-3.5 rotate-180" />
        </Button>
        <div className="flex items-center gap-1 rounded border border-border/50 bg-muted/30 px-2 py-1 font-mono text-[10px] text-muted-foreground">
          <span>{pageNumber}</span>
          <span>/</span>
          <span>{numPages}</span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7"
          aria-label="Next page"
          disabled={pageNumber >= numPages}
          onClick={() => setPageNumber((page) => Math.min(numPages, page + 1))}
        >
          <ChevronRight className="h-3.5 w-3.5" />
        </Button>
        <span className="mx-1 h-5 w-px bg-border/60" />
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7"
          aria-label="Zoom out"
          disabled={zoom <= 75}
          onClick={() => setZoom((value) => Math.max(75, value - 25))}
        >
          <ZoomOut className="h-3.5 w-3.5" />
        </Button>
        <span className="w-10 text-center font-mono text-[10px] text-muted-foreground">
          {zoom}%
        </span>
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7"
          aria-label="Zoom in"
          disabled={zoom >= 150}
          onClick={() => setZoom((value) => Math.min(150, value + 25))}
        >
          <ZoomIn className="h-3.5 w-3.5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7"
          aria-label="Rotate document"
        >
          <RotateCw className="h-3.5 w-3.5" />
        </Button>
      </div>

      {findOpen ? (
        <div className="flex items-center gap-1.5 border-b border-border/40 bg-muted/20 px-3 py-1.5">
          <Search className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
          <input
            value={findQuery}
            onChange={(event) => {
              setFindQuery(event.target.value);
              setHighlightQuery(event.target.value);
              setHighlightedEntity("");
            }}
            className="h-7 min-w-0 flex-1 rounded-md border border-border/50 bg-background px-2 text-xs outline-none focus:border-primary/40"
            placeholder={ui.pdfSearch}
          />
          <span className="whitespace-nowrap text-[10px] text-muted-foreground">
            {findStatus}
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            aria-label="Previous match"
            disabled={effectiveHitCount === 0}
            onClick={() => goToFindHit(-1)}
          >
            <ChevronDown className="h-3.5 w-3.5 rotate-180" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            aria-label="Next match"
            disabled={effectiveHitCount === 0}
            onClick={() => goToFindHit(1)}
          >
            <ChevronDown className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            aria-label={ui.closeReview}
            onClick={() => {
              setFindOpen(false);
              setFindQuery("");
              setHighlightQuery("");
              setHighlightedEntity("");
            }}
          >
            <X className="h-3.5 w-3.5" />
          </Button>
        </div>
      ) : null}

      <div className="flex min-h-0 flex-1">
        <div
          ref={scrollRef}
          className="min-w-0 flex-1 overflow-y-auto bg-muted/20 p-4 scrollbar-thin"
        >
          {pdfLoadError ? (
            <PdfLoadError onRetry={() => setPdfLoadError(false)} />
          ) : (
            <Document
              file={demoPdfUrl}
              loading={
                <div className="flex h-full items-center justify-center text-xs text-muted-foreground">
                  <Spinner />
                </div>
              }
              onLoadError={() => setPdfLoadError(true)}
              onLoadSuccess={(document: PDFDocumentProxy) => {
                setNumPages(document.numPages);
              }}
            >
              <div
                className="mx-auto flex w-fit flex-col gap-4"
                data-demo-pdf-pages
              >
                {Array.from({ length: numPages }, (_, index) => index + 1).map(
                  (page) => (
                    <div
                      key={page}
                      ref={(element) => {
                        if (element) {
                          pageMapRef.current.set(page, element);
                        } else {
                          pageMapRef.current.delete(page);
                        }
                      }}
                      className={cn(
                        "relative overflow-hidden rounded border border-border/60 bg-white shadow-sm",
                        pageNumber === page && "ring-1 ring-primary/25",
                      )}
                      data-page={page}
                    >
                      <Page
                        onRenderSuccess={() =>
                          setPageRenderTick((tick) => tick + 1)
                        }
                        pageNumber={page}
                        renderAnnotationLayer
                        renderTextLayer
                        scale={Math.max(0.75, Math.min(1.5, zoom / 100))}
                      />
                    </div>
                  ),
                )}
              </div>
            </Document>
          )}
        </div>
        <div className="hidden shrink-0 flex-col items-center border-l border-border/40 bg-background px-0.5 py-2 lg:flex">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            aria-label={
              sourcePanelOpen ? "Close entity rail" : "Open entity rail"
            }
            onClick={() => {
              const next = !sourcePanelOpen;
              if (next) {
                onTabChange("entities");
              }
              onSourcePanelOpenChange(next);
            }}
          >
            {sourcePanelOpen ? (
              <PanelRightClose className="h-4 w-4" />
            ) : (
              <PanelRightOpen className="h-4 w-4" />
            )}
          </Button>
        </div>
        {sourcePanelOpen ? (
          <div
            data-demo-tour="entities"
            className="hidden w-56 shrink-0 flex-col border-l border-border/40 bg-background lg:flex"
          >
            <div className="grid grid-cols-3 gap-1 border-b border-border/40 bg-muted/20 p-1.5">
              {demoDocumentConfig.sourcePanelTabs.map(
                ({ icon, labelKey, value }) => {
                  const Icon = sourcePanelIcons[icon];
                  const label = ui[labelKey];

                  return (
                    <button
                      key={value}
                      className={cn(
                        "flex items-center justify-center gap-1 rounded-md px-1 py-1 text-[10px] font-medium transition-all",
                        activeTab === value
                          ? "border border-border/50 bg-background text-foreground shadow-sm"
                          : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                      )}
                      onClick={() => onTabChange(value)}
                    >
                      <Icon className="h-3 w-3" />
                      <span className="truncate">{label}</span>
                    </button>
                  );
                },
              )}
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto p-3 text-xs">
              {activeTab === "entities" ? (
                <div className="flex h-full min-h-0 flex-col">
                  <div className="px-0 pb-2">
                    <div className="relative">
                      <Search className="absolute left-2 top-2 h-3 w-3 text-muted-foreground" />
                      <input
                        value={entityFilter}
                        onChange={(event) =>
                          setEntityFilter(event.target.value)
                        }
                        placeholder={ui.entitySearch}
                        className="h-7 w-full rounded-md border border-border/50 bg-background pl-7 pr-2 text-xs outline-none focus:border-primary/40"
                      />
                    </div>
                  </div>
                  <p className="mb-1.5 text-[10px] font-medium text-muted-foreground dark:text-neutral-400">
                    {filteredEntities.length} {ui.entities}
                  </p>
                  {highlightedEntity ? (
                    <div className="mb-2 flex items-center gap-1.5 rounded-md border border-primary/25 bg-primary/5 px-2 py-1 dark:border-orange-500/35 dark:bg-orange-500/10">
                      <span className="min-w-0 flex-1 truncate text-xs font-medium text-primary">
                        {highlightedEntity}
                      </span>
                      <span className="shrink-0 text-[10px] tabular-nums text-muted-foreground">
                        {effectiveHitCount > 0
                          ? `${Math.min(findIndex + 1, effectiveHitCount)}/${effectiveHitCount}`
                          : "0/0"}
                      </span>
                      <button
                        className="shrink-0 rounded p-0.5 hover:bg-primary/10"
                        onClick={() => goToFindHit(-1)}
                      >
                        <ChevronDown className="h-3 w-3 rotate-180 text-primary" />
                      </button>
                      <button
                        className="shrink-0 rounded p-0.5 hover:bg-primary/10"
                        onClick={() => goToFindHit(1)}
                      >
                        <ChevronDown className="h-3 w-3 text-primary" />
                      </button>
                    </div>
                  ) : null}
                  <div className="flex flex-wrap gap-1">
                    {filteredEntities.map((entity, index) => {
                      const isActive =
                        highlightedEntity.toLowerCase() ===
                        entity.label.toLowerCase();

                      return (
                        <button
                          key={`${entity.label}-${entity.type ?? "entity"}-${index}`}
                          className={cn(
                            "group inline-flex max-w-full items-center rounded-full border px-2 py-1 text-[10px] font-medium shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground dark:hover:border-orange-500 dark:hover:bg-orange-500 dark:hover:text-white",
                            isActive
                              ? "border-primary bg-primary/10 text-primary ring-1 ring-primary dark:border-orange-500 dark:bg-orange-500/15 dark:text-orange-200 dark:ring-orange-500/70"
                              : "border-neutral-200 bg-white text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200",
                          )}
                          onClick={() => {
                            const next = isActive ? "" : entity.label;
                            setHighlightedEntity(next);
                            setFindOpen(Boolean(next));
                            setFindQuery(next);
                            setHighlightQuery(next);
                            setFindIndex(0);
                            setPageNumber(entity.pages[0] ?? 1);
                          }}
                        >
                          <span className="truncate">{entity.label}</span>
                          {entity.count > 1 ? (
                            <span className="ml-0.5 text-neutral-500 group-hover:text-primary-foreground/70 dark:text-neutral-400">
                              x{entity.count}
                            </span>
                          ) : null}
                          <span className="ml-1 text-[9px] opacity-70">
                            {entity.pages.length <= 3
                              ? entity.pages
                                  .map((page) => `p.${page}`)
                                  .join(", ")
                              : `${entity.pages
                                  .slice(0, 2)
                                  .map((page) => `p.${page}`)
                                  .join(", ")} +${entity.pages.length - 2}`}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : null}
              {activeTab === "metadata" ? (
                <div className="space-y-1.5 text-muted-foreground">
                  {demoDocumentConfig.metadataRows.map((row) => {
                    const label = row.labelKey
                      ? {
                          pages: ui.pages,
                          sourceAccess: ui.sourceAccessLabel,
                          sourceFile: ui.sourceFile,
                          sourceMatch: ui.sourceMatch,
                          sourceParser: ui.sourceParserLabel,
                        }[row.labelKey]
                      : row.label;
                    const value = row.valueKey
                      ? demoMetadata[row.valueKey]
                      : `[${activeCitation.id}] p.${activeCitation.page}`;

                    return (
                      <div
                        key={label}
                        className="group flex items-start gap-2 rounded-md px-1.5 py-1.5 text-[11px] transition-colors hover:bg-muted/35"
                      >
                        <span className="min-w-[76px] shrink-0 text-left font-medium text-muted-foreground group-hover:text-primary">
                          {label}:
                        </span>
                        <span className="min-w-0 flex-1 break-words text-left text-foreground/90">
                          {value}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ) : null}
              {activeTab === "chunks" ? (
                <div className="space-y-2">
                  <p className="px-1 text-[10px] text-muted-foreground">
                    {chunks.length} {ui.chunks}
                  </p>
                  {chunks.map((chunk) => (
                    <div
                      key={chunk.id}
                      className="space-y-1 rounded-md border border-neutral-200 bg-white p-2 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/80"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <span className="rounded border border-border/60 px-1 py-0 text-[9px] uppercase">
                            {chunk.type}
                          </span>
                          <button
                            className="text-[10px] text-primary hover:underline"
                            onClick={() => setPageNumber(chunk.pageNumber)}
                          >
                            p.{chunk.pageNumber}
                          </button>
                        </div>
                        <div className="flex items-center gap-1.5 text-[9px] text-muted-foreground">
                          <Search className="h-2.5 w-2.5" />
                          {chunk.retrievalCount}
                        </div>
                      </div>
                      <p className="line-clamp-4 text-[10px] leading-relaxed text-neutral-600 dark:text-neutral-300">
                        {chunk.content}
                      </p>
                      <div className="flex flex-wrap gap-0.5 pt-0.5">
                        {chunk.entities.map((entity) => (
                          <span
                            key={`${chunk.id}-${entity.text}`}
                            className="rounded border border-neutral-200 bg-neutral-50 px-1 py-0 text-[8px] font-medium text-neutral-600 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-300"
                          >
                            {entity.text}
                          </span>
                        ))}
                      </div>
                      <div className="space-y-0.5 border-t border-border/30 pt-1 text-[9px] text-muted-foreground/70">
                        {Object.entries(chunk.metadata).map(([key, value]) => (
                          <div key={`${chunk.id}-${key}`}>
                            <span className="font-medium">{key}:</span> {value}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function DocumentIntelligenceDemo() {
  const { i18n } = useTranslation();
  const ui = useMemo(() => getDemoUi(i18n.language), [i18n.language]);
  const copy = useMemo(() => getDemoCopy(i18n.language), [i18n.language]);
  const steps = useMemo(() => buildSteps(copy), [copy]);

  const [activeCitation, setActiveCitation] = useState(copy.citations[0]);
  const [activePdfTab, setActivePdfTab] = useState<
    "chunks" | "entities" | "metadata"
  >("entities");
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [documentOpen, setDocumentOpen] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [messages, setMessages] = useState<DemoMessage[]>([]);
  const [streamedText, setStreamedText] = useState("");
  const [threadOpen, setThreadOpen] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [demoDark, setDemoDark] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return document.documentElement.classList.contains("dark");
  });
  const [citationFocusTick, setCitationFocusTick] = useState(0);
  const [documentEmpty, setDocumentEmpty] = useState(false);
  const [sourcePanelOpen, setSourcePanelOpen] = useState(false);
  const [tourRun, setTourRun] = useState(false);
  const [tourStep, setTourStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const tourSteps = useMemo(
    () => getGuidedTourSteps(ui, isMobile),
    [isMobile, ui],
  );

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  const resetDemo = useCallback(
    (options?: { keepFullscreen?: boolean }) => {
      setActiveCitation(copy.citations[0]);
      setActivePdfTab("entities");
      setCurrentStepIndex(-1);
      setDocumentOpen(false);
      setDocumentEmpty(false);
      setHasRun(false);
      setIsRunning(false);
      setMessages([]);
      setSourcePanelOpen(false);
      setStreamedText("");
      setThreadOpen(true);
      setTourRun(false);
      setTourStep(0);
      if (!options?.keepFullscreen) {
        setFullscreen(false);
      }
    },
    [copy],
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const syncDemoTheme = () => {
      const nextDark = document.documentElement.classList.contains("dark");
      setDemoDark((current) => (current === nextDark ? current : nextDark));
    };

    syncDemoTheme();

    const observer = new MutationObserver(syncDemoTheme);
    observer.observe(document.documentElement, {
      attributeFilter: ["class"],
      attributes: true,
    });

    window.addEventListener("prosperify-theme-change", syncDemoTheme);

    return () => {
      observer.disconnect();
      window.removeEventListener("prosperify-theme-change", syncDemoTheme);
    };
  }, []);

  const setSyncedTheme = useCallback((nextDark: boolean) => {
    document.documentElement.classList.toggle("dark", nextDark);
    window.localStorage.setItem(
      "prosperify-theme",
      nextDark ? "dark" : "light",
    );
    window.dispatchEvent(
      new CustomEvent("prosperify-theme-change", {
        detail: { dark: nextDark },
      }),
    );
    setDemoDark(nextDark);
  }, []);

  useEffect(() => {
    resetDemo({ keepFullscreen: true });
    setCitationFocusTick(0);
  }, [i18n.language, resetDemo]);

  useEffect(() => {
    if (!fullscreen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [fullscreen]);

  useEffect(() => {
    if (!fullscreen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        resetDemo();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [fullscreen, resetDemo]);

  const runDemo = useCallback(() => {
    if (isRunning || hasRun) {
      return;
    }

    setHasRun(true);
    setIsRunning(true);
    setMessages([{ role: "user", text: copy.question }]);
    setStreamedText("");
    setCurrentStepIndex(-1);

    let elapsed = 0;
    steps.forEach((_, index) => {
      elapsed += demoOrchestrationDelays[index] ?? 720;
      window.setTimeout(() => {
        setCurrentStepIndex(index);
      }, elapsed);
    });

    window.setTimeout(() => {
      const words = copy.finalAnswer.split(" ");
      let cursor = 0;

      const streamNext = () => {
        cursor += 1;
        setStreamedText(words.slice(0, cursor).join(" "));

        if (cursor >= words.length) {
          setIsRunning(false);
          setCurrentStepIndex(steps.length - 1);
          setMessages([
            { role: "user", text: copy.question },
            {
              citations: copy.citations,
              role: "assistant",
              text: copy.finalAnswer,
            },
          ]);
          setStreamedText("");
          return;
        }

        const lastWord = words[Math.max(0, cursor - 1)] ?? "";
        const pause = /[.:;]$/.test(lastWord)
          ? 320
          : /[,]$/.test(lastWord)
            ? 150
            : cursor % 13 === 0
              ? 125
              : 64;
        window.setTimeout(streamNext, pause);
      };

      streamNext();
    }, elapsed + 900);
  }, [
    copy.citations,
    copy.finalAnswer,
    copy.question,
    hasRun,
    isRunning,
    steps,
  ]);

  const hasAssistantAnswer = messages.some(
    (message) => message.role === "assistant",
  );

  const openEmptyDocumentWorkspace = useCallback(() => {
    setDocumentOpen(true);
    setDocumentEmpty(true);
    setSourcePanelOpen(false);
  }, []);

  const openDocumentWorkspace = useCallback(() => {
    setDocumentOpen(true);
    setDocumentEmpty(!hasAssistantAnswer);
    if (!hasAssistantAnswer) {
      setSourcePanelOpen(false);
    }
  }, [hasAssistantAnswer]);

  const handleRunDemo = useCallback(() => {
    setThreadOpen(false);
    openEmptyDocumentWorkspace();
    runDemo();
    if (tourRun && tourStep <= 2) {
      window.setTimeout(() => setTourStep(3), 650);
    }
  }, [openEmptyDocumentWorkspace, runDemo, tourRun, tourStep]);

  useEffect(() => {
    if (!tourRun || tourStep !== 3 || !hasAssistantAnswer) {
      return;
    }

    const timeout = window.setTimeout(() => {
      document
        .querySelector("[data-demo-tour='citations']")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      setTourStep(4);
    }, 700);

    return () => window.clearTimeout(timeout);
  }, [hasAssistantAnswer, tourRun, tourStep]);

  const handleCitationSelect = useCallback((citation: DemoCitation) => {
    setActiveCitation(citation);
    setActivePdfTab("entities");
    setDocumentOpen(true);
    setDocumentEmpty(false);
    setSourcePanelOpen(true);
    setCitationFocusTick((tick) => tick + 1);
  }, []);

  const closeThreadSidebar = useCallback(() => {
    setThreadOpen(false);

    if (isMobile) {
      setDocumentOpen(false);
      setDocumentEmpty(false);
      return;
    }

    openEmptyDocumentWorkspace();

    if (tourRun && tourStep <= 1) {
      window.setTimeout(() => setTourStep(2), 120);
    }
  }, [isMobile, openEmptyDocumentWorkspace, tourRun, tourStep]);

  const selectMobilePanel = useCallback(
    (panel: "threads" | "chat" | "document") => {
      if (panel === "threads") {
        setThreadOpen(true);
        setDocumentOpen(false);
        return;
      }

      setThreadOpen(false);

      if (panel === "document") {
        openDocumentWorkspace();
        return;
      }

      setDocumentOpen(false);
    },
    [openDocumentWorkspace],
  );

  const handleTour = useCallback(
    (data: EventData) => {
      const { action, index, status, type } = data;

      if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
        setTourRun(false);
        return;
      }

      if (type !== EVENTS.STEP_AFTER && type !== EVENTS.TARGET_NOT_FOUND) {
        return;
      }

      const next = action === ACTIONS.PREV ? Math.max(0, index - 1) : index + 1;

      if (index === 1 && action !== ACTIONS.PREV && threadOpen) {
        closeThreadSidebar();
        return;
      }

      if (index === 2 && action !== ACTIONS.PREV && !hasRun) {
        handleRunDemo();
        return;
      }

      if (index === 3 && action !== ACTIONS.PREV && !hasAssistantAnswer) {
        setTourStep(3);
        return;
      }

      if (next === 5) {
        setDocumentOpen(true);
        setDocumentEmpty(false);
        setActiveCitation(copy.citations[1] ?? copy.citations[0]);
        setCitationFocusTick((tick) => tick + 1);
        window.setTimeout(() => setTourStep(5), 160);
        return;
      }

      if (next === 6) {
        setDocumentOpen(true);
        setDocumentEmpty(false);
        setSourcePanelOpen(true);
        setActivePdfTab("entities");
        window.setTimeout(() => setTourStep(6), 120);
        return;
      }

      if (next === 7) {
        setDocumentOpen(true);
        setDocumentEmpty(false);
        setSourcePanelOpen(true);
        setActivePdfTab("metadata");
        window.setTimeout(() => setTourStep(7), 120);
        return;
      }

      setTourStep(next);
    },
    [
      closeThreadSidebar,
      copy.citations,
      handleRunDemo,
      hasAssistantAnswer,
      hasRun,
      threadOpen,
    ],
  );

  const openInteractiveDemo = () => {
    resetDemo({ keepFullscreen: true });
    setFullscreen(true);
    window.setTimeout(() => {
      setTourStep(0);
      setTourRun(true);
    }, 260);
  };

  const closeInteractiveDemo = () => {
    resetDemo();
    setTourRun(false);
    setFullscreen(false);
  };

  const showThreadPanel = fullscreen && threadOpen && (!isMobile || !hasRun);
  const showDocumentPanel = fullscreen && documentOpen;
  const showChatPanel =
    !fullscreen || !isMobile || (!showThreadPanel && !showDocumentPanel);

  const fullscreenControls = fullscreen ? (
    <div
      className={cn(
        "client-ui relative z-[10001] flex items-center gap-1.5",
        demoDark && "dark",
      )}
    >
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="h-7 w-7 rounded-full bg-background/95 shadow-sm backdrop-blur"
        onClick={() => setSyncedTheme(!demoDark)}
        aria-label={demoDark ? "Light theme" : "Dark theme"}
      >
        {demoDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </Button>
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="h-7 w-7 rounded-full bg-background/95 shadow-sm backdrop-blur"
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          closeInteractiveDemo();
        }}
        aria-label={ui.closeReview}
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  ) : null;

  const demoShell = (
    <div
      className={cn(
        "client-ui relative overflow-hidden rounded-[8px] border border-border/60 bg-background shadow-2xl transition-all duration-500 ease-out",
        fullscreen ? "h-full w-full" : "mx-auto w-full max-w-7xl",
        demoDark && "dark",
      )}
    >
      <Safari
        url="prosperify.ai/chat"
        headerActions={fullscreenControls}
        className={cn(
          "w-full",
          fullscreen ? "h-full" : "max-sm:h-[520px] h-[720px]",
        )}
      >
        <div className="relative h-full min-w-0 overflow-hidden bg-background text-foreground">
          {fullscreen &&
          !showThreadPanel &&
          (!isMobile || !showDocumentPanel) ? (
            <Button
              variant="outline"
              size="sm"
              className="pointer-events-auto absolute left-2 top-1/2 z-40 h-9 w-9 -translate-y-1/2 rounded-full bg-background/95 px-0 shadow-sm backdrop-blur-sm"
              onClick={() => setThreadOpen(true)}
            >
              <PanelLeftOpen className="h-4 w-4" />
            </Button>
          ) : null}
          {fullscreen && !isMobile && !showDocumentPanel && showChatPanel ? (
            <Button
              variant="outline"
              size="sm"
              className="pointer-events-auto absolute right-2 top-1/2 z-40 h-9 w-9 -translate-y-1/2 rounded-full bg-background/95 px-0 shadow-sm backdrop-blur-sm"
              onClick={openDocumentWorkspace}
            >
              <PanelRightOpen className="h-4 w-4" />
            </Button>
          ) : null}
          {fullscreen && isMobile && showDocumentPanel ? (
            <Button
              variant="outline"
              size="sm"
              className="pointer-events-auto absolute left-2 top-1/2 z-40 h-9 w-9 -translate-y-1/2 rounded-full bg-background/95 px-0 shadow-sm backdrop-blur-sm"
              onClick={() => setDocumentOpen(false)}
              aria-label="Back to chat"
            >
              <PanelRightClose className="h-4 w-4" />
            </Button>
          ) : null}
          {fullscreen && isMobile ? (
            <div className="pointer-events-auto absolute inset-x-3 bottom-3 z-50 rounded-full border border-border/60 bg-background/95 p-1 shadow-xl backdrop-blur">
              <div className="grid grid-cols-3 gap-1">
                {[
                  {
                    active: showThreadPanel,
                    icon: PanelLeftOpen,
                    label: ui.mobileThreads,
                    panel: "threads" as const,
                  },
                  {
                    active: showChatPanel,
                    icon: Search,
                    label: ui.mobileChat,
                    panel: "chat" as const,
                  },
                  {
                    active: showDocumentPanel,
                    icon: FileText,
                    label: ui.mobileDocument,
                    panel: "document" as const,
                  },
                ].map(({ active, icon: Icon, label, panel }) => (
                  <button
                    key={panel}
                    type="button"
                    className={cn(
                      "flex h-9 min-w-0 items-center justify-center gap-1.5 rounded-full px-2 text-xs font-medium transition-colors",
                      active
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    )}
                    onClick={() => selectMobilePanel(panel)}
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">{label}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          {isMobile ? (
            <div
              data-demo-tour="chat-ui"
              className="h-full min-w-0 w-full overflow-hidden"
            >
              {showThreadPanel ? (
                <ThreadSidebar
                  active={copy.threads[0]}
                  archivedCount={2}
                  assistantName={copy.assistantName}
                  isStreaming={isRunning}
                  onClose={closeThreadSidebar}
                  onRunDemo={handleRunDemo}
                  threads={copy.threads}
                />
              ) : showDocumentPanel ? (
                documentEmpty ? (
                  <EmptyDocumentPanel />
                ) : (
                  <PdfSidebar
                    activeTab={activePdfTab}
                    activeCitation={activeCitation}
                    citationFocusTick={citationFocusTick}
                    onSourcePanelOpenChange={setSourcePanelOpen}
                    onTabChange={setActivePdfTab}
                    sourceOnly
                    sourcePanelOpen={sourcePanelOpen}
                  />
                )
              ) : (
                <ChatPanel
                  activeCitation={activeCitation}
                  assistantName={copy.assistantName}
                  currentStepIndex={currentStepIndex}
                  hasRun={hasRun}
                  isRunning={isRunning}
                  messages={messages}
                  onCitationSelect={handleCitationSelect}
                  onRunDemo={handleRunDemo}
                  question={copy.question}
                  retrievalEntities={copy.retrievalEntities}
                  retrievalQueries={copy.retrievalQueries}
                  steps={steps}
                  streamedText={streamedText}
                />
              )}
            </div>
          ) : (
            <ResizablePanelGroup
              data-demo-tour="chat-ui"
              direction="horizontal"
              className="h-full min-w-0 w-full"
            >
              {showThreadPanel ? (
                <>
                  <ResizablePanel
                    id="chat-threads"
                    defaultSize="17%"
                    minSize="14%"
                    maxSize="24%"
                    collapsible
                    collapsedSize="0%"
                    className="min-w-0 overflow-hidden"
                  >
                    <ThreadSidebar
                      active={copy.threads[0]}
                      archivedCount={2}
                      assistantName={copy.assistantName}
                      isStreaming={isRunning}
                      onClose={closeThreadSidebar}
                      onRunDemo={handleRunDemo}
                      threads={copy.threads}
                    />
                  </ResizablePanel>
                  <ResizableHandle
                    withHandle
                    className="z-30 -mx-0.5 bg-border/30 hover:bg-border/50"
                  />
                </>
              ) : null}

              <ResizablePanel
                id="chat-main"
                minSize="30%"
                className="min-w-0 overflow-hidden"
              >
                <ChatPanel
                  activeCitation={activeCitation}
                  assistantName={copy.assistantName}
                  currentStepIndex={currentStepIndex}
                  hasRun={hasRun}
                  isRunning={isRunning}
                  messages={messages}
                  onCitationSelect={handleCitationSelect}
                  onRunDemo={handleRunDemo}
                  question={copy.question}
                  retrievalEntities={copy.retrievalEntities}
                  retrievalQueries={copy.retrievalQueries}
                  steps={steps}
                  streamedText={streamedText}
                />
              </ResizablePanel>

              {showDocumentPanel ? (
                <>
                  <ResizableHandle
                    withHandle
                    className="z-30 -mx-0.5 bg-border/30 hover:bg-border/50"
                  />
                  <ResizablePanel
                    id="chat-docs"
                    defaultSize={showThreadPanel ? "44%" : "52%"}
                    minSize="18%"
                    maxSize="68%"
                    collapsible
                    collapsedSize="0%"
                    className="min-w-0 overflow-hidden"
                  >
                    {documentEmpty ? (
                      <EmptyDocumentPanel />
                    ) : (
                      <PdfSidebar
                        activeTab={activePdfTab}
                        activeCitation={activeCitation}
                        citationFocusTick={citationFocusTick}
                        onSourcePanelOpenChange={setSourcePanelOpen}
                        onTabChange={setActivePdfTab}
                        sourcePanelOpen={sourcePanelOpen}
                      />
                    )}
                  </ResizablePanel>
                </>
              ) : null}
            </ResizablePanelGroup>
          )}
        </div>
      </Safari>
      {!fullscreen ? (
        <button
          type="button"
          className="absolute inset-0 z-50 flex items-center justify-center bg-background/40 backdrop-blur-[2px] focus-visible:outline-none"
          onClick={openInteractiveDemo}
          aria-label={ui.openReview}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/95 px-4 py-2 text-sm font-medium text-foreground shadow-xl">
            <Maximize2 className="h-4 w-4 text-primary" />
            {ui.openReview}
          </span>
        </button>
      ) : null}
    </div>
  );

  return (
    <>
      {fullscreen ? (
        <Joyride
          continuous
          locale={{
            back: ui.tourBack,
            close: ui.closeReview,
            last: ui.tourDone,
            next: ui.tourNext,
            skip: ui.tourSkip,
          }}
          onEvent={handleTour}
          options={{
            arrowColor: demoDark ? "hsl(240 10% 3.9%)" : "#fff",
            backgroundColor: demoDark ? "hsl(240 10% 3.9%)" : "#fff",
            blockTargetInteraction: false,
            buttons: ["back", "skip", "primary"],
            closeButtonAction: "skip",
            hideOverlay: true,
            overlayClickAction: false,
            overlayColor: "rgba(0, 0, 0, 0)",
            primaryColor: "#f97316",
            scrollDuration: 0,
            scrollOffset: 20,
            showProgress: true,
            skipScroll: true,
            spotlightPadding: 6,
            textColor: demoDark ? "hsl(0 0% 98%)" : "hsl(240 10% 3.9%)",
            zIndex: 20000,
          }}
          run={tourRun}
          stepIndex={tourStep}
          steps={tourSteps}
          styles={{
            floater: {
              filter: "drop-shadow(0 18px 40px rgba(15, 23, 42, 0.18))",
            },
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0)",
            },
            spotlight: {
              fill: "rgba(0, 0, 0, 0)",
              stroke: "rgba(249, 115, 22, 0.45)",
              strokeWidth: 2,
            },
            tooltip: {
              borderRadius: 12,
              maxWidth: isMobile ? "calc(100vw - 32px)" : 360,
              width: isMobile ? "calc(100vw - 32px)" : undefined,
            },
          }}
        />
      ) : null}
      {fullscreen && mounted ? (
        createPortal(
          <div className="fixed inset-0 z-[100] bg-black/55 p-1.5 backdrop-blur-sm animate-in fade-in duration-300 sm:p-4 md:p-6">
            <div className="h-full w-full animate-in zoom-in-95 duration-500">
              {demoShell}
            </div>
          </div>,
          document.body,
        )
      ) : (
        <>{demoShell}</>
      )}
    </>
  );
}
