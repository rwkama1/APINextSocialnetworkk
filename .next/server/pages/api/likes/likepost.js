"use strict";
(() => {
var exports = {};
exports.id = 3551;
exports.ids = [3551,3076,4392,4877,9987,4372,4008,5390,9380,4867,3763,5427,4703];
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

/***/ 4775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ likepost)
});

// EXTERNAL MODULE: ./pages/api/cors.js + 1 modules
var cors = __webpack_require__(4392);
;// CONCATENATED MODULE: external "socialnetworkk/data/DataLikePost"
const DataLikePost_namespaceObject = require("socialnetworkk/data/DataLikePost");
;// CONCATENATED MODULE: ./pages/api/likes/likepost.js


/* harmony default export */ async function likepost(req, res) {
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
            const { iduser , idpost  } = req.body;
            let likeanpost = await DataLikePost_namespaceObject.DataLikePost.likeanpost(iduser, idpost);
            if (likeanpost === -1) {
                throw new Error("The post does not exists");
            }
            if (likeanpost === -2) {
                throw new Error("The user does not exists");
            }
            if (likeanpost === -3) {
                throw new Error("The user already liked that post");
            }
            return res.status(200).send("The likepost was added successfully");
        } catch (error1) {
            return res.status(500).send(error1.message);
        }
    }
    if (req.method === "DELETE") {
        await (0,cors["default"])(req, res);
        try {
            const { iduser: iduser1 , idpost: idpost1  } = req.body;
            let deletelikeanpost = await DataLikePost_namespaceObject.DataLikePost.deletelikeanpost(iduser1, idpost1);
            if (deletelikeanpost === -1) {
                throw new Error("The post does not exists");
            }
            if (deletelikeanpost === -2) {
                throw new Error("The user does not exists");
            }
            if (deletelikeanpost === -3) {
                throw new Error("The likepost does not exists ");
            }
            return res.status(200).send("The likepost was deleted  successfully");
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
var __webpack_exports__ = (__webpack_exec__(4775));
module.exports = __webpack_exports__;

})();