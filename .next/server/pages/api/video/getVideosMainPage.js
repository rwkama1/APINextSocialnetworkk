"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/video/getVideosMainPage";
exports.ids = ["pages/api/video/getVideosMainPage"];
exports.modules = {

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "socialnetworkk/data/DataVideo":
/*!************************************************!*\
  !*** external "socialnetworkk/data/DataVideo" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("socialnetworkk/data/DataVideo");

/***/ }),

/***/ "(api)/./lib/init-middleware.js":
/*!********************************!*\
  !*** ./lib/init-middleware.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMiddleware)\n/* harmony export */ });\n// Helper method to wait for a middleware to execute before continuing\n// And to throw an error when an error happens in a middleware\nfunction initMiddleware(middleware) {\n    return (req, res)=>new Promise((resolve, reject)=>{\n            middleware(req, res, (result)=>{\n                if (result instanceof Error) {\n                    return reject(result);\n                }\n                return resolve(result);\n            });\n        });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvaW5pdC1taWRkbGV3YXJlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxzRUFBc0U7QUFDdEUsOERBQThEO0FBQy9DLFNBQVNBLGNBQWMsQ0FBQ0MsVUFBVSxFQUFFO0lBQ2pELE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEdBQ2QsSUFBSUMsT0FBTyxDQUFDLENBQUNDLE9BQU8sRUFBRUMsTUFBTSxHQUFLO1lBQy9CTCxVQUFVLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUNJLE1BQU0sR0FBSztnQkFDL0IsSUFBSUEsTUFBTSxZQUFZQyxLQUFLLEVBQUU7b0JBQzNCLE9BQU9GLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDO2lCQUN0QjtnQkFDRCxPQUFPRixPQUFPLENBQUNFLE1BQU0sQ0FBQzthQUN2QixDQUFDO1NBQ0gsQ0FBQztDQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBpbmV4dHNvY2lhbG5ldHdvcmsvLi9saWIvaW5pdC1taWRkbGV3YXJlLmpzP2FjZWMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSGVscGVyIG1ldGhvZCB0byB3YWl0IGZvciBhIG1pZGRsZXdhcmUgdG8gZXhlY3V0ZSBiZWZvcmUgY29udGludWluZ1xuLy8gQW5kIHRvIHRocm93IGFuIGVycm9yIHdoZW4gYW4gZXJyb3IgaGFwcGVucyBpbiBhIG1pZGRsZXdhcmVcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRNaWRkbGV3YXJlKG1pZGRsZXdhcmUpIHtcbiAgcmV0dXJuIChyZXEsIHJlcykgPT5cbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBtaWRkbGV3YXJlKHJlcSwgcmVzLCAocmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiByZWplY3QocmVzdWx0KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3VsdClcbiAgICAgIH0pXG4gICAgfSlcbn1cbiJdLCJuYW1lcyI6WyJpbml0TWlkZGxld2FyZSIsIm1pZGRsZXdhcmUiLCJyZXEiLCJyZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc3VsdCIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/init-middleware.js\n");

/***/ }),

/***/ "(api)/./pages/api/cors.js":
/*!***************************!*\
  !*** ./pages/api/cors.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_init_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/init-middleware */ \"(api)/./lib/init-middleware.js\");\n\n\n// Initialize the cors middleware\nconst cors = (0,_lib_init_middleware__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options\ncors__WEBPACK_IMPORTED_MODULE_0___default()({\n    // Only allow requests with GET, POST,PUT,DELETE and OPTIONS\n    methods: [\n        \"GET\",\n        \"POST\",\n        \"PUT\",\n        \"DELETE\",\n        \"OPTIONS\"\n    ]\n}));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cors);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29ycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVCO0FBQytCO0FBSXRELGlDQUFpQztBQUNqQyxNQUFNRSxJQUFJLEdBQUdELGdFQUFjLENBQ3pCLDhHQUE4RztBQUM5R0QsMkNBQUksQ0FBQztJQUNILDREQUE0RDtJQUM1REcsT0FBTyxFQUFFO1FBQUMsS0FBSztRQUFFLE1BQU07UUFBRSxLQUFLO1FBQUMsUUFBUTtRQUFDLFNBQVM7S0FBQztDQUNuRCxDQUFDLENBQ0g7QUFDRCxpRUFBZUQsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2FwaW5leHRzb2NpYWxuZXR3b3JrLy4vcGFnZXMvYXBpL2NvcnMuanM/MTgyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29ycyBmcm9tICdjb3JzJ1xuaW1wb3J0IGluaXRNaWRkbGV3YXJlIGZyb20gJy4uLy4uL2xpYi9pbml0LW1pZGRsZXdhcmUnXG5cblxuXG4vLyBJbml0aWFsaXplIHRoZSBjb3JzIG1pZGRsZXdhcmVcbmNvbnN0IGNvcnMgPSBpbml0TWlkZGxld2FyZShcbiAgLy8gWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgdGhlIGF2YWlsYWJsZSBvcHRpb25zIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9leHByZXNzanMvY29ycyNjb25maWd1cmF0aW9uLW9wdGlvbnNcbiAgQ29ycyh7XG4gICAgLy8gT25seSBhbGxvdyByZXF1ZXN0cyB3aXRoIEdFVCwgUE9TVCxQVVQsREVMRVRFIGFuZCBPUFRJT05TXG4gICAgbWV0aG9kczogWydHRVQnLCAnUE9TVCcsICdQVVQnLCdERUxFVEUnLCdPUFRJT05TJ10sXG4gIH0pXG4pXG5leHBvcnQgZGVmYXVsdCBjb3JzXG5cbiJdLCJuYW1lcyI6WyJDb3JzIiwiaW5pdE1pZGRsZXdhcmUiLCJjb3JzIiwibWV0aG9kcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/cors.js\n");

/***/ }),

/***/ "(api)/./pages/api/video/getVideosMainPage.js":
/*!**********************************************!*\
  !*** ./pages/api/video/getVideosMainPage.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var socialnetworkk_data_DataVideo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socialnetworkk/data/DataVideo */ \"socialnetworkk/data/DataVideo\");\n/* harmony import */ var socialnetworkk_data_DataVideo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socialnetworkk_data_DataVideo__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cors */ \"(api)/./pages/api/cors.js\");\n\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    if (req.method === \"GET\") {\n        await (0,_cors__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(req, res);\n        try {\n            let arraydiffdate = [];\n            const { iduserlogin , country  } = req.query;\n            let array = await socialnetworkk_data_DataVideo__WEBPACK_IMPORTED_MODULE_0__.DataVideo.getVideosMainPage(iduserlogin, country);\n            for (const vid of array){\n                vid.DiffDatePublishDateNow();\n                vid.showDiffDatePublishDateNow();\n                arraydiffdate.push(vid);\n            }\n            return res.status(200).send(arraydiffdate);\n        } catch (error) {\n            return res.status(500).send(error.message);\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdmlkZW8vZ2V0VmlkZW9zTWFpblBhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwRDtBQUMvQjtBQUUzQiw2QkFBZSwwQ0FBZ0JFLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3JDLElBQUdELEdBQUcsQ0FBQ0UsTUFBTSxLQUFHLEtBQUssRUFDakI7UUFDRSxNQUFNSCxpREFBSSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsQ0FBQztRQUNwQixJQUNBO1lBQ0UsSUFBSUUsYUFBYSxHQUFDLEVBQUU7WUFDcEIsTUFBTSxFQUFDQyxXQUFXLEdBQUNDLE9BQU8sR0FBQyxHQUFHTCxHQUFHLENBQUNNLEtBQUs7WUFFOUMsSUFBSUMsS0FBSyxHQUFDLE1BQU1ULHNGQUEyQixDQUFDTSxXQUFXLEVBQUNDLE9BQU8sQ0FBQztZQUM3RCxLQUFLLE1BQU1JLEdBQUcsSUFBSUYsS0FBSyxDQUFFO2dCQUNyQkUsR0FBRyxDQUFDQyxzQkFBc0IsRUFBRTtnQkFDNUJELEdBQUcsQ0FBQ0UsMEJBQTBCLEVBQUU7Z0JBQ2hDUixhQUFhLENBQUNTLElBQUksQ0FBQ0gsR0FBRyxDQUFDLENBQUM7YUFDM0I7WUFDRyxPQUFPUixHQUFHLENBQUNZLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDWCxhQUFhLENBQUMsQ0FBQztTQUUzQyxDQUNKLE9BQU9ZLEtBQUssRUFBRTtZQUNKLE9BQU9kLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxDQUFDLENBQUM7U0FDaEQ7S0FDTjtDQUVGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBpbmV4dHNvY2lhbG5ldHdvcmsvLi9wYWdlcy9hcGkvdmlkZW8vZ2V0VmlkZW9zTWFpblBhZ2UuanM/YmY5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhVmlkZW8gfSBmcm9tIFwic29jaWFsbmV0d29ya2svZGF0YS9EYXRhVmlkZW9cIjtcclxuaW1wb3J0IGNvcnMgZnJvbSBcIi4uL2NvcnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXEsIHJlcykge1xyXG4gICAgaWYocmVxLm1ldGhvZD09PVwiR0VUXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYXdhaXQgY29ycyhyZXEsIHJlcylcclxuICAgICAgICAgIHRyeVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYXJyYXlkaWZmZGF0ZT1bXTtcclxuICAgICAgICAgICAgY29uc3Qge2lkdXNlcmxvZ2luLGNvdW50cnl9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgICAgIFxyXG4gICAgIGxldCBhcnJheT1hd2FpdCBEYXRhVmlkZW8uZ2V0VmlkZW9zTWFpblBhZ2UoaWR1c2VybG9naW4sY291bnRyeSlcclxuICAgICAgICBmb3IgKGNvbnN0IHZpZCBvZiBhcnJheSkge1xyXG4gICAgICAgICAgICB2aWQuRGlmZkRhdGVQdWJsaXNoRGF0ZU5vdygpXHJcbiAgICAgICAgICAgIHZpZC5zaG93RGlmZkRhdGVQdWJsaXNoRGF0ZU5vdygpXHJcbiAgICAgICAgICAgIGFycmF5ZGlmZmRhdGUucHVzaCh2aWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGFycmF5ZGlmZmRhdGUpO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9Il0sIm5hbWVzIjpbIkRhdGFWaWRlbyIsImNvcnMiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJhcnJheWRpZmZkYXRlIiwiaWR1c2VybG9naW4iLCJjb3VudHJ5IiwicXVlcnkiLCJhcnJheSIsImdldFZpZGVvc01haW5QYWdlIiwidmlkIiwiRGlmZkRhdGVQdWJsaXNoRGF0ZU5vdyIsInNob3dEaWZmRGF0ZVB1Ymxpc2hEYXRlTm93IiwicHVzaCIsInN0YXR1cyIsInNlbmQiLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/video/getVideosMainPage.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/video/getVideosMainPage.js"));
module.exports = __webpack_exports__;

})();