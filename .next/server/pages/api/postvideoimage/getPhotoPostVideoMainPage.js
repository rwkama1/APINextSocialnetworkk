"use strict";
(() => {
var exports = {};
exports.id = 212;
exports.ids = [212];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 4610:
/***/ ((module) => {

module.exports = require("socialnetworkk/data/DataPhotoPostVideo");

/***/ }),

/***/ 4762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var socialnetworkk_data_DataPhotoPostVideo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4610);
/* harmony import */ var socialnetworkk_data_DataPhotoPostVideo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socialnetworkk_data_DataPhotoPostVideo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4392);


/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {
    if (req.method === "GET") {
        await (0,_cors__WEBPACK_IMPORTED_MODULE_1__["default"])(req, res);
        try {
            let arraydiffdate = [];
            const { iduserlogin , country  } = req.query;
            let array = await socialnetworkk_data_DataPhotoPostVideo__WEBPACK_IMPORTED_MODULE_0__.DataPhotoPostVideo.getPhotoPostVideoMainPage(iduserlogin, country);
            const sortdatearray = array.sort((a, b)=>b.datepublish - a.datepublish);
            //Order by Dates descending
            for (const post of sortdatearray){
                post.DiffDatePublishDateNow();
                post.showDiffDatePublishDateNow();
                arraydiffdate.push(post);
            }
            return res.status(200).send(arraydiffdate);
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
var __webpack_exports__ = __webpack_require__.X(0, [4867], () => (__webpack_exec__(4762)));
module.exports = __webpack_exports__;

})();