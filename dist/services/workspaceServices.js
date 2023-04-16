"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>WorkspaceServices
});
const _httpException = require("../exceptions/httpException");
const _Workspace = _interop_require_default(require("../models/Workspace"));
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
let WorkspaceServices = class WorkspaceServices {
    async findAllWorkspaces(query) {
        return this.workspaces.find(query).select("-__v");
    }
    async findOneWorkspace(_id) {
        if ((0, _util.isEmpty)(_id)) throw new _httpException.HttpException(400, "_id is empty");
        const findWorkspace = await this.workspaces.findOne({
            _id: _id
        }).select("-__v");
        if (!findWorkspace) throw new _httpException.HttpException(409, "Workspace doesn't exist");
        return findWorkspace;
    }
    async findWorkspaceById(_id) {
        if ((0, _util.isEmpty)(_id)) throw new _httpException.HttpException(400, "_id is empty");
        const findWorkspace = await this.workspaces.find({
            _id: _id
        }).select("-__v");
        if (!findWorkspace) throw new _httpException.HttpException(409, "Workspace doesn't exist");
        return findWorkspace;
    }
    async findAllWorkspacesByUserId(userId) {
        if ((0, _util.isEmpty)(userId)) throw new _httpException.HttpException(400, "userId is empty");
        const findWorkspace = await this.workspaces.find({
            userId: userId
        }).select("-__v");
        if (!findWorkspace) throw new _httpException.HttpException(409, "Workspace doesn't exist");
        return findWorkspace;
    }
    async createWorkspace(workspaceData) {
        if ((0, _util.isEmpty)(workspaceData)) throw new _httpException.HttpException(400, "workspaceData is empty");
        return this.workspaces.create(workspaceData);
    }
    async updateWorkspace(_id, workspaceData) {
        if ((0, _util.isEmpty)(workspaceData)) throw new _httpException.HttpException(400, "workspaceData is empty");
        const updateWorkspaceById = await this.workspaces.findByIdAndUpdate(_id, workspaceData, {
            new: true
        }).select("-__v");
        if (!updateWorkspaceById) throw new _httpException.HttpException(409, "Workspace doesn't exist");
        return updateWorkspaceById;
    }
    async deleteWorkspace(_id) {
        const deleteWorkspaceById = await this.workspaces.findByIdAndDelete(_id).select("-__v");
        if (!deleteWorkspaceById) throw new _httpException.HttpException(409, "Workspace doesn't exist");
        return deleteWorkspaceById;
    }
    constructor(){
        _define_property(this, "workspaces", _Workspace.default);
        _define_property(this, "users", _User.default);
    }
};

//# sourceMappingURL=workspaceServices.js.map