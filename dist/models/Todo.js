"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _mongoose = require("mongoose");
const todoSchema = new _mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: false
    },
    userId: {
        type: _mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {
    timestamps: true
});
const _default = (0, _mongoose.model)("Todo", todoSchema);

//# sourceMappingURL=Todo.js.map