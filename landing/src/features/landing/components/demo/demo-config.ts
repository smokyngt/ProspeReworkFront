import type { DemoCitation, DemoHallucination } from './demo-types';

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
  hallucinations?: DemoHallucination[];
  language: 'en' | 'fr';
  question: string;
  reasoning: string;
  retrievalEntities: string[];
  retrievalQueries: string[];
  threads: string[];
};

export type DemoSourcePanelTab = {
  icon: 'chunks' | 'entities' | 'metadata';
  labelKey: 'chunks' | 'entities' | 'metadata';
  value: 'chunks' | 'entities' | 'metadata';
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
  labelKey?: 'activeAssistant';
  short: string;
};

export const demoDocumentConfig = {
  emptyDocumentIcon: 'file',
  metadataRows: [
    { labelKey: 'sourceFile', valueKey: 'fileName' },
    { labelKey: 'pages', valueKey: 'pages' },
    { label: 'MIME', valueKey: 'mime' },
    { labelKey: 'sourceParser', valueKey: 'sourceParser' },
    { labelKey: 'sourceAccess', valueKey: 'sourceAccess' },
  ] satisfies DemoMetadataRow[],
  pdf: {
    totalPages: 7,
    url: '/assets/demo/Rapport_DD_Projet_Helios.pdf',
  },
  sourcePanelTabs: [
    { icon: 'entities', labelKey: 'entities', value: 'entities' },
    { icon: 'metadata', labelKey: 'metadata', value: 'metadata' },
    { icon: 'chunks', labelKey: 'chunks', value: 'chunks' },
  ] satisfies DemoSourcePanelTab[],
};

export const demoChatConfig = {
  assistants: [
    { disabled: false, labelKey: 'activeAssistant', short: 'A' },
    { disabled: true, label: 'Financial analyst', short: 'FA' },
    { disabled: true, label: 'Legal reviewer', short: 'LR' },
    { disabled: true, label: 'Research scout', short: 'RS' },
  ] satisfies DemoAssistantOption[],
  filterFiles: ['Rapport_DD_Projet_Helios.pdf'],
  filterFolders: [
    { disabled: true, label: 'Contracts' },
    { disabled: true, label: 'Board memos' },
  ],
  userInitials: 'CB',
};

export const demoPdfUrl = demoDocumentConfig.pdf.url;
export const demoOrchestrationDelays = [
  520, 1200, 980, 1320, 920, 1260, 1040, 1380,
];

export const demoPdfLines: DemoPdfLine[] = [
  {
    content: 'Rapport de due diligence financière — Projet HELIOS',
    entity: 'Projet HELIOS',
    page: 1,
    type: 'title',
  },
  {
    content: 'Groupe Méridien Logistique SAS',
    entity: 'Groupe Méridien Logistique',
    page: 1,
    type: 'company',
  },
  {
    content:
      "La valorisation indicative repose sur un multiple de 8,0x l'EBITDA normalisé 2025.",
    entity: 'multiple 8,0x',
    page: 2,
    type: 'valuation',
  },
  {
    content: 'EBITDA normalisé 2025 retenu pour la valorisation : 14,2 M€.',
    entity: 'EBITDA normalisé 14,2 M€',
    page: 2,
    type: 'valuation',
  },
  {
    content:
      "Valeur d'entreprise de 113,6 M€ sur la base de l'EBITDA normalisé de 14,2 M€ retenu par le vendeur.",
    entity: 'VE 113,6 M€',
    page: 2,
    type: 'valuation',
  },
  {
    content:
      'Coûts de sous-traitance logistique « ponctuelle » de 2,4 M€ qualifiés non récurrents.',
    entity: 'retraitement 2,4 M€',
    page: 5,
    type: 'retreatment',
  },
  {
    content:
      "Retraités correctement, l'EBITDA normalisé 2025 ressort à 11,8 M€, et non 14,2 M€.",
    entity: 'EBITDA réel 11,8 M€',
    page: 5,
    type: 'retreatment',
  },
  {
    content:
      "À 11,8 M€ d'EBITDA normalisé, le même multiple de 8,0x conduirait à 94,4 M€, soit un écart de VE de 19,2 M€.",
    entity: 'écart VE 19,2 M€',
    page: 7,
    type: 'recommendation',
  },
];

export const demoChunks: DemoChunk[] = [
  {
    content:
      "Synthèse exécutive — EBITDA normalisé 2025 : 14,2 M€, multiple 8,0x, valeur d'entreprise 113,6 M€.",
    entities: [
      { text: 'EBITDA normalisé 14,2 M€', type: 'metric' },
      { text: 'multiple 8,0x', type: 'metric' },
      { text: 'VE 113,6 M€', type: 'metric' },
    ],
    id: 'chunk-synthese',
    metadata: { section: 'Synthèse exécutive', source: 'page_text' },
    pageNumber: 2,
    retrievalCount: 8,
    type: 'text',
  },
  {
    content:
      "Pont de normalisation de l'EBITDA 2025 — retraitement « sous-traitance logistique ponctuelle » : +2,4 M€, qualifié non récurrent par le management.",
    entities: [
      { text: 'sous-traitance logistique', type: 'retreatment' },
      { text: '2,4 M€', type: 'amount' },
      { text: 'non récurrent', type: 'qualification' },
    ],
    id: 'chunk-retraitement',
    metadata: { section: 'Quality of Earnings', source: 'page_text' },
    pageNumber: 5,
    retrievalCount: 8,
    type: 'text',
  },
  {
    content:
      "Observation des conseils — les coûts de sous-traitance de 2,4 M€ correspondent à trois contrats pluriannuels reconduits sur 2023-2025. Retraités, l'EBITDA normalisé ressort à 11,8 M€.",
    entities: [
      { text: 'contrats pluriannuels', type: 'fact' },
      { text: 'EBITDA réel 11,8 M€', type: 'metric' },
      { text: 'récurrent', type: 'qualification' },
    ],
    id: 'chunk-observation',
    metadata: { section: 'Observation des conseils', source: 'page_text' },
    pageNumber: 5,
    retrievalCount: 7,
    type: 'text',
  },
  {
    content:
      'Endettement net normatif : 28,0 M€. Passerelle VE 113,6 M€ − endettement net 28,0 M€ = 85,6 M€ de valeur des titres.',
    entities: [
      { text: 'endettement net 28,0 M€', type: 'metric' },
      { text: 'valeur des titres 85,6 M€', type: 'metric' },
    ],
    id: 'chunk-endettement',
    metadata: { section: 'Endettement net & BFR', source: 'page_text' },
    pageNumber: 6,
    retrievalCount: 5,
    type: 'text',
  },
  {
    content:
      "Recommandation — le comité doit statuer sur la qualification du retraitement de 2,4 M€ : à 11,8 M€ d'EBITDA, le même multiple conduirait à 94,4 M€, soit un écart de VE de 19,2 M€.",
    entities: [
      { text: 'VE 94,4 M€', type: 'metric' },
      { text: 'écart 19,2 M€', type: 'metric' },
      { text: 'recommandation', type: 'action' },
    ],
    id: 'chunk-recommandation',
    metadata: { section: 'Synthèse des risques', source: 'page_text' },
    pageNumber: 7,
    retrievalCount: 6,
    type: 'text',
  },
];

export const demoMetadata: DemoMetadata = {
  fileName: 'Rapport_DD_Projet_Helios.pdf',
  mime: 'application/pdf',
  pages: '7',
  sourceAccess: 'Secure workspace',
  sourceParser: 'pdf text + page preview',
  sourceScope: 'API-ingested files, folders, and synced knowledge bases',
  chunking: 'Semantic sections, ~512 tokens, 128 overlap',
  processing: 'Layout-aware parsing + vector embedding',
  pipeline: 'Read -> Parse -> Embed -> Retrieve -> Cite -> Verify',
};

const sharedCitations: DemoCitation[] = [
  {
    confidence: '98%',
    fileName: 'Rapport_DD_Projet_Helios.pdf',
    highlightText: "multiple de 8,0x l'EBITDA normalisé 2025",
    id: 1,
    page: 2,
    quote:
      "EBITDA normalisé 2025 : 14,2 M€, multiple 8,0x, valeur d'entreprise 113,6 M€.",
  },
  {
    confidence: '95%',
    fileName: 'Rapport_DD_Projet_Helios.pdf',
    highlightText: 'Coûts de sous-traitance logistique « ponctuelle »',
    id: 2,
    page: 5,
    quote:
      'Coûts de sous-traitance logistique « ponctuelle » : 2,4 M€, qualifiés non récurrents par le management.',
  },
  {
    confidence: '91%',
    fileName: 'Rapport_DD_Projet_Helios.pdf',
    highlightText: 'EBITDA normalisé 2025 ressort à 11,8 M€, et non 14,2 M€',
    id: 3,
    page: 5,
    quote:
      "Retraités correctement, l'EBITDA normalisé 2025 ressort à 11,8 M€, et non 14,2 M€.",
  },
];

const baseDocument = {
  articleOne: 'EBITDA normalisé 2025 : 14,2 M€ — Synthèse exécutive p.2',
  articleThree:
    'Retraitement de 2,4 M€ qualifié non récurrent par le management — Quality of Earnings p.5',
  title: 'Rapport de due diligence financière — Projet HELIOS',
  verifiedClause:
    'Les coûts de sous-traitance de 2,4 M€ sont en réalité récurrents (contrats pluriannuels 2023-2025) — Observation des conseils p.5',
};

const retrievalEntities = [
  'EBITDA normalisé 14,2 M€',
  'multiple 8,0x',
  "valeur d'entreprise 113,6 M€",
  'retraitement 2,4 M€',
  'sous-traitance logistique',
  'EBITDA réel 11,8 M€',
  'écart VE 19,2 M€',
];

export function getDemoContent(language?: string): DemoContent {
  const isFrench = language?.startsWith('fr');

  if (isFrench) {
    return {
      assistantName: 'Financial analyst',
      citations: sharedCitations,
      document: baseDocument,
      finalAnswer:
        "La synthèse exécutive (p.2) retient un EBITDA normalisé 2025 de 14,2 M€ appliqué à un multiple de 8,0x, soit une valeur d'entreprise de 113,6 M€ [1]. Le pont de normalisation (section Quality of Earnings, p.5) détaille les retraitements : +0,7 M€ (rémunération dirigeant), +0,6 M€ (honoraires M&A), +2,4 M€ (sous-traitance logistique dite « ponctuelle »), −1,6 M€ (cession d'actifs). L'observation des conseils signale que les 2,4 M€ de sous-traitance correspondent à trois contrats pluriannuels reconduits sans interruption sur 2023-2025, donc de nature récurrente [2]. Retraités correctement, l'EBITDA normalisé ressort à 11,8 M€ et non 14,2 M€ [3]. La base de valorisation de la synthèse (14,2 M€) contredit donc le détail de la section 04. À 11,8 M€, le même multiple de 8,0x donne 94,4 M€, soit un écart de valeur d'entreprise d'environ 19,2 M€. Le chiffre n'est pas fiable tant que le comité n'a pas tranché la qualification du retraitement (p.7).",
      hallucinations: [
        {
          start: 341,
          end: 351,
          reason:
            "Conflit de source : le management qualifie ces coûts de ponctuels, mais l'annexe C montre trois contrats pluriannuels reconduits sur 2023‑2025.",
          score: 0.82,
          citation: sharedCitations[1],
        },
      ],
      language: 'fr',
      question:
        "Peux-tu vérifier l'EBITDA normalisé 2025 retenu dans la synthèse du rapport HELIOS, le comparer au pont de normalisation (section Quality of Earnings), et me dire si le multiple de 8,0x est fiable ? Cite les passages exacts (page et intitulé).",
      reasoning:
        "La question porte sur la cohérence entre la synthèse (p.2) et le détail du Quality of Earnings (p.5). Je relève l'EBITDA normalisé de 14,2 M€ mentionné dans la synthèse avec le multiple de 8,0x, puis je compare avec le pont de normalisation. Je constate une contradiction : le management ajoute 2,4 M€ de sous-traitance logistique en « non récurrent », mais l'annexe C montre que ces contrats sont pluriannuels et reconduits. Je calcule l'impact : EBITDA retraité 11,8 M€ → VE 94,4 M€ au lieu de 113,6 M€, soit un écart de 19,2 M€. Je cite chaque passage avec sa page pour que le comité puisse vérifier.",
      retrievalEntities,
      retrievalQueries: [
        'EBITDA normalisé 2025 valorisation synthèse exécutive',
        'pont de normalisation EBITDA retraitements management',
        'sous-traitance logistique ponctuelle 2,4 M€',
        'observation conseils EBITDA 11,8 M€ écart 19,2 M€',
      ],
      threads: ['Projet HELIOS - due diligence'],
    };
  }

  return {
    assistantName: 'Financial analyst',
    citations: sharedCitations,
    document: baseDocument,
    finalAnswer:
      "The executive summary (p.2) uses a normalized 2025 EBITDA of €14.2M applied to an 8.0x multiple, giving an enterprise value of €113.6M [1]. The EBITDA bridge (Quality of Earnings section, p.5) details the adjustments: +€0.7M (director excess remuneration), +€0.6M (M&A advisory fees), +€2.4M ('one-off' logistics subcontracting), −€1.6M (asset disposal gain). The advisors' note states that the €2.4M subcontracting cost corresponds to three multi-year contracts renewed without interruption over 2023-2025, making them recurring in nature [2]. Adjusted correctly, normalized EBITDA stands at €11.8M, not €14.2M [3]. The valuation basis in the summary (€14.2M) therefore contradicts the detailed section 04. At €11.8M, the same 8.0x multiple yields €94.4M, an enterprise value gap of approximately €19.2M. The figure is not reliable until the committee rules on the adjustment classification (p.7).",
    hallucinations: [
      {
        start: 293,
        end: 302,
        reason:
          "Source conflict: management labels these costs as 'one-off', but Appendix C shows three multi-year contracts renewed over 2023‑2025.",
        score: 0.82,
        citation: sharedCitations[1],
      },
    ],
    language: 'en',
    question:
      'Can you verify the normalized 2025 EBITDA used in the HELIOS report summary, compare it with the EBITDA bridge (Quality of Earnings section), and tell me if the 8.0x multiple is reliable? Cite exact passages (page and heading).',
    reasoning:
      "The question is about consistency between the executive summary (p.2) and the Quality of Earnings detail (p.5). I extract the €14.2M normalized EBITDA from the summary with the 8.0x multiple, then compare against the bridge. I find a contradiction: management adds back €2.4M of logistics subcontracting as 'non-recurring', but Appendix C shows these are multi-year renewed contracts. I calculate the impact: restated EBITDA €11.8M → EV €94.4M instead of €113.6M, a gap of €19.2M. I cite each passage with its page so the committee can verify.",
    retrievalEntities,
    retrievalQueries: [
      'normalized EBITDA 2025 valuation executive summary',
      'EBITDA bridge management adjustments normalization',
      'logistics subcontracting 2.4M one-off retreatment',
      'advisors observation EBITDA 11.8M gap 19.2M',
    ],
    threads: ['Projet HELIOS - due diligence'],
  };
}
