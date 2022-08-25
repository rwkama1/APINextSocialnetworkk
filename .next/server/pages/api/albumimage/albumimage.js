"use strict";
(() => {
var exports = {};
exports.id = 9497;
exports.ids = [9497];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 2534:
/***/ ((module) => {

module.exports = require("socialnetworkk/data/DataAlbumImage");

/***/ }),

/***/ 7950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ albumimage)
});

// EXTERNAL MODULE: ./pages/api/cors.js + 1 modules
var cors = __webpack_require__(4392);
// EXTERNAL MODULE: external "socialnetworkk/data/DataAlbumImage"
var DataAlbumImage_ = __webpack_require__(2534);
;// CONCATENATED MODULE: external "socialnetworkk/entity/DTOAlbumPhoto"
const DTOAlbumPhoto_namespaceObject = require("socialnetworkk/entity/DTOAlbumPhoto");
;// CONCATENATED MODULE: ./pages/api/albumimage/albumimage.js



/* harmony default export */ async function albumimage(req, res) {
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
            let dtoalbumimage = new DTOAlbumPhoto_namespaceObject.DTOAlbumPhoto();
            dtoalbumimage.user.iduser = data.iduser;
            dtoalbumimage.title = data.title;
            let addAlbumImage = await DataAlbumImage_.DataAlbumImages.addAlbumImage(dtoalbumimage);
            if (addAlbumImage === -1) {
                throw new Error("The user does not exists");
            }
            return res.status(200).send("The album of images was registered successfully");
        } catch (error1) {
            return res.status(500).send(error1.message);
        }
    }
    if (req.method === "PUT") {
        await (0,cors["default"])(req, res);
        try {
            const data1 = req.body;
            let updateTitleAlbumImage = await DataAlbumImage_.DataAlbumImages.updateTitleAlbum(data1.idalbum, data1.title);
            if (updateTitleAlbumImage === -1) {
                throw new Error("The album of images does not exists");
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
            let deleteAlbum = await DataAlbumImage_.DataAlbumImages.deleteAlbum(data2.idalbum);
            if (deleteAlbum === -1) {
                throw new Error("The album of images does not exists");
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
            let getAlbumImage = await DataAlbumImage_.DataAlbumImages.getAlbumImage(pidalbum);
            if (getAlbumImage === -1) {
                throw new Error("The album of images does not exists");
            }
            return res.status(200).send(getAlbumImage);
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
var __webpack_exports__ = __webpack_require__.X(0, [5427], () => (__webpack_exec__(7950)));
module.exports = __webpack_exports__;

})();