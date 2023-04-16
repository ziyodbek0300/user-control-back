import { NextFunction, Request, Response } from "express";
import WorkspaceServices from "@/services/workspaceServices";
import { Workspace } from "@/interfaces/workspaceInterface";
import { CreateWorkspace } from "@/dtos/workspaceDto";

export default class WorkspaceController {
    public workspaceService = new WorkspaceServices();

    public getAllWorkspaces = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllWorkspaces: Workspace[] = await this.workspaceService.findAllWorkspaces(req.query);

            res.status(200).json({ data: findAllWorkspaces, message: "findAll" });
        } catch (error) {
            next(error);
        }
    };

    public getOneById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findOneWorkspaceData: Workspace = await this.workspaceService.findOneWorkspace(req.params.id);

            res.status(200).json({ data: findOneWorkspaceData, message: "findOne" });
        } catch (error) {
            next(error);
        }
    };

    public createWorkspace = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const createWorkspaceData: Workspace = await this.workspaceService.createWorkspace(
                req.body as CreateWorkspace
            );

            res.status(201).json({ data: createWorkspaceData, message: "created" });
        } catch (error) {
            next(error);
        }
    };

    public updateWorkpace = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const updateWorkspaceData: Workspace = await this.workspaceService.updateWorkspace(
                req.params.id,
                req.body as CreateWorkspace
            );

            res.status(200).json({ data: updateWorkspaceData, message: "updated" });
        } catch (error) {
            next(error);
        }
    };

    public deleteWorkspace = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const deleteWorkspaceData: Workspace = await this.workspaceService.deleteWorkspace(req.params.id);

            res.status(200).json({ data: deleteWorkspaceData, message: "deleted" });
        } catch (error) {
            next(error);
        }
    };
}