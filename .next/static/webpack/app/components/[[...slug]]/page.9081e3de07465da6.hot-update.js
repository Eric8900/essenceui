"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/components/[[...slug]]/page",{

/***/ "(app-pages-browser)/./components/ui/pre.tsx":
/*!*******************************!*\
  !*** ./components/ui/pre.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Pre; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_markup_copy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/markup/copy */ \"(app-pages-browser)/./components/markup/copy.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Pre(param) {\n    let { children, raw, ...rest } = param;\n    _s();\n    const [isExpanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showCollapseButton, setShowCollapseButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const contentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const maxCollapsedHeight = 300;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (contentRef.current) {\n            const contentHeight = contentRef.current.scrollHeight;\n            setShowCollapseButton(contentHeight > maxCollapsedHeight);\n        }\n    }, [\n        children\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-4 right-2.5 z-10 hidden sm:block\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_markup_copy__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    content: raw\n                }, void 0, false, {\n                    fileName: \"/Users/ericchen/Repos/ComponentLibrary/components/ui/pre.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ericchen/Repos/ComponentLibrary/components/ui/pre.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: contentRef,\n                className: \"relative transition-all duration-300 \".concat(isExpanded ? \"max-h-[600px] overflow-y-auto\" : \"max-h-[\".concat(maxCollapsedHeight, \"px] \").concat(showCollapseButton ? \"overflow-hidden\" : \"\")),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                            ...rest,\n                            children: children\n                        }, void 0, false, {\n                            fileName: \"/Users/ericchen/Repos/ComponentLibrary/components/ui/pre.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ericchen/Repos/ComponentLibrary/components/ui/pre.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    showCollapseButton && !isExpanded && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-900 to-transparent\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ericchen/Repos/ComponentLibrary/components/ui/pre.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ericchen/Repos/ComponentLibrary/components/ui/pre.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            showCollapseButton && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>setIsExpanded(!isExpanded),\n                className: \"absolute bottom-2 px-3 py-1 text-sm text-gray-200 bg-gray-800 rounded hover:bg-gray-700 transition-colors\",\n                children: isExpanded ? \"Collapse\" : \"Expand\"\n            }, void 0, false, {\n                fileName: \"/Users/ericchen/Repos/ComponentLibrary/components/ui/pre.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ericchen/Repos/ComponentLibrary/components/ui/pre.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(Pre, \"gY/TSYaAqG9q4OG4A5kUec7f3GY=\");\n_c = Pre;\nvar _c;\n$RefreshReg$(_c, \"Pre\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvcHJlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ29FO0FBQ3hCO0FBRTdCLFNBQVNJLElBQUksS0FJZTtRQUpmLEVBQzFCQyxRQUFRLEVBQ1JDLEdBQUcsRUFDSCxHQUFHQyxNQUNzQyxHQUpmOztJQUsxQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1QsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDVSxvQkFBb0JDLHNCQUFzQixHQUFHWCwrQ0FBUUEsQ0FBQztJQUM3RCxNQUFNWSxhQUFhViw2Q0FBTUEsQ0FBaUI7SUFDMUMsTUFBTVcscUJBQXFCO0lBRTNCWixnREFBU0EsQ0FBQztRQUNSLElBQUlXLFdBQVdFLE9BQU8sRUFBRTtZQUN0QixNQUFNQyxnQkFBZ0JILFdBQVdFLE9BQU8sQ0FBQ0UsWUFBWTtZQUNyREwsc0JBQXNCSSxnQkFBZ0JGO1FBQ3hDO0lBQ0YsR0FBRztRQUFDUjtLQUFTO0lBRWIscUJBQ0UsOERBQUNZO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ2YsK0RBQUlBO29CQUFDZ0IsU0FBU2I7Ozs7Ozs7Ozs7OzBCQUVqQiw4REFBQ1c7Z0JBQ0NHLEtBQUtSO2dCQUNMTSxXQUFXLHdDQUVWLE9BRENWLGFBQWEsa0NBQWtDLFVBQW1DRSxPQUF6Qkcsb0JBQW1CLFFBQWtELE9BQTVDSCxxQkFBcUIsb0JBQW9COztrQ0FHN0gsOERBQUNPO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRzs0QkFBSyxHQUFHZCxJQUFJO3NDQUFHRjs7Ozs7Ozs7Ozs7b0JBRWpCSyxzQkFBc0IsQ0FBQ0YsNEJBQ3RCLDhEQUFDUzt3QkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7O1lBR2xCUixvQ0FDQyw4REFBQ1k7Z0JBQ0NDLFNBQVMsSUFBTWQsY0FBYyxDQUFDRDtnQkFDOUJVLFdBQVU7MEJBRVRWLGFBQWEsYUFBYTs7Ozs7Ozs7Ozs7O0FBS3JDO0dBN0N3Qko7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9wcmUudHN4P2Q4YjIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgQ29tcG9uZW50UHJvcHMsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvcHkgZnJvbSBcIkAvY29tcG9uZW50cy9tYXJrdXAvY29weVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmUoe1xuICBjaGlsZHJlbixcbiAgcmF3LFxuICAuLi5yZXN0XG59OiBDb21wb25lbnRQcm9wczxcInByZVwiPiAmIHsgcmF3Pzogc3RyaW5nIH0pIHtcbiAgY29uc3QgW2lzRXhwYW5kZWQsIHNldElzRXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvd0NvbGxhcHNlQnV0dG9uLCBzZXRTaG93Q29sbGFwc2VCdXR0b25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBjb250ZW50UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3QgbWF4Q29sbGFwc2VkSGVpZ2h0ID0gMzAwO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNvbnRlbnRSZWYuY3VycmVudCkge1xuICAgICAgY29uc3QgY29udGVudEhlaWdodCA9IGNvbnRlbnRSZWYuY3VycmVudC5zY3JvbGxIZWlnaHQ7XG4gICAgICBzZXRTaG93Q29sbGFwc2VCdXR0b24oY29udGVudEhlaWdodCA+IG1heENvbGxhcHNlZEhlaWdodCk7XG4gICAgfVxuICB9LCBbY2hpbGRyZW5dKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQgcmlnaHQtMi41IHotMTAgaGlkZGVuIHNtOmJsb2NrXCI+XG4gICAgICAgIDxDb3B5IGNvbnRlbnQ9e3JhdyF9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXtjb250ZW50UmVmfVxuICAgICAgICBjbGFzc05hbWU9e2ByZWxhdGl2ZSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgJHtcbiAgICAgICAgICBpc0V4cGFuZGVkID8gXCJtYXgtaC1bNjAwcHhdIG92ZXJmbG93LXktYXV0b1wiIDogYG1heC1oLVske21heENvbGxhcHNlZEhlaWdodH1weF0gJHtzaG93Q29sbGFwc2VCdXR0b24gPyBcIm92ZXJmbG93LWhpZGRlblwiIDogXCJcIn1gXG4gICAgICAgIH1gfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgPHByZSB7Li4ucmVzdH0+e2NoaWxkcmVufTwvcHJlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3Nob3dDb2xsYXBzZUJ1dHRvbiAmJiAhaXNFeHBhbmRlZCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCBsZWZ0LTAgcmlnaHQtMCBoLTEyIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1ncmF5LTkwMCB0by10cmFuc3BhcmVudFwiIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzaG93Q29sbGFwc2VCdXR0b24gJiYgKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNFeHBhbmRlZCghaXNFeHBhbmRlZCl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTIgcHgtMyBweS0xIHRleHQtc20gdGV4dC1ncmF5LTIwMCBiZy1ncmF5LTgwMCByb3VuZGVkIGhvdmVyOmJnLWdyYXktNzAwIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtpc0V4cGFuZGVkID8gXCJDb2xsYXBzZVwiIDogXCJFeHBhbmRcIn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkNvcHkiLCJQcmUiLCJjaGlsZHJlbiIsInJhdyIsInJlc3QiLCJpc0V4cGFuZGVkIiwic2V0SXNFeHBhbmRlZCIsInNob3dDb2xsYXBzZUJ1dHRvbiIsInNldFNob3dDb2xsYXBzZUJ1dHRvbiIsImNvbnRlbnRSZWYiLCJtYXhDb2xsYXBzZWRIZWlnaHQiLCJjdXJyZW50IiwiY29udGVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRlbnQiLCJyZWYiLCJwcmUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/pre.tsx\n"));

/***/ })

});