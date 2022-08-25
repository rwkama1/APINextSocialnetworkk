"use strict";
(() => {
var exports = {};
exports.id = 9811;
exports.ids = [9811];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 4672:
/***/ ((module) => {

module.exports = require("socialnetworkk/security/LoginUser");

/***/ }),

/***/ 2242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var socialnetworkk_security_LoginUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4672);
/* harmony import */ var socialnetworkk_security_LoginUser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socialnetworkk_security_LoginUser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4392);


/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {
    if (req.method === "OPTIONS") {
        try {
            return res.status(200).send("OK");
        } catch (error) {
            return res.status(500).send("OPTION ERROR " + error.message);
        }
    }
    if (req.method === "POST") {
        await (0,_cors__WEBPACK_IMPORTED_MODULE_1__["default"])(req, res);
        try {
            const data = req.body;
            let loginuser = await socialnetworkk_security_LoginUser__WEBPACK_IMPORTED_MODULE_0__.LoginUser.loginUser(data.username, data.password);
            return res.status(200).send(loginuser);
        } catch (error1) {
            return res.status(500).send(error1.message);
        }
    }
    if (req.method === "GET") {
        await (0,_cors__WEBPACK_IMPORTED_MODULE_1__["default"])(req, res);
        try {
            let getuserlogin = await socialnetworkk_security_LoginUser__WEBPACK_IMPORTED_MODULE_0__.LoginUser.getuserlogin();
            return res.status(200).send(getuserlogin);
        } catch (error2) {
            return res.status(500).send(error2.message);
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
var __webpack_exports__ = __webpack_require__.X(0, [4703], () => (__webpack_exec__(2242)));
module.exports = __webpack_exports__;

})();