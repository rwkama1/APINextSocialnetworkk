"use strict";
(() => {
var exports = {};
exports.id = 4083;
exports.ids = [4083];
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

/***/ 5279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ user)
});

// EXTERNAL MODULE: ./pages/api/cors.js + 1 modules
var cors = __webpack_require__(4392);
// EXTERNAL MODULE: external "socialnetworkk/data/DataUser"
var DataUser_ = __webpack_require__(6500);
;// CONCATENATED MODULE: external "socialnetworkk/entity/DTOUser"
const DTOUser_namespaceObject = require("socialnetworkk/entity/DTOUser");
// EXTERNAL MODULE: external "socialnetworkk/security/hashPassword"
var hashPassword_ = __webpack_require__(8881);
;// CONCATENATED MODULE: ./pages/api/user/user.js




/* harmony default export */ async function user(req, res) {
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
            let dtouser = new DTOUser_namespaceObject.DTOUser();
            dtouser.name = data.name;
            dtouser.nick = data.nick;
            dtouser.userrname = data.userrname;
            dtouser.password = data.password;
            dtouser.country = data.country;
            dtouser.datebirth = new Date(data.datebirth);
            dtouser.email = data.email;
            const passh = hashPassword_.HashPassword.hashPassword(dtouser.password);
            dtouser.password = passh.hash;
            dtouser.hash = passh.salt;
            let registeruser = await DataUser_.DataUser.registerUser(dtouser);
            if (registeruser === -1) {
                throw new Error("The username already exists");
            }
            return res.status(200).send("The user registered successfully");
        } catch (error1) {
            return res.status(500).send("Could not add user: " + error1.message);
        }
    }
    if (req.method === "PUT") {
        await (0,cors["default"])(req, res);
        try {
            const data1 = req.body;
            let dtouserupdate = new DTOUser_namespaceObject.DTOUser();
            dtouserupdate.iduser = data1.iduser;
            dtouserupdate.name = data1.name;
            dtouserupdate.nick = data1.nick;
            dtouserupdate.datebirth = new Date(data1.datebirth);
            dtouserupdate.email = data1.email;
            dtouserupdate.address = data1.address;
            dtouserupdate.ocupattion = data1.ocupattion;
            dtouserupdate.website = data1.website;
            dtouserupdate.gender = data1.gender;
            dtouserupdate.city = data1.city;
            dtouserupdate.province = data1.province;
            dtouserupdate.urlfacebook = data1.urlfacebook;
            dtouserupdate.urlinstagram = data1.urlinstagram;
            dtouserupdate.urllinkedin = data1.urllinkedin;
            dtouserupdate.urltwitter = data1.urltwitter;
            dtouserupdate.martialstatus = data1.martialstatus;
            dtouserupdate.description = data1.description;
            dtouserupdate.country = data1.country;
            let updateUser = await DataUser_.DataUser.updateUser(dtouserupdate);
            if (updateUser === -1) {
                throw new Error("The user does not exists");
            }
            return res.status(200).send("The user updated successfully");
        } catch (error2) {
            return res.status(500).send("Could not update user: " + error2.message);
        }
    }
    if (req.method === "DELETE") {
        await (0,cors["default"])(req, res);
        try {
            const data2 = req.body;
            let deleteuser = await DataUser_.DataUser.deleteUser(data2.iduser);
            if (deleteuser === -1) {
                throw new Error("The user does not exists");
            }
            return res.status(200).send("The user was successfully unsubscribed");
        } catch (error3) {
            return res.status(500).send("Could not DELETE user: " + error3.message);
        }
    }
    if (req.method === "GET") {
        await (0,cors["default"])(req, res);
        try {
            const { pid  } = req.query;
            let id = Number(pid);
            let getuser = await DataUser_.DataUser.getUser(id);
            if (getuser === -1) {
                throw new Error("The user name does not exists");
            }
            return res.status(200).send(getuser);
        } catch (error4) {
            return res.status(500).send(error4.message);
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
var __webpack_exports__ = __webpack_require__.X(0, [4392], () => (__webpack_exec__(5279)));
module.exports = __webpack_exports__;

})();