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
exports.id = "pages/api/postvideoimage/getPhotoPostVideoMainPage";
exports.ids = ["pages/api/postvideoimage/getPhotoPostVideoMainPage"];
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

/***/ "(api)/./pages/api/postvideoimage/getPhotoPostVideoMainPage.js":
/*!***************************************************************!*\
  !*** ./pages/api/postvideoimage/getPhotoPostVideoMainPage.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var socialnetworkk_data_DataPhotoPostVideo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socialnetworkk/data/DataPhotoPostVideo */ \"socialnetworkk/data/DataPhotoPostVideo\");\n/* harmony import */ var socialnetworkk_data_DataPhotoPostVideo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socialnetworkk_data_DataPhotoPostVideo__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cors */ \"(api)/./pages/api/cors.js\");\n\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    if (req.method === \"GET\") {\n        await (0,_cors__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(req, res);\n        try {\n            let arraydiffdate = [];\n            const { iduserlogin , country  } = req.query;\n            let array = await socialnetworkk_data_DataPhotoPostVideo__WEBPACK_IMPORTED_MODULE_0__.DataPhotoPostVideo.getPhotoPostVideoMainPage(iduserlogin, country);\n            const sortdatearray = array.sort((a, b)=>b.datepublish - a.datepublish);\n            //Order by Dates descending\n            for (const post of sortdatearray){\n                post.DiffDatePublishDateNow();\n                post.showDiffDatePublishDateNow();\n                arraydiffdate.push(post);\n            }\n            return res.status(200).send(arraydiffdate);\n        } catch (error) {\n            return res.status(500).send(error.message);\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdHZpZGVvaW1hZ2UvZ2V0UGhvdG9Qb3N0VmlkZW9NYWluUGFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTRFO0FBQ2pEO0FBRTNCLDZCQUFlLDBDQUFnQkUsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDckMsSUFBR0QsR0FBRyxDQUFDRSxNQUFNLEtBQUcsS0FBSyxFQUNqQjtRQUNFLE1BQU1ILGlEQUFJLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxDQUFDO1FBQ3BCLElBQ0E7WUFDRSxJQUFJRSxhQUFhLEdBQUMsRUFBRTtZQUNwQixNQUFNLEVBQUNDLFdBQVcsR0FBQ0MsT0FBTyxHQUFDLEdBQUdMLEdBQUcsQ0FBQ00sS0FBSztZQUV2QyxJQUFJQyxLQUFLLEdBQUMsTUFBTVQsZ0hBQTRDLENBQUNNLFdBQVcsRUFDbkVDLE9BQU8sQ0FBQztZQUNiLE1BQU1JLGFBQWEsR0FBR0YsS0FBSyxDQUFDRyxJQUFJLENBQUMsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEdBQUtBLENBQUMsQ0FBQ0MsV0FBVyxHQUFHRixDQUFDLENBQUNFLFdBQVcsQ0FBQztZQUN6RSwyQkFBMkI7WUFDM0IsS0FBSyxNQUFNQyxJQUFJLElBQUlMLGFBQWEsQ0FBRTtnQkFDOUJLLElBQUksQ0FBQ0Msc0JBQXNCLEVBQUU7Z0JBQzdCRCxJQUFJLENBQUNFLDBCQUEwQixFQUFFO2dCQUNqQ2IsYUFBYSxDQUFDYyxJQUFJLENBQUNILElBQUksQ0FBQzthQUMzQjtZQUNELE9BQU9iLEdBQUcsQ0FBQ2lCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDaEIsYUFBYSxDQUFDLENBQUM7U0FFM0MsQ0FDSixPQUFPaUIsS0FBSyxFQUFFO1lBQ0osT0FBT25CLEdBQUcsQ0FBQ2lCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLE9BQU8sQ0FBQyxDQUFDO1NBQ2hEO0tBQ047Q0FFRiIsInNvdXJjZXMiOlsid2VicGFjazovL2FwaW5leHRzb2NpYWxuZXR3b3JrLy4vcGFnZXMvYXBpL3Bvc3R2aWRlb2ltYWdlL2dldFBob3RvUG9zdFZpZGVvTWFpblBhZ2UuanM/Y2FlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhUGhvdG9Qb3N0VmlkZW8gfSBmcm9tIFwic29jaWFsbmV0d29ya2svZGF0YS9EYXRhUGhvdG9Qb3N0VmlkZW9cIjtcclxuaW1wb3J0IGNvcnMgZnJvbSBcIi4uL2NvcnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXEsIHJlcykge1xyXG4gICAgaWYocmVxLm1ldGhvZD09PVwiR0VUXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYXdhaXQgY29ycyhyZXEsIHJlcylcclxuICAgICAgICAgIHRyeVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYXJyYXlkaWZmZGF0ZT1bXTtcclxuICAgICAgICAgICAgY29uc3Qge2lkdXNlcmxvZ2luLGNvdW50cnl9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgYXJyYXk9YXdhaXQgRGF0YVBob3RvUG9zdFZpZGVvLmdldFBob3RvUG9zdFZpZGVvTWFpblBhZ2UoaWR1c2VybG9naW5cclxuICAgICAgICAgICAgICAgICxjb3VudHJ5KVxyXG4gICAgICAgICAgICBjb25zdCBzb3J0ZGF0ZWFycmF5ID0gYXJyYXkuc29ydCgoYSwgYikgPT4gYi5kYXRlcHVibGlzaCAtIGEuZGF0ZXB1Ymxpc2gpXHJcbiAgICAgICAgICAgIC8vT3JkZXIgYnkgRGF0ZXMgZGVzY2VuZGluZ1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBvc3Qgb2Ygc29ydGRhdGVhcnJheSkge1xyXG4gICAgICAgICAgICAgICAgcG9zdC5EaWZmRGF0ZVB1Ymxpc2hEYXRlTm93KClcclxuICAgICAgICAgICAgICAgIHBvc3Quc2hvd0RpZmZEYXRlUHVibGlzaERhdGVOb3coKVxyXG4gICAgICAgICAgICAgICAgYXJyYXlkaWZmZGF0ZS5wdXNoKHBvc3QpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGFycmF5ZGlmZmRhdGUpO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9Il0sIm5hbWVzIjpbIkRhdGFQaG90b1Bvc3RWaWRlbyIsImNvcnMiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJhcnJheWRpZmZkYXRlIiwiaWR1c2VybG9naW4iLCJjb3VudHJ5IiwicXVlcnkiLCJhcnJheSIsImdldFBob3RvUG9zdFZpZGVvTWFpblBhZ2UiLCJzb3J0ZGF0ZWFycmF5Iiwic29ydCIsImEiLCJiIiwiZGF0ZXB1Ymxpc2giLCJwb3N0IiwiRGlmZkRhdGVQdWJsaXNoRGF0ZU5vdyIsInNob3dEaWZmRGF0ZVB1Ymxpc2hEYXRlTm93IiwicHVzaCIsInN0YXR1cyIsInNlbmQiLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/postvideoimage/getPhotoPostVideoMainPage.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/postvideoimage/getPhotoPostVideoMainPage.js"));
module.exports = __webpack_exports__;

})();