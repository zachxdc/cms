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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"login\": function() { return /* binding */ login; }\n/* harmony export */ });\n/* harmony import */ var _Users_bobcqs_cms_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-js */ \"./node_modules/crypto-js/index.js\");\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ \"./pages/api/storage.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/process/browser.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_bobcqs_cms_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar axiosInstance = axios__WEBPACK_IMPORTED_MODULE_1___default().create({\n  baseURL: \"http://localhost:3000/api\"\n}); //axiosInstance.interceptors.request(请求拦截器)：请求发送前进行一些操作\n\naxiosInstance.interceptors.request.use(function (config) {\n  if (!config.url.includes('login')) {\n    var _storage;\n\n    return _objectSpread(_objectSpread({}, config), {}, {\n      headers: _objectSpread(_objectSpread({}, config.headers), {}, {\n        Authorization: 'Bearer ' + ((_storage = storage) === null || _storage === void 0 ? void 0 : _storage.token)\n      })\n    });\n  }\n\n  return config;\n});\n\nfunction post(path, requestBody) {\n  return axiosInstance.post(path, requestBody).then(function (response) {\n    return new Promise(function (resolve) {\n      resolve(response.data);\n    });\n  })[\"catch\"](function (error) {\n    return new Promise(function (_resolve, reject) {\n      reject(error.response.data);\n    });\n  });\n}\n\nfunction login(viewValues) {\n  return post(\"/login\", {\n    email: viewValues.email,\n    password: crypto_js__WEBPACK_IMPORTED_MODULE_2__.AES.encrypt(viewValues.password, process.env.NEXT_PUBLIC_AES_KEY).toString(),\n    role: viewValues.role\n  });\n}\n;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBpL2FwaS1zZXJ2aWNlLmpzPzY0MDgiXSwibmFtZXMiOlsiYXhpb3NJbnN0YW5jZSIsImF4aW9zIiwiYmFzZVVSTCIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJjb25maWciLCJ1cmwiLCJpbmNsdWRlcyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwic3RvcmFnZSIsInRva2VuIiwicG9zdCIsInBhdGgiLCJyZXF1ZXN0Qm9keSIsInRoZW4iLCJyZXNwb25zZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZGF0YSIsImVycm9yIiwiX3Jlc29sdmUiLCJyZWplY3QiLCJsb2dpbiIsInZpZXdWYWx1ZXMiLCJlbWFpbCIsInBhc3N3b3JkIiwiQUVTIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FFU19LRVkiLCJ0b1N0cmluZyIsInJvbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBR0MsbURBQUEsQ0FBYTtBQUNqQ0MsU0FBTyxFQUFFO0FBRHdCLENBQWIsQ0FBdEIsQyxDQUlBOztBQUNBRixhQUFhLENBQUNHLFlBQWQsQ0FBMkJDLE9BQTNCLENBQW1DQyxHQUFuQyxDQUF1QyxVQUFDQyxNQUFELEVBQVk7QUFDakQsTUFBSSxDQUFDQSxNQUFNLENBQUNDLEdBQVAsQ0FBV0MsUUFBWCxDQUFvQixPQUFwQixDQUFMLEVBQW1DO0FBQUE7O0FBQ2pDLDJDQUNLRixNQURMO0FBRUVHLGFBQU8sa0NBQ0ZILE1BQU0sQ0FBQ0csT0FETDtBQUVMQyxxQkFBYSxFQUFFLHlCQUFZQyxPQUFaLDZDQUFZLFNBQVNDLEtBQXJCO0FBRlY7QUFGVDtBQU9EOztBQUNELFNBQU9OLE1BQVA7QUFDRCxDQVhEOztBQWFBLFNBQVNPLElBQVQsQ0FBY0MsSUFBZCxFQUFvQkMsV0FBcEIsRUFBaUM7QUFDL0IsU0FBT2YsYUFBYSxDQUNqQmEsSUFESSxDQUNDQyxJQURELEVBQ09DLFdBRFAsRUFFSkMsSUFGSSxDQUVDLFVBQUFDLFFBQVEsRUFBSTtBQUNoQixXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFBQyxPQUFPLEVBQUk7QUFDNUJBLGFBQU8sQ0FBQ0YsUUFBUSxDQUFDRyxJQUFWLENBQVA7QUFDRCxLQUZNLENBQVA7QUFHRCxHQU5JLFdBT0UsVUFBQUMsS0FBSyxFQUFJO0FBQ2QsV0FBTyxJQUFJSCxPQUFKLENBQVksVUFBQ0ksUUFBRCxFQUFXQyxNQUFYLEVBQXNCO0FBQ3ZDQSxZQUFNLENBQUNGLEtBQUssQ0FBQ0osUUFBTixDQUFlRyxJQUFoQixDQUFOO0FBQ0QsS0FGTSxDQUFQO0FBR0QsR0FYSSxDQUFQO0FBWUQ7O0FBRU0sU0FBU0ksS0FBVCxDQUFlQyxVQUFmLEVBQTJCO0FBQ2hDLFNBQU9aLElBQUksQ0FBQyxRQUFELEVBQVc7QUFDcEJhLFNBQUssRUFBRUQsVUFBVSxDQUFDQyxLQURFO0FBRXBCQyxZQUFRLEVBQUVDLGtEQUFBLENBQVlILFVBQVUsQ0FBQ0UsUUFBdkIsRUFBaUNFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxtQkFBN0MsRUFBa0VDLFFBQWxFLEVBRlU7QUFHcEJDLFFBQUksRUFBRVIsVUFBVSxDQUFDUTtBQUhHLEdBQVgsQ0FBWDtBQUtEO0FBQUEiLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXBpLXNlcnZpY2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgQUVTIH0gZnJvbSBcImNyeXB0by1qc1wiO1xuaW1wb3J0IHsgZ2V0QXV0aERhdGEgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cbmNvbnN0IGF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGlcIixcbn0pO1xuXG4vL2F4aW9zSW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlcXVlc3Qo6K+35rGC5oum5oiq5ZmoKe+8muivt+axguWPkemAgeWJjei/m+ihjOS4gOS6m+aTjeS9nFxuYXhpb3NJbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoKGNvbmZpZykgPT4ge1xuICBpZiAoIWNvbmZpZy51cmwuaW5jbHVkZXMoJ2xvZ2luJykpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uY29uZmlnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAuLi5jb25maWcuaGVhZGVycyxcbiAgICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgc3RvcmFnZT8udG9rZW4sXG4gICAgICB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIGNvbmZpZztcbn0pO1xuXG5mdW5jdGlvbiBwb3N0KHBhdGgsIHJlcXVlc3RCb2R5KSB7XG4gIHJldHVybiBheGlvc0luc3RhbmNlXG4gICAgLnBvc3QocGF0aCwgcmVxdWVzdEJvZHkpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChfcmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHJlamVjdChlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9naW4odmlld1ZhbHVlcykge1xuICByZXR1cm4gcG9zdChcIi9sb2dpblwiLCB7XG4gICAgZW1haWw6IHZpZXdWYWx1ZXMuZW1haWwsXG4gICAgcGFzc3dvcmQ6IEFFUy5lbmNyeXB0KHZpZXdWYWx1ZXMucGFzc3dvcmQsIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FFU19LRVkpLnRvU3RyaW5nKCksXG4gICAgcm9sZTogdmlld1ZhbHVlcy5yb2xlLFxuICB9KTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/api-service.js\n");

/***/ })

});