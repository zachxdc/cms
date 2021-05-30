/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/api/api-service.js":
/*!**********************************!*\
  !*** ./pages/api/api-service.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"login\": function() { return /* binding */ login; }\n/* harmony export */ });\n/* harmony import */ var _Users_bobcqs_cms_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-js */ \"./node_modules/crypto-js/index.js\");\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ \"./pages/api/storage.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/process/browser.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_bobcqs_cms_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar baseURL = process.env.NEXT_PUBLIC_API || \"http://localhost:3000/api\";\nvar axiosInstance = axios__WEBPACK_IMPORTED_MODULE_1___default().create({\n  baseURL: baseURL\n}); //axiosInstance.interceptors.request(请求拦截器)：请求发送前进行一些操作\n\naxiosInstance.interceptors.request.use(function (config) {\n  if (!config.url.includes('login')) {\n    var _storage;\n\n    return _objectSpread(_objectSpread({}, config), {}, {\n      headers: _objectSpread(_objectSpread({}, config.headers), {}, {\n        //加入token\n        Authorization: 'Bearer ' + ((_storage = storage) === null || _storage === void 0 ? void 0 : _storage.token)\n      })\n    });\n  }\n\n  return config;\n});\n\nfunction post(path, requestBody) {\n  return axiosInstance.post(path, requestBody).then(function (response) {\n    return new Promise(function (resolve) {\n      resolve(response.data);\n    });\n  })[\"catch\"](function (error) {\n    return new Promise(function (_resolve, reject) {\n      reject(error.response.data);\n    });\n  });\n}\n\nfunction login(viewValues) {\n  return post(\"/login\", {\n    email: viewValues.email,\n    password: crypto_js__WEBPACK_IMPORTED_MODULE_2__.AES.encrypt(viewValues.password, process.env.NEXT_PUBLIC_AES_KEY).toString(),\n    role: viewValues.role\n  });\n}\n;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBpL2FwaS1zZXJ2aWNlLmpzPzY0MDgiXSwibmFtZXMiOlsiYmFzZVVSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUEkiLCJheGlvc0luc3RhbmNlIiwiYXhpb3MiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwidXJsIiwiaW5jbHVkZXMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInN0b3JhZ2UiLCJ0b2tlbiIsInBvc3QiLCJwYXRoIiwicmVxdWVzdEJvZHkiLCJ0aGVuIiwicmVzcG9uc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsImRhdGEiLCJlcnJvciIsIl9yZXNvbHZlIiwicmVqZWN0IiwibG9naW4iLCJ2aWV3VmFsdWVzIiwiZW1haWwiLCJwYXNzd29yZCIsIkFFUyIsIk5FWFRfUFVCTElDX0FFU19LRVkiLCJ0b1N0cmluZyIsInJvbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGVBQVosSUFBK0IsMkJBQS9DO0FBRUEsSUFBTUMsYUFBYSxHQUFHQyxtREFBQSxDQUFhO0FBQ2pDTCxTQUFPLEVBQUVBO0FBRHdCLENBQWIsQ0FBdEIsQyxDQUlBOztBQUNBSSxhQUFhLENBQUNFLFlBQWQsQ0FBMkJDLE9BQTNCLENBQW1DQyxHQUFuQyxDQUF1QyxVQUFDQyxNQUFELEVBQVk7QUFDakQsTUFBSSxDQUFDQSxNQUFNLENBQUNDLEdBQVAsQ0FBV0MsUUFBWCxDQUFvQixPQUFwQixDQUFMLEVBQW1DO0FBQUE7O0FBQ2pDLDJDQUNLRixNQURMO0FBRUVHLGFBQU8sa0NBQ0ZILE1BQU0sQ0FBQ0csT0FETDtBQUVMO0FBQ0FDLHFCQUFhLEVBQUUseUJBQVlDLE9BQVosNkNBQVksU0FBU0MsS0FBckI7QUFIVjtBQUZUO0FBUUQ7O0FBQ0QsU0FBT04sTUFBUDtBQUNELENBWkQ7O0FBY0EsU0FBU08sSUFBVCxDQUFjQyxJQUFkLEVBQW9CQyxXQUFwQixFQUFpQztBQUMvQixTQUFPZCxhQUFhLENBQ2pCWSxJQURJLENBQ0NDLElBREQsRUFDT0MsV0FEUCxFQUVKQyxJQUZJLENBRUMsVUFBQUMsUUFBUSxFQUFJO0FBQ2hCLFdBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUFDLE9BQU8sRUFBSTtBQUM1QkEsYUFBTyxDQUFDRixRQUFRLENBQUNHLElBQVYsQ0FBUDtBQUNELEtBRk0sQ0FBUDtBQUdELEdBTkksV0FPRSxVQUFBQyxLQUFLLEVBQUk7QUFDZCxXQUFPLElBQUlILE9BQUosQ0FBWSxVQUFDSSxRQUFELEVBQVdDLE1BQVgsRUFBc0I7QUFDdkNBLFlBQU0sQ0FBQ0YsS0FBSyxDQUFDSixRQUFOLENBQWVHLElBQWhCLENBQU47QUFDRCxLQUZNLENBQVA7QUFHRCxHQVhJLENBQVA7QUFZRDs7QUFFTSxTQUFTSSxLQUFULENBQWVDLFVBQWYsRUFBMkI7QUFDaEMsU0FBT1osSUFBSSxDQUFDLFFBQUQsRUFBVztBQUNwQmEsU0FBSyxFQUFFRCxVQUFVLENBQUNDLEtBREU7QUFFcEJDLFlBQVEsRUFBRUMsa0RBQUEsQ0FBWUgsVUFBVSxDQUFDRSxRQUF2QixFQUFpQzdCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZOEIsbUJBQTdDLEVBQWtFQyxRQUFsRSxFQUZVO0FBR3BCQyxRQUFJLEVBQUVOLFVBQVUsQ0FBQ007QUFIRyxHQUFYLENBQVg7QUFLRDtBQUFBIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2FwaS1zZXJ2aWNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEFFUyB9IGZyb20gXCJjcnlwdG8tanNcIjtcbmltcG9ydCB7IGdldEF1dGhEYXRhIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG5cbmNvbnN0IGJhc2VVUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUEkgfHwgXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpXCI7XG5cbmNvbnN0IGF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiBiYXNlVVJMLFxufSk7XG5cbi8vYXhpb3NJbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVxdWVzdCjor7fmsYLmi6bmiKrlmagp77ya6K+35rGC5Y+R6YCB5YmN6L+b6KGM5LiA5Lqb5pON5L2cXG5heGlvc0luc3RhbmNlLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZSgoY29uZmlnKSA9PiB7XG4gIGlmICghY29uZmlnLnVybC5pbmNsdWRlcygnbG9naW4nKSkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5jb25maWcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIC4uLmNvbmZpZy5oZWFkZXJzLFxuICAgICAgICAvL+WKoOWFpXRva2VuXG4gICAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHN0b3JhZ2U/LnRva2VuLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG4gIHJldHVybiBjb25maWc7XG59KTtcblxuZnVuY3Rpb24gcG9zdChwYXRoLCByZXF1ZXN0Qm9keSkge1xuICByZXR1cm4gYXhpb3NJbnN0YW5jZVxuICAgIC5wb3N0KHBhdGgsIHJlcXVlc3RCb2R5KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoX3Jlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICByZWplY3QoZXJyb3IucmVzcG9uc2UuZGF0YSk7XG4gICAgICB9KTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luKHZpZXdWYWx1ZXMpIHtcbiAgcmV0dXJuIHBvc3QoXCIvbG9naW5cIiwge1xuICAgIGVtYWlsOiB2aWV3VmFsdWVzLmVtYWlsLFxuICAgIHBhc3N3b3JkOiBBRVMuZW5jcnlwdCh2aWV3VmFsdWVzLnBhc3N3b3JkLCBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BRVNfS0VZKS50b1N0cmluZygpLFxuICAgIHJvbGU6IHZpZXdWYWx1ZXMucm9sZSxcbiAgfSk7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/api-service.js\n");

/***/ })

});