"use strict";
(() => {
var exports = {};
exports.id = 8012;
exports.ids = [8012];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 9612:
/***/ ((module) => {

module.exports = require("socialnetworkk/data/DataPhoto");

/***/ }),

/***/ 284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var socialnetworkk_data_DataPhoto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9612);
/* harmony import */ var socialnetworkk_data_DataPhoto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socialnetworkk_data_DataPhoto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4392);


/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {
    if (req.method === "OPTIONS") {
        try {
            return res.status(200).send("OK");
        } catch (error) {
            return res.status(500).send("OPTION ERROR " + error.message);
        }
    }
    if (req.method === "PUT") {
        await (0,_cors__WEBPACK_IMPORTED_MODULE_1__["default"])(req, res);
        try {
            const { idimage , description , title  } = req.body;
            let updateTitleDescriptionPhoto = await socialnetworkk_data_DataPhoto__WEBPACK_IMPORTED_MODULE_0__.DataPhoto.updateTitleDescriptionPhoto(idimage, description, title);
            if (updateTitleDescriptionPhoto === -1) {
                throw new Error("The image does not exists");
            }
            return res.status(200).send("The image was updated successfully");
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
var __webpack_exports__ = __webpack_require__.X(0, [9987], () => (__webpack_exec__(284)));
module.exports = __webpack_exports__;

})();