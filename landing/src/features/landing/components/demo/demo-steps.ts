import type { getDemoCopy } from './demo-copy';
import type { DemoStep } from './demo-types';

export function buildSteps(copy: ReturnType<typeof getDemoCopy>): DemoStep[] {
  const fr = copy.language === 'fr';
  const stepText = fr
    ? {
        analyze:
          'Décomposer la demande : confirmer la base de valorisation, vérifier la cohérence avec le détail QoE, évaluer la fiabilité du multiple.',
        analyzeTrace:
          "La réponse doit prouver trois choses : (1) l'EBITDA normalisé retenu dans la synthèse, (2) le détail du pont de normalisation, (3) la contradiction avec l'observation des conseils. Chaque point a sa propre source dans le PDF.",
        read: 'Ouvrir le PDF et lire les sections clés : Synthèse exécutive (p.2), Analyse financière (p.4), Quality of Earnings (p.5).',
        readTrace:
          "Lecture ciblée des pages 2, 4 et 5 : la synthèse donne le chiffre de valorisation, le pont de normalisation détaille les retraitements, l'observation des conseils révèle la contradiction. Les pages 3, 6 et 7 sont utiles pour le contexte mais pas pour les preuves demandées.",
        screenshot:
          'Capturer un aperçu de page pour vérifier visuellement la source.',
        screenshotResponse:
          "L'aperçu confirme la page de garde du rapport Projet HELIOS (Cabinet Verrière).",
        screenshotTrace:
          "La page de garde identifie l'émetteur (Cabinet Verrière), l'opération (Projet HELIOS) et la cible (Groupe Méridien Logistique). Cette étape simule la vérification visuelle pour les réponses qui doivent être auditables au-delà du texte extrait.",
        lexical:
          'Rechercher les formulations exactes : EBITDA normalisé, multiple 8,0x, retraitement sous-traitance.',
        lexicalResults:
          'Passages retrouvés et classés : synthèse p.2, pont de normalisation p.5, observation conseils p.5.',
        lexicalTrace:
          "Le chiffre de 14,2 M€ est dans la synthèse p.2 ; le retraitement de 2,4 M€ est dans le tableau p.5 ; la remise en cause par les conseils est dans l'observation p.5. Chaque résultat est conservé avec son numéro de page pour un accès direct.",
        semantic:
          "Faire une seconde recherche sémantique pour retrouver la conclusion et l'écart de valorisation.",
        semanticResults:
          'Passage retrouvé dans la synthèse des risques p.7 : écart de VE de 19,2 M€ selon la qualification du retraitement.',
        semanticTrace:
          "Je conserve le passage de la recommandation (p.7) comme preuve autonome : il quantifie explicitement l'impact de la divergence (19,2 M€ d'écart) et confirme que le comité doit trancher.",
        reviewNote:
          "À 11,8 M€ d'EBITDA normalisé, le même multiple de 8,0x donnerait 94,4 M€, soit un écart de VE d'environ 19,2 M€.",
        generate:
          'Composer une note structurée : chiffre synthèse, détail QoE, contradiction, impact.',
        generateTrace:
          "La réponse finale présente d'abord la base de la synthèse (citation p.2), puis le détail des retraitements (citation p.5), puis l'avis des conseils (citation p.5), et enfin l'impact quantifié (citation p.7). Chaque phrase importante est associée à une citation cliquable.",
        thinking:
          "Règle de rédaction : la question exige une réponse qui compare deux sections du même document. Je dois présenter la synthèse et le détail côte à côte, puis laisser la contradiction parler d'elle-même. Le comité a besoin de voir les deux chiffres (14,2 vs 11,8 M€) et l'impact (19,2 M€) sans interprétation surajoutée. Les citations doivent permettre d'ouvrir chaque page pertinente.",
      }
    : {
        analyze:
          'Breaking down the request: confirm the valuation basis, verify QoE consistency, assess multiple reliability.',
        analyzeTrace:
          "Three separate proofs needed: (1) normalized EBITDA used in the executive summary, (2) detailed EBITDA bridge adjustments, (3) the contradiction in the advisors' observation. Each has its own source page in the PDF.",
        read: 'Opening the uploaded PDF and reading key sections: Executive Summary (p.2), Financial Analysis (p.4), Quality of Earnings (p.5).',
        readTrace:
          "Targeted read of pages 2, 4 and 5: the summary holds the valuation figure, the bridge details the adjustments, the advisors' observation reveals the contradiction. Pages 3, 6 and 7 provide context but not the direct evidence requested.",
        screenshot: 'Capturing page preview for visual verification.',
        screenshotResponse:
          'Visual capture confirms the Projet HELIOS cover page (Cabinet Verrière).',
        screenshotTrace:
          'The cover page identifies the issuer (Cabinet Verrière), the transaction (Projet HELIOS) and the target (Groupe Méridien Logistique). This simulates visual verification for answers that need to be auditable beyond extracted text.',
        lexical:
          'Searching exact wording: normalized EBITDA, 8.0x multiple, subcontracting retreatment.',
        lexicalResults:
          'Retrieved and ranked passages: summary p.2, EBITDA bridge p.5, advisors observation p.5.',
        lexicalTrace:
          "The €14.2M figure is in the executive summary p.2; the €2.4M adjustment is in the bridge table p.5; the advisors' challenge is in the observation p.5. Each result keeps its page number for direct access.",
        semantic:
          'Running a second semantic search to find the conclusion and valuation gap.',
        semanticResults:
          'Retrieved the risk summary passage p.7: EV gap of €19.2M depending on retreatment qualification.',
        semanticTrace:
          'I keep the recommendation passage (p.7) as independent evidence: it explicitly quantifies the divergence impact (€19.2M gap) and confirms the committee must decide.',
        reviewNote:
          'At €11.8M normalized EBITDA, the same 8.0x multiple would give €94.4M, an EV gap of approximately €19.2M.',
        generate:
          'Composing a structured note: summary figure, QoE detail, contradiction, impact.',
        generateTrace:
          "The final answer presents the summary basis first (citation p.2), then the adjustments detail (citation p.5), then the advisors' opinion (citation p.5), and finally the quantified impact (citation p.7). Each important sentence links to a clickable citation.",
        thinking:
          'Drafting rule: the question requires comparing two sections of the same document. Present the summary and the detail side by side, then let the contradiction speak for itself. The committee needs to see both figures (€14.2M vs €11.8M) and the impact (€19.2M) without added interpretation. Citations must open each relevant page.',
      };

  return [
    {
      action: 'analyzing',
      entities: [
        'Projet HELIOS',
        'EBITDA normalisé',
        'retraitement sous-traitance',
      ],
      id: 'intent',
      queries: copy.retrievalQueries,
      reasoning: stepText.analyze,
      trace: stepText.analyzeTrace,
    },
    {
      action: 'readFileContent',
      id: 'read-file',
      reasoning: stepText.read,
      trace: stepText.readTrace,
      toolName: 'readFileContent',
      toolParams: {
        fileName: 'Rapport_DD_Projet_Helios.pdf',
        pageRange: '2,4-5',
      },
      toolResponse: {
        chunks: [
          {
            content:
              "Synthèse exécutive — EBITDA normalisé 2025 : 14,2 M€, multiple 8,0x, valeur d'entreprise 113,6 M€.",
            fileName: 'Rapport_DD_Projet_Helios.pdf',
            pageNumber: 2,
            score: 0.98,
          },
          {
            content:
              "Pont de normalisation de l'EBITDA 2025 — retraitement « sous-traitance logistique ponctuelle » : +2,4 M€, qualifié non récurrent par le management.",
            fileName: 'Rapport_DD_Projet_Helios.pdf',
            pageNumber: 5,
            score: 0.95,
          },
          {
            content:
              "Observation des conseils — les coûts de sous-traitance de 2,4 M€ correspondent à trois contrats pluriannuels reconduits sur 2023-2025. Retraités, l'EBITDA normalisé ressort à 11,8 M€.",
            fileName: 'Rapport_DD_Projet_Helios.pdf',
            pageNumber: 5,
            score: 0.91,
          },
        ],
        count: 3,
        status: 'ok',
      },
    },
    {
      action: 'screenshot',
      id: 'page-screenshot',
      reasoning: stepText.screenshot,
      trace: stepText.screenshotTrace,
      toolName: 'screenshot',
      toolParams: { fileName: 'Rapport_DD_Projet_Helios.pdf', page: 1 },
      toolResponse: {
        chunks: [
          {
            content: stepText.screenshotResponse,
            fileName: 'Rapport_DD_Projet_Helios.pdf',
            metadata: { type: 'screenshot' },
            pageNumber: 1,
            score: 0.94,
            type: 'image',
          },
        ],
        count: 1,
        status: 'ok',
      },
    },
    {
      action: 'searching',
      id: 'lexical-search',
      queries: [
        'EBITDA normalisé 2025 valorisation',
        'retraitement sous-traitance logistique',
      ],
      reasoning: stepText.lexical,
      trace: stepText.lexicalTrace,
    },
    {
      action: 'retrieved',
      chunks: 8,
      id: 'lexical-results',
      reasoning: stepText.lexicalResults,
      trace: stepText.lexicalTrace,
      toolName: 'search',
      toolResponse: {
        chunks: [
          {
            content: copy.document.title,
            fileName: 'Rapport_DD_Projet_Helios.pdf',
            metadata: { section: 'Synthèse exécutive', type: 'text' },
            pageNumber: 2,
            score: 0.91,
          },
          {
            content: copy.document.articleOne,
            fileName: 'Rapport_DD_Projet_Helios.pdf',
            metadata: { section: 'Synthèse exécutive', type: 'text' },
            pageNumber: 2,
            score: 0.89,
          },
          {
            content: copy.document.articleThree,
            fileName: 'Rapport_DD_Projet_Helios.pdf',
            metadata: { section: 'Quality of Earnings', type: 'text' },
            pageNumber: 5,
            score: 0.84,
          },
        ],
        count: 3,
        status: 'ok',
      },
      topScore: 0.91,
    },
    {
      action: 'searching',
      id: 'semantic-search',
      queries: ['impact écart valorisation EBITDA normalisé comité'],
      reasoning: stepText.semantic,
      trace: stepText.semanticTrace,
    },
    {
      action: 'retrieved',
      chunks: 12,
      id: 'semantic-results',
      reasoning: stepText.semanticResults,
      trace: stepText.semanticTrace,
      toolName: 'search',
      toolResponse: {
        chunks: [
          {
            content: copy.document.verifiedClause,
            fileName: 'Rapport_DD_Projet_Helios.pdf',
            metadata: { section: 'Observation des conseils', type: 'text' },
            pageNumber: 5,
            score: 0.86,
          },
          {
            content: stepText.reviewNote,
            fileName: 'Rapport_DD_Projet_Helios.pdf',
            metadata: { section: 'Synthèse des risques', type: 'text' },
            pageNumber: 7,
            score: 0.74,
          },
        ],
        count: 2,
        status: 'ok',
      },
      topScore: 0.86,
    },
    {
      action: 'generating',
      id: 'answer',
      reasoning: stepText.generate,
      trace: stepText.generateTrace,
      thinking: `${copy.reasoning}\n\n${stepText.thinking}`,
    },
  ];
}
