"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>WorkspaceRoute
});
const _express = require("express");
const _validationMiddelware = _interop_require_default(require("../middlewares/validationMiddelware"));
const _authMiddleware = _interop_require_default(require("../middlewares/authMiddleware"));
const _workspaceController = _interop_require_default(require("../controllers/workspaceController"));
const _workspaceDto = require("../dtos/workspaceDto");
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
let WorkspaceRoute = class WorkspaceRoute {
    initializeRoutes() {
        this.router.get(`${this.path}`, _authMiddleware.default, this.workspaceController.getAllWorkspaces);
        this.router.get(`${this.path}/:id`, _authMiddleware.default, this.workspaceController.getOneById);
        this.router.post(`${this.path}`, (0, _validationMiddelware.default)(_workspaceDto.CreateWorkspace, "body"), this.workspaceController.createWorkspace);
        this.router.patch(`${this.path}/:id`, _authMiddleware.default, (0, _validationMiddelware.default)(_workspaceDto.UpdateWorkspaceDto, "body", true), this.workspaceController.updateWorkpace);
        this.router.delete(`${this.path}/:id`, _authMiddleware.default, this.workspaceController.deleteWorkspace);
    }
    constructor(){
        _define_property(this, "path", "/workspace");
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "workspaceController", new _workspaceController.default());
        this.initializeRoutes();
    }
};

//# sourceMappingURL=workspaceRoutes.js.map