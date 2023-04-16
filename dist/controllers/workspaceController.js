"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>WorkspaceController
});
const _workspaceServices = _interop_require_default(require("../services/workspaceServices"));
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
let WorkspaceController = class WorkspaceController {
    constructor(){
        _define_property(this, "workspaceService", new _workspaceServices.default());
        _define_property(this, "getAllWorkspaces", async (req, res, next)=>{
            try {
                const findAllWorkspaces = await this.workspaceService.findAllWorkspaces(req.query);
                res.status(200).json({
                    data: findAllWorkspaces,
                    message: "findAll"
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "getOneById", async (req, res, next)=>{
            try {
                const findOneWorkspaceData = await this.workspaceService.findOneWorkspace(req.params.id);
                res.status(200).json({
                    data: findOneWorkspaceData,
                    message: "findOne"
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "createWorkspace", async (req, res, next)=>{
            try {
                const createWorkspaceData = await this.workspaceService.createWorkspace(req.body);
                res.status(201).json({
                    data: createWorkspaceData,
                    message: "created"
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "updateWorkpace", async (req, res, next)=>{
            try {
                const updateWorkspaceData = await this.workspaceService.updateWorkspace(req.params.id, req.body);
                res.status(200).json({
                    data: updateWorkspaceData,
                    message: "updated"
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "deleteWorkspace", async (req, res, next)=>{
            try {
                const deleteWorkspaceData = await this.workspaceService.deleteWorkspace(req.params.id);
                res.status(200).json({
                    data: deleteWorkspaceData,
                    message: "deleted"
                });
            } catch (error) {
                next(error);
            }
        });
    }
};

//# sourceMappingURL=workspaceController.js.map