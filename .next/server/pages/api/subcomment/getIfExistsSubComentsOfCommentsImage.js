"use strict";
(() => {
var exports = {};
exports.id = 7024;
exports.ids = [7024];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 849:
/***/ ((module) => {

module.exports = require("socialnetworkk/data/DataSubComment");

/***/ }),

/***/ 6471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var socialnetworkk_data_DataSubComment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(849);
/* harmony import */ var socialnetworkk_data_DataSubComment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socialnetworkk_data_DataSubComment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4392);


/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {
    if (req.method === "GET") {
        await (0,_cors__WEBPACK_IMPORTED_MODULE_1__["default"])(req, res);
        try {
            const { idimage  } = req.query;
            let arraydiff = [];
            let array = await socialnetworkk_data_DataSubComment__WEBPACK_IMPORTED_MODULE_0__.DataSubComment.getIfExistsSubComentsOfCommentsImage(idimage);
            for (const subcommentimg of array){
                if (subcommentimg.withsubcomments === 1) {
                    subcommentimg.DiffDatePublishDateNowComment();
                    subcommentimg.showDiffDatePublishDateNowComment();
                    subcommentimg.DiffDatePublishDateNowSubComment();
                    subcommentimg.showDiffDatePublishDateNowSubComment();
                } else {
                    subcommentimg.DiffDatePublishDateNowComment();
                    subcommentimg.showDiffDatePublishDateNowComment();
                }
                arraydiff.push(subcommentimg);
            }
            return res.status(200).send(arraydiff);
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
var __webpack_exports__ = __webpack_require__.X(0, [9380], () => (__webpack_exec__(6471)));
module.exports = __webpack_exports__;

})();