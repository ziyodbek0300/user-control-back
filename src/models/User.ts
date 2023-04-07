import { model, Schema, Document } from "mongoose";
import { User } from "@/interfaces/userInterface";

const userSchema: Schema = new Schema({
	firstName: {
		type: String,
		required: true
	},
    lastName: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	role: {
		type: String,
		default: "user"
	}
});

export default model<User & Document>("User", userSchema);