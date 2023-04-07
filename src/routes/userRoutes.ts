import { Router } from "express";
import UserController from "@/controllers/userController";
import { CreateUserDto } from "@/dtos/userDto";
import { Routes } from "@/interfaces/routesInterface";
import validationMiddleware from "@middlewares/validationMiddelware";
import authMiddleware from "@/middlewares/authMiddleware";

export default class UserRoute implements Routes {
	public path = "/user";
	public router = Router();
	public usersController = new UserController();

	constructor() {
		this.initializeRoutes();
	}

	private initializeRoutes() {
		this.router.get(`${this.path}`, authMiddleware, this.usersController.getUsers);
		this.router.get(`${this.path}/:id`, authMiddleware, this.usersController.getUserById);
		this.router.post(`${this.path}`, validationMiddleware(CreateUserDto, "body"), this.usersController.createUser);
		this.router.patch(`${this.path}/:id`, authMiddleware, validationMiddleware(CreateUserDto, "body", true), this.usersController.updateUser);
		this.router.delete(`${this.path}/:id`, authMiddleware, this.usersController.deleteUser);
	}
}