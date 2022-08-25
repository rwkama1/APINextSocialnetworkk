"use strict";
(() => {
var exports = {};
exports.id = 9977;
exports.ids = [9977];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 6500:
/***/ ((module) => {

module.exports = require("socialnetworkk/data/DataUser");

/***/ }),

/***/ 8881:
/***/ ((module) => {

module.exports = require("socialnetworkk/security/hashPassword");

/***/ }),

/***/ 7874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var socialnetworkk_data_DataUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6500);
/* harmony import */ var socialnetworkk_data_DataUser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socialnetworkk_data_DataUser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socialnetworkk_security_hashPassword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8881);
/* harmony import */ var socialnetworkk_security_hashPassword__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socialnetworkk_security_hashPassword__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4392);



/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {
    if (req.method === "OPTIONS") {
        try {
            return res.status(200).send("OK");
        } catch (error) {
            return res.status(500).send("OPTION ERROR " + error.message);
        }
    }
    if (req.method === "PUT") {
        await (0,_cors__WEBPACK_IMPORTED_MODULE_2__["default"])(req, res);
        try {
            const data = req.body;
            const passh = socialnetworkk_security_hashPassword__WEBPACK_IMPORTED_MODULE_1__.HashPassword.hashPassword(data.password);
            let hashpassword = passh.hash;
            let salt = passh.salt;
            let updateusernamepassword = await socialnetworkk_data_DataUser__WEBPACK_IMPORTED_MODULE_0__.DataUser.updateUserNamePassword(data.username, hashpassword, salt, data.iduser);
            if (updateusernamepassword === -1) {
                throw new Error("The user does not exists");
            }
            if (updateusernamepassword === -2) {
                throw new Error("The username already exists");
            }
            return res.status(200).send("The username and password updated successfully");
        } catch (error1) {
            return res.status(500).send("Could not update username password user: " + error1.message);
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
var __webpack_exports__ = __webpack_require__.X(0, [4392], () => (__webpack_exec__(7874)));
module.exports = __webpack_exports__;

})();