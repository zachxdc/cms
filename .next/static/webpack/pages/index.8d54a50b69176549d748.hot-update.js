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

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/col */ \"./node_modules/antd/lib/col/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/button */ \"./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/checkbox */ \"./node_modules/antd/lib/checkbox/index.js\");\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/input */ \"./node_modules/antd/lib/input/index.js\");\n/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/form */ \"./node_modules/antd/lib/form/index.js\");\n/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/radio */ \"./node_modules/antd/lib/radio/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var _axiosConnect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./axiosConnect */ \"./pages/axiosConnect.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/bobcqs/cms/pages/index.js\";\n\n\n\n\n\n\n\nfunction Home() {\n  function onChangeRadio(e) {\n    console.log(\"radio checked:\".concat(e.target.value));\n  }\n\n  function onChangeCheckbox(checkedValues) {\n    console.log('checked = ', checkedValues);\n  }\n\n  var onFinish = function onFinish(values) {\n    console.log('Success!', values);\n  };\n\n  var onFinishFailed = function onFinishFailed(errorInfo) {\n    console.log('Failed:', errorInfo);\n  }; //checkbox的选项\n\n\n  var plainOptions = ['Remember me'];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Course Management Assistant\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_5__.default, {\n      span: 10,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_6__.default, {\n        onFinish: onFinish,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_6__.default.Item, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_radio__WEBPACK_IMPORTED_MODULE_7__.default.Group, {\n            onChange: onChangeRadio,\n            defaultValue: \"a\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_radio__WEBPACK_IMPORTED_MODULE_7__.default.Button, {\n              value: \"Student\",\n              children: \"Student\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 40,\n              columnNumber: 17\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_radio__WEBPACK_IMPORTED_MODULE_7__.default.Button, {\n              value: \"Teacher\",\n              children: \"Teacher\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 17\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_radio__WEBPACK_IMPORTED_MODULE_7__.default.Button, {\n              value: \"Manager\",\n              children: \"Manager\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 17\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_6__.default.Item, {\n          name: \"email\",\n          rules: [{\n            required: true,\n            message: \"Please input the email\"\n          }, {\n            type: \"email\",\n            message: \"Invalid Email\"\n          }],\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_8__.default, {\n            placeholder: \"Username\",\n            prefix: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__.UserOutlined, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 53\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_6__.default.Item, {\n          name: \"password\",\n          rules: [{\n            required: true,\n            message: \"Please input the password\"\n          }, {\n            min: 4,\n            max: 16,\n            message: \"Please input valid password(4-16)\"\n          }],\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_8__.default, {\n            placeholder: \"Password\",\n            prefix: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__.LockOutlined, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 53\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_6__.default.Item, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_10__.default.Group, {\n            options: plainOptions,\n            defaultValue: ['Remember me'],\n            onChange: onChangeCheckbox\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_6__.default.Item, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_button__WEBPACK_IMPORTED_MODULE_11__.default, {\n            type: \"primary\",\n            htmlType: \"submit\",\n            block: true,\n            children: \"Primary\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwib25DaGFuZ2VSYWRpbyIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiLCJvbkNoYW5nZUNoZWNrYm94IiwiY2hlY2tlZFZhbHVlcyIsIm9uRmluaXNoIiwidmFsdWVzIiwib25GaW5pc2hGYWlsZWQiLCJlcnJvckluZm8iLCJwbGFpbk9wdGlvbnMiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJ0eXBlIiwibWluIiwibWF4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFDN0IsV0FBU0MsYUFBVCxDQUF1QkMsQ0FBdkIsRUFBMEI7QUFDeEJDLFdBQU8sQ0FBQ0MsR0FBUix5QkFBNkJGLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxLQUF0QztBQUNEOztBQUVELFdBQVNDLGdCQUFULENBQTBCQyxhQUExQixFQUF5QztBQUN2Q0wsV0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQkksYUFBMUI7QUFDRDs7QUFFRCxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxNQUFNLEVBQUk7QUFDekJQLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JNLE1BQXhCO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLFNBQUQsRUFBZTtBQUNwQ1QsV0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QlEsU0FBdkI7QUFDRCxHQUZELENBYjZCLENBaUI3Qjs7O0FBQ0EsTUFBTUMsWUFBWSxHQUFHLENBQUMsYUFBRCxDQUFyQjtBQUVBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUssVUFBSSxFQUFFLEVBQVg7QUFBQSw2QkFDSTtBQUNFLGdCQUFRLEVBQUVKLFFBRFo7QUFBQSxnQ0FFRTtBQUFBLGlDQUNFO0FBQWEsb0JBQVEsRUFBRVIsYUFBdkI7QUFBc0Msd0JBQVksRUFBQyxHQUFuRDtBQUFBLG9DQUNFO0FBQWMsbUJBQUssRUFBQyxTQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFO0FBQWMsbUJBQUssRUFBQyxTQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixlQUdFO0FBQWMsbUJBQUssRUFBQyxTQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBU0U7QUFDRSxjQUFJLEVBQUMsT0FEUDtBQUVFLGVBQUssRUFBRSxDQUNMO0FBQ0VhLG9CQUFRLEVBQUUsSUFEWjtBQUVFQyxtQkFBTyxFQUFFO0FBRlgsV0FESyxFQUtMO0FBQ0VDLGdCQUFJLEVBQUUsT0FEUjtBQUVFRCxtQkFBTyxFQUFFO0FBRlgsV0FMSyxDQUZUO0FBQUEsaUNBWUU7QUFBTyx1QkFBVyxFQUFDLFVBQW5CO0FBQThCLGtCQUFNLGVBQUUsOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFURixlQXVCRTtBQUNFLGNBQUksRUFBQyxVQURQO0FBRUUsZUFBSyxFQUFFLENBQ0w7QUFDRUQsb0JBQVEsRUFBRSxJQURaO0FBRUVDLG1CQUFPLEVBQUU7QUFGWCxXQURLLEVBS0w7QUFDRUUsZUFBRyxFQUFFLENBRFA7QUFFRUMsZUFBRyxFQUFFLEVBRlA7QUFHRUgsbUJBQU8sRUFBRTtBQUhYLFdBTEssQ0FGVDtBQUFBLGlDQWFFO0FBQU8sdUJBQVcsRUFBQyxVQUFuQjtBQUE4QixrQkFBTSxlQUFFLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdkJGLGVBc0NFO0FBQUEsaUNBQ0U7QUFBZ0IsbUJBQU8sRUFBRUYsWUFBekI7QUFBdUMsd0JBQVksRUFBRSxDQUFDLGFBQUQsQ0FBckQ7QUFBc0Usb0JBQVEsRUFBRU47QUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdENGLGVBeUNFO0FBQUEsaUNBQ0U7QUFBUSxnQkFBSSxFQUFDLFNBQWI7QUFBdUIsb0JBQVEsRUFBQyxRQUFoQztBQUF5QyxpQkFBSyxNQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBekNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBLGtCQURGO0FBb0REO0tBeEV1QlAsSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XG5pbXBvcnQgeyBCdXR0b24sIFRvb2x0aXAgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IFNlYXJjaE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuaW1wb3J0IHsgSW5wdXQsIFJhZGlvLCBDaGVja2JveCwgQ29sLCBSb3cgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IEZvcm0gfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IFVzZXJPdXRsaW5lZCwgTG9ja091dGxpbmVkfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQge0xvZ2lufSBmcm9tICcuL2F4aW9zQ29ubmVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGZ1bmN0aW9uIG9uQ2hhbmdlUmFkaW8oZSkge1xuICAgIGNvbnNvbGUubG9nKGByYWRpbyBjaGVja2VkOiR7ZS50YXJnZXQudmFsdWV9YCk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNoYW5nZUNoZWNrYm94KGNoZWNrZWRWYWx1ZXMpIHtcbiAgICBjb25zb2xlLmxvZygnY2hlY2tlZCA9ICcsIGNoZWNrZWRWYWx1ZXMpO1xuICB9XG5cbiAgY29uc3Qgb25GaW5pc2ggPSB2YWx1ZXMgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzIScsIHZhbHVlcyk7ICAgIFxuICB9O1xuXG4gIGNvbnN0IG9uRmluaXNoRmFpbGVkID0gKGVycm9ySW5mbykgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdGYWlsZWQ6JywgZXJyb3JJbmZvKTtcbiAgfTtcblxuICAvL2NoZWNrYm9455qE6YCJ6aG5XG4gIGNvbnN0IHBsYWluT3B0aW9ucyA9IFsnUmVtZW1iZXIgbWUnXTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+Q291cnNlIE1hbmFnZW1lbnQgQXNzaXN0YW50PC9oMT5cbiAgICAgIDxDb2wgc3Bhbj17MTB9PlxuICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICBvbkZpbmlzaD17b25GaW5pc2h9PlxuICAgICAgICAgICAgPEZvcm0uSXRlbT5cbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwIG9uQ2hhbmdlPXtvbkNoYW5nZVJhZGlvfSBkZWZhdWx0VmFsdWU9XCJhXCI+XG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT1cIlN0dWRlbnRcIj5TdHVkZW50PC9SYWRpby5CdXR0b24+XG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT1cIlRlYWNoZXJcIj5UZWFjaGVyPC9SYWRpby5CdXR0b24+XG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT1cIk1hbmFnZXJcIj5NYW5hZ2VyPC9SYWRpby5CdXR0b24+XG4gICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+IFxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBpbnB1dCB0aGUgZW1haWxcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiSW52YWxpZCBFbWFpbFwiLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXX0+XG4gICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIgcHJlZml4PXs8VXNlck91dGxpbmVkIC8+fSAvPlxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBpbnB1dCB0aGUgcGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG1pbjogNCxcbiAgICAgICAgICAgICAgICAgIG1heDogMTYsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBpbnB1dCB2YWxpZCBwYXNzd29yZCg0LTE2KVwiLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXX0+XG4gICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgcHJlZml4PXs8TG9ja091dGxpbmVkIC8+fSAvPlxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICA8Rm9ybS5JdGVtPlxuICAgICAgICAgICAgICA8Q2hlY2tib3guR3JvdXAgb3B0aW9ucz17cGxhaW5PcHRpb25zfSBkZWZhdWx0VmFsdWU9e1snUmVtZW1iZXIgbWUnXX0gb25DaGFuZ2U9e29uQ2hhbmdlQ2hlY2tib3h9IC8+XG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgIDxGb3JtLkl0ZW0+XG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiIGJsb2NrPlByaW1hcnk8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICA8L0NvbD5cbiAgICA8Lz4gICAgXG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});