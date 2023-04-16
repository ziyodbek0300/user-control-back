import { NextFunction, Request, Response } from "express";
import TodoServices from "@/services/todoServeice";
import { Todo } from "@/interfaces/todoInterface";
import { CreateTodoDto, UpdateTodoDto } from "@/dtos/todoDto";

export default class TodoController {
    public todoService = new TodoServices();

    public getTodos = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllTodoData: Todo[] = await this.todoService.findAllTodos(req.query);

            res.status(200).json({ data: findAllTodoData, message: "findAll" });
        } catch (error) {
            next(error);
        }
    };

    public getByUserId = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findByUserId: Todo[] = await this.todoService.findUserById(req.params.id);

            res.status(200).json({ data: findByUserId, message: "findByUserId" });
        } catch (error) {
            next(error);
        }
    };

    public getOne = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findOneById: Todo = await this.todoService.findOneTodo(req.params.id);

            res.status(200).json({ data: findOneById, message: "findOne" });
        } catch (error) {
            next(error);
        }
    };

    public createTodo = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const createTodoData: Todo = await this.todoService.createTodo(
                req.body as CreateTodoDto
            );

            res.status(201).json({ data: createTodoData, message: "created" });
        } catch (error) {
            next(error);
        }
    };

    public updateTodo = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const updateTodoData: Todo = await this.todoService.updateTodo(
                req.params.id,
                req.body as UpdateTodoDto
            );

            res.status(200).json({ data: updateTodoData, message: "updated" });
        } catch (error) {
            next(error);
        }
    };

    public deleteTodo = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const deleteTodoData: Todo = await this.todoService.deleteTodo(req.params.id);

            res.status(200).json({ data: deleteTodoData, message: "deleted" });
        } catch (error) {
            next(error);
        }
    };
}