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
exports.id = "pages/api/message/markallMessagesasreadbyUser";
exports.ids = ["pages/api/message/markallMessagesasreadbyUser"];
exports.modules = {

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "socialnetworkk/data/DataMessage":
/*!**************************************************!*\
  !*** external "socialnetworkk/data/DataMessage" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("socialnetworkk/data/DataMessage");

/***/ }),

/***/ "socialnetworkk/entity/DTOPost":
/*!************************************************!*\
  !*** external "socialnetworkk/entity/DTOPost" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("socialnetworkk/entity/DTOPost");

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

/***/ "(api)/./pages/api/message/markallMessagesasreadbyUser.js":
/*!**********************************************************!*\
  !*** ./pages/api/message/markallMessagesasreadbyUser.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cors */ \"(api)/./pages/api/cors.js\");\n/* harmony import */ var socialnetworkk_data_DataMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socialnetworkk/data/DataMessage */ \"socialnetworkk/data/DataMessage\");\n/* harmony import */ var socialnetworkk_data_DataMessage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socialnetworkk_data_DataMessage__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socialnetworkk_entity_DTOPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socialnetworkk/entity/DTOPost */ \"socialnetworkk/entity/DTOPost\");\n/* harmony import */ var socialnetworkk_entity_DTOPost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socialnetworkk_entity_DTOPost__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    if (req.method === \"OPTIONS\") {\n        try {\n            return res.status(200).send(\"OK\");\n        } catch (error) {\n            return res.status(500).send(\"OPTION ERROR \" + error.message);\n        }\n    }\n    if (req.method === \"PUT\") {\n        await (0,_cors__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(req, res);\n        try {\n            const { iduserlogin  } = req.body;\n            let markallMessagesasreadbyUser = await socialnetworkk_data_DataMessage__WEBPACK_IMPORTED_MODULE_1__.DataMessage.markallMessagesasreadbyUser(iduserlogin);\n            if (markallMessagesasreadbyUser === -1) {\n                throw new Error(\"The user  does not exists\");\n            }\n            return res.status(200).send(\"The messages were  updated\");\n        } catch (error1) {\n            return res.status(500).send(error1.message);\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWVzc2FnZS9tYXJrYWxsTWVzc2FnZXNhc3JlYWRieVVzZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTJCO0FBQ21DO0FBQ047QUFHeEQsNkJBQWUsMENBQWdCRyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUV2QyxJQUFHRCxHQUFHLENBQUNFLE1BQU0sS0FBRyxTQUFTLEVBQ3pCO1FBQ0UsSUFDQTtZQUNJLE9BQU9ELEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3BDLENBQ0QsT0FBT0MsS0FBSyxFQUFFO1lBQ1osT0FBT0osR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxlQUFlLEdBQUNDLEtBQUssQ0FBQ0MsT0FBTyxDQUFDLENBQUM7U0FDNUQ7S0FDRjtJQUNELElBQUdOLEdBQUcsQ0FBQ0UsTUFBTSxLQUFHLEtBQUssRUFDckI7UUFDRSxNQUFNTCxpREFBSSxDQUFDRyxHQUFHLEVBQUVDLEdBQUcsQ0FBQztRQUNwQixJQUNBO1lBQ1EsTUFBTSxFQUFDTSxXQUFXLEdBQUMsR0FBR1AsR0FBRyxDQUFDUSxJQUFJO1lBQzlCLElBQUlDLDJCQUEyQixHQUFHLE1BQU1YLG9HQUNiLENBQUNTLFdBQVcsQ0FBQztZQUV4QyxJQUFJRSwyQkFBMkIsS0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDbEMsTUFBTSxJQUFJQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQzthQUNoRDtZQUVMLE9BQU9ULEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQztTQUM3RCxDQUNELE9BQU9DLE1BQUssRUFBRTtZQUNaLE9BQU9KLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNDLE1BQUssQ0FBQ0MsT0FBTyxDQUFDLENBQUM7U0FFNUM7S0FDRjtDQUVGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBpbmV4dHNvY2lhbG5ldHdvcmsvLi9wYWdlcy9hcGkvbWVzc2FnZS9tYXJrYWxsTWVzc2FnZXNhc3JlYWRieVVzZXIuanM/YzM3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ycyBmcm9tIFwiLi4vY29yc1wiO1xyXG5pbXBvcnQgeyBEYXRhTWVzc2FnZSB9IGZyb20gXCJzb2NpYWxuZXR3b3Jray9kYXRhL0RhdGFNZXNzYWdlXCI7XHJcbmltcG9ydCB7IERUT1Bvc3QgfSBmcm9tIFwic29jaWFsbmV0d29ya2svZW50aXR5L0RUT1Bvc3RcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxLCByZXMpIHtcclxuXHJcbiAgaWYocmVxLm1ldGhvZD09PVwiT1BUSU9OU1wiKVxyXG4gIHtcclxuICAgIHRyeVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChcIk9LXCIpXHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKFwiT1BUSU9OIEVSUk9SIFwiK2Vycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZihyZXEubWV0aG9kPT09XCJQVVRcIilcclxuICB7XHJcbiAgICBhd2FpdCBjb3JzKHJlcSwgcmVzKVxyXG4gICAgdHJ5XHJcbiAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtpZHVzZXJsb2dpbn0gPSByZXEuYm9keTtcclxuICAgICAgICAgICAgbGV0IG1hcmthbGxNZXNzYWdlc2FzcmVhZGJ5VXNlciA9IGF3YWl0IERhdGFNZXNzYWdlLlxyXG4gICAgICAgICAgICBtYXJrYWxsTWVzc2FnZXNhc3JlYWRieVVzZXIoaWR1c2VybG9naW4pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChtYXJrYWxsTWVzc2FnZXNhc3JlYWRieVVzZXI9PT0tMSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHVzZXIgIGRvZXMgbm90IGV4aXN0c1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoXCJUaGUgbWVzc2FnZXMgd2VyZSAgdXBkYXRlZFwiKTsgICBcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZXJyb3IubWVzc2FnZSk7ICAgIFxyXG4gICAgICBcclxuICAgIH1cclxuICB9XHJcblxyXG59Il0sIm5hbWVzIjpbImNvcnMiLCJEYXRhTWVzc2FnZSIsIkRUT1Bvc3QiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJzZW5kIiwiZXJyb3IiLCJtZXNzYWdlIiwiaWR1c2VybG9naW4iLCJib2R5IiwibWFya2FsbE1lc3NhZ2VzYXNyZWFkYnlVc2VyIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/message/markallMessagesasreadbyUser.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/message/markallMessagesasreadbyUser.js"));
module.exports = __webpack_exports__;

})();