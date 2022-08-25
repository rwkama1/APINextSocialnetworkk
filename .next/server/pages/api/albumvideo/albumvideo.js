"use strict";
(() => {
var exports = {};
exports.id = 645;
exports.ids = [645];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 876:
/***/ ((module) => {

module.exports = require("socialnetworkk/data/DataAlbumVideo");

/***/ }),

/***/ 1901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ albumvideo)
});

// EXTERNAL MODULE: ./pages/api/cors.js + 1 modules
var cors = __webpack_require__(4392);
// EXTERNAL MODULE: external "socialnetworkk/data/DataAlbumVideo"
var DataAlbumVideo_ = __webpack_require__(876);
;// CONCATENATED MODULE: external "socialnetworkk/entity/DTOAlbumVideos"
const DTOAlbumVideos_namespaceObject = require("socialnetworkk/entity/DTOAlbumVideos");
;// CONCATENATED MODULE: ./pages/api/albumvideo/albumvideo.js



/* harmony default export */ async function albumvideo(req, res) {
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
            let dtoalvideo = new DTOAlbumVideos_namespaceObject.DTOAlbumVideo();
            dtoalvideo.user.iduser = data.iduser;
            dtoalvideo.title = data.title;
            let addAlbumVideo = await DataAlbumVideo_.DataAlbumVideo.addAlbumVideo(dtoalvideo);
            if (addAlbumVideo === -1) {
                throw new Error("The user does not exists");
            }
            return res.status(200).send("The album of videos was registered successfully");
        } catch (error1) {
            return res.status(500).send(error1.message);
        }
    }
    if (req.method === "PUT") {
        await (0,cors["default"])(req, res);
        try {
            const data1 = req.body;
            let updateTitleAlbum = await DataAlbumVideo_.DataAlbumVideo.updateTitleAlbum(data1.idalbumvideo, data1.title);
            if (updateTitleAlbum === -1) {
                throw new Error("The album of videos does not exists");
            }
            return res.status(200).send("The title was updated successfully");
        } catch (error2) {
            return res.status(500).send(error2.message);
        }
    }
    if (req.method === "DELETE") {
        await (0,cors["default"])(req, res);
        try {
            const data2 = req.body;
            let deleteAlbum = await DataAlbumVideo_.DataAlbumVideo.deleteAlbum(data2.idalbumvideo);
            if (deleteAlbum === -1) {
                throw new Error("The album of videos does not exists");
            }
            return res.status(200).send("The album was deleted successfully");
        } catch (error3) {
            return res.status(500).send(error3.message);
        }
    }
    if (req.method === "GET") {
        await (0,cors["default"])(req, res);
        try {
            const { pidalbum  } = req.query;
            let getAlbumVideos = await DataAlbumVideo_.DataAlbumVideo.getAlbumVideos(pidalbum);
            if (getAlbumVideos === -1) {
                throw new Error("The album of videos does not exists");
            }
            return res.status(200).send(getAlbumVideos);
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
var __webpack_exports__ = __webpack_require__.X(0, [3763], () => (__webpack_exec__(1901)));
module.exports = __webpack_exports__;

})();