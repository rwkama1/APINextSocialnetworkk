"use strict";
(() => {
var exports = {};
exports.id = 9853;
exports.ids = [9853,3076,4392,4877,9987,4372,4008,5390,9380,4867,3763,5427,4703];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ commentvideo)
});

// EXTERNAL MODULE: ./pages/api/cors.js + 1 modules
var cors = __webpack_require__(4392);
;// CONCATENATED MODULE: external "socialnetworkk/data/DataCommentVideo"
const DataCommentVideo_namespaceObject = require("socialnetworkk/data/DataCommentVideo");
;// CONCATENATED MODULE: ./pages/api/comment/commentvideo.js


/* harmony default export */ async function commentvideo(req, res) {
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
            const { iduser , idvideo , text  } = req.body;
            let CommentVideo = await DataCommentVideo_namespaceObject.DataCommentVideo.CommentVideo(iduser, idvideo, text);
            if (CommentVideo === -1) {
                throw new Error("The video does not exists");
            }
            if (CommentVideo === -2) {
                throw new Error("The user does not exists");
            }
            return res.status(200).send("The comment video was added successfully");
        } catch (error1) {
            return res.status(500).send(error1.message);
        }
    }
    if (req.method === "PUT") {
        await (0,cors["default"])(req, res);
        try {
            const { iduser: iduser1 , idcomment , idvideo: idvideo1 , text: text1  } = req.body;
            let UpdateTextCommentVideo = await DataCommentVideo_namespaceObject.DataCommentVideo.UpdateTextCommentVideo(iduser1, idcomment, idvideo1, text1);
            if (UpdateTextCommentVideo === -1) {
                throw new Error("The comment video does not exists");
            }
            if (UpdateTextCommentVideo === -2) {
                throw new Error("The video does not exists");
            }
            if (UpdateTextCommentVideo === -3) {
                throw new Error("The user does not exists");
            }
            if (UpdateTextCommentVideo === -4) {
                throw new Error("The comment does not exists");
            }
            return res.status(200).send("The comment video was updated successfully");
        } catch (error2) {
            return res.status(500).send(error2.message);
        }
    }
    if (req.method === "DELETE") {
        await (0,cors["default"])(req, res);
        try {
            const { iduser: iduser2 , idcomment: idcomment1 , idvideo: idvideo2  } = req.body;
            let deleteCommentVideo = await DataCommentVideo_namespaceObject.DataCommentVideo.deleteCommentVideo(iduser2, idcomment1, idvideo2);
            if (deleteCommentVideo === -1) {
                throw new Error("The comment video does not exists");
            }
            if (deleteCommentVideo === -2) {
                throw new Error("The video does not exists");
            }
            if (deleteCommentVideo === -3) {
                throw new Error("The user does not exists");
            }
            if (deleteCommentVideo === -4) {
                throw new Error("The comment does not exists");
            }
            return res.status(200).send("The comment video was deleted successfully");
        } catch (error3) {
            return res.status(500).send(error3.message);
        }
    }
    if (req.method === "GET") {
        await (0,cors["default"])(req, res);
        try {
            let arraydiffdate = [];
            const { idvideo: idvideo3  } = req.query;
            let array = await DataCommentVideo_namespaceObject.DataCommentVideo.getsCommentsVideo(idvideo3);
            for (const commentvideo of array){
                commentvideo.DiffDatePublishDateNow();
                commentvideo.showDiffDatePublishDateNow();
                arraydiffdate.push(commentvideo);
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
var __webpack_exports__ = (__webpack_exec__(993));
module.exports = __webpack_exports__;

})();