import { Router } from "express";
import AuthController from "@controllers/authController";
import { AuthUserDto } from "@dtos/userDto";
import { Routes } from "@interfaces/routesInterface";
import authMiddleware from "@middlewares/authMiddleware";
import validationMiddleware from "@middlewares/validationMiddelware";

export default class AuthRoute implements Routes {
	public path = "/";
	public router = Router();
	public authController = new AuthController();

	constructor() {
		this.initializeRoutes();
	}

	private initializeRoutes() {
		this.router.post(`${this.path}login`, validationMiddleware(AuthUserDto, "body"), this.authController.logIn);
		this.router.post(`${this.path}logout`, authMiddleware, this.authController.logOut);
	}
}