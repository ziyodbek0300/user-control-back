"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _mongoose = require("mongoose");
const boardScheme = new _mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    userId: {
        type: _mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {
    timestamps: true
});
const _default = (0, _mongoose.model)("Board", boardScheme);

//# sourceMappingURL=Board.js.map