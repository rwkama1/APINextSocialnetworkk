"use strict";
(() => {
var exports = {};
exports.id = 7244;
exports.ids = [7244,3076,4392,4877,9987,4372,4008,5390,9380,4867,3763,5427,4703];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

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


/***/ }),

/***/ 7506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ likecomment)
});

// EXTERNAL MODULE: ./pages/api/cors.js + 1 modules
var cors = __webpack_require__(4392);
;// CONCATENATED MODULE: external "socialnetworkk/data/DataLikeComment"
const DataLikeComment_namespaceObject = require("socialnetworkk/data/DataLikeComment");
;// CONCATENATED MODULE: ./pages/api/likes/likecomment.js


/* harmony default export */ async function likecomment(req, res) {
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
            const { iduser , idcomment  } = req.body;
            let likeancomment = await DataLikeComment_namespaceObject.DataLikeComment.likeancomment(iduser, idcomment);
            if (likeancomment === -1) {
                throw new Error("The comment does not exists");
            }
            if (likeancomment === -2) {
                throw new Error("The user does not exists");
            }
            if (likeancomment === -3) {
                throw new Error("The user already liked that comment");
            }
            return res.status(200).send("The likeancomment was added successfully");
        } catch (error1) {
            return res.status(500).send(error1.message);
        }
    }
    if (req.method === "DELETE") {
        await (0,cors["default"])(req, res);
        try {
            const { iduser: iduser1 , idcomment: idcomment1  } = req.body;
            let deletelikeancomment = await DataLikeComment_namespaceObject.DataLikeComment.deletelikeancomment(iduser1, idcomment1);
            if (deletelikeancomment === -1) {
                throw new Error("The comment does not exists");
            }
            if (deletelikeancomment === -2) {
                throw new Error("The user does not exists");
            }
            if (deletelikeancomment === -3) {
                throw new Error("The likecomment does not exists ");
            }
            return res.status(200).send("The likecomment was deleted  successfully");
        } catch (error2) {
            return res.status(500).send(error2.message);
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
var __webpack_exports__ = (__webpack_exec__(7506));
module.exports = __webpack_exports__;

})();