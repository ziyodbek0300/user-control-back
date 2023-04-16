"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>TodoRoute
});
const _express = require("express");
const _validationMiddelware = _interop_require_default(require("../middlewares/validationMiddelware"));
const _authMiddleware = _interop_require_default(require("../middlewares/authMiddleware"));
const _todoController = _interop_require_default(require("../controllers/todoController"));
const _todoDto = require("../dtos/todoDto");
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
let TodoRoute = class TodoRoute {
    initializeRoutes() {
        this.router.get(`${this.path}`, _authMiddleware.default, this.todoController.getTodos);
        this.router.get(`${this.path}/:id`, _authMiddleware.default, this.todoController.getOne);
        this.router.get(`${this.path}/:id`, _authMiddleware.default, this.todoController.getByUserId);
        this.router.post(`${this.path}`, (0, _validationMiddelware.default)(_todoDto.CreateTodoDto, "body"), this.todoController.createTodo);
        this.router.patch(`${this.path}/:id`, _authMiddleware.default, (0, _validationMiddelware.default)(_todoDto.UpdateTodoDto, "body", true), this.todoController.updateTodo);
        this.router.delete(`${this.path}/:id`, _authMiddleware.default, this.todoController.deleteTodo);
    }
    constructor(){
        _define_property(this, "path", "/todos");
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "todoController", new _todoController.default());
        this.initializeRoutes();
    }
};

//# sourceMappingURL=todoRoutes.js.map