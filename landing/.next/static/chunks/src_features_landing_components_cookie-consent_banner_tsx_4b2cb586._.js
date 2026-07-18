(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/features/landing/components/cookie-consent/banner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CookieConsentBanner",
    ()=>CookieConsentBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const CONSENT_KEY = "prosperify-consent";
const CONSENT_MAX_AGE_MS = 13 * 30 * 24 * 60 * 60 * 1000;
function getStoredConsent() {
    try {
        const raw = localStorage.getItem(CONSENT_KEY);
        if (!raw) {
            return null;
        }
        const parsed = JSON.parse(raw);
        if (Date.now() - new Date(parsed.timestamp).getTime() > CONSENT_MAX_AGE_MS) {
            localStorage.removeItem(CONSENT_KEY);
            return null;
        }
        return parsed;
    } catch (e) {
        return null;
    }
}
function loadGtm(gtmId) {
    if (document.querySelector('script[data-gtm-id="'.concat(gtmId, '"]'))) {
        return;
    }
    const script = document.createElement("script");
    script.setAttribute("data-gtm-id", gtmId);
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtm.js?id=".concat(gtmId);
    document.head.appendChild(script);
}
function applyConsent(consent) {
    window.__consent = consent;
    const gtmId = window.__gtmId;
    if (consent.analytics && gtmId) {
        loadGtm(gtmId);
    }
}
function CookieConsentBanner() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CookieConsentBanner.useEffect": ()=>{
            const existing = getStoredConsent();
            if (existing) {
                applyConsent(existing);
                return;
            }
            setVisible(true);
        }
    }["CookieConsentBanner.useEffect"], []);
    const handleAcceptAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CookieConsentBanner.useCallback[handleAcceptAll]": ()=>{
            const consent = {
                analytics: true,
                marketing: true,
                timestamp: new Date().toISOString()
            };
            localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
            applyConsent(consent);
            setVisible(false);
        }
    }["CookieConsentBanner.useCallback[handleAcceptAll]"], []);
    const handleRejectAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CookieConsentBanner.useCallback[handleRejectAll]": ()=>{
            const consent = {
                analytics: false,
                marketing: false,
                timestamp: new Date().toISOString()
            };
            localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
            applyConsent(consent);
            setVisible(false);
        }
    }["CookieConsentBanner.useCallback[handleRejectAll]"], []);
    if (!visible) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-200 bg-white/95 p-4 shadow-lg backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/95 sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-md sm:rounded-lg sm:border",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm leading-6 text-neutral-600 dark:text-neutral-300",
                children: [
                    t("cookie.message"),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "text-orange-600 underline underline-offset-2 hover:text-orange-700 dark:text-orange-400",
                        href: "/gdpr",
                        children: t("cookie.learn")
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/cookie-consent/banner.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/landing/components/cookie-consent/banner.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-col gap-2 sm:flex-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex-1 border border-neutral-300 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-800 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800",
                        onClick: handleRejectAll,
                        type: "button",
                        children: t("cookie.reject")
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/cookie-consent/banner.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex-1 bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600",
                        onClick: handleAcceptAll,
                        type: "button",
                        children: t("cookie.accept")
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/cookie-consent/banner.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/landing/components/cookie-consent/banner.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/landing/components/cookie-consent/banner.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
_s(CookieConsentBanner, "ADPMiKzjYN852ZDZLHwhCRgD4MU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = CookieConsentBanner;
var _c;
__turbopack_context__.k.register(_c, "CookieConsentBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_features_landing_components_cookie-consent_banner_tsx_4b2cb586._.js.map