"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typed.js */ \"./node_modules/typed.js/lib/typed.js\");\n/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.scss */ \"./pages/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/CodyLuth/Documents/GitHub/codyluth/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Index() {\n  _s();\n\n  var el = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);\n  var typed = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);\n  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {\n    var options = {\n      strings: [\"Hey... \", \"Hey... I'm Cody.\", \"Hey... I'm Cody.</br>I'm a web developer for Leatherman Tool Group.\", \"Hey... I'm Cody.</br>I'm a web developer for Leatherman Tool Group.  I also freelance.\"],\n      typeSpeed: 50,\n      backSpeed: 50\n    };\n    typed.current = new (typed_js__WEBPACK_IMPORTED_MODULE_1___default())(el.current, options);\n    return function () {\n      typed.current.destroy();\n    };\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"row justify-content-center\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: 'col-8 ' + (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().typed),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n        ref: el\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"col-12 text-center mt-4\",\n      children: \"Projects\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Index, \"8AS0O6h/r8Z7rJkkJBCX/uZh9Aw=\");\n\n_c = Index;\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVlLFNBQVNHLEtBQVQsR0FBaUI7QUFBQTs7QUFDOUIsTUFBTUMsRUFBRSxHQUFHSixtREFBQSxDQUFhLElBQWIsQ0FBWDtBQUNELE1BQU1NLEtBQUssR0FBR04sbURBQUEsQ0FBYSxJQUFiLENBQWQ7QUFFQ0EsRUFBQUEsc0RBQUEsQ0FBZ0IsWUFBTTtBQUNwQixRQUFNUSxPQUFPLEdBQUc7QUFDZkMsTUFBQUEsT0FBTyxFQUFFLENBQ04sU0FETSxFQUVOLGtCQUZNLEVBR04scUVBSE0sRUFJTix3RkFKTSxDQURNO0FBT2RDLE1BQUFBLFNBQVMsRUFBRSxFQVBHO0FBUWRDLE1BQUFBLFNBQVMsRUFBRTtBQVJHLEtBQWhCO0FBV0FMLElBQUFBLEtBQUssQ0FBQ00sT0FBTixHQUFnQixJQUFJWCxpREFBSixDQUFVRyxFQUFFLENBQUNRLE9BQWIsRUFBc0JKLE9BQXRCLENBQWhCO0FBRUEsV0FBTyxZQUFNO0FBQ1hGLE1BQUFBLEtBQUssQ0FBQ00sT0FBTixDQUFjQyxPQUFkO0FBQ0QsS0FGRDtBQUdELEdBakJELEVBaUJHLEVBakJIO0FBbUJBLHNCQUNFO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUUsV0FBV1gsaUVBQTNCO0FBQUEsNkJBQ0U7QUFBTSxXQUFHLEVBQUVFO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFO0FBQUssZUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRDs7R0FoQ3VCRDs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVHlwZWQgZnJvbSAndHlwZWQuanMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IGVsID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXHRjb25zdCB0eXBlZCA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgXHRzdHJpbmdzOiBbXG4gICAgICAgIFwiSGV5Li4uIFwiLFxuICAgICAgICBcIkhleS4uLiBJJ20gQ29keS5cIixcbiAgICAgICAgXCJIZXkuLi4gSSdtIENvZHkuPC9icj5JJ20gYSB3ZWIgZGV2ZWxvcGVyIGZvciBMZWF0aGVybWFuIFRvb2wgR3JvdXAuXCIsXG4gICAgICAgIFwiSGV5Li4uIEknbSBDb2R5LjwvYnI+SSdtIGEgd2ViIGRldmVsb3BlciBmb3IgTGVhdGhlcm1hbiBUb29sIEdyb3VwLiAgSSBhbHNvIGZyZWVsYW5jZS5cIixcbiAgICAgIF0sXG4gICAgICB0eXBlU3BlZWQ6IDUwLFxuICAgICAgYmFja1NwZWVkOiA1MCxcbiAgICB9O1xuICAgIFxuICAgIHR5cGVkLmN1cnJlbnQgPSBuZXcgVHlwZWQoZWwuY3VycmVudCwgb3B0aW9ucyk7XG4gICAgXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHR5cGVkLmN1cnJlbnQuZGVzdHJveSgpO1xuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17J2NvbC04ICcgKyBzdHlsZXMudHlwZWR9PlxuICAgICAgICA8c3BhbiByZWY9e2VsfSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHRleHQtY2VudGVyIG10LTRcIj5Qcm9qZWN0czwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJUeXBlZCIsInN0eWxlcyIsIkluZGV4IiwiZWwiLCJ1c2VSZWYiLCJ0eXBlZCIsInVzZUVmZmVjdCIsIm9wdGlvbnMiLCJzdHJpbmdzIiwidHlwZVNwZWVkIiwiYmFja1NwZWVkIiwiY3VycmVudCIsImRlc3Ryb3kiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});