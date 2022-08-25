"use strict";
(() => {
var exports = {};
exports.id = 8447;
exports.ids = [8447];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 7882:
/***/ ((module) => {

module.exports = require("socialnetworkk/data/DataVideo");

/***/ }),

/***/ 9298:
/***/ ((module) => {

module.exports = require("socialnetworkk/entity/DTOVideo");

/***/ }),

/***/ 8747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4392);
/* harmony import */ var socialnetworkk_data_DataVideo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7882);
/* harmony import */ var socialnetworkk_data_DataVideo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socialnetworkk_data_DataVideo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var socialnetworkk_entity_DTOVideo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9298);
/* harmony import */ var socialnetworkk_entity_DTOVideo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socialnetworkk_entity_DTOVideo__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {
    if (req.method === "OPTIONS") {
        try {
            return res.status(200).send("OK");
        } catch (error) {
            return res.status(500).send("OPTION ERROR " + error.message);
        }
    }
    if (req.method === "PUT") {
        await (0,_cors__WEBPACK_IMPORTED_MODULE_0__["default"])(req, res);
        try {
            const { idvideo , description , title  } = req.body;
            let updateTitleDescriptionVideo = await socialnetworkk_data_DataVideo__WEBPACK_IMPORTED_MODULE_1__.DataVideo.updateTitleDescriptionVideo(idvideo, description, title);
            if (updateTitleDescriptionVideo === -1) {
                throw new Error("The video does not exists");
            }
            return res.status(200).send("The video was updated successfully");
        } catch (error1) {
            return res.status(500).send(error1.message);
        }
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4372], () => (__webpack_exec__(8747)));
module.exports = __webpack_exports__;

})();