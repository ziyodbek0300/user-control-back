"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>AdminsController
});
const _userServices = _interop_require_default(require("../services/userServices"));
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
let AdminsController = class AdminsController {
    constructor(){
        _define_property(this, "userService", new _userServices.default());
        _define_property(this, "getUsers", async (req, res, next)=>{
            try {
                const findAllUserData = await this.userService.findAllUser(req.query);
                res.status(200).json({
                    data: findAllUserData,
                    message: "findAll"
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "getUserById", async (req, res, next)=>{
            try {
                const findOneAdminData = await this.userService.findUserById(req.params.id);
                res.status(200).json({
                    data: findOneAdminData,
                    message: "findOne"
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "createUser", async (req, res, next)=>{
            try {
                const createUserData = await this.userService.createAdmin(req.body);
                res.status(201).json({
                    data: createUserData,
                    message: "created"
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "updateUser", async (req, res, next)=>{
            try {
                const updateAdminData = await this.userService.updateAdmin(req.params.id, req.body);
                res.status(200).json({
                    data: updateAdminData,
                    message: "updated"
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "deleteUser", async (req, res, next)=>{
            try {
                const deleteAdminData = await this.userService.deleteAdmin(req.params.id);
                res.status(200).json({
                    data: deleteAdminData,
                    message: "deleted"
                });
            } catch (error) {
                next(error);
            }
        });
    }
};

//# sourceMappingURL=userController.js.map