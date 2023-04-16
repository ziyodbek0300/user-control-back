"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>TodoServices
});
const _httpException = require("../exceptions/httpException");
const _User = _interop_require_default(require("../models/User"));
const _Todo = _interop_require_default(require("../models/Todo"));
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
let TodoServices = class TodoServices {
    async findAllTodos(query) {
        return this.todos.find(query).select("-__v");
    }
    async findOneTodo(_id) {
        if ((0, _util.isEmpty)(_id)) throw new _httpException.HttpException(400, "_id is empty");
        const findTodo = await this.todos.findOne({
            _id: _id
        }).select("-__v");
        if (!findTodo) throw new _httpException.HttpException(409, "Todo doesn't exist");
        return findTodo;
    }
    async findUserById(userId) {
        if ((0, _util.isEmpty)(userId)) throw new _httpException.HttpException(400, "UserId is empty");
        const findTodo = await this.todos.find({
            userId: userId
        }).select("-__v");
        if (!findTodo) throw new _httpException.HttpException(409, "Todo doesn't exist");
        return findTodo;
    }
    async createTodo(todoData) {
        if ((0, _util.isEmpty)(todoData)) throw new _httpException.HttpException(400, "todoData is empty");
        return this.todos.create(todoData);
    }
    async updateTodo(_id, todoData) {
        if ((0, _util.isEmpty)(todoData)) throw new _httpException.HttpException(400, "userData is empty");
        const updateTodoById = await this.todos.findByIdAndUpdate(_id, todoData, {
            new: true
        }).select("-__v");
        if (!updateTodoById) throw new _httpException.HttpException(409, "todo doesn't exist");
        return updateTodoById;
    }
    async deleteTodo(_id) {
        const deleteTodoById = await this.todos.findByIdAndDelete(_id).select("-__v");
        if (!deleteTodoById) throw new _httpException.HttpException(409, "todo doesn't exist");
        return deleteTodoById;
    }
    constructor(){
        _define_property(this, "users", _User.default);
        _define_property(this, "todos", _Todo.default);
    }
};

//# sourceMappingURL=todoServeice.js.map