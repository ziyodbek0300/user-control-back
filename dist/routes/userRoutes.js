"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>UserRoute
});
const _express = require("express");
const _userController = _interop_require_default(require("../controllers/userController"));
const _userDto = require("../dtos/userDto");
const _validationMiddelware = _interop_require_default(require("../middlewares/validationMiddelware"));
const _authMiddleware = _interop_require_default(require("../middlewares/authMiddleware"));
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
let UserRoute = class UserRoute {
    initializeRoutes() {
        this.router.get(`${this.path}`, _authMiddleware.default, this.usersController.getUsers);
        this.router.get(`${this.path}/:id`, _authMiddleware.default, this.usersController.getUserById);
        this.router.post(`${this.path}`, (0, _validationMiddelware.default)(_userDto.CreateUserDto, "body"), this.usersController.createUser);
        this.router.patch(`${this.path}/:id`, _authMiddleware.default, (0, _validationMiddelware.default)(_userDto.CreateUserDto, "body", true), this.usersController.updateUser);
        this.router.delete(`${this.path}/:id`, _authMiddleware.default, this.usersController.deleteUser);
    }
    constructor(){
        _define_property(this, "path", "/user");
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "usersController", new _userController.default());
        this.initializeRoutes();
    }
};

//# sourceMappingURL=userRoutes.js.map