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
    CreateUserDto: ()=>CreateUserDto,
    AuthUserDto: ()=>AuthUserDto
});
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
let CreateUserDto = class CreateUserDto {
    constructor(){
        _define_property(this, "firstName", void 0);
        _define_property(this, "lastName", void 0);
        _define_property(this, "username", void 0);
        _define_property(this, "password", void 0);
        _define_property(this, "role", void 0);
    }
};
__decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.MaxLength)(50),
    (0, _classvalidator.MinLength)(3),
    __metadata("design:type", String)
], CreateUserDto.prototype, "firstName", void 0);
__decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.MaxLength)(50),
    (0, _classvalidator.MinLength)(3),
    __metadata("design:type", String)
], CreateUserDto.prototype, "lastName", void 0);
__decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.Matches)(/^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){5,25}[a-zA-Z0-9]$/),
    (0, _classvalidator.MaxLength)(25),
    (0, _classvalidator.MinLength)(5),
    __metadata("design:type", String)
], CreateUserDto.prototype, "username", void 0);
__decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.MinLength)(6),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.IsIn)([
        "admin",
        "user",
        "other",
        "head"
    ]),
    __metadata("design:type", String)
], CreateUserDto.prototype, "role", void 0);
let AuthUserDto = class AuthUserDto {
    constructor(){
        _define_property(this, "username", void 0);
        _define_property(this, "password", void 0);
    }
};
__decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.Matches)(/^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){5,25}[a-zA-Z0-9]$/),
    (0, _classvalidator.MaxLength)(25),
    (0, _classvalidator.MinLength)(5),
    __metadata("design:type", String)
], AuthUserDto.prototype, "username", void 0);
__decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.MinLength)(6),
    __metadata("design:type", String)
], AuthUserDto.prototype, "password", void 0);

//# sourceMappingURL=userDto.js.map