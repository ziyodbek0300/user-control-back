import { Router } from "express";
import { Routes } from "@/interfaces/routesInterface";
import validationMiddleware from "@middlewares/validationMiddelware";
import authMiddleware from "@/middlewares/authMiddleware";
import WorkspaceController from "@/controllers/workspaceController";
import { CreateWorkspace, UpdateWorkspaceDto } from "@/dtos/workspaceDto";

export default class WorkspaceRoute implements Routes {
    public path = "/workspace";
    public router = Router();
    public workspaceController = new WorkspaceController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, authMiddleware, this.workspaceController.getAllWorkspaces);
        this.router.get(`${this.path}/:id`, authMiddleware, this.workspaceController.getOneById);
        this.router.post(`${this.path}`, validationMiddleware(CreateWorkspace, "body"), this.workspaceController.createWorkspace);
        this.router.patch(`${this.path}/:id`, authMiddleware, validationMiddleware(UpdateWorkspaceDto, "body", true), this.workspaceController.updateWorkpace);
        this.router.delete(`${this.path}/:id`, authMiddleware, this.workspaceController.deleteWorkspace);
    }
}