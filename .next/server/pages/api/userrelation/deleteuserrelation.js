"use strict";
(() => {
var exports = {};
exports.id = 6334;
exports.ids = [6334];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 8108:
/***/ ((module) => {

module.exports = require("socialnetworkk/data/DataUserRelation");

/***/ }),

/***/ 6343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4392);
/* harmony import */ var socialnetworkk_data_DataUserRelation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8108);
/* harmony import */ var socialnetworkk_data_DataUserRelation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socialnetworkk_data_DataUserRelation__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {
    if (req.method === "OPTIONS") {
        try {
            return res.status(200).send("OK");
        } catch (error) {
            return res.status(500).send("OPTION ERROR " + error.message);
        }
    }
    if (req.method === "DELETE") {
        await (0,_cors__WEBPACK_IMPORTED_MODULE_0__["default"])(req, res);
        try {
            const data = req.body;
            let deleteuserrelation1 = await socialnetworkk_data_DataUserRelation__WEBPACK_IMPORTED_MODULE_1__.DataUserRelation.deleteUserRelation(data.iduser, data.idfriend);
            if (deleteuserrelation1 === -1) {
                throw new Error("The user does not exists");
            }
            if (deleteuserrelation1 === -2) {
                throw new Error("The friend does not exists");
            }
            if (deleteuserrelation1 === -3) {
                throw new Error("The users relation does not exists");
            }
            return res.status(200).send("Friend request has been deleted");
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
var __webpack_exports__ = __webpack_require__.X(0, [4877], () => (__webpack_exec__(6343)));
module.exports = __webpack_exports__;

})();