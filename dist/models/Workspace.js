"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _mongoose = require("mongoose");
const _workspaceInterface = require("../interfaces/workspaceInterface");
const workspaceScheme = new _mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    shortTitle: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    website: {
        type: String
    },
    category: {
        type: String,
        enum: _workspaceInterface.CategoryEnum,
        default: "Other"
    },
    type: {
        type: String
    },
    photoUrl: {
        type: String
    },
    userId: {
        type: _mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {
    timestamps: true
});
const _default = (0, _mongoose.model)("Workspace", workspaceScheme);

//# sourceMappingURL=Workspace.js.map