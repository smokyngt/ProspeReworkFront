import {
  AlertTriangle,
  Archive,
  ArrowDown,
  Brain,
  BrainCircuit,
  Check,
  ChevronDown,
  ChevronRight,
  Copy,
  Database,
  Download,
  FileText,
  Filter,
  Folder,
  FolderOpen,
  Link2,
  Plus,
  ScanSearch,
  Search,
  Send,
  Sparkles,
  Tag,
  ThumbsDown,
  ThumbsUp,
  Trash2,
  X,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { demoChatConfig } from '../demo-config';
import { getDemoUi } from '../demo-ui';

import type {
  DemoCitation,
  DemoHallucination,
  DemoMessage,
  DemoStep,
} from '../demo-types';
export function Spinner({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'inline-block h-3 w-3 animate-spin rounded-full border border-[#F47331]/30 border-t-[#F47331]',
        className,
      )}
    />
  );
}

function AssistantAvatar() {
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-background text-foreground ring-1 ring-border/40">
      <Image
        src="/assets/brand/logo-icon.png"
        alt="Prosperify assistant icon"
        width={22}
        height={22}
        className="h-5 w-5 object-contain"
        unoptimized
      />
    </div>
  );
}

export function ThreadSidebar({
  active,
  archivedCount,
  assistantName,
  isStreaming,
  onClose,
  onRunDemo,
  threads,
}: {
  active: string;
  archivedCount: number;
  assistantName: string;
  isStreaming: boolean;
  onClose?: () => void;
  onRunDemo: () => void;
  threads: string[];
}) {
  const [collapsed, setCollapsed] = useState(false);
  const { i18n } = useTranslation();
  const ui = useMemo(() => getDemoUi(i18n.language), [i18n.language]);

  return (
    <div
      data-demo-tour="threads"
      className="flex h-full w-full min-w-0 flex-col overflow-hidden border-r border-border/40 bg-background"
    >
      <div className="p-2.5">
        <div className="mb-2 flex h-7 items-center justify-end">
          {onClose ? (
            <Button
              data-demo-tour="thread-close"
              type="button"
              variant="ghost"
              size="icon"
              className="h-7 w-7 rounded-full text-muted-foreground hover:text-foreground"
              onClick={onClose}
              aria-label={ui.closeSidebar}
            >
              <X className="h-3.5 w-3.5" />
            </Button>
          ) : null}
        </div>
        <Button
          onClick={onRunDemo}
          className="h-9 w-full min-w-0 justify-start gap-2 px-3 shadow-sm"
        >
          <Plus className="h-4 w-4 shrink-0" />
          <span className="truncate">{ui.newChat}</span>
        </Button>
      </div>

      <div className="px-2.5 pb-2">
        <div className="inline-flex h-9 w-full min-w-0 items-center justify-center rounded-lg border-0 bg-muted/50 p-1 text-muted-foreground">
          <button className="inline-flex min-w-0 flex-1 items-center justify-center whitespace-nowrap rounded-md border border-border/80 bg-background px-2 py-1.5 text-xs font-semibold text-foreground shadow-sm">
            {ui.active}
          </button>
          <button className="inline-flex min-w-0 flex-1 items-center justify-center whitespace-nowrap rounded-md border border-transparent px-2 py-1.5 text-xs font-medium">
            <Archive className="mr-1 h-3 w-3 shrink-0" />
            <span className="truncate">{ui.archived}</span>
            <span className="ml-1 shrink-0 text-[10px] opacity-60">
              {archivedCount}
            </span>
          </button>
        </div>
      </div>

      <div className="min-w-0 flex-1 overflow-y-auto scrollbar-thin">
        <div className="min-w-0 space-y-2 p-2 pt-1">
          <div className="space-y-1 min-w-0">
            <button
              className="flex w-full min-w-0 items-center gap-2 px-3 py-1.5 text-xs font-medium text-foreground/72 transition-colors hover:text-foreground"
              onClick={() => setCollapsed((current) => !current)}
            >
              {collapsed ? (
                <ChevronRight className="h-3 w-3 shrink-0" />
              ) : (
                <ChevronDown className="h-3 w-3 shrink-0" />
              )}
              <span className="truncate">{ui.today}</span>
              <span className="ml-auto shrink-0 text-[10px] text-foreground/60">
                {threads.length}
              </span>
            </button>
            {!collapsed &&
              threads.map((thread) => (
                <div
                  key={thread}
                  className={cn(
                    'group flex min-w-0 items-center gap-2 rounded-xl px-3 py-2 cursor-pointer transition-colors hover:bg-muted/80',
                    active === thread && 'bg-muted',
                  )}
                  onClick={onRunDemo}
                >
                  <AssistantAvatar />
                  <div className="min-w-0 w-0 flex-1 overflow-hidden">
                    <p
                      title={thread}
                      className="block w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium text-foreground"
                    >
                      {thread}
                    </p>
                    <p className="block w-full overflow-hidden text-ellipsis whitespace-nowrap text-[11px] text-foreground/68">
                      {assistantName} - {ui.justNow}
                    </p>
                    {isStreaming && active === thread ? (
                      <div className="mt-1 flex items-center gap-1 text-[10px] text-primary">
                        <Spinner className="h-3 w-3" />
                        <span className="truncate">
                          {ui.assistantStreaming}
                        </span>
                      </div>
                    ) : null}
                  </div>
                  <div className="flex shrink-0 items-center gap-0.5 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      aria-label="Archive conversation"
                    >
                      <Archive className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      aria-label="Delete conversation"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ChatHeader({ assistantName }: { assistantName: string }) {
  const [assistantMenuOpen, setAssistantMenuOpen] = useState(false);
  const assistants = demoChatConfig.assistants.map((assistant) => ({
    ...assistant,
    label:
      assistant.labelKey === 'activeAssistant'
        ? assistantName
        : (assistant.label ?? assistantName),
  }));

  return (
    <header className="relative z-40 border-b border-border/40 bg-white px-4 py-3 dark:bg-neutral-950">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between">
        <div className="flex min-w-0 items-center gap-2">
          <div className="relative flex min-w-0 items-center">
            <Link
              href="/"
              className="flex min-w-0 items-center gap-3 rounded-l-md px-2 py-1 transition-colors hover:bg-muted"
              aria-label="Prosperify home"
            >
              <AssistantAvatar />
              <span className="max-w-[240px] truncate font-semibold">
                {assistantName}
              </span>
            </Link>
            <button
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-r-md transition-colors hover:bg-muted"
              onClick={() => setAssistantMenuOpen((open) => !open)}
              type="button"
              aria-label="Assistant menu"
            >
              <ChevronDown
                className={cn(
                  'h-4 w-4 shrink-0 text-muted-foreground transition-transform',
                  assistantMenuOpen && 'rotate-180',
                )}
              />
            </button>
            {assistantMenuOpen ? (
              <div className="absolute left-0 top-full z-[120] mt-2 w-64 rounded-lg border border-border/70 bg-white p-1.5 shadow-2xl dark:bg-neutral-950">
                {assistants.map((assistant) => (
                  <button
                    key={assistant.label}
                    className={cn(
                      'flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-xs',
                      assistant.disabled
                        ? 'cursor-not-allowed bg-white text-muted-foreground opacity-60 dark:bg-neutral-950'
                        : 'bg-orange-50 text-foreground dark:bg-orange-500/10',
                    )}
                    disabled={assistant.disabled}
                    type="button"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-[10px] font-semibold dark:bg-neutral-900">
                      {assistant.short}
                    </span>
                    <span className="min-w-0 flex-1 truncate">
                      {assistant.label}
                    </span>
                    {!assistant.disabled ? (
                      <Check className="h-3.5 w-3.5 text-primary" />
                    ) : null}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}

function StepIcon({ action }: { action: DemoStep['action'] }) {
  const icons = {
    analyzing: BrainCircuit,
    generating: Sparkles,
    readFileContent: FileText,
    retrieved: Database,
    screenshot: Download,
    searching: Search,
    toolCall: Zap,
  };
  const Icon = icons[action];
  return <Icon className="h-3 w-3 shrink-0" />;
}

function asChunks(
  response?: Record<string, unknown>,
): Array<Record<string, unknown>> {
  return Array.isArray(response?.chunks)
    ? (response.chunks as Array<Record<string, unknown>>)
    : [];
}

function scoreLabel(score: unknown, verified = 'verified') {
  return typeof score === 'number' ? `${Math.round(score * 100)}%` : verified;
}

function ToolResponsePreview({ step }: { step: DemoStep }) {
  const { i18n } = useTranslation();
  const ui = useMemo(() => getDemoUi(i18n.language), [i18n.language]);
  const chunks = asChunks(step.toolResponse);

  if (!step.toolName || chunks.length === 0) {
    return null;
  }

  if (step.action === 'readFileContent') {
    return (
      <div className="mt-1.5 flex flex-wrap gap-1">
        {chunks.map((chunk, index) => (
          <button
            key={`${String(chunk.fileName)}-${index}`}
            type="button"
            className="inline-flex max-w-full items-center gap-1 rounded border border-border/30 bg-background/50 px-2 py-0.5 text-[10px] text-foreground/70 transition-colors hover:bg-muted/40 hover:text-foreground"
          >
            <FileText className="h-2.5 w-2.5 text-sky-500/80" />
            <span className="truncate">{String(chunk.fileName)}</span>
            <span className="font-mono text-muted-foreground/60">
              p.{String(chunk.pageNumber)}
            </span>
          </button>
        ))}
      </div>
    );
  }

  if (step.action === 'screenshot') {
    return (
      <div className="mt-1.5 space-y-1.5">
        {chunks.map((chunk, index) => (
          <div
            key={`${String(chunk.fileName)}-${index}`}
            className="rounded border border-border/30 bg-background/40 p-1.5"
          >
            <div className="flex items-center gap-1.5 text-[10px] text-foreground/70">
              <Download className="h-2.5 w-2.5 shrink-0 text-warning" />
              <span className="min-w-0 flex-1 truncate">
                {String(chunk.fileName)}
              </span>
              <span className="font-mono text-[9px] text-muted-foreground/50">
                p.{String(chunk.pageNumber)}
              </span>
            </div>
            <p className="mt-1 border-t border-border/20 pt-1 text-[10px] leading-relaxed text-muted-foreground/75">
              {String(chunk.content)}
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-1.5 space-y-1.5">
      <div className="flex items-center gap-2 text-[10px] text-muted-foreground/70">
        <Database className="h-3 w-3" />
        <span>
          {String(step.toolResponse?.count ?? chunks.length)} {ui.chunks}
        </span>
        <span className="h-3 w-px bg-border/60" />
        <span>
          {ui.topScore} {scoreLabel(chunks[0]?.score, ui.verified)}
        </span>
      </div>
      {chunks.slice(0, 3).map((chunk, index) => (
        <div
          key={`${String(chunk.fileName)}-${String(chunk.pageNumber)}-${index}`}
          className="rounded border border-border/30 bg-background/50 p-2"
        >
          <div className="mb-1 flex items-center gap-2">
            <FileText className="h-3 w-3 shrink-0 text-primary/80" />
            <span className="min-w-0 flex-1 truncate text-[10px] font-medium text-foreground/80">
              {String(chunk.fileName)} - p.{String(chunk.pageNumber)}
            </span>
            <span className="rounded border border-border/40 bg-background px-1.5 py-0.5 font-mono text-[9px] text-muted-foreground">
              {scoreLabel(chunk.score, ui.verified)}
            </span>
          </div>
          <p className="line-clamp-3 text-[10px] leading-relaxed text-muted-foreground/80">
            {String(chunk.content)}
          </p>
        </div>
      ))}
    </div>
  );
}

function StepTimeline({
  currentStepIndex,
  isStreaming,
  steps,
}: {
  currentStepIndex: number;
  isStreaming: boolean;
  steps: DemoStep[];
}) {
  const { i18n } = useTranslation();
  const ui = useMemo(() => getDemoUi(i18n.language), [i18n.language]);
  const [expandedSteps, setExpandedSteps] = useState<Set<string>>(new Set());
  const visibleSteps = steps.slice(0, Math.max(0, currentStepIndex + 1));

  if (visibleSteps.length === 0) {
    return null;
  }

  return (
    <div
      data-demo-tour="orchestration"
      className="max-h-[420px] overflow-y-auto rounded-lg border border-border/50 bg-muted/40 p-3 scrollbar-thin"
    >
      <div className="relative space-y-1">
        {visibleSteps.length > 1 ? (
          <div
            className="absolute left-[5px] top-4 bottom-4 w-px bg-border/50"
            aria-hidden="true"
          />
        ) : null}
        {visibleSteps.map((step, index) => {
          const isLast = index === visibleSteps.length - 1;
          const isRunning = isLast && isStreaming;
          const isDone = !isRunning;
          const hasDetails = Boolean(
            step.thinking ||
            step.queries?.length ||
            step.entities?.length ||
            step.toolParams ||
            step.toolResponse,
          );
          const expanded = expandedSteps.has(step.id);
          return (
            <div
              key={step.id}
              className={cn('relative pl-5 py-0.5', isDone && 'opacity-75')}
            >
              <span
                className={cn(
                  'absolute left-0 top-[6px] h-3 w-3 rounded-full flex items-center justify-center z-10',
                  isRunning ? 'bg-primary' : 'bg-emerald-500/70',
                )}
              >
                {isRunning ? (
                  <span className="h-1.5 w-1.5 rounded-full bg-white/90 animate-pulse" />
                ) : (
                  <Check className="h-1.5 w-1.5 text-white" />
                )}
              </span>
              <div className="flex w-full items-start gap-2 text-left">
                <StepIcon action={step.action} />
                <div className="min-w-0 flex-1">
                  <button
                    className="flex w-full items-start gap-2 text-left text-xs"
                    disabled={!hasDetails}
                    onClick={() => {
                      if (!hasDetails) {
                        return;
                      }
                      setExpandedSteps((current) => {
                        const next = new Set(current);
                        if (next.has(step.id)) {
                          next.delete(step.id);
                        } else {
                          next.add(step.id);
                        }
                        return next;
                      });
                    }}
                    type="button"
                  >
                    <span
                      className={cn(
                        'min-w-0 flex-1 leading-relaxed',
                        isRunning ? 'text-foreground' : 'text-foreground/85',
                      )}
                    >
                      {step.reasoning ?? step.action}
                    </span>
                    {step.chunks ? (
                      <span className="inline-flex shrink-0 items-center gap-1 rounded border border-border/50 bg-background/70 px-1.5 py-0.5 text-[10px] text-muted-foreground/75">
                        <Database className="h-2.5 w-2.5" />
                        {step.chunks} {ui.chunks}
                      </span>
                    ) : null}
                    {hasDetails ? (
                      <ChevronDown
                        className={cn(
                          'h-3.5 w-3.5 text-muted-foreground/60 transition-transform',
                          expanded && 'rotate-180',
                        )}
                      />
                    ) : null}
                  </button>
                  {step.trace ? (
                    <p className="mt-1 text-[10px] leading-relaxed text-foreground/70">
                      {step.trace}
                    </p>
                  ) : null}
                  {hasDetails && expanded ? (
                    <div className="ml-5 mt-1.5 space-y-2 border-l border-border/40 pl-3 text-[10px] leading-relaxed text-foreground/75">
                      {step.thinking ? (
                        <div className="rounded border border-border/30 bg-background/50 px-2.5 py-2">
                          <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-foreground/60">
                            {ui.thinking}
                          </p>
                          <p className="whitespace-pre-wrap text-[10px] leading-relaxed text-foreground/75">
                            {step.thinking}
                          </p>
                        </div>
                      ) : null}
                      {step.queries?.length ? (
                        <div className="flex flex-wrap gap-1">
                          {step.queries.map((query) => (
                            <span
                              key={query}
                              className="inline-flex items-center rounded border border-border/50 bg-background/80 px-1.5 py-0.5 text-[10px] text-foreground/75"
                            >
                              {query}
                            </span>
                          ))}
                        </div>
                      ) : null}
                      {step.entities?.length ? (
                        <div className="flex flex-wrap gap-1">
                          {step.entities.map((entity) => (
                            <span
                              key={entity}
                              className="inline-flex items-center rounded border border-primary/20 bg-primary/5 px-1.5 py-0.5 text-[10px] font-medium text-primary/70"
                            >
                              {entity}
                            </span>
                          ))}
                        </div>
                      ) : null}
                      {step.toolName ? (
                        <div className="space-y-1 rounded border border-border/30 bg-background/50 px-2.5 py-2">
                          <div className="flex items-center gap-2">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-foreground/60">
                              {ui.toolCall}
                            </p>
                            <span className="inline-flex items-center rounded border border-border/50 bg-background/80 px-1.5 py-0.5 font-mono text-[9px] text-foreground/80">
                              {step.toolName}
                            </span>
                          </div>
                          <ToolResponsePreview step={step} />
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {isStreaming ? (
        <div className="flex gap-1 pt-1 pl-5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary/40 animate-bounce [animation-delay:0ms]" />
          <span className="h-1.5 w-1.5 rounded-full bg-primary/40 animate-bounce [animation-delay:150ms]" />
          <span className="h-1.5 w-1.5 rounded-full bg-primary/40 animate-bounce [animation-delay:300ms]" />
        </div>
      ) : null}
    </div>
  );
}

function RetrievalMeta({
  entities,
  firstTokenLatency,
  queries,
  retrievalChunks,
  visibleEntityCount,
  visibleQueryCount,
}: {
  entities: string[];
  firstTokenLatency?: string;
  queries: string[];
  retrievalChunks: number;
  visibleEntityCount?: number;
  visibleQueryCount?: number;
}) {
  const [expanded, setExpanded] = useState(true);
  const { i18n } = useTranslation();
  const ui = useMemo(() => getDemoUi(i18n.language), [i18n.language]);
  const visibleQueries = queries.slice(0, visibleQueryCount ?? queries.length);
  const visibleEntities = entities.slice(
    0,
    visibleEntityCount ?? entities.length,
  );

  return (
    <div className="max-w-[78%]">
      <Button
        variant="ghost"
        size="sm"
        className="h-7 gap-1.5 px-2 text-xs text-muted-foreground hover:text-foreground"
        onClick={() => setExpanded((value) => !value)}
      >
        <Database className="h-3.5 w-3.5" />
        {expanded ? ui.hideRetrieval : ui.showRetrieval}
        <span className="inline-flex items-center rounded-full border border-border/40 bg-background/80 px-1.5 py-0.5 font-mono tabular-nums text-[10px] text-muted-foreground">
          {retrievalChunks}
        </span>
        <ChevronDown
          className={cn(
            'h-3 w-3 transition-transform',
            expanded && 'rotate-180',
          )}
        />
      </Button>

      {expanded ? (
        <div className="mt-1.5 flex flex-wrap items-start gap-2 text-xs text-muted-foreground">
          {visibleQueries.length > 0 ? (
            <div className="flex items-start gap-1.5 rounded-md border border-border/50 bg-background/70 px-2.5 py-1.5">
              <Search className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground/70" />
              <div className="flex flex-col gap-0.5">
                <span className="font-medium text-foreground/80">
                  {ui.queries}
                </span>
                {visibleQueries.map((query) => (
                  <span key={query} className="italic text-muted-foreground">
                    &ldquo;{query}&rdquo;
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {visibleEntities.length > 0 ? (
            <div className="flex items-start gap-1.5 rounded-md border border-orange-300/40 bg-orange-50/50 px-2.5 py-1.5">
              <Tag className="mt-0.5 h-3.5 w-3.5 shrink-0 text-orange-500/70" />
              <div className="flex flex-wrap gap-1">
                <span className="w-full font-medium text-foreground/80">
                  {ui.entities}
                </span>
                {visibleEntities.map((entity) => (
                  <span
                    key={entity}
                    className="rounded-full border border-orange-300/50 bg-orange-100/50 px-2 py-0.5 text-orange-700"
                  >
                    {entity}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          <span className="inline-flex items-center gap-1.5 rounded-md border border-border/50 bg-background/70 px-2.5 py-1.5">
            <Database className="h-3.5 w-3.5 shrink-0 text-muted-foreground/70" />
            {retrievalChunks} {ui.chunks}
          </span>
          {firstTokenLatency ? (
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border/50 bg-background/70 px-2.5 py-1.5">
              <Zap className="h-3.5 w-3.5 shrink-0 text-muted-foreground/70" />
              {firstTokenLatency}s {ui.firstToken}
            </span>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

function CitationList({
  citations,
  onSelect,
}: {
  citations: DemoCitation[];
  onSelect: (citation: DemoCitation) => void;
}) {
  const { i18n } = useTranslation();
  const ui = useMemo(() => getDemoUi(i18n.language), [i18n.language]);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const pages = Array.from(new Set(citations.map((citation) => citation.page)))
    .sort((left, right) => left - right)
    .join(', ');

  return (
    <div data-demo-tour="citations" className="mt-2 max-w-[78%] space-y-2">
      <div className="rounded-xl border border-border/50 bg-muted/25 px-3 py-2">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex min-w-0 items-center gap-2">
            <FileText className="h-3.5 w-3.5 shrink-0 text-primary" />
            <span className="truncate text-xs font-semibold text-foreground">
              {citations[0]?.fileName}
            </span>
          </div>
          <Badge variant="outline" className="gap-1 text-[10px]">
            <ScanSearch className="h-3 w-3" />
            p.{pages}
          </Badge>
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {citations.map((citation) => {
            const confidence = Number.parseInt(citation.confidence, 10);
            const isHovered = hoveredId === citation.id;

            return (
              <span key={citation.id} className="relative inline-flex">
                <button
                  className="inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-background px-2 py-1.5 text-[11px] font-medium text-foreground transition-all hover:border-primary/40 hover:bg-primary/5"
                  onClick={() => onSelect(citation)}
                  onMouseEnter={() => setHoveredId(citation.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  type="button"
                >
                  <Link2 className="h-3 w-3 text-primary" />
                  <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
                    p.{citation.page}
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    {ui.sourceMatch}
                  </span>
                  <Badge
                    variant="secondary"
                    className="ml-0.5 px-1.5 text-[10px]"
                  >
                    {confidence}%
                  </Badge>
                </button>
                {isHovered && (
                  <span className="absolute bottom-[calc(100%+0.45rem)] left-1/2 z-50 w-72 -translate-x-1/2 rounded-lg border border-border/60 bg-popover p-3 text-left text-xs leading-relaxed text-popover-foreground shadow-xl">
                    <span className="mb-2 flex items-center gap-2">
                      <FileText className="h-3.5 w-3.5 shrink-0 text-primary" />
                      <span className="min-w-0 flex-1 truncate font-semibold">
                        {citation.fileName}
                      </span>
                      <span className="rounded border border-border/60 bg-muted/40 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                        p.{citation.page}
                      </span>
                    </span>
                    <span className="block border-l-2 border-primary/50 pl-2 italic text-muted-foreground">
                      &ldquo;{citation.quote}&rdquo;
                    </span>
                    <span className="mt-2 flex items-center gap-2">
                      <span className="min-w-[48px] text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                        {ui.confidence ?? 'Confidence'}
                      </span>
                      <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted/80">
                        <span
                          className="block h-full rounded-full bg-primary/60"
                          style={{ width: `${confidence}%` }}
                        />
                      </span>
                      <span className="text-[10px] font-mono tabular-nums text-muted-foreground">
                        {confidence}%
                      </span>
                    </span>
                  </span>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function HallucinationSummary({
  hallucinations,
  onCitationSelect,
}: {
  hallucinations: DemoHallucination[];
  onCitationSelect?: (citation: DemoCitation) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const maxScore = Math.round(
    Math.max(...hallucinations.map((h) => h.score)) * 100,
  );

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="inline-flex items-center gap-2 rounded-md border border-border/60 bg-muted/40 px-2.5 py-1 text-xs cursor-help">
        <AlertTriangle className="h-3.5 w-3.5 shrink-0 text-warning" />
        <span>
          {hallucinations.length} hallucination
          {hallucinations.length > 1 ? 's' : ''} detected
        </span>
        <span className="text-muted-foreground">·</span>
        <span>Highest risk: {maxScore}%</span>
      </span>
      {isHovered && (
        <span className="absolute bottom-[calc(100%+0.45rem)] left-1/2 z-50 w-72 -translate-x-1/2 rounded-lg border border-border/60 bg-popover p-3 text-left text-xs leading-relaxed text-popover-foreground shadow-xl">
          {hallucinations.map((h, i) => {
            const canOpen = !!h.citation && !!onCitationSelect;
            return (
              <span
                key={i}
                className={cn(
                  i > 0 ? 'mt-2 block border-t border-border/40 pt-2' : 'block',
                  canOpen
                    ? 'cursor-pointer rounded-sm px-0.5 -mx-0.5 transition-colors hover:bg-warning/15'
                    : '',
                )}
                onClick={
                  canOpen
                    ? () => onCitationSelect(h.citation as DemoCitation)
                    : undefined
                }
                role={canOpen ? 'button' : undefined}
                tabIndex={canOpen ? 0 : undefined}
                onKeyDown={
                  canOpen
                    ? (e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          onCitationSelect(h.citation as DemoCitation);
                        }
                      }
                    : undefined
                }
              >
                <span className="flex items-center gap-2 text-foreground">
                  <AlertTriangle className="h-3 w-3 shrink-0 text-warning" />
                  <span className="text-[11px] font-semibold">
                    Potential inaccuracy
                  </span>
                </span>
                <span className="mt-1 block text-[11px] leading-relaxed text-muted-foreground">
                  {h.reason}
                </span>
                {h.citation && (
                  <span className="mt-1 inline-flex items-center gap-1.5 rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
                    <Link2 className="h-2.5 w-2.5" />
                    p.{h.citation.page}
                  </span>
                )}
                <span className="mt-1.5 flex items-center gap-2">
                  <span className="min-w-[48px] text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                    Risk
                  </span>
                  <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted/80">
                    <span
                      className="block h-full rounded-full bg-warning/70"
                      style={{ width: `${Math.round(h.score * 100)}%` }}
                    />
                  </span>
                  <span className="text-[10px] font-mono tabular-nums text-muted-foreground">
                    {Math.round(h.score * 100)}%
                  </span>
                </span>
              </span>
            );
          })}
        </span>
      )}
    </span>
  );
}

function stripCitationMarkers(value: string) {
  return value.replace(/\s*\[(\d+)\]/g, '');
}

function AssistantAnswer({
  citations = [],
  hallucinations = [],
  onCitationSelect,
  potentialInaccuracyLabel,
  text,
}: {
  citations?: DemoCitation[];
  hallucinations?: DemoHallucination[];
  onCitationSelect: (citation: DemoCitation) => void;
  potentialInaccuracyLabel: string;
  text: string;
}) {
  const [activePreviewIndex, setActivePreviewIndex] = useState<number | null>(
    null,
  );
  const [activeHallucinationIndex, setActiveHallucinationIndex] = useState<
    number | null
  >(null);

  type Segment = {
    citation?: DemoCitation;
    hallucination?: DemoHallucination;
    text: string;
  };

  const segments: Segment[] = [];

  const citationPattern = /([^[]+?)\s*\[(\d+)\]/g;
  let cursor = 0;
  let match: RegExpExecArray | null;

  while ((match = citationPattern.exec(text)) !== null) {
    if (match.index > cursor) {
      segments.push({ text: text.slice(cursor, match.index) });
    }

    const citation = citations[Number(match[2]) - 1];
    segments.push({ citation, text: match[1] });
    cursor = match.index + match[0].length;
  }

  if (cursor < text.length) {
    segments.push({ text: text.slice(cursor) });
  }

  const hallucinationSegments: Segment[] = [];
  for (const segment of segments) {
    const startOffset = text.indexOf(segment.text);

    const overlapping = hallucinations.filter(
      (h) => h.start < startOffset + segment.text.length && h.end > startOffset,
    );

    if (overlapping.length === 0) {
      hallucinationSegments.push(segment);
      continue;
    }

    let segCursor = 0;
    for (const h of overlapping.sort((a, b) => a.start - b.start)) {
      const localStart = Math.max(0, h.start - startOffset);
      const localEnd = Math.min(segment.text.length, h.end - startOffset);

      if (localStart > segCursor) {
        hallucinationSegments.push({
          text: segment.text.slice(segCursor, localStart),
        });
      }

      hallucinationSegments.push({
        text: segment.text.slice(localStart, localEnd),
        citation: segment.citation,
        hallucination: h,
      });
      segCursor = localEnd;
    }

    if (segCursor < segment.text.length) {
      hallucinationSegments.push({
        text: segment.text.slice(segCursor),
        citation: segment.citation,
      });
    }
  }

  const finalSegments =
    hallucinationSegments.length > 0 ? hallucinationSegments : segments;

  return (
    <span>
      {finalSegments.map((segment, index) => {
        if (segment.hallucination) {
          const isOpen = activeHallucinationIndex === index;
          const canOpenCitation = !!segment.citation;
          return (
            <span
              key={`h-${index}`}
              className={cn(
                'relative inline rounded-sm bg-warning/8 text-foreground underline decoration-wavy decoration-warning/50 underline-offset-4',
                canOpenCitation &&
                  'decoration-2 cursor-pointer hover:bg-warning/15',
              )}
              onClick={
                canOpenCitation
                  ? () => onCitationSelect(segment.citation as DemoCitation)
                  : undefined
              }
              onKeyDown={
                canOpenCitation
                  ? (event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        onCitationSelect(segment.citation as DemoCitation);
                      }
                    }
                  : undefined
              }
              onMouseEnter={() => setActiveHallucinationIndex(index)}
              onMouseLeave={() => setActiveHallucinationIndex(null)}
              role={canOpenCitation ? 'button' : 'note'}
              tabIndex={canOpenCitation ? 0 : undefined}
            >
              {segment.text}
              {isOpen && (
                <span className="absolute left-0 top-[calc(100%+0.45rem)] z-50 w-72 rounded-lg border border-border/60 bg-popover p-3 text-left text-xs leading-relaxed text-popover-foreground shadow-xl">
                  <span className="flex items-center gap-2 text-foreground">
                    <AlertTriangle className="h-3.5 w-3.5 shrink-0 text-warning" />
                    <span className="text-xs font-semibold tracking-wide">
                      {potentialInaccuracyLabel}
                    </span>
                    {segment.citation && (
                      <span className="ml-auto rounded border border-border/60 bg-muted/40 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                        p.{segment.citation.page}
                      </span>
                    )}
                  </span>
                  <span className="mt-2 block text-xs leading-relaxed text-muted-foreground">
                    {segment.hallucination.reason}
                  </span>
                  {segment.citation && (
                    <span className="mt-1.5 inline-flex items-center gap-1 rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
                      <FileText className="h-2.5 w-2.5" />
                      {segment.citation.fileName}
                    </span>
                  )}
                  <span className="mt-2 flex items-center gap-2">
                    <span className="min-w-[64px] text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                      Risk
                    </span>
                    <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted/80">
                      <span
                        className="block h-full rounded-full bg-warning/70"
                        style={{
                          width: `${Math.round(segment.hallucination.score * 100)}%`,
                        }}
                      />
                    </span>
                    <span className="text-[10px] font-mono tabular-nums text-muted-foreground">
                      {Math.round(segment.hallucination.score * 100)}%
                    </span>
                  </span>
                </span>
              )}
            </span>
          );
        }

        if (!segment.citation) {
          return (
            <span key={`t-${index}`} className="inline">
              {segment.text}
            </span>
          );
        }

        const isPreviewOpen = activePreviewIndex === index;

        return (
          <span
            key={`c-${index}`}
            className="relative inline cursor-pointer rounded-sm bg-primary/10 px-0.5 underline decoration-solid decoration-primary/40 underline-offset-4 transition-colors hover:bg-primary/20 hover:decoration-primary/70"
            onClick={() => onCitationSelect(segment.citation as DemoCitation)}
            onBlur={() => setActivePreviewIndex(null)}
            onFocus={() => setActivePreviewIndex(index)}
            onKeyDown={(event) => {
              if (event.key !== 'Enter' && event.key !== ' ') {
                return;
              }
              event.preventDefault();
              onCitationSelect(segment.citation as DemoCitation);
            }}
            onMouseEnter={() => setActivePreviewIndex(index)}
            onMouseLeave={() => setActivePreviewIndex(null)}
            role="button"
            tabIndex={0}
          >
            {segment.text}
            {isPreviewOpen && (
              <span className="absolute left-0 top-[calc(100%+0.45rem)] z-50 w-72 rounded-lg border border-border/60 bg-popover p-3 text-left text-xs leading-relaxed text-popover-foreground shadow-xl">
                <span className="mb-2 flex items-center gap-2">
                  <FileText className="h-3.5 w-3.5 shrink-0 text-primary" />
                  <span className="min-w-0 flex-1 truncate font-semibold">
                    {segment.citation.fileName}
                  </span>
                  <span className="rounded border border-border/60 bg-muted/40 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                    p.{segment.citation.page}
                  </span>
                </span>
                <span className="block border-l-2 border-primary/50 pl-2 italic text-muted-foreground">
                  &ldquo;{segment.citation.quote}&rdquo;
                </span>
              </span>
            )}
          </span>
        );
      })}
    </span>
  );
}

function MessageActions() {
  const { i18n } = useTranslation();
  const ui = useMemo(() => getDemoUi(i18n.language), [i18n.language]);

  return (
    <div className="mt-1 flex max-w-[78%] items-center gap-1.5 border-t border-transparent pt-1.5">
      <Button
        variant="ghost"
        size="sm"
        className="h-7 gap-1.5 px-2 text-xs text-muted-foreground hover:text-foreground"
      >
        <Copy className="h-3.5 w-3.5" />
        {ui.copy}
      </Button>
      <span className="mx-1 h-4 w-px bg-border/50" />
      <Button
        variant="ghost"
        size="icon"
        className="h-7 w-7 text-muted-foreground hover:text-green-600"
        aria-label="Positive feedback"
      >
        <ThumbsUp className="h-3.5 w-3.5" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="h-7 w-7 text-muted-foreground hover:text-red-600"
        aria-label="Negative feedback"
      >
        <ThumbsDown className="h-3.5 w-3.5" />
      </Button>
    </div>
  );
}

export function ChatMessages({
  activeCitation,
  assistantName,
  currentStepIndex,
  hasRun,
  isRunning,
  messages,
  onCitationSelect,
  onRunDemo,
  question,
  retrievalEntities,
  retrievalQueries,
  steps,
  streamedText,
}: {
  activeCitation: DemoCitation;
  assistantName: string;
  currentStepIndex: number;
  hasRun: boolean;
  isRunning: boolean;
  messages: DemoMessage[];
  onCitationSelect: (citation: DemoCitation) => void;
  onRunDemo: () => void;
  question: string;
  retrievalEntities: string[];
  retrievalQueries: string[];
  steps: DemoStep[];
  streamedText: string;
}) {
  const { i18n } = useTranslation();
  const ui = useMemo(() => getDemoUi(i18n.language), [i18n.language]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState(ui.papers);
  const [atBottom, setAtBottom] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollAnchorRef = useRef<HTMLDivElement>(null);
  const selectedFilterCount = selectedFolder === ui.papers ? 1 : 0;
  const visibleQueryCount = isRunning
    ? Math.min(retrievalQueries.length, Math.max(0, currentStepIndex - 1))
    : retrievalQueries.length;
  const visibleEntityCount = isRunning
    ? Math.min(retrievalEntities.length, Math.max(0, currentStepIndex - 2))
    : retrievalEntities.length;

  const updateScrollState = useCallback(() => {
    const container = scrollRef.current;
    if (!container) {
      return;
    }

    const distanceToBottom =
      container.scrollHeight - container.clientHeight - container.scrollTop;
    setAtBottom(distanceToBottom < 120);
  }, []);

  const scrollToBottom = useCallback(() => {
    const container = scrollRef.current;
    if (!container) {
      return;
    }
    container.scrollTo({
      behavior: 'smooth',
      top: container.scrollHeight,
    });
  }, []);

  useEffect(() => {
    if (!atBottom) {
      return;
    }

    scrollToBottom();
  }, [
    atBottom,
    currentStepIndex,
    isRunning,
    messages.length,
    scrollToBottom,
    streamedText,
  ]);

  return (
    <>
      <div className="relative flex min-h-0 flex-1 overflow-hidden p-4">
        <div
          ref={scrollRef}
          className="mx-auto h-full w-full max-w-5xl overflow-y-auto scrollbar-thin"
          onScroll={updateScrollState}
        >
          <div className="space-y-4 pb-6">
            {messages.length === 0 ? <div className="h-[360px]" /> : null}

            {messages.map((message, index) =>
              message.role === 'user' ? (
                <div
                  key={`${message.role}-${index}`}
                  className="group flex flex-row-reverse gap-4 py-4 opacity-100 duration-200"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold ring-2 ring-border/30 ring-offset-1 ring-offset-background">
                    {demoChatConfig.userInitials}
                  </div>
                  <div className="flex max-w-[78%] flex-col items-end gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono tabular-nums text-muted-foreground">
                        {ui.justNow}
                      </span>
                      <span className="text-sm font-medium">{ui.you}</span>
                    </div>
                    <div className="rounded-xl bg-primary px-4 py-3 text-sm leading-relaxed text-primary-foreground shadow-sm">
                      {message.text}
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  key={`${message.role}-${index}`}
                  className="group flex gap-4 py-4 opacity-100 duration-200"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted shadow-sm ring-2 ring-border/30 ring-offset-1 ring-offset-background">
                    <Sparkles className="h-4 w-4 text-foreground" />
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">
                        {assistantName}
                      </span>
                      <span className="text-xs font-mono tabular-nums text-muted-foreground">
                        {ui.justNow}
                      </span>
                    </div>
                    <StepTimeline
                      currentStepIndex={currentStepIndex}
                      isStreaming={isRunning}
                      steps={steps}
                    />
                    <RetrievalMeta
                      entities={retrievalEntities}
                      firstTokenLatency="2.4"
                      queries={retrievalQueries}
                      retrievalChunks={20}
                    />
                    <div className="max-w-[78%] rounded-xl border border-border/40 bg-muted/70 px-4 py-3 text-sm leading-relaxed text-foreground shadow-sm">
                      <AssistantAnswer
                        citations={message.citations}
                        hallucinations={message.hallucinations}
                        onCitationSelect={onCitationSelect}
                        potentialInaccuracyLabel={ui.potentialInaccuracy}
                        text={message.text}
                      />
                    </div>
                    {message.citations ? (
                      <CitationList
                        citations={message.citations}
                        onSelect={onCitationSelect}
                      />
                    ) : null}
                    {message.hallucinations &&
                    message.hallucinations.length > 0 ? (
                      <HallucinationSummary
                        hallucinations={message.hallucinations}
                        onCitationSelect={onCitationSelect}
                      />
                    ) : null}
                    <MessageActions />
                  </div>
                </div>
              ),
            )}

            {isRunning ? (
              <div className="group flex gap-4 py-4 opacity-100 duration-200">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted shadow-sm ring-2 ring-border/30 ring-offset-1 ring-offset-background">
                  <Sparkles className="h-4 w-4 text-foreground" />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{assistantName}</span>
                    <span className="text-xs font-mono tabular-nums text-muted-foreground">
                      {ui.assistantStreaming.toLowerCase()}
                    </span>
                  </div>
                  {currentStepIndex >= 0 ? (
                    <StepTimeline
                      currentStepIndex={currentStepIndex}
                      isStreaming
                      steps={steps}
                    />
                  ) : null}
                  {currentStepIndex >= 2 ? (
                    <RetrievalMeta
                      entities={retrievalEntities}
                      queries={retrievalQueries}
                      retrievalChunks={Math.min(
                        20,
                        Math.max(2, (currentStepIndex + 1) * 2),
                      )}
                      visibleEntityCount={visibleEntityCount}
                      visibleQueryCount={visibleQueryCount}
                    />
                  ) : null}
                  {streamedText ? (
                    <div className="max-w-[78%] rounded-xl border border-border/40 bg-muted/70 px-4 py-3 text-sm leading-relaxed text-foreground shadow-sm">
                      {stripCitationMarkers(streamedText)}
                      <span className="ml-0.5 inline-block h-4 w-1 animate-pulse bg-current" />
                    </div>
                  ) : (
                    <div className="mb-2 inline-flex w-fit items-center gap-2 rounded-full border border-border/50 bg-background/80 px-3 py-1 text-xs text-muted-foreground">
                      <Spinner />
                      {ui.waiting}
                    </div>
                  )}
                </div>
              </div>
            ) : null}
            <div ref={scrollAnchorRef} className="h-px" />
          </div>
        </div>
        {!atBottom ? (
          <button
            type="button"
            onClick={scrollToBottom}
            className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-border/60 bg-background/95 px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-md backdrop-blur-sm transition-all hover:border-primary/50 hover:text-foreground"
          >
            <ArrowDown className="h-3 w-3" />
            {isRunning ? ui.newContent : ui.scrollToBottom}
          </button>
        ) : null}
      </div>

      <footer className="shrink-0 border-t border-border/40 bg-background/70 p-3 backdrop-blur-sm sm:p-5">
        <div className="mx-auto w-full max-w-5xl space-y-2">
          <form
            data-tour="chat-composer"
            className="relative"
            onSubmit={(event) => event.preventDefault()}
          >
            {filterOpen ? (
              <div className="absolute bottom-[calc(100%+0.5rem)] left-0 z-20 w-80 rounded-lg border border-border/60 bg-background p-0 text-xs shadow-xl">
                <div className="flex items-center justify-between border-b border-border/50 px-3 py-2">
                  <span className="font-semibold">
                    Filter by files & folders
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 text-muted-foreground"
                    onClick={() => setFilterOpen(false)}
                    type="button"
                    aria-label="Close filter"
                  >
                    <X className="h-3.5 w-3.5" />
                  </Button>
                </div>
                <div className="max-h-72 space-y-0.5 overflow-y-auto p-2">
                  <button
                    className={cn(
                      'flex w-full cursor-pointer items-center gap-1.5 rounded-md px-2 py-1 text-left transition-colors hover:bg-accent',
                      selectedFolder === ui.papers && 'bg-primary/10',
                    )}
                    onClick={() => setSelectedFolder(ui.papers)}
                    type="button"
                  >
                    <ChevronDown className="h-3 w-3" />
                    <FolderOpen className="h-3.5 w-3.5 text-yellow-500" />
                    <span className="min-w-0 flex-1 truncate text-xs">
                      {ui.papers}
                    </span>
                    {selectedFolder === ui.papers ? (
                      <Check className="h-3 w-3 text-primary" />
                    ) : null}
                  </button>
                  {demoChatConfig.filterFiles.map((file) => (
                    <button
                      key={file}
                      className="flex w-full cursor-pointer items-center gap-1.5 rounded-md px-2 py-1 pl-10 text-left transition-colors hover:bg-accent"
                      type="button"
                    >
                      <FileText className="h-3.5 w-3.5 text-orange-500" />
                      <span className="min-w-0 flex-1 truncate text-xs">
                        {file}
                      </span>
                    </button>
                  ))}
                  {demoChatConfig.filterFolders.map((folder) => (
                    <button
                      key={folder.label}
                      className="flex w-full cursor-not-allowed items-center gap-1.5 rounded-md px-2 py-1 text-left opacity-45"
                      disabled
                      type="button"
                    >
                      <ChevronRight className="h-3 w-3" />
                      <Folder className="h-3.5 w-3.5 text-yellow-500" />
                      <span className="min-w-0 flex-1 truncate text-xs">
                        {folder.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ) : null}
            <div className="flex items-end gap-2 rounded-[1.1rem] border border-border/50 bg-transparent px-2.5 py-1.5 shadow-none transition-colors focus-within:border-primary/20">
              <div className="flex shrink-0 items-center gap-0.5 self-end pb-0.5">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className={cn(
                    'h-8 gap-1.5 px-2.5',
                    selectedFilterCount > 0 && 'text-primary',
                  )}
                  onClick={() => setFilterOpen((open) => !open)}
                >
                  <Filter className="h-3.5 w-3.5" />
                  {selectedFilterCount > 0 ? (
                    <span className="rounded bg-muted px-1 font-mono text-[10px]">
                      {selectedFilterCount}
                    </span>
                  ) : (
                    <span className="hidden text-xs sm:inline">Filter</span>
                  )}
                </Button>
              </div>
              <div className="min-w-0 flex-1 self-stretch">
                <textarea
                  aria-label="Chat message"
                  readOnly
                  data-chat-input
                  value={hasRun ? '' : question}
                  className="min-h-[42px] max-h-[132px] w-full resize-none overflow-hidden border-0 bg-transparent px-1 py-2 text-[15px] leading-6 shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 [field-sizing:content]"
                  rows={1}
                />
              </div>
              <div className="flex shrink-0 items-end gap-1 self-end pl-1 pb-0.5">
                <Button
                  data-demo-tour="send"
                  type="button"
                  size="icon"
                  disabled={hasRun || isRunning}
                  className="h-9 w-9 shrink-0 rounded-full bg-primary text-primary-foreground shadow-sm hover:bg-primary/90"
                  onClick={onRunDemo}
                  aria-label={ui.sendHint}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="mt-1.5 flex items-center justify-between">
              <div className="flex items-center gap-0.5 rounded-lg border border-border/40 bg-muted/30 p-0.5">
                {[
                  [ui.fast, Zap],
                  [ui.balanced, Sparkles],
                  [ui.thorough, Brain],
                ].map(([level, Icon]) => (
                  <button
                    key={String(level)}
                    type="button"
                    aria-label={`${String(level)} mode`}
                    className={cn(
                      'flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-medium transition-all',
                      level === ui.balanced
                        ? 'bg-background text-orange-600 shadow-sm'
                        : 'text-muted-foreground hover:bg-background/50 hover:text-foreground',
                    )}
                  >
                    <Icon className="h-3 w-3" />
                    <span className="hidden sm:inline">{String(level)}</span>
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-muted-foreground/60">
                {ui.enterHint}
              </p>
            </div>
          </form>
        </div>
      </footer>

      <span className="sr-only">Active citation {activeCitation.id}</span>
    </>
  );
}

type ChatPanelProps = {
  activeCitation: DemoCitation;
  assistantName: string;
  currentStepIndex: number;
  hasRun: boolean;
  isRunning: boolean;
  messages: DemoMessage[];
  onCitationSelect: (citation: DemoCitation) => void;
  onRunDemo: () => void;
  question: string;
  retrievalEntities: string[];
  retrievalQueries: string[];
  steps: DemoStep[];
  streamedText: string;
};

export function ChatPanel({
  activeCitation,
  assistantName,
  currentStepIndex,
  hasRun,
  isRunning,
  messages,
  onCitationSelect,
  onRunDemo,
  question,
  retrievalEntities,
  retrievalQueries,
  steps,
  streamedText,
}: ChatPanelProps) {
  return (
    <div className="relative flex h-full min-w-0 flex-col">
      <ChatHeader assistantName={assistantName} />
      <ChatMessages
        activeCitation={activeCitation}
        assistantName={assistantName}
        currentStepIndex={currentStepIndex}
        hasRun={hasRun}
        isRunning={isRunning}
        messages={messages}
        onCitationSelect={onCitationSelect}
        onRunDemo={onRunDemo}
        question={question}
        retrievalEntities={retrievalEntities}
        retrievalQueries={retrievalQueries}
        steps={steps}
        streamedText={streamedText}
      />
    </div>
  );
}
