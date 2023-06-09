import { model, Schema, Document } from "mongoose";
import { Todo } from "@/interfaces/todoInterface";

const todoSchema: Schema = new Schema({
	title: {
		type: String,
		required: true
	},
    body: {
		type: String,
		required: false
	},
    userId: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true
	}
}, {
	timestamps: true
});

export default model<Todo & Document>("Todo", todoSchema);