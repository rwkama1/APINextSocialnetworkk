"use strict";
(() => {
var exports = {};
exports.id = 9252;
exports.ids = [9252];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 6865:
/***/ ((module) => {

module.exports = require("socialnetworkk/data/DataMessage");

/***/ }),

/***/ 5636:
/***/ ((module) => {

module.exports = require("socialnetworkk/entity/DTOPost");

/***/ }),

/***/ 7689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4392);
/* harmony import */ var socialnetworkk_data_DataMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6865);
/* harmony import */ var socialnetworkk_data_DataMessage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socialnetworkk_data_DataMessage__WEBPACK_IMPORTED_MODULE_1__);
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
            const { iduserreceived , idusersender , title , text  } = req.body;
            let addMessage = await socialnetworkk_data_DataMessage__WEBPACK_IMPORTED_MODULE_1__.DataMessage.addMessage(iduserreceived, idusersender, title, text);
            if (addMessage === -1) {
                throw new Error("The user received does not exists");
            }
            if (addMessage === -2) {
                throw new Error("The user sender does not exists");
            }
            return res.status(200).send("The message was added successfully");
        } catch (error1) {
            return res.status(500).send(error1.message);
        }
    }
    if (req.method === "DELETE") {
        await (0,_cors__WEBPACK_IMPORTED_MODULE_0__["default"])(req, res);
        try {
            const { iduserreceived: iduserreceived1 , idusersender: idusersender1 , idmessage  } = req.body;
            let deleteMessage = await socialnetworkk_data_DataMessage__WEBPACK_IMPORTED_MODULE_1__.DataMessage.deleteMessage(iduserreceived1, idusersender1, idmessage);
            if (deleteMessage === -1) {
                throw new Error("The user received does not exists");
            }
            if (deleteMessage === -2) {
                throw new Error("The user sender does not exists");
            }
            if (deleteMessage === -3) {
                throw new Error("The message does not exists");
            }
            return res.status(200).send("The message was deleted successfully");
        } catch (error2) {
            return res.status(500).send(error2.message);
        }
    }
    if (req.method === "GET") {
        await (0,_cors__WEBPACK_IMPORTED_MODULE_0__["default"])(req, res);
        try {
            const { idmessage: idmessage1  } = req.query;
            let message = await socialnetworkk_data_DataMessage__WEBPACK_IMPORTED_MODULE_1__.DataMessage.getMessage(idmessage1);
            if (message === -1) {
                throw new Error("The message does not exists ");
            }
            message.DiffDatePublishDateNow();
            message.showDiffDatePublishDateNow();
            return res.status(200).send(message);
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
var __webpack_exports__ = __webpack_require__.X(0, [5390], () => (__webpack_exec__(7689)));
module.exports = __webpack_exports__;

})();