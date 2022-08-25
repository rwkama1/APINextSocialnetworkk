"use strict";
(() => {
var exports = {};
exports.id = 7426;
exports.ids = [7426];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 849:
/***/ ((module) => {

module.exports = require("socialnetworkk/data/DataSubComment");

/***/ }),

/***/ 3992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4392);
/* harmony import */ var socialnetworkk_data_DataSubComment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(849);
/* harmony import */ var socialnetworkk_data_DataSubComment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socialnetworkk_data_DataSubComment__WEBPACK_IMPORTED_MODULE_1__);


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
            const { iduser , idcomment , text  } = req.body;
            let addSubComment = await socialnetworkk_data_DataSubComment__WEBPACK_IMPORTED_MODULE_1__.DataSubComment.addSubComment(iduser, idcomment, text);
            if (addSubComment === -1) {
                throw new Error("The comment does not exists");
            }
            if (addSubComment === -2) {
                throw new Error("The user does not exists");
            }
            return res.status(200).send("The sub comment was added successfully");
        } catch (error1) {
            return res.status(500).send(error1.message);
        }
    }
    if (req.method === "PUT") {
        await (0,_cors__WEBPACK_IMPORTED_MODULE_0__["default"])(req, res);
        try {
            const { idsubcomment , idcomment: idcomment1 , iduser: iduser1 , text: text1  } = req.body;
            let updateSubCommentText = await socialnetworkk_data_DataSubComment__WEBPACK_IMPORTED_MODULE_1__.DataSubComment.updateSubCommentText(idsubcomment, idcomment1, iduser1, text1);
            if (updateSubCommentText === -1) {
                throw new Error("The comment does not exists");
            }
            if (updateSubCommentText === -2) {
                throw new Error("The user does not exists");
            }
            if (updateSubCommentText === -3) {
                throw new Error("The sub comment does not exists");
            }
            return res.status(200).send("The sub comment was updated successfully");
        } catch (error2) {
            return res.status(500).send(error2.message);
        }
    }
    if (req.method === "DELETE") {
        await (0,_cors__WEBPACK_IMPORTED_MODULE_0__["default"])(req, res);
        try {
            const { iduser: iduser2 , idsubcomment: idsubcomment1  } = req.body;
            let deleteSubComment = await socialnetworkk_data_DataSubComment__WEBPACK_IMPORTED_MODULE_1__.DataSubComment.deleteSubComment(iduser2, idsubcomment1);
            if (deleteSubComment === -1) {
                throw new Error("The user does not exists");
            }
            if (deleteSubComment === -2) {
                throw new Error("The sub comment does not exists");
            }
            return res.status(200).send("The sub comment was deleted successfully");
        } catch (error3) {
            return res.status(500).send(error3.message);
        }
    }
    if (req.method === "GET") {
        await (0,_cors__WEBPACK_IMPORTED_MODULE_0__["default"])(req, res);
        try {
            let arraydiffdate = [];
            const { idimage  } = req.query;
            let array = await DataCommentImage.getsCommentsImage(idimage);
            for (const commentimg of array){
                commentimg.DiffDatePublishDateNow();
                commentimg.showDiffDatePublishDateNow();
                arraydiffdate.push(commentimg);
            }
            return res.status(200).send(arraydiffdate);
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
var __webpack_exports__ = __webpack_require__.X(0, [9380], () => (__webpack_exec__(3992)));
module.exports = __webpack_exports__;

})();