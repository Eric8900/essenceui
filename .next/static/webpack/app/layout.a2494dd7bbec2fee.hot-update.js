"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"17f28906fb55\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzhhOWYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIxN2YyODkwNmZiNTVcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/navigation/sublink.tsx":
/*!*******************************************!*\
  !*** ./components/navigation/sublink.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SubLink; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _barrel_optimize_names_LuChevronDown_LuChevronRight_react_icons_lu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=LuChevronDown,LuChevronRight!=!react-icons/lu */ \"(app-pages-browser)/./node_modules/react-icons/lu/index.mjs\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* harmony import */ var _components_ui_collapsible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/collapsible */ \"(app-pages-browser)/./components/ui/collapsible.tsx\");\n/* harmony import */ var _components_ui_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/sheet */ \"(app-pages-browser)/./components/ui/sheet.tsx\");\n/* harmony import */ var _components_navigation_anchor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/navigation/anchor */ \"(app-pages-browser)/./components/navigation/anchor.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction isRoute(item) {\n    return \"title\" in item && \"href\" in item;\n}\nfunction SubLink(props) {\n    _s();\n    const path = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isRoute(props) && props.href && path !== props.href && path.includes(props.href)) {\n            setIsOpen(true);\n        }\n    }, [\n        path,\n        props\n    ]);\n    if (!isRoute(props)) {\n        return null;\n    }\n    const { title, href, items, noLink, level, isSheet } = props;\n    const Comp = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navigation_anchor__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        activeClassName: \"text-primary text-sm\",\n        className: \"hover:text-sky-500 text-gray-200 hover:translate-x-1 transition-all duration-200 ease-in-out\",\n        href: href,\n        children: title\n    }, void 0, false, {\n        fileName: \"/Users/ericchen/Repos/ComponentLibrary/components/navigation/sublink.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n    const titleOrLink = !noLink ? isSheet ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_sheet__WEBPACK_IMPORTED_MODULE_5__.SheetClose, {\n        asChild: true,\n        children: Comp\n    }, void 0, false, {\n        fileName: \"/Users/ericchen/Repos/ComponentLibrary/components/navigation/sublink.tsx\",\n        lineNumber: 46,\n        columnNumber: 15\n    }, this) : Comp : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: \"text-primary sm:text-sm\",\n        children: title\n    }, void 0, false, {\n        fileName: \"/Users/ericchen/Repos/ComponentLibrary/components/navigation/sublink.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n    if (!items) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col text-sm\",\n            children: titleOrLink\n        }, void 0, false, {\n            fileName: \"/Users/ericchen/Repos/ComponentLibrary/components/navigation/sublink.tsx\",\n            lineNumber: 52,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col w-full gap-1\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_collapsible__WEBPACK_IMPORTED_MODULE_4__.Collapsible, {\n            open: isOpen,\n            onOpenChange: setIsOpen,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-2 text-sm mr-3\",\n                    children: [\n                        titleOrLink,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_collapsible__WEBPACK_IMPORTED_MODULE_4__.CollapsibleTrigger, {\n                            asChild: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                className: \"ml-auto h-6 w-6\",\n                                variant: \"link\",\n                                size: \"icon\",\n                                children: [\n                                    !isOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LuChevronDown_LuChevronRight_react_icons_lu__WEBPACK_IMPORTED_MODULE_8__.LuChevronRight, {\n                                        className: \"h-[0.9rem] w-[0.9rem]\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ericchen/Repos/ComponentLibrary/components/navigation/sublink.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 17\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LuChevronDown_LuChevronRight_react_icons_lu__WEBPACK_IMPORTED_MODULE_8__.LuChevronDown, {\n                                        className: \"h-[0.9rem] w-[0.9rem]\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ericchen/Repos/ComponentLibrary/components/navigation/sublink.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"sr-only\",\n                                        children: \"Toggle\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ericchen/Repos/ComponentLibrary/components/navigation/sublink.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ericchen/Repos/ComponentLibrary/components/navigation/sublink.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ericchen/Repos/ComponentLibrary/components/navigation/sublink.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ericchen/Repos/ComponentLibrary/components/navigation/sublink.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_collapsible__WEBPACK_IMPORTED_MODULE_4__.CollapsibleContent, {\n                    className: \"CollapsibleContent\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(\"mt-2.5 flex flex-col items-start gap-3 pl-4 text-sm border-l text-neutral-800 dark:text-neutral-300/85\", level > 0 && \"ml-1 pl-4 border-l\"),\n                        children: items === null || items === void 0 ? void 0 : items.map((innerLink)=>{\n                            if (!isRoute(innerLink)) {\n                                return null;\n                            }\n                            const modifiedItems = {\n                                ...innerLink,\n                                href: \"\".concat(href).concat(innerLink.href),\n                                level: level + 1,\n                                isSheet\n                            };\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubLink, {\n                                ...modifiedItems\n                            }, modifiedItems.href, false, {\n                                fileName: \"/Users/ericchen/Repos/ComponentLibrary/components/navigation/sublink.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 22\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/ericchen/Repos/ComponentLibrary/components/navigation/sublink.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ericchen/Repos/ComponentLibrary/components/navigation/sublink.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ericchen/Repos/ComponentLibrary/components/navigation/sublink.tsx\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ericchen/Repos/ComponentLibrary/components/navigation/sublink.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_s(SubLink, \"1nJgXlO2prUL5pQT1bvDRu7xGUs=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = SubLink;\nvar _c;\n$RefreshReg$(_c, \"SubLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9zdWJsaW5rLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0U7QUFFaUI7QUFHOUI7QUFNSTtBQUNjO0FBRUM7QUFDSjtBQUVoRCxTQUFTWSxRQUFRQyxJQUFXO0lBQzFCLE9BQU8sV0FBV0EsUUFBUSxVQUFVQTtBQUN0QztBQUVlLFNBQVNDLFFBQVFDLEtBQWtEOztJQUNoRixNQUFNQyxPQUFPZCw0REFBV0E7SUFDeEIsTUFBTSxDQUFDZSxRQUFRQyxVQUFVLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUVyQ0QsZ0RBQVNBLENBQUM7UUFDUixJQUFJWSxRQUFRRyxVQUFVQSxNQUFNSSxJQUFJLElBQUlILFNBQVNELE1BQU1JLElBQUksSUFBSUgsS0FBS0ksUUFBUSxDQUFDTCxNQUFNSSxJQUFJLEdBQUc7WUFDcEZELFVBQVU7UUFDWjtJQUNGLEdBQUc7UUFBQ0Y7UUFBTUQ7S0FBTTtJQUVoQixJQUFJLENBQUNILFFBQVFHLFFBQVE7UUFDbkIsT0FBTztJQUNUO0lBRUEsTUFBTSxFQUFFTSxLQUFLLEVBQUVGLElBQUksRUFBRUcsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFLEdBQUdWO0lBRXZELE1BQU1XLHFCQUNKLDhEQUFDaEIscUVBQU1BO1FBQUNpQixpQkFBZ0I7UUFBdUJDLFdBQVU7UUFBK0ZULE1BQU1BO2tCQUMzSkU7Ozs7OztJQUlMLE1BQU1RLGNBQWMsQ0FBQ04sU0FDbkJFLHdCQUFVLDhEQUFDaEIsNERBQVVBO1FBQUNxQixPQUFPO2tCQUFFSjs7Ozs7ZUFBcUJBLHFCQUVwRCw4REFBQ0s7UUFBR0gsV0FBVTtrQkFBMkJQOzs7Ozs7SUFHM0MsSUFBSSxDQUFDQyxPQUFPO1FBQ1YscUJBQU8sOERBQUNVO1lBQUlKLFdBQVU7c0JBQXlCQzs7Ozs7O0lBQ2pEO0lBRUEscUJBQ0UsOERBQUNHO1FBQUlKLFdBQVU7a0JBQ2IsNEVBQUN0QixtRUFBV0E7WUFBQzJCLE1BQU1oQjtZQUFRaUIsY0FBY2hCOzs4QkFDdkMsOERBQUNjO29CQUFJSixXQUFVOzt3QkFDWkM7c0NBQ0QsOERBQUNyQiwwRUFBa0JBOzRCQUFDc0IsT0FBTztzQ0FDekIsNEVBQUNuQix5REFBTUE7Z0NBQ0xpQixXQUFVO2dDQUNWTyxTQUFRO2dDQUNSQyxNQUFLOztvQ0FFSixDQUFDbkIsdUJBQ0EsOERBQUNiLDhHQUFjQTt3Q0FBQ3dCLFdBQVU7Ozs7OzZEQUUxQiw4REFBQ3pCLDZHQUFhQTt3Q0FBQ3lCLFdBQVU7Ozs7OztrREFFM0IsOERBQUNTO3dDQUFLVCxXQUFVO2tEQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJaEMsOERBQUNyQiwwRUFBa0JBO29CQUFDcUIsV0FBVTs4QkFDNUIsNEVBQUNJO3dCQUNDSixXQUFXdkIsOENBQUVBLENBQ1gsMEdBQ0FtQixRQUFRLEtBQUs7a0NBR2RGLGtCQUFBQSw0QkFBQUEsTUFBT2dCLEdBQUcsQ0FBQyxDQUFDQzs0QkFDWCxJQUFJLENBQUMzQixRQUFRMkIsWUFBWTtnQ0FDdkIsT0FBTzs0QkFDVDs0QkFFQSxNQUFNQyxnQkFBZ0I7Z0NBQ3BCLEdBQUdELFNBQVM7Z0NBQ1pwQixNQUFNLEdBQVVvQixPQUFQcEIsTUFBc0IsT0FBZm9CLFVBQVVwQixJQUFJO2dDQUM5QkssT0FBT0EsUUFBUTtnQ0FDZkM7NEJBQ0Y7NEJBRUEscUJBQU8sOERBQUNYO2dDQUFrQyxHQUFHMEIsYUFBYTsrQkFBckNBLGNBQWNyQixJQUFJOzs7Ozt3QkFDekM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNWjtHQTlFd0JMOztRQUNUWix3REFBV0E7OztLQURGWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmlnYXRpb24vc3VibGluay50c3g/Y2RjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuaW1wb3J0IHsgTHVDaGV2cm9uRG93biwgTHVDaGV2cm9uUmlnaHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvbHVcIjtcblxuaW1wb3J0IHsgUGF0aHMgfSBmcm9tIFwiQC9saWIvcGFnZXJvdXRlc1wiO1xuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcblxuaW1wb3J0IHtcbiAgQ29sbGFwc2libGUsXG4gIENvbGxhcHNpYmxlQ29udGVudCxcbiAgQ29sbGFwc2libGVUcmlnZ2VyXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY29sbGFwc2libGVcIjtcbmltcG9ydCB7IFNoZWV0Q2xvc2UgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3NoZWV0XCI7XG5cbmltcG9ydCBBbmNob3IgZnJvbSBcIkAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL2FuY2hvclwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcblxuZnVuY3Rpb24gaXNSb3V0ZShpdGVtOiBQYXRocyk6IGl0ZW0gaXMgRXh0cmFjdDxQYXRocywgeyB0aXRsZTogc3RyaW5nOyBocmVmOiBzdHJpbmcgfT4ge1xuICByZXR1cm4gXCJ0aXRsZVwiIGluIGl0ZW0gJiYgXCJocmVmXCIgaW4gaXRlbTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3ViTGluayhwcm9wczogUGF0aHMgJiB7IGxldmVsOiBudW1iZXI7IGlzU2hlZXQ6IGJvb2xlYW4gfSkge1xuICBjb25zdCBwYXRoID0gdXNlUGF0aG5hbWUoKTtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzUm91dGUocHJvcHMpICYmIHByb3BzLmhyZWYgJiYgcGF0aCAhPT0gcHJvcHMuaHJlZiAmJiBwYXRoLmluY2x1ZGVzKHByb3BzLmhyZWYpKSB7XG4gICAgICBzZXRJc09wZW4odHJ1ZSk7XG4gICAgfVxuICB9LCBbcGF0aCwgcHJvcHNdKTtcblxuICBpZiAoIWlzUm91dGUocHJvcHMpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCB7IHRpdGxlLCBocmVmLCBpdGVtcywgbm9MaW5rLCBsZXZlbCwgaXNTaGVldCB9ID0gcHJvcHM7XG5cbiAgY29uc3QgQ29tcCA9IChcbiAgICA8QW5jaG9yIGFjdGl2ZUNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSB0ZXh0LXNtXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1za3ktNTAwIHRleHQtZ3JheS0yMDAgaG92ZXI6dHJhbnNsYXRlLXgtMSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXRcIiBocmVmPXtocmVmfT5cbiAgICAgIHt0aXRsZX1cbiAgICA8L0FuY2hvcj5cbiAgKTtcblxuICBjb25zdCB0aXRsZU9yTGluayA9ICFub0xpbmsgPyAoXG4gICAgaXNTaGVldCA/IDxTaGVldENsb3NlIGFzQ2hpbGQ+e0NvbXB9PC9TaGVldENsb3NlPiA6IENvbXBcbiAgKSA6IChcbiAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IHNtOnRleHQtc21cIj57dGl0bGV9PC9oMj5cbiAgKTtcblxuICBpZiAoIWl0ZW1zKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB0ZXh0LXNtXCI+e3RpdGxlT3JMaW5rfTwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBnYXAtMVwiPlxuICAgICAgPENvbGxhcHNpYmxlIG9wZW49e2lzT3Blbn0gb25PcGVuQ2hhbmdlPXtzZXRJc09wZW59PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtc20gbXItM1wiPlxuICAgICAgICAgIHt0aXRsZU9yTGlua31cbiAgICAgICAgICA8Q29sbGFwc2libGVUcmlnZ2VyIGFzQ2hpbGQ+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLWF1dG8gaC02IHctNlwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJsaW5rXCJcbiAgICAgICAgICAgICAgc2l6ZT1cImljb25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7IWlzT3BlbiA/IChcbiAgICAgICAgICAgICAgICA8THVDaGV2cm9uUmlnaHQgY2xhc3NOYW1lPVwiaC1bMC45cmVtXSB3LVswLjlyZW1dXCIgLz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8THVDaGV2cm9uRG93biBjbGFzc05hbWU9XCJoLVswLjlyZW1dIHctWzAuOXJlbV1cIiAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+VG9nZ2xlPC9zcGFuPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Db2xsYXBzaWJsZVRyaWdnZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Q29sbGFwc2libGVDb250ZW50IGNsYXNzTmFtZT1cIkNvbGxhcHNpYmxlQ29udGVudFwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgICAgIFwibXQtMi41IGZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQgZ2FwLTMgcGwtNCB0ZXh0LXNtIGJvcmRlci1sIHRleHQtbmV1dHJhbC04MDAgZGFyazp0ZXh0LW5ldXRyYWwtMzAwLzg1XCIsXG4gICAgICAgICAgICAgIGxldmVsID4gMCAmJiBcIm1sLTEgcGwtNCBib3JkZXItbFwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpdGVtcz8ubWFwKChpbm5lckxpbmspID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFpc1JvdXRlKGlubmVyTGluaykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNvbnN0IG1vZGlmaWVkSXRlbXMgPSB7XG4gICAgICAgICAgICAgICAgLi4uaW5uZXJMaW5rLFxuICAgICAgICAgICAgICAgIGhyZWY6IGAke2hyZWZ9JHtpbm5lckxpbmsuaHJlZn1gLFxuICAgICAgICAgICAgICAgIGxldmVsOiBsZXZlbCArIDEsXG4gICAgICAgICAgICAgICAgaXNTaGVldCxcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICByZXR1cm4gPFN1Ykxpbmsga2V5PXttb2RpZmllZEl0ZW1zLmhyZWZ9IHsuLi5tb2RpZmllZEl0ZW1zfSAvPjtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgIDwvQ29sbGFwc2libGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VQYXRobmFtZSIsIkx1Q2hldnJvbkRvd24iLCJMdUNoZXZyb25SaWdodCIsImNuIiwiQ29sbGFwc2libGUiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJDb2xsYXBzaWJsZVRyaWdnZXIiLCJTaGVldENsb3NlIiwiQW5jaG9yIiwiQnV0dG9uIiwiaXNSb3V0ZSIsIml0ZW0iLCJTdWJMaW5rIiwicHJvcHMiLCJwYXRoIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiaHJlZiIsImluY2x1ZGVzIiwidGl0bGUiLCJpdGVtcyIsIm5vTGluayIsImxldmVsIiwiaXNTaGVldCIsIkNvbXAiLCJhY3RpdmVDbGFzc05hbWUiLCJjbGFzc05hbWUiLCJ0aXRsZU9yTGluayIsImFzQ2hpbGQiLCJoMiIsImRpdiIsIm9wZW4iLCJvbk9wZW5DaGFuZ2UiLCJ2YXJpYW50Iiwic2l6ZSIsInNwYW4iLCJtYXAiLCJpbm5lckxpbmsiLCJtb2RpZmllZEl0ZW1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/navigation/sublink.tsx\n"));

/***/ })

});