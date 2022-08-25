"use strict";
(() => {
var exports = {};
exports.id = 3833;
exports.ids = [3833];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 8650:
/***/ ((module) => {

module.exports = require("socialnetworkk/data/DataPost");

/***/ }),

/***/ 5636:
/***/ ((module) => {

module.exports = require("socialnetworkk/entity/DTOPost");

/***/ }),

/***/ 4699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4392);
/* harmony import */ var socialnetworkk_data_DataPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8650);
/* harmony import */ var socialnetworkk_data_DataPost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socialnetworkk_data_DataPost__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var socialnetworkk_entity_DTOPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5636);
/* harmony import */ var socialnetworkk_entity_DTOPost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socialnetworkk_entity_DTOPost__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {
    if (req.method === "OPTIONS") {
        try {
            return res.status(200).send("OK");
        } catch (error) {
            return res.status(500).send("OPTION ERROR " + error.message);
        }
    }
    if (req.method === "POST") {
        await (0,_cors__WEBPACK_IMPORTED_MODULE_0__["default"])(req, res);
        try {
            const { iduser , title , description  } = req.body;
            let dtopost = new socialnetworkk_entity_DTOPost__WEBPACK_IMPORTED_MODULE_2__.DTOPost();
            dtopost.user.iduser = iduser;
            dtopost.title = title;
            dtopost.description = description;
            let addPost = await socialnetworkk_data_DataPost__WEBPACK_IMPORTED_MODULE_1__.DataPost.addPost(dtopost);
            if (addPost === -1) {
                throw new Error("The user does not exists");
            }
            return res.status(200).send("The post was added successfully");
        } catch (error1) {
            return res.status(500).send(error1.message);
        }
    }
    if (req.method === "DELETE") {
        await (0,_cors__WEBPACK_IMPORTED_MODULE_0__["default"])(req, res);
        try {
            const { idpost  } = req.body;
            let deletePost = await socialnetworkk_data_DataPost__WEBPACK_IMPORTED_MODULE_1__.DataPost.deletePost(idpost);
            if (deletePost === -1) {
                throw new Error("The post does not exists");
            }
            return res.status(200).send("The post was deleted successfully");
        } catch (error2) {
            return res.status(500).send(error2.message);
        }
    }
    if (req.method === "GET") {
        await (0,_cors__WEBPACK_IMPORTED_MODULE_0__["default"])(req, res);
        try {
            const { pid  } = req.query;
            let getPost = await socialnetworkk_data_DataPost__WEBPACK_IMPORTED_MODULE_1__.DataPost.getPost(pid);
            if (getPost === -1) {
                throw new Error("The Post does not exists");
            }
            getPost.DiffDatePublishDateNow();
            getPost.showDiffDatePublishDateNow();
            return res.status(200).send(getPost);
        } catch (error3) {
            return res.status(500).send(error3.message);
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
var __webpack_exports__ = __webpack_require__.X(0, [4008], () => (__webpack_exec__(4699)));
module.exports = __webpack_exports__;

})();