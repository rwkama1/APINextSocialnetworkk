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
exports.id = "pages/api/video/updateVisibilityVideo";
exports.ids = ["pages/api/video/updateVisibilityVideo"];
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

/***/ "socialnetworkk/entity/DTOVideo":
/*!*************************************************!*\
  !*** external "socialnetworkk/entity/DTOVideo" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("socialnetworkk/entity/DTOVideo");

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

/***/ "(api)/./pages/api/video/updateVisibilityVideo.js":
/*!**************************************************!*\
  !*** ./pages/api/video/updateVisibilityVideo.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cors */ \"(api)/./pages/api/cors.js\");\n/* harmony import */ var socialnetworkk_data_DataVideo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socialnetworkk/data/DataVideo */ \"socialnetworkk/data/DataVideo\");\n/* harmony import */ var socialnetworkk_data_DataVideo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socialnetworkk_data_DataVideo__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socialnetworkk_entity_DTOVideo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socialnetworkk/entity/DTOVideo */ \"socialnetworkk/entity/DTOVideo\");\n/* harmony import */ var socialnetworkk_entity_DTOVideo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socialnetworkk_entity_DTOVideo__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    if (req.method === \"OPTIONS\") {\n        try {\n            return res.status(200).send(\"OK\");\n        } catch (error) {\n            return res.status(500).send(\"OPTION ERROR \" + error.message);\n        }\n    }\n    if (req.method === \"PUT\") {\n        await (0,_cors__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(req, res);\n        try {\n            const { idvideo , visibility  } = req.body;\n            let updateVisibilityVideo = await socialnetworkk_data_DataVideo__WEBPACK_IMPORTED_MODULE_1__.DataVideo.updateVisibilityVideo(idvideo, visibility);\n            if (updateVisibilityVideo === -1) {\n                throw new Error(\"The video does not exists\");\n            }\n            return res.status(200).send(\"The visibility was updated successfully\");\n        } catch (error1) {\n            return res.status(500).send(error1.message);\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdmlkZW8vdXBkYXRlVmlzaWJpbGl0eVZpZGVvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQjtBQUMrQjtBQUNBO0FBRzFELDZCQUFlLDBDQUFnQkcsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFFdkMsSUFBR0QsR0FBRyxDQUFDRSxNQUFNLEtBQUcsU0FBUyxFQUN6QjtRQUNFLElBQ0E7WUFDSSxPQUFPRCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztTQUNwQyxDQUNELE9BQU9DLEtBQUssRUFBRTtZQUNaLE9BQU9KLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsZUFBZSxHQUFDQyxLQUFLLENBQUNDLE9BQU8sQ0FBQyxDQUFDO1NBQzVEO0tBQ0Y7SUFDRCxJQUFHTixHQUFHLENBQUNFLE1BQU0sS0FBRyxLQUFLLEVBQ3JCO1FBQ0UsTUFBTUwsaURBQUksQ0FBQ0csR0FBRyxFQUFFQyxHQUFHLENBQUM7UUFDcEIsSUFDQTtZQUNJLE1BQU0sRUFBQ00sT0FBTyxHQUFDQyxVQUFVLEdBQUMsR0FBR1IsR0FBRyxDQUFDUyxJQUFJO1lBQ3JDLElBQUlDLHFCQUFxQixHQUFHLE1BQU1aLDBGQUErQixDQUNoRVMsT0FBTyxFQUFDQyxVQUFVLENBQUM7WUFDcEIsSUFBSUUscUJBQXFCLEtBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQzVCLE1BQU0sSUFBSUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7YUFDNUM7WUFFTCxPQUFPVixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLHlDQUF5QyxDQUFDLENBQUM7U0FDMUUsQ0FDRCxPQUFPQyxNQUFLLEVBQUU7WUFDWixPQUFPSixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDQyxNQUFLLENBQUNDLE9BQU8sQ0FBQyxDQUFDO1NBRTVDO0tBQ0Y7Q0FHRiIsInNvdXJjZXMiOlsid2VicGFjazovL2FwaW5leHRzb2NpYWxuZXR3b3JrLy4vcGFnZXMvYXBpL3ZpZGVvL3VwZGF0ZVZpc2liaWxpdHlWaWRlby5qcz83MWRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb3JzIGZyb20gXCIuLi9jb3JzXCI7XHJcbmltcG9ydCB7IERhdGFWaWRlbyB9IGZyb20gXCJzb2NpYWxuZXR3b3Jray9kYXRhL0RhdGFWaWRlb1wiO1xyXG5pbXBvcnQgeyBEVE9WaWRlbyB9IGZyb20gXCJzb2NpYWxuZXR3b3Jray9lbnRpdHkvRFRPVmlkZW9cIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxLCByZXMpIHtcclxuXHJcbiAgaWYocmVxLm1ldGhvZD09PVwiT1BUSU9OU1wiKVxyXG4gIHtcclxuICAgIHRyeVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChcIk9LXCIpXHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKFwiT1BUSU9OIEVSUk9SIFwiK2Vycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZihyZXEubWV0aG9kPT09XCJQVVRcIilcclxuICB7XHJcbiAgICBhd2FpdCBjb3JzKHJlcSwgcmVzKVxyXG4gICAgdHJ5XHJcbiAgICB7XHJcbiAgICAgICAgY29uc3Qge2lkdmlkZW8sdmlzaWJpbGl0eX0gPSByZXEuYm9keTtcclxuICAgICAgICBsZXQgdXBkYXRlVmlzaWJpbGl0eVZpZGVvID0gYXdhaXQgRGF0YVZpZGVvLnVwZGF0ZVZpc2liaWxpdHlWaWRlb1xyXG4gICAgICAgIChpZHZpZGVvLHZpc2liaWxpdHkpO1xyXG4gICAgICAgIGlmICh1cGRhdGVWaXNpYmlsaXR5VmlkZW89PT0tMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgdmlkZW8gZG9lcyBub3QgZXhpc3RzXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChcIlRoZSB2aXNpYmlsaXR5IHdhcyB1cGRhdGVkIHN1Y2Nlc3NmdWxseVwiKTsgICBcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZXJyb3IubWVzc2FnZSk7ICAgIFxyXG4gICAgICBcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiBcclxufSJdLCJuYW1lcyI6WyJjb3JzIiwiRGF0YVZpZGVvIiwiRFRPVmlkZW8iLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJzZW5kIiwiZXJyb3IiLCJtZXNzYWdlIiwiaWR2aWRlbyIsInZpc2liaWxpdHkiLCJib2R5IiwidXBkYXRlVmlzaWJpbGl0eVZpZGVvIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/video/updateVisibilityVideo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/video/updateVisibilityVideo.js"));
module.exports = __webpack_exports__;

})();