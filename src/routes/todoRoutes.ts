import { Router } from "express";
import { Routes } from "@/interfaces/routesInterface";
import validationMiddleware from "@middlewares/validationMiddelware";
import authMiddleware from "@/middlewares/authMiddleware";
import TodoController from "@/controllers/todoController";
import { CreateTodoDto, UpdateTodoDto } from "@/dtos/todoDto";

export default class TodoRoute implements Routes {
	public path = "/todos";
	public router = Router();
	public todoController = new TodoController();

	constructor() {
		this.initializeRoutes();
	}

	private initializeRoutes() {
		this.router.get(`${this.path}`, authMiddleware, this.todoController.getTodos);
		this.router.get(`${this.path}/:id`, authMiddleware, this.todoController.getOne);
		this.router.get(`${this.path}/:id`, authMiddleware, this.todoController.getByUserId);
		this.router.post(`${this.path}`, validationMiddleware(CreateTodoDto, "body"), this.todoController.createTodo);
		this.router.patch(`${this.path}/:id`, authMiddleware, validationMiddleware(UpdateTodoDto, "body", true), this.todoController.updateTodo);
		this.router.delete(`${this.path}/:id`, authMiddleware, this.todoController.deleteTodo);
	}
}