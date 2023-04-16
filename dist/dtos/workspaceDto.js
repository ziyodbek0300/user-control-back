"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    CreateWorkspace: ()=>CreateWorkspace,
    UpdateWorkspaceDto: ()=>UpdateWorkspaceDto
});
const _workspaceInterface = require("../interfaces/workspaceInterface");
const _classvalidator = require("class-validator");
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
var __decorate = (void 0) && (void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (void 0) && (void 0).__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let CreateWorkspace = class CreateWorkspace {
    constructor(){
        _define_property(this, "title", void 0);
        _define_property(this, "shortTitle", void 0);
        _define_property(this, "description", void 0);
        _define_property(this, "website", void 0);
        _define_property(this, "category", void 0);
        _define_property(this, "type", void 0);
        _define_property(this, "photoUrl", void 0);
        _define_property(this, "userId", void 0);
    }
};
__decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.MaxLength)(250),
    __metadata("design:type", String)
], CreateWorkspace.prototype, "title", void 0);
__decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.MaxLength)(250),
    __metadata("design:type", String)
], CreateWorkspace.prototype, "shortTitle", void 0);
__decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.IsOptional)(),
    __metadata("design:type", String)
], CreateWorkspace.prototype, "description", void 0);
__decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsUrl)(),
    __metadata("design:type", String)
], CreateWorkspace.prototype, "website", void 0);
__decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.IsOptional)(),
    __metadata("design:type", typeof _workspaceInterface.CategoryEnum === "undefined" ? Object : _workspaceInterface.CategoryEnum)
], CreateWorkspace.prototype, "category", void 0);
__decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.IsOptional)(),
    __metadata("design:type", String)
], CreateWorkspace.prototype, "type", void 0);
__decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.IsOptional)(),
    __metadata("design:type", String)
], CreateWorkspace.prototype, "photoUrl", void 0);
__decorate([
    (0, _classvalidator.IsMongoId)(),
    __metadata("design:type", String)
], CreateWorkspace.prototype, "userId", void 0);
let UpdateWorkspaceDto = class UpdateWorkspaceDto {
    constructor(){
        _define_property(this, "title", void 0);
        _define_property(this, "shortTitle", void 0);
        _define_property(this, "description", void 0);
        _define_property(this, "website", void 0);
        _define_property(this, "category", void 0);
        _define_property(this, "type", void 0);
    }
};
__decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.MaxLength)(250),
    __metadata("design:type", String)
], UpdateWorkspaceDto.prototype, "title", void 0);
__decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.MaxLength)(250),
    __metadata("design:type", String)
], UpdateWorkspaceDto.prototype, "shortTitle", void 0);
__decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.IsOptional)(),
    __metadata("design:type", String)
], UpdateWorkspaceDto.prototype, "description", void 0);
__decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsUrl)(),
    __metadata("design:type", String)
], UpdateWorkspaceDto.prototype, "website", void 0);
__decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.IsOptional)(),
    __metadata("design:type", typeof _workspaceInterface.CategoryEnum === "undefined" ? Object : _workspaceInterface.CategoryEnum)
], UpdateWorkspaceDto.prototype, "category", void 0);
__decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.IsOptional)(),
    __metadata("design:type", String)
], UpdateWorkspaceDto.prototype, "type", void 0);

//# sourceMappingURL=workspaceDto.js.map