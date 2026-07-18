module.exports = [
"[externals]/jsdom [external] (jsdom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("jsdom", () => require("jsdom"));

module.exports = mod;
}),
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/src/components/ui/select.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Select({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "select",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function SelectGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "select-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
function SelectValue({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Value"], {
        "data-slot": "select-value",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
function SelectTrigger({ className, size = "default", children, ...props }) {
    const accessibilityProps = props["aria-label"] || props["aria-labelledby"] ? {} : {
        "aria-label": "Select option"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "select-trigger",
        "data-size": size,
        ...accessibilityProps,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "size-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
function SelectContent({ className, children, position = "popper", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "select-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function SelectLabel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground px-2 py-1.5 text-xs", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
function SelectItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/select.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
function SelectSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-border pointer-events-none -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
function SelectScrollUpButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__["ChevronUpIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 157,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, this);
}
function SelectScrollDownButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 175,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 167,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/features/contact/components/contact-form.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$isomorphic$2d$dompurify$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/isomorphic-dompurify/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-ssr] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function formatDateInput(date) {
    return date.toISOString().slice(0, 16);
}
function slotLabel(slot, locale) {
    return slot.toLocaleTimeString(locale, {
        hour: "2-digit",
        minute: "2-digit"
    });
}
function dateKey(date) {
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    const day = `${date.getDate()}`.padStart(2, "0");
    return `${date.getFullYear()}-${month}-${day}`;
}
function dateLabel(date, locale) {
    return date.toLocaleDateString(locale, {
        day: "numeric",
        month: "short",
        weekday: "short"
    });
}
async function readApiError(response, fallback) {
    const payload = await response.json().catch(()=>null);
    const fields = payload?.error?.fields ?? payload?.errors ?? [];
    if (fields.length) {
        return fields.map((field)=>field.message).join(" ");
    }
    return payload?.error?.message ?? fallback;
}
function ContactForm() {
    const { i18n, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const language = i18n.language.startsWith("fr") ? "fr" : "en";
    const locale = language === "fr" ? "fr-FR" : "en-US";
    const copy = {
        en: {
            available: "Available slots",
            availableDates: "Available dates",
            checking: "Checking...",
            checkSlots: "Find a slot",
            consent: "I agree to receive product updates and tips (optional)",
            copied: "Copied",
            copyInvite: "Copy invitation link",
            details: "Your details",
            end: "End",
            intro: "Tell us what you want to query, where the documents live, and how strict the deployment boundary needs to be.",
            meeting: "Meeting",
            meetingCta: "See available 15-minute slots",
            meetingRemove: "Remove meeting",
            noSlots: "No available slots were returned for the next few business days.",
            note: "This will create a 15-minute Google Meet invitation.",
            privacy: "Privacy Policy",
            schedule: "Send and schedule",
            scheduling: "Scheduling...",
            start: "Start",
            success: "Meeting scheduled. You will receive the calendar invite by email.",
            unavailable: "Calendar unavailable. You can still send the message."
        },
        fr: {
            available: "Créneaux disponibles",
            availableDates: "Dates disponibles",
            checking: "Vérification...",
            checkSlots: "Trouver un créneau",
            consent: "Je souhaite recevoir des actualités et conseils produits (optionnel)",
            copied: "Copié",
            copyInvite: "Copier le lien d'invitation",
            details: "Vos coordonnées",
            end: "Fin",
            intro: "Dites-nous quels documents vous voulez interroger, où ils vivent, et quel niveau de contrôle le déploiement doit respecter.",
            meeting: "Rendez-vous",
            meetingCta: "Voir les créneaux disponibles",
            meetingRemove: "Retirer le rendez-vous",
            noSlots: "Aucun créneau disponible n'a été renvoyé pour les prochains jours ouvrés.",
            note: "Cela créera une invitation Google Meet de 15 minutes.",
            privacy: "Politique de confidentialité",
            schedule: "Envoyer et planifier",
            scheduling: "Planification...",
            start: "Début",
            success: "Rendez-vous planifié. Vous recevrez l'invitation calendrier par email.",
            unavailable: "Calendrier indisponible. Vous pouvez toujours envoyer le message."
        }
    }[language];
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        company: "",
        email: "",
        message: "",
        name: "",
        phone: "",
        subject: ""
    });
    const [marketingConsent, setMarketingConsent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [rangeStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        const date = new Date();
        date.setDate(date.getDate() + 1);
        date.setHours(9, 0, 0, 0);
        return formatDateInput(date);
    });
    const [rangeEnd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        const date = new Date();
        date.setDate(date.getDate() + 8);
        date.setHours(18, 0, 0, 0);
        return formatDateInput(date);
    });
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedSlot, setSelectedSlot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [slotsVisible, setSlotsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isChecking, setIsChecking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSending, setIsSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [meetLink, setMeetLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [copiedInvite, setCopiedInvite] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const slots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const output = [];
        const cursor = new Date(rangeStart);
        const end = new Date(rangeEnd);
        cursor.setMinutes(Math.ceil(cursor.getMinutes() / 15) * 15, 0, 0);
        while(cursor < end){
            const slotEnd = new Date(cursor);
            slotEnd.setMinutes(slotEnd.getMinutes() + 15);
            const day = cursor.getDay();
            const hour = cursor.getHours();
            const overlaps = busy.some((item)=>new Date(item.start) < slotEnd && new Date(item.end) > cursor);
            if (day !== 0 && day !== 6 && hour >= 9 && hour < 18 && !overlaps) {
                output.push(new Date(cursor));
            }
            cursor.setMinutes(cursor.getMinutes() + 15);
        }
        return output;
    }, [
        busy,
        rangeEnd,
        rangeStart
    ]);
    const availableDates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const dates = new Map();
        slots.forEach((slot)=>{
            const key = dateKey(slot);
            if (!dates.has(key)) {
                dates.set(key, slot);
            }
        });
        return Array.from(dates, ([key, date])=>({
                date,
                key
            }));
    }, [
        slots
    ]);
    const selectedDateSlots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>slots.filter((slot)=>dateKey(slot) === selectedDate), [
        selectedDate,
        slots
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!slotsVisible || selectedDate || !availableDates.length) {
            return;
        }
        setSelectedDate(availableDates[0].key);
    }, [
        availableDates,
        selectedDate,
        slotsVisible
    ]);
    const fieldClass = "w-full border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-neutral-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-300 dark:border-neutral-800 dark:bg-neutral-950";
    const handleChange = (event)=>{
        setForm((current)=>({
                ...current,
                [event.target.name]: event.target.value
            }));
    };
    const checkAvailability = async ()=>{
        setIsChecking(true);
        setStatus("");
        setSelectedDate("");
        setSelectedSlot("");
        setSlotsVisible(false);
        try {
            const response = await fetch("/api/workspace/calendar/availability", {
                body: JSON.stringify({
                    end: new Date(rangeEnd).toISOString(),
                    start: new Date(rangeStart).toISOString(),
                    timezone: "Europe/Paris"
                }),
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST"
            });
            if (!response.ok) {
                throw new Error(await readApiError(response, copy.unavailable));
            }
            const result = await response.json();
            setBusy(result.data?.busy ?? []);
            setSlotsVisible(true);
        } catch (error) {
            setBusy([]);
            setStatus(error instanceof Error ? error.message : copy.unavailable);
        } finally{
            setIsChecking(false);
        }
    };
    const showAvailability = ()=>{
        void checkAvailability();
    };
    const handleSubmit = async (event)=>{
        event.preventDefault();
        setIsSending(true);
        setStatus("");
        setMeetLink("");
        const safe = {
            company: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$isomorphic$2d$dompurify$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].sanitize(form.company),
            email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$isomorphic$2d$dompurify$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].sanitize(form.email),
            marketingConsent,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$isomorphic$2d$dompurify$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].sanitize(form.message ?? ""),
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$isomorphic$2d$dompurify$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].sanitize(form.name),
            phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$isomorphic$2d$dompurify$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].sanitize(form.phone ?? ""),
            subject: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$isomorphic$2d$dompurify$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].sanitize(form.subject)
        };
        try {
            if (!selectedSlot) {
                setStatus(language === "fr" ? "Veuillez sélectionner un créneau." : "Please select a time slot.");
                return;
            }
            const start = new Date(selectedSlot);
            const end = new Date(start);
            end.setMinutes(end.getMinutes() + 15);
            const response = await fetch("/api/workspace/calendar/events", {
                body: JSON.stringify({
                    attendees: [
                        safe.email
                    ],
                    company: safe.company,
                    description: safe.message ? `${safe.company}\n${safe.message}` : safe.company,
                    email: safe.email,
                    end: end.toISOString(),
                    name: safe.name,
                    start: start.toISOString(),
                    summary: `${t("contact.meeting.title")} - ${safe.company || safe.name}`,
                    timezone: "Europe/Paris"
                }),
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST"
            });
            if (!response.ok) {
                throw new Error(await readApiError(response, t("contact.form.statusSendError")));
            }
            const payload = (await response.json()).data;
            setMeetLink(payload?.meetLink ?? payload?.htmlLink ?? "");
            setCopiedInvite(false);
            setStatus(copy.success);
            setForm({
                company: "",
                email: "",
                name: "",
                phone: "",
                subject: ""
            });
            setMarketingConsent(false);
            setSelectedSlot("");
        } catch (error) {
            setStatus(error instanceof Error ? error.message : t("contact.form.statusSendError"));
        } finally{
            setIsSending(false);
        }
    };
    const copyInvitationLink = async ()=>{
        if (!meetLink) {
            return;
        }
        await navigator.clipboard.writeText(meetLink);
        setCopiedInvite(true);
        window.setTimeout(()=>setCopiedInvite(false), 1800);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "space-y-7",
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "border-l-2 border-orange-500 pl-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300",
                children: copy.intro
            }, void 0, false, {
                fileName: "[project]/src/features/contact/components/contact-form.tsx",
                lineNumber: 371,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500",
                        children: copy.details
                    }, void 0, false, {
                        fileName: "[project]/src/features/contact/components/contact-form.tsx",
                        lineNumber: 376,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-3 sm:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: fieldClass,
                                maxLength: 60,
                                name: "name",
                                onChange: handleChange,
                                placeholder: t("contact.form.namePlaceholder"),
                                required: true,
                                type: "text",
                                value: form.name
                            }, void 0, false, {
                                fileName: "[project]/src/features/contact/components/contact-form.tsx",
                                lineNumber: 380,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: fieldClass,
                                maxLength: 80,
                                name: "company",
                                onChange: handleChange,
                                placeholder: t("contact.form.companyPlaceholder"),
                                required: true,
                                type: "text",
                                value: form.company
                            }, void 0, false, {
                                fileName: "[project]/src/features/contact/components/contact-form.tsx",
                                lineNumber: 390,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: fieldClass,
                                maxLength: 120,
                                name: "email",
                                onChange: handleChange,
                                placeholder: t("contact.form.emailPlaceholder"),
                                required: true,
                                type: "email",
                                value: form.email
                            }, void 0, false, {
                                fileName: "[project]/src/features/contact/components/contact-form.tsx",
                                lineNumber: 400,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: fieldClass,
                                maxLength: 30,
                                name: "phone",
                                onChange: handleChange,
                                placeholder: t("contact.form.phonePlaceholder"),
                                type: "tel",
                                value: form.phone
                            }, void 0, false, {
                                fileName: "[project]/src/features/contact/components/contact-form.tsx",
                                lineNumber: 410,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/contact/components/contact-form.tsx",
                        lineNumber: 379,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/contact/components/contact-form.tsx",
                lineNumber: 375,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                        onValueChange: (value)=>setForm((current)=>({
                                    ...current,
                                    subject: value
                                })),
                        value: form.subject,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                className: "w-full rounded-none border border-neutral-200 bg-white px-4 py-3 text-sm dark:border-neutral-800 dark:bg-neutral-950",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                    placeholder: t("contact.form.subjectPlaceholder")
                                }, void 0, false, {
                                    fileName: "[project]/src/features/contact/components/contact-form.tsx",
                                    lineNumber: 430,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/contact/components/contact-form.tsx",
                                lineNumber: 429,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "information",
                                        children: t("contact.form.subjectInformation")
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/contact/components/contact-form.tsx",
                                        lineNumber: 433,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "partnership",
                                        children: t("contact.form.subjectPartnership")
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/contact/components/contact-form.tsx",
                                        lineNumber: 436,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "other",
                                        children: t("contact.form.subjectOther")
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/contact/components/contact-form.tsx",
                                        lineNumber: 439,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "api",
                                        children: t("contact.form.subjectApi")
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/contact/components/contact-form.tsx",
                                        lineNumber: 442,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "virtual-partner",
                                        children: t("contact.form.subjectVirtualPartner")
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/contact/components/contact-form.tsx",
                                        lineNumber: 443,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/contact/components/contact-form.tsx",
                                lineNumber: 432,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/contact/components/contact-form.tsx",
                        lineNumber: 423,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        "aria-label": t("contact.form.messagePlaceholder"),
                        className: `${fieldClass} mt-3 max-h-56 min-h-32 resize-y`,
                        maxLength: 1000,
                        name: "message",
                        onChange: handleChange,
                        placeholder: t("contact.form.messagePlaceholder"),
                        value: form.message ?? ""
                    }, void 0, false, {
                        fileName: "[project]/src/features/contact/components/contact-form.tsx",
                        lineNumber: 448,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/contact/components/contact-form.tsx",
                lineNumber: 422,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                                className: "h-4 w-4 text-orange-500"
                            }, void 0, false, {
                                fileName: "[project]/src/features/contact/components/contact-form.tsx",
                                lineNumber: 461,
                                columnNumber: 11
                            }, this),
                            copy.meeting
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/contact/components/contact-form.tsx",
                        lineNumber: 460,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "inline-flex w-full items-center justify-center gap-2 border border-neutral-300 bg-white px-4 py-3 text-sm font-semibold text-neutral-800 transition-colors hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700 disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100",
                        disabled: isChecking,
                        onClick: showAvailability,
                        type: "button",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/features/contact/components/contact-form.tsx",
                                lineNumber: 470,
                                columnNumber: 11
                            }, this),
                            isChecking ? copy.checking : copy.meetingCta
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/contact/components/contact-form.tsx",
                        lineNumber: 464,
                        columnNumber: 9
                    }, this),
                    slotsVisible || selectedSlot ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3",
                        children: slotsVisible && availableDates.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500",
                                            children: copy.availableDates
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/contact/components/contact-form.tsx",
                                            lineNumber: 478,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-2 sm:grid-cols-3",
                                            children: availableDates.map(({ date, key })=>{
                                                const selected = selectedDate === key;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: selected ? "border border-orange-500 bg-orange-50 px-3 py-2 text-left text-sm font-semibold text-orange-700 dark:border-orange-400 dark:bg-orange-500/15 dark:text-orange-200" : "border border-neutral-200 bg-white px-3 py-2 text-left text-sm font-medium text-neutral-600 hover:border-orange-200 hover:text-orange-700 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300",
                                                    onClick: ()=>{
                                                        setSelectedDate(key);
                                                        setSelectedSlot("");
                                                    },
                                                    type: "button",
                                                    children: dateLabel(date, locale)
                                                }, key, false, {
                                                    fileName: "[project]/src/features/contact/components/contact-form.tsx",
                                                    lineNumber: 486,
                                                    columnNumber: 25
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/contact/components/contact-form.tsx",
                                            lineNumber: 481,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/contact/components/contact-form.tsx",
                                    lineNumber: 477,
                                    columnNumber: 17
                                }, this),
                                selectedDateSlots.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500",
                                            children: copy.available
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/contact/components/contact-form.tsx",
                                            lineNumber: 508,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-2 sm:grid-cols-4",
                                            children: selectedDateSlots.map((slot)=>{
                                                const iso = slot.toISOString();
                                                const selected = selectedSlot === iso;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: selected ? "border border-orange-500 bg-orange-50 px-3 py-2 text-left text-sm font-semibold text-orange-700 dark:border-orange-400 dark:bg-orange-500/15 dark:text-orange-200" : "border border-neutral-200 bg-white px-3 py-2 text-left text-sm font-medium text-neutral-600 hover:border-orange-200 hover:text-orange-700 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300",
                                                    onClick: ()=>setSelectedSlot(iso),
                                                    type: "button",
                                                    children: slotLabel(slot, locale)
                                                }, iso, false, {
                                                    fileName: "[project]/src/features/contact/components/contact-form.tsx",
                                                    lineNumber: 517,
                                                    columnNumber: 27
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/contact/components/contact-form.tsx",
                                            lineNumber: 511,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/contact/components/contact-form.tsx",
                                    lineNumber: 507,
                                    columnNumber: 19
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/contact/components/contact-form.tsx",
                            lineNumber: 476,
                            columnNumber: 15
                        }, this) : slotsVisible ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-600 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300",
                            children: copy.noSlots
                        }, void 0, false, {
                            fileName: "[project]/src/features/contact/components/contact-form.tsx",
                            lineNumber: 536,
                            columnNumber: 15
                        }, this) : null
                    }, void 0, false, {
                        fileName: "[project]/src/features/contact/components/contact-form.tsx",
                        lineNumber: 474,
                        columnNumber: 11
                    }, this) : null,
                    selectedSlot ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                className: "h-3.5 w-3.5 text-orange-500"
                            }, void 0, false, {
                                fileName: "[project]/src/features/contact/components/contact-form.tsx",
                                lineNumber: 544,
                                columnNumber: 13
                            }, this),
                            copy.note
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/contact/components/contact-form.tsx",
                        lineNumber: 543,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/contact/components/contact-form.tsx",
                lineNumber: 459,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 border-t border-neutral-200 pt-5 dark:border-neutral-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                checked: marketingConsent,
                                className: "mt-0.5 h-4 w-4 shrink-0 accent-orange-500",
                                id: "marketing-consent",
                                onChange: (e)=>setMarketingConsent(e.target.checked),
                                type: "checkbox"
                            }, void 0, false, {
                                fileName: "[project]/src/features/contact/components/contact-form.tsx",
                                lineNumber: 552,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs leading-5 text-neutral-500 dark:text-neutral-400",
                                htmlFor: "marketing-consent",
                                children: copy.consent
                            }, void 0, false, {
                                fileName: "[project]/src/features/contact/components/contact-form.tsx",
                                lineNumber: 559,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/contact/components/contact-form.tsx",
                        lineNumber: 551,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded border border-neutral-200 bg-neutral-50 px-3 py-2.5 dark:border-neutral-800 dark:bg-neutral-900/50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs leading-5 text-neutral-500 dark:text-neutral-400",
                            children: [
                                language === "fr" ? "Nous traitons vos données (nom, email, entreprise, téléphone) pour répondre à votre demande et planifier un rendez-vous via Google Calendar. Base légale : intérêt légitime. Données conservées 36 mois après le dernier contact. Vous pouvez accéder, rectifier ou supprimer vos données à tout moment." : "We process your data (name, email, company, phone) to respond to your inquiry and schedule a meeting via Google Calendar. Legal basis: legitimate interest. Data retained 36 months after last contact. You may access, rectify or delete your data at any time.",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "text-orange-600 underline underline-offset-2 hover:text-orange-700 dark:text-orange-400",
                                    href: "/privacy",
                                    rel: "noopener noreferrer",
                                    target: "_blank",
                                    children: copy.privacy
                                }, void 0, false, {
                                    fileName: "[project]/src/features/contact/components/contact-form.tsx",
                                    lineNumber: 572,
                                    columnNumber: 13
                                }, this),
                                language === "fr" ? ". Vous pouvez saisir la CNIL." : ". You may lodge a complaint with the CNIL."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/contact/components/contact-form.tsx",
                            lineNumber: 568,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/contact/components/contact-form.tsx",
                        lineNumber: 567,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/contact/components/contact-form.tsx",
                lineNumber: 550,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "inline-flex w-full items-center justify-center gap-2 bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600 disabled:opacity-50",
                disabled: isSending,
                type: "submit",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/features/contact/components/contact-form.tsx",
                        lineNumber: 592,
                        columnNumber: 9
                    }, this),
                    isSending ? copy.scheduling : copy.schedule
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/contact/components/contact-form.tsx",
                lineNumber: 587,
                columnNumber: 7
            }, this),
            status ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "border border-neutral-200 bg-white px-4 py-3 text-center text-sm text-neutral-600 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300",
                children: status
            }, void 0, false, {
                fileName: "[project]/src/features/contact/components/contact-form.tsx",
                lineNumber: 597,
                columnNumber: 9
            }, this) : null,
            meetLink ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-2 sm:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "block border border-orange-200 bg-orange-50 px-4 py-3 text-center text-sm font-semibold text-orange-700",
                        href: meetLink,
                        rel: "noopener noreferrer",
                        target: "_blank",
                        children: language === "fr" ? "Ouvrir l'invitation" : "Open invitation"
                    }, void 0, false, {
                        fileName: "[project]/src/features/contact/components/contact-form.tsx",
                        lineNumber: 603,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "inline-flex items-center justify-center gap-2 border border-neutral-300 bg-white px-4 py-3 text-sm font-semibold text-neutral-800 transition-colors hover:border-orange-300 hover:text-orange-700 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100",
                        onClick: copyInvitationLink,
                        type: "button",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/features/contact/components/contact-form.tsx",
                                lineNumber: 616,
                                columnNumber: 13
                            }, this),
                            copiedInvite ? copy.copied : copy.copyInvite
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/contact/components/contact-form.tsx",
                        lineNumber: 611,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/contact/components/contact-form.tsx",
                lineNumber: 602,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/contact/components/contact-form.tsx",
        lineNumber: 370,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/contact/components/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$contact$2f$components$2f$contact$2d$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/contact/components/contact-form.tsx [app-ssr] (ecmascript)");
;
}),
"[project]/src/features/contact/components/contact-form.tsx [app-ssr] (ecmascript) <export default as ContactForm>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactForm",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$contact$2f$components$2f$contact$2d$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$contact$2f$components$2f$contact$2d$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/contact/components/contact-form.tsx [app-ssr] (ecmascript)");
}),
"[project]/src/features/landing/components/architecture/architecture-demo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArchitectureDemo",
    ()=>ArchitectureDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
"use client";
;
;
const architectureSteps = [
    {
        defaultTitle: "Corpus autorisés",
        defaultDesc: "Rassemblez les documents utiles dans un espace contrôlé, sans imposer une refonte complète de vos outils."
    },
    {
        defaultTitle: "Contenu analysé",
        defaultDesc: "Les textes, tableaux, pages et métadonnées sont préparés pour rendre chaque document plus facile à interroger."
    },
    {
        defaultTitle: "Informations structurées",
        defaultDesc: "Les contenus sont organisés selon leur logique : titres, clauses, articles, annexes, versions et éléments clés."
    },
    {
        defaultTitle: "Recherche gouvernée",
        defaultDesc: "Les utilisateurs retrouvent les passages pertinents grâce à une recherche hybride combinant sens, termes, contexte et visuels."
    },
    {
        defaultTitle: "Réponses avec sources",
        defaultDesc: "Prosperify sélectionne les extraits utiles et génère des réponses structurées, accompagnées des références nécessaires."
    },
    {
        defaultTitle: "Vérification des limites",
        defaultDesc: "Les réponses peuvent signaler les zones d'incertitude ou les éléments qui nécessitent une validation humaine."
    },
    {
        defaultTitle: "Suivi & amélioration",
        defaultDesc: "Les usages, la qualité des réponses et les besoins d'évolution peuvent être suivis pour améliorer le service dans le temps."
    }
];
function ArchitectureDemo() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border border-[var(--pf-border)]",
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: "1px",
                    background: "var(--pf-border)"
                },
                children: architectureSteps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group border-t-2 border-transparent transition-all duration-[250ms] hover:border-t-[#FF6A13]",
                        style: {
                            padding: "clamp(22px, 2.4vw, 30px)",
                            background: "var(--pf-bg-card)"
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.background = "var(--pf-bg-hover)";
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.background = "var(--pf-bg-card)";
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[22px] font-semibold text-[#FF6A13]",
                                        children: String(index + 1).padStart(2, "0")
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/architecture/architecture-demo.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-px flex-1",
                                        style: {
                                            background: "var(--pf-border)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/architecture/architecture-demo.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-xs text-[var(--pf-border-2)]",
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/architecture/architecture-demo.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/landing/components/architecture/architecture-demo.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "m-0 mt-[18px] text-[1.05rem] font-bold text-[var(--pf-fg)]",
                                children: t(`architecture.steps.${index}.title`, {
                                    defaultValue: step.defaultTitle
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/architecture/architecture-demo.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "m-0 mt-2.5 text-[13px] leading-[1.55] text-[var(--pf-fg-muted)]",
                                children: t(`architecture.steps.${index}.description`, {
                                    defaultValue: step.defaultDesc
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/architecture/architecture-demo.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/features/landing/components/architecture/architecture-demo.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/features/landing/components/architecture/architecture-demo.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 flex items-center gap-2.5 font-mono text-[11px] tracking-[0.1em] text-[var(--pf-fg-dim)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-1.5 w-1.5 bg-[#FF6A13]"
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/architecture/architecture-demo.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    t("architecture.footerNote", {
                        defaultValue: "Sources, accès et vérification conservés à chaque étape"
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/landing/components/architecture/architecture-demo.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/landing/components/architecture/architecture-demo.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/landing/components/architecture/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$architecture$2f$architecture$2d$demo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/landing/components/architecture/architecture-demo.tsx [app-ssr] (ecmascript)");
;
}),
"[project]/src/features/landing/components/faq/faq-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FAQSection",
    ()=>FAQSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/script.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const faqData = Array.from({
    length: 8
}, (_, index)=>({
        answerKey: `faq.items.${index}.answer`,
        questionKey: `faq.items.${index}.question`
    }));
function FAQSection() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const [openItems, setOpenItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const toggleItem = (index)=>{
        setOpenItems((prev)=>prev.includes(index) ? prev.filter((i)=>i !== index) : [
                ...prev,
                index
            ]);
    };
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqData.map((item, index)=>({
                "@type": "Question",
                name: t(item.questionKey),
                acceptedAnswer: {
                    "@type": "Answer",
                    text: t(item.answerKey)
                }
            }))
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "faq-jsonld",
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(faqJsonLd)
                }
            }, void 0, false, {
                fileName: "[project]/src/features/landing/components/faq/faq-section.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "m-0 font-bold leading-[1.06] tracking-[-0.02em] text-[var(--pf-fg)]",
                        style: {
                            fontSize: "clamp(1.9rem, 4vw, 3.1rem)"
                        },
                        children: [
                            t("faq.titleLine1"),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#FF6A13]",
                                children: t("faq.titleHighlight")
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/faq/faq-section.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/landing/components/faq/faq-section.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-11 mt-[18px] max-w-[640px] text-[1.05rem] text-[var(--pf-fg-muted)]",
                        children: t("faq.subtitle")
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/faq/faq-section.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border border-[var(--pf-border)]",
                        children: faqData.map((item, index)=>{
                            const isOpen = openItems.includes(index);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-b border-[var(--pf-border)] last:border-b-0",
                                style: {
                                    background: isOpen ? "var(--pf-bg-card-2)" : "transparent"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>toggleItem(index),
                                        className: "flex w-full cursor-pointer items-center justify-between gap-5 border-none bg-transparent text-left",
                                        style: {
                                            padding: "20px clamp(18px, 2.4vw, 28px)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex min-w-0 items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "shrink-0 font-mono text-xs text-[#FF6A13]",
                                                        children: String(index + 1).padStart(2, "0")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/landing/components/faq/faq-section.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-[15px] font-semibold", isOpen ? "text-[var(--pf-fg)]" : "text-[var(--pf-fg-muted)]"),
                                                        children: t(item.questionKey)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/landing/components/faq/faq-section.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/landing/components/faq/faq-section.tsx",
                                                lineNumber: 72,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "shrink-0 font-mono text-[18px] text-[#FF6A13]",
                                                children: isOpen ? "−" : "+"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/landing/components/faq/faq-section.tsx",
                                                lineNumber: 85,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/landing/components/faq/faq-section.tsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this),
                                    isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "m-0 text-sm leading-[1.65] text-[var(--pf-fg-muted)]",
                                        style: {
                                            padding: "0 clamp(18px, 2.4vw, 28px) 22px 50px"
                                        },
                                        children: t(item.answerKey)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/faq/faq-section.tsx",
                                        lineNumber: 90,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/src/features/landing/components/faq/faq-section.tsx",
                                lineNumber: 61,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/faq/faq-section.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/landing/components/faq/faq-section.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/features/landing/components/faq/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$faq$2f$faq$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/landing/components/faq/faq-section.tsx [app-ssr] (ecmascript)");
;
}),
"[project]/src/features/landing/components/features/prosperify-features.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProsperifyFeatures
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const featureIds = [
    "precision",
    "coverage",
    "performance",
    "governance",
    "orchestration",
    "differentiation"
];
const AUTO_SLIDE_DELAY_MS = 6500;
function ProsperifyFeatures() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [resetKey, setResetKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const touchStartX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = rootRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(([entry])=>setIsVisible(Boolean(entry?.isIntersecting)), {
            threshold: 0.3
        });
        obs.observe(el);
        return ()=>obs.disconnect();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isVisible || isPaused || document.hidden) return;
        const timer = setTimeout(()=>{
            setActiveTab((prev)=>(prev + 1) % featureIds.length);
        }, AUTO_SLIDE_DELAY_MS);
        return ()=>clearTimeout(timer);
    }, [
        activeTab,
        resetKey,
        isVisible,
        isPaused
    ]);
    const selectSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((index, userInitiated = false)=>{
        const next = (index % featureIds.length + featureIds.length) % featureIds.length;
        setActiveTab(next);
        if (userInitiated) setResetKey((k)=>k + 1);
    }, []);
    const handleTouchStart = (e)=>{
        touchStartX.current = e.touches[0]?.clientX ?? null;
        setIsPaused(true);
    };
    const handleTouchEnd = (e)=>{
        const start = touchStartX.current;
        touchStartX.current = null;
        if (start !== null) {
            const delta = (e.changedTouches[0]?.clientX ?? 0) - start;
            if (Math.abs(delta) >= 42) selectSlide(delta < 0 ? activeTab + 1 : activeTab - 1, true);
        }
        window.setTimeout(()=>setIsPaused(false), 300);
    };
    const currentId = featureIds[activeTab];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: rootRef,
        className: "[overflow-anchor:none]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "m-0 max-w-[820px] font-bold leading-[1.06] tracking-[-0.02em] text-[var(--pf-fg)]",
                style: {
                    fontSize: "clamp(1.9rem, 4vw, 3.1rem)"
                },
                children: [
                    t("features.title"),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#FF6A13]",
                        children: t("features.titleHighlight")
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/features/prosperify-features.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/landing/components/features/prosperify-features.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-11 touch-pan-y border border-[var(--pf-border)]",
                style: {
                    display: "grid",
                    gridTemplateColumns: "clamp(180px, 30%, 320px) 1fr",
                    gap: "1px",
                    background: "var(--pf-border)"
                },
                onTouchStart: handleTouchStart,
                onTouchEnd: handleTouchEnd,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: "var(--pf-bg-card)"
                        },
                        onPointerEnter: ()=>setIsPaused(true),
                        onPointerLeave: ()=>setIsPaused(false),
                        children: featureIds.map((id, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>selectSlide(i, true),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex w-full cursor-pointer items-center gap-4 px-5 py-[18px] transition-all duration-300"),
                                style: {
                                    borderLeft: `2px solid ${activeTab === i ? "#FF6A13" : "transparent"}`,
                                    background: activeTab === i ? "var(--pf-bg-active)" : "transparent"
                                },
                                onMouseEnter: (e)=>{
                                    if (activeTab !== i) e.currentTarget.style.background = "var(--pf-bg-hover)";
                                },
                                onMouseLeave: (e)=>{
                                    if (activeTab !== i) e.currentTarget.style.background = "transparent";
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-[38px] w-[38px] shrink-0 items-center justify-center border font-mono text-xs font-semibold", activeTab === i ? "border-[#FF6A13] text-[#FF6A13]" : "text-[var(--pf-fg-dim)]"),
                                        style: {
                                            borderColor: activeTab === i ? "#FF6A13" : "var(--pf-border)"
                                        },
                                        children: String(i + 1).padStart(2, "0")
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/features/prosperify-features.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-left text-sm font-semibold", activeTab === i ? "text-[var(--pf-fg)]" : "text-[var(--pf-fg-muted)]"),
                                        children: t(`features.items.${id}.shortTitle`)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/features/prosperify-features.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, id, true, {
                                fileName: "[project]/src/features/landing/components/features/prosperify-features.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/features/prosperify-features.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-h-[460px] flex-col justify-center",
                        style: {
                            padding: "clamp(32px, 4vw, 56px)",
                            background: "var(--pf-bg-card)"
                        },
                        onPointerEnter: ()=>setIsPaused(true),
                        onPointerLeave: ()=>setIsPaused(false),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex h-[52px] w-[52px] items-center justify-center border border-[#FF6A13]",
                                        style: {
                                            background: "var(--pf-accent-bg-2)"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-4 w-4 border-2 border-[#FF6A13]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/landing/components/features/prosperify-features.tsx",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/features/prosperify-features.tsx",
                                        lineNumber: 156,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-xs text-[var(--pf-fg-dim)]",
                                        children: [
                                            String(activeTab + 1).padStart(2, "0"),
                                            " / 06"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/landing/components/features/prosperify-features.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/landing/components/features/prosperify-features.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "m-0 mt-6 min-h-[88px] font-bold leading-[1.12] text-[var(--pf-fg)]",
                                style: {
                                    fontSize: "clamp(1.5rem, 2.6vw, 2.2rem)"
                                },
                                children: t(`features.items.${currentId}.title`)
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/features/prosperify-features.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3.5 text-sm font-semibold text-[#FF6A13]",
                                children: t(`features.items.${currentId}.subtitle`)
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/features/prosperify-features.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-[18px] max-w-[620px] text-base leading-[1.7] text-[var(--pf-fg-muted)]",
                                children: t(`features.items.${currentId}.description`)
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/features/prosperify-features.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/landing/components/features/prosperify-features.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/landing/components/features/prosperify-features.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/landing/components/features/prosperify-features.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/landing/components/features/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$features$2f$prosperify$2d$features$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/landing/components/features/prosperify-features.tsx [app-ssr] (ecmascript)");
;
}),
"[project]/src/features/landing/components/features/prosperify-features.tsx [app-ssr] (ecmascript) <export default as ProsperifyFeatures>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProsperifyFeatures",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$features$2f$prosperify$2d$features$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$features$2f$prosperify$2d$features$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/landing/components/features/prosperify-features.tsx [app-ssr] (ecmascript)");
}),
"[project]/src/features/landing/components/footer/footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LandingFooter",
    ()=>LandingFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
"use client";
;
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
    const { i18n, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const lang = i18n.language.startsWith("fr") ? "fr" : "en";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "relative z-10 border-t border-[var(--pf-border)]",
        style: {
            background: "var(--pf-bg-card)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-[1360px] border-x border-[var(--pf-border)] px-5 py-12 sm:px-8 sm:py-16 lg:px-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-[1.35fr_repeat(4,1fr)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-2 lg:col-span-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "inline-flex items-center border border-[var(--pf-border)] px-3 py-2.5",
                                    style: {
                                        background: "var(--pf-bg-card-2)"
                                    },
                                    "aria-label": "Prosperify home",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-[13px] leading-relaxed text-[var(--pf-fg-muted)]",
                                    children: t("footer.tagline")
                                }, void 0, false, {
                                    fileName: "[project]/src/features/landing/components/footer/footer.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                        footerGroups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--pf-fg-dim)]",
                                        children: group.titleKey ? t(group.titleKey) : group.title?.[lang] ?? ""
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/footer/footer.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2.5",
                                        children: group.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                            }, group.titleKey ?? group.title?.en ?? "footer-group", true, {
                                fileName: "[project]/src/features/landing/components/footer/footer.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/landing/components/footer/footer.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-10 border-t border-[var(--pf-border)] pt-8 sm:mt-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-6 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--pf-fg-dim)]",
                            children: t("footer.partnersTitle")
                        }, void 0, false, {
                            fileName: "[project]/src/features/landing/components/footer/footer.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center justify-center gap-10",
                            children: partners.map((partner)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "group flex flex-col items-center gap-2",
                                    href: partner.href,
                                    rel: "noopener noreferrer",
                                    target: "_blank",
                                    "aria-label": partner.label,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 flex flex-col items-center justify-between gap-4 border-t border-[var(--pf-border)] pt-6 sm:mt-10 sm:flex-row sm:pt-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-xs text-[var(--pf-fg-dim)] sm:text-left",
                            children: t("footer.copyright")
                        }, void 0, false, {
                            fileName: "[project]/src/features/landing/components/footer/footer.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
}),
"[project]/src/features/landing/components/footer/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$footer$2f$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/landing/components/footer/footer.tsx [app-ssr] (ecmascript)");
;
}),
"[project]/src/locales/en/translation.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"meta\":{\"title\":\"Prosperify - Verifiable document intelligence for sensitive data\",\"description\":\"Query sensitive corpora with sourced answers, governed access and deployment modes adapted to your perimeter.\"},\"hero\":{\"badge\":\"Document intelligence for sensitive data\",\"titleLine1\":\"Turn confidential\",\"titleHighlight\":\"documents\",\"titleLine2\":\"into sourced answers.\",\"subtitle\":\"Prosperify helps teams find, compare and verify information across sensitive corpora, with visible sources, governed access and a clear trust perimeter.\",\"primaryCta\":\"Request a demo\",\"secondaryCta\":\"See the workflow\",\"demoCaption\":\"\",\"stats\":{\"citations\":\"answers linked to consulted sources\",\"deployment\":\"deployment modes: cloud, hybrid, local\",\"sources\":\"PDF, Word, Excel, CSV, JSON and business corpora\"},\"trust\":{\"sources\":\"Cited sources\",\"permissions\":\"Governed access\",\"deployment\":\"Cloud, hybrid or local\",\"audit\":\"Sources and usage tracked\",\"sovereignty\":\"Cloud, hybrid or on-prem\"}},\"workflow\":{\"badge\":\"HOW IT WORKS\",\"title\":\"Verifiable answers\",\"titleHighlight\":\"without losing control\",\"titleSuffix\":\"\",\"subtitle\":\"A simple sequence: approved sources, scoped access, verifiable answers.\"},\"workflowTabs\":{\"create\":{\"title\":\"Connect\",\"heading\":\"Prepare only approved sources\",\"subtitle\":\"Useful documents are prepared and made searchable inside a controlled corpus.\",\"assistantNameLabel\":\"Assistant name\",\"assistantNameValue\":\"Transaction & Legal Assistant\",\"documentsLabel\":\"Verified corpus\",\"documentsTransactionsName\":\"KYC_Verdi.xlsx\",\"button\":\"Connect corpus\",\"sourceStatus\":\"Approved\",\"pipelineLabel\":\"Sources\",\"readyBadge\":\"Ready to query\",\"checkParsed\":\"Structure detected\",\"checkIndexed\":\"Passages retrievable\",\"checkScoped\":\"Scope applied\",\"sources\":[\"Signed contracts\",\"Client files\",\"Internal procedures\"],\"pipeline\":[\"Read\",\"Prepare\",\"Index\"]},\"unify\":{\"title\":\"Scope\",\"subtitle\":\"Each assistant works on its own corpus.\",\"dropHere\":\"Add authorized documents\",\"browse\":\"Browse files\",\"heading\":\"One assistant per team\",\"formatsInfo\":\"PDF, Word, Excel, CSV, JSON, reports, contracts...\",\"filetypePdf\":\"PDF\",\"filetypeCsv\":\"CSV\",\"filetypeDocx\":\"DOCX\",\"filetypeJson\":\"JSON\",\"rolesLabel\":\"Mission\",\"scopeLabel\":\"Corpus\",\"matrixCorpus\":\"Corpus\",\"allowedLabel\":\"Configured assistants\",\"policyNote\":\"Segmentation happens at assistant level: corpus, mission and limits are defined before use.\",\"rules\":[\"Visible sources\",\"Scoped answers\",\"Search + citations\"],\"scopes\":[\"Verdi contracts\",\"KYC files\",\"HR procedures\"],\"assistants\":[{\"name\":\"Legal\",\"role\":\"Clauses and contracts\",\"corpus\":\"Contracts\",\"action\":\"Compare\"},{\"name\":\"Compliance\",\"role\":\"KYC and sensitive records\",\"corpus\":\"KYC\",\"action\":\"Verify\"},{\"name\":\"HR\",\"role\":\"Internal procedures\",\"corpus\":\"Procedures\",\"action\":\"Answer\"}]},\"chat\":{\"title\":\"Query\",\"assistantName\":\"Verification assistant\",\"searchPlaceholder\":\"Search...\",\"newChat\":\"New Chat\",\"botWelcome\":\"Short answers, visible sources.\",\"userQuestion\":\"What is the term of the Verdi contract?\",\"sourcesLabel\":\"Sources used\",\"answer\":{\"prefix\":\"Source\",\"middle\":\"initial term:\",\"highlight\":\"three years\",\"suffix\":\"Renewal requires a written agreement.\"},\"inputPlaceholder\":\"Ask for a verification...\"}},\"cookie\":{\"accept\":\"Accept all\",\"learn\":\"Learn more\",\"message\":\"This site uses cookies for analytics. You can choose which categories to accept.\",\"reject\":\"Reject all\"},\"contact\":{\"badge\":\"CONTACT\",\"titleLine1\":\"See how Prosperify works\",\"titleHighlight\":\"on enterprise documents\",\"subtitle\":\"Send a short note or create a calendar invite with Prosperify already added as a guest.\",\"meeting\":{\"heading\":\"Schedule a working session\",\"description\":\"Prefer a live discussion? Open a pre-filled Google Calendar event with Prosperify already added as a guest.\",\"cta\":\"Open Google Calendar\",\"note\":\"When you save or send the event, Prosperify is included on the invitation. Add Google Meet from the calendar event before sending if it is not enabled by default.\",\"title\":\"Prosperify deployment discussion\",\"details\":\"Discuss document scope, security requirements, deployment model and next steps with Prosperify.\",\"location\":\"Google Meet\"},\"form\":{\"namePlaceholder\":\"Your full name\",\"companyPlaceholder\":\"Your company name\",\"emailPlaceholder\":\"Your email\",\"phonePlaceholder\":\"Phone (optional)\",\"subjectPlaceholder\":\"Select a subject\",\"subjectInformation\":\"Request a demo\",\"subjectPartnership\":\"Frame a document pilot\",\"subjectOther\":\"Assess a sovereign deployment\",\"subjectApi\":\"Discuss an API integration\",\"subjectVirtualPartner\":\"Partnership / virtual coworker\",\"messagePlaceholder\":\"Your message\",\"submit\":\"Send request\",\"statusSending\":\"⏳ Sending...\",\"statusSuccess\":\"✅ Message sent!\",\"statusFixErrors\":\"❌ Please correct the errors above.\",\"statusUnexpected\":\"❌ Unexpected error.\",\"statusSendError\":\"❌ Sending error.\"}},\"aiChat\":{\"sidebar\":{\"history\":\"History\"},\"conversations\":[\"Verdi contract\",\"Q4 Budget\",\"HR Procedures\",\"Monthly report\"],\"openDocumentFull\":\"Open Contrat_Verdi.pdf (page 10)\",\"openDocumentShort\":\"Contrat_Verdi.pdf (page 10)\",\"pdf\":{\"contractNameSecondary\":\"Q4_Financial_Report.pdf\",\"title\":\"Verdi Contract.pdf\"}},\"products\":{\"badge\":\"DEPLOYMENT\",\"titlePrefix\":\"Deploy with the\",\"titleMiddle\":\"right level\",\"titleHighlight\":\"of control\",\"subtitle\":\"Three deployment modes to match the right level of control, integration and operations.\",\"offers\":[{\"badge\":\"\",\"title\":\"Dedicated Cloud\",\"descriptionSegments\":[],\"features\":[\"High-performance dedicated infrastructure\",\"Guaranteed security and compliance\",\"Automatic maintenance and updates\",\"Instant scalability\"]},{\"badge\":\"\",\"title\":\"Hybrid\",\"descriptionSegments\":[],\"features\":[\"Your data stays on your infrastructure\",\"AI model hosted and maintained by us\",\"Maximum regulatory compliance\",\"Full control over your information\"]},{\"badge\":\"MAXIMUM SECURITY\",\"title\":\"100% Local\",\"descriptionSegments\":[],\"features\":[\"Deployment on your infrastructure\",\"Total data sovereignty\",\"No external dependency\",\"Maximum customization\"]}]},\"features\":{\"badge\":\"CAPABILITIES\",\"title\":\"Document intelligence\",\"titleHighlight\":\"that stays sourced and governed\",\"subtitle\":\"\",\"items\":{\"precision\":{\"shortTitle\":\"Sourced answers\",\"title\":\"Sourced and reviewable answers\",\"subtitle\":\"Sentence-level citations\",\"description\":\"Each answer keeps the link to the excerpts used so teams can review, audit and validate results against the source material.\"},\"coverage\":{\"shortTitle\":\"Hybrid search\",\"title\":\"Hybrid search across document corpora\",\"subtitle\":\"Semantic, lexical, visual and contextual\",\"description\":\"Prosperify combines semantic search, keywords, document context and visual signals to retrieve useful passages across heterogeneous corpora.\"},\"performance\":{\"shortTitle\":\"Reliable synthesis\",\"title\":\"Synthesis framed by your sources\",\"subtitle\":\"Search, compare, extract\",\"description\":\"Specialized assistants help teams summarize, compare clauses and extract key information from authorized documents.\"},\"governance\":{\"shortTitle\":\"Controlled access\",\"title\":\"Access controlled by role and assistant\",\"subtitle\":\"Each user in the right perimeter\",\"description\":\"Access can be limited by role, team, confidentiality level, assistant or authorized corpus.\"},\"orchestration\":{\"shortTitle\":\"Review Workflow\",\"title\":\"A review workflow for business teams\",\"subtitle\":\"Search, answer, verify\",\"description\":\"Prosperify keeps retrieved passages, citations and answer context visible so teams can review important answers before using them.\"},\"differentiation\":{\"shortTitle\":\"Sovereignty\",\"title\":\"Data sovereignty\",\"subtitle\":\"Data in a defined trust perimeter\",\"description\":\"Dedicated, hybrid or local deployment, with data isolation and no training of general models on client corpora.\"}},\"deployment\":{\"dedicated\":{\"title\":\"Dedicated Cloud\",\"line1\":\"Instance dedicated to your organization\",\"line2\":\"Security controls and review support\",\"line3\":\"Managed maintenance and updates\",\"line4\":\"Capacity adjusted to the perimeter\"},\"hybrid\":{\"title\":\"Hybrid\",\"line1\":\"Sensitive data inside your perimeter\",\"line2\":\"Private connectors when needed\",\"line3\":\"Support for internal reviews\",\"line4\":\"Controlled information flows\"},\"local\":{\"title\":\"Local deployment\",\"badge\":\"REINFORCED CONTROL\",\"line1\":\"Deployment on your infrastructure\",\"line2\":\"Documents and operations inside your perimeter\",\"line3\":\"External dependencies limited by scope\",\"line4\":\"Runbooks adapted to your operations\"}}},\"sovereignty\":{\"badge\":\"SECURITY & GOVERNANCE\",\"titlePrefix\":\"Keep data\",\"titleHighlight\":\"protected in a dedicated instance\",\"titleSuffix\":\"from document to answer\",\"subtitle\":\"\",\"mainCard\":{\"titleLine1\":\"A single-tenant architecture\",\"titleLine2\":\"\",\"description\":\"Each client gets an isolated perimeter for documents, assistants, permissions and usage traces.\",\"chips\":[\"Corpora\",\"Permissions\",\"Sources\"]},\"cloud\":{\"title\":\"Dedicated instance\",\"description\":\"Each organization runs in its own environment, separating data, processing and sensitive operations.\",\"chips\":[\"Single-tenant\",\"Isolated\",\"Dedicated\"]},\"encryption\":{\"title\":\"Key management system\",\"description\":\"Key management protects documents and metadata stored in the data layer.\",\"chips\":[\"Stored data\",\"Protection\",\"Control\"]},\"kubernetes\":{\"title\":\"Controlled access\",\"description\":\"Access is limited by role, assistant, corpus and usage so each team stays within its perimeter.\",\"chips\":[\"Roles\",\"Assistants\",\"Scopes\"]},\"dataProtection\":{\"title\":\"Monitoring and audit\",\"description\":\"Operational signals help understand usage, diagnose incidents and review sourced answers.\",\"chips\":[\"Usage\",\"Audit\",\"Review\"]},\"supervision\":{\"title\":\"Deployment matched to your perimeter\",\"description\":\"Dedicated cloud, hybrid or local: the selected mode aligns with confidentiality and operating requirements.\",\"badges\":[\"Dedicated cloud\",\"Hybrid\",\"Local\"],\"chips\":[\"Dedicated cloud\",\"Hybrid\",\"Local\"]}},\"integration\":{\"badge\":\"INTEGRATION\",\"titlePrefix\":\"A document layer\",\"titleHighlight\":\"above\",\"titleSuffix\":\"your existing tools\",\"subtitle\":\"Prosperify can be introduced progressively on top of existing sources so authorized corpora become queryable, governed and reviewable.\",\"steps\":[{\"title\":\"Scoping\",\"description\":\"Clarify the use case, identify the corpus and frame access rules.\"},{\"title\":\"Pilot ingestion\",\"description\":\"Prepare documents, make sources retrievable and test first queries.\"},{\"title\":\"Configuration\",\"description\":\"Configure pilot users, verify access and prepare scenarios.\"},{\"title\":\"Business validation\",\"description\":\"Review answer quality, identify limits and decide next steps.\"},{\"title\":\"Production and extension\",\"description\":\"Track usage, supervise operations and define the expansion path.\"}]},\"architecture\":{\"titlePrefix\":\"An architecture designed for\",\"titleHighlight\":\"document trust\",\"subtitle\":\"A clear chain for moving from sensitive documents to sourced, reviewable and controllable answers.\",\"steps\":[{\"title\":\"Authorized corpora\",\"description\":\"Bring useful documents into a controlled space without forcing a full tooling rebuild.\"},{\"title\":\"Automatic content analysis\",\"description\":\"Texts, tables, pages and metadata are prepared so each document becomes easier to query.\"},{\"title\":\"Structured information\",\"description\":\"Content is organized around titles, clauses, articles, appendices, versions and key elements.\"},{\"title\":\"Governed search\",\"description\":\"Users retrieve relevant passages through hybrid search that combines meaning, exact terms, context and visual signals when the document supports them.\"},{\"title\":\"Answers with sources\",\"description\":\"Prosperify selects useful excerpts and generates structured answers with references for review.\"},{\"title\":\"Limit verification\",\"description\":\"Answers can surface uncertainty or elements that require human validation.\"},{\"title\":\"Monitoring and iteration\",\"description\":\"Usage, answer quality and evolution needs can be followed over time.\"}]},\"technical\":{\"badge\":\"DOCUMENT CHAIN\",\"title\":\"A readable chain built for\",\"titleHighlight\":\"evidence\",\"subtitle\":\"From added document to cited answer, each step preserves the link back to the source.\",\"footnote\":\"Sources, access and verification preserved at each step\",\"steps\":{\"ingest\":{\"title\":\"Authorized corpus\",\"body\":\"Documents and metadata enter a defined perimeter before use.\",\"metric\":\"Clear use case // Framed corpus\"},\"parse\":{\"title\":\"Preparation\",\"body\":\"Text, tables and pages are prepared while preserving useful context.\",\"metric\":\"Structure preserved // Sources prepared\"},\"embed\":{\"title\":\"Indexing\",\"body\":\"Passages are chunked and indexed for hybrid search.\",\"metric\":\"Isolated corpus // Governed access\"},\"retrieve\":{\"title\":\"Hybrid search\",\"body\":\"Semantic and lexical retrieval work together to find useful passages.\",\"metric\":\"Semantic + lexical search\"},\"cite\":{\"title\":\"Citations\",\"body\":\"Claims stay tied to reviewable excerpts.\",\"metric\":\"Answer linked to sources\"},\"verify\":{\"title\":\"Review\",\"body\":\"Sources, access and quality signals remain available for human review.\",\"metric\":\"Review-ready evidence\"}}},\"faq\":{\"badge\":\"FAQ\",\"titleLine1\":\"Have\",\"titleHighlight\":\"questions\",\"titleLine2\":\"? We have answers.\",\"subtitle\":\"Key answers about sources, security, deployment and document governance with Prosperify.\",\"items\":[{\"question\":\"Does the AI continuously learn from my data?\",\"answer\":\"No. Client corpora are not used to train general models. They are used to generate sourced answers inside the agreed project perimeter.\"},{\"question\":\"Where are documents hosted?\",\"answer\":\"It depends on the selected model: dedicated cloud, hybrid architecture or local deployment. The trust perimeter is defined with the client around security, confidentiality and operational constraints.\"},{\"question\":\"Does Prosperify replace experts?\",\"answer\":\"No. Prosperify helps automate document search, synthesis, extraction and comparison. Decisions, validation and interpretation remain with business experts.\"},{\"question\":\"How are answers verified?\",\"answer\":\"Answers are generated from selected document excerpts and linked back to the sources used. Insufficiently supported statements can be surfaced to support human review.\"},{\"question\":\"Can access be limited by role, assistant or corpus?\",\"answer\":\"Yes. Access can be governed by role, assistant, corpus, user or confidentiality level. Out-of-scope operations are refused according to configured rules.\"},{\"question\":\"Do we need to rebuild the information system?\",\"answer\":\"No. Prosperify can be added as a document intelligence layer on top of existing systems. Integration can start with one corpus, one assistant and one business use case before expanding.\"},{\"question\":\"Which formats are supported?\",\"answer\":\"Prosperify is designed for structured and unstructured documents, including PDF, Word, Excel, CSV, JSON and other business corpora depending on project scope.\"},{\"question\":\"Which deployment modes are possible?\",\"answer\":\"Three approaches are possible: dedicated cloud, hybrid or local. The choice depends on confidentiality level, infrastructure constraints and sovereignty needs.\"}]},\"team\":{\"badge\":\"Team\",\"titlePrefix\":\"The team behind\",\"titleHighlight\":\"Prosperify\",\"subtitle\":\"A focused product and engineering team building document AI for organizations that work with sensitive information.\"},\"jobs\":{\"badge\":\"Jobs\",\"titlePrefix\":\"Build trusted\",\"titleHighlight\":\"document AI\",\"subtitle\":\"Open roles and hiring updates from Prosperify. We keep the team small, technical, and close to real customer problems.\",\"apply\":\"Apply\",\"emptyTitle\":\"No open role right now\",\"emptyDescription\":\"We are not hiring for a specific seat today, but strong infrastructure, product, and applied AI profiles can still reach out.\",\"viewAll\":\"View all roles\"},\"footer\":{\"tagline\":\"Query your documents with verifiable answers.\",\"product\":\"Product\",\"support\":\"Support\",\"legal\":\"Legal\",\"links\":{\"home\":\"Home\",\"overview\":\"Overview\",\"workflow\":\"Workflow\",\"deployment\":\"Deployment\",\"blog\":\"Blog\",\"team\":\"Team\",\"jobs\":\"Jobs\",\"faq\":\"FAQ\",\"contact\":\"Contact\",\"features\":\"Features\",\"sovereignty\":\"Sovereignty\",\"integration\":\"Integration\",\"architecture\":\"Architecture\",\"privacy\":\"Privacy\",\"terms\":\"Terms\",\"rgpd\":\"GDPR\"},\"copyright\":\"© 2025 Prosperify. All rights reserved.\",\"partnersTitle\":\"Support & Partners\"},\"roadmap\":{\"metaTitle\":\"Roadmap - Prosperify\",\"metaDescription\":\"Discover Prosperify's roadmap and upcoming work in sourced document intelligence.\",\"items\":[{\"date\":\"06/14/2024\",\"titlePrefix\":\"Start of the\",\"titleHighlight\":\"Prosperify\",\"lead\":\"Official launch of Prosperify, with a simple idea: make enterprise document search easier to verify and use.\",\"descriptionSegments\":[{\"text\":\"This milestone marks the birth of an ambitious project built around a single vision: enabling organizations to \"},{\"text\":\"make better use of their document knowledge\",\"emphasis\":true},{\"text\":\" by reducing information silos and making sources easier to retrieve through a \"},{\"text\":\"smart document search technology\",\"emphasis\":true},{\"text\":\".\"}],\"imageAlt\":\"Prosperify (logo, early stage)\",\"imageSrc\":\"/assets/brand/logo-mark.png\",\"imageVariant\":\"brandMark\"},{\"date\":\"09/26/2024\",\"titlePrefix\":\"Contact with\",\"titleHighlight\":\"Orpi\",\"lead\":\"First discussion with Orpi to explore a potential collaboration.\",\"description\":\"A meeting dedicated to understanding the barriers related to data exploitation in French mid-sized companies, and to analysing the impact of information fragmentation on missed business opportunities.\",\"imageAlt\":\"Orpi\",\"imageSrc\":\"/assets/partners/orpi.webp\",\"imageVariant\":\"partnerSmall\"},{\"date\":\"10/03/2024\",\"titlePrefix\":\"Design review with\",\"titleHighlight\":\"ESA\",\"lead\":\"Meeting with the European Space Agency for a first design review.\",\"descriptionSegments\":[{\"text\":\"A discussion focused on understanding the \"},{\"text\":\"security standards\",\"emphasis\":true},{\"text\":\" and \"},{\"text\":\"sovereignty requirements\",\"emphasis\":true},{\"text\":\" demanded by such agencies, while exploring their interest in a \"},{\"text\":\"document search technology\",\"emphasis\":true},{\"text\":\" adapted to their specific needs.\"}],\"imageAlt\":\"ESA\",\"imageSrc\":\"/assets/partners/esa.png\",\"imageVariant\":\"partnerMedium\"},{\"date\":\"01/02/2025\",\"title\":\"Joining Pépite France\",\"lead\":\"Prosperify joins the Pépite France network to support student innovation.\",\"imageAlt\":\"Pépite France\",\"imageSrc\":\"/assets/partners/pepite-beelyss.png\",\"imageVariant\":\"partnerLarge\"},{\"date\":\"01/04/2025\",\"titlePrefix\":\"Meeting with\",\"titleHighlight\":\"TUBA\",\"lead\":\"Discussion with the TUBA ecosystem around urban innovation and new digital uses.\",\"descriptionSegments\":[{\"text\":\"This meeting made it possible to explore the \"},{\"text\":\"challenges of leveraging data in urban environments\",\"emphasis\":true},{\"text\":\" and to identify opportunities offered by Prosperify in a context of \"},{\"text\":\"territorial innovation\",\"emphasis\":true},{\"text\":\". A key moment to understand how our technology can address the challenges of \"},{\"text\":\"information centralization\",\"emphasis\":true},{\"text\":\" and \"},{\"text\":\"data valorization\",\"emphasis\":true},{\"text\":\" for local stakeholders.\"}],\"imageAlt\":\"TUBA\",\"imageSrc\":\"/assets/partners/tuba.png\",\"imageVariant\":\"partnerWide\"},{\"date\":\"02/17/2025\",\"titlePrefix\":\"Contact with\",\"titleHighlight\":\"AXA\",\"lead\":\"First discussion with AXA about a potential strategic collaboration.\",\"descriptionSegments\":[{\"text\":\"A two-step meeting: first, an analysis of the \"},{\"text\":\"barriers related to document search\",\"emphasis\":true},{\"text\":\" in large groups, as well as of the \"},{\"text\":\"tools currently in use\",\"emphasis\":true},{\"text\":\". Then, a \"},{\"text\":\"presentation of Prosperify\",\"emphasis\":true},{\"text\":\", its mission and the \"},{\"text\":\"technology used\",\"emphasis\":true},{\"text\":\" to address these challenges.\"}],\"imageAlt\":\"AXA\",\"imageSrc\":\"/assets/partners/axa.png\",\"imageVariant\":\"partnerMedium\"},{\"date\":\"05/12/2025\",\"titlePrefix\":\"Joining\",\"titleHighlight\":\"La French Tech\",\"lead\":\"Prosperify joins La French Tech to become part of a national innovation ecosystem.\",\"descriptionSegments\":[{\"text\":\"This integration marks a new milestone in Prosperify's development as a \"},{\"text\":\"member start-up\",\"emphasis\":true},{\"text\":\". It opens access to an \"},{\"text\":\"active ecosystem of young companies\",\"emphasis\":true},{\"text\":\", opening opportunities for synergies, partnerships and visibility within the French innovation network.\"}],\"imageAlt\":\"La French Tech\",\"imageSrc\":\"/assets/partners/french-tech.png\",\"imageVariant\":\"partnerLarge\"},{\"date\":\"08/2025\",\"titlePrefix\":\"Official launch of\",\"titleHighlight\":\"Prosperify\",\"lead\":\"Go-to-market of the solution after several months of design, testing and ecosystem discussions.\",\"descriptionSegments\":[{\"text\":\"The launch makes the vision concrete: offering companies a \"},{\"text\":\"sovereign document assistant\",\"emphasis\":true},{\"text\":\" capable of \"},{\"text\":\"centralizing\",\"emphasis\":true},{\"text\":\" and \"},{\"text\":\"simplifying access to data\",\"emphasis\":true},{\"text\":\", with visible sources, governed access and a clear security perimeter.\"}],\"imageAlt\":\"Prosperify (launch)\",\"imageSrc\":\"/assets/brand/logo-full.png\",\"imageVariant\":\"brandFull\"}]}}"));}),
"[project]/src/locales/fr/translation.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"meta\":{\"title\":\"Prosperify - Intelligence documentaire vérifiable pour données sensibles\",\"description\":\"Interrogez vos corpus sensibles avec des réponses sourcées, des accès gouvernés et des modes de déploiement adaptés à votre périmètre.\"},\"hero\":{\"badge\":\"Intelligence documentaire pour données sensibles\",\"titleLine1\":\"Transformez vos documents\",\"titleHighlight\":\"confidentiels\",\"titleLine2\":\"en réponses sourcées.\",\"subtitle\":\"Prosperify aide les équipes à retrouver, comparer et vérifier l'information dans leurs corpus sensibles, avec des sources visibles, des accès gouvernés et un périmètre de confiance clair.\",\"primaryCta\":\"Demander une démo\",\"secondaryCta\":\"Voir le workflow\",\"demoCaption\":\"\",\"stats\":{\"citations\":\"réponses reliées aux sources consultées\",\"deployment\":\"modes de déploiement : cloud, hybride, local\",\"sources\":\"PDF, Word, Excel, CSV, JSON et corpus métier\"},\"trust\":{\"sources\":\"Sources citées\",\"permissions\":\"Accès gouvernés\",\"deployment\":\"Cloud, hybride ou local\",\"audit\":\"Sources et usage suivis\",\"sovereignty\":\"Cloud, hybride ou sur site\"}},\"workflow\":{\"badge\":\"WORKFLOW\",\"title\":\"Des réponses vérifiables\",\"titleHighlight\":\"sans perdre le contrôle\",\"titleSuffix\":\"\",\"subtitle\":\"Une séquence simple : sources validées, accès cadrés, réponse vérifiable.\"},\"workflowTabs\":{\"create\":{\"title\":\"Connecter\",\"heading\":\"Préparez uniquement les sources validées\",\"subtitle\":\"Les documents utiles sont préparés et rendus interrogeables dans un corpus maîtrisé.\",\"assistantNameLabel\":\"Assistant cible\",\"assistantNameValue\":\"Assistant Juridique & Patrimonial\",\"documentsLabel\":\"Corpus vérifié\",\"documentsTransactionsName\":\"KYC_Verdi.xlsx\",\"button\":\"Connecter le corpus\",\"sourceStatus\":\"Validé\",\"pipelineLabel\":\"Sources\",\"readyBadge\":\"Prêt à interroger\",\"checkParsed\":\"Structure détectée\",\"checkIndexed\":\"Passages retrouvables\",\"checkScoped\":\"Périmètre appliqué\",\"sources\":[\"Contrats signés\",\"Dossiers clients\",\"Procédures internes\"],\"pipeline\":[\"Lire\",\"Préparer\",\"Indexer\"]},\"unify\":{\"title\":\"Cadrer\",\"subtitle\":\"Chaque assistant travaille sur son propre corpus.\",\"dropHere\":\"Ajoutez les documents autorisés\",\"browse\":\"Parcourir les fichiers\",\"heading\":\"Un assistant par équipe\",\"formatsInfo\":\"PDF, Word, Excel, CSV, JSON, rapports, contrats...\",\"filetypePdf\":\"PDF\",\"filetypeCsv\":\"CSV\",\"filetypeDocx\":\"DOCX\",\"filetypeJson\":\"JSON\",\"rolesLabel\":\"Mission\",\"scopeLabel\":\"Corpus\",\"matrixCorpus\":\"Corpus\",\"allowedLabel\":\"Assistants configurés\",\"policyNote\":\"La segmentation se fait au niveau de l'assistant : corpus, mission et limites sont définis avant usage.\",\"rules\":[\"Sources visibles\",\"Réponses cadrées\",\"Recherche + citations\"],\"scopes\":[\"Contrats Verdi\",\"Dossiers KYC\",\"Procédures RH\"],\"assistants\":[{\"name\":\"Juridique\",\"role\":\"Clauses et contrats\",\"corpus\":\"Contrats\",\"action\":\"Comparer\"},{\"name\":\"Conformité\",\"role\":\"KYC et pièces sensibles\",\"corpus\":\"KYC\",\"action\":\"Vérifier\"},{\"name\":\"RH\",\"role\":\"Procédures internes\",\"corpus\":\"Procédures\",\"action\":\"Répondre\"}]},\"chat\":{\"title\":\"Interroger\",\"assistantName\":\"Réponse contrôlée\",\"searchPlaceholder\":\"Rechercher...\",\"newChat\":\"Nouveau Chat\",\"botWelcome\":\"Chaque réponse reste reliée aux passages utilisés.\",\"userQuestion\":\"Quelle est la durée du contrat Verdi ?\",\"sourcesLabel\":\"Sources utilisées\",\"answer\":{\"prefix\":\"Source\",\"middle\":\"durée initiale :\",\"highlight\":\"trois ans\",\"suffix\":\"Le renouvellement exige un accord écrit.\"},\"inputPlaceholder\":\"Demander une vérification...\"}},\"cookie\":{\"accept\":\"Tout accepter\",\"learn\":\"En savoir plus\",\"message\":\"Ce site utilise des cookies à des fins d'analyse. Vous pouvez choisir les catégories à accepter.\",\"reject\":\"Tout refuser\"},\"contact\":{\"badge\":\"CONTACT\",\"titleLine1\":\"Voyez Prosperify en action\",\"titleHighlight\":\"sur des documents entreprise\",\"subtitle\":\"Envoyez une note courte ou créez une invitation calendrier avec Prosperify déjà ajouté en invité.\",\"meeting\":{\"heading\":\"Planifier une session de travail\",\"description\":\"Vous préférez un échange direct ? Ouvrez un événement Google Calendar prérempli avec Prosperify déjà ajouté en invité.\",\"cta\":\"Ouvrir Google Calendar\",\"note\":\"Quand vous enregistrez ou envoyez l'événement, Prosperify est inclus dans l'invitation. Ajoutez Google Meet depuis l'événement si ce n'est pas activé par défaut.\",\"title\":\"Discussion de déploiement Prosperify\",\"details\":\"Échanger sur le périmètre documentaire, les exigences de sécurité, le modèle de déploiement et les prochaines étapes avec Prosperify.\",\"location\":\"Google Meet\"},\"form\":{\"namePlaceholder\":\"Votre nom complet\",\"companyPlaceholder\":\"Nom de votre entreprise\",\"emailPlaceholder\":\"Votre email\",\"phonePlaceholder\":\"Téléphone (optionnel)\",\"subjectPlaceholder\":\"Sélectionnez l'objet\",\"subjectInformation\":\"Demander une démonstration\",\"subjectPartnership\":\"Cadrer un pilote documentaire\",\"subjectOther\":\"Évaluer un déploiement souverain\",\"subjectApi\":\"Discuter d'une intégration API\",\"subjectVirtualPartner\":\"Partenariat / collaborateur virtuel\",\"messagePlaceholder\":\"Votre message\",\"submit\":\"Envoyer ma demande\",\"statusSending\":\"⏳ Envoi en cours...\",\"statusSuccess\":\"✅ Message envoyé !\",\"statusFixErrors\":\"❌ Merci de corriger les erreurs ci-dessus.\",\"statusUnexpected\":\"❌ Erreur inattendue.\",\"statusSendError\":\"❌ Erreur d'envoi.\"}},\"aiChat\":{\"sidebar\":{\"history\":\"Historique\"},\"conversations\":[\"Contrat Verdi\",\"Budget T4\",\"Procédures RH\",\"Rapport mensuel\"],\"openDocumentFull\":\"Ouvrir Contrat_Verdi.pdf (page 10)\",\"openDocumentShort\":\"Contrat_Verdi.pdf (page 10)\",\"pdf\":{\"contractNameSecondary\":\"Rapport_Financier_T4.pdf\",\"title\":\"Contrat Verdi.pdf\"}},\"products\":{\"badge\":\"NOS OFFRES\",\"titlePrefix\":\"Une solution,\",\"titleMiddle\":\"trois niveaux de\",\"titleHighlight\":\"contrôle\",\"subtitle\":\"Trois modes de déploiement pour choisir le bon niveau de contrôle, d'intégration et d'exploitation.\",\"offers\":[{\"badge\":\"\",\"title\":\"Cloud Dédié\",\"descriptionSegments\":[],\"features\":[\"Infrastructure dédiée haute performance\",\"Sécurité et conformité garanties\",\"Maintenance et mises à jour automatiques\",\"Scalabilité instantanée\"]},{\"badge\":\"\",\"title\":\"Hybride\",\"descriptionSegments\":[],\"features\":[\"Vos données restent sur votre infrastructure\",\"Modèle IA hébergé et maintenu par nos soins\",\"Conformité réglementaire maximale\",\"Contrôle total de vos informations\"]},{\"badge\":\"SÉCURITÉ MAXIMALE\",\"title\":\"100% Local\",\"descriptionSegments\":[],\"features\":[\"Déploiement sur votre infrastructure\",\"Souveraineté totale des données\",\"Aucune dépendance externe\",\"Personnalisation maximale\"]}]},\"features\":{\"badge\":\"FONCTIONNALITÉS\",\"title\":\"Une intelligence documentaire\",\"titleHighlight\":\"sourcée, gouvernée et vérifiable\",\"subtitle\":\"\",\"items\":{\"precision\":{\"shortTitle\":\"Réponses sourcées\",\"title\":\"Réponses sourcées et vérifiables\",\"subtitle\":\"Citations phrase par phrase\",\"description\":\"Chaque réponse conserve le lien avec les extraits utilisés afin de faciliter la revue, l'audit et la validation métier.\"},\"coverage\":{\"shortTitle\":\"Recherche hybride\",\"title\":\"Recherche hybride dans tous vos documents\",\"subtitle\":\"Sémantique, lexicale, visuelle et contextuelle\",\"description\":\"Prosperify combine recherche sémantique, mots-clés, contexte documentaire et signaux visuels pour retrouver les passages utiles dans des corpus hétérogènes.\"},\"performance\":{\"shortTitle\":\"Synthèses fiables\",\"title\":\"Synthèses cadrées par vos sources\",\"subtitle\":\"Recherche, comparaison, extraction\",\"description\":\"Les assistants spécialisés aident vos équipes à synthétiser, comparer des clauses ou extraire des informations clés à partir des documents autorisés.\"},\"governance\":{\"shortTitle\":\"Accès contrôlés\",\"title\":\"Accès contrôlés par rôle et assistant\",\"subtitle\":\"Chaque utilisateur dans le bon périmètre\",\"description\":\"Les accès peuvent être limités selon le rôle, le service, le niveau de confidentialité, l'assistant ou le corpus autorisé.\"},\"orchestration\":{\"shortTitle\":\"Revue métier\",\"title\":\"Un workflow de revue pour les équipes métier\",\"subtitle\":\"Recherche, réponse, vérification\",\"description\":\"Prosperify garde les passages retrouvés, les citations et le contexte visibles afin d'aider les équipes à relire les réponses importantes avant usage.\"},\"differentiation\":{\"shortTitle\":\"Souveraineté\",\"title\":\"Souveraineté des données\",\"subtitle\":\"Données dans un périmètre de confiance\",\"description\":\"Déploiement dédié, hybride ou local, avec isolation des données et sans entraînement de modèles généraux sur les corpus clients.\"}},\"deployment\":{\"dedicated\":{\"title\":\"Cloud Dédié\",\"line1\":\"Instance dédiée à votre organisation\",\"line2\":\"Contrôles de sécurité et support de revue\",\"line3\":\"Maintenance et mises à jour gérées\",\"line4\":\"Capacité ajustable selon le périmètre\"},\"hybrid\":{\"title\":\"Hybride\",\"line1\":\"Données sensibles dans votre périmètre\",\"line2\":\"Connecteurs privés selon besoin\",\"line3\":\"Support pour vos revues internes\",\"line4\":\"Flux d'information contrôlés\"},\"local\":{\"title\":\"Déploiement local\",\"badge\":\"CONTRÔLE RENFORCÉ\",\"line1\":\"Déploiement sur votre infrastructure\",\"line2\":\"Documents et opérations dans votre périmètre\",\"line3\":\"Dépendances externes limitées selon le périmètre\",\"line4\":\"Runbooks adaptés à vos opérations\"}}},\"sovereignty\":{\"badge\":\"SÉCURITÉ & GOUVERNANCE\",\"titlePrefix\":\"Vos données\",\"titleHighlight\":\"protégées en instance dédiée\",\"titleSuffix\":\"du document à la réponse\",\"subtitle\":\"\",\"mainCard\":{\"titleLine1\":\"Une architecture single-tenant\",\"titleLine2\":\"\",\"description\":\"Chaque client dispose d'un périmètre isolé pour les documents, les assistants, les droits et les traces d'usage.\",\"chips\":[\"Corpus\",\"Droits\",\"Sources\"]},\"cloud\":{\"title\":\"Instance dédiée\",\"description\":\"Un environnement propre à chaque organisation sépare les données, les traitements et les opérations sensibles.\",\"chips\":[\"Single-tenant\",\"Isolé\",\"Dédié\"]},\"encryption\":{\"title\":\"Système de gestion des clés\",\"description\":\"La gestion des clés protège les documents et métadonnées stockés dans la couche données.\",\"chips\":[\"Données stockées\",\"Protection\",\"Contrôle\"]},\"kubernetes\":{\"title\":\"Accès maîtrisés\",\"description\":\"Les accès sont limités par rôle, assistant, corpus et usage afin que chaque équipe reste dans son périmètre.\",\"chips\":[\"Rôles\",\"Assistants\",\"Scopes\"]},\"dataProtection\":{\"title\":\"Suivi et audit\",\"description\":\"Les éléments de suivi aident à comprendre l'usage, diagnostiquer les incidents et examiner les réponses sourcées.\",\"chips\":[\"Usage\",\"Audit\",\"Revue\"]},\"supervision\":{\"title\":\"Déploiement adapté au périmètre\",\"description\":\"Cloud dédié, hybride ou local : le mode retenu s'aligne sur vos exigences de confidentialité et d'exploitation.\",\"badges\":[\"Cloud dédié\",\"Hybride\",\"Local\"],\"chips\":[\"Cloud dédié\",\"Hybride\",\"Local\"]}},\"integration\":{\"badge\":\"INTÉGRATION\",\"titlePrefix\":\"Une couche\",\"titleHighlight\":\"documentaire\",\"titleSuffix\":\"au-dessus de vos outils\",\"subtitle\":\"Prosperify s'ajoute progressivement à vos sources existantes pour rendre les corpus autorisés interrogeables, gouvernés et vérifiables.\",\"steps\":[{\"title\":\"Cadrage\",\"description\":\"Cas d'usage clarifié, corpus identifié, règles d'accès cadrées.\"},{\"title\":\"Ingestion pilote\",\"description\":\"Documents préparés, sources retrouvables, premières requêtes testées.\"},{\"title\":\"Configuration\",\"description\":\"Utilisateurs pilotes configurés, accès vérifiés, scénarios prêts.\"},{\"title\":\"Validation métier\",\"description\":\"Qualité des réponses relue, limites identifiées, arbitrages réalisés.\"},{\"title\":\"Production & extension\",\"description\":\"Usages suivis, supervision active, trajectoire d'extension définie.\"}]},\"architecture\":{\"titlePrefix\":\"Une architecture pensée pour la\",\"titleHighlight\":\"confiance documentaire\",\"subtitle\":\"Une chaîne claire pour passer de documents sensibles à des réponses sourcées, relisibles et contrôlables.\",\"steps\":[{\"title\":\"Corpus autorisés\",\"description\":\"Rassemblez les documents utiles dans un espace contrôlé, sans imposer une refonte complète de vos outils.\"},{\"title\":\"Contenu analysé automatiquement\",\"description\":\"Les textes, tableaux, pages et métadonnées sont préparés pour rendre chaque document plus facile à interroger.\"},{\"title\":\"Informations structurées\",\"description\":\"Les contenus sont organisés selon leur logique : titres, clauses, articles, annexes, versions et éléments clés.\"},{\"title\":\"Recherche gouvernée\",\"description\":\"Les utilisateurs retrouvent les passages pertinents grâce à une recherche hybride qui combine sens, termes exacts, contexte et éléments visuels lorsque le document s'y prête.\"},{\"title\":\"Réponses avec sources\",\"description\":\"Prosperify sélectionne les extraits utiles et génère des réponses structurées, accompagnées des références nécessaires à la vérification.\"},{\"title\":\"Vérification des limites\",\"description\":\"Les réponses peuvent signaler les zones d'incertitude ou les éléments qui nécessitent une validation humaine.\"},{\"title\":\"Suivi et amélioration continue\",\"description\":\"Les usages, la qualité des réponses et les besoins d'évolution peuvent être suivis pour améliorer le service dans le temps.\"}]},\"technical\":{\"badge\":\"CHAÎNE DOCUMENTAIRE\",\"title\":\"Une chaîne lisible, conçue pour la\",\"titleHighlight\":\"preuve\",\"subtitle\":\"Du document ajouté à la réponse citée, chaque étape conserve le lien avec la source.\",\"footnote\":\"Sources, accès et vérification conservés à chaque étape\",\"steps\":{\"ingest\":{\"title\":\"Corpus autorisé\",\"body\":\"Documents et métadonnées rejoignent un périmètre défini avant usage.\",\"metric\":\"Cas d'usage clair // Corpus cadré\"},\"parse\":{\"title\":\"Préparation\",\"body\":\"Textes, tableaux et pages sont préparés en conservant le contexte utile.\",\"metric\":\"Structure conservée // Sources préparées\"},\"embed\":{\"title\":\"Indexation\",\"body\":\"Les passages sont découpés et indexés pour la recherche hybride.\",\"metric\":\"Corpus isolé // Accès gouvernés\"},\"retrieve\":{\"title\":\"Recherche hybride\",\"body\":\"Recherche sémantique et lexicale travaillent ensemble pour retrouver les passages utiles.\",\"metric\":\"Recherche sémantique + lexicale\"},\"cite\":{\"title\":\"Citations\",\"body\":\"Les affirmations restent reliées aux extraits consultables.\",\"metric\":\"Réponse reliée aux sources\"},\"verify\":{\"title\":\"Revue\",\"body\":\"Les sources, accès et signaux de qualité restent disponibles pour l'examen humain.\",\"metric\":\"Éléments utiles pour la revue\"}}},\"faq\":{\"badge\":\"FAQ\",\"titleLine1\":\"Questions\",\"titleHighlight\":\"fréquentes\",\"titleLine2\":\"\",\"subtitle\":\"Les réponses essentielles sur les sources, la sécurité, le déploiement et la gouvernance documentaire avec Prosperify.\",\"items\":[{\"question\":\"Mes données servent-elles à entraîner des modèles ?\",\"answer\":\"Non. Les corpus clients ne sont pas utilisés pour entraîner les modèles. Prosperify interroge vos documents dans un périmètre dédié afin de produire des réponses sourcées, sans réutiliser votre capital documentaire.\"},{\"question\":\"Où sont hébergées les données ?\",\"answer\":\"Cela dépend du mode retenu : cloud dédié, architecture hybride ou déploiement local. Le périmètre de confiance est défini avec le client selon ses contraintes de sécurité, de confidentialité et d'exploitation.\"},{\"question\":\"Prosperify remplace-t-il les experts ?\",\"answer\":\"Non. Prosperify automatise la recherche, la synthèse, l'extraction et la comparaison documentaire. Les décisions, validations et interprétations restent portées par les experts métiers.\"},{\"question\":\"Comment les réponses sont-elles vérifiées ?\",\"answer\":\"Les réponses sont générées à partir d'extraits documentaires retenus, puis reliées aux sources utilisées. Les affirmations insuffisamment étayées peuvent être signalées afin de faciliter la revue humaine.\"},{\"question\":\"Peut-on limiter l'accès par rôle, assistant ou corpus ?\",\"answer\":\"Oui. Les accès peuvent être gouvernés par rôle, assistant, corpus, utilisateur ou niveau de confidentialité. Les opérations hors périmètre sont refusées selon les règles configurées.\"},{\"question\":\"Faut-il refondre le système d'information ?\",\"answer\":\"Non. Prosperify s'ajoute comme couche d'intelligence documentaire au-dessus des systèmes existants. L'intégration peut commencer avec un corpus, un assistant et un cas métier avant extension.\"},{\"question\":\"Quels formats sont pris en charge ?\",\"answer\":\"Prosperify est conçu pour traiter des documents structurés et non structurés, notamment PDF, Word, Excel, CSV, JSON et autres corpus métier selon le périmètre du projet.\"},{\"question\":\"Quels modes de déploiement sont possibles ?\",\"answer\":\"Trois approches sont possibles : cloud dédié, hybride ou local. Le choix dépend du niveau de confidentialité, des contraintes d'infrastructure et du besoin de souveraineté.\"}]},\"team\":{\"badge\":\"Équipe\",\"titlePrefix\":\"L'équipe derrière\",\"titleHighlight\":\"Prosperify\",\"subtitle\":\"Une équipe produit et ingénierie concentrée sur l'IA documentaire pour les organisations qui manipulent des informations sensibles.\"},\"jobs\":{\"badge\":\"Recrutement\",\"titlePrefix\":\"Construire l'IA documentaire\",\"titleHighlight\":\"de confiance\",\"subtitle\":\"Postes ouverts et actualités recrutement de Prosperify. Nous gardons une équipe resserrée, technique et proche des problèmes clients.\",\"apply\":\"Candidater\",\"emptyTitle\":\"Aucun poste ouvert pour le moment\",\"emptyDescription\":\"Nous ne recrutons pas sur un poste précis aujourd'hui, mais les profils infrastructure, produit et IA appliquée peuvent nous écrire.\",\"viewAll\":\"Voir les postes\"},\"footer\":{\"tagline\":\"Interrogez vos documents avec des réponses vérifiables.\",\"product\":\"Produit\",\"support\":\"Support\",\"legal\":\"Légal\",\"links\":{\"home\":\"Accueil\",\"overview\":\"Aperçu\",\"workflow\":\"Workflow\",\"deployment\":\"Déploiement\",\"blog\":\"Blog\",\"team\":\"Équipe\",\"jobs\":\"Recrutement\",\"faq\":\"FAQ\",\"contact\":\"Contact\",\"features\":\"Fonctionnalités\",\"sovereignty\":\"Souveraineté\",\"integration\":\"Intégration\",\"architecture\":\"Architecture\",\"privacy\":\"Confidentialité\",\"terms\":\"Conditions\",\"rgpd\":\"RGPD\"},\"copyright\":\"© 2025 Prosperify. Tous droits réservés.\",\"partnersTitle\":\"Accompagnement & Partenaires\"},\"roadmap\":{\"metaTitle\":\"Roadmap - Prosperify\",\"metaDescription\":\"Découvrez la feuille de route de Prosperify et nos prochaines évolutions en intelligence documentaire sourcée.\",\"items\":[{\"date\":\"14/06/2024\",\"titlePrefix\":\"Début du projet\",\"titleHighlight\":\"Prosperify\",\"lead\":\"Lancement officiel de Prosperify, avec une idée simple : rendre la recherche documentaire en entreprise plus exploitable et vérifiable.\",\"descriptionSegments\":[{\"text\":\"Cette étape marque la naissance d'un projet construit autour d'une vision : aider les organisations à \"},{\"text\":\"mieux exploiter leurs données documentaires\",\"emphasis\":true},{\"text\":\" en réduisant les silos d'information et en rendant les sources plus faciles à retrouver grâce à une \"},{\"text\":\"technologie de recherche documentaire intelligente\",\"emphasis\":true},{\"text\":\".\"}],\"imageAlt\":\"Prosperify (logo historique)\",\"imageSrc\":\"/assets/brand/logo-mark.png\",\"imageVariant\":\"brandMark\"},{\"date\":\"26/09/2024\",\"titlePrefix\":\"Contact avec\",\"titleHighlight\":\"Orpi\",\"lead\":\"Premier échange avec Orpi pour explorer une potentielle collaboration.\",\"description\":\"Rendez-vous dédié à la compréhension des barrages liés à l'exploitation des données dans les ETI françaises, ainsi qu'à l'analyse de l'impact de la fragmentation de l'information sur les opportunités commerciales manquées.\",\"imageAlt\":\"Orpi\",\"imageSrc\":\"/assets/partners/orpi.webp\",\"imageVariant\":\"partnerSmall\"},{\"date\":\"03/10/2024\",\"titlePrefix\":\"Revue de design avec\",\"titleHighlight\":\"ESA\",\"lead\":\"Rendez-vous avec l'Agence Spatiale Européenne pour une première revue de design.\",\"descriptionSegments\":[{\"text\":\"Rencontre axée sur la compréhension des \"},{\"text\":\"standards de sécurité\",\"emphasis\":true},{\"text\":\" et de \"},{\"text\":\"souveraineté\",\"emphasis\":true},{\"text\":\" exigés par ce type d'agences, tout en explorant leur intérêt pour une \"},{\"text\":\"technologie de recherche documentaire\",\"emphasis\":true},{\"text\":\" adaptée à leurs besoins spécifiques.\"}],\"imageAlt\":\"ESA\",\"imageSrc\":\"/assets/partners/esa.png\",\"imageVariant\":\"partnerMedium\"},{\"date\":\"02/01/2025\",\"title\":\"Intégration Pépite France\",\"lead\":\"Prosperify rejoint le réseau Pépite France pour soutenir l'innovation étudiante.\",\"imageAlt\":\"Pépite France\",\"imageSrc\":\"/assets/partners/pepite-beelyss.png\",\"imageVariant\":\"partnerLarge\"},{\"date\":\"04/01/2025\",\"titlePrefix\":\"Rencontre avec\",\"titleHighlight\":\"TUBA\",\"lead\":\"Échange avec l'écosystème TUBA autour de l'innovation urbaine et des nouveaux usages numériques.\",\"descriptionSegments\":[{\"text\":\"Cette rencontre a permis d'explorer les \"},{\"text\":\"défis liés à l'exploitation des données en milieu urbain\",\"emphasis\":true},{\"text\":\" et d'identifier les opportunités offertes par Prosperify dans un contexte d'\"},{\"text\":\"innovation territoriale\",\"emphasis\":true},{\"text\":\". Un moment clé pour comprendre comment notre technologie peut répondre aux enjeux de \"},{\"text\":\"centralisation de l'information\",\"emphasis\":true},{\"text\":\" et de \"},{\"text\":\"valorisation des données\",\"emphasis\":true},{\"text\":\" au service des acteurs locaux.\"}],\"imageAlt\":\"TUBA\",\"imageSrc\":\"/assets/partners/tuba.png\",\"imageVariant\":\"partnerWide\"},{\"date\":\"17/02/2025\",\"titlePrefix\":\"Contact avec\",\"titleHighlight\":\"AXA\",\"lead\":\"Premier échange avec AXA autour d'une potentielle collaboration stratégique.\",\"descriptionSegments\":[{\"text\":\"Rencontre en deux phases : d'abord, une analyse des \"},{\"text\":\"barrages liés à l'exploitation de la recherche documentaire\",\"emphasis\":true},{\"text\":\" dans les grands groupes, ainsi que des \"},{\"text\":\"outils actuellement utilisés\",\"emphasis\":true},{\"text\":\". Ensuite, une \"},{\"text\":\"présentation de Prosperify\",\"emphasis\":true},{\"text\":\", de sa mission et de la \"},{\"text\":\"technologie employée\",\"emphasis\":true},{\"text\":\" pour répondre à ces enjeux.\"}],\"imageAlt\":\"AXA\",\"imageSrc\":\"/assets/partners/axa.png\",\"imageVariant\":\"partnerMedium\"},{\"date\":\"12/05/2025\",\"titlePrefix\":\"Intégration\",\"titleHighlight\":\"La French Tech\",\"lead\":\"Prosperify rejoint La French Tech afin de s'inscrire dans un écosystème national d'innovation.\",\"descriptionSegments\":[{\"text\":\"Cette intégration marque une nouvelle étape dans le développement de Prosperify en tant que \"},{\"text\":\"start-up membre\",\"emphasis\":true},{\"text\":\". Elle ouvre l'accès à un \"},{\"text\":\"écosystème actif de jeunes entreprises\",\"emphasis\":true},{\"text\":\", ouvrant des opportunités de synergies, de partenariats et de visibilité au sein du réseau français de l'innovation.\"}],\"imageAlt\":\"La French Tech\",\"imageSrc\":\"/assets/partners/french-tech.png\",\"imageVariant\":\"partnerLarge\"},{\"date\":\"08/2025\",\"titlePrefix\":\"Lancement officiel de\",\"titleHighlight\":\"Prosperify\",\"lead\":\"Mise sur le marché de la solution après plusieurs mois de conception, de tests et d'échanges avec l'écosystème.\",\"descriptionSegments\":[{\"text\":\"Le lancement concrétise une vision : proposer aux entreprises un \"},{\"text\":\"assistant documentaire souverain\",\"emphasis\":true},{\"text\":\", capable de \"},{\"text\":\"centraliser\",\"emphasis\":true},{\"text\":\" et \"},{\"text\":\"simplifier l'accès aux données\",\"emphasis\":true},{\"text\":\", avec des sources visibles, des accès gouvernés et un périmètre de sécurité clair.\"}],\"imageAlt\":\"Prosperify (lancement)\",\"imageSrc\":\"/assets/brand/logo-full.png\",\"imageVariant\":\"brandFull\"}]}}"));}),
"[project]/src/lib/i18n.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "defaultNS",
    ()=>defaultNS,
    "resources",
    ()=>resources
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/i18next/dist/esm/i18next.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/initReactI18next.js [app-ssr] (ecmascript)");
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
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isInitialized) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].use(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initReactI18next"]).init({
        lng: "fr",
        fallbackLng: "en",
        resources,
        defaultNS,
        interpolation: {
            escapeValue: false
        }
    });
}
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/src/features/landing/components/navigation/navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LandingNavbar",
    ()=>LandingNavbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMenu2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMenu2$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconMenu2.mjs [app-ssr] (ecmascript) <export default as IconMenu2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconX.mjs [app-ssr] (ecmascript) <export default as IconX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
function SunIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "15",
        height: "15",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "4"
            }, void 0, false, {
                fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
function MoonIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
function LandingNavbar() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeHash, setActiveHash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("#features");
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const initialLang = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].language === "en" ? "en" : "fr";
    const [currentLang, setCurrentLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialLang);
    const switchLang = (target)=>{
        if (target === currentLang) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].changeLanguage(target).catch(()=>undefined);
        setCurrentLang(target);
    };
    const isHome = pathname === "/";
    const contactHref = isHome ? "#contact" : "/#contact";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsDark(document.documentElement.classList.contains("dark"));
        const obs = new MutationObserver(()=>{
            setIsDark(document.documentElement.classList.contains("dark"));
        });
        obs.observe(document.documentElement, {
            attributeFilter: [
                "class"
            ]
        });
        return ()=>obs.disconnect();
    }, []);
    const toggleTheme = ()=>{
        const next = !isDark;
        document.documentElement.classList.toggle("dark", next);
        try {
            localStorage.setItem("pf-theme", next ? "dark" : "light");
        } catch  {}
        setIsDark(next);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isHome) return undefined;
        const sectionIds = navLinks.map((link)=>link.href.startsWith("#") ? link.href.slice(1) : null).filter((id)=>Boolean(id));
        const sections = sectionIds.map((id)=>document.getElementById(id)).filter((section)=>Boolean(section));
        if (sections.length === 0) return undefined;
        const observer = new IntersectionObserver((entries)=>{
            const visible = entries.filter((entry)=>entry.isIntersecting).sort((a, b)=>b.intersectionRatio - a.intersectionRatio)[0];
            if (visible?.target?.id) {
                setActiveHash(`#${visible.target.id}`);
            }
        }, {
            rootMargin: "-32% 0px -52% 0px",
            threshold: [
                0.08,
                0.18,
                0.32
            ]
        });
        sections.forEach((section)=>observer.observe(section));
        return ()=>observer.disconnect();
    }, [
        isHome
    ]);
    const resolveHref = (href)=>{
        if (!href.startsWith("#")) return href;
        return isHome ? href : `/${href}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed inset-x-0 top-0 z-50 border-b border-[var(--pf-border)] backdrop-blur-xl",
        style: {
            background: "var(--pf-nav-bg)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex h-16 max-w-[1360px] items-center justify-between border-x border-[var(--pf-border)] px-5 sm:px-8 lg:px-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center",
                        "aria-label": "Prosperify",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProsperifyLogo, {}, void 0, false, {
                            fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden items-center gap-0.5 lg:flex",
                        children: navLinks.map((link)=>{
                            const active = isHome && link.href === activeHash;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: resolveHref(link.href),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative px-3 py-2 text-[13px] font-medium transition-colors", active ? "text-[var(--pf-fg)]" : "text-[var(--pf-fg-muted)] hover:text-[var(--pf-fg)]"),
                                scroll: true,
                                children: [
                                    currentLang === "en" ? link.labelEn : link.labelFr,
                                    active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden border border-[var(--pf-border)] sm:flex",
                                style: {
                                    background: "var(--pf-bg-dim)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>switchLang("fr"),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-mono text-[11px] font-semibold px-2.5 py-1.5 transition-colors", currentLang === "fr" ? "bg-[#FF6A13] text-[#080808]" : "text-[var(--pf-fg-dim)] hover:text-[var(--pf-fg-muted)]"),
                                        children: "FR"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>switchLang("en"),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-mono text-[11px] font-semibold px-2.5 py-1.5 transition-colors", currentLang === "en" ? "bg-[#FF6A13] text-[#080808]" : "text-[var(--pf-fg-dim)] hover:text-[var(--pf-fg-muted)]"),
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: toggleTheme,
                                className: "hidden h-8 w-8 items-center justify-center border border-[var(--pf-border)] text-[var(--pf-fg-muted)] transition-colors hover:border-[#FF6A13] hover:text-[#FF6A13] sm:flex",
                                style: {
                                    background: "var(--pf-bg-card)"
                                },
                                "aria-label": "Toggle theme",
                                children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SunIcon, {}, void 0, false, {
                                    fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                                    lineNumber: 197,
                                    columnNumber: 23
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MoonIcon, {}, void 0, false, {
                                    fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                                    lineNumber: 197,
                                    columnNumber: 37
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "text-[var(--pf-fg-muted)] lg:hidden",
                                onClick: ()=>setMobileOpen(!mobileOpen),
                                "aria-label": "Toggle menu",
                                children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__["IconX"], {
                                    className: "h-6 w-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                                    lineNumber: 214,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMenu2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMenu2$3e$__["IconMenu2"], {
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
            mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-[var(--pf-border)] px-5 py-6 lg:hidden",
                style: {
                    background: "var(--pf-bg)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-1",
                    children: [
                        navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: resolveHref(link.href),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-3 py-2.5 text-sm font-medium transition-colors hover:text-[#FF6A13]", isHome && link.href === activeHash ? "border-l-2 border-[#FF6A13] bg-[#FF6A13]/5 text-[var(--pf-fg)]" : "text-[var(--pf-fg-muted)]"),
                                scroll: true,
                                onClick: ()=>setMobileOpen(false),
                                children: currentLang === "en" ? link.labelEn : link.labelFr
                            }, link.href, false, {
                                fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                                lineNumber: 230,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-1 border border-[var(--pf-border)] sm:hidden",
                                    style: {
                                        background: "var(--pf-bg-dim)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>switchLang("fr"),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex-1 font-mono text-[11px] font-semibold py-2 transition-colors", currentLang === "fr" ? "bg-[#FF6A13] text-[#080808]" : "text-[var(--pf-fg-dim)]"),
                                            children: "FR"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                                            lineNumber: 252,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>switchLang("en"),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex-1 font-mono text-[11px] font-semibold py-2 transition-colors", currentLang === "en" ? "bg-[#FF6A13] text-[#080808]" : "text-[var(--pf-fg-dim)]"),
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: toggleTheme,
                                    className: "flex h-[38px] w-[38px] shrink-0 items-center justify-center border border-[var(--pf-border)] text-[var(--pf-fg-muted)] sm:hidden",
                                    style: {
                                        background: "var(--pf-bg-card)"
                                    },
                                    "aria-label": "Toggle theme",
                                    children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SunIcon, {}, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/navigation/navbar.tsx",
                                        lineNumber: 284,
                                        columnNumber: 27
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MoonIcon, {}, void 0, false, {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
}),
"[project]/src/features/landing/components/navigation/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$navigation$2f$navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/landing/components/navigation/navbar.tsx [app-ssr] (ecmascript)");
;
}),
"[project]/src/features/landing/components/products/product-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
"use client";
;
;
function getStringList(value) {
    return Array.isArray(value) ? value.filter((item)=>typeof item === "string") : [];
}
const offerMeta = [
    "CONTRÔLE — GÉRÉ · INFRA PROSPERIFY",
    "CONTRÔLE — PARTAGÉ · DONNÉES CHEZ VOUS",
    "CONTRÔLE — TOTAL · VOTRE INFRASTRUCTURE"
];
function ProductSection() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "[overflow-anchor:none]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "m-0 max-w-[760px] font-bold leading-[1.06] tracking-[-0.02em] text-[var(--pf-fg)]",
                style: {
                    fontSize: "clamp(1.9rem, 4vw, 3.1rem)"
                },
                children: [
                    t("products.titlePrefix"),
                    " ",
                    t("products.titleMiddle"),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#FF6A13]",
                        children: t("products.titleHighlight")
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/products/product-section.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/landing/components/products/product-section.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-[18px] max-w-[620px] text-[1.05rem] text-[var(--pf-fg-muted)]",
                children: t("products.subtitle")
            }, void 0, false, {
                fileName: "[project]/src/features/landing/components/products/product-section.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-11 border border-[var(--pf-border)]",
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "1px",
                    background: "var(--pf-border)"
                },
                children: [
                    0,
                    1,
                    2
                ].map((index)=>{
                    const badge = t(`products.offers.${index}.badge`);
                    const title = t(`products.offers.${index}.title`);
                    const features = getStringList(t(`products.offers.${index}.features`, {
                        returnObjects: true
                    }));
                    const isHighlighted = index === 2;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex flex-col transition-colors duration-200",
                        style: {
                            padding: "clamp(24px, 2.6vw, 34px)",
                            background: "var(--pf-bg-card)"
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.background = "var(--pf-bg-hover)";
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.background = "var(--pf-bg-card)";
                        },
                        children: [
                            isHighlighted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-x-0 top-0 h-[3px] bg-[#FF6A13]"
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/products/product-section.tsx",
                                lineNumber: 66,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-[22px] flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-xs text-[var(--pf-fg-dim)]",
                                        children: String(index + 1).padStart(2, "0")
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/products/product-section.tsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, this),
                                    badge ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-[#FF6A13] px-2 py-1 font-mono text-[9px] font-semibold tracking-[0.14em] text-[#080808]",
                                        children: badge
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/products/product-section.tsx",
                                        lineNumber: 74,
                                        columnNumber: 19
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/landing/components/products/product-section.tsx",
                                lineNumber: 69,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-5 flex gap-[5px]",
                                children: [
                                    0,
                                    1,
                                    2
                                ].map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-1 w-[30px]",
                                        style: {
                                            background: k <= index ? "#FF6A13" : "var(--pf-border)"
                                        }
                                    }, k, false, {
                                        fileName: "[project]/src/features/landing/components/products/product-section.tsx",
                                        lineNumber: 83,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/products/product-section.tsx",
                                lineNumber: 81,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "m-0 font-bold leading-[1.1] text-[var(--pf-fg)]",
                                style: {
                                    fontSize: "1.8rem"
                                },
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/products/product-section.tsx",
                                lineNumber: 91,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 font-mono text-[11px] tracking-[0.06em] text-[var(--pf-fg-muted)]",
                                children: offerMeta[index]
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/products/product-section.tsx",
                                lineNumber: 97,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "my-6 h-px",
                                style: {
                                    background: "var(--pf-border)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/products/product-section.tsx",
                                lineNumber: 101,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-3",
                                children: features.map((feat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mt-[5px] h-2 w-2 shrink-0 bg-[#FF6A13]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/landing/components/products/product-section.tsx",
                                                lineNumber: 106,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[13.5px] leading-[1.5] text-[var(--pf-fg-muted)]",
                                                children: feat
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/landing/components/products/product-section.tsx",
                                                lineNumber: 107,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, feat, true, {
                                        fileName: "[project]/src/features/landing/components/products/product-section.tsx",
                                        lineNumber: 105,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/products/product-section.tsx",
                                lineNumber: 103,
                                columnNumber: 15
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/features/landing/components/products/product-section.tsx",
                        lineNumber: 51,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/features/landing/components/products/product-section.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/landing/components/products/product-section.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/landing/components/products/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$products$2f$product$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/landing/components/products/product-section.tsx [app-ssr] (ecmascript)");
;
}),
"[project]/src/features/landing/components/products/product-section.tsx [app-ssr] (ecmascript) <export default as ProductSection>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductSection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$products$2f$product$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$products$2f$product$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/landing/components/products/product-section.tsx [app-ssr] (ecmascript)");
}),
"[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SovereigntySection",
    ()=>SovereigntySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud.js [app-ssr] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-ssr] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-ssr] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/git-branch.js [app-ssr] (ecmascript) <export default as GitBranch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hard-drive.js [app-ssr] (ecmascript) <export default as HardDrive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scale.js [app-ssr] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/server.js [app-ssr] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-ssr] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const SOURCES = [
    {
        label: "Google Drive",
        slug: "googledrive",
        fbIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__["HardDrive"],
        fbCol: "#4285F4"
    },
    {
        label: "Slack",
        slug: null,
        fbIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
        fbCol: "#E01E5A"
    },
    {
        label: "SharePoint",
        slug: null,
        fbIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"],
        fbCol: "#0f9bd7"
    },
    {
        label: "SAP",
        slug: "sap",
        fbIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
        fbCol: "#3aa0d1"
    },
    {
        label: "Salesforce",
        slug: null,
        fbIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"],
        fbCol: "#00A1E0"
    },
    {
        label: "PostgreSQL",
        slug: "postgresql",
        color: "8FB4E3",
        fbIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
        fbCol: "#8FB4E3"
    },
    {
        label: "AWS S3",
        slug: null,
        fbIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"],
        fbCol: "#FF9900"
    },
    {
        label: "Notion",
        slug: "notion",
        color: "ffffff",
        fbIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
        fbCol: "#e6e6e6"
    },
    {
        label: "Gmail",
        slug: "gmail",
        fbIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
        fbCol: "#EA4335"
    },
    {
        label: "GitHub",
        slug: "github",
        color: "ffffff",
        fbIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"],
        fbCol: "#e6e6e6"
    },
    {
        label: "REST API",
        slug: "openapiinitiative",
        color: "6BA539",
        fbIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"],
        fbCol: "#6BA539"
    },
    {
        label: "PDF / Docs",
        slug: null,
        fbIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        fbCol: "#EC4a52"
    }
];
const STORES = [
    {
        label: "Store Juridique",
        desc: "Contrats & actes",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"],
        scanDelay: "0s"
    },
    {
        label: "Store Conformité",
        desc: "KYC & AML",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        scanDelay: "1.1s"
    },
    {
        label: "Store RH",
        desc: "Procédures internes",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        scanDelay: "2.2s"
    }
];
const BENEFITS = [
    {
        label: "Aucune migration",
        desc: "Vos données restent dans vos systèmes existants.",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"]
    },
    {
        label: "Ingestion flexible",
        desc: "Manuelle à la demande ou automatique selon un planning.",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"]
    },
    {
        label: "Zéro refonte",
        desc: "Une couche qui s'ajoute sans toucher à votre architecture.",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"]
    }
];
const ACCENT = "#FF6A13";
const N_FLUX = 6;
const DUR_F = 5;
/* ──────────────────────────────────────────────────────── */ /*  Three.js globe                                           */ /* ──────────────────────────────────────────────────────── */ function ThreeGlobe() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const size = 300;
        const accent = ACCENT;
        const col = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](accent);
        const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
            canvas,
            alpha: true,
            antialias: true
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.setSize(size, size, false);
        renderer.setClearColor(0x000000, 0);
        const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"]();
        const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PerspectiveCamera"](45, 1, 0.1, 100);
        camera.position.z = 3.4;
        const group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
        scene.add(group);
        const core = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SphereGeometry"](1, 64, 64), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: col,
            roughness: 0.5,
            metalness: 0.2,
            emissive: col.clone().multiplyScalar(0.28)
        }));
        group.add(core);
        const wire = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineSegments"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WireframeGeometry"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SphereGeometry"](1.004, 24, 16)), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
            color: 0xffffff,
            transparent: true,
            opacity: 0.08
        }));
        group.add(wire);
        const shell = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SphereGeometry"](1.16, 48, 48), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            color: col,
            transparent: true,
            opacity: 0.08,
            side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BackSide"]
        }));
        group.add(shell);
        scene.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AmbientLight"](0xffffff, 0.55));
        const key = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DirectionalLight"](0xffd9b0, 1.5);
        key.position.set(-2, 2.2, 2.5);
        scene.add(key);
        const rim = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DirectionalLight"](col.clone(), 0.7);
        rim.position.set(2.5, -1, -1.5);
        scene.add(rim);
        group.rotation.z = 0.35;
        let raf = 0;
        const animate = ()=>{
            group.rotation.y += 0.0042;
            renderer.render(scene, camera);
            raf = requestAnimationFrame(animate);
        };
        animate();
        stateRef.current = {
            renderer,
            raf
        };
        return ()=>{
            cancelAnimationFrame(raf);
            renderer.dispose();
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        width: 300,
        height: 300,
        style: {
            width: 300,
            height: 300,
            position: "relative",
            zIndex: 1,
            background: "transparent"
        }
    }, void 0, false, {
        fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
        lineNumber: 147,
        columnNumber: 5
    }, this);
}
/* ──────────────────────────────────────────────────────── */ /*  Source tile                                              */ /* ──────────────────────────────────────────────────────── */ function SourceTile({ src, active }) {
    const [imgFailed, setImgFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const FbIcon = src.fbIcon;
    const iconUrl = src.slug ? `https://cdn.simpleicons.org/${src.slug}${src.color ? "/" + src.color : ""}` : null;
    const activeFilter = `drop-shadow(0 0 10px ${ACCENT})`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 9,
            padding: "15px 6px",
            background: "var(--pf-bg-card-2)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: 34,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                },
                children: iconUrl && !imgFailed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: iconUrl,
                    alt: src.label,
                    width: 34,
                    height: 34,
                    onError: ()=>setImgFailed(true),
                    style: {
                        objectFit: "contain",
                        filter: active ? activeFilter : "none",
                        transform: active ? "scale(1.12)" : "scale(1)",
                        transition: "all 0.5s"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                    lineNumber: 177,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FbIcon, {
                    size: 26,
                    style: {
                        color: src.fbCol,
                        filter: active ? activeFilter : "none",
                        transform: active ? "scale(1.12)" : "scale(1)",
                        transition: "all 0.5s"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                    lineNumber: 191,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "9.5px",
                    color: "var(--pf-fg-dim)",
                    letterSpacing: "0.03em",
                    textAlign: "center",
                    lineHeight: 1.2
                },
                children: src.label
            }, void 0, false, {
                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
/* ──────────────────────────────────────────────────────── */ /*  Ingestion bar                                           */ /* ──────────────────────────────────────────────────────── */ function IngestionBar({ defaultMode = "auto" }) {
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultMode);
    const isAuto = mode === "auto";
    const btnBase = {
        fontSize: 11,
        fontFamily: "'JetBrains Mono', monospace",
        letterSpacing: "0.07em",
        padding: "4px 16px",
        cursor: "pointer",
        transition: "all 0.15s",
        border: "1px solid"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
            border: "1px solid var(--pf-border)",
            borderTop: 0,
            background: "var(--pf-bg-card-2)",
            padding: "12px 24px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 11,
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "var(--pf-fg-dim)",
                    letterSpacing: "0.12em"
                },
                children: "INGESTION"
            }, void 0, false, {
                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: 6
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setMode("auto"),
                        style: {
                            ...btnBase,
                            background: isAuto ? ACCENT : "transparent",
                            color: isAuto ? "#0a0a0a" : "var(--pf-fg-dim)",
                            borderColor: isAuto ? ACCENT : "var(--pf-border)"
                        },
                        children: "AUTO"
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                        lineNumber: 238,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setMode("manuel"),
                        style: {
                            ...btnBase,
                            background: !isAuto ? ACCENT : "transparent",
                            color: !isAuto ? "#0a0a0a" : "var(--pf-fg-dim)",
                            borderColor: !isAuto ? ACCENT : "var(--pf-border)"
                        },
                        children: "MANUEL"
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 11,
                    color: ACCENT,
                    fontFamily: "'JetBrains Mono', monospace"
                },
                children: isAuto ? "Planifié · 02:00 CET" : "À la demande"
            }, void 0, false, {
                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
        lineNumber: 228,
        columnNumber: 5
    }, this);
}
function SovereigntySection() {
    const [activeIdx, setActiveIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Stars must be client-only (Math.random() differs server vs client → hydration error)
    const [stars, setStars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const rnd = (a, b)=>a + Math.random() * (b - a);
        setStars(Array.from({
            length: 56
        }, (_, i)=>{
            const sz = rnd(1.2, 3.6);
            const alpha = rnd(0.18, 0.9);
            return {
                key: i,
                left: `${rnd(1, 99).toFixed(1)}%`,
                top: `${rnd(1, 99).toFixed(1)}%`,
                width: `${sz.toFixed(1)}px`,
                height: `${sz.toFixed(1)}px`,
                bg: `rgba(255, ${Math.round(rnd(120, 175))}, ${Math.round(rnd(20, 65))}, ${alpha.toFixed(2)})`,
                shadow: sz > 2.8 ? "0 0 6px rgba(255,120,30,0.6)" : "none",
                animDur: `${rnd(2.6, 6).toFixed(1)}s`,
                animDel: `${rnd(0, 4).toFixed(1)}s`
            };
        }));
    }, []);
    // Cycle active source every 820 ms
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const t = setInterval(()=>setActiveIdx((i)=>(i + 1) % SOURCES.length), 820);
        return ()=>clearInterval(t);
    }, []);
    // Flux dots — deterministic, no random → safe to compute inline
    const fluxDots = Array.from({
        length: N_FLUX
    }, (_, i)=>({
            key: i,
            delay: `${(i * DUR_F / N_FLUX).toFixed(2)}s`
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    margin: 0,
                    fontWeight: 700,
                    lineHeight: 1.06,
                    letterSpacing: "-0.02em",
                    color: "var(--pf-fg)",
                    fontSize: "clamp(1.9rem, 4vw, 3.1rem)",
                    maxWidth: 820
                },
                children: [
                    "Connectez vos systèmes.",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                        lineNumber: 324,
                        columnNumber: 32
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: ACCENT
                        },
                        children: "Aucune refonte nécessaire."
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                        lineNumber: 325,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                lineNumber: 320,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    margin: "18px 0 0",
                    maxWidth: 640,
                    fontSize: "1.05rem",
                    lineHeight: 1.65,
                    color: "var(--pf-fg-muted)"
                },
                children: "Vos sources alimentent un flux unique qui traverse le core Prosperify et ressort sous forme de stores interrogeables — sans migration, sans rewrite."
            }, void 0, false, {
                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                lineNumber: 327,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block",
                style: {
                    position: "relative",
                    marginTop: 48,
                    border: "1px solid var(--pf-border)",
                    background: "var(--pf-bg-card)",
                    overflow: "hidden",
                    animation: "pf-fadeUp 0.6s ease"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            zIndex: 1,
                            pointerEvents: "none",
                            background: "radial-gradient(circle at 50% 46%, rgba(255,106,19,0.45) 0px, rgba(255,106,19,0.20) 90px, rgba(255,106,19,0.06) 155px, transparent 200px)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                        lineNumber: 341,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "minmax(0,1fr) 30px 320px 30px minmax(0,1fr)",
                            alignItems: "stretch"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "relative",
                                    zIndex: 2,
                                    background: "var(--pf-bg-card)",
                                    padding: 22,
                                    borderRight: "1px solid var(--pf-border)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: 14,
                                            fontFamily: "'JetBrains Mono', monospace",
                                            fontSize: 10,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.15em",
                                            color: "var(--pf-fg-dim)"
                                        },
                                        children: "Vos systèmes existants"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                        lineNumber: 357,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "grid",
                                            gridTemplateColumns: "repeat(3, 1fr)",
                                            gap: 1,
                                            background: "var(--pf-border)",
                                            border: "1px solid var(--pf-border)"
                                        },
                                        children: SOURCES.map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SourceTile, {
                                                src: src,
                                                active: i === activeIdx
                                            }, src.label, false, {
                                                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                                lineNumber: 370,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                        lineNumber: 364,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                lineNumber: 352,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                lineNumber: 376,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "relative",
                                    zIndex: 3,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: "28px 0"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            inset: 0,
                                            zIndex: 0,
                                            overflow: "hidden"
                                        },
                                        children: stars.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: "absolute",
                                                    left: s.left,
                                                    top: s.top,
                                                    width: s.width,
                                                    height: s.height,
                                                    borderRadius: "50%",
                                                    background: s.bg,
                                                    boxShadow: s.shadow,
                                                    animation: `pf-twinkle ${s.animDur} ease-in-out ${s.animDel} infinite`
                                                }
                                            }, s.key, false, {
                                                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                                lineNumber: 390,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                        lineNumber: 386,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "relative",
                                            zIndex: 1,
                                            width: 340,
                                            height: 340,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: "absolute",
                                                    width: 340,
                                                    height: 340,
                                                    borderRadius: "50%",
                                                    border: `1px dashed rgba(255,106,19,0.22)`,
                                                    animation: "pf-orbit-ring 40s linear infinite"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                                lineNumber: 409,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: "absolute",
                                                    width: 288,
                                                    height: 288,
                                                    borderRadius: "50%",
                                                    border: `1px dashed rgba(255,106,19,0.12)`,
                                                    animation: "pf-orbit-ring-rev 28s linear infinite"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                                lineNumber: 416,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: "absolute",
                                                    width: 232,
                                                    height: 232,
                                                    borderRadius: "50%",
                                                    background: "radial-gradient(circle, rgba(255,106,19,0.4), transparent 66%)",
                                                    filter: "blur(16px)",
                                                    animation: "pf-pulse 3.5s ease-in-out infinite"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                                lineNumber: 423,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ThreeGlobe, {}, void 0, false, {
                                                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                                lineNumber: 431,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: "absolute",
                                                    zIndex: 2,
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                    gap: 4,
                                                    pointerEvents: "none"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 17,
                                                            fontWeight: 800,
                                                            color: "#fff",
                                                            letterSpacing: "0.1em",
                                                            fontFamily: "'JetBrains Mono', monospace",
                                                            textShadow: "0 2px 12px rgba(0,0,0,0.85)"
                                                        },
                                                        children: "PROSPERIFY"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                                        lineNumber: 438,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 11,
                                                            color: "rgba(255,255,255,0.85)",
                                                            letterSpacing: "0.14em",
                                                            fontFamily: "'JetBrains Mono', monospace",
                                                            textShadow: "0 1px 10px rgba(0,0,0,0.9)"
                                                        },
                                                        children: "API"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                                        lineNumber: 445,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                                lineNumber: 433,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                        lineNumber: 403,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            marginTop: 6,
                                            fontFamily: "'JetBrains Mono', monospace",
                                            fontSize: 10,
                                            letterSpacing: "0.15em",
                                            color: "var(--pf-fg-dim)",
                                            textTransform: "uppercase"
                                        },
                                        children: "Moteur d'ingestion & RAG"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                        lineNumber: 455,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                lineNumber: 379,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                lineNumber: 465,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "relative",
                                    zIndex: 2,
                                    background: "var(--pf-bg-card)",
                                    padding: 22,
                                    borderLeft: "1px solid var(--pf-border)",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: 14,
                                            fontFamily: "'JetBrains Mono', monospace",
                                            fontSize: 10,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.15em",
                                            color: "var(--pf-fg-dim)"
                                        },
                                        children: "Stores interrogeables"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                        lineNumber: 474,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 10
                                        },
                                        children: STORES.map(({ label, desc, Icon, scanDelay })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: "relative",
                                                    overflow: "hidden",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 12,
                                                    padding: "14px 15px",
                                                    background: "rgba(255,106,19,0.05)",
                                                    border: "1px solid rgba(255,106,19,0.35)",
                                                    boxShadow: "0 0 26px rgba(255,106,19,0.1)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: 38,
                                                            height: 38,
                                                            flexShrink: 0,
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            background: "rgba(255,106,19,0.1)",
                                                            border: "1px solid rgba(255,106,19,0.32)"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            size: 16,
                                                            style: {
                                                                color: ACCENT
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                                            lineNumber: 497,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                                        lineNumber: 491,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            minWidth: 0
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 13,
                                                                    fontWeight: 600,
                                                                    color: "var(--pf-fg)"
                                                                },
                                                                children: label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                                                lineNumber: 500,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 11,
                                                                    color: "var(--pf-fg-dim)",
                                                                    marginTop: 1
                                                                },
                                                                children: desc
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                                                lineNumber: 501,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                                        lineNumber: 499,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            marginLeft: "auto",
                                                            paddingLeft: 10,
                                                            color: ACCENT,
                                                            display: "flex"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                                            lineNumber: 504,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                                        lineNumber: 503,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            position: "absolute",
                                                            left: 0,
                                                            right: 0,
                                                            height: 40,
                                                            pointerEvents: "none",
                                                            background: "linear-gradient(180deg, transparent, rgba(255,106,19,0.12), transparent)",
                                                            animation: `pf-store-scan 3.4s linear ${scanDelay} infinite`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                                        lineNumber: 507,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, label, true, {
                                                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                                lineNumber: 483,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                        lineNumber: 481,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                lineNumber: 468,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                        lineNumber: 345,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            zIndex: 1,
                            pointerEvents: "none"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: "50%",
                                    left: 0,
                                    right: 0,
                                    height: 0,
                                    borderTop: "1px dashed rgba(255,106,19,0.22)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                lineNumber: 521,
                                columnNumber: 11
                            }, this),
                            fluxDots.map(({ key, delay })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "absolute",
                                        top: "50%",
                                        marginTop: -7,
                                        left: -6,
                                        width: 14,
                                        height: 14,
                                        borderRadius: "50%",
                                        background: `radial-gradient(circle, #fff 0%, ${ACCENT} 55%, transparent 74%)`,
                                        boxShadow: `0 0 18px rgba(255,106,19,0.95)`,
                                        animation: `pf-data-travel-h ${DUR_F}s linear ${delay} infinite`
                                    }
                                }, key, false, {
                                    fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                    lineNumber: 526,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                        lineNumber: 520,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                lineNumber: 333,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IngestionBar, {}, void 0, false, {
                    fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                    lineNumber: 539,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                lineNumber: 538,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden",
                style: {
                    marginTop: 32
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            overflow: "hidden",
                            border: "1px solid var(--pf-border)",
                            background: "var(--pf-bg-card)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: "32px 0 18px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    inset: 0,
                                    background: "radial-gradient(circle at 50% 46%, rgba(255,106,19,0.45) 0%, rgba(255,106,19,0.18) 30%, rgba(255,106,19,0.05) 58%, transparent 78%)",
                                    pointerEvents: "none"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                lineNumber: 552,
                                columnNumber: 11
                            }, this),
                            stars.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "absolute",
                                        left: s.left,
                                        top: s.top,
                                        width: s.width,
                                        height: s.height,
                                        borderRadius: "50%",
                                        background: s.bg,
                                        boxShadow: s.shadow,
                                        animation: `pf-twinkle ${s.animDur} ease-in-out ${s.animDel} infinite`
                                    }
                                }, s.key, false, {
                                    fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                    lineNumber: 558,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "relative",
                                    zIndex: 1,
                                    transform: "scale(0.72)",
                                    transformOrigin: "center center",
                                    height: 245
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 340,
                                        height: 340,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        position: "relative"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: "absolute",
                                                width: 340,
                                                height: 340,
                                                borderRadius: "50%",
                                                border: "1px dashed rgba(255,106,19,0.22)",
                                                animation: "pf-orbit-ring 40s linear infinite"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                            lineNumber: 570,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: "absolute",
                                                width: 288,
                                                height: 288,
                                                borderRadius: "50%",
                                                border: "1px dashed rgba(255,106,19,0.12)",
                                                animation: "pf-orbit-ring-rev 28s linear infinite"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                            lineNumber: 571,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: "absolute",
                                                width: 232,
                                                height: 232,
                                                borderRadius: "50%",
                                                background: "radial-gradient(circle, rgba(255,106,19,0.4), transparent 66%)",
                                                filter: "blur(16px)",
                                                animation: "pf-pulse 3.5s ease-in-out infinite"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                            lineNumber: 572,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ThreeGlobe, {}, void 0, false, {
                                            fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                            lineNumber: 573,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: "absolute",
                                                zIndex: 2,
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                gap: 4,
                                                pointerEvents: "none"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 17,
                                                        fontWeight: 800,
                                                        color: "#fff",
                                                        letterSpacing: "0.1em",
                                                        fontFamily: "'JetBrains Mono', monospace",
                                                        textShadow: "0 2px 12px rgba(0,0,0,0.85)"
                                                    },
                                                    children: "PROSPERIFY"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                                    lineNumber: 575,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 11,
                                                        color: "rgba(255,255,255,0.85)",
                                                        letterSpacing: "0.14em",
                                                        fontFamily: "'JetBrains Mono', monospace",
                                                        textShadow: "0 1px 10px rgba(0,0,0,0.9)"
                                                    },
                                                    children: "API"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                                    lineNumber: 576,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                            lineNumber: 574,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                    lineNumber: 569,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                lineNumber: 568,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    position: "relative",
                                    zIndex: 1,
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontSize: 10,
                                    letterSpacing: "0.15em",
                                    color: "var(--pf-fg-dim)",
                                    textTransform: "uppercase"
                                },
                                children: "Moteur d'ingestion & RAG"
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                lineNumber: 580,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                        lineNumber: 545,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            borderBottom: "1px solid var(--pf-border)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "12px 16px 8px",
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontSize: 10,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.15em",
                                    color: "var(--pf-fg-dim)",
                                    background: "var(--pf-bg-card)",
                                    borderTop: "1px solid var(--pf-border)"
                                },
                                children: "Vos systèmes existants"
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                lineNumber: 587,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "repeat(4, 1fr)",
                                    gap: 1,
                                    background: "var(--pf-border)"
                                },
                                children: SOURCES.map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SourceTile, {
                                        src: src,
                                        active: i === activeIdx
                                    }, src.label, false, {
                                        fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                        lineNumber: 592,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                lineNumber: 590,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                        lineNumber: 586,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "12px 16px 8px",
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontSize: 10,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.15em",
                                    color: "var(--pf-fg-dim)",
                                    background: "var(--pf-bg-card)",
                                    borderTop: "1px solid var(--pf-border)"
                                },
                                children: "Stores interrogeables"
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                lineNumber: 599,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 0
                                },
                                children: STORES.map(({ label, desc, Icon, scanDelay })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "relative",
                                            overflow: "hidden",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 12,
                                            padding: "14px 16px",
                                            background: "rgba(255,106,19,0.05)",
                                            borderTop: "1px solid rgba(255,106,19,0.22)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: 36,
                                                    height: 36,
                                                    flexShrink: 0,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    background: "rgba(255,106,19,0.1)",
                                                    border: "1px solid rgba(255,106,19,0.28)"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    size: 15,
                                                    style: {
                                                        color: ACCENT
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                                    lineNumber: 612,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                                lineNumber: 611,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 13,
                                                            fontWeight: 600,
                                                            color: "var(--pf-fg)"
                                                        },
                                                        children: label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                                        lineNumber: 615,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 11,
                                                            color: "var(--pf-fg-dim)",
                                                            marginTop: 1
                                                        },
                                                        children: desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                                        lineNumber: 616,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                                lineNumber: 614,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                size: 14,
                                                style: {
                                                    color: ACCENT,
                                                    marginLeft: "auto",
                                                    flexShrink: 0
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                                lineNumber: 618,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: "absolute",
                                                    left: 0,
                                                    right: 0,
                                                    height: 40,
                                                    pointerEvents: "none",
                                                    background: "linear-gradient(180deg, transparent, rgba(255,106,19,0.12), transparent)",
                                                    animation: `pf-store-scan 3.4s linear ${scanDelay} infinite`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                                lineNumber: 619,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, label, true, {
                                        fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                        lineNumber: 604,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                lineNumber: 602,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                        lineNumber: 598,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IngestionBar, {}, void 0, false, {
                        fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                        lineNumber: 626,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                lineNumber: 543,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 grid grid-cols-1 gap-px border border-[var(--pf-border)] sm:grid-cols-3",
                style: {
                    background: "var(--pf-border)"
                },
                children: BENEFITS.map(({ label, desc, Icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 16,
                            padding: 24,
                            background: "var(--pf-bg-card)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 2,
                                    width: 36,
                                    height: 36,
                                    flexShrink: 0,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    background: "rgba(255,106,19,0.05)",
                                    border: "1px solid rgba(255,106,19,0.22)"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    size: 16,
                                    style: {
                                        color: ACCENT
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                    lineNumber: 634,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                lineNumber: 633,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 14,
                                            fontWeight: 600,
                                            color: "var(--pf-fg)"
                                        },
                                        children: label
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                        lineNumber: 637,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: 4,
                                            fontSize: 13,
                                            lineHeight: 1.5,
                                            color: "var(--pf-fg-muted)"
                                        },
                                        children: desc
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                        lineNumber: 638,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                                lineNumber: 636,
                                columnNumber: 13
                            }, this)
                        ]
                    }, label, true, {
                        fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                        lineNumber: 632,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
                lineNumber: 630,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx",
        lineNumber: 319,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/landing/components/sovereignty/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$sovereignty$2f$sovereignty$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx [app-ssr] (ecmascript)");
;
}),
"[project]/src/features/landing/components/workflow/workflow-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorkflowSection",
    ()=>WorkflowSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-ssr] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-ssr] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-ssr] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scale.js [app-ssr] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
// ─── Step 1 — CONNECTER ───────────────────────────────────────────────────────
function PipelineArrow() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex shrink-0 flex-col items-center justify-center px-3 py-4 md:py-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-mono text-xl font-bold text-[#FF6A13] opacity-60 md:text-2xl",
            children: "→"
        }, void 0, false, {
            fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
const SOURCES_KYC = [
    "Dossiers KYC clients",
    "Rapports due diligence",
    "Listes de sanctions"
];
const STORES_READY = [
    {
        label: "Store KYC",
        service: "Identité & UBO",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    },
    {
        label: "Store Conformité",
        service: "Sanctions & AML",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"]
    },
    {
        label: "Store Due Dil",
        service: "Rapports & alertes",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"]
    }
];
function ConnecterPipeline({ pipeline }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-3 md:flex-row md:items-stretch",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 rounded-none border border-[var(--pf-border)] p-4",
                style: {
                    background: "var(--pf-bg-card-2)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 font-mono text-[10px] tracking-[0.18em] text-[var(--pf-fg-dim)]",
                        children: "SOURCES"
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2",
                        children: SOURCES_KYC.map((src)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5 border border-[var(--pf-border)] px-3 py-2.5",
                                style: {
                                    background: "var(--pf-bg)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-[7px] w-[7px] shrink-0 bg-[#FF6A13]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[12px] font-medium text-[var(--pf-fg)]",
                                        children: src
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-auto font-mono text-[9px] text-[var(--pf-fg-dim)]",
                                        children: "validé"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, src, true, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PipelineArrow, {}, void 0, false, {
                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 flex-col items-center justify-center gap-3 border border-[#FF6A13] p-4",
                style: {
                    background: "var(--pf-accent-bg)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-12 w-12 items-center justify-center bg-[#FF6A13] font-mono text-sm font-bold text-[#080808]",
                        children: "DB"
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-bold text-[var(--pf-fg)]",
                                children: "Prosperify"
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 text-[11px] text-[var(--pf-fg-muted)]",
                                children: "Indexation & préparation"
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap justify-center gap-1.5",
                        children: (pipeline.length > 0 ? pipeline : [
                            "Lire",
                            "Préparer",
                            "Indexer"
                        ]).slice(0, 3).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-2 py-1 font-mono text-[10px] text-[#FF6A13]",
                                style: {
                                    border: "1px solid var(--pf-accent-dim-border)"
                                },
                                children: p
                            }, p, false, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PipelineArrow, {}, void 0, false, {
                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 border border-[var(--pf-border)] p-4",
                style: {
                    background: "var(--pf-bg-card-2)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 font-mono text-[10px] tracking-[0.18em] text-[var(--pf-fg-dim)]",
                        children: "STORES PRÊTS"
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2",
                        children: STORES_READY.map(({ label, service, Icon: StoreIcon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5 border border-[var(--pf-border)] px-3 py-2.5",
                                style: {
                                    background: "var(--pf-bg)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StoreIcon, {
                                        size: 13,
                                        className: "shrink-0 text-[#FF6A13]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[12px] font-semibold text-[var(--pf-fg)]",
                                                children: label
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                                lineNumber: 90,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-[var(--pf-fg-dim)]",
                                                children: service
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                                lineNumber: 91,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-auto font-mono text-[9px] text-[#FF6A13]",
                                        children: "✓"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, label, true, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
// ─── Step 2 — INTERROGER (merged query + search + sourced answer) ─────────────
const INDEX_TYPES = [
    {
        id: "Query",
        label: "Query",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"]
    },
    {
        id: "Sanctions",
        label: "Sanctions",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"]
    },
    {
        id: "KYC",
        label: "KYC",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    },
    {
        id: "Due Dil",
        label: "Due Dil",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"]
    },
    {
        id: "PDF",
        label: "PDF",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
    },
    {
        id: "Images",
        label: "Images",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"]
    },
    {
        id: "AML",
        label: "AML",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"]
    }
];
const PHASE_DURATION_MS = 1300;
const RESULTS_BY_PHASE = [
    0,
    0,
    42,
    89,
    143,
    198,
    247,
    247
];
function InterrogerPipeline() {
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const id = setInterval(()=>setPhase((p)=>(p + 1) % 8), PHASE_DURATION_MS);
        return ()=>clearInterval(id);
    }, []);
    const results = RESULTS_BY_PHASE[phase] ?? 0;
    const activeIndex = phase >= 2 ? phase - 2 : -1;
    const isDone = phase === 7;
    const agentStatus = phase === 0 ? "Initialisation…" : phase === 1 ? "Analyse de la requête" : isDone ? "Analyse terminée ✓" : `Interrogation : ${INDEX_TYPES[activeIndex]?.label ?? ""}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-3 md:flex-row md:items-stretch",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 flex-col justify-center gap-3 border border-[var(--pf-border)] p-4",
                style: {
                    background: "var(--pf-bg-card-2)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-1 font-mono text-[10px] tracking-[0.18em] text-[var(--pf-fg-dim)]",
                        children: "REQUÊTE KYC"
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border border-[var(--pf-border)] px-3 py-2.5 text-[13px] text-[var(--pf-fg)]",
                        style: {
                            background: "var(--pf-bg)"
                        },
                        children: "Ce client figure-t-il sur une liste de sanctions ou présente-t-il un UBO à risque ?"
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 border border-[#FF6A13] px-3 py-2",
                        style: {
                            background: "var(--pf-accent-bg)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-1.5 w-1.5 animate-pulse bg-[#FF6A13]"
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-[10px] text-[#FF6A13]",
                                children: isDone ? "ANALYSE COMPLÈTE" : "ANALYSE EN COURS"
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    isDone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border border-[var(--pf-border)] p-3",
                        style: {
                            background: "var(--pf-bg)",
                            animation: "pf-fadeUp 0.4s ease"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "m-0 text-[12.5px] leading-[1.55] text-[var(--pf-fg)]",
                                children: [
                                    "Source ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "ACAMS Report · p.4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                        lineNumber: 155,
                                        columnNumber: 22
                                    }, this),
                                    " — UBO non déclaré, lié à entité sanctionnée",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        style: {
                                            background: "var(--pf-accent-highlight)",
                                            padding: "1px 5px"
                                        },
                                        children: "(OFAC · entrée #4821)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this),
                                    ". Risque global :",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-[#FF6A13]",
                                        children: "élevé"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex flex-wrap gap-1.5",
                                children: [
                                    "ACAMS · p.4",
                                    "OFAC 2024",
                                    "Kroll Report"
                                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "border border-[var(--pf-border)] px-2 py-0.5 font-mono text-[9.5px] text-[var(--pf-fg-muted)]",
                                        children: s
                                    }, s, false, {
                                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                        lineNumber: 164,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PipelineArrow, {}, void 0, false, {
                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 flex-col items-center justify-center gap-3 border border-[#FF6A13] p-4",
                style: {
                    background: "var(--pf-accent-bg)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-12 w-12 items-center justify-center bg-[#FF6A13] font-mono text-sm font-bold text-[#080808]",
                        style: {
                            animation: "pf-pulse 2.2s ease-in-out infinite"
                        },
                        children: "PA"
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-bold text-[var(--pf-fg)]",
                                children: "Prosperify Agent"
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-0.5 min-h-[16px] text-[11px] text-[var(--pf-fg-muted)]",
                                children: agentStatus
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        style: {
                            animation: results > 0 ? "pf-counter-pop 0.4s ease" : "none"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-mono text-[1.6rem] font-bold leading-none text-[#FF6A13]",
                                children: results
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-mono text-[9px] tracking-[0.14em] text-[var(--pf-fg-dim)]",
                                children: "SIGNAUX"
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this)
                        ]
                    }, results, true, {
                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PipelineArrow, {}, void 0, false, {
                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 border border-[var(--pf-border)] p-4",
                style: {
                    background: "var(--pf-bg-card-2)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 font-mono text-[10px] tracking-[0.18em] text-[var(--pf-fg-dim)]",
                        children: "STORES / INDEX"
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
                            gap: "6px"
                        },
                        children: INDEX_TYPES.map(({ id, label, Icon }, i)=>{
                            const isActive = i === activeIndex;
                            const isClear = phase >= 2 && i < activeIndex;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative overflow-hidden border px-2 py-2.5 text-center transition-all duration-300",
                                style: {
                                    borderColor: isActive ? "#FF6A13" : isClear ? "var(--pf-border-2)" : "var(--pf-border)",
                                    background: isActive ? "var(--pf-accent-bg)" : "var(--pf-bg)"
                                },
                                children: [
                                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pointer-events-none absolute inset-x-0",
                                        style: {
                                            height: "2px",
                                            background: "linear-gradient(to right, transparent, #FF6A13 40%, #FF6A13 60%, transparent)",
                                            animation: `pf-store-scan ${PHASE_DURATION_MS * 0.7}ms linear infinite`,
                                            top: 0
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                        lineNumber: 200,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "mx-auto mb-1.5",
                                        size: 15,
                                        style: {
                                            color: isActive ? "#FF6A13" : isClear ? "var(--pf-fg-muted)" : "var(--pf-fg-dim)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                        lineNumber: 202,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] font-semibold leading-tight transition-colors duration-300",
                                        style: {
                                            color: isActive ? "#FF6A13" : isClear ? "var(--pf-fg-muted)" : "var(--pf-fg-dim)"
                                        },
                                        children: label
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                        lineNumber: 203,
                                        columnNumber: 17
                                    }, this),
                                    isClear && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-0.5 font-mono text-[9px] text-[#FF6A13]",
                                        children: "✓"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                        lineNumber: 206,
                                        columnNumber: 29
                                    }, this),
                                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1 h-[3px] w-full overflow-hidden",
                                        style: {
                                            background: "var(--pf-border)"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full bg-[#FF6A13]",
                                            style: {
                                                width: "60%",
                                                transition: "width 0.9s ease"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                            lineNumber: 209,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                        lineNumber: 208,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, id, true, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 198,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
// ─── Step 3 — CONTRÔLER ───────────────────────────────────────────────────────
const AUDIT_LOG = [
    {
        time: "09:14:32",
        user: "M. Dupont",
        action: "Requête KYC — Meridian Holdings",
        stores: "KYC · Sanctions",
        risk: "élevé"
    },
    {
        time: "09:07:18",
        user: "L. Fontaine",
        action: "Vérification OFAC — Acme Corp",
        stores: "Conformité · Due Dil",
        risk: "faible"
    },
    {
        time: "08:52:04",
        user: "A. Mbeki",
        action: "Due diligence — Orion Partners",
        stores: "Due Dil · KYC",
        risk: "moyen"
    }
];
const ROLES = [
    "Analyste",
    "Compliance",
    "Admin"
];
const STORE_PERMS = {
    "Store KYC": [
        true,
        true,
        true
    ],
    "Store Conformité": [
        false,
        true,
        true
    ],
    "Store Due Dil": [
        true,
        true,
        true
    ]
};
const RISK_COLOR = {
    "élevé": "#FF6A13",
    "moyen": "#f59e0b",
    "faible": "#22c55e"
};
function ControlerPipeline() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-4 md:flex-row md:items-stretch",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 border border-[var(--pf-border)] p-4",
                style: {
                    background: "var(--pf-bg-card-2)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                size: 12,
                                className: "text-[#FF6A13]"
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 248,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-[10px] tracking-[0.18em] text-[var(--pf-fg-dim)]",
                                children: "JOURNAL D'AUDIT"
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 249,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2",
                        children: AUDIT_LOG.map((entry, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-[var(--pf-border)] px-3 py-2.5",
                                style: {
                                    background: "var(--pf-bg)",
                                    animation: `pf-fadeUp 0.35s ease ${i * 0.08}s both`
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0 flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-[9px] text-[var(--pf-fg-dim)]",
                                                            children: entry.time
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                                            lineNumber: 257,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-[9px] text-[var(--pf-fg-muted)]",
                                                            children: entry.user
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                                            lineNumber: 258,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-0.5 text-[11.5px] font-medium text-[var(--pf-fg)]",
                                                    children: entry.action
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-0.5 font-mono text-[9px] text-[var(--pf-fg-dim)]",
                                                    children: entry.stores
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                            lineNumber: 255,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mt-0.5 shrink-0 font-mono text-[10px] font-bold",
                                            style: {
                                                color: RISK_COLOR[entry.risk]
                                            },
                                            children: entry.risk
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                            lineNumber: 263,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                    lineNumber: 254,
                                    columnNumber: 15
                                }, this)
                            }, i, false, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 253,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex items-center gap-2 border border-[var(--pf-border)] px-3 py-2",
                        style: {
                            background: "var(--pf-bg)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                size: 11,
                                className: "text-[#FF6A13]"
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 271,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-[9.5px] text-[var(--pf-fg-dim)]",
                                children: "Requête enregistrée · immuable · RGPD"
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 272,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 border border-[var(--pf-border)] p-4",
                style: {
                    background: "var(--pf-bg-card-2)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                size: 12,
                                className: "text-[#FF6A13]"
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 279,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-[10px] tracking-[0.18em] text-[var(--pf-fg-dim)]",
                                children: "CONTRÔLE D'ACCÈS"
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 280,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full border-collapse text-[11px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "pb-2 text-left font-mono text-[9.5px] font-normal tracking-[0.12em] text-[var(--pf-fg-dim)]",
                                            children: "STORE"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                            lineNumber: 285,
                                            columnNumber: 15
                                        }, this),
                                        ROLES.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "pb-2 text-center font-mono text-[9.5px] font-normal tracking-[0.12em] text-[var(--pf-fg-dim)]",
                                                children: r
                                            }, r, false, {
                                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                                lineNumber: 287,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                    lineNumber: 284,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 283,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: Object.entries(STORE_PERMS).map(([store, perms])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "border-t border-[var(--pf-border)] py-2.5 pr-3 text-[11.5px] font-medium text-[var(--pf-fg)]",
                                                children: store
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                                lineNumber: 294,
                                                columnNumber: 17
                                            }, this),
                                            perms.map((allowed, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border-t border-[var(--pf-border)] py-2.5 text-center",
                                                    children: allowed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                        size: 13,
                                                        className: "mx-auto text-[#FF6A13]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                        size: 13,
                                                        className: "mx-auto text-[var(--pf-fg-dim)] opacity-40"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 25
                                                    }, this)
                                                }, j, false, {
                                                    fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, store, true, {
                                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                        lineNumber: 293,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 291,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 border border-[#FF6A13] px-3 py-2.5",
                        style: {
                            background: "var(--pf-accent-bg)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                    size: 12,
                                    className: "text-[#FF6A13]"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                    lineNumber: 309,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-[9.5px] text-[#FF6A13]",
                                    children: "ACCÈS TRACÉ · ZÉRO DONNÉE BRUTE EXPOSÉE"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                    lineNumber: 310,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                            lineNumber: 308,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                        lineNumber: 307,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
        lineNumber: 244,
        columnNumber: 5
    }, this);
}
// ─── Shared helpers ───────────────────────────────────────────────────────────
function getStringList(value) {
    return Array.isArray(value) ? value.filter((item)=>typeof item === "string") : [];
}
const STEP_DURATION_MS = 7000;
const TICK_MS = 70;
function WorkflowSection() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const touchStartX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [activeStep, setActiveStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [resetKey, setResetKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const createPipeline = getStringList(t("workflowTabs.create.pipeline", {
        returnObjects: true
    }));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = rootRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(([entry])=>setIsVisible(Boolean(entry?.isIntersecting)), {
            threshold: 0.2
        });
        obs.observe(el);
        return ()=>obs.disconnect();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isVisible || document.hidden) return;
        const timeout = setTimeout(()=>{
            setActiveStep((prev)=>(prev + 1) % 3);
        }, STEP_DURATION_MS);
        return ()=>clearTimeout(timeout);
    }, [
        activeStep,
        resetKey,
        isVisible
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setProgress(0);
        const interval = setInterval(()=>{
            setProgress((prev)=>Math.min(prev + 100 / (STEP_DURATION_MS / TICK_MS), 100));
        }, TICK_MS);
        return ()=>clearInterval(interval);
    }, [
        activeStep,
        resetKey
    ]);
    const selectStep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((index)=>{
        setActiveStep((index % 3 + 3) % 3);
        setResetKey((k)=>k + 1);
    }, []);
    const handleTouchStart = (e)=>{
        touchStartX.current = e.touches[0]?.clientX ?? null;
    };
    const handleTouchEnd = (e)=>{
        const start = touchStartX.current;
        touchStartX.current = null;
        if (start === null) return;
        const delta = (e.changedTouches[0]?.clientX ?? 0) - start;
        if (Math.abs(delta) >= 42) selectStep(delta < 0 ? activeStep + 1 : activeStep - 1);
    };
    const stepLabels = [
        "Connecter",
        "Interroger",
        "Contrôler"
    ];
    const pipeline = createPipeline.length > 0 ? createPipeline : [
        "Lire",
        "Préparer",
        "Indexer"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: rootRef,
        className: "[overflow-anchor:none]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "m-0 max-w-[780px] font-bold leading-[1.06] tracking-[-0.02em] text-[var(--pf-fg)]",
                style: {
                    fontSize: "clamp(1.9rem, 4vw, 3.1rem)"
                },
                children: [
                    t("workflow.title"),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#FF6A13]",
                        children: t("workflow.titleHighlight")
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                        lineNumber: 402,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                lineNumber: 397,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-[18px] max-w-[560px] text-[1.05rem] text-[var(--pf-fg-muted)]",
                children: t("workflow.subtitle")
            }, void 0, false, {
                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                lineNumber: 404,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-7 mt-11 flex flex-wrap items-center gap-y-3",
                children: stepLabels.map((label, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>selectStep(index),
                                className: "flex cursor-pointer items-center gap-3 border-none bg-transparent p-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-10 items-center justify-center border font-mono text-[13px] font-semibold transition-all duration-300", activeStep === index ? "border-[#FF6A13] text-[#FF6A13]" : "text-[var(--pf-fg-muted)]"),
                                        style: {
                                            borderColor: activeStep === index ? "#FF6A13" : activeStep > index ? "var(--pf-border-2)" : "var(--pf-border)",
                                            background: activeStep === index ? "var(--pf-bg-active)" : "var(--pf-bg-dim)"
                                        },
                                        children: String(index + 1).padStart(2, "0")
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                        lineNumber: 417,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm font-semibold", activeStep === index ? "text-[var(--pf-fg)]" : "text-[var(--pf-fg-dim)]"),
                                        children: label
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                        lineNumber: 429,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 412,
                                columnNumber: 13
                            }, this),
                            index < 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative mx-4 overflow-hidden",
                                style: {
                                    width: "clamp(24px, 5vw, 72px)",
                                    height: "1px",
                                    background: "var(--pf-border)"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-y-0 left-0 bg-[#FF6A13]",
                                    style: {
                                        width: index < activeStep ? "100%" : index === activeStep ? `${progress}%` : "0%",
                                        transition: "width 0.07s linear"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                    lineNumber: 435,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 434,
                                columnNumber: 15
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                        lineNumber: 411,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                lineNumber: 409,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-[380px] touch-pan-y border border-[var(--pf-border)]",
                style: {
                    background: "var(--pf-bg-card)"
                },
                onTouchStart: handleTouchStart,
                onTouchEnd: handleTouchEnd,
                children: [
                    activeStep === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "clamp(24px, 3vw, 36px)",
                            animation: "pf-fadeUp 0.4s ease"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-5 font-mono text-[11px] tracking-[0.2em] text-[#FF6A13]",
                                children: "01 / CONNECTER"
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 455,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "m-0 font-bold text-[var(--pf-fg)]",
                                style: {
                                    fontSize: "clamp(1.3rem, 2.2vw, 1.8rem)"
                                },
                                children: t("workflowTabs.create.heading", {
                                    defaultValue: "Préparez uniquement les sources validées"
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 456,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-7 mt-2.5 max-w-[560px] text-[0.92rem] text-[var(--pf-fg-muted)]",
                                children: t("workflowTabs.create.subtitle", {
                                    defaultValue: "Dossiers KYC, rapports de due diligence et listes de sanctions — indexés dans des stores dédiés."
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 459,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ConnecterPipeline, {
                                pipeline: pipeline
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 462,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                        lineNumber: 454,
                        columnNumber: 11
                    }, this),
                    activeStep === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "clamp(24px, 3vw, 36px)",
                            animation: "pf-fadeUp 0.4s ease"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-5 font-mono text-[11px] tracking-[0.2em] text-[#FF6A13]",
                                children: "02 / INTERROGER"
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 469,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "m-0 font-bold text-[var(--pf-fg)]",
                                style: {
                                    fontSize: "clamp(1.3rem, 2.2vw, 1.8rem)"
                                },
                                children: t("workflowTabs.unify.heading", {
                                    defaultValue: "Une question, une réponse sourcée et traçable"
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 470,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-7 mt-2.5 max-w-[560px] text-[0.92rem] text-[var(--pf-fg-muted)]",
                                children: t("workflowTabs.unify.subtitle", {
                                    defaultValue: "L'agent distribue la requête sur vos stores KYC et retourne un résultat cité, avec sa source exacte."
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 473,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InterrogerPipeline, {}, void 0, false, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 476,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                        lineNumber: 468,
                        columnNumber: 11
                    }, this),
                    activeStep === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "clamp(24px, 3vw, 36px)",
                            animation: "pf-fadeUp 0.4s ease"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-5 font-mono text-[11px] tracking-[0.2em] text-[#FF6A13]",
                                children: "03 / CONTRÔLER"
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 483,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "m-0 font-bold text-[var(--pf-fg)]",
                                style: {
                                    fontSize: "clamp(1.3rem, 2.2vw, 1.8rem)"
                                },
                                children: t("workflowTabs.chat.assistantName", {
                                    defaultValue: "Chaque accès est enregistré et gouverné"
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 484,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-7 mt-2.5 max-w-[560px] text-[0.92rem] text-[var(--pf-fg-muted)]",
                                children: t("workflowTabs.chat.botWelcome", {
                                    defaultValue: "Journal d'audit immuable, contrôle d'accès par rôle, zéro donnée brute exposée."
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 487,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ControlerPipeline, {}, void 0, false, {
                                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                                lineNumber: 490,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                        lineNumber: 482,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
                lineNumber: 446,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/landing/components/workflow/workflow-section.tsx",
        lineNumber: 396,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/features/landing/components/workflow/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$workflow$2f$workflow$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/landing/components/workflow/workflow-section.tsx [app-ssr] (ecmascript)");
;
}),
"[project]/src/features/landing/components/landing-page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-ssr] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-ssr] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$contact$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/features/contact/components/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$contact$2f$components$2f$contact$2d$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ContactForm$3e$__ = __turbopack_context__.i("[project]/src/features/contact/components/contact-form.tsx [app-ssr] (ecmascript) <export default as ContactForm>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$architecture$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/features/landing/components/architecture/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$architecture$2f$architecture$2d$demo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/landing/components/architecture/architecture-demo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$faq$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/features/landing/components/faq/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$faq$2f$faq$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/landing/components/faq/faq-section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$features$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/features/landing/components/features/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$features$2f$prosperify$2d$features$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ProsperifyFeatures$3e$__ = __turbopack_context__.i("[project]/src/features/landing/components/features/prosperify-features.tsx [app-ssr] (ecmascript) <export default as ProsperifyFeatures>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$footer$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/features/landing/components/footer/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$footer$2f$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/landing/components/footer/footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$navigation$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/features/landing/components/navigation/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$navigation$2f$navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/landing/components/navigation/navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$products$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/features/landing/components/products/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$products$2f$product$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ProductSection$3e$__ = __turbopack_context__.i("[project]/src/features/landing/components/products/product-section.tsx [app-ssr] (ecmascript) <export default as ProductSection>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$sovereignty$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/features/landing/components/sovereignty/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$sovereignty$2f$sovereignty$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/landing/components/sovereignty/sovereignty-section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$workflow$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/features/landing/components/workflow/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$workflow$2f$workflow$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/landing/components/workflow/workflow-section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-ssr] (ecmascript)");
;
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const SECTION_IDS = [
    "hero",
    "workflow",
    "features",
    "products",
    "sovereignty",
    "architecture",
    "faq",
    "contact"
];
const DeferredDocumentIntelligenceDemo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/src/features/landing/components/demo/index.ts [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroDemoPlaceholder, {}, void 0, false, {
            fileName: "[project]/src/features/landing/components/landing-page.tsx",
            lineNumber: 40,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0)),
    ssr: false
});
// ─── Demo components — INCHANGÉS ─────────────────────────────────────────────
function HeroDemoPlaceholder() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": "true",
        className: "client-ui flex h-[720px] flex-col bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50 max-sm:h-[520px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 border-b border-neutral-200 bg-white px-4 py-3 dark:border-neutral-800 dark:bg-neutral-950",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-3 w-3 rounded-full bg-red-500"
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/landing-page.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-3 w-3 rounded-full bg-yellow-400"
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/landing-page.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-3 w-3 rounded-full bg-green-500"
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/landing-page.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-3 h-7 flex-1 rounded-md border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900"
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/landing-page.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/landing/components/landing-page.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid flex-1 grid-cols-[0.36fr_0.64fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3 border-r border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900/70",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-9 rounded-md bg-orange-100 dark:bg-orange-500/15"
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/landing-page.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-8 rounded-md bg-white dark:bg-neutral-800"
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/landing-page.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5 h-px bg-neutral-200 dark:bg-neutral-800"
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/landing-page.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-12 rounded-xl bg-white dark:bg-neutral-800"
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/landing-page.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800/70"
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/landing-page.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800/70"
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/landing-page.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/landing/components/landing-page.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col bg-white p-5 dark:bg-neutral-950",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-14 max-w-[70%] rounded-xl bg-neutral-100 dark:bg-neutral-900"
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/landing-page.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 ml-auto h-20 w-[68%] rounded-xl bg-[#ff6a13]"
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/landing-page.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 h-24 max-w-[78%] rounded-xl bg-neutral-100 dark:bg-neutral-900"
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/landing-page.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-auto h-12 rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/60"
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/components/landing-page.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/landing/components/landing-page.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/landing/components/landing-page.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/landing/components/landing-page.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
function LazyHeroDemo() {
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (ready) {
            return undefined;
        }
        const load = ()=>setReady(true);
        if (typeof window.requestIdleCallback === "function") {
            const idleHandle = window.requestIdleCallback(load, {
                timeout: 1800
            });
            return ()=>window.cancelIdleCallback(idleHandle);
        }
        const timeout = window.setTimeout(load, 1200);
        return ()=>window.clearTimeout(timeout);
    }, [
        ready
    ]);
    if (ready) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DeferredDocumentIntelligenceDemo, {}, void 0, false, {
            fileName: "[project]/src/features/landing/components/landing-page.tsx",
            lineNumber: 99,
            columnNumber: 12
        }, this);
    }
    const loadDemo = ()=>setReady(true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onFocus: loadDemo,
        onPointerEnter: loadDemo,
        onTouchStart: loadDemo,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroDemoPlaceholder, {}, void 0, false, {
            fileName: "[project]/src/features/landing/components/landing-page.tsx",
            lineNumber: 106,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/landing/components/landing-page.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
// ─── Layout helpers ───────────────────────────────────────────────────────────
function SectionLabel({ number, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-6 flex items-center gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-mono text-xs tracking-[0.2em] text-[#FF6A13]",
                children: number
            }, void 0, false, {
                fileName: "[project]/src/features/landing/components/landing-page.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "block h-px w-6",
                style: {
                    background: "var(--pf-border-2)"
                }
            }, void 0, false, {
                fileName: "[project]/src/features/landing/components/landing-page.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-mono text-xs uppercase tracking-[0.2em] text-[var(--pf-fg-muted)]",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/features/landing/components/landing-page.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/landing/components/landing-page.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
function Divider() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-px",
        style: {
            background: "var(--pf-border)"
        }
    }, void 0, false, {
        fileName: "[project]/src/features/landing/components/landing-page.tsx",
        lineNumber: 128,
        columnNumber: 10
    }, this);
}
// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSectionWrapper() {
    const { i18n: i18nInst } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const lang = i18nInst.language.startsWith("fr") ? "fr" : "en";
    const copy = lang === "fr" ? {
        badge: "Intelligence documentaire · données sensibles",
        title1: "Transformez vos documents",
        highlight: "confidentiels",
        title2: "en réponses sourcées.",
        subtitle: "Prosperify aide les équipes à interroger leurs corpus financiers, juridiques et immobiliers avec des sources visibles, des accès gouvernés et un périmètre de déploiement clair.",
        primary: "Demander une démo",
        secondary: "Voir le workflow"
    } : {
        badge: "Document intelligence for sensitive data",
        title1: "Turn confidential",
        highlight: "documents",
        title2: "into sourced answers.",
        subtitle: "Prosperify helps teams query financial, legal and real-estate corpora with visible sources, governed access and a clear deployment perimeter.",
        primary: "Request a demo",
        secondary: "See the workflow"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        className: "px-5 sm:px-8 lg:px-12",
        style: {
            paddingTop: "clamp(116px, 15vh, 160px)",
            paddingBottom: "clamp(56px, 7vh, 88px)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center gap-10 lg:gap-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-0 max-w-[560px] flex-1 basis-80",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-1.5 w-1.5 bg-[#FF6A13]",
                                    style: {
                                        animation: "pf-pulse 2.4s ease-in-out infinite"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/features/landing/components/landing-page.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-[11px] uppercase tracking-[0.2em] text-[#FF6A13]",
                                    children: copy.badge
                                }, void 0, false, {
                                    fileName: "[project]/src/features/landing/components/landing-page.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/landing/components/landing-page.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "m-0 font-extrabold leading-[1.02] tracking-[-0.03em] text-[var(--pf-fg)]",
                            style: {
                                fontSize: "clamp(2.4rem, 6vw, 4.5rem)"
                            },
                            children: [
                                copy.title1,
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#FF6A13]",
                                    children: copy.highlight
                                }, void 0, false, {
                                    fileName: "[project]/src/features/landing/components/landing-page.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/features/landing/components/landing-page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, this),
                                copy.title2
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/landing/components/landing-page.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-6 max-w-[620px] leading-[1.65] text-[var(--pf-fg-muted)]",
                            style: {
                                fontSize: "clamp(1rem, 1.5vw, 1.2rem)"
                            },
                            children: copy.subtitle
                        }, void 0, false, {
                            fileName: "[project]/src/features/landing/components/landing-page.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 flex flex-wrap gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#contact",
                                    className: "inline-flex items-center gap-2 bg-[#FF6A13] px-6 py-3.5 text-sm font-semibold text-[#080808] transition-colors hover:bg-[#ff8232]",
                                    children: [
                                        copy.primary,
                                        " →"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/landing/components/landing-page.tsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#workflow",
                                    className: "inline-flex items-center gap-2 border px-6 py-3.5 text-sm font-semibold text-[var(--pf-fg)] transition-colors hover:border-[#FF6A13]",
                                    style: {
                                        borderColor: "var(--pf-border-2)",
                                        background: "transparent"
                                    },
                                    children: copy.secondary
                                }, void 0, false, {
                                    fileName: "[project]/src/features/landing/components/landing-page.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/landing/components/landing-page.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/landing/components/landing-page.tsx",
                    lineNumber: 171,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-0 flex-1 basis-96 border border-[var(--pf-border)] overflow-hidden",
                    style: {
                        animation: "pf-fadeUp 0.6s ease",
                        boxShadow: "var(--pf-demo-shadow)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LazyHeroDemo, {}, void 0, false, {
                        fileName: "[project]/src/features/landing/components/landing-page.tsx",
                        lineNumber: 221,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/landing/components/landing-page.tsx",
                    lineNumber: 214,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/landing/components/landing-page.tsx",
            lineNumber: 169,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/landing/components/landing-page.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
// ─── Architecture (needs i18n so defined here) ────────────────────────────────
function ArchitectureSectionContent() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "max-w-[820px] font-bold leading-[1.06] tracking-[-0.02em] text-[var(--pf-fg)]",
                style: {
                    fontSize: "clamp(1.9rem, 4vw, 3.1rem)"
                },
                children: [
                    t("architecture.titlePrefix"),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#FF6A13]",
                        children: t("architecture.titleHighlight")
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/components/landing-page.tsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/landing/components/landing-page.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-[18px] max-w-[660px] text-[1.05rem] text-[var(--pf-fg-muted)]",
                children: t("architecture.subtitle")
            }, void 0, false, {
                fileName: "[project]/src/features/landing/components/landing-page.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-11",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$architecture$2f$architecture$2d$demo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArchitectureDemo"], {}, void 0, false, {
                    fileName: "[project]/src/features/landing/components/landing-page.tsx",
                    lineNumber: 245,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/landing/components/landing-page.tsx",
                lineNumber: 244,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
// ─── Contact ──────────────────────────────────────────────────────────────────
function ContactSectionWrapper() {
    const { i18n: i18nInst } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const lang = i18nInst.language.startsWith("fr") ? "fr" : "en";
    const copy = lang === "fr" ? {
        title: "Cadrons votre premier cas d'usage documentaire",
        lead: "Identifiez un corpus sensible, un assistant métier ou un workflow à fiabiliser. Prosperify vous aide à cadrer un pilote mesurable, sécurisé et aligné sur vos exigences de confidentialité.",
        checks: [
            "Corpus sensible",
            "Assistant métier",
            "Pilote sécurisé"
        ]
    } : {
        title: "See how Prosperify fits your environment.",
        lead: "Share your corpora, security requirements and existing tools. We will respond with a concrete deployment path.",
        checks: [
            "Document corpora",
            "Sources and connectors",
            "Deployment model"
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "px-5 sm:px-8 lg:px-12",
        style: {
            paddingTop: "clamp(72px, 10vh, 112px)",
            paddingBottom: "clamp(72px, 10vh, 112px)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 gap-px border border-[var(--pf-border)] lg:grid-cols-2",
            style: {
                background: "var(--pf-border)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: "clamp(28px,3vw,44px)",
                        background: "var(--pf-bg-card)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLabel, {
                            number: "08",
                            label: "Contact"
                        }, void 0, false, {
                            fileName: "[project]/src/features/landing/components/landing-page.tsx",
                            lineNumber: 286,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-bold leading-[1.08] tracking-[-0.02em] text-[var(--pf-fg)]",
                            style: {
                                fontSize: "clamp(1.7rem, 3vw, 2.6rem)"
                            },
                            children: copy.title
                        }, void 0, false, {
                            fileName: "[project]/src/features/landing/components/landing-page.tsx",
                            lineNumber: 287,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-5 text-base leading-[1.65] text-[var(--pf-fg-muted)]",
                            children: copy.lead
                        }, void 0, false, {
                            fileName: "[project]/src/features/landing/components/landing-page.tsx",
                            lineNumber: 293,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-7 flex flex-col gap-2",
                            children: copy.checks.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 border px-3.5 py-3 text-sm font-medium text-[var(--pf-fg)]",
                                    style: {
                                        borderColor: "var(--pf-border)",
                                        background: "var(--pf-bg-card-2)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-2 w-2 bg-[#FF6A13]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/landing/components/landing-page.tsx",
                                            lineNumber: 306,
                                            columnNumber: 17
                                        }, this),
                                        item
                                    ]
                                }, item, true, {
                                    fileName: "[project]/src/features/landing/components/landing-page.tsx",
                                    lineNumber: 298,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/features/landing/components/landing-page.tsx",
                            lineNumber: 296,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/landing/components/landing-page.tsx",
                    lineNumber: 280,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: "clamp(28px,3vw,44px)",
                        background: "var(--pf-bg-card-3)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$contact$2f$components$2f$contact$2d$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ContactForm$3e$__["ContactForm"], {}, void 0, false, {
                        fileName: "[project]/src/features/landing/components/landing-page.tsx",
                        lineNumber: 318,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/landing/components/landing-page.tsx",
                    lineNumber: 312,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/landing/components/landing-page.tsx",
            lineNumber: 276,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/landing/components/landing-page.tsx",
        lineNumber: 271,
        columnNumber: 5
    }, this);
}
// ─── Section navigator ────────────────────────────────────────────────────────
function SectionNavigator() {
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const sectionIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>SECTION_IDS, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const sections = sectionIds.map((id)=>document.getElementById(id)).filter((element)=>Boolean(element));
        if (sections.length === 0) {
            return undefined;
        }
        const observer = new IntersectionObserver((entries)=>{
            const visible = entries.filter((entry)=>entry.isIntersecting).sort((a, b)=>b.intersectionRatio - a.intersectionRatio)[0];
            if (!visible) {
                return;
            }
            if (visible.target.id) {
                const nextIndex = sectionIds.indexOf(visible.target.id);
                if (nextIndex >= 0) {
                    setActiveIndex(nextIndex);
                }
            }
        }, {
            rootMargin: "-34% 0px -48% 0px",
            threshold: [
                0.08,
                0.18,
                0.32
            ]
        });
        sections.forEach((section)=>observer.observe(section));
        return ()=>observer.disconnect();
    }, [
        sectionIds
    ]);
    const scrollToIndex = (index)=>{
        const nextIndex = Math.min(Math.max(index, 0), sectionIds.length - 1);
        document.getElementById(sectionIds[nextIndex])?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-6 right-5 z-40 hidden flex-col border border-[var(--pf-border)] p-1 backdrop-blur-md sm:flex",
        style: {
            background: "var(--pf-widget-bg)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "aria-label": "Previous section",
                className: "flex h-10 w-10 items-center justify-center text-[var(--pf-fg-dim)] transition-colors hover:bg-[#FF6A13]/10 hover:text-[#FF6A13] disabled:pointer-events-none disabled:opacity-30",
                disabled: activeIndex === 0,
                onClick: ()=>scrollToIndex(activeIndex - 1),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/features/landing/components/landing-page.tsx",
                    lineNumber: 384,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/landing/components/landing-page.tsx",
                lineNumber: 377,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto my-1 h-px w-6",
                style: {
                    background: "var(--pf-border)"
                }
            }, void 0, false, {
                fileName: "[project]/src/features/landing/components/landing-page.tsx",
                lineNumber: 386,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "aria-label": "Next section",
                className: "flex h-10 w-10 items-center justify-center text-[var(--pf-fg-dim)] transition-colors hover:bg-[#FF6A13]/10 hover:text-[#FF6A13] disabled:pointer-events-none disabled:opacity-30",
                disabled: activeIndex === sectionIds.length - 1,
                onClick: ()=>scrollToIndex(activeIndex + 1),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/features/landing/components/landing-page.tsx",
                    lineNumber: 394,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/landing/components/landing-page.tsx",
                lineNumber: 387,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/landing/components/landing-page.tsx",
        lineNumber: 373,
        columnNumber: 5
    }, this);
}
function LandingPage({ lang }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (lang && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].language !== lang) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].changeLanguage(lang).catch(()=>undefined);
        }
    }, [
        lang
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen [overflow-anchor:none]",
        style: {
            background: "var(--pf-bg)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed inset-0 z-0",
                style: {
                    backgroundImage: "linear-gradient(to right, var(--pf-grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--pf-grid-line) 1px, transparent 1px)",
                    backgroundSize: "64px 64px"
                }
            }, void 0, false, {
                fileName: "[project]/src/features/landing/components/landing-page.tsx",
                lineNumber: 415,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed inset-0 z-0",
                style: {
                    background: "radial-gradient(ellipse 70% 44% at 50% -6%, rgba(255,106,19,0.07), transparent 62%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/features/landing/components/landing-page.tsx",
                lineNumber: 424,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$navigation$2f$navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LandingNavbar"], {}, void 0, false, {
                fileName: "[project]/src/features/landing/components/landing-page.tsx",
                lineNumber: 432,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionNavigator, {}, void 0, false, {
                fileName: "[project]/src/features/landing/components/landing-page.tsx",
                lineNumber: 433,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "relative z-10 [overflow-anchor:none]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-[1360px] border-x border-[var(--pf-border)] [overflow-anchor:none]",
                    style: {
                        background: "var(--pf-column-bg)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroSectionWrapper, {}, void 0, false, {
                            fileName: "[project]/src/features/landing/components/landing-page.tsx",
                            lineNumber: 441,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                            fileName: "[project]/src/features/landing/components/landing-page.tsx",
                            lineNumber: 443,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "workflow",
                            className: "px-5 sm:px-8 lg:px-12",
                            style: {
                                paddingTop: "clamp(72px, 10vh, 112px)",
                                paddingBottom: "clamp(72px, 10vh, 112px)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLabel, {
                                    number: "02",
                                    label: "Workflow"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/landing/components/landing-page.tsx",
                                    lineNumber: 450,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$workflow$2f$workflow$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WorkflowSection"], {}, void 0, false, {
                                    fileName: "[project]/src/features/landing/components/landing-page.tsx",
                                    lineNumber: 451,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/landing/components/landing-page.tsx",
                            lineNumber: 445,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                            fileName: "[project]/src/features/landing/components/landing-page.tsx",
                            lineNumber: 454,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "features",
                            className: "px-5 sm:px-8 lg:px-12",
                            style: {
                                paddingTop: "clamp(72px, 10vh, 112px)",
                                paddingBottom: "clamp(72px, 10vh, 112px)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLabel, {
                                    number: "03",
                                    label: "Fonctionnalités"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/landing/components/landing-page.tsx",
                                    lineNumber: 461,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$features$2f$prosperify$2d$features$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ProsperifyFeatures$3e$__["ProsperifyFeatures"], {}, void 0, false, {
                                    fileName: "[project]/src/features/landing/components/landing-page.tsx",
                                    lineNumber: 462,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/landing/components/landing-page.tsx",
                            lineNumber: 456,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                            fileName: "[project]/src/features/landing/components/landing-page.tsx",
                            lineNumber: 465,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "products",
                            className: "px-5 sm:px-8 lg:px-12",
                            style: {
                                paddingTop: "clamp(72px, 10vh, 112px)",
                                paddingBottom: "clamp(72px, 10vh, 112px)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLabel, {
                                    number: "04",
                                    label: "Nos offres"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/landing/components/landing-page.tsx",
                                    lineNumber: 472,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$products$2f$product$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ProductSection$3e$__["ProductSection"], {}, void 0, false, {
                                    fileName: "[project]/src/features/landing/components/landing-page.tsx",
                                    lineNumber: 473,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/landing/components/landing-page.tsx",
                            lineNumber: 467,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                            fileName: "[project]/src/features/landing/components/landing-page.tsx",
                            lineNumber: 476,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "sovereignty",
                            className: "px-5 sm:px-8 lg:px-12",
                            style: {
                                paddingTop: "clamp(72px, 10vh, 112px)",
                                paddingBottom: "clamp(72px, 10vh, 112px)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLabel, {
                                    number: "05",
                                    label: "Intégration"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/landing/components/landing-page.tsx",
                                    lineNumber: 483,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$sovereignty$2f$sovereignty$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SovereigntySection"], {}, void 0, false, {
                                    fileName: "[project]/src/features/landing/components/landing-page.tsx",
                                    lineNumber: 484,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/landing/components/landing-page.tsx",
                            lineNumber: 478,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                            fileName: "[project]/src/features/landing/components/landing-page.tsx",
                            lineNumber: 487,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "architecture",
                            className: "px-5 sm:px-8 lg:px-12",
                            style: {
                                paddingTop: "clamp(72px, 10vh, 112px)",
                                paddingBottom: "clamp(72px, 10vh, 112px)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLabel, {
                                    number: "06",
                                    label: "Architecture"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/landing/components/landing-page.tsx",
                                    lineNumber: 494,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ArchitectureSectionContent, {}, void 0, false, {
                                    fileName: "[project]/src/features/landing/components/landing-page.tsx",
                                    lineNumber: 495,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/landing/components/landing-page.tsx",
                            lineNumber: 489,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                            fileName: "[project]/src/features/landing/components/landing-page.tsx",
                            lineNumber: 498,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "faq",
                            className: "px-5 sm:px-8 lg:px-12",
                            style: {
                                paddingTop: "clamp(72px, 10vh, 112px)",
                                paddingBottom: "clamp(72px, 10vh, 112px)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLabel, {
                                    number: "07",
                                    label: "FAQ"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/landing/components/landing-page.tsx",
                                    lineNumber: 505,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$faq$2f$faq$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FAQSection"], {}, void 0, false, {
                                    fileName: "[project]/src/features/landing/components/landing-page.tsx",
                                    lineNumber: 506,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/landing/components/landing-page.tsx",
                            lineNumber: 500,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                            fileName: "[project]/src/features/landing/components/landing-page.tsx",
                            lineNumber: 509,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactSectionWrapper, {}, void 0, false, {
                            fileName: "[project]/src/features/landing/components/landing-page.tsx",
                            lineNumber: 511,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/landing/components/landing-page.tsx",
                    lineNumber: 437,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/landing/components/landing-page.tsx",
                lineNumber: 435,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$footer$2f$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LandingFooter"], {}, void 0, false, {
                fileName: "[project]/src/features/landing/components/landing-page.tsx",
                lineNumber: 515,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/landing/components/landing-page.tsx",
        lineNumber: 410,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$landing$2d$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/landing/components/landing-page.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Home() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            return;
        }
        //TURBOPACK unreachable
        ;
        const navigatorLang = undefined;
        const lang = undefined;
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$components$2f$landing$2d$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 20,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__eb54c570._.js.map