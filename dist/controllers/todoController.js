"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>TodoController
});
const _todoServeice = _interop_require_default(require("../services/todoServeice"));
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
let TodoController = class TodoController {
    constructor(){
        _define_property(this, "todoService", new _todoServeice.default());
        _define_property(this, "getTodos", async (req, res, next)=>{
            try {
                const findAllTodoData = await this.todoService.findAllTodos(req.query);
                res.status(200).json({
                    data: findAllTodoData,
                    message: "findAll"
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "getByUserId", async (req, res, next)=>{
            try {
                const findByUserId = await this.todoService.findUserById(req.params.id);
                res.status(200).json({
                    data: findByUserId,
                    message: "findByUserId"
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "getOne", async (req, res, next)=>{
            try {
                const findOneById = await this.todoService.findOneTodo(req.params.id);
                res.status(200).json({
                    data: findOneById,
                    message: "findOne"
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "createTodo", async (req, res, next)=>{
            try {
                const createTodoData = await this.todoService.createTodo(req.body);
                res.status(201).json({
                    data: createTodoData,
                    message: "created"
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "updateTodo", async (req, res, next)=>{
            try {
                const updateTodoData = await this.todoService.updateTodo(req.params.id, req.body);
                res.status(200).json({
                    data: updateTodoData,
                    message: "updated"
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "deleteTodo", async (req, res, next)=>{
            try {
                const deleteTodoData = await this.todoService.deleteTodo(req.params.id);
                res.status(200).json({
                    data: deleteTodoData,
                    message: "deleted"
                });
            } catch (error) {
                next(error);
            }
        });
    }
};

//# sourceMappingURL=todoController.js.map