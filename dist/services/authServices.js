"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _bcrypt = require("bcrypt");
const _jsonwebtoken = require("jsonwebtoken");
const _env = require("../config/env");
const _httpException = require("../exceptions/httpException");
const _User = _interop_require_default(require("../models/User"));
const _util = require("../utils/util");
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
let AuthService = class AuthService {
    async login(userData) {
        if ((0, _util.isEmpty)(userData)) throw new _httpException.HttpException(400, "CreateUserDto is empty");
        const findUser = await this.users.findOne({
            username: userData.username
        }).select("-__v");
        if (!findUser) throw new _httpException.HttpException(409, `This username ${userData.username} was not found`);
        const isPasswordMatching = await (0, _bcrypt.compare)(userData.password, findUser.password);
        if (!isPasswordMatching) throw new _httpException.HttpException(409, "Password is not matching");
        const tokenData = this.createToken(findUser);
        const token = this.createToken(findUser).token;
        const cookie = this.createCookie(tokenData);
        return {
            cookie,
            findUser,
            token
        };
    }
    async logout(userData) {
        if ((0, _util.isEmpty)(userData)) throw new _httpException.HttpException(400, "adminData is empty");
        const findUser = await this.users.findOne({
            username: userData.username,
            password: userData.password
        }).select("-__v -password");
        if (!findUser) throw new _httpException.HttpException(409, `This username ${userData.username} was not found`);
        return findUser;
    }
    createToken(user) {
        const dataStoredInToken = {
            _id: user._id
        };
        const secretKey = _env.SECRET_KEY;
        const expiresIn = 60 * 60 * 20;
        return {
            expiresIn,
            token: (0, _jsonwebtoken.sign)(dataStoredInToken, secretKey, {
                expiresIn
            })
        };
    }
    createCookie(tokenData) {
        return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
    }
    constructor(){
        _define_property(this, "users", _User.default);
    }
};
const _default = AuthService;

//# sourceMappingURL=authServices.js.map