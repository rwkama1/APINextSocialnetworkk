"use strict";
(() => {
var exports = {};
exports.id = 9394;
exports.ids = [9394];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 7882:
/***/ ((module) => {

module.exports = require("socialnetworkk/data/DataVideo");

/***/ }),

/***/ 9298:
/***/ ((module) => {

module.exports = require("socialnetworkk/entity/DTOVideo");

/***/ }),

/***/ 962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4392);
/* harmony import */ var socialnetworkk_data_DataVideo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7882);
/* harmony import */ var socialnetworkk_data_DataVideo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socialnetworkk_data_DataVideo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var socialnetworkk_entity_DTOVideo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9298);
/* harmony import */ var socialnetworkk_entity_DTOVideo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socialnetworkk_entity_DTOVideo__WEBPACK_IMPORTED_MODULE_2__);



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
            const { iduser , idalbum , title , description , urlvideo  } = req.body;
            let dtovid = new socialnetworkk_entity_DTOVideo__WEBPACK_IMPORTED_MODULE_2__.DTOVideo();
            dtovid.user.iduser = iduser;
            dtovid.albumvideo.idalbumvideo = idalbum;
            dtovid.title = title;
            dtovid.description = description;
            dtovid.DateTimePublish = new Date();
            dtovid.urlvideo = urlvideo;
            let addVideo = await socialnetworkk_data_DataVideo__WEBPACK_IMPORTED_MODULE_1__.DataVideo.addVideo(dtovid);
            if (addVideo === -1) {
                throw new Error("The user does not exists");
            }
            if (addVideo === -2) {
                throw new Error("The album of videos does not exists");
            }
            return res.status(200).send("The video was added successfully");
        } catch (error1) {
            return res.status(500).send(error1.message);
        }
    }
    if (req.method === "DELETE") {
        await (0,_cors__WEBPACK_IMPORTED_MODULE_0__["default"])(req, res);
        try {
            const data = req.body;
            let deleteVideo = await socialnetworkk_data_DataVideo__WEBPACK_IMPORTED_MODULE_1__.DataVideo.deleteVideo(data.idvideo);
            if (deleteVideo === -1) {
                throw new Error("The video does not exists");
            }
            return res.status(200).send("The video was deleted successfully");
        } catch (error2) {
            return res.status(500).send(error2.message);
        }
    }
    if (req.method === "GET") {
        await (0,_cors__WEBPACK_IMPORTED_MODULE_0__["default"])(req, res);
        try {
            const { pid  } = req.query;
            let getVideo = await socialnetworkk_data_DataVideo__WEBPACK_IMPORTED_MODULE_1__.DataVideo.getVideo(pid);
            if (getVideo === -1) {
                throw new Error("The video does not exists");
            }
            getVideo.DiffDatePublishDateNow();
            getVideo.showDiffDatePublishDateNow();
            return res.status(200).send(getVideo);
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
var __webpack_exports__ = __webpack_require__.X(0, [4372], () => (__webpack_exec__(962)));
module.exports = __webpack_exports__;

})();