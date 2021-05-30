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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"login\": function() { return /* binding */ login; },\n/* harmony export */   \"localStorage\": function() { return /* binding */ localStorage; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ \"./node_modules/crypto-js/index.js\");\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage */ \"./pages/api/local-storage.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/process/browser.js\");\n\n\n\nfunction login(viewValues) {\n  return post(\"/newPage\", {\n    email: viewValues.email,\n    password: crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(viewValues.password, process.env.NEXT_PUBLIC_AES_KEY).toString(),\n    role: viewValues.role\n  });\n}\n;\n\nfunction post(path, requestBody) {\n  return axiosInstance.post(path, requestBody).then(function (response) {\n    return new Promise(function (resolve) {\n      resolve(response.data);\n    });\n  })[\"catch\"](function (error) {\n    return new Promise(function (_resolve, reject) {\n      reject(error.response.data);\n    });\n  });\n}\n\nvar axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n  baseURL: 'http://localhost:3000/api',\n  timeout: 1000,\n  headers: {\n    'X-Custom-Header': 'foobar'\n  }\n});\nvar localStorage = {\n  get: function get(key) {\n    return JSON.parse(localStorage.getItem(key));\n  },\n  set: function set(key, value) {\n    localStorage.setItem(key, JSON.stringify(value));\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBpL2F4aW9zQ29ubmVjdC5qcz8zNDA2Il0sIm5hbWVzIjpbImxvZ2luIiwidmlld1ZhbHVlcyIsInBvc3QiLCJlbWFpbCIsInBhc3N3b3JkIiwiQUVTIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FFU19LRVkiLCJ0b1N0cmluZyIsInJvbGUiLCJwYXRoIiwicmVxdWVzdEJvZHkiLCJheGlvc0luc3RhbmNlIiwidGhlbiIsInJlc3BvbnNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJkYXRhIiwiZXJyb3IiLCJfcmVzb2x2ZSIsInJlamVjdCIsImF4aW9zIiwiYmFzZVVSTCIsInRpbWVvdXQiLCJoZWFkZXJzIiwibG9jYWxTdG9yYWdlIiwiZ2V0Iiwia2V5IiwiSlNPTiIsInBhcnNlIiwiZ2V0SXRlbSIsInNldCIsInZhbHVlIiwic2V0SXRlbSIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sU0FBU0EsS0FBVCxDQUFlQyxVQUFmLEVBQTJCO0FBQ2hDLFNBQU9DLElBQUksQ0FBQyxVQUFELEVBQWE7QUFDdEJDLFNBQUssRUFBRUYsVUFBVSxDQUFDRSxLQURJO0FBRXRCQyxZQUFRLEVBQUVDLGtEQUFBLENBQVlKLFVBQVUsQ0FBQ0csUUFBdkIsRUFBaUNFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxtQkFBN0MsRUFBa0VDLFFBQWxFLEVBRlk7QUFHdEJDLFFBQUksRUFBRVQsVUFBVSxDQUFDUztBQUhLLEdBQWIsQ0FBWDtBQUtEO0FBQUE7O0FBRUQsU0FBU1IsSUFBVCxDQUFjUyxJQUFkLEVBQW9CQyxXQUFwQixFQUFpQztBQUMvQixTQUFPQyxhQUFhLENBQ2pCWCxJQURJLENBQ0NTLElBREQsRUFDT0MsV0FEUCxFQUVKRSxJQUZJLENBRUMsVUFBQUMsUUFBUSxFQUFJO0FBQ2hCLFdBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUFDLE9BQU8sRUFBSTtBQUM1QkEsYUFBTyxDQUFDRixRQUFRLENBQUNHLElBQVYsQ0FBUDtBQUNELEtBRk0sQ0FBUDtBQUdELEdBTkksV0FPRSxVQUFBQyxLQUFLLEVBQUk7QUFDZCxXQUFPLElBQUlILE9BQUosQ0FBWSxVQUFDSSxRQUFELEVBQVdDLE1BQVgsRUFBc0I7QUFDdkNBLFlBQU0sQ0FBQ0YsS0FBSyxDQUFDSixRQUFOLENBQWVHLElBQWhCLENBQU47QUFDRCxLQUZNLENBQVA7QUFHRCxHQVhJLENBQVA7QUFZRDs7QUFFRCxJQUFNTCxhQUFhLEdBQUdTLG1EQUFBLENBQWE7QUFDL0JDLFNBQU8sRUFBRSwyQkFEc0I7QUFFL0JDLFNBQU8sRUFBRSxJQUZzQjtBQUcvQkMsU0FBTyxFQUFFO0FBQUUsdUJBQW1CO0FBQXJCO0FBSHNCLENBQWIsQ0FBdEI7QUFNTyxJQUFNQyxZQUFZLEdBQUc7QUFDMUJDLEtBRDBCLGVBQ3RCQyxHQURzQixFQUNqQjtBQUNQLFdBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixZQUFZLENBQUNLLE9BQWIsQ0FBcUJILEdBQXJCLENBQVgsQ0FBUDtBQUNELEdBSHlCO0FBSTFCSSxLQUowQixlQUl0QkosR0FKc0IsRUFJakJLLEtBSmlCLEVBSVY7QUFDZFAsZ0JBQVksQ0FBQ1EsT0FBYixDQUFxQk4sR0FBckIsRUFBMEJDLElBQUksQ0FBQ00sU0FBTCxDQUFlRixLQUFmLENBQTFCO0FBQ0Q7QUFOeUIsQ0FBckIiLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXhpb3NDb25uZWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEFFUyB9IGZyb20gXCJjcnlwdG8tanNcIjtcbmltcG9ydCB7IGdldEF1dGhEYXRhIH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9naW4odmlld1ZhbHVlcykge1xuICByZXR1cm4gcG9zdChcIi9uZXdQYWdlXCIsIHtcbiAgICBlbWFpbDogdmlld1ZhbHVlcy5lbWFpbCxcbiAgICBwYXNzd29yZDogQUVTLmVuY3J5cHQodmlld1ZhbHVlcy5wYXNzd29yZCwgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQUVTX0tFWSkudG9TdHJpbmcoKSxcbiAgICByb2xlOiB2aWV3VmFsdWVzLnJvbGUsXG4gIH0pO1xufTtcblxuZnVuY3Rpb24gcG9zdChwYXRoLCByZXF1ZXN0Qm9keSkge1xuICByZXR1cm4gYXhpb3NJbnN0YW5jZVxuICAgIC5wb3N0KHBhdGgsIHJlcXVlc3RCb2R5KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoX3Jlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICByZWplY3QoZXJyb3IucmVzcG9uc2UuZGF0YSk7XG4gICAgICB9KTtcbiAgICB9KTtcbn1cblxuY29uc3QgYXhpb3NJbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGknLFxuICAgIHRpbWVvdXQ6IDEwMDAsXG4gICAgaGVhZGVyczogeyAnWC1DdXN0b20tSGVhZGVyJzogJ2Zvb2JhcicgfVxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGxvY2FsU3RvcmFnZSA9IHtcbiAgZ2V0KGtleSkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpXG4gIH0sXG4gIHNldChrZXksIHZhbHVlKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpXG4gIH1cbn1cbiAgXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/axiosConnect.js\n");

/***/ })

});