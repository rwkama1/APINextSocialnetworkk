"use strict";
(() => {
var exports = {};
exports.id = 8397;
exports.ids = [8397,3076,4392,4877,9987,4372,4008,5390,9380,4867,3763,5427,4703];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 6052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ commentimage)
});

// EXTERNAL MODULE: ./pages/api/cors.js + 1 modules
var cors = __webpack_require__(4392);
;// CONCATENATED MODULE: external "socialnetworkk/data/DataCommentImage"
const DataCommentImage_namespaceObject = require("socialnetworkk/data/DataCommentImage");
;// CONCATENATED MODULE: ./pages/api/comment/commentimage.js


/* harmony default export */ async function commentimage(req, res) {
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
            const { iduser , idimage , text  } = req.body;
            let commentimage = await DataCommentImage_namespaceObject.DataCommentImage.CommentImage(iduser, idimage, text);
            if (commentimage === -1) {
                throw new Error("The image does not exists");
            }
            if (commentimage === -2) {
                throw new Error("The user does not exists");
            }
            return res.status(200).send("The comment image was added successfully");
        } catch (error1) {
            return res.status(500).send(error1.message);
        }
    }
    if (req.method === "PUT") {
        await (0,cors["default"])(req, res);
        try {
            const { iduser: iduser1 , idcomment , idimage: idimage1 , text: text1  } = req.body;
            let UpdateTextCommentImage = await DataCommentImage_namespaceObject.DataCommentImage.UpdateTextCommentImage(iduser1, idcomment, idimage1, text1);
            if (UpdateTextCommentImage === -1) {
                throw new Error("The comment images does not exists");
            }
            if (UpdateTextCommentImage === -2) {
                throw new Error("The image does not exists");
            }
            if (UpdateTextCommentImage === -3) {
                throw new Error("The user does not exists");
            }
            if (UpdateTextCommentImage === -4) {
                throw new Error("The comment does not exists");
            }
            return res.status(200).send("The comment image was updated successfully");
        } catch (error2) {
            return res.status(500).send(error2.message);
        }
    }
    if (req.method === "DELETE") {
        await (0,cors["default"])(req, res);
        try {
            const { iduser: iduser2 , idcomment: idcomment1 , idimage: idimage2  } = req.body;
            let deleteCommentImage = await DataCommentImage_namespaceObject.DataCommentImage.deleteCommentImage(iduser2, idcomment1, idimage2);
            if (deleteCommentImage === -1) {
                throw new Error("The comment images does not exists");
            }
            if (deleteCommentImage === -2) {
                throw new Error("The image does not exists");
            }
            if (deleteCommentImage === -3) {
                throw new Error("The user does not exists");
            }
            if (deleteCommentImage === -4) {
                throw new Error("The comment does not exists");
            }
            return res.status(200).send("The comment image was deleted successfully");
        } catch (error3) {
            return res.status(500).send(error3.message);
        }
    }
    if (req.method === "GET") {
        await (0,cors["default"])(req, res);
        try {
            let arraydiffdate = [];
            const { idimage: idimage3  } = req.query;
            let array = await DataCommentImage_namespaceObject.DataCommentImage.getsCommentsImage(idimage3);
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


/***/ }),

/***/ 4392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ api_cors)
});

// EXTERNAL MODULE: external "cors"
var external_cors_ = __webpack_require__(3582);
var external_cors_default = /*#__PURE__*/__webpack_require__.n(external_cors_);
;// CONCATENATED MODULE: ./lib/init-middleware.js
// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function initMiddleware(middleware) {
    return (req, res)=>new Promise((resolve, reject)=>{
            middleware(req, res, (result)=>{
                if (result instanceof Error) {
                    return reject(result);
                }
                return resolve(result);
            });
        });
};

;// CONCATENATED MODULE: ./pages/api/cors.js


// Initialize the cors middleware
const cors = initMiddleware(// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
external_cors_default()({
    // Only allow requests with GET, POST,PUT,DELETE and OPTIONS
    methods: [
        "GET",
        "POST",
        "PUT",
        "DELETE",
        "OPTIONS"
    ]
}));
/* harmony default export */ const api_cors = (cors);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6052));
module.exports = __webpack_exports__;

})();