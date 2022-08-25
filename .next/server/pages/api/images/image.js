"use strict";
(() => {
var exports = {};
exports.id = 3202;
exports.ids = [3202];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 9612:
/***/ ((module) => {

module.exports = require("socialnetworkk/data/DataPhoto");

/***/ }),

/***/ 1520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ images_image)
});

// EXTERNAL MODULE: ./pages/api/cors.js + 1 modules
var cors = __webpack_require__(4392);
// EXTERNAL MODULE: external "socialnetworkk/data/DataPhoto"
var DataPhoto_ = __webpack_require__(9612);
;// CONCATENATED MODULE: external "socialnetworkk/entity/DTOPhoto"
const DTOPhoto_namespaceObject = require("socialnetworkk/entity/DTOPhoto");
;// CONCATENATED MODULE: ./pages/api/images/image.js



/* harmony default export */ async function images_image(req, res) {
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
            const { iduser , idalbum , title , description , urlimage  } = req.body;
            let dtophoto = new DTOPhoto_namespaceObject.DTOPhoto();
            dtophoto.user.iduser = iduser;
            dtophoto.albumphoto.idalbumphoto = idalbum;
            dtophoto.title = title;
            dtophoto.description = description;
            dtophoto.DateTimePublish = new Date();
            dtophoto.urlimage = urlimage;
            let addImage = await DataPhoto_.DataPhoto.addImages(dtophoto);
            if (addImage === -1) {
                throw new Error("The user does not exists");
            }
            if (addImage === -2) {
                throw new Error("The album of images does not exists");
            }
            return res.status(200).send("The image was added successfully");
        } catch (error1) {
            return res.status(500).send(error1.message);
        }
    }
    if (req.method === "DELETE") {
        await (0,cors["default"])(req, res);
        try {
            const data = req.body;
            let deletePhoto = await DataPhoto_.DataPhoto.deletePhoto(data.idimage);
            if (deletePhoto === -1) {
                throw new Error("The image does not exists");
            }
            return res.status(200).send("The image was deleted successfully");
        } catch (error2) {
            return res.status(500).send(error2.message);
        }
    }
    if (req.method === "GET") {
        await (0,cors["default"])(req, res);
        try {
            const { pid  } = req.query;
            let id = Number(pid);
            let getImage = await DataPhoto_.DataPhoto.getImage(id);
            if (getImage === -1) {
                throw new Error("The image does not exists");
            }
            getImage.DiffDatePublishDateNow();
            getImage.showDiffDatePublishDateNow();
            return res.status(200).send(getImage);
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
var __webpack_exports__ = __webpack_require__.X(0, [9987], () => (__webpack_exec__(1520)));
module.exports = __webpack_exports__;

})();