"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>UserService
});
const _bcrypt = require("bcrypt");
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
let UserService = class UserService {
    async findAllUser(query) {
        return this.users.find(query).select("-__v -password");
    }
    async findUserById(userId) {
        if ((0, _util.isEmpty)(userId)) throw new _httpException.HttpException(400, "UserId is empty");
        const findUser = await this.users.findOne({
            _id: userId
        }).select("-__v -password");
        if (!findUser) throw new _httpException.HttpException(409, "User doesn't exist");
        return findUser;
    }
    async createUser(userData) {
        if ((0, _util.isEmpty)(userData)) throw new _httpException.HttpException(400, "userData is empty");
        const findUser = await this.users.findOne({
            username: userData.username
        });
        if (findUser) throw new _httpException.HttpException(409, `This username ${userData.username} already exists`);
        userData.password = await (0, _bcrypt.hash)(userData.password, 10);
        return this.users.create(userData);
    }
    async updateUser(userId, userData) {
        if ((0, _util.isEmpty)(userData)) throw new _httpException.HttpException(400, "userData is empty");
        if (userData.username) {
            const findUser = await this.users.findOne({
                _id: {
                    $ne: userId
                },
                username: userData.username
            });
            if (findUser) throw new _httpException.HttpException(409, `This username ${userData.username} already exists`);
        }
        if (userData.password) {
            userData.password = await (0, _bcrypt.hash)(userData.password, 10);
        }
        const updateUserById = await this.users.findByIdAndUpdate(userId, userData, {
            new: true
        }).select("-__v -password");
        if (!updateUserById) throw new _httpException.HttpException(409, "user doesn't exist");
        return updateUserById;
    }
    async deleteUser(userId) {
        const deleteUserById = await this.users.findByIdAndDelete(userId).select("-__v -password");
        if (!deleteUserById) throw new _httpException.HttpException(409, "user doesn't exist");
        return deleteUserById;
    }
    constructor(){
        _define_property(this, "users", _User.default);
    }
};

//# sourceMappingURL=userServices.js.map