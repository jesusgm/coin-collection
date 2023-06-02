"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CoinList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/CoinList */ \"(app-client)/./src/components/CoinList.tsx\");\n/* harmony import */ var _components_filters_YearRangeFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/filters/YearRangeFilter */ \"(app-client)/./src/components/filters/YearRangeFilter/index.tsx\");\n/* harmony import */ var _data_coins_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/data/coins.json */ \"(app-client)/./src/data/coins.json\");\n/* harmony import */ var _data_years_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/data/years.json */ \"(app-client)/./src/data/years.json\");\n/* harmony import */ var _helpers_years__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/helpers/years */ \"(app-client)/./src/helpers/years.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [filters, setFilters] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        yearRanges: [],\n        country: []\n    });\n    const filteredCoins = _data_coins_json__WEBPACK_IMPORTED_MODULE_4__.filter((coin)=>{\n        var _filters_yearRanges;\n        if ((filters === null || filters === void 0 ? void 0 : (_filters_yearRanges = filters.yearRanges) === null || _filters_yearRanges === void 0 ? void 0 : _filters_yearRanges.length) > 0) {\n            return filters.yearRanges.some((yr)=>{\n                return yr.start <= coin.year && yr.end >= coin.year;\n            });\n        }\n        return true;\n    });\n    const handleChangeYear = (value)=>{\n        var _filters_yearRanges, _filters_yearRanges1;\n        const isActive = (_filters_yearRanges = filters.yearRanges) === null || _filters_yearRanges === void 0 ? void 0 : _filters_yearRanges.some((y)=>y.start === value.start && y.end === value.end);\n        var _filters_yearRanges2;\n        setFilters({\n            ...filters,\n            yearRanges: isActive ? (_filters_yearRanges1 = filters.yearRanges) === null || _filters_yearRanges1 === void 0 ? void 0 : _filters_yearRanges1.filter((yr)=>yr.start !== value.start) : [\n                ...(_filters_yearRanges2 = filters === null || filters === void 0 ? void 0 : filters.yearRanges) !== null && _filters_yearRanges2 !== void 0 ? _filters_yearRanges2 : [],\n                value\n            ]\n        });\n    };\n    const yearRanges = (0,_helpers_years__WEBPACK_IMPORTED_MODULE_6__.buildYearRanges)(_data_years_json__WEBPACK_IMPORTED_MODULE_5__);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_filters_YearRangeFilter__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                years: yearRanges,\n                value: filters.yearRanges,\n                onChange: handleChangeYear\n            }, void 0, false, {\n                fileName: \"/media/suso/ALMACEN/proyectos/coin-collection/src/app/page.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CoinList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                coins: filteredCoins\n            }, void 0, false, {\n                fileName: \"/media/suso/ALMACEN/proyectos/coin-collection/src/app/page.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/media/suso/ALMACEN/proyectos/coin-collection/src/app/page.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"pFR1DDAbIjRU/lS1uBjUayWvNO4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9wYWdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVpQztBQUVZO0FBQ3NCO0FBR3pCO0FBQ0E7QUFDUTtBQUVuQyxTQUFTTTs7SUFDdEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFjO1FBQ2xEUyxZQUFZLEVBQUU7UUFDZEMsU0FBUyxFQUFFO0lBQ2I7SUFFQSxNQUFNQyxnQkFBZ0JSLG9EQUFnQlMsQ0FBQyxDQUFDQztZQUNsQ047UUFBSixJQUFJQSxDQUFBQSxvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLENBQUFBLHNCQUFBQSxRQUFTRSx3QkFBVEYsaUNBQUFBLEtBQUFBLElBQUFBLG9CQUFxQk8sTUFBSCxJQUFZLEdBQUc7WUFDbkMsT0FBT1AsUUFBUUUsV0FBV00sS0FBSyxDQUFDQztnQkFDOUIsT0FBT0EsR0FBR0MsU0FBU0osS0FBS0ssUUFBUUYsR0FBR0csT0FBT04sS0FBS0s7WUFDakQ7UUFDRjtRQUVBLE9BQU87SUFDVDtJQUVBLE1BQU1FLG1CQUFtQixDQUFDQztZQUNQZCxxQkFPWEE7UUFQTixNQUFNZSxXQUFXZixDQUFBQSxzQkFBQUEsUUFBUUUsd0JBQVJGLGlDQUFBQSxLQUFBQSxJQUFBQSxvQkFBb0JRLEtBQ25DLENBQUNRLElBQU1BLEVBQUVOLFVBQVVJLE1BQU1KLFNBQVNNLEVBQUVKLFFBQVFFLE1BQU1GO1lBT3pDWjtRQUpYQyxXQUFXO1lBQ1QsR0FBR0QsT0FBTztZQUNWRSxZQUFZYSxXQUNSZixDQUFBQSx1QkFBQUEsUUFBUUUsd0JBQVJGLGtDQUFBQSxLQUFBQSxJQUFBQSxxQkFBb0JLLE9BQU8sQ0FBQ0ksS0FBT0EsR0FBR0MsVUFBVUksTUFBTUosU0FDdEQ7bUJBQUtWLENBQUFBLHVCQUFBQSxvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLFFBQVNFLHdCQUFURixrQ0FBQUEsdUJBQXVCLEVBQUU7Z0JBQUdjO2FBQU07UUFDN0M7SUFDRjtJQUVBLE1BQU1aLGFBQWFKLCtEQUFlQSxDQUFDRCw2Q0FBU0E7SUFFNUMscUJBQ0UsOERBQUNvQjtRQUFRQyxXQUFVOzswQkFDakIsOERBQUN2QiwyRUFBZUE7Z0JBQ2R3QixPQUFPakI7Z0JBQ1BZLE9BQU9kLFFBQVFFO2dCQUNma0IsVUFBVVA7Ozs7OzswQkFFWiw4REFBQ25CLDREQUFRQTtnQkFBQzJCLE9BQU9qQjs7Ozs7Ozs7Ozs7O0FBR3ZCO0dBekN3Qkw7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgQ29pbkxpc3QgZnJvbSBcIkAvY29tcG9uZW50cy9Db2luTGlzdFwiO1xuaW1wb3J0IFllYXJSYW5nZUZpbHRlciBmcm9tIFwiQC9jb21wb25lbnRzL2ZpbHRlcnMvWWVhclJhbmdlRmlsdGVyXCI7XG5pbXBvcnQgeyBGaWx0ZXJzVHlwZSwgWWVhclJhbmdlIH0gZnJvbSBcIkAvdHlwZXMvaW5kZXgudHlwZXNcIjtcblxuaW1wb3J0IGNvaW5zSnNvbiBmcm9tIFwiQC9kYXRhL2NvaW5zLmpzb25cIjtcbmltcG9ydCB5ZWFyc0pzb24gZnJvbSBcIkAvZGF0YS95ZWFycy5qc29uXCI7XG5pbXBvcnQgeyBidWlsZFllYXJSYW5nZXMgfSBmcm9tIFwiQC9oZWxwZXJzL3llYXJzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtmaWx0ZXJzLCBzZXRGaWx0ZXJzXSA9IHVzZVN0YXRlPEZpbHRlcnNUeXBlPih7XG4gICAgeWVhclJhbmdlczogW10sXG4gICAgY291bnRyeTogW10sXG4gIH0pO1xuXG4gIGNvbnN0IGZpbHRlcmVkQ29pbnMgPSBjb2luc0pzb24uZmlsdGVyKChjb2luKSA9PiB7XG4gICAgaWYgKGZpbHRlcnM/LnllYXJSYW5nZXM/Lmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBmaWx0ZXJzLnllYXJSYW5nZXMuc29tZSgoeXIpID0+IHtcbiAgICAgICAgcmV0dXJuIHlyLnN0YXJ0IDw9IGNvaW4ueWVhciAmJiB5ci5lbmQgPj0gY29pbi55ZWFyO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVllYXIgPSAodmFsdWU6IFllYXJSYW5nZSkgPT4ge1xuICAgIGNvbnN0IGlzQWN0aXZlID0gZmlsdGVycy55ZWFyUmFuZ2VzPy5zb21lKFxuICAgICAgKHkpID0+IHkuc3RhcnQgPT09IHZhbHVlLnN0YXJ0ICYmIHkuZW5kID09PSB2YWx1ZS5lbmRcbiAgICApO1xuXG4gICAgc2V0RmlsdGVycyh7XG4gICAgICAuLi5maWx0ZXJzLFxuICAgICAgeWVhclJhbmdlczogaXNBY3RpdmVcbiAgICAgICAgPyBmaWx0ZXJzLnllYXJSYW5nZXM/LmZpbHRlcigoeXIpID0+IHlyLnN0YXJ0ICE9PSB2YWx1ZS5zdGFydClcbiAgICAgICAgOiBbLi4uKGZpbHRlcnM/LnllYXJSYW5nZXMgPz8gW10pLCB2YWx1ZV0sXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgeWVhclJhbmdlcyA9IGJ1aWxkWWVhclJhbmdlcyh5ZWFyc0pzb24pO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICA8WWVhclJhbmdlRmlsdGVyXG4gICAgICAgIHllYXJzPXt5ZWFyUmFuZ2VzfVxuICAgICAgICB2YWx1ZT17ZmlsdGVycy55ZWFyUmFuZ2VzfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlWWVhcn1cbiAgICAgIC8+XG4gICAgICA8Q29pbkxpc3QgY29pbnM9e2ZpbHRlcmVkQ29pbnN9IC8+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ29pbkxpc3QiLCJZZWFyUmFuZ2VGaWx0ZXIiLCJjb2luc0pzb24iLCJ5ZWFyc0pzb24iLCJidWlsZFllYXJSYW5nZXMiLCJIb21lIiwiZmlsdGVycyIsInNldEZpbHRlcnMiLCJ5ZWFyUmFuZ2VzIiwiY291bnRyeSIsImZpbHRlcmVkQ29pbnMiLCJmaWx0ZXIiLCJjb2luIiwibGVuZ3RoIiwic29tZSIsInlyIiwic3RhcnQiLCJ5ZWFyIiwiZW5kIiwiaGFuZGxlQ2hhbmdlWWVhciIsInZhbHVlIiwiaXNBY3RpdmUiLCJ5Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInllYXJzIiwib25DaGFuZ2UiLCJjb2lucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/page.tsx\n"));

/***/ })

});