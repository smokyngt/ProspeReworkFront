(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/features/landing/components/footer/footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LandingFooter",
    ()=>LandingFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const footerGroups = [
    {
        titleKey: "footer.product",
        links: [
            {
                labelKey: "footer.links.workflow",
                href: "#workflow"
            },
            {
                labelKey: "footer.links.features",
                href: "#features"
            },
            {
                labelKey: "footer.links.deployment",
                href: "#products"
            },
            {
                labelKey: "footer.links.sovereignty",
                href: "#sovereignty"
            },
            {
                labelKey: "footer.links.architecture",
                href: "#architecture"
            }
        ]
    },
    {
        title: {
            en: "Resources",
            fr: "Ressources"
        },
        links: [
            {
                labelKey: "footer.links.blog",
                href: "/blog"
            },
            {
                labelKey: "footer.links.faq",
                href: "#faq"
            }
        ]
    },
    {
        title: {
            en: "Company",
            fr: "Entreprise"
        },
        links: [
            {
                labelKey: "footer.links.team",
                href: "/team"
            },
            {
                labelKey: "footer.links.jobs",
                href: "/jobs"
            },
            {
                labelKey: "footer.links.contact",
                href: "#contact"
            }
        ]
    },
    {
        titleKey: "footer.legal",
        links: [
            {
                labelKey: "footer.links.privacy",
                href: "/privacy"
            },
            {
                labelKey: "footer.links.terms",
                href: "/terms"
            },
            {
                labelKey: "footer.links.rgpd",
                href: "/gdpr"
            }
        ]
    }
];
const partners = [
    {
        src: "/assets/partners/pepite-beelyss.png",
        alt: "Pépite BEELYS Lyon Saint-Étienne",
        label: "Pépite BEELYS - Lyon Saint-Étienne",
        href: "https://www.univ-st-etienne.fr/fr/entrepreneuriat/beelys.html"
    },
    {
        src: "/assets/partners/french-tech.png",
        alt: "La French Tech",
        label: "La French Tech",
        href: "https://lafrenchtech.gouv.fr/"
    }
];
function LandingFooter() {
    _s();
    const { i18n, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const lang = i18n.language.startsWith("fr") ? "fr" : "en";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "relative z-10 border-t border-[var(--pf-border)]",
        style: {
            background: "var(--pf-bg-card)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-[1360px] border-x border-[var(--pf-border)] px-5 py-12 sm:px-8 sm:py-16 lg:px-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-[1.35fr_repeat(4,1fr)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-2 lg:col-span-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "inline-flex items-center border border-[var(--pf-border)] px-3 py-2.5",
                                    style: {
                                        background: "var(--pf-bg-card-2)"
                                    },
                                    "aria-label": "Prosperify home",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/assets/brand/logo-full.png",
                                        alt: "",
                                        width: 148,
                                        height: 80,
                                        className: "h-[26px] w-auto object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/footer/footer.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/landing/components/footer/footer.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-[13px] leading-relaxed text-[var(--pf-fg-muted)]",
                                    children: t("footer.tagline")
                                }, void 0, false, {
                                    fileName: "[project]/src/features/landing/components/footer/footer.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#contact",
                                    className: "mt-5 inline-flex bg-[#FF6A13] px-4 py-2.5 text-[13px] font-semibold text-[#080808] transition-colors hover:bg-[#ff8232]",
                                    children: t("footer.links.contact")
                                }, void 0, false, {
                                    fileName: "[project]/src/features/landing/components/footer/footer.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/landing/components/footer/footer.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        footerGroups.map((group)=>{
                            var _group_title, _group_title1;
                            var _group_title_lang, _group_titleKey, _ref;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--pf-fg-dim)]",
                                        children: group.titleKey ? t(group.titleKey) : (_group_title_lang = (_group_title = group.title) === null || _group_title === void 0 ? void 0 : _group_title[lang]) !== null && _group_title_lang !== void 0 ? _group_title_lang : ""
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/footer/footer.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2.5",
                                        children: group.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: link.href,
                                                    className: "text-[13px] text-[var(--pf-fg-muted)] transition-colors hover:text-[#FF6A13]",
                                                    children: t(link.labelKey)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/landing/components/footer/footer.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 21
                                                }, this)
                                            }, link.href, false, {
                                                fileName: "[project]/src/features/landing/components/footer/footer.tsx",
                                                lineNumber: 110,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/footer/footer.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, (_ref = (_group_titleKey = group.titleKey) !== null && _group_titleKey !== void 0 ? _group_titleKey : (_group_title1 = group.title) === null || _group_title1 === void 0 ? void 0 : _group_title1.en) !== null && _ref !== void 0 ? _ref : "footer-group", true, {
                                fileName: "[project]/src/features/landing/components/footer/footer.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this);
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/landing/components/footer/footer.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-10 border-t border-[var(--pf-border)] pt-8 sm:mt-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-6 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--pf-fg-dim)]",
                            children: t("footer.partnersTitle")
                        }, void 0, false, {
                            fileName: "[project]/src/features/landing/components/footer/footer.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center justify-center gap-10",
                            children: partners.map((partner)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "group flex flex-col items-center gap-2",
                                    href: partner.href,
                                    rel: "noopener noreferrer",
                                    target: "_blank",
                                    "aria-label": partner.label,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: partner.src,
                                        alt: "",
                                        width: 120,
                                        height: 48,
                                        className: "h-10 w-auto object-contain opacity-60 grayscale transition-opacity duration-300 group-hover:opacity-100"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/footer/footer.tsx",
                                        lineNumber: 138,
                                        columnNumber: 17
                                    }, this)
                                }, partner.src, false, {
                                    fileName: "[project]/src/features/landing/components/footer/footer.tsx",
                                    lineNumber: 130,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/features/landing/components/footer/footer.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/landing/components/footer/footer.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 flex flex-col items-center justify-between gap-4 border-t border-[var(--pf-border)] pt-6 sm:mt-10 sm:flex-row sm:pt-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-xs text-[var(--pf-fg-dim)] sm:text-left",
                            children: t("footer.copyright")
                        }, void 0, false, {
                            fileName: "[project]/src/features/landing/components/footer/footer.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://www.linkedin.com/company/prosperify-ai/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "font-mono text-xs text-[var(--pf-fg-muted)] transition-colors hover:text-[#FF6A13]",
                            "aria-label": "Prosperify LinkedIn",
                            children: "LinkedIn ↗"
                        }, void 0, false, {
                            fileName: "[project]/src/features/landing/components/footer/footer.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/landing/components/footer/footer.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/landing/components/footer/footer.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/landing/components/footer/footer.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s(LandingFooter, "tesxYUfym1EdybWre/Q68xlYjtY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = LandingFooter;
var _c;
__turbopack_context__.k.register(_c, "LandingFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/landing/components/footer/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$footer$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/landing/components/footer/footer.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/locales/en/translation.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"meta\":{\"title\":\"Prosperify - Verifiable document intelligence for sensitive data\",\"description\":\"Query sensitive corpora with sourced answers, governed access and deployment modes adapted to your perimeter.\"},\"hero\":{\"badge\":\"Document intelligence for sensitive data\",\"titleLine1\":\"Turn confidential\",\"titleHighlight\":\"documents\",\"titleLine2\":\"into sourced answers.\",\"subtitle\":\"Prosperify helps teams find, compare and verify information across sensitive corpora, with visible sources, governed access and a clear trust perimeter.\",\"primaryCta\":\"Request a demo\",\"secondaryCta\":\"See the workflow\",\"demoCaption\":\"\",\"stats\":{\"citations\":\"answers linked to consulted sources\",\"deployment\":\"deployment modes: cloud, hybrid, local\",\"sources\":\"PDF, Word, Excel, CSV, JSON and business corpora\"},\"trust\":{\"sources\":\"Cited sources\",\"permissions\":\"Governed access\",\"deployment\":\"Cloud, hybrid or local\",\"audit\":\"Sources and usage tracked\",\"sovereignty\":\"Cloud, hybrid or on-prem\"}},\"workflow\":{\"badge\":\"HOW IT WORKS\",\"title\":\"Verifiable answers\",\"titleHighlight\":\"without losing control\",\"titleSuffix\":\"\",\"subtitle\":\"A simple sequence: approved sources, scoped access, verifiable answers.\"},\"workflowTabs\":{\"create\":{\"title\":\"Connect\",\"heading\":\"Prepare only approved sources\",\"subtitle\":\"KYC files, due-diligence reports and sanctions lists — indexed into dedicated stores.\",\"assistantNameLabel\":\"Assistant name\",\"assistantNameValue\":\"Transaction & Legal Assistant\",\"documentsLabel\":\"Verified corpus\",\"documentsTransactionsName\":\"KYC_Verdi.xlsx\",\"button\":\"Connect corpus\",\"sourceStatus\":\"Approved\",\"pipelineLabel\":\"Sources\",\"readyBadge\":\"Ready to query\",\"checkParsed\":\"Structure detected\",\"checkIndexed\":\"Passages retrievable\",\"checkScoped\":\"Scope applied\",\"sources\":[\"Signed contracts\",\"Client files\",\"Internal procedures\"],\"pipeline\":[\"Read\",\"Prepare\",\"Index\"]},\"unify\":{\"title\":\"Scope\",\"subtitle\":\"The agent fans the query out across your KYC stores and returns a cited result, down to the exact source.\",\"dropHere\":\"Add authorized documents\",\"browse\":\"Browse files\",\"heading\":\"One question, one sourced and traceable answer\",\"formatsInfo\":\"PDF, Word, Excel, CSV, JSON, reports, contracts...\",\"filetypePdf\":\"PDF\",\"filetypeCsv\":\"CSV\",\"filetypeDocx\":\"DOCX\",\"filetypeJson\":\"JSON\",\"rolesLabel\":\"Mission\",\"scopeLabel\":\"Corpus\",\"matrixCorpus\":\"Corpus\",\"allowedLabel\":\"Configured assistants\",\"policyNote\":\"Segmentation happens at assistant level: corpus, mission and limits are defined before use.\",\"rules\":[\"Visible sources\",\"Scoped answers\",\"Search + citations\"],\"scopes\":[\"Verdi contracts\",\"KYC files\",\"HR procedures\"],\"assistants\":[{\"name\":\"Legal\",\"role\":\"Clauses and contracts\",\"corpus\":\"Contracts\",\"action\":\"Compare\"},{\"name\":\"Compliance\",\"role\":\"KYC and sensitive records\",\"corpus\":\"KYC\",\"action\":\"Verify\"},{\"name\":\"HR\",\"role\":\"Internal procedures\",\"corpus\":\"Procedures\",\"action\":\"Answer\"}]},\"chat\":{\"title\":\"Query\",\"assistantName\":\"Every access is logged and governed\",\"searchPlaceholder\":\"Search...\",\"newChat\":\"New Chat\",\"botWelcome\":\"Immutable audit log, role-based access control, zero raw data exposed.\",\"userQuestion\":\"What is the term of the Verdi contract?\",\"sourcesLabel\":\"Sources used\",\"answer\":{\"prefix\":\"Source\",\"middle\":\"initial term:\",\"highlight\":\"three years\",\"suffix\":\"Renewal requires a written agreement.\"},\"inputPlaceholder\":\"Ask for a verification...\"}},\"cookie\":{\"accept\":\"Accept all\",\"learn\":\"Learn more\",\"message\":\"This site uses cookies for analytics. You can choose which categories to accept.\",\"reject\":\"Reject all\"},\"contact\":{\"badge\":\"CONTACT\",\"titleLine1\":\"See how Prosperify works\",\"titleHighlight\":\"on enterprise documents\",\"subtitle\":\"Send a short note or create a calendar invite with Prosperify already added as a guest.\",\"meeting\":{\"heading\":\"Schedule a working session\",\"description\":\"Prefer a live discussion? Open a pre-filled Google Calendar event with Prosperify already added as a guest.\",\"cta\":\"Open Google Calendar\",\"note\":\"When you save or send the event, Prosperify is included on the invitation. Add Google Meet from the calendar event before sending if it is not enabled by default.\",\"title\":\"Prosperify deployment discussion\",\"details\":\"Discuss document scope, security requirements, deployment model and next steps with Prosperify.\",\"location\":\"Google Meet\"},\"form\":{\"namePlaceholder\":\"Your full name\",\"companyPlaceholder\":\"Your company name\",\"emailPlaceholder\":\"Your email\",\"phonePlaceholder\":\"Phone (optional)\",\"subjectPlaceholder\":\"Select a subject\",\"subjectInformation\":\"Request a demo\",\"subjectPartnership\":\"Frame a document pilot\",\"subjectOther\":\"Assess a sovereign deployment\",\"subjectApi\":\"Discuss an API integration\",\"subjectVirtualPartner\":\"Partnership / virtual coworker\",\"messagePlaceholder\":\"Your message\",\"submit\":\"Send request\",\"statusSending\":\"⏳ Sending...\",\"statusSuccess\":\"✅ Message sent!\",\"statusFixErrors\":\"❌ Please correct the errors above.\",\"statusUnexpected\":\"❌ Unexpected error.\",\"statusSendError\":\"❌ Sending error.\"}},\"aiChat\":{\"sidebar\":{\"history\":\"History\"},\"conversations\":[\"Verdi contract\",\"Q4 Budget\",\"HR Procedures\",\"Monthly report\"],\"openDocumentFull\":\"Open Contrat_Verdi.pdf (page 10)\",\"openDocumentShort\":\"Contrat_Verdi.pdf (page 10)\",\"pdf\":{\"contractNameSecondary\":\"Q4_Financial_Report.pdf\",\"title\":\"Verdi Contract.pdf\"}},\"products\":{\"badge\":\"DEPLOYMENT\",\"titlePrefix\":\"Deploy with the\",\"titleMiddle\":\"right level\",\"titleHighlight\":\"of control\",\"subtitle\":\"Three deployment modes to match the right level of control, integration and operations.\",\"offers\":[{\"badge\":\"\",\"title\":\"Dedicated Cloud\",\"descriptionSegments\":[],\"features\":[\"High-performance dedicated infrastructure\",\"Guaranteed security and compliance\",\"Automatic maintenance and updates\",\"Instant scalability\"]},{\"badge\":\"\",\"title\":\"Hybrid\",\"descriptionSegments\":[],\"features\":[\"Your data stays on your infrastructure\",\"AI model hosted and maintained by us\",\"Maximum regulatory compliance\",\"Full control over your information\"]},{\"badge\":\"MAXIMUM SECURITY\",\"title\":\"100% Local\",\"descriptionSegments\":[],\"features\":[\"Deployment on your infrastructure\",\"Total data sovereignty\",\"No external dependency\",\"Maximum customization\"]}]},\"features\":{\"badge\":\"CAPABILITIES\",\"title\":\"Document intelligence\",\"titleHighlight\":\"that stays sourced and governed\",\"subtitle\":\"\",\"items\":{\"precision\":{\"shortTitle\":\"Sourced answers\",\"title\":\"Sourced and reviewable answers\",\"subtitle\":\"Sentence-level citations\",\"description\":\"Each answer keeps the link to the excerpts used so teams can review, audit and validate results against the source material.\"},\"coverage\":{\"shortTitle\":\"Hybrid search\",\"title\":\"Hybrid search across document corpora\",\"subtitle\":\"Semantic, lexical, visual and contextual\",\"description\":\"Prosperify combines semantic search, keywords, document context and visual signals to retrieve useful passages across heterogeneous corpora.\"},\"performance\":{\"shortTitle\":\"Reliable synthesis\",\"title\":\"Synthesis framed by your sources\",\"subtitle\":\"Search, compare, extract\",\"description\":\"Prosperify Agent helps teams summarize, compare clauses and extract key information from your document stores.\"},\"governance\":{\"shortTitle\":\"Controlled access\",\"title\":\"Access controlled by role and store\",\"subtitle\":\"Each user in the right perimeter\",\"description\":\"Access can be limited by role, team, confidentiality level, store or authorized corpus.\"},\"orchestration\":{\"shortTitle\":\"Review Workflow\",\"title\":\"A review workflow for business teams\",\"subtitle\":\"Search, answer, verify\",\"description\":\"Prosperify keeps retrieved passages, citations and answer context visible so teams can review important answers before using them.\"},\"differentiation\":{\"shortTitle\":\"Sovereignty\",\"title\":\"Data sovereignty\",\"subtitle\":\"Data in a defined trust perimeter\",\"description\":\"Dedicated, hybrid or local deployment, with data isolation and no training of general models on client corpora.\"}},\"deployment\":{\"dedicated\":{\"title\":\"Dedicated Cloud\",\"line1\":\"Instance dedicated to your organization\",\"line2\":\"Security controls and review support\",\"line3\":\"Managed maintenance and updates\",\"line4\":\"Capacity adjusted to the perimeter\"},\"hybrid\":{\"title\":\"Hybrid\",\"line1\":\"Sensitive data inside your perimeter\",\"line2\":\"Private connectors when needed\",\"line3\":\"Support for internal reviews\",\"line4\":\"Controlled information flows\"},\"local\":{\"title\":\"Local deployment\",\"badge\":\"REINFORCED CONTROL\",\"line1\":\"Deployment on your infrastructure\",\"line2\":\"Documents and operations inside your perimeter\",\"line3\":\"External dependencies limited by scope\",\"line4\":\"Runbooks adapted to your operations\"}}},\"sovereignty\":{\"badge\":\"SECURITY & GOVERNANCE\",\"titlePrefix\":\"Keep data\",\"titleHighlight\":\"protected in a dedicated instance\",\"titleSuffix\":\"from document to answer\",\"subtitle\":\"\",\"mainCard\":{\"titleLine1\":\"A single-tenant architecture\",\"titleLine2\":\"\",\"description\":\"Each client gets an isolated perimeter for documents, stores, permissions and usage traces.\",\"chips\":[\"Corpora\",\"Permissions\",\"Sources\"]},\"cloud\":{\"title\":\"Dedicated instance\",\"description\":\"Each organization runs in its own environment, separating data, processing and sensitive operations.\",\"chips\":[\"Single-tenant\",\"Isolated\",\"Dedicated\"]},\"encryption\":{\"title\":\"Key management system\",\"description\":\"Key management protects documents and metadata stored in the data layer.\",\"chips\":[\"Stored data\",\"Protection\",\"Control\"]},\"kubernetes\":{\"title\":\"Controlled access\",\"description\":\"Access is limited by role, store, corpus and usage so each team stays within its perimeter.\",\"chips\":[\"Roles\",\"Assistants\",\"Scopes\"]},\"dataProtection\":{\"title\":\"Monitoring and audit\",\"description\":\"Operational signals help understand usage, diagnose incidents and review sourced answers.\",\"chips\":[\"Usage\",\"Audit\",\"Review\"]},\"supervision\":{\"title\":\"Deployment matched to your perimeter\",\"description\":\"Dedicated cloud, hybrid or local: the selected mode aligns with confidentiality and operating requirements.\",\"badges\":[\"Dedicated cloud\",\"Hybrid\",\"Local\"],\"chips\":[\"Dedicated cloud\",\"Hybrid\",\"Local\"]}},\"integration\":{\"badge\":\"INTEGRATION\",\"titlePrefix\":\"A document layer\",\"titleHighlight\":\"above\",\"titleSuffix\":\"your existing tools\",\"subtitle\":\"Prosperify can be introduced progressively on top of existing sources so authorized corpora become queryable, governed and reviewable.\",\"steps\":[{\"title\":\"Scoping\",\"description\":\"Clarify the use case, identify the corpus and frame access rules.\"},{\"title\":\"Pilot ingestion\",\"description\":\"Prepare documents, make sources retrievable and test first queries.\"},{\"title\":\"Configuration\",\"description\":\"Configure pilot users, verify access and prepare scenarios.\"},{\"title\":\"Business validation\",\"description\":\"Review answer quality, identify limits and decide next steps.\"},{\"title\":\"Production and extension\",\"description\":\"Track usage, supervise operations and define the expansion path.\"}]},\"architecture\":{\"titlePrefix\":\"An architecture designed for\",\"titleHighlight\":\"document trust\",\"subtitle\":\"A clear chain for moving from sensitive documents to sourced, reviewable and controllable answers.\",\"steps\":[{\"title\":\"Authorized corpora\",\"description\":\"Bring useful documents into a controlled space without forcing a full tooling rebuild.\"},{\"title\":\"Automatic content analysis\",\"description\":\"Texts, tables, pages and metadata are prepared so each document becomes easier to query.\"},{\"title\":\"Structured information\",\"description\":\"Content is organized around titles, clauses, articles, appendices, versions and key elements.\"},{\"title\":\"Governed search\",\"description\":\"Users retrieve relevant passages through hybrid search that combines meaning, exact terms, context and visual signals when the document supports them.\"},{\"title\":\"Answers with sources\",\"description\":\"Prosperify selects useful excerpts and generates structured answers with references for review.\"},{\"title\":\"Limit verification\",\"description\":\"Answers can surface uncertainty or elements that require human validation.\"},{\"title\":\"Monitoring and iteration\",\"description\":\"Usage, answer quality and evolution needs can be followed over time.\"}]},\"technical\":{\"badge\":\"DOCUMENT CHAIN\",\"title\":\"A readable chain built for\",\"titleHighlight\":\"evidence\",\"subtitle\":\"From added document to cited answer, each step preserves the link back to the source.\",\"footnote\":\"Sources, access and verification preserved at each step\",\"steps\":{\"ingest\":{\"title\":\"Authorized corpus\",\"body\":\"Documents and metadata enter a defined perimeter before use.\",\"metric\":\"Clear use case // Framed corpus\"},\"parse\":{\"title\":\"Preparation\",\"body\":\"Text, tables and pages are prepared while preserving useful context.\",\"metric\":\"Structure preserved // Sources prepared\"},\"embed\":{\"title\":\"Indexing\",\"body\":\"Passages are chunked and indexed for hybrid search.\",\"metric\":\"Isolated corpus // Governed access\"},\"retrieve\":{\"title\":\"Hybrid search\",\"body\":\"Semantic and lexical retrieval work together to find useful passages.\",\"metric\":\"Semantic + lexical search\"},\"cite\":{\"title\":\"Citations\",\"body\":\"Claims stay tied to reviewable excerpts.\",\"metric\":\"Answer linked to sources\"},\"verify\":{\"title\":\"Review\",\"body\":\"Sources, access and quality signals remain available for human review.\",\"metric\":\"Review-ready evidence\"}}},\"faq\":{\"badge\":\"FAQ\",\"titleLine1\":\"Have\",\"titleHighlight\":\"questions\",\"titleLine2\":\"? We have answers.\",\"subtitle\":\"Key answers about sources, security, deployment and document governance with Prosperify.\",\"items\":[{\"question\":\"Does the AI continuously learn from my data?\",\"answer\":\"No. Client corpora are not used to train general models. They are used to generate sourced answers inside the agreed project perimeter.\"},{\"question\":\"Where are documents hosted?\",\"answer\":\"It depends on the selected model: dedicated cloud, hybrid architecture or local deployment. The trust perimeter is defined with the client around security, confidentiality and operational constraints.\"},{\"question\":\"Does Prosperify replace experts?\",\"answer\":\"No. Prosperify helps automate document search, synthesis, extraction and comparison. Decisions, validation and interpretation remain with business experts.\"},{\"question\":\"How are answers verified?\",\"answer\":\"Answers are generated from selected document excerpts and linked back to the sources used. Insufficiently supported statements can be surfaced to support human review.\"},{\"question\":\"Can access be limited by role, store or corpus?\",\"answer\":\"Yes. Access can be governed by role, store, corpus, user or confidentiality level. Out-of-scope operations are refused according to configured rules.\"},{\"question\":\"Do we need to rebuild the information system?\",\"answer\":\"No. Prosperify can be added as a document intelligence layer on top of existing systems. Integration can start with one corpus, one store and one business use case before expanding.\"},{\"question\":\"Which formats are supported?\",\"answer\":\"Prosperify is designed for structured and unstructured documents, including PDF, Word, Excel, CSV, JSON and other business corpora depending on project scope.\"},{\"question\":\"Which deployment modes are possible?\",\"answer\":\"Three approaches are possible: dedicated cloud, hybrid or local. The choice depends on confidentiality level, infrastructure constraints and sovereignty needs.\"}]},\"team\":{\"badge\":\"Team\",\"titlePrefix\":\"The team behind\",\"titleHighlight\":\"Prosperify\",\"subtitle\":\"A focused product and engineering team building document AI for organizations that work with sensitive information.\"},\"jobs\":{\"badge\":\"Jobs\",\"titlePrefix\":\"Build trusted\",\"titleHighlight\":\"document AI\",\"subtitle\":\"Open roles and hiring updates from Prosperify. We keep the team small, technical, and close to real customer problems.\",\"apply\":\"Apply\",\"emptyTitle\":\"No open role right now\",\"emptyDescription\":\"We are not hiring for a specific seat today, but strong infrastructure, product, and applied AI profiles can still reach out.\",\"viewAll\":\"View all roles\"},\"footer\":{\"tagline\":\"Query your documents with verifiable answers.\",\"product\":\"Product\",\"support\":\"Support\",\"legal\":\"Legal\",\"links\":{\"home\":\"Home\",\"overview\":\"Overview\",\"workflow\":\"Workflow\",\"deployment\":\"Deployment\",\"blog\":\"Blog\",\"team\":\"Team\",\"jobs\":\"Jobs\",\"faq\":\"FAQ\",\"contact\":\"Contact\",\"features\":\"Features\",\"sovereignty\":\"Sovereignty\",\"integration\":\"Integration\",\"architecture\":\"Architecture\",\"privacy\":\"Privacy\",\"terms\":\"Terms\",\"rgpd\":\"GDPR\"},\"copyright\":\"© 2025 Prosperify. All rights reserved.\",\"partnersTitle\":\"Support & Partners\"},\"roadmap\":{\"metaTitle\":\"Roadmap - Prosperify\",\"metaDescription\":\"Discover Prosperify's roadmap and upcoming work in sourced document intelligence.\",\"items\":[{\"date\":\"06/14/2024\",\"titlePrefix\":\"Start of the\",\"titleHighlight\":\"Prosperify\",\"lead\":\"Official launch of Prosperify, with a simple idea: make enterprise document search easier to verify and use.\",\"descriptionSegments\":[{\"text\":\"This milestone marks the birth of an ambitious project built around a single vision: enabling organizations to \"},{\"text\":\"make better use of their document knowledge\",\"emphasis\":true},{\"text\":\" by reducing information silos and making sources easier to retrieve through a \"},{\"text\":\"smart document search technology\",\"emphasis\":true},{\"text\":\".\"}],\"imageAlt\":\"Prosperify (logo, early stage)\",\"imageSrc\":\"/assets/brand/logo-mark.png\",\"imageVariant\":\"brandMark\"},{\"date\":\"09/26/2024\",\"titlePrefix\":\"Contact with\",\"titleHighlight\":\"Orpi\",\"lead\":\"First discussion with Orpi to explore a potential collaboration.\",\"description\":\"A meeting dedicated to understanding the barriers related to data exploitation in French mid-sized companies, and to analysing the impact of information fragmentation on missed business opportunities.\",\"imageAlt\":\"Orpi\",\"imageSrc\":\"/assets/partners/orpi.webp\",\"imageVariant\":\"partnerSmall\"},{\"date\":\"10/03/2024\",\"titlePrefix\":\"Design review with\",\"titleHighlight\":\"ESA\",\"lead\":\"Meeting with the European Space Agency for a first design review.\",\"descriptionSegments\":[{\"text\":\"A discussion focused on understanding the \"},{\"text\":\"security standards\",\"emphasis\":true},{\"text\":\" and \"},{\"text\":\"sovereignty requirements\",\"emphasis\":true},{\"text\":\" demanded by such agencies, while exploring their interest in a \"},{\"text\":\"document search technology\",\"emphasis\":true},{\"text\":\" adapted to their specific needs.\"}],\"imageAlt\":\"ESA\",\"imageSrc\":\"/assets/partners/esa.png\",\"imageVariant\":\"partnerMedium\"},{\"date\":\"01/02/2025\",\"title\":\"Joining Pépite France\",\"lead\":\"Prosperify joins the Pépite France network to support student innovation.\",\"imageAlt\":\"Pépite France\",\"imageSrc\":\"/assets/partners/pepite-beelyss.png\",\"imageVariant\":\"partnerLarge\"},{\"date\":\"01/04/2025\",\"titlePrefix\":\"Meeting with\",\"titleHighlight\":\"TUBA\",\"lead\":\"Discussion with the TUBA ecosystem around urban innovation and new digital uses.\",\"descriptionSegments\":[{\"text\":\"This meeting made it possible to explore the \"},{\"text\":\"challenges of leveraging data in urban environments\",\"emphasis\":true},{\"text\":\" and to identify opportunities offered by Prosperify in a context of \"},{\"text\":\"territorial innovation\",\"emphasis\":true},{\"text\":\". A key moment to understand how our technology can address the challenges of \"},{\"text\":\"information centralization\",\"emphasis\":true},{\"text\":\" and \"},{\"text\":\"data valorization\",\"emphasis\":true},{\"text\":\" for local stakeholders.\"}],\"imageAlt\":\"TUBA\",\"imageSrc\":\"/assets/partners/tuba.png\",\"imageVariant\":\"partnerWide\"},{\"date\":\"02/17/2025\",\"titlePrefix\":\"Contact with\",\"titleHighlight\":\"AXA\",\"lead\":\"First discussion with AXA about a potential strategic collaboration.\",\"descriptionSegments\":[{\"text\":\"A two-step meeting: first, an analysis of the \"},{\"text\":\"barriers related to document search\",\"emphasis\":true},{\"text\":\" in large groups, as well as of the \"},{\"text\":\"tools currently in use\",\"emphasis\":true},{\"text\":\". Then, a \"},{\"text\":\"presentation of Prosperify\",\"emphasis\":true},{\"text\":\", its mission and the \"},{\"text\":\"technology used\",\"emphasis\":true},{\"text\":\" to address these challenges.\"}],\"imageAlt\":\"AXA\",\"imageSrc\":\"/assets/partners/axa.png\",\"imageVariant\":\"partnerMedium\"},{\"date\":\"05/12/2025\",\"titlePrefix\":\"Joining\",\"titleHighlight\":\"La French Tech\",\"lead\":\"Prosperify joins La French Tech to become part of a national innovation ecosystem.\",\"descriptionSegments\":[{\"text\":\"This integration marks a new milestone in Prosperify's development as a \"},{\"text\":\"member start-up\",\"emphasis\":true},{\"text\":\". It opens access to an \"},{\"text\":\"active ecosystem of young companies\",\"emphasis\":true},{\"text\":\", opening opportunities for synergies, partnerships and visibility within the French innovation network.\"}],\"imageAlt\":\"La French Tech\",\"imageSrc\":\"/assets/partners/french-tech.png\",\"imageVariant\":\"partnerLarge\"},{\"date\":\"08/2025\",\"titlePrefix\":\"Official launch of\",\"titleHighlight\":\"Prosperify\",\"lead\":\"Go-to-market of the solution after several months of design, testing and ecosystem discussions.\",\"descriptionSegments\":[{\"text\":\"The launch makes the vision concrete: offering companies a \"},{\"text\":\"sovereign document assistant\",\"emphasis\":true},{\"text\":\" capable of \"},{\"text\":\"centralizing\",\"emphasis\":true},{\"text\":\" and \"},{\"text\":\"simplifying access to data\",\"emphasis\":true},{\"text\":\", with visible sources, governed access and a clear security perimeter.\"}],\"imageAlt\":\"Prosperify (launch)\",\"imageSrc\":\"/assets/brand/logo-full.png\",\"imageVariant\":\"brandFull\"}]}}"));}),
"[project]/src/locales/fr/translation.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"meta\":{\"title\":\"Prosperify - Intelligence documentaire vérifiable pour données sensibles\",\"description\":\"Interrogez vos corpus sensibles avec des réponses sourcées, des accès gouvernés et des modes de déploiement adaptés à votre périmètre.\"},\"hero\":{\"badge\":\"Intelligence documentaire pour données sensibles\",\"titleLine1\":\"Transformez vos documents\",\"titleHighlight\":\"confidentiels\",\"titleLine2\":\"en réponses sourcées.\",\"subtitle\":\"Prosperify aide les équipes à retrouver, comparer et vérifier l'information dans leurs corpus sensibles, avec des sources visibles, des accès gouvernés et un périmètre de confiance clair.\",\"primaryCta\":\"Demander une démo\",\"secondaryCta\":\"Voir le workflow\",\"demoCaption\":\"\",\"stats\":{\"citations\":\"réponses reliées aux sources consultées\",\"deployment\":\"modes de déploiement : cloud, hybride, local\",\"sources\":\"PDF, Word, Excel, CSV, JSON et corpus métier\"},\"trust\":{\"sources\":\"Sources citées\",\"permissions\":\"Accès gouvernés\",\"deployment\":\"Cloud, hybride ou local\",\"audit\":\"Sources et usage suivis\",\"sovereignty\":\"Cloud, hybride ou sur site\"}},\"workflow\":{\"badge\":\"WORKFLOW\",\"title\":\"Des réponses vérifiables\",\"titleHighlight\":\"sans perdre le contrôle\",\"titleSuffix\":\"\",\"subtitle\":\"Une séquence simple : sources validées, accès cadrés, réponse vérifiable.\"},\"workflowTabs\":{\"create\":{\"title\":\"Connecter\",\"heading\":\"Préparez uniquement les sources validées\",\"subtitle\":\"Dossiers KYC, rapports de due diligence et listes de sanctions — indexés dans des stores dédiés.\",\"assistantNameLabel\":\"Assistant cible\",\"assistantNameValue\":\"Assistant Juridique & Patrimonial\",\"documentsLabel\":\"Corpus vérifié\",\"documentsTransactionsName\":\"KYC_Verdi.xlsx\",\"button\":\"Connecter le corpus\",\"sourceStatus\":\"Validé\",\"pipelineLabel\":\"Sources\",\"readyBadge\":\"Prêt à interroger\",\"checkParsed\":\"Structure détectée\",\"checkIndexed\":\"Passages retrouvables\",\"checkScoped\":\"Périmètre appliqué\",\"sources\":[\"Contrats signés\",\"Dossiers clients\",\"Procédures internes\"],\"pipeline\":[\"Lire\",\"Préparer\",\"Indexer\"]},\"unify\":{\"title\":\"Cadrer\",\"subtitle\":\"L'agent distribue la requête sur vos stores KYC et retourne un résultat cité, avec sa source exacte.\",\"dropHere\":\"Ajoutez les documents autorisés\",\"browse\":\"Parcourir les fichiers\",\"heading\":\"Une question, une réponse sourcée et traçable\",\"formatsInfo\":\"PDF, Word, Excel, CSV, JSON, rapports, contrats...\",\"filetypePdf\":\"PDF\",\"filetypeCsv\":\"CSV\",\"filetypeDocx\":\"DOCX\",\"filetypeJson\":\"JSON\",\"rolesLabel\":\"Mission\",\"scopeLabel\":\"Corpus\",\"matrixCorpus\":\"Corpus\",\"allowedLabel\":\"Assistants configurés\",\"policyNote\":\"La segmentation se fait au niveau de l'assistant : corpus, mission et limites sont définis avant usage.\",\"rules\":[\"Sources visibles\",\"Réponses cadrées\",\"Recherche + citations\"],\"scopes\":[\"Contrats Verdi\",\"Dossiers KYC\",\"Procédures RH\"],\"assistants\":[{\"name\":\"Juridique\",\"role\":\"Clauses et contrats\",\"corpus\":\"Contrats\",\"action\":\"Comparer\"},{\"name\":\"Conformité\",\"role\":\"KYC et pièces sensibles\",\"corpus\":\"KYC\",\"action\":\"Vérifier\"},{\"name\":\"RH\",\"role\":\"Procédures internes\",\"corpus\":\"Procédures\",\"action\":\"Répondre\"}]},\"chat\":{\"title\":\"Interroger\",\"assistantName\":\"Chaque accès est enregistré et gouverné\",\"searchPlaceholder\":\"Rechercher...\",\"newChat\":\"Nouveau Chat\",\"botWelcome\":\"Journal d'audit immuable, contrôle d'accès par rôle, zéro donnée brute exposée.\",\"userQuestion\":\"Quelle est la durée du contrat Verdi ?\",\"sourcesLabel\":\"Sources utilisées\",\"answer\":{\"prefix\":\"Source\",\"middle\":\"durée initiale :\",\"highlight\":\"trois ans\",\"suffix\":\"Le renouvellement exige un accord écrit.\"},\"inputPlaceholder\":\"Demander une vérification...\"}},\"cookie\":{\"accept\":\"Tout accepter\",\"learn\":\"En savoir plus\",\"message\":\"Ce site utilise des cookies à des fins d'analyse. Vous pouvez choisir les catégories à accepter.\",\"reject\":\"Tout refuser\"},\"contact\":{\"badge\":\"CONTACT\",\"titleLine1\":\"Voyez Prosperify en action\",\"titleHighlight\":\"sur des documents entreprise\",\"subtitle\":\"Envoyez une note courte ou créez une invitation calendrier avec Prosperify déjà ajouté en invité.\",\"meeting\":{\"heading\":\"Planifier une session de travail\",\"description\":\"Vous préférez un échange direct ? Ouvrez un événement Google Calendar prérempli avec Prosperify déjà ajouté en invité.\",\"cta\":\"Ouvrir Google Calendar\",\"note\":\"Quand vous enregistrez ou envoyez l'événement, Prosperify est inclus dans l'invitation. Ajoutez Google Meet depuis l'événement si ce n'est pas activé par défaut.\",\"title\":\"Discussion de déploiement Prosperify\",\"details\":\"Échanger sur le périmètre documentaire, les exigences de sécurité, le modèle de déploiement et les prochaines étapes avec Prosperify.\",\"location\":\"Google Meet\"},\"form\":{\"namePlaceholder\":\"Votre nom complet\",\"companyPlaceholder\":\"Nom de votre entreprise\",\"emailPlaceholder\":\"Votre email\",\"phonePlaceholder\":\"Téléphone (optionnel)\",\"subjectPlaceholder\":\"Sélectionnez l'objet\",\"subjectInformation\":\"Demander une démonstration\",\"subjectPartnership\":\"Cadrer un pilote documentaire\",\"subjectOther\":\"Évaluer un déploiement souverain\",\"subjectApi\":\"Discuter d'une intégration API\",\"subjectVirtualPartner\":\"Partenariat / collaborateur virtuel\",\"messagePlaceholder\":\"Votre message\",\"submit\":\"Envoyer ma demande\",\"statusSending\":\"⏳ Envoi en cours...\",\"statusSuccess\":\"✅ Message envoyé !\",\"statusFixErrors\":\"❌ Merci de corriger les erreurs ci-dessus.\",\"statusUnexpected\":\"❌ Erreur inattendue.\",\"statusSendError\":\"❌ Erreur d'envoi.\"}},\"aiChat\":{\"sidebar\":{\"history\":\"Historique\"},\"conversations\":[\"Contrat Verdi\",\"Budget T4\",\"Procédures RH\",\"Rapport mensuel\"],\"openDocumentFull\":\"Ouvrir Contrat_Verdi.pdf (page 10)\",\"openDocumentShort\":\"Contrat_Verdi.pdf (page 10)\",\"pdf\":{\"contractNameSecondary\":\"Rapport_Financier_T4.pdf\",\"title\":\"Contrat Verdi.pdf\"}},\"products\":{\"badge\":\"NOS OFFRES\",\"titlePrefix\":\"Une solution,\",\"titleMiddle\":\"trois niveaux de\",\"titleHighlight\":\"contrôle\",\"subtitle\":\"Trois modes de déploiement pour choisir le bon niveau de contrôle, d'intégration et d'exploitation.\",\"offers\":[{\"badge\":\"\",\"title\":\"Cloud Dédié\",\"descriptionSegments\":[],\"features\":[\"Infrastructure dédiée haute performance\",\"Sécurité et conformité garanties\",\"Maintenance et mises à jour automatiques\",\"Scalabilité instantanée\"]},{\"badge\":\"\",\"title\":\"Hybride\",\"descriptionSegments\":[],\"features\":[\"Vos données restent sur votre infrastructure\",\"Modèle IA hébergé et maintenu par nos soins\",\"Conformité réglementaire maximale\",\"Contrôle total de vos informations\"]},{\"badge\":\"SÉCURITÉ MAXIMALE\",\"title\":\"100% Local\",\"descriptionSegments\":[],\"features\":[\"Déploiement sur votre infrastructure\",\"Souveraineté totale des données\",\"Aucune dépendance externe\",\"Personnalisation maximale\"]}]},\"features\":{\"badge\":\"FONCTIONNALITÉS\",\"title\":\"Une intelligence documentaire\",\"titleHighlight\":\"sourcée, gouvernée et vérifiable\",\"subtitle\":\"\",\"items\":{\"precision\":{\"shortTitle\":\"Réponses sourcées\",\"title\":\"Réponses sourcées et vérifiables\",\"subtitle\":\"Citations phrase par phrase\",\"description\":\"Chaque réponse conserve le lien avec les extraits utilisés afin de faciliter la revue, l'audit et la validation métier.\"},\"coverage\":{\"shortTitle\":\"Recherche hybride\",\"title\":\"Recherche hybride dans tous vos documents\",\"subtitle\":\"Sémantique, lexicale, visuelle et contextuelle\",\"description\":\"Prosperify combine recherche sémantique, mots-clés, contexte documentaire et signaux visuels pour retrouver les passages utiles dans des corpus hétérogènes.\"},\"performance\":{\"shortTitle\":\"Synthèses fiables\",\"title\":\"Synthèses cadrées par vos sources\",\"subtitle\":\"Recherche, comparaison, extraction\",\"description\":\"Prosperify Agent aide vos équipes à synthétiser, comparer des clauses ou extraire des informations clés à partir de vos stores documentaires.\"},\"governance\":{\"shortTitle\":\"Accès contrôlés\",\"title\":\"Accès contrôlés par rôle et par store\",\"subtitle\":\"Chaque utilisateur dans le bon périmètre\",\"description\":\"Les accès peuvent être limités selon le rôle, le service, le niveau de confidentialité, le store ou le corpus autorisé.\"},\"orchestration\":{\"shortTitle\":\"Revue métier\",\"title\":\"Un workflow de revue pour les équipes métier\",\"subtitle\":\"Recherche, réponse, vérification\",\"description\":\"Prosperify garde les passages retrouvés, les citations et le contexte visibles afin d'aider les équipes à relire les réponses importantes avant usage.\"},\"differentiation\":{\"shortTitle\":\"Souveraineté\",\"title\":\"Souveraineté des données\",\"subtitle\":\"Données dans un périmètre de confiance\",\"description\":\"Déploiement dédié, hybride ou local, avec isolation des données et sans entraînement de modèles généraux sur les corpus clients.\"}},\"deployment\":{\"dedicated\":{\"title\":\"Cloud Dédié\",\"line1\":\"Instance dédiée à votre organisation\",\"line2\":\"Contrôles de sécurité et support de revue\",\"line3\":\"Maintenance et mises à jour gérées\",\"line4\":\"Capacité ajustable selon le périmètre\"},\"hybrid\":{\"title\":\"Hybride\",\"line1\":\"Données sensibles dans votre périmètre\",\"line2\":\"Connecteurs privés selon besoin\",\"line3\":\"Support pour vos revues internes\",\"line4\":\"Flux d'information contrôlés\"},\"local\":{\"title\":\"Déploiement local\",\"badge\":\"CONTRÔLE RENFORCÉ\",\"line1\":\"Déploiement sur votre infrastructure\",\"line2\":\"Documents et opérations dans votre périmètre\",\"line3\":\"Dépendances externes limitées selon le périmètre\",\"line4\":\"Runbooks adaptés à vos opérations\"}}},\"sovereignty\":{\"badge\":\"SÉCURITÉ & GOUVERNANCE\",\"titlePrefix\":\"Vos données\",\"titleHighlight\":\"protégées en instance dédiée\",\"titleSuffix\":\"du document à la réponse\",\"subtitle\":\"\",\"mainCard\":{\"titleLine1\":\"Une architecture single-tenant\",\"titleLine2\":\"\",\"description\":\"Chaque client dispose d'un périmètre isolé pour les documents, les stores, les droits et les traces d'usage.\",\"chips\":[\"Corpus\",\"Droits\",\"Sources\"]},\"cloud\":{\"title\":\"Instance dédiée\",\"description\":\"Un environnement propre à chaque organisation sépare les données, les traitements et les opérations sensibles.\",\"chips\":[\"Single-tenant\",\"Isolé\",\"Dédié\"]},\"encryption\":{\"title\":\"Système de gestion des clés\",\"description\":\"La gestion des clés protège les documents et métadonnées stockés dans la couche données.\",\"chips\":[\"Données stockées\",\"Protection\",\"Contrôle\"]},\"kubernetes\":{\"title\":\"Accès maîtrisés\",\"description\":\"Les accès sont limités par rôle, store, corpus et usage afin que chaque équipe reste dans son périmètre.\",\"chips\":[\"Rôles\",\"Assistants\",\"Scopes\"]},\"dataProtection\":{\"title\":\"Suivi et audit\",\"description\":\"Les éléments de suivi aident à comprendre l'usage, diagnostiquer les incidents et examiner les réponses sourcées.\",\"chips\":[\"Usage\",\"Audit\",\"Revue\"]},\"supervision\":{\"title\":\"Déploiement adapté au périmètre\",\"description\":\"Cloud dédié, hybride ou local : le mode retenu s'aligne sur vos exigences de confidentialité et d'exploitation.\",\"badges\":[\"Cloud dédié\",\"Hybride\",\"Local\"],\"chips\":[\"Cloud dédié\",\"Hybride\",\"Local\"]}},\"integration\":{\"badge\":\"INTÉGRATION\",\"titlePrefix\":\"Une couche\",\"titleHighlight\":\"documentaire\",\"titleSuffix\":\"au-dessus de vos outils\",\"subtitle\":\"Prosperify s'ajoute progressivement à vos sources existantes pour rendre les corpus autorisés interrogeables, gouvernés et vérifiables.\",\"steps\":[{\"title\":\"Cadrage\",\"description\":\"Cas d'usage clarifié, corpus identifié, règles d'accès cadrées.\"},{\"title\":\"Ingestion pilote\",\"description\":\"Documents préparés, sources retrouvables, premières requêtes testées.\"},{\"title\":\"Configuration\",\"description\":\"Utilisateurs pilotes configurés, accès vérifiés, scénarios prêts.\"},{\"title\":\"Validation métier\",\"description\":\"Qualité des réponses relue, limites identifiées, arbitrages réalisés.\"},{\"title\":\"Production & extension\",\"description\":\"Usages suivis, supervision active, trajectoire d'extension définie.\"}]},\"architecture\":{\"titlePrefix\":\"Une architecture pensée pour la\",\"titleHighlight\":\"confiance documentaire\",\"subtitle\":\"Une chaîne claire pour passer de documents sensibles à des réponses sourcées, relisibles et contrôlables.\",\"steps\":[{\"title\":\"Corpus autorisés\",\"description\":\"Rassemblez les documents utiles dans un espace contrôlé, sans imposer une refonte complète de vos outils.\"},{\"title\":\"Contenu analysé automatiquement\",\"description\":\"Les textes, tableaux, pages et métadonnées sont préparés pour rendre chaque document plus facile à interroger.\"},{\"title\":\"Informations structurées\",\"description\":\"Les contenus sont organisés selon leur logique : titres, clauses, articles, annexes, versions et éléments clés.\"},{\"title\":\"Recherche gouvernée\",\"description\":\"Les utilisateurs retrouvent les passages pertinents grâce à une recherche hybride qui combine sens, termes exacts, contexte et éléments visuels lorsque le document s'y prête.\"},{\"title\":\"Réponses avec sources\",\"description\":\"Prosperify sélectionne les extraits utiles et génère des réponses structurées, accompagnées des références nécessaires à la vérification.\"},{\"title\":\"Vérification des limites\",\"description\":\"Les réponses peuvent signaler les zones d'incertitude ou les éléments qui nécessitent une validation humaine.\"},{\"title\":\"Suivi et amélioration continue\",\"description\":\"Les usages, la qualité des réponses et les besoins d'évolution peuvent être suivis pour améliorer le service dans le temps.\"}]},\"technical\":{\"badge\":\"CHAÎNE DOCUMENTAIRE\",\"title\":\"Une chaîne lisible, conçue pour la\",\"titleHighlight\":\"preuve\",\"subtitle\":\"Du document ajouté à la réponse citée, chaque étape conserve le lien avec la source.\",\"footnote\":\"Sources, accès et vérification conservés à chaque étape\",\"steps\":{\"ingest\":{\"title\":\"Corpus autorisé\",\"body\":\"Documents et métadonnées rejoignent un périmètre défini avant usage.\",\"metric\":\"Cas d'usage clair // Corpus cadré\"},\"parse\":{\"title\":\"Préparation\",\"body\":\"Textes, tableaux et pages sont préparés en conservant le contexte utile.\",\"metric\":\"Structure conservée // Sources préparées\"},\"embed\":{\"title\":\"Indexation\",\"body\":\"Les passages sont découpés et indexés pour la recherche hybride.\",\"metric\":\"Corpus isolé // Accès gouvernés\"},\"retrieve\":{\"title\":\"Recherche hybride\",\"body\":\"Recherche sémantique et lexicale travaillent ensemble pour retrouver les passages utiles.\",\"metric\":\"Recherche sémantique + lexicale\"},\"cite\":{\"title\":\"Citations\",\"body\":\"Les affirmations restent reliées aux extraits consultables.\",\"metric\":\"Réponse reliée aux sources\"},\"verify\":{\"title\":\"Revue\",\"body\":\"Les sources, accès et signaux de qualité restent disponibles pour l'examen humain.\",\"metric\":\"Éléments utiles pour la revue\"}}},\"faq\":{\"badge\":\"FAQ\",\"titleLine1\":\"Questions\",\"titleHighlight\":\"fréquentes\",\"titleLine2\":\"\",\"subtitle\":\"Les réponses essentielles sur les sources, la sécurité, le déploiement et la gouvernance documentaire avec Prosperify.\",\"items\":[{\"question\":\"Mes données servent-elles à entraîner des modèles ?\",\"answer\":\"Non. Les corpus clients ne sont pas utilisés pour entraîner les modèles. Prosperify interroge vos documents dans un périmètre dédié afin de produire des réponses sourcées, sans réutiliser votre capital documentaire.\"},{\"question\":\"Où sont hébergées les données ?\",\"answer\":\"Cela dépend du mode retenu : cloud dédié, architecture hybride ou déploiement local. Le périmètre de confiance est défini avec le client selon ses contraintes de sécurité, de confidentialité et d'exploitation.\"},{\"question\":\"Prosperify remplace-t-il les experts ?\",\"answer\":\"Non. Prosperify automatise la recherche, la synthèse, l'extraction et la comparaison documentaire. Les décisions, validations et interprétations restent portées par les experts métiers.\"},{\"question\":\"Comment les réponses sont-elles vérifiées ?\",\"answer\":\"Les réponses sont générées à partir d'extraits documentaires retenus, puis reliées aux sources utilisées. Les affirmations insuffisamment étayées peuvent être signalées afin de faciliter la revue humaine.\"},{\"question\":\"Peut-on limiter l'accès par rôle, store ou corpus ?\",\"answer\":\"Oui. Les accès peuvent être gouvernés par rôle, store, corpus, utilisateur ou niveau de confidentialité. Les opérations hors périmètre sont refusées selon les règles configurées.\"},{\"question\":\"Faut-il refondre le système d'information ?\",\"answer\":\"Non. Prosperify s'ajoute comme couche d'intelligence documentaire au-dessus des systèmes existants. L'intégration peut commencer avec un corpus, un store et un cas métier avant extension.\"},{\"question\":\"Quels formats sont pris en charge ?\",\"answer\":\"Prosperify est conçu pour traiter des documents structurés et non structurés, notamment PDF, Word, Excel, CSV, JSON et autres corpus métier selon le périmètre du projet.\"},{\"question\":\"Quels modes de déploiement sont possibles ?\",\"answer\":\"Trois approches sont possibles : cloud dédié, hybride ou local. Le choix dépend du niveau de confidentialité, des contraintes d'infrastructure et du besoin de souveraineté.\"}]},\"team\":{\"badge\":\"Équipe\",\"titlePrefix\":\"L'équipe derrière\",\"titleHighlight\":\"Prosperify\",\"subtitle\":\"Une équipe produit et ingénierie concentrée sur l'IA documentaire pour les organisations qui manipulent des informations sensibles.\"},\"jobs\":{\"badge\":\"Recrutement\",\"titlePrefix\":\"Construire l'IA documentaire\",\"titleHighlight\":\"de confiance\",\"subtitle\":\"Postes ouverts et actualités recrutement de Prosperify. Nous gardons une équipe resserrée, technique et proche des problèmes clients.\",\"apply\":\"Candidater\",\"emptyTitle\":\"Aucun poste ouvert pour le moment\",\"emptyDescription\":\"Nous ne recrutons pas sur un poste précis aujourd'hui, mais les profils infrastructure, produit et IA appliquée peuvent nous écrire.\",\"viewAll\":\"Voir les postes\"},\"footer\":{\"tagline\":\"Interrogez vos documents avec des réponses vérifiables.\",\"product\":\"Produit\",\"support\":\"Support\",\"legal\":\"Légal\",\"links\":{\"home\":\"Accueil\",\"overview\":\"Aperçu\",\"workflow\":\"Workflow\",\"deployment\":\"Déploiement\",\"blog\":\"Blog\",\"team\":\"Équipe\",\"jobs\":\"Recrutement\",\"faq\":\"FAQ\",\"contact\":\"Contact\",\"features\":\"Fonctionnalités\",\"sovereignty\":\"Souveraineté\",\"integration\":\"Intégration\",\"architecture\":\"Architecture\",\"privacy\":\"Confidentialité\",\"terms\":\"Conditions\",\"rgpd\":\"RGPD\"},\"copyright\":\"© 2025 Prosperify. Tous droits réservés.\",\"partnersTitle\":\"Accompagnement & Partenaires\"},\"roadmap\":{\"metaTitle\":\"Roadmap - Prosperify\",\"metaDescription\":\"Découvrez la feuille de route de Prosperify et nos prochaines évolutions en intelligence documentaire sourcée.\",\"items\":[{\"date\":\"14/06/2024\",\"titlePrefix\":\"Début du projet\",\"titleHighlight\":\"Prosperify\",\"lead\":\"Lancement officiel de Prosperify, avec une idée simple : rendre la recherche documentaire en entreprise plus exploitable et vérifiable.\",\"descriptionSegments\":[{\"text\":\"Cette étape marque la naissance d'un projet construit autour d'une vision : aider les organisations à \"},{\"text\":\"mieux exploiter leurs données documentaires\",\"emphasis\":true},{\"text\":\" en réduisant les silos d'information et en rendant les sources plus faciles à retrouver grâce à une \"},{\"text\":\"technologie de recherche documentaire intelligente\",\"emphasis\":true},{\"text\":\".\"}],\"imageAlt\":\"Prosperify (logo historique)\",\"imageSrc\":\"/assets/brand/logo-mark.png\",\"imageVariant\":\"brandMark\"},{\"date\":\"26/09/2024\",\"titlePrefix\":\"Contact avec\",\"titleHighlight\":\"Orpi\",\"lead\":\"Premier échange avec Orpi pour explorer une potentielle collaboration.\",\"description\":\"Rendez-vous dédié à la compréhension des barrages liés à l'exploitation des données dans les ETI françaises, ainsi qu'à l'analyse de l'impact de la fragmentation de l'information sur les opportunités commerciales manquées.\",\"imageAlt\":\"Orpi\",\"imageSrc\":\"/assets/partners/orpi.webp\",\"imageVariant\":\"partnerSmall\"},{\"date\":\"03/10/2024\",\"titlePrefix\":\"Revue de design avec\",\"titleHighlight\":\"ESA\",\"lead\":\"Rendez-vous avec l'Agence Spatiale Européenne pour une première revue de design.\",\"descriptionSegments\":[{\"text\":\"Rencontre axée sur la compréhension des \"},{\"text\":\"standards de sécurité\",\"emphasis\":true},{\"text\":\" et de \"},{\"text\":\"souveraineté\",\"emphasis\":true},{\"text\":\" exigés par ce type d'agences, tout en explorant leur intérêt pour une \"},{\"text\":\"technologie de recherche documentaire\",\"emphasis\":true},{\"text\":\" adaptée à leurs besoins spécifiques.\"}],\"imageAlt\":\"ESA\",\"imageSrc\":\"/assets/partners/esa.png\",\"imageVariant\":\"partnerMedium\"},{\"date\":\"02/01/2025\",\"title\":\"Intégration Pépite France\",\"lead\":\"Prosperify rejoint le réseau Pépite France pour soutenir l'innovation étudiante.\",\"imageAlt\":\"Pépite France\",\"imageSrc\":\"/assets/partners/pepite-beelyss.png\",\"imageVariant\":\"partnerLarge\"},{\"date\":\"04/01/2025\",\"titlePrefix\":\"Rencontre avec\",\"titleHighlight\":\"TUBA\",\"lead\":\"Échange avec l'écosystème TUBA autour de l'innovation urbaine et des nouveaux usages numériques.\",\"descriptionSegments\":[{\"text\":\"Cette rencontre a permis d'explorer les \"},{\"text\":\"défis liés à l'exploitation des données en milieu urbain\",\"emphasis\":true},{\"text\":\" et d'identifier les opportunités offertes par Prosperify dans un contexte d'\"},{\"text\":\"innovation territoriale\",\"emphasis\":true},{\"text\":\". Un moment clé pour comprendre comment notre technologie peut répondre aux enjeux de \"},{\"text\":\"centralisation de l'information\",\"emphasis\":true},{\"text\":\" et de \"},{\"text\":\"valorisation des données\",\"emphasis\":true},{\"text\":\" au service des acteurs locaux.\"}],\"imageAlt\":\"TUBA\",\"imageSrc\":\"/assets/partners/tuba.png\",\"imageVariant\":\"partnerWide\"},{\"date\":\"17/02/2025\",\"titlePrefix\":\"Contact avec\",\"titleHighlight\":\"AXA\",\"lead\":\"Premier échange avec AXA autour d'une potentielle collaboration stratégique.\",\"descriptionSegments\":[{\"text\":\"Rencontre en deux phases : d'abord, une analyse des \"},{\"text\":\"barrages liés à l'exploitation de la recherche documentaire\",\"emphasis\":true},{\"text\":\" dans les grands groupes, ainsi que des \"},{\"text\":\"outils actuellement utilisés\",\"emphasis\":true},{\"text\":\". Ensuite, une \"},{\"text\":\"présentation de Prosperify\",\"emphasis\":true},{\"text\":\", de sa mission et de la \"},{\"text\":\"technologie employée\",\"emphasis\":true},{\"text\":\" pour répondre à ces enjeux.\"}],\"imageAlt\":\"AXA\",\"imageSrc\":\"/assets/partners/axa.png\",\"imageVariant\":\"partnerMedium\"},{\"date\":\"12/05/2025\",\"titlePrefix\":\"Intégration\",\"titleHighlight\":\"La French Tech\",\"lead\":\"Prosperify rejoint La French Tech afin de s'inscrire dans un écosystème national d'innovation.\",\"descriptionSegments\":[{\"text\":\"Cette intégration marque une nouvelle étape dans le développement de Prosperify en tant que \"},{\"text\":\"start-up membre\",\"emphasis\":true},{\"text\":\". Elle ouvre l'accès à un \"},{\"text\":\"écosystème actif de jeunes entreprises\",\"emphasis\":true},{\"text\":\", ouvrant des opportunités de synergies, de partenariats et de visibilité au sein du réseau français de l'innovation.\"}],\"imageAlt\":\"La French Tech\",\"imageSrc\":\"/assets/partners/french-tech.png\",\"imageVariant\":\"partnerLarge\"},{\"date\":\"08/2025\",\"titlePrefix\":\"Lancement officiel de\",\"titleHighlight\":\"Prosperify\",\"lead\":\"Mise sur le marché de la solution après plusieurs mois de conception, de tests et d'échanges avec l'écosystème.\",\"descriptionSegments\":[{\"text\":\"Le lancement concrétise une vision : proposer aux entreprises un \"},{\"text\":\"assistant documentaire souverain\",\"emphasis\":true},{\"text\":\", capable de \"},{\"text\":\"centraliser\",\"emphasis\":true},{\"text\":\" et \"},{\"text\":\"simplifier l'accès aux données\",\"emphasis\":true},{\"text\":\", avec des sources visibles, des accès gouvernés et un périmètre de sécurité clair.\"}],\"imageAlt\":\"Prosperify (lancement)\",\"imageSrc\":\"/assets/brand/logo-full.png\",\"imageVariant\":\"brandFull\"}]}}"));}),
"[project]/src/lib/i18n.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "defaultNS",
    ()=>defaultNS,
    "resources",
    ()=>resources
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/i18next/dist/esm/i18next.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/initReactI18next.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$en$2f$translation$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/en/translation.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$fr$2f$translation$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/fr/translation.json (json)");
;
;
;
;
const defaultNS = "translation";
const resources = {
    fr: {
        translation: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$fr$2f$translation$2e$json__$28$json$29$__["default"]
    },
    en: {
        translation: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$en$2f$translation$2e$json__$28$json$29$__["default"]
    }
};
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isInitialized) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].use(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initReactI18next"]).init({
        lng: "fr",
        fallbackLng: "en",
        resources,
        defaultNS,
        interpolation: {
            escapeValue: false
        }
    });
}
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/landing/components/navigation/navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LandingNavbar",
    ()=>LandingNavbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMenu2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMenu2$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconMenu2.mjs [app-client] (ecmascript) <export default as IconMenu2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconX.mjs [app-client] (ecmascript) <export default as IconX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const navLinks = [
    {
        labelEn: "Features",
        labelFr: "Fonctionnalités",
        href: "#features"
    },
    {
        labelEn: "Products",
        labelFr: "Offres",
        href: "#products"
    },
    {
        labelEn: "Sovereignty",
        labelFr: "Souveraineté",
        href: "#sovereignty"
    },
    {
        labelEn: "Architecture",
        labelFr: "Architecture",
        href: "#architecture"
    },
    {
        labelEn: "Blog",
        labelFr: "Blog",
        href: "/blog"
    },
    {
        labelEn: "Team",
        labelFr: "Équipe",
        href: "/team"
    },
    {
        labelEn: "Jobs",
        labelFr: "Jobs",
        href: "/jobs"
    }
];
function ProsperifyLogo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        src: "/assets/brand/logo-full.png",
        alt: "",
        width: 148,
        height: 80,
        className: "h-[30px] w-auto object-contain",
        priority: true
    }, void 0, false, {
        fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = ProsperifyLogo;
function SunIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "15",
        height: "15",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "4"
            }, void 0, false, {
                fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
            }, void 0, false, {
                fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c1 = SunIcon;
function MoonIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        }, void 0, false, {
            fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_c2 = MoonIcon;
function LandingNavbar() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeHash, setActiveHash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#features");
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const initialLang = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].language === "en" ? "en" : "fr";
    const [currentLang, setCurrentLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialLang);
    const switchLang = (target)=>{
        if (target === currentLang) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].changeLanguage(target).catch(()=>undefined);
        setCurrentLang(target);
    };
    const isHome = pathname === "/";
    const contactHref = isHome ? "#contact" : "/#contact";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LandingNavbar.useEffect": ()=>{
            setIsDark(document.documentElement.classList.contains("dark"));
            const obs = new MutationObserver({
                "LandingNavbar.useEffect": ()=>{
                    setIsDark(document.documentElement.classList.contains("dark"));
                }
            }["LandingNavbar.useEffect"]);
            obs.observe(document.documentElement, {
                attributeFilter: [
                    "class"
                ]
            });
            return ({
                "LandingNavbar.useEffect": ()=>obs.disconnect()
            })["LandingNavbar.useEffect"];
        }
    }["LandingNavbar.useEffect"], []);
    const toggleTheme = ()=>{
        const next = !isDark;
        document.documentElement.classList.toggle("dark", next);
        try {
            localStorage.setItem("pf-theme", next ? "dark" : "light");
        } catch (e) {}
        setIsDark(next);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LandingNavbar.useEffect": ()=>{
            if (!isHome) return undefined;
            const sectionIds = navLinks.map({
                "LandingNavbar.useEffect.sectionIds": (link)=>link.href.startsWith("#") ? link.href.slice(1) : null
            }["LandingNavbar.useEffect.sectionIds"]).filter({
                "LandingNavbar.useEffect.sectionIds": (id)=>Boolean(id)
            }["LandingNavbar.useEffect.sectionIds"]);
            const sections = sectionIds.map({
                "LandingNavbar.useEffect.sections": (id)=>document.getElementById(id)
            }["LandingNavbar.useEffect.sections"]).filter({
                "LandingNavbar.useEffect.sections": (section)=>Boolean(section)
            }["LandingNavbar.useEffect.sections"]);
            if (sections.length === 0) return undefined;
            const observer = new IntersectionObserver({
                "LandingNavbar.useEffect": (entries)=>{
                    var _visible_target;
                    const visible = entries.filter({
                        "LandingNavbar.useEffect": (entry)=>entry.isIntersecting
                    }["LandingNavbar.useEffect"]).sort({
                        "LandingNavbar.useEffect": (a, b)=>b.intersectionRatio - a.intersectionRatio
                    }["LandingNavbar.useEffect"])[0];
                    if (visible === null || visible === void 0 ? void 0 : (_visible_target = visible.target) === null || _visible_target === void 0 ? void 0 : _visible_target.id) {
                        setActiveHash("#".concat(visible.target.id));
                    }
                }
            }["LandingNavbar.useEffect"], {
                rootMargin: "-32% 0px -52% 0px",
                threshold: [
                    0.08,
                    0.18,
                    0.32
                ]
            });
            sections.forEach({
                "LandingNavbar.useEffect": (section)=>observer.observe(section)
            }["LandingNavbar.useEffect"]);
            return ({
                "LandingNavbar.useEffect": ()=>observer.disconnect()
            })["LandingNavbar.useEffect"];
        }
    }["LandingNavbar.useEffect"], [
        isHome
    ]);
    const resolveHref = (href)=>{
        if (!href.startsWith("#")) return href;
        return isHome ? href : "/".concat(href);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed inset-x-0 top-0 z-50 border-b border-[var(--pf-border)] backdrop-blur-xl",
        style: {
            background: "var(--pf-nav-bg)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex h-16 max-w-[1360px] items-center justify-between border-x border-[var(--pf-border)] px-5 sm:px-8 lg:px-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center",
                        "aria-label": "Prosperify",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProsperifyLogo, {}, void 0, false, {
                            fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden items-center gap-0.5 lg:flex",
                        children: navLinks.map((link)=>{
                            const active = isHome && link.href === activeHash;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: resolveHref(link.href),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative px-3 py-2 text-[13px] font-medium transition-colors", active ? "text-[var(--pf-fg)]" : "text-[var(--pf-fg-muted)] hover:text-[var(--pf-fg)]"),
                                scroll: true,
                                children: [
                                    currentLang === "en" ? link.labelEn : link.labelFr,
                                    active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute inset-x-3 -bottom-[13px] h-0.5 bg-[#FF6A13]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                                        lineNumber: 149,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, link.href, true, {
                                fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                                lineNumber: 136,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden border border-[var(--pf-border)] sm:flex",
                                style: {
                                    background: "var(--pf-bg-dim)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>switchLang("fr"),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-mono text-[11px] font-semibold px-2.5 py-1.5 transition-colors", currentLang === "fr" ? "bg-[#FF6A13] text-[#080808]" : "text-[var(--pf-fg-dim)] hover:text-[var(--pf-fg-muted)]"),
                                        children: "FR"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>switchLang("en"),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-mono text-[11px] font-semibold px-2.5 py-1.5 transition-colors", currentLang === "en" ? "bg-[#FF6A13] text-[#080808]" : "text-[var(--pf-fg-dim)] hover:text-[var(--pf-fg-muted)]"),
                                        children: "EN"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: toggleTheme,
                                className: "hidden h-8 w-8 items-center justify-center border border-[var(--pf-border)] text-[var(--pf-fg-muted)] transition-colors hover:border-[#FF6A13] hover:text-[#FF6A13] sm:flex",
                                style: {
                                    background: "var(--pf-bg-card)"
                                },
                                "aria-label": "Toggle theme",
                                children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SunIcon, {}, void 0, false, {
                                    fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                                    lineNumber: 197,
                                    columnNumber: 23
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MoonIcon, {}, void 0, false, {
                                    fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                                    lineNumber: 197,
                                    columnNumber: 37
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: contactHref,
                                className: "hidden items-center gap-2 bg-[#FF6A13] px-[18px] py-[9px] text-[13px] font-semibold text-[#080808] transition-colors hover:bg-[#ff8232] sm:inline-flex",
                                children: [
                                    t("footer.links.contact"),
                                    " →"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "text-[var(--pf-fg-muted)] lg:hidden",
                                onClick: ()=>setMobileOpen(!mobileOpen),
                                "aria-label": "Toggle menu",
                                children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__["IconX"], {
                                    className: "h-6 w-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                                    lineNumber: 214,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMenu2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMenu2$3e$__["IconMenu2"], {
                                    className: "h-6 w-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                                    lineNumber: 216,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-[var(--pf-border)] px-5 py-6 lg:hidden",
                style: {
                    background: "var(--pf-bg)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-1",
                    children: [
                        navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: resolveHref(link.href),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-2.5 text-sm font-medium transition-colors hover:text-[#FF6A13]", isHome && link.href === activeHash ? "border-l-2 border-[#FF6A13] bg-[#FF6A13]/5 text-[var(--pf-fg)]" : "text-[var(--pf-fg-muted)]"),
                                scroll: true,
                                onClick: ()=>setMobileOpen(false),
                                children: currentLang === "en" ? link.labelEn : link.labelFr
                            }, link.href, false, {
                                fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                                lineNumber: 230,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-1 border border-[var(--pf-border)] sm:hidden",
                                    style: {
                                        background: "var(--pf-bg-dim)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>switchLang("fr"),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 font-mono text-[11px] font-semibold py-2 transition-colors", currentLang === "fr" ? "bg-[#FF6A13] text-[#080808]" : "text-[var(--pf-fg-dim)]"),
                                            children: "FR"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                                            lineNumber: 252,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>switchLang("en"),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 font-mono text-[11px] font-semibold py-2 transition-colors", currentLang === "en" ? "bg-[#FF6A13] text-[#080808]" : "text-[var(--pf-fg-dim)]"),
                                            children: "EN"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                                            lineNumber: 264,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                                    lineNumber: 248,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: toggleTheme,
                                    className: "flex h-[38px] w-[38px] shrink-0 items-center justify-center border border-[var(--pf-border)] text-[var(--pf-fg-muted)] sm:hidden",
                                    style: {
                                        background: "var(--pf-bg-card)"
                                    },
                                    "aria-label": "Toggle theme",
                                    children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SunIcon, {}, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                                        lineNumber: 284,
                                        columnNumber: 27
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MoonIcon, {}, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                                        lineNumber: 284,
                                        columnNumber: 41
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                                    lineNumber: 277,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                            lineNumber: 247,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: contactHref,
                            className: "mt-2 inline-flex items-center justify-center bg-[#FF6A13] px-5 py-2.5 text-sm font-semibold text-[#080808] transition-colors hover:bg-[#ff8232] sm:hidden",
                            onClick: ()=>setMobileOpen(false),
                            children: [
                                t("footer.links.contact"),
                                " →"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                            lineNumber: 288,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                    lineNumber: 228,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                lineNumber: 224,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
_s(LandingNavbar, "3gXVXZk8LHD/OuaIqvoUuLAj8bU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c3 = LandingNavbar;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "ProsperifyLogo");
__turbopack_context__.k.register(_c1, "SunIcon");
__turbopack_context__.k.register(_c2, "MoonIcon");
__turbopack_context__.k.register(_c3, "LandingNavbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/landing/components/navigation/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$navigation$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/landing/components/navigation/navbar.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/landing/data/workspace-api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchWorkspacePublicContent",
    ()=>fetchWorkspacePublicContent,
    "getWorkspaceBlogPosts",
    ()=>getWorkspaceBlogPosts,
    "getWorkspaceJobOpenings",
    ()=>getWorkspaceJobOpenings,
    "getWorkspaceTeamMembers",
    ()=>getWorkspaceTeamMembers,
    "workspaceJobToOpening",
    ()=>workspaceJobToOpening,
    "workspacePostToBlogPost",
    ()=>workspacePostToBlogPost,
    "workspaceTeamToMember",
    ()=>workspaceTeamToMember
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const emptyContent = {
    jobs: [],
    posts: [],
    team: []
};
function apiKeyHeader() {
    if ("TURBOPACK compile-time truthy", 1) {
        return {};
    }
    //TURBOPACK unreachable
    ;
}
function workspaceUrl(path) {
    var _process_env_WORKSPACE_API_URL;
    if ("TURBOPACK compile-time truthy", 1) {
        return "/api/workspace/content";
    }
    //TURBOPACK unreachable
    ;
    const endpoint = undefined;
}
async function fetchWorkspaceItems(path) {
    const url = workspaceUrl(path);
    if (!url) {
        return [];
    }
    const response = await fetch(url, {
        headers: {
            ...apiKeyHeader(),
            Accept: "application/json"
        },
        next: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined
    });
    if (!response.ok) {
        var _payload_error, _payload_error1, _payload_error2;
        if (response.status === 404) {
            return [];
        }
        const payload = await response.json().catch(()=>null);
        var _payload_error_message;
        const message = (_payload_error_message = payload === null || payload === void 0 ? void 0 : (_payload_error = payload.error) === null || _payload_error === void 0 ? void 0 : _payload_error.message) !== null && _payload_error_message !== void 0 ? _payload_error_message : "Workspace content request failed with status ".concat(response.status);
        var _payload_error_code, _payload_error_status;
        throw Object.assign(new Error(message), {
            code: (_payload_error_code = payload === null || payload === void 0 ? void 0 : (_payload_error1 = payload.error) === null || _payload_error1 === void 0 ? void 0 : _payload_error1.code) !== null && _payload_error_code !== void 0 ? _payload_error_code : "workspace.content.request_failed",
            status: (_payload_error_status = payload === null || payload === void 0 ? void 0 : (_payload_error2 = payload.error) === null || _payload_error2 === void 0 ? void 0 : _payload_error2.status) !== null && _payload_error_status !== void 0 ? _payload_error_status : response.status
        });
    }
    const payload = await response.json();
    var _payload_data;
    const data = (_payload_data = payload.data) !== null && _payload_data !== void 0 ? _payload_data : payload;
    return Array.isArray(data.items) ? data.items : [];
}
async function fetchWorkspacePublicContent() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const url = workspaceUrl("/content");
    if (!url) {
        return null;
    }
    const response = await fetch(url, {
        headers: {
            ...apiKeyHeader(),
            Accept: "application/json"
        },
        next: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined
    });
    if (!response.ok) {
        var _payload_error, _payload_error1, _payload_error2;
        const payload = await response.json().catch(()=>null);
        var _payload_error_message;
        const message = (_payload_error_message = payload === null || payload === void 0 ? void 0 : (_payload_error = payload.error) === null || _payload_error === void 0 ? void 0 : _payload_error.message) !== null && _payload_error_message !== void 0 ? _payload_error_message : "Workspace content request failed with status ".concat(response.status);
        var _payload_error_code, _payload_error_status;
        throw Object.assign(new Error(message), {
            code: (_payload_error_code = payload === null || payload === void 0 ? void 0 : (_payload_error1 = payload.error) === null || _payload_error1 === void 0 ? void 0 : _payload_error1.code) !== null && _payload_error_code !== void 0 ? _payload_error_code : "workspace.content.request_failed",
            status: (_payload_error_status = payload === null || payload === void 0 ? void 0 : (_payload_error2 = payload.error) === null || _payload_error2 === void 0 ? void 0 : _payload_error2.status) !== null && _payload_error_status !== void 0 ? _payload_error_status : response.status
        });
    }
    const payload = await response.json();
    if ("data" in payload && payload.data) {
        if ("posts" in payload.data && "jobs" in payload.data && "team" in payload.data) {
            return {
                jobs: Array.isArray(payload.data.jobs) ? payload.data.jobs : [],
                posts: Array.isArray(payload.data.posts) ? payload.data.posts : [],
                team: Array.isArray(payload.data.team) ? payload.data.team : []
            };
        }
        if ("items" in payload.data || "posts" in payload.data || "jobs" in payload.data || "team" in payload.data) {
            return {
                jobs: Array.isArray(payload.data.jobs) ? payload.data.jobs : [],
                posts: Array.isArray(payload.data.posts) ? payload.data.posts : Array.isArray(payload.data.items) ? payload.data.items : [],
                team: Array.isArray(payload.data.team) ? payload.data.team : []
            };
        }
    }
    if ("posts" in payload && "jobs" in payload && "team" in payload) {
        return {
            jobs: Array.isArray(payload.jobs) ? payload.jobs : [],
            posts: Array.isArray(payload.posts) ? payload.posts : [],
            team: Array.isArray(payload.team) ? payload.team : []
        };
    }
    if ("items" in payload || "posts" in payload || "jobs" in payload || "team" in payload) {
        return {
            jobs: Array.isArray(payload.jobs) ? payload.jobs : [],
            posts: Array.isArray(payload.posts) ? payload.posts : Array.isArray(payload.items) ? payload.items : [],
            team: Array.isArray(payload.team) ? payload.team : []
        };
    }
    return null;
}
async function getWorkspacePublicContent() {
    var _ref;
    return (_ref = await fetchWorkspacePublicContent()) !== null && _ref !== void 0 ? _ref : emptyContent;
}
async function getWorkspaceBlogPosts() {
    const content = await getWorkspacePublicContent();
    return content.posts.map(workspacePostToBlogPost);
}
async function getWorkspaceJobOpenings() {
    const content = await getWorkspacePublicContent();
    return content.jobs.map(workspaceJobToOpening);
}
async function getWorkspaceTeamMembers() {
    const content = await getWorkspacePublicContent();
    return content.team.map(workspaceTeamToMember);
}
function workspacePostToBlogPost(item) {
    var _item_image;
    var _item_updatedAt;
    const date = item.publishedAt ? new Date(item.publishedAt).toISOString().slice(0, 10) : new Date((_item_updatedAt = item.updatedAt) !== null && _item_updatedAt !== void 0 ? _item_updatedAt : Date.now()).toISOString().slice(0, 10);
    var _item_image_alt, _item_authorIds, _item_content_en_excerpt, _item_content_en_body, _item_readTime, _item_tags;
    return {
        asset: ((_item_image = item.image) === null || _item_image === void 0 ? void 0 : _item_image.src) ? {
            alt: (_item_image_alt = item.image.alt) !== null && _item_image_alt !== void 0 ? _item_image_alt : item.content.en.title,
            src: item.image.src
        } : undefined,
        authorIds: (_item_authorIds = item.authorIds) !== null && _item_authorIds !== void 0 ? _item_authorIds : [],
        authors: item.authors,
        date,
        en: {
            excerpt: (_item_content_en_excerpt = item.content.en.excerpt) !== null && _item_content_en_excerpt !== void 0 ? _item_content_en_excerpt : "",
            sections: [
                {
                    body: (_item_content_en_body = item.content.en.body) !== null && _item_content_en_body !== void 0 ? _item_content_en_body : "",
                    heading: ""
                }
            ],
            title: item.content.en.title
        },
        fr: {
            excerpt: item.content.fr.excerpt || item.content.en.excerpt || "",
            sections: [
                {
                    body: item.content.fr.body || item.content.en.body || "",
                    heading: ""
                }
            ],
            title: item.content.fr.title || item.content.en.title
        },
        href: "/blog/".concat(item.slug),
        id: item.slug,
        readTime: (_item_readTime = item.readTime) !== null && _item_readTime !== void 0 ? _item_readTime : "4 min",
        tags: (_item_tags = item.tags) !== null && _item_tags !== void 0 ? _item_tags : []
    };
}
function workspaceJobToOpening(item) {
    var _item_content_en_description, _item_content_en_requirements, _item_content_en_responsibilities, _item_content_en_title, _item_content_fr_requirements, _ref, _item_content_fr_responsibilities, _ref1;
    return {
        en: {
            description: (_item_content_en_description = item.content.en.description) !== null && _item_content_en_description !== void 0 ? _item_content_en_description : "",
            impact: item.content.en.impact,
            requirements: (_item_content_en_requirements = item.content.en.requirements) !== null && _item_content_en_requirements !== void 0 ? _item_content_en_requirements : [],
            responsibilities: (_item_content_en_responsibilities = item.content.en.responsibilities) !== null && _item_content_en_responsibilities !== void 0 ? _item_content_en_responsibilities : [],
            title: (_item_content_en_title = item.content.en.title) !== null && _item_content_en_title !== void 0 ? _item_content_en_title : "Open role"
        },
        fr: {
            description: item.content.fr.description || item.content.en.description || "",
            impact: item.content.fr.impact || item.content.en.impact,
            requirements: (_ref = (_item_content_fr_requirements = item.content.fr.requirements) !== null && _item_content_fr_requirements !== void 0 ? _item_content_fr_requirements : item.content.en.requirements) !== null && _ref !== void 0 ? _ref : [],
            responsibilities: (_ref1 = (_item_content_fr_responsibilities = item.content.fr.responsibilities) !== null && _item_content_fr_responsibilities !== void 0 ? _item_content_fr_responsibilities : item.content.en.responsibilities) !== null && _ref1 !== void 0 ? _ref1 : [],
            title: item.content.fr.title || item.content.en.title || "Poste ouvert"
        },
        id: item.slug,
        location: item.location,
        occupantName: item.occupantName,
        postedAt: item.postedAt ? new Date(item.postedAt).toISOString().slice(0, 10) : undefined,
        seniority: item.seniority,
        status: item.status === "taken" ? "taken" : "open",
        team: item.team,
        type: item.contractType,
        workMode: item.workMode
    };
}
function workspaceTeamToMember(item) {
    return {
        avatarUrl: item.avatarUrl,
        en: {
            bio: item.bio.en
        },
        fr: {
            bio: item.bio.fr || item.bio.en
        },
        id: item.id,
        linkedinUrl: item.linkedinUrl,
        linkedinVanity: item.linkedinVanity,
        name: item.name,
        role: item.role
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/landing/components/team/team-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TeamSection",
    ()=>TeamSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$data$2f$workspace$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/landing/data/workspace-api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const EMPTY_MEMBERS = [];
function TeamSection(param) {
    let { hideHeading = false, initialMembers = EMPTY_MEMBERS } = param;
    _s();
    const { i18n, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const language = i18n.language.startsWith("fr") ? "fr" : "en";
    const [members, setMembers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialMembers);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TeamSection.useEffect": ()=>{
            let cancelled = false;
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$data$2f$workspace$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWorkspacePublicContent"])().then({
                "TeamSection.useEffect": (content)=>{
                    if (!cancelled) {
                        var _content_team_map;
                        const workspaceMembers = (_content_team_map = content === null || content === void 0 ? void 0 : content.team.map(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$data$2f$workspace$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["workspaceTeamToMember"])) !== null && _content_team_map !== void 0 ? _content_team_map : [];
                        setMembers(workspaceMembers.length ? workspaceMembers : initialMembers);
                    }
                }
            }["TeamSection.useEffect"]);
            return ({
                "TeamSection.useEffect": ()=>{
                    cancelled = true;
                }
            })["TeamSection.useEffect"];
        }
    }["TeamSection.useEffect"], [
        initialMembers
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-7xl",
        children: [
            hideHeading ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-10 grid gap-6 border-b border-neutral-200 pb-8 dark:border-neutral-800 lg:grid-cols-[0.8fr_1.2fr] lg:items-end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold uppercase tracking-[0.18em] text-orange-500",
                                children: t("team.badge")
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/team/team-section.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mt-4 max-w-xl text-3xl font-semibold leading-tight text-neutral-950 dark:text-neutral-50 sm:text-5xl",
                                children: [
                                    t("team.titlePrefix"),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-orange-500",
                                        children: t("team.titleHighlight")
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/team/team-section.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/landing/components/team/team-section.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/landing/components/team/team-section.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-300",
                        children: t("team.subtitle")
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/team/team-section.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/landing/components/team/team-section.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this),
            members.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5 md:grid-cols-3",
                children: members.map((member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "border border-neutral-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-20 w-20 overflow-hidden rounded-full border-2 border-neutral-200 dark:border-neutral-700",
                                        children: member.avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            alt: member.name,
                                            className: "h-full w-full object-cover",
                                            src: member.avatarUrl
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/landing/components/team/team-section.tsx",
                                            lineNumber: 74,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex h-full w-full items-center justify-center bg-neutral-100 text-2xl font-semibold text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400",
                                            children: member.name.charAt(0).toUpperCase()
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/landing/components/team/team-section.tsx",
                                            lineNumber: 80,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/team/team-section.tsx",
                                        lineNumber: 72,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mt-4 text-lg font-semibold text-neutral-950 dark:text-neutral-50",
                                        children: member.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/team/team-section.tsx",
                                        lineNumber: 85,
                                        columnNumber: 17
                                    }, this),
                                    member.role ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm font-medium text-orange-500 dark:text-orange-400",
                                        children: member.role
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/team/team-section.tsx",
                                        lineNumber: 89,
                                        columnNumber: 19
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/landing/components/team/team-section.tsx",
                                lineNumber: 71,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-300",
                                children: member[language].bio
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/team/team-section.tsx",
                                lineNumber: 94,
                                columnNumber: 15
                            }, this),
                            member.linkedinUrl || member.linkedinVanity ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "inline-flex items-center gap-2 rounded-md border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:border-orange-200 hover:text-orange-600 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-orange-500 dark:hover:text-orange-400",
                                    href: member.linkedinUrl || "https://www.linkedin.com/in/".concat(member.linkedinVanity, "/"),
                                    rel: "noopener noreferrer",
                                    target: "_blank",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/landing/components/team/team-section.tsx",
                                            lineNumber: 108,
                                            columnNumber: 21
                                        }, this),
                                        "LinkedIn"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/landing/components/team/team-section.tsx",
                                    lineNumber: 99,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/team/team-section.tsx",
                                lineNumber: 98,
                                columnNumber: 17
                            }, this) : null
                        ]
                    }, member.id, true, {
                        fileName: "[project]/src/features/landing/components/team/team-section.tsx",
                        lineNumber: 67,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/features/landing/components/team/team-section.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border border-neutral-200 bg-neutral-50 p-6 text-sm leading-6 text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300",
                children: language === "fr" ? "Les profils publics de l'équipe apparaîtront ici dès qu'ils seront activés dans le workspace." : "Public team profiles will appear here once they are enabled in the workspace."
            }, void 0, false, {
                fileName: "[project]/src/features/landing/components/team/team-section.tsx",
                lineNumber: 117,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/landing/components/team/team-section.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(TeamSection, "at8VrQ56s9CobyQkMCEOZLDKll8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = TeamSection;
var _c;
__turbopack_context__.k.register(_c, "TeamSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/landing/components/team/team-page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TeamPage",
    ()=>TeamPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$footer$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/features/landing/components/footer/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$footer$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/landing/components/footer/footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$navigation$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/features/landing/components/navigation/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$navigation$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/landing/components/navigation/navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$team$2f$team$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/landing/components/team/team-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function TeamPage(param) {
    let { initialMembers, lang } = param;
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TeamPage.useEffect": ()=>{
            if (lang === "fr" || lang === "en") {
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].changeLanguage(lang).catch({
                    "TeamPage.useEffect": ()=>undefined
                }["TeamPage.useEffect"]);
            }
        }
    }["TeamPage.useEffect"], [
        lang
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$navigation$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingNavbar"], {}, void 0, false, {
                fileName: "[project]/src/features/landing/components/team/team-page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "mb-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-orange-600",
                        href: "/",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/team/team-page.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            lang === "en" ? "Back to landing" : "Retour à l'accueil"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/landing/components/team/team-page.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$team$2f$team$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TeamSection"], {
                        initialMembers: initialMembers
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/team/team-page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/landing/components/team/team-page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$footer$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingFooter"], {}, void 0, false, {
                fileName: "[project]/src/features/landing/components/team/team-page.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/landing/components/team/team-page.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(TeamPage, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = TeamPage;
var _c;
__turbopack_context__.k.register(_c, "TeamPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0698a99c._.js.map