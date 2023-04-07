"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>AuthRoute
});
const _express = require("express");
const _authController = _interop_require_default(require("../controllers/authController"));
const _userDto = require("../dtos/userDto");
const _authMiddleware = _interop_require_default(require("../middlewares/authMiddleware"));
const _validationMiddelware = _interop_require_default(require("../middlewares/validationMiddelware"));
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let AuthRoute = class AuthRoute {
    initializeRoutes() {
        this.router.post(`${this.path}login`, (0, _validationMiddelware.default)(_userDto.AuthUserDto, "body"), this.authController.logIn);
        this.router.post(`${this.path}logout`, _authMiddleware.default, this.authController.logOut);
    }
    constructor(){
        _define_property(this, "path", "/");
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "authController", new _authController.default());
        this.initializeRoutes();
    }
};

//# sourceMappingURL=authRoutes.js.map