import { NextFunction, Request, Response } from "express";
import { CreateUserDto } from "@/dtos/userDto";
import { User } from "@/interfaces/userInterface";
import UserService from "@/services/userServices";

export default class AdminsController {
  public userService = new UserService();

  public getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllUserData: User[] = await this.userService.findAllUser(req.query);

      res.status(200).json({ data: findAllUserData, message: "findAll" });
    } catch (error) {
      next(error);
    }
  };

  public getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findOneAdminData: User = await this.userService.findUserById(req.params.id);

      res.status(200).json({ data: findOneAdminData, message: "findOne" });
    } catch (error) {
      next(error);
    }
  };

  public createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const createUserData: User = await this.userService.createUser(
        req.body as CreateUserDto
      );

      res.status(201).json({ data: createUserData, message: "created" });
    } catch (error) {
      next(error);
    }
  };

  public updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const updateAdminData: User = await this.userService.updateUser(
        req.params.id,
        req.body as CreateUserDto
      );

      res.status(200).json({ data: updateAdminData, message: "updated" });
    } catch (error) {
      next(error);
    }
  };

  public deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deleteAdminData: User = await this.userService.deleteUser(req.params.id);

      res.status(200).json({ data: deleteAdminData, message: "deleted" });
    } catch (error) {
      next(error);
    }
  };
}