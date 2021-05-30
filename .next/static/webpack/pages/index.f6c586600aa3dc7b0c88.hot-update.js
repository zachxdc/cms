/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/api/axiosConnect.js":
/*!***********************************!*\
  !*** ./pages/api/axiosConnect.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"login\": function() { return /* binding */ login; },\n/* harmony export */   \"localStorage\": function() { return /* binding */ localStorage; }\n/* harmony export */ });\n/* harmony import */ var _Users_bobcqs_cms_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-js */ \"./node_modules/crypto-js/index.js\");\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local-storage */ \"./pages/api/local-storage.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/process/browser.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_bobcqs_cms_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nfunction login(viewValues) {\n  return post(\"/newPage\", {\n    email: viewValues.email,\n    password: crypto_js__WEBPACK_IMPORTED_MODULE_2__.AES.encrypt(viewValues.password, process.env.NEXT_PUBLIC_AES_KEY).toString(),\n    role: viewValues.role\n  });\n}\n;\n\nfunction post(path, requestBody) {\n  return axiosInstance.post(path, requestBody).then(function (response) {\n    return new Promise(function (resolve) {\n      resolve(response.data);\n    });\n  })[\"catch\"](function (error) {\n    return new Promise(function (_resolve, reject) {\n      reject(error.response.data);\n    });\n  });\n}\n\nvar axiosInstance = axios__WEBPACK_IMPORTED_MODULE_1___default().create({\n  baseURL: getBaseUrl\n});\nvar baseURL = process.env.NEXT_PUBLIC_API || \"http://localhost:3000/api\";\n\nvar getBaseUrl = function getBaseUrl() {\n  if (true) {\n    return process.env.NEXT_PUBLIC_API || 'http://localhost:3001/api';\n  } else {}\n};\n\naxiosInstance.interceptors.request.use(function (config) {\n  if (!config.url.includes(\"login\")) {\n    return _objectSpread(_objectSpread({}, config), {}, {\n      headers: _objectSpread(_objectSpread({}, config.headers), {}, {\n        Authorization: \"Bearer \".concat((0,_local_storage__WEBPACK_IMPORTED_MODULE_3__.getAuthData)().token)\n      })\n    });\n  }\n\n  return config;\n});\nvar localStorage = {\n  get: function get(key) {\n    return JSON.parse(localStorage.getItem(key));\n  },\n  set: function set(key, value) {\n    localStorage.setItem(key, JSON.stringify(value));\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBpL2F4aW9zQ29ubmVjdC5qcz8zNDA2Il0sIm5hbWVzIjpbImxvZ2luIiwidmlld1ZhbHVlcyIsInBvc3QiLCJlbWFpbCIsInBhc3N3b3JkIiwiQUVTIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FFU19LRVkiLCJ0b1N0cmluZyIsInJvbGUiLCJwYXRoIiwicmVxdWVzdEJvZHkiLCJheGlvc0luc3RhbmNlIiwidGhlbiIsInJlc3BvbnNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJkYXRhIiwiZXJyb3IiLCJfcmVzb2x2ZSIsInJlamVjdCIsImF4aW9zIiwiYmFzZVVSTCIsImdldEJhc2VVcmwiLCJORVhUX1BVQkxJQ19BUEkiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwidXJsIiwiaW5jbHVkZXMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImdldEF1dGhEYXRhIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXQiLCJrZXkiLCJKU09OIiwicGFyc2UiLCJnZXRJdGVtIiwic2V0IiwidmFsdWUiLCJzZXRJdGVtIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sU0FBU0EsS0FBVCxDQUFlQyxVQUFmLEVBQTJCO0FBQ2hDLFNBQU9DLElBQUksQ0FBQyxVQUFELEVBQWE7QUFDdEJDLFNBQUssRUFBRUYsVUFBVSxDQUFDRSxLQURJO0FBRXRCQyxZQUFRLEVBQUVDLGtEQUFBLENBQVlKLFVBQVUsQ0FBQ0csUUFBdkIsRUFBaUNFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxtQkFBN0MsRUFBa0VDLFFBQWxFLEVBRlk7QUFHdEJDLFFBQUksRUFBRVQsVUFBVSxDQUFDUztBQUhLLEdBQWIsQ0FBWDtBQUtEO0FBQUE7O0FBRUQsU0FBU1IsSUFBVCxDQUFjUyxJQUFkLEVBQW9CQyxXQUFwQixFQUFpQztBQUMvQixTQUFPQyxhQUFhLENBQ2pCWCxJQURJLENBQ0NTLElBREQsRUFDT0MsV0FEUCxFQUVKRSxJQUZJLENBRUMsVUFBQUMsUUFBUSxFQUFJO0FBQ2hCLFdBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUFDLE9BQU8sRUFBSTtBQUM1QkEsYUFBTyxDQUFDRixRQUFRLENBQUNHLElBQVYsQ0FBUDtBQUNELEtBRk0sQ0FBUDtBQUdELEdBTkksV0FPRSxVQUFBQyxLQUFLLEVBQUk7QUFDZCxXQUFPLElBQUlILE9BQUosQ0FBWSxVQUFDSSxRQUFELEVBQVdDLE1BQVgsRUFBc0I7QUFDdkNBLFlBQU0sQ0FBQ0YsS0FBSyxDQUFDSixRQUFOLENBQWVHLElBQWhCLENBQU47QUFDRCxLQUZNLENBQVA7QUFHRCxHQVhJLENBQVA7QUFZRDs7QUFFRCxJQUFNTCxhQUFhLEdBQUdTLG1EQUFBLENBQWE7QUFDakNDLFNBQU8sRUFBRUM7QUFEd0IsQ0FBYixDQUF0QjtBQUlBLElBQU1ELE9BQU8sR0FBR2pCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZa0IsZUFBWixJQUErQiwyQkFBL0M7O0FBR0EsSUFBTUQsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixZQUE0QztBQUMxQyxXQUFPbEIsT0FBTyxDQUFDQyxHQUFSLENBQVlrQixlQUFaLElBQStCLDJCQUF0QztBQUNELEdBRkQsTUFFTyxFQUVOO0FBQ0YsQ0FORDs7QUFRQVosYUFBYSxDQUFDYSxZQUFkLENBQTJCQyxPQUEzQixDQUFtQ0MsR0FBbkMsQ0FBdUMsVUFBVUMsTUFBVixFQUFrQjtBQUN2RCxNQUFJLENBQUNBLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXQyxRQUFYLENBQW9CLE9BQXBCLENBQUwsRUFBbUM7QUFDakMsMkNBQ0tGLE1BREw7QUFFRUcsYUFBTyxrQ0FDRkgsTUFBTSxDQUFDRyxPQURMO0FBRUxDLHFCQUFhLG1CQUFZQywyREFBVyxHQUFHQyxLQUExQjtBQUZSO0FBRlQ7QUFPRDs7QUFDRCxTQUFPTixNQUFQO0FBQ0QsQ0FYRDtBQWFPLElBQU1PLFlBQVksR0FBRztBQUMxQkMsS0FEMEIsZUFDdEJDLEdBRHNCLEVBQ2pCO0FBQ1AsV0FBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdKLFlBQVksQ0FBQ0ssT0FBYixDQUFxQkgsR0FBckIsQ0FBWCxDQUFQO0FBQ0QsR0FIeUI7QUFJMUJJLEtBSjBCLGVBSXRCSixHQUpzQixFQUlqQkssS0FKaUIsRUFJVjtBQUNkUCxnQkFBWSxDQUFDUSxPQUFiLENBQXFCTixHQUFyQixFQUEwQkMsSUFBSSxDQUFDTSxTQUFMLENBQWVGLEtBQWYsQ0FBMUI7QUFDRDtBQU55QixDQUFyQiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9heGlvc0Nvbm5lY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgQUVTIH0gZnJvbSBcImNyeXB0by1qc1wiO1xuaW1wb3J0IHsgZ2V0QXV0aERhdGEgfSBmcm9tIFwiLi9sb2NhbC1zdG9yYWdlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dpbih2aWV3VmFsdWVzKSB7XG4gIHJldHVybiBwb3N0KFwiL25ld1BhZ2VcIiwge1xuICAgIGVtYWlsOiB2aWV3VmFsdWVzLmVtYWlsLFxuICAgIHBhc3N3b3JkOiBBRVMuZW5jcnlwdCh2aWV3VmFsdWVzLnBhc3N3b3JkLCBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BRVNfS0VZKS50b1N0cmluZygpLFxuICAgIHJvbGU6IHZpZXdWYWx1ZXMucm9sZSxcbiAgfSk7XG59O1xuXG5mdW5jdGlvbiBwb3N0KHBhdGgsIHJlcXVlc3RCb2R5KSB7XG4gIHJldHVybiBheGlvc0luc3RhbmNlXG4gICAgLnBvc3QocGF0aCwgcmVxdWVzdEJvZHkpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChfcmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHJlamVjdChlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5jb25zdCBheGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogZ2V0QmFzZVVybCxcbn0pO1xuXG5jb25zdCBiYXNlVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJIHx8IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaVwiO1xuXG5cbmNvbnN0IGdldEJhc2VVcmwgPSAoKSA9PiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUEkgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGknO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnaHR0cHM6Ly9jbXMuY2h0b21hLmNvbS9hcGknO1xuICB9XG59O1xuXG5heGlvc0luc3RhbmNlLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShmdW5jdGlvbiAoY29uZmlnKSB7XG4gIGlmICghY29uZmlnLnVybC5pbmNsdWRlcyhcImxvZ2luXCIpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmNvbmZpZyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgLi4uY29uZmlnLmhlYWRlcnMsXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRBdXRoRGF0YSgpLnRva2VufWAsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIGNvbmZpZztcbn0pO1xuXG5leHBvcnQgY29uc3QgbG9jYWxTdG9yYWdlID0ge1xuICBnZXQoa2V5KSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSlcbiAgfSxcbiAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSlcbiAgfVxufVxuICBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/axiosConnect.js\n");

/***/ })

});