import type { getDemoCopy } from "./demo-copy";
import type { DemoStep } from "./demo-types";

export function buildSteps(copy: ReturnType<typeof getDemoCopy>): DemoStep[] {
  const fr = copy.language === "fr";
  const stepText = fr
    ? {
        analyze:
          "Décomposer la demande, identifier les preuves nécessaires et limiter la réponse au PDF ouvert.",
        analyzeTrace:
          "La réponse doit prouver trois éléments séparés : l'identité du document, la revendication d'architecture et le bénéfice de parallélisation. Je garde ces objectifs séparés pour éviter de réutiliser un même extrait comme preuve de tout.",
        read: "Ouvrir le PDF chargé, lire les premières pages et isoler les passages candidats.",
        readTrace:
          "Lecture ciblée des pages 1 et 2 : le titre sert d'ancrage, l'abstract contient les revendications techniques. Les autres pages ne sont pas nécessaires tant que les preuves demandées sont présentes dans cette fenêtre.",
        screenshot:
          "Capturer un aperçu de page pour vérifier visuellement la source.",
        screenshotResponse:
          "L'aperçu confirme la page de titre du papier Attention Is All You Need.",
        screenshotTrace:
          "Le titre de la page 1 sert d'ancrage avant de citer l'abstract. Cette étape simule la vérification visuelle utilisée quand une réponse doit être auditée au-delà du texte extrait.",
        lexical:
          "Rechercher les formulations exactes du titre et de la revendication Transformer.",
        lexicalResults:
          "Passages retrouvés et classés par utilité : titre, architecture Transformer, puis parallélisation.",
        lexicalTrace:
          "Le titre est sur la page 1 ; la revendication d'architecture est sur la page 2. Les résultats exacts sont conservés avec leur page pour que le clic citation ouvre le bon passage.",
        semantic:
          "Faire une seconde recherche sémantique pour ne pas confondre la preuve d'architecture avec la preuve de parallélisation.",
        semanticResults:
          "Passage retrouvé dans l'abstract sur la parallélisation du Transformer.",
        semanticTrace:
          "Je conserve le passage de parallélisation comme preuve distincte du passage sur l'architecture. Cela rend la note plus défendable : chaque phrase finale pointe vers un extrait précis.",
        reviewNote:
          "The Transformer allows for significantly more parallelization and can reach a new state of the art in translation quality.",
        generate:
          "Composer une note courte avec une citation pour chaque affirmation vérifiable.",
        generateTrace:
          "La réponse finale garde les citations proches des phrases qu'elles justifient, puis ouvre le PDF sur le passage sélectionné.",
        thinking:
          "Règle de rédaction : identifier le document, séparer la revendication sur l'architecture du bénéfice de parallélisation, puis garder chaque phrase importante reliée à sa page. Je dois aussi éviter de sur-vendre le papier : la réponse dit seulement ce que les passages cités prouvent, et laisse l'utilisateur ouvrir le PDF pour vérifier.",
      }
    : {
        analyze:
          "Breaking down the diligence request, required evidence and scope of the open PDF.",
        analyzeTrace:
          "The answer needs three separate proofs: document identity, architecture claim and parallelization benefit. I keep those objectives separate so one retrieved passage is not reused as evidence for every claim.",
        read: "Opening the uploaded PDF fixture, reading the first pages and isolating candidate passages.",
        readTrace:
          "Targeted read of pages 1 and 2: the title anchors the file, while the abstract carries the technical claims. There is no reason to fan out across the full PDF while the requested evidence is in this window.",
        screenshot: "Capturing page preview for visual verification.",
        screenshotResponse:
          "Visual capture confirms the Attention Is All You Need title page.",
        screenshotTrace:
          "The page 1 title anchors the document before abstract claims are cited. This simulates the visual verification path used when an answer needs to be audited beyond extracted text.",
        lexical:
          "Searching exact wording for the title and Transformer architecture claim.",
        lexicalResults:
          "Retrieved and ranked passages for title, Transformer architecture and parallelization.",
        lexicalTrace:
          "The title is on page 1; the architecture claim is on page 2. Exact results are kept with page context so citation clicks can open the right passage.",
        semantic:
          "Running a second semantic search so the architecture evidence is not conflated with the parallelization evidence.",
        semanticResults:
          "Retrieved the abstract passage about Transformer parallelization.",
        semanticTrace:
          "Keep the parallelization passage separate from the architecture claim. That makes the memo defensible: every final sentence points to a precise source excerpt.",
        reviewNote:
          "The Transformer allows for significantly more parallelization and can reach a new state of the art in translation quality.",
        generate:
          "Composing a short diligence note with one citation per checkable claim.",
        generateTrace:
          "The final answer keeps citations close to the claims they support, then opens the PDF on the selected passage.",
        thinking:
          "Drafting rule: identify the document, separate the architecture claim from the parallelization benefit, then keep each important sentence tied to its page. I should not overstate the paper; the answer only says what the cited passages prove and lets the user open the PDF to verify.",
      };

  return [
    {
      action: "analyzing",
      entities: [
        "Attention Is All You Need",
        "Transformer",
        "attention mechanisms",
      ],
      id: "intent",
      queries: copy.retrievalQueries,
      reasoning: stepText.analyze,
      trace: stepText.analyzeTrace,
    },
    {
      action: "readFileContent",
      id: "read-file",
      reasoning: stepText.read,
      trace: stepText.readTrace,
      toolName: "readFileContent",
      toolParams: {
        fileName: "attention-is-all-you-need.pdf",
        pageRange: "1-2",
      },
      toolResponse: {
        chunks: [
          {
            content: "Attention Is All You Need",
            fileName: "attention-is-all-you-need.pdf",
            pageNumber: 1,
            score: 0.98,
          },
          {
            content:
              "We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely.",
            fileName: "attention-is-all-you-need.pdf",
            pageNumber: 2,
            score: 0.95,
          },
          {
            content:
              "The Transformer allows for significantly more parallelization and can reach a new state of the art in translation quality.",
            fileName: "attention-is-all-you-need.pdf",
            pageNumber: 2,
            score: 0.91,
          },
        ],
        count: 3,
        status: "ok",
      },
    },
    {
      action: "screenshot",
      id: "page-screenshot",
      reasoning: stepText.screenshot,
      trace: stepText.screenshotTrace,
      toolName: "screenshot",
      toolParams: { fileName: "attention-is-all-you-need.pdf", page: 1 },
      toolResponse: {
        chunks: [
          {
            content: stepText.screenshotResponse,
            fileName: "attention-is-all-you-need.pdf",
            metadata: { type: "screenshot" },
            pageNumber: 1,
            score: 0.94,
            type: "image",
          },
        ],
        count: 1,
        status: "ok",
      },
    },
    {
      action: "searching",
      id: "lexical-search",
      queries: ["Attention Is All You Need", "Transformer"],
      reasoning: stepText.lexical,
      trace: stepText.lexicalTrace,
    },
    {
      action: "retrieved",
      chunks: 8,
      id: "lexical-results",
      reasoning: stepText.lexicalResults,
      trace: stepText.lexicalTrace,
      toolName: "search",
      toolResponse: {
        chunks: [
          {
            content: copy.document.articleOne,
            fileName: "attention-is-all-you-need.pdf",
            metadata: { section: "title", type: "text" },
            pageNumber: 1,
            score: 0.91,
          },
          {
            content: copy.document.verifiedClause,
            fileName: "attention-is-all-you-need.pdf",
            metadata: { section: "abstract", type: "text" },
            pageNumber: 2,
            score: 0.89,
          },
          {
            content: copy.document.articleThree,
            fileName: "attention-is-all-you-need.pdf",
            metadata: { section: "abstract", type: "text" },
            pageNumber: 2,
            score: 0.84,
          },
        ],
        count: 3,
        status: "ok",
      },
      topScore: 0.91,
    },
    {
      action: "searching",
      id: "semantic-search",
      queries: ["Transformer based solely on attention mechanisms"],
      reasoning: stepText.semantic,
      trace: stepText.semanticTrace,
    },
    {
      action: "retrieved",
      chunks: 12,
      id: "semantic-results",
      reasoning: stepText.semanticResults,
      trace: stepText.semanticTrace,
      toolName: "search",
      toolResponse: {
        chunks: [
          {
            content: copy.document.verifiedClause,
            fileName: "attention-is-all-you-need.pdf",
            metadata: { section: "abstract", type: "text" },
            pageNumber: 2,
            score: 0.86,
          },
          {
            content: stepText.reviewNote,
            fileName: "attention-is-all-you-need.pdf",
            metadata: { section: "abstract", type: "text" },
            pageNumber: 2,
            score: 0.74,
          },
        ],
        count: 2,
        status: "ok",
      },
      topScore: 0.86,
    },
    {
      action: "generating",
      id: "answer",
      reasoning: stepText.generate,
      trace: stepText.generateTrace,
      thinking: `${copy.reasoning}\n\n${stepText.thinking}`,
    },
  ];
}
