"use strict";
(() => {
var exports = {};
exports.id = 7201;
exports.ids = [7201];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 6500:
/***/ ((module) => {

module.exports = require("socialnetworkk/data/DataUser");

/***/ }),

/***/ 8649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var socialnetworkk_data_DataUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6500);
/* harmony import */ var socialnetworkk_data_DataUser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socialnetworkk_data_DataUser__WEBPACK_IMPORTED_MODULE_0__);
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
            const data = req.body;
            let insertProfilePicture = await socialnetworkk_data_DataUser__WEBPACK_IMPORTED_MODULE_0__.DataUser.insertProfilePicture(data.imgurl, data.username);
            if (insertProfilePicture === -1) {
                throw new Error("The user name does not exists");
            }
            return res.status(200).send("The Profile Picture was added successfully");
        } catch (error1) {
            return res.status(500).send("Could not insert profile picture user: " + error1.message);
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
var __webpack_exports__ = __webpack_require__.X(0, [4392], () => (__webpack_exec__(8649)));
module.exports = __webpack_exports__;

})();