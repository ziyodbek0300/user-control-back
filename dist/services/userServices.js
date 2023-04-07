"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>AdminService
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
let AdminService = class AdminService {
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
    async createAdmin(adminData) {
        if ((0, _util.isEmpty)(adminData)) throw new _httpException.HttpException(400, "adminData is empty");
        const findAdmin = await this.users.findOne({
            username: adminData.username
        });
        if (findAdmin) throw new _httpException.HttpException(409, `This username ${adminData.username} already exists`);
        adminData.password = await (0, _bcrypt.hash)(adminData.password, 10);
        return this.users.create(adminData);
    }
    async updateAdmin(adminId, adminData) {
        if ((0, _util.isEmpty)(adminData)) throw new _httpException.HttpException(400, "adminData is empty");
        if (adminData.username) {
            const findAdmin = await this.users.findOne({
                _id: {
                    $ne: adminId
                },
                username: adminData.username
            });
            if (findAdmin) throw new _httpException.HttpException(409, `This username ${adminData.username} already exists`);
        }
        if (adminData.password) {
            adminData.password = await (0, _bcrypt.hash)(adminData.password, 10);
        }
        const updateUserById = await this.users.findByIdAndUpdate(adminId, adminData, {
            new: true
        }).select("-__v -password");
        if (!updateUserById) throw new _httpException.HttpException(409, "Admin doesn't exist");
        return updateUserById;
    }
    async deleteAdmin(userId) {
        const deleteUserById = await this.users.findByIdAndDelete(userId).select("-__v -password");
        if (!deleteUserById) throw new _httpException.HttpException(409, "Admin doesn't exist");
        return deleteUserById;
    }
    constructor(){
        _define_property(this, "users", _User.default);
    }
};

//# sourceMappingURL=userServices.js.map