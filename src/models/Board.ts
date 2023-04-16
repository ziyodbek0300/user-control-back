import { model, Schema, Document } from "mongoose";
import { Board } from "@/interfaces/boardInterface";

const boardScheme: Schema = new Schema({
	title: {
		type: String,
		required: true
	},
    userId: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true
	}
}, {
	timestamps: true
});

export default model<Board & Document>("Board", boardScheme);