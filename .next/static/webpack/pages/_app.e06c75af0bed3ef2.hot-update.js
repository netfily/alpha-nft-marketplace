"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/components/nav.js":
/*!*********************************!*\
  !*** ./pages/components/nav.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Nav; }\n/* harmony export */ });\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/auth */ \"./pages/utils/auth.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-feather */ \"./node_modules/react-feather/dist/index.js\");\n/* harmony import */ var react_external_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-external-link */ \"./node_modules/react-external-link/dist/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Nav() {\n    var showAccount = function showAccount() {\n        return _showAccount.apply(this, arguments);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), account1 = ref[0], setAccount = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        showAccount();\n    }, []);\n    function _showAccount() {\n        _showAccount = _asyncToGenerator(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var account;\n            return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_utils_auth__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n                    case 2:\n                        account = _ctx.sent.account;\n                        setAccount(account.substring(36, 42));\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _showAccount.apply(this, arguments);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n        className: \"flex space-x-4 py-4 bg-black-800 border-b text-white\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\Brandon\\\\Desktop\\\\nft\\\\pages\\\\components\\\\nav.js\",\n            lineNumber: 21,\n            columnNumber: 9\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                className: \"flex flex-grow items-center mt-2\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Brandon\\\\Desktop\\\\nft\\\\pages\\\\components\\\\nav.js\",\n                    lineNumber: 22,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"img\", {\n                        src: \"https://gateway.pinata.cloud/ipfs/QmQN9RBSpStKYWVWKNgcJteDQRt4zMCqn8D28geVDATqQ6\",\n                        alt: \"image\",\n                        height: \"45\",\n                        width: \"45\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Brandon\\\\Desktop\\\\nft\\\\pages\\\\components\\\\nav.js\",\n                            lineNumber: 23,\n                            columnNumber: 13\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Brandon\\\\Desktop\\\\nft\\\\pages\\\\components\\\\nav.js\",\n                            lineNumber: 24,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"a\", {\n                            className: \"ml-12 block mt-1\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Brandon\\\\Desktop\\\\nft\\\\pages\\\\components\\\\nav.js\",\n                                lineNumber: 24,\n                                columnNumber: 32\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h2\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Brandon\\\\Desktop\\\\nft\\\\pages\\\\components\\\\nav.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 64\n                                },\n                                __self: this,\n                                children: \"Marketplace\"\n                            })\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Brandon\\\\Desktop\\\\nft\\\\pages\\\\components\\\\nav.js\",\n                            lineNumber: 25,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"a\", {\n                            className: \"ml-12 block mt-1\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Brandon\\\\Desktop\\\\nft\\\\pages\\\\components\\\\nav.js\",\n                                lineNumber: 25,\n                                columnNumber: 32\n                            },\n                            __self: this,\n                            children: \"Gallery\"\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_7__.Camera, {\n                        size: 15,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Brandon\\\\Desktop\\\\nft\\\\pages\\\\components\\\\nav.js\",\n                            lineNumber: 25,\n                            columnNumber: 82\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_external_link__WEBPACK_IMPORTED_MODULE_6__.ExternalLink, {\n                        className: \"ml-12 block mt-1\",\n                        style: {\n                            color: 'white'\n                        },\n                        href: \"https://t.me/alphadao1337\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Brandon\\\\Desktop\\\\nft\\\\pages\\\\components\\\\nav.js\",\n                            lineNumber: 26,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: 'Telegram'\n                    }),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_7__.Send, {\n                        size: 15,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Brandon\\\\Desktop\\\\nft\\\\pages\\\\components\\\\nav.js\",\n                            lineNumber: 28,\n                            columnNumber: 33\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_external_link__WEBPACK_IMPORTED_MODULE_6__.ExternalLink, {\n                        className: \"ml-12 block mt-1\",\n                        style: {\n                            color: 'white'\n                        },\n                        href: \"https://swap.alphadao.money\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Brandon\\\\Desktop\\\\nft\\\\pages\\\\components\\\\nav.js\",\n                            lineNumber: 29,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: 'Swap'\n                    }),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_7__.Repeat, {\n                        size: 15,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Brandon\\\\Desktop\\\\nft\\\\pages\\\\components\\\\nav.js\",\n                            lineNumber: 31,\n                            columnNumber: 33\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                className: \"mt-2 flex\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Brandon\\\\Desktop\\\\nft\\\\pages\\\\components\\\\nav.js\",\n                    lineNumber: 33,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/profile\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Brandon\\\\Desktop\\\\nft\\\\pages\\\\components\\\\nav.js\",\n                            lineNumber: 35,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"a\", {\n                            className: \"mr-3 py-2 px-8 border rounded-full\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Brandon\\\\Desktop\\\\nft\\\\pages\\\\components\\\\nav.js\",\n                                lineNumber: 35,\n                                columnNumber: 39\n                            },\n                            __self: this,\n                            children: \"Profile\"\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/createnft\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Brandon\\\\Desktop\\\\nft\\\\pages\\\\components\\\\nav.js\",\n                            lineNumber: 36,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"a\", {\n                            className: \"mr-4 py-2 px-6 bg-green-600 rounded-full\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Brandon\\\\Desktop\\\\nft\\\\pages\\\\components\\\\nav.js\",\n                                lineNumber: 36,\n                                columnNumber: 42\n                            },\n                            __self: this,\n                            children: \"CreateNFT\"\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"p\", {\n                        className: \"text-green-600 mt-2\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Brandon\\\\Desktop\\\\nft\\\\pages\\\\components\\\\nav.js\",\n                            lineNumber: 37,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: [\n                            \"Account: [0x...\",\n                            account1,\n                            \"]\"\n                        ]\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(Nav, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = Nav;\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y29tcG9uZW50cy9uYXYuanM/YmE4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNvbm5lY3QgZnJvbSAnLi4vdXRpbHMvYXV0aCdcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgeyBUZXJtaW5hbCwgU2VuZCwgUmVwZWF0LCBDYW1lcmEgfSBmcm9tIFwicmVhY3QtZmVhdGhlclwiO1xyXG5pbXBvcnQgeyBFeHRlcm5hbExpbmsgfSBmcm9tICdyZWFjdC1leHRlcm5hbC1saW5rJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdigpe1xyXG4gICAgY29uc3QgW2FjY291bnQsIHNldEFjY291bnRdID0gdXNlU3RhdGUoKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e3Nob3dBY2NvdW50KCl9LFtdKVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHNob3dBY2NvdW50KCl7XHJcbiAgICAgICAgY29uc3Qge2FjY291bnR9ID0gYXdhaXQgY29ubmVjdCgpXHJcbiAgICAgICAgc2V0QWNjb3VudChhY2NvdW50LnN1YnN0cmluZygzNiw0MikpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHNwYWNlLXgtNCBweS00IGJnLWJsYWNrLTgwMCBib3JkZXItYiAgdGV4dC13aGl0ZSc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWdyb3cgaXRlbXMtY2VudGVyIG10LTJcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9J2h0dHBzOi8vZ2F0ZXdheS5waW5hdGEuY2xvdWQvaXBmcy9RbVFOOVJCU3BTdEtZV1ZXS05nY0p0ZURRUnQ0ek1DcW44RDI4Z2VWREFUcVE2JyBhbHQ9J2ltYWdlJyBoZWlnaHQ9JzQ1JyB3aWR0aD0nNDUnIC8+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhIGNsYXNzTmFtZT1cIm1sLTEyIGJsb2NrIG10LTFcIj48aDI+TWFya2V0cGxhY2U8L2gyPjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhIGNsYXNzTmFtZT1cIm1sLTEyIGJsb2NrIG10LTFcIj5HYWxsZXJ5PC9hPjwvTGluaz48Q2FtZXJhIHNpemU9ezE1fSAvPlxyXG4gICAgICAgICAgICAgICAgPEV4dGVybmFsTGluayBjbGFzc05hbWU9XCJtbC0xMiBibG9jayBtdC0xXCIgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319IGhyZWY9e2BodHRwczovL3QubWUvYWxwaGFkYW8xMzM3YH0+XHJcbiAgICAgICAgICAgICAgICB7KCdUZWxlZ3JhbScpfVxyXG4gICAgICAgICAgICAgICAgPC9FeHRlcm5hbExpbms+IDxTZW5kIHNpemU9ezE1fSAvPlxyXG4gICAgICAgICAgICAgICAgPEV4dGVybmFsTGluayBjbGFzc05hbWU9XCJtbC0xMiBibG9jayBtdC0xXCIgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319IGhyZWY9e2BodHRwczovL3N3YXAuYWxwaGFkYW8ubW9uZXlgfT5cclxuICAgICAgICAgICAgICAgIHsoJ1N3YXAnKX1cclxuICAgICAgICAgICAgICAgIDwvRXh0ZXJuYWxMaW5rPiA8UmVwZWF0IHNpemU9ezE1fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIGZsZXhcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+PGEgY2xhc3NOYW1lPVwibXItMyBweS0yIHB4LTggYm9yZGVyIHJvdW5kZWQtZnVsbFwiPlByb2ZpbGU8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgIGhyZWY9XCIvY3JlYXRlbmZ0XCI+PGEgY2xhc3NOYW1lPVwibXItNCBweS0yIHB4LTYgYmctZ3JlZW4tNjAwIHJvdW5kZWQtZnVsbFwiPkNyZWF0ZU5GVDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTYwMCBtdC0yXCI+QWNjb3VudDogWzB4Li4ue2FjY291bnR9XTwvcD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiTGluayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY29ubmVjdCIsIlJlYWN0IiwiUmVhY3RET00iLCJUZXJtaW5hbCIsIlNlbmQiLCJSZXBlYXQiLCJDYW1lcmEiLCJFeHRlcm5hbExpbmsiLCJOYXYiLCJzaG93QWNjb3VudCIsImFjY291bnQiLCJzZXRBY2NvdW50Iiwic3Vic3RyaW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwiaGVpZ2h0Iiwid2lkdGgiLCJocmVmIiwiYSIsImgyIiwic2l6ZSIsInN0eWxlIiwiY29sb3IiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/nav.js\n");

/***/ })

});