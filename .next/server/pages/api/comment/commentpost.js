"use strict";
(() => {
var exports = {};
exports.id = 3506;
exports.ids = [3506,3076,4392,4877,9987,4372,4008,5390,9380,4867,3763,5427,4703];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 8940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ commentpost)
});

// EXTERNAL MODULE: ./pages/api/cors.js + 1 modules
var cors = __webpack_require__(4392);
;// CONCATENATED MODULE: external "socialnetworkk/data/DataCommentPost"
const DataCommentPost_namespaceObject = require("socialnetworkk/data/DataCommentPost");
;// CONCATENATED MODULE: ./pages/api/comment/commentpost.js


/* harmony default export */ async function commentpost(req, res) {
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
            const { iduser , idpost , text  } = req.body;
            let CommentPost = await DataCommentPost_namespaceObject.DataCommentPost.CommentPost(iduser, idpost, text);
            if (CommentPost === -1) {
                throw new Error("The post does not exists");
            }
            if (CommentPost === -2) {
                throw new Error("The user does not exists");
            }
            return res.status(200).send("The comment post was added successfully");
        } catch (error1) {
            return res.status(500).send(error1.message);
        }
    }
    if (req.method === "PUT") {
        await (0,cors["default"])(req, res);
        try {
            const { iduser: iduser1 , idcomment , idpost: idpost1 , text: text1  } = req.body;
            let UpdateTextCommentPost = await DataCommentPost_namespaceObject.DataCommentPost.UpdateTextCommentPost(iduser1, idcomment, idpost1, text1);
            if (UpdateTextCommentPost === -1) {
                throw new Error("The comment post does not exists");
            }
            if (UpdateTextCommentPost === -2) {
                throw new Error("The post does not exists");
            }
            if (UpdateTextCommentPost === -3) {
                throw new Error("The user does not exists");
            }
            if (UpdateTextCommentPost === -4) {
                throw new Error("The comment does not exists");
            }
            return res.status(200).send("The comment post was updated successfully");
        } catch (error2) {
            return res.status(500).send(error2.message);
        }
    }
    if (req.method === "DELETE") {
        await (0,cors["default"])(req, res);
        try {
            const { iduser: iduser2 , idcomment: idcomment1 , idpost: idpost2  } = req.body;
            let deleteCommentPost = await DataCommentPost_namespaceObject.DataCommentPost.deleteCommentPost(iduser2, idcomment1, idpost2);
            if (deleteCommentPost === -1) {
                throw new Error("The comment post does not exists");
            }
            if (deleteCommentPost === -2) {
                throw new Error("The post does not exists");
            }
            if (deleteCommentPost === -3) {
                throw new Error("The user does not exists");
            }
            if (deleteCommentPost === -4) {
                throw new Error("The comment does not exists");
            }
            return res.status(200).send("The comment post was deleted successfully");
        } catch (error3) {
            return res.status(500).send(error3.message);
        }
    }
    if (req.method === "GET") {
        await (0,cors["default"])(req, res);
        try {
            let arraydiffdate = [];
            const { idpost: idpost3  } = req.query;
            let array = await DataCommentPost_namespaceObject.DataCommentPost.getsCommentsPost(idpost3);
            for (const commentpost of array){
                commentpost.DiffDatePublishDateNow();
                commentpost.showDiffDatePublishDateNow();
                arraydiffdate.push(commentpost);
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
var __webpack_exports__ = (__webpack_exec__(8940));
module.exports = __webpack_exports__;

})();