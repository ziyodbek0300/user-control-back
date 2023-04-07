"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _jsonwebtoken = require("jsonwebtoken");
const _env = require("../config/env");
const _httpException = require("../exceptions/httpException");
const _User = _interop_require_default(require("../models/User"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const authMiddleware = async (req, res, next)=>{
    try {
        const Authorization = req.cookies["Authorization"] || (req.header("Authorization") ? req.header("Authorization").split("Bearer ")[1] : null);
        if (Authorization) {
            const secretKey = _env.SECRET_KEY;
            const verificationResponse = (0, _jsonwebtoken.verify)(Authorization, secretKey);
            const adminId = verificationResponse._id;
            const findUser = await _User.default.findById(adminId);
            if (findUser) {
                req.user = findUser;
                next();
            } else {
                next(new _httpException.HttpException(401, "Wrong authentication token"));
            }
        } else {
            next(new _httpException.HttpException(404, "Authentication token missing"));
        }
    } catch (error) {
        next(new _httpException.HttpException(401, "Wrong authentication token"));
    }
};
const _default = authMiddleware;

//# sourceMappingURL=authMiddleware.js.map