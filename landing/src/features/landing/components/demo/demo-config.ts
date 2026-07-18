import type { DemoCitation } from "./demo-types";

type DemoPdfLine = {
  content: string;
  entity: string;
  page: number;
  type: string;
};

type DemoChunk = {
  content: string;
  entities: Array<{ text: string; type?: string }>;
  id: string;
  metadata: Record<string, string>;
  pageNumber: number;
  retrievalCount: number;
  type: string;
};

type DemoContent = {
  assistantName: string;
  citations: DemoCitation[];
  document: {
    articleOne: string;
    articleThree: string;
    title: string;
    verifiedClause: string;
  };
  finalAnswer: string;
  language: "en" | "fr";
  question: string;
  reasoning: string;
  retrievalEntities: string[];
  retrievalQueries: string[];
  threads: string[];
};

export type DemoSourcePanelTab = {
  icon: "chunks" | "entities" | "metadata";
  labelKey: "chunks" | "entities" | "metadata";
  value: "chunks" | "entities" | "metadata";
};

type DemoMetadataRow = {
  label?: string;
  labelKey?: keyof DemoMetadataLabels;
  valueKey?: keyof DemoMetadata;
};

type DemoMetadataLabels = {
  pages: string;
  sourceAccess: string;
  sourceFile: string;
  sourceMatch: string;
  sourceParser: string;
};

type DemoMetadata = {
  chunking: string;
  fileName: string;
  mime: string;
  pages: string;
  pipeline: string;
  processing: string;
  sourceAccess: string;
  sourceParser: string;
  sourceScope: string;
};

export type DemoAssistantOption = {
  disabled: boolean;
  label?: string;
  labelKey?: "activeAssistant";
  short: string;
};

export const demoDocumentConfig = {
  emptyDocumentIcon: "file",
  metadataRows: [
    { labelKey: "sourceFile", valueKey: "fileName" },
    { labelKey: "pages", valueKey: "pages" },
    { label: "MIME", valueKey: "mime" },
    { labelKey: "sourceParser", valueKey: "sourceParser" },
    { labelKey: "sourceAccess", valueKey: "sourceAccess" },
  ] satisfies DemoMetadataRow[],
  pdf: {
    totalPages: 15,
    url: "/assets/demo/attention-is-all-you-need.pdf",
  },
  sourcePanelTabs: [
    { icon: "entities", labelKey: "entities", value: "entities" },
    { icon: "metadata", labelKey: "metadata", value: "metadata" },
    { icon: "chunks", labelKey: "chunks", value: "chunks" },
  ] satisfies DemoSourcePanelTab[],
};

export const demoChatConfig = {
  assistants: [
    { disabled: false, labelKey: "activeAssistant", short: "A" },
    { disabled: true, label: "Financial analyst", short: "FA" },
    { disabled: true, label: "Legal reviewer", short: "LR" },
    { disabled: true, label: "Research scout", short: "RS" },
  ] satisfies DemoAssistantOption[],
  filterFiles: [
    "attention-is-all-you-need.pdf",
    "transformer-abstract-notes.md",
  ],
  filterFolders: [
    { disabled: true, label: "Contracts" },
    { disabled: true, label: "Board memos" },
  ],
  userInitials: "CB",
};

export const demoPdfUrl = demoDocumentConfig.pdf.url;
export const demoOrchestrationDelays = [
  520, 1200, 980, 1320, 920, 1260, 1040, 1380,
];

export const demoPdfLines: DemoPdfLine[] = [
  {
    content: "Attention Is All You Need",
    entity: "Attention Is All You Need",
    page: 1,
    type: "title",
  },
  {
    content: "Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit",
    entity: "Ashish Vaswani",
    page: 1,
    type: "authors",
  },
  {
    content:
      "We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely.",
    entity: "attention mechanisms",
    page: 2,
    type: "abstract",
  },
  {
    content:
      "The Transformer allows for significantly more parallelization and can reach a new state of the art in translation quality.",
    entity: "Transformer",
    page: 2,
    type: "abstract",
  },
  {
    content:
      "The dominant sequence transduction models are based on complex recurrent or convolutional neural networks.",
    entity: "sequence transduction",
    page: 2,
    type: "abstract",
  },
];

export const demoChunks: DemoChunk[] = [
  {
    content: "Attention Is All You Need",
    entities: [
      { text: "Attention Is All You Need", type: "document" },
      { text: "Transformer", type: "method" },
    ],
    id: "chunk-title",
    metadata: { section: "title", source: "page_text" },
    pageNumber: 1,
    retrievalCount: 6,
    type: "text",
  },
  {
    content:
      "We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely.",
    entities: [
      { text: "Transformer", type: "architecture" },
      { text: "attention mechanisms", type: "method" },
      { text: "recurrence", type: "architecture" },
      { text: "convolutions", type: "architecture" },
    ],
    id: "chunk-architecture-claim",
    metadata: { section: "abstract", source: "page_text" },
    pageNumber: 2,
    retrievalCount: 8,
    type: "text",
  },
  {
    content: "Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit",
    entities: [
      { text: "Ashish Vaswani", type: "person" },
      { text: "Noam Shazeer", type: "person" },
      { text: "Niki Parmar", type: "person" },
      { text: "Jakob Uszkoreit", type: "person" },
    ],
    id: "chunk-authors",
    metadata: { section: "authors", source: "page_text" },
    pageNumber: 1,
    retrievalCount: 4,
    type: "text",
  },
  {
    content:
      "The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder.",
    entities: [
      { text: "recurrent", type: "architecture" },
      { text: "convolutional neural networks", type: "architecture" },
      { text: "sequence transduction", type: "task" },
    ],
    id: "chunk-sequence-models",
    metadata: { section: "abstract", source: "page_text" },
    pageNumber: 2,
    retrievalCount: 7,
    type: "text",
  },
  {
    content:
      "The Transformer allows for significantly more parallelization and can reach a new state of the art in translation quality.",
    entities: [
      { text: "Transformer", type: "method" },
      { text: "parallelization", type: "property" },
      { text: "translation quality", type: "metric" },
    ],
    id: "chunk-transformer-parallel",
    metadata: { section: "abstract", source: "page_text" },
    pageNumber: 2,
    retrievalCount: 5,
    type: "text",
  },
];

export const demoMetadata: DemoMetadata = {
  fileName: "attention-is-all-you-need.pdf",
  mime: "application/pdf",
  pages: "15",
  sourceAccess: "Secure workspace",
  sourceParser: "pdf text + page preview",
  sourceScope: "API-ingested files, folders, and synced knowledge bases",
  chunking: "Semantic sections, ~512 tokens, 128 overlap",
  processing: "Layout-aware parsing + vector embedding",
  pipeline: "Read → Parse → Embed → Retrieve → Cite → Verify",
};

const sharedCitations: DemoCitation[] = [
  {
    confidence: "98%",
    fileName: "attention-is-all-you-need.pdf",
    highlightText: "Attention Is All You Need",
    id: 1,
    page: 1,
    quote: "Attention Is All You Need",
  },
  {
    confidence: "95%",
    fileName: "attention-is-all-you-need.pdf",
    highlightText:
      "We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely.",
    id: 2,
    page: 2,
    quote:
      "We propose a new simple network architecture, the Transformer, based solely on attention mechanisms...",
  },
  {
    confidence: "91%",
    fileName: "attention-is-all-you-need.pdf",
    highlightText:
      "The Transformer allows for significantly more parallelization and can reach a new state of the art in translation quality.",
    id: 3,
    page: 2,
    quote: "The Transformer allows for significantly more parallelization...",
  },
];

const baseDocument = {
  articleOne: "Attention Is All You Need",
  articleThree:
    "The Transformer allows for significantly more parallelization and can reach a new state of the art in translation quality.",
  title: "Attention Is All You Need",
  verifiedClause:
    "We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely.",
};

const retrievalEntities = [
  "Attention Is All You Need",
  "Transformer",
  "attention mechanisms",
  "recurrence",
  "convolutions",
  "parallelization",
  "translation quality",
];

export function getDemoContent(language?: string): DemoContent {
  const isFrench = language?.startsWith("fr");

  if (isFrench) {
    return {
      assistantName: "Assistant",
      citations: sharedCitations,
      document: baseDocument,
      finalAnswer:
        "Le document ouvert est bien Attention Is All You Need : le titre figure sur la première page [1]. La revendication technique principale est aussi vérifiable dans l'abstract : les auteurs écrivent qu'ils proposent une architecture simple, le Transformer, fondée uniquement sur des mécanismes d'attention et sans récurrence ni convolution [2]. Le passage sur la parallélisation est pertinent pour une note de due diligence technique, car il relie directement le choix d'architecture à un bénéfice opérationnel : le Transformer permet une parallélisation nettement plus importante et atteint un nouvel état de l'art en qualité de traduction [3].",
      language: "fr",
      question:
        "Je prépare une note d'ingénierie. Peux-tu confirmer quel PDF est ouvert, vérifier si la revendication sur le Transformer apparaît vraiment dans l'abstract, et me dire s'il y a une preuve sur la parallélisation ? Cite les passages exacts.",
      reasoning:
        "Je commence par identifier le fichier ouvert et confirmer son titre sur la page de garde. Ensuite je limite la recherche à l'abstract, car la question demande une vérification technique courte plutôt qu'un résumé complet du papier. Je compare les passages récupérés aux formulations de la demande : architecture Transformer, attention seule, absence de récurrence ou convolution, puis bénéfice de parallélisation. Je retiens les extraits qui portent directement ces revendications et je les associe à des citations cliquables pour que chaque phrase importante puisse être contrôlée dans le PDF.",
      retrievalEntities,
      retrievalQueries: [
        "Attention Is All You Need title",
        "Transformer based solely on attention mechanisms",
        "dispensing with recurrence and convolutions",
        "Transformer significantly more parallelization translation quality",
      ],
      threads: ["Transformer paper - diligence"],
    };
  }

  return {
    assistantName: "Assistant",
    citations: sharedCitations,
    document: baseDocument,
    finalAnswer:
      "The open document is Attention Is All You Need: the title appears on page 1 [1]. The core technical claim is verifiable in the abstract, where the authors state that they propose the Transformer, a simple network architecture based solely on attention mechanisms and dispensing with recurrence and convolutions [2]. The parallelization passage is the strongest diligence evidence because it ties the architecture choice to an operational advantage: the Transformer allows significantly more parallelization and reaches a new state of the art in translation quality [3].",
    language: "en",
    question:
      "I'm preparing an engineering memo. Can you confirm which PDF is open, verify whether the Transformer architecture claim is actually in the abstract, and tell me if there is evidence about parallelization? Cite the exact passages.",
    reasoning:
      "I first need to identify the open file and verify the title from the cover page. Then I should stay inside the abstract because the request asks for a short diligence note, not a full paper summary. I am matching the retrieved passages against the technical claims in the prompt: Transformer architecture, attention-only design, no recurrence or convolution, and the claimed parallelization benefit. I will keep only the excerpts that directly support those claims and attach clickable citations so each sentence can be checked in the PDF.",
    retrievalEntities,
    retrievalQueries: [
      "Attention Is All You Need title",
      "Transformer based solely on attention mechanisms",
      "dispensing with recurrence and convolutions",
      "Transformer significantly more parallelization translation quality",
    ],
    threads: ["Transformer paper - diligence"],
  };
}
