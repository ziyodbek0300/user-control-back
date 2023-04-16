import { model, Schema, Document } from "mongoose";
import { Workspace, CategoryEnum } from "@/interfaces/workspaceInterface";

const workspaceScheme: Schema = new Schema({
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
        enum: CategoryEnum,
        default: "Other"
    },
    type: {
        type: String
    },
    photoUrl: {
        type: String
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {
    timestamps: true
});

export default model<Workspace & Document>("Workspace", workspaceScheme);