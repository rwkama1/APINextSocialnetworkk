"use strict";
(() => {
var exports = {};
exports.id = 3994;
exports.ids = [3994];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 876:
/***/ ((module) => {

module.exports = require("socialnetworkk/data/DataAlbumVideo");

/***/ }),

/***/ 9329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var socialnetworkk_data_DataAlbumVideo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(876);
/* harmony import */ var socialnetworkk_data_DataAlbumVideo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socialnetworkk_data_DataAlbumVideo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4392);


/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {
    if (req.method === "GET") {
        await (0,_cors__WEBPACK_IMPORTED_MODULE_1__["default"])(req, res);
        try {
            const { title , piduser  } = req.query;
            let getAlbumVideoByTitleUser = await socialnetworkk_data_DataAlbumVideo__WEBPACK_IMPORTED_MODULE_0__.DataAlbumVideo.getAlbumVideoByTitleUser(title, piduser);
            return res.status(200).send(getAlbumVideoByTitleUser);
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
var __webpack_exports__ = __webpack_require__.X(0, [3763], () => (__webpack_exec__(9329)));
module.exports = __webpack_exports__;

})();