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
exports.id = "pages/api/postvideoimage/getPhotoPostVideoPublic";
exports.ids = ["pages/api/postvideoimage/getPhotoPostVideoPublic"];
exports.modules = {

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "socialnetworkk/data/DataPhotoPostVideo":
/*!*********************************************************!*\
  !*** external "socialnetworkk/data/DataPhotoPostVideo" ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = require("socialnetworkk/data/DataPhotoPostVideo");

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

/***/ "(api)/./pages/api/postvideoimage/getPhotoPostVideoPublic.js":
/*!*************************************************************!*\
  !*** ./pages/api/postvideoimage/getPhotoPostVideoPublic.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var socialnetworkk_data_DataPhotoPostVideo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socialnetworkk/data/DataPhotoPostVideo */ \"socialnetworkk/data/DataPhotoPostVideo\");\n/* harmony import */ var socialnetworkk_data_DataPhotoPostVideo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socialnetworkk_data_DataPhotoPostVideo__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cors */ \"(api)/./pages/api/cors.js\");\n\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    if (req.method === \"GET\") {\n        await (0,_cors__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(req, res);\n        try {\n            let arraydiffdate = [];\n            let array = await socialnetworkk_data_DataPhotoPostVideo__WEBPACK_IMPORTED_MODULE_0__.DataPhotoPostVideo.getPhotoPostVideoPublic();\n            for (const post of array){\n                post.DiffDatePublishDateNow();\n                post.showDiffDatePublishDateNow();\n                arraydiffdate.push(post);\n            }\n            return res.status(200).send(arraydiffdate);\n        } catch (error) {\n            return res.status(500).send(error.message);\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdHZpZGVvaW1hZ2UvZ2V0UGhvdG9Qb3N0VmlkZW9QdWJsaWMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0RTtBQUNqRDtBQUUzQiw2QkFBZSwwQ0FBZ0JFLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3JDLElBQUdELEdBQUcsQ0FBQ0UsTUFBTSxLQUFHLEtBQUssRUFDakI7UUFDRSxNQUFNSCxpREFBSSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsQ0FBQztRQUNwQixJQUNBO1lBQ0UsSUFBSUUsYUFBYSxHQUFDLEVBQUU7WUFHcEIsSUFBSUMsS0FBSyxHQUFDLE1BQU1OLDhHQUEwQyxFQUN4RDtZQUNGLEtBQUssTUFBTVEsSUFBSSxJQUFJRixLQUFLLENBQUU7Z0JBQ3RCRSxJQUFJLENBQUNDLHNCQUFzQixFQUFFO2dCQUM3QkQsSUFBSSxDQUFDRSwwQkFBMEIsRUFBRTtnQkFDakNMLGFBQWEsQ0FBQ00sSUFBSSxDQUFDSCxJQUFJLENBQUMsQ0FBQzthQUM1QjtZQUNELE9BQU9MLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNSLGFBQWEsQ0FBQyxDQUFDO1NBRTNDLENBQ0osT0FBT1MsS0FBSyxFQUFFO1lBQ0osT0FBT1gsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPLENBQUMsQ0FBQztTQUNoRDtLQUNOO0NBRUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcGluZXh0c29jaWFsbmV0d29yay8uL3BhZ2VzL2FwaS9wb3N0dmlkZW9pbWFnZS9nZXRQaG90b1Bvc3RWaWRlb1B1YmxpYy5qcz8wZjU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFQaG90b1Bvc3RWaWRlbyB9IGZyb20gXCJzb2NpYWxuZXR3b3Jray9kYXRhL0RhdGFQaG90b1Bvc3RWaWRlb1wiO1xyXG5pbXBvcnQgY29ycyBmcm9tIFwiLi4vY29yc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XHJcbiAgICBpZihyZXEubWV0aG9kPT09XCJHRVRcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICBhd2FpdCBjb3JzKHJlcSwgcmVzKVxyXG4gICAgICAgICAgdHJ5XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBhcnJheWRpZmZkYXRlPVtdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgYXJyYXk9YXdhaXQgRGF0YVBob3RvUG9zdFZpZGVvLmdldFBob3RvUG9zdFZpZGVvUHVibGljXHJcbiAgICAgICAgICAgICgpXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcG9zdCBvZiBhcnJheSkge1xyXG4gICAgICAgICAgICAgICAgcG9zdC5EaWZmRGF0ZVB1Ymxpc2hEYXRlTm93KClcclxuICAgICAgICAgICAgICAgIHBvc3Quc2hvd0RpZmZEYXRlUHVibGlzaERhdGVOb3coKVxyXG4gICAgICAgICAgICAgICAgYXJyYXlkaWZmZGF0ZS5wdXNoKHBvc3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChhcnJheWRpZmZkYXRlKTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfSJdLCJuYW1lcyI6WyJEYXRhUGhvdG9Qb3N0VmlkZW8iLCJjb3JzIiwicmVxIiwicmVzIiwibWV0aG9kIiwiYXJyYXlkaWZmZGF0ZSIsImFycmF5IiwiZ2V0UGhvdG9Qb3N0VmlkZW9QdWJsaWMiLCJwb3N0IiwiRGlmZkRhdGVQdWJsaXNoRGF0ZU5vdyIsInNob3dEaWZmRGF0ZVB1Ymxpc2hEYXRlTm93IiwicHVzaCIsInN0YXR1cyIsInNlbmQiLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/postvideoimage/getPhotoPostVideoPublic.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/postvideoimage/getPhotoPostVideoPublic.js"));
module.exports = __webpack_exports__;

})();