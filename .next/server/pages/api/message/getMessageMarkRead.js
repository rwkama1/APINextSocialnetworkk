"use strict";
(() => {
var exports = {};
exports.id = 3250;
exports.ids = [3250];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 6865:
/***/ ((module) => {

module.exports = require("socialnetworkk/data/DataMessage");

/***/ }),

/***/ 445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var socialnetworkk_data_DataMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6865);
/* harmony import */ var socialnetworkk_data_DataMessage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socialnetworkk_data_DataMessage__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4392);


/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {
    if (req.method === "GET") {
        await (0,_cors__WEBPACK_IMPORTED_MODULE_1__["default"])(req, res);
        try {
            const { idmessage  } = req.query;
            let getMessageMarkRead = await socialnetworkk_data_DataMessage__WEBPACK_IMPORTED_MODULE_0__.DataMessage.getMessageMarkRead(idmessage);
            if (getMessageMarkRead === -1) {
                throw new Error("The message does not exists ");
            }
            getMessageMarkRead.DiffDatePublishDateNow();
            getMessageMarkRead.showDiffDatePublishDateNow();
            return res.status(200).send(getMessageMarkRead);
        } catch (error) {
            return res.status(500).send(error.message);
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
var __webpack_exports__ = __webpack_require__.X(0, [5390], () => (__webpack_exec__(445)));
module.exports = __webpack_exports__;

})();