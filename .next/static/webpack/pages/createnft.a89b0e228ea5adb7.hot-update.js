"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/createnft",{

/***/ "./pages/createnft.js":
/*!****************************!*\
  !*** ./pages/createnft.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CreateNFT; }\n/* harmony export */ });\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ipfs_http_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ipfs-http-client */ \"./node_modules/ipfs-http-client/esm/src/index.js\");\n/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/options */ \"./pages/utils/options.js\");\n/* harmony import */ var _artifacts_contracts_NFTMarketplace_sol_NFTMarketplace_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json */ \"./artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json\");\n/* harmony import */ var _artifacts_contracts_NFT_sol_NFT_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../artifacts/contracts/NFT.sol/NFT.json */ \"./artifacts/contracts/NFT.sol/NFT.json\");\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/auth */ \"./pages/utils/auth.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction CreateNFT() {\n    var mintNFT = function mintNFT() {\n        return _mintNFT.apply(this, arguments);\n    };\n    var uploadImageToIPFS = function uploadImageToIPFS() {\n        return _uploadImageToIPFS.apply(this, arguments);\n    };\n    var uploadMetadataToIPFS = function uploadMetadataToIPFS() {\n        return _uploadMetadataToIPFS.apply(this, arguments);\n    };\n    _s();\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), NFTImage = ref3[0], setNFTImage = ref3[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), NFTImagePreviz = ref1[0], setNFTImagepreviz = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), NFTMetadata = ref2[0], setNFTMetadata = ref2[1];\n    var client = (0,ipfs_http_client__WEBPACK_IMPORTED_MODULE_3__.create)(new URL('https://ipfs.infura.io:5001'));\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n    function _mintNFT() {\n        _mintNFT = _asyncToGenerator(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var metadata, account, web3, nftContract, marketplaceContract;\n            return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!NFTImage) {\n                            _ctx.next = 11;\n                            break;\n                        }\n                        _ctx.next = 3;\n                        return uploadMetadataToIPFS();\n                    case 3:\n                        metadata = _ctx.sent;\n                        _ctx.next = 6;\n                        return (0,_utils_auth__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n                    case 6:\n                        var ref;\n                        ref = _ctx.sent, account = ref.account, web3 = ref.web3, ref;\n                        console.log(account);\n                        nftContract = new web3.eth.Contract(_artifacts_contracts_NFT_sol_NFT_json__WEBPACK_IMPORTED_MODULE_6__.abi, _utils_options__WEBPACK_IMPORTED_MODULE_4__.nftAddress);\n                        marketplaceContract = new web3.eth.Contract(_artifacts_contracts_NFTMarketplace_sol_NFTMarketplace_json__WEBPACK_IMPORTED_MODULE_5__.abi, _utils_options__WEBPACK_IMPORTED_MODULE_4__.nftMarketplaceAddress);\n                        nftContract.methods.createToken(metadata).send({\n                            from: account\n                        }).on('receipt', function(confirmations) {\n                            var tokenId = confirmations.events.Approval.returnValues[2];\n                            console.log(tokenId);\n                            marketplaceContract.methods.createMarketItem(tokenId, _utils_options__WEBPACK_IMPORTED_MODULE_4__.nftAddress).send({\n                                from: account\n                            }).on('receipt', function(confirmations) {\n                                alert(\"Success, your NFT was minted with Token ID:\", tokenId);\n                                router.push('/profile');\n                            });\n                        });\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _mintNFT.apply(this, arguments);\n    }\n    function _uploadImageToIPFS() {\n        _uploadImageToIPFS = _asyncToGenerator(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var file, url;\n            return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return client.add(NFTImage);\n                    case 3:\n                        file = _ctx.sent;\n                        url = \"https://ipfs.infura.io/ipfs/\".concat(file.path);\n                        return _ctx.abrupt(\"return\", url);\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        alert(\"Error upload file \".concat(_ctx.t0));\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    8\n                ]\n            ]);\n        }));\n        return _uploadImageToIPFS.apply(this, arguments);\n    }\n    function _uploadMetadataToIPFS() {\n        _uploadMetadataToIPFS = _asyncToGenerator(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var title, description, imageURL, data, file, url;\n            return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        var ref;\n                        ref = NFTMetadata, title = ref.title, description = ref.description, ref;\n                        if (!(!title || !description)) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        console.log('check your inputs');\n                        return _ctx.abrupt(\"return\");\n                    case 4:\n                        _ctx.next = 6;\n                        return uploadImageToIPFS();\n                    case 6:\n                        imageURL = _ctx.sent;\n                        data = JSON.stringify({\n                            title: title,\n                            description: description,\n                            image: imageURL\n                        });\n                        _ctx.prev = 8;\n                        _ctx.next = 11;\n                        return client.add(data);\n                    case 11:\n                        file = _ctx.sent;\n                        url = \"https://ipfs.infura.io/ipfs/\".concat(file.path);\n                        return _ctx.abrupt(\"return\", url);\n                    case 16:\n                        _ctx.prev = 16;\n                        _ctx.t0 = _ctx[\"catch\"](8);\n                        alert(\"Error upload file \".concat(_ctx.t0));\n                    case 19:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    8,\n                    16\n                ]\n            ]);\n        }));\n        return _uploadMetadataToIPFS.apply(this, arguments);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        className: \"flex justify-center mt-11\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\Brandon\\\\Desktop\\\\nft\\\\pages\\\\createnft.js\",\n            lineNumber: 75,\n            columnNumber: 9\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n            className: \"flex-column w-1/2 bg-black-600 px-8 py-8 rounded-t-lg text-white text-justify\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\Brandon\\\\Desktop\\\\nft\\\\pages\\\\createnft.js\",\n                lineNumber: 77,\n                columnNumber: 13\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n                    className: \"block text-3xl font-bold mb-8\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Brandon\\\\Desktop\\\\nft\\\\pages\\\\createnft.js\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    },\n                    __self: this,\n                    children: \"Mint a new NFT\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"img\", {\n                    className: \"w-72 mb-8\",\n                    src: NFTImage ? NFTImagePreviz : \"/placeholder.jpg\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Brandon\\\\Desktop\\\\nft\\\\pages\\\\createnft.js\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"label\", {\n                    className: \"block mb-10 \",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Brandon\\\\Desktop\\\\nft\\\\pages\\\\createnft.js\",\n                        lineNumber: 81,\n                        columnNumber: 17\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h2\", {\n                            className: \"text-2xl mb-3 font-bold\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Brandon\\\\Desktop\\\\nft\\\\pages\\\\createnft.js\",\n                                lineNumber: 82,\n                                columnNumber: 21\n                            },\n                            __self: this,\n                            children: \"Select a file\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                            type: \"file\",\n                            onChange: function(e) {\n                                setNFTImage(e.target.files[0]);\n                                setNFTImagepreviz(URL.createObjectURL(e.target.files[0]));\n                            },\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Brandon\\\\Desktop\\\\nft\\\\pages\\\\createnft.js\",\n                                lineNumber: 83,\n                                columnNumber: 25\n                            },\n                            __self: this\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"label\", {\n                    for: \"Title\",\n                    className: \"block mb-10\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Brandon\\\\Desktop\\\\nft\\\\pages\\\\createnft.js\",\n                        lineNumber: 90,\n                        columnNumber: 16\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h2\", {\n                            className: \"text-2xl font-bold mb-1 \",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Brandon\\\\Desktop\\\\nft\\\\pages\\\\createnft.js\",\n                                lineNumber: 91,\n                                columnNumber: 21\n                            },\n                            __self: this,\n                            children: \"Name (Required)\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                            className: \"mb-6 w-2/3\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Brandon\\\\Desktop\\\\nft\\\\pages\\\\createnft.js\",\n                                lineNumber: 92,\n                                columnNumber: 21\n                            },\n                            __self: this,\n                            children: \"Lorem ipsum.. \"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                            required: true,\n                            name: \"Title\",\n                            className: \"block border w-2/3 p-2 rounded-md text-black-600\",\n                            onChange: function(e) {\n                                setNFTMetadata(_objectSpread({\n                                }, NFTMetadata, {\n                                    title: e.target.value\n                                }));\n                            },\n                            type: \"text\",\n                            placeholder: \"Title\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Brandon\\\\Desktop\\\\nft\\\\pages\\\\createnft.js\",\n                                lineNumber: 93,\n                                columnNumber: 21\n                            },\n                            __self: this\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"label\", {\n                    for: \"Description\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Brandon\\\\Desktop\\\\nft\\\\pages\\\\createnft.js\",\n                        lineNumber: 98,\n                        columnNumber: 17\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h2\", {\n                            className: \"text-2xl mb-1 font-bold\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Brandon\\\\Desktop\\\\nft\\\\pages\\\\createnft.js\",\n                                lineNumber: 99,\n                                columnNumber: 21\n                            },\n                            __self: this,\n                            children: \"Description (Required)\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                            className: \"mb-6 w-2/3\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Brandon\\\\Desktop\\\\nft\\\\pages\\\\createnft.js\",\n                                lineNumber: 100,\n                                columnNumber: 21\n                            },\n                            __self: this,\n                            children: \"The description will be included on the item's detail card underneath its image.\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"textarea\", {\n                            className: \"block border-2 p-2 rounded-md w-full text-black-600\",\n                            name: \"Description\",\n                            cols: \"86\",\n                            rows: \"6\",\n                            onChange: function(e) {\n                                setNFTMetadata(_objectSpread({\n                                }, NFTMetadata, {\n                                    description: e.target.value\n                                }));\n                            },\n                            type: \"text\",\n                            placeholder: \"Description\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Brandon\\\\Desktop\\\\nft\\\\pages\\\\createnft.js\",\n                                lineNumber: 101,\n                                columnNumber: 21\n                            },\n                            __self: this\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                    className: \"block py-3 px-12 text-white rounded-md mt-8 w-full bg-green-600\",\n                    onClick: mintNFT,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Brandon\\\\Desktop\\\\nft\\\\pages\\\\createnft.js\",\n                        lineNumber: 106,\n                        columnNumber: 17\n                    },\n                    __self: this,\n                    children: \"Mint NFT\"\n                })\n            ]\n        })\n    }));\n};\n_s(CreateNFT, \"x6BEfyi27XQZs/P0xO2VR2AXHLM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter\n    ];\n});\n_c = CreateNFT;\nvar _c;\n$RefreshReg$(_c, \"CreateNFT\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQWE7Ozs7Ozs7OzZGQUNuQlIsQ0FBRTs0QkFBQ0wsU0FBUyxFQUFDLENBQXlCOzs7Ozs7O3NDQUFDLENBQXNCOzs2RkFDN0RjLENBQUM7NEJBQUNkLFNBQVMsRUFBQyxDQUFZOzs7Ozs7O3NDQUFDLENBQWdGOzs2RkFDekdtQixDQUFROzRCQUFFbkIsU0FBUyxFQUFDLENBQXFEOzRCQUFDZ0IsSUFBSSxFQUFDLENBQWE7NEJBQUNJLElBQUksRUFBQyxDQUFJOzRCQUFDQyxJQUFJLEVBQUMsQ0FBRzs0QkFBQ2IsUUFBUSxFQUFFLFFBQy9JLENBRGdKQyxDQUFDLEVBQUcsQ0FBQztnQ0FDN0hoRCxjQUFjO21DQUFLRCxXQUFXO29DQUFFaUMsV0FBVyxFQUFFZ0IsQ0FBQyxDQUFDQyxNQUFNLENBQUNPLEtBQUs7OzRCQUMvRCxDQUFDOzRCQUFFVixJQUFJLEVBQUMsQ0FBTTs0QkFBQ1csV0FBVyxFQUFDLENBQWE7Ozs7Ozs7Ozs7cUZBRzNDSSxDQUFNO29CQUFDdEIsU0FBUyxFQUFDLENBQWlFO29CQUFDdUIsT0FBTyxFQUFFdEUsT0FBTzs7Ozs7Ozs4QkFBRSxDQUFROzs7OztBQUs5SCxDQUFDO0dBcEd1QkQsU0FBUzs7UUFLZEQsa0RBQVM7OztLQUxKQyxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NyZWF0ZW5mdC5qcz81Yzk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSAnaXBmcy1odHRwLWNsaWVudCdcclxuXHJcbmltcG9ydCB7IG5mdEFkZHJlc3MsIG5mdE1hcmtldHBsYWNlQWRkcmVzcyB9IGZyb20gXCIuL3V0aWxzL29wdGlvbnNcIlxyXG5pbXBvcnQgTkZUTWFya2V0cGxhY2UgZnJvbSAnLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9ORlRNYXJrZXRwbGFjZS5zb2wvTkZUTWFya2V0cGxhY2UuanNvbidcclxuaW1wb3J0IE5GVCBmcm9tIFwiLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9ORlQuc29sL05GVC5qc29uXCJcclxuaW1wb3J0IGNvbm5lY3QgZnJvbSBcIi4vdXRpbHMvYXV0aFwiXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZU5GVCgpe1xyXG4gICAgY29uc3QgW05GVEltYWdlLCBzZXRORlRJbWFnZV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW05GVEltYWdlUHJldml6LCBzZXRORlRJbWFnZXByZXZpel0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW05GVE1ldGFkYXRhLCBzZXRORlRNZXRhZGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBjbGllbnQgPSBjcmVhdGUobmV3IFVSTCgnaHR0cHM6Ly9pcGZzLmluZnVyYS5pbzo1MDAxJykpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgICAgXHJcbiAgICBhc3luYyBmdW5jdGlvbiBtaW50TkZUKCl7XHJcbiAgICBcclxuICAgICAgICBpZihORlRJbWFnZSl7XHJcbiAgICAgICAgICAgIGNvbnN0IG1ldGFkYXRhID0gYXdhaXQgdXBsb2FkTWV0YWRhdGFUb0lQRlMoKVxyXG4gICAgICAgICAgICBjb25zdCB7YWNjb3VudCwgd2ViM30gPSBhd2FpdCBjb25uZWN0KClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYWNjb3VudClcclxuICAgICAgICAgICAgY29uc3QgbmZ0Q29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoTkZULmFiaSwgbmZ0QWRkcmVzcyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmtldHBsYWNlQ29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoTkZUTWFya2V0cGxhY2UuYWJpLCBuZnRNYXJrZXRwbGFjZUFkZHJlc3MpO1xyXG4gICAgICAgICAgICBuZnRDb250cmFjdC5tZXRob2RzLmNyZWF0ZVRva2VuKG1ldGFkYXRhKS5zZW5kKHtmcm9tOmFjY291bnR9KS5vbigncmVjZWlwdCcsIGNvbmZpcm1hdGlvbnMgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW5JZCA9IGNvbmZpcm1hdGlvbnMuZXZlbnRzLkFwcHJvdmFsLnJldHVyblZhbHVlc1syXTsgIFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codG9rZW5JZClcclxuICAgICAgICAgICAgICAgIG1hcmtldHBsYWNlQ29udHJhY3QubWV0aG9kcy5jcmVhdGVNYXJrZXRJdGVtKHRva2VuSWQsIG5mdEFkZHJlc3MpLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb206YWNjb3VudFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFkZCBnYXMgcHJpY2VzXHJcbiAgICAgICAgICAgICAgICB9KS5vbigncmVjZWlwdCcsIGNvbmZpcm1hdGlvbnMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiU3VjY2VzcywgeW91ciBORlQgd2FzIG1pbnRlZCB3aXRoIFRva2VuIElEOlwiLCB0b2tlbklkKVxyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvcHJvZmlsZScpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHVwbG9hZEltYWdlVG9JUEZTKCl7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlID0gYXdhaXQgY2xpZW50LmFkZChORlRJbWFnZSlcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vaXBmcy5pbmZ1cmEuaW8vaXBmcy8ke2ZpbGUucGF0aH1gO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHVybDtcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBhbGVydChgRXJyb3IgdXBsb2FkIGZpbGUgJHtlcnJvcn1gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiB1cGxvYWRNZXRhZGF0YVRvSVBGUygpe1xyXG4gICAgICAgIGNvbnN0IHt0aXRsZSwgZGVzY3JpcHRpb259ID0gTkZUTWV0YWRhdGE7XHJcblxyXG4gICAgICAgIGlmKCF0aXRsZSB8fCAhZGVzY3JpcHRpb24gKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoZWNrIHlvdXIgaW5wdXRzJylcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGltYWdlVVJMID0gYXdhaXQgdXBsb2FkSW1hZ2VUb0lQRlMoKVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7dGl0bGUsIGRlc2NyaXB0aW9uLCBpbWFnZTogaW1hZ2VVUkx9KTtcclxuXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlID0gYXdhaXQgY2xpZW50LmFkZChkYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vaXBmcy5pbmZ1cmEuaW8vaXBmcy8ke2ZpbGUucGF0aH1gO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHVybDtcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBhbGVydChgRXJyb3IgdXBsb2FkIGZpbGUgJHtlcnJvcn1gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0xMVwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNvbHVtbiB3LTEvMiAgYmctYmxhY2stNjAwIHB4LTggcHktOCByb3VuZGVkLXQtbGcgdGV4dC13aGl0ZSB0ZXh0LWp1c3RpZnlcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJibG9jayB0ZXh0LTN4bCBmb250LWJvbGQgbWItOFwiPk1pbnQgYSBuZXcgTkZUPC9oMT5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy03MiBtYi04XCIgc3JjPXtORlRJbWFnZSA/IE5GVEltYWdlUHJldml6IDogXCIvcGxhY2Vob2xkZXIuanBnXCJ9PjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgbWItMTAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIG1iLTMgZm9udC1ib2xkXCIgPlNlbGVjdCBhIGZpbGU8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgIHR5cGU9J2ZpbGUnICBvbkNoYW5nZT17ZT0+IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TkZUSW1hZ2UoZS50YXJnZXQuZmlsZXNbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TkZUSW1hZ2VwcmV2aXooVVJMLmNyZWF0ZU9iamVjdFVSTChlLnRhcmdldC5maWxlc1swXSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIlRpdGxlXCIgY2xhc3NOYW1lPVwiYmxvY2sgbWItMTBcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi0xIFwiID5OYW1lIChSZXF1aXJlZCk8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTYgdy0yLzNcIj5Mb3JlbSBpcHN1bS4uIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgbmFtZT1cIlRpdGxlXCIgY2xhc3NOYW1lPVwiYmxvY2sgYm9yZGVyIHctMi8zIHAtMiByb3VuZGVkLW1kIHRleHQtYmxhY2stNjAwXCIgb25DaGFuZ2U9eyhlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRORlRNZXRhZGF0YSh7Li4uTkZUTWV0YWRhdGEsIHRpdGxlOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH19IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPVwiVGl0bGVcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiRGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWItMSBmb250LWJvbGRcIj5EZXNjcmlwdGlvbiAoUmVxdWlyZWQpPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi02IHctMi8zXCI+VGhlIGRlc2NyaXB0aW9uIHdpbGwgYmUgaW5jbHVkZWQgb24gdGhlIGl0ZW0ncyBkZXRhaWwgY2FyZCB1bmRlcm5lYXRoIGl0cyBpbWFnZS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhICBjbGFzc05hbWU9XCJibG9jayBib3JkZXItMiBwLTIgcm91bmRlZC1tZCB3LWZ1bGwgdGV4dC1ibGFjay02MDBcIiBuYW1lPVwiRGVzY3JpcHRpb25cIiBjb2xzPSc4Nicgcm93cz1cIjZcIiBvbkNoYW5nZT17KGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE5GVE1ldGFkYXRhKHsuLi5ORlRNZXRhZGF0YSwgZGVzY3JpcHRpb246IGUudGFyZ2V0LnZhbHVlfSlcclxuICAgICAgICAgICAgICAgICAgICB9fSB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmxvY2sgcHktMyBweC0xMiB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgbXQtOCB3LWZ1bGwgYmctZ3JlZW4tNjAwXCIgb25DbGljaz17bWludE5GVH0+TWludCBORlQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImNyZWF0ZSIsIm5mdEFkZHJlc3MiLCJuZnRNYXJrZXRwbGFjZUFkZHJlc3MiLCJORlRNYXJrZXRwbGFjZSIsIk5GVCIsImNvbm5lY3QiLCJ1c2VSb3V0ZXIiLCJDcmVhdGVORlQiLCJtaW50TkZUIiwidXBsb2FkSW1hZ2VUb0lQRlMiLCJ1cGxvYWRNZXRhZGF0YVRvSVBGUyIsIk5GVEltYWdlIiwic2V0TkZUSW1hZ2UiLCJORlRJbWFnZVByZXZpeiIsInNldE5GVEltYWdlcHJldml6IiwiTkZUTWV0YWRhdGEiLCJzZXRORlRNZXRhZGF0YSIsImNsaWVudCIsIlVSTCIsInJvdXRlciIsIm1ldGFkYXRhIiwiYWNjb3VudCIsIndlYjMiLCJuZnRDb250cmFjdCIsIm1hcmtldHBsYWNlQ29udHJhY3QiLCJjb25zb2xlIiwibG9nIiwiZXRoIiwiQ29udHJhY3QiLCJhYmkiLCJtZXRob2RzIiwiY3JlYXRlVG9rZW4iLCJzZW5kIiwiZnJvbSIsIm9uIiwiY29uZmlybWF0aW9ucyIsInRva2VuSWQiLCJldmVudHMiLCJBcHByb3ZhbCIsInJldHVyblZhbHVlcyIsImNyZWF0ZU1hcmtldEl0ZW0iLCJhbGVydCIsInB1c2giLCJmaWxlIiwidXJsIiwiYWRkIiwicGF0aCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZVVSTCIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiaW1hZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImltZyIsInNyYyIsImxhYmVsIiwiaDIiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsImNyZWF0ZU9iamVjdFVSTCIsImZvciIsInAiLCJyZXF1aXJlZCIsIm5hbWUiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwidGV4dGFyZWEiLCJjb2xzIiwicm93cyIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/createnft.js\n");

/***/ })

});