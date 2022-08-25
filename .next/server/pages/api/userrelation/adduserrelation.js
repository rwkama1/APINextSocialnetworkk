"use strict";
(() => {
var exports = {};
exports.id = 341;
exports.ids = [341];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 8108:
/***/ ((module) => {

module.exports = require("socialnetworkk/data/DataUserRelation");

/***/ }),

/***/ 6275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ adduserrelation)
});

// EXTERNAL MODULE: ./pages/api/cors.js + 1 modules
var cors = __webpack_require__(4392);
// EXTERNAL MODULE: external "socialnetworkk/data/DataUserRelation"
var DataUserRelation_ = __webpack_require__(8108);
;// CONCATENATED MODULE: external "socialnetworkk/entity/DTOUserRelation"
const DTOUserRelation_namespaceObject = require("socialnetworkk/entity/DTOUserRelation");
;// CONCATENATED MODULE: ./pages/api/userrelation/adduserrelation.js



/* harmony default export */ async function adduserrelation(req, res) {
    if (req.method === "OPTIONS") {
        try {
            return res.status(200).send("OK");
        } catch (error) {
            return res.status(500).send("OPTION ERROR " + error.message);
        }
    }
    if (req.method === "POST") {
        await (0,cors["default"])(req, res);
        try {
            const data = req.body;
            let dtour = new DTOUserRelation_namespaceObject.DTOUserRelation();
            dtour.user.iduser = data.iduser;
            dtour.friend.iduser = data.idfriend;
            let addUserRelation1 = await DataUserRelation_.DataUserRelation.addUserRelation(dtour);
            if (addUserRelation1 === -1) {
                throw new Error("The user does not exists");
            }
            if (addUserRelation1 === -2) {
                throw new Error("The friend does not exists");
            }
            if (addUserRelation1 === -3) {
                throw new Error("The users relation already exists");
            }
            return res.status(200).send("Friend request has been sent");
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
var __webpack_exports__ = __webpack_require__.X(0, [4877], () => (__webpack_exec__(6275)));
module.exports = __webpack_exports__;

})();