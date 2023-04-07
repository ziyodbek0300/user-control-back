"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _authServices = _interop_require_default(require("../services/authServices"));
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
let AuthController = class AuthController {
    constructor(){
        _define_property(this, "authService", new _authServices.default());
        _define_property(this, "logIn", async (req, res, next)=>{
            try {
                const { cookie , findUser , token  } = await this.authService.login(req.body);
                res.setHeader("Set-Cookie", [
                    cookie
                ]);
                res.status(200).json({
                    data: {
                        findUser,
                        token
                    },
                    message: "login"
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "logOut", async (req, res, next)=>{
            try {
                const logOutUserData = await this.authService.logout(req.user);
                res.setHeader("Set-Cookie", [
                    "Authorization=; Max-age=0"
                ]);
                res.status(200).json({
                    data: logOutUserData,
                    message: "logout"
                });
            } catch (error) {
                next(error);
            }
        });
    }
};
const _default = AuthController;

//# sourceMappingURL=authController.js.map