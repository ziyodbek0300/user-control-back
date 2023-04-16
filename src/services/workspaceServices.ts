import { HttpException } from "@exceptions/httpException";
import workspaceModel from "@/models/Workspace";
import userModel from "@/models/User";
import { isEmpty } from "@utils/util";
import { Workspace } from "@/interfaces/workspaceInterface";
import { CreateWorkspace, UpdateWorkspaceDto } from "@/dtos/workspaceDto";

export default class WorkspaceServices {
    public workspaces = workspaceModel;
    public users = userModel;

    public async findAllWorkspaces(query: object): Promise<Workspace[]> {
        return this.workspaces.find(query).select("-__v");
    }

    public async findOneWorkspace(_id: string): Promise<Workspace> {
        if (isEmpty(_id)) throw new HttpException(400, "_id is empty");

        const findWorkspace: Workspace = await this.workspaces
            .findOne({ _id: _id })
            .populate("userId", "_id firstName lastName username role")
            .select("-__v");

        if (!findWorkspace) throw new HttpException(409, "Workspace doesn't exist");

        return findWorkspace;
    }

    public async findWorkspaceById(_id: string): Promise<Workspace[]> {
        if (isEmpty(_id)) throw new HttpException(400, "_id is empty");

        const findWorkspace: Workspace[] = await this.workspaces
            .find({ _id: _id })
            .populate("userId", "_id firstName lastName username role")
            .select("-__v");

        if (!findWorkspace) throw new HttpException(409, "Workspace doesn't exist");

        return findWorkspace;
    }

    public async createWorkspace(workspaceData: CreateWorkspace): Promise<Workspace> {
        if (isEmpty(workspaceData)) throw new HttpException(400, "workspaceData is empty");

        return this.workspaces.create(workspaceData);
    }

    public async updateWorkspace(_id: string, workspaceData: UpdateWorkspaceDto): Promise<Workspace> {
        if (isEmpty(workspaceData)) throw new HttpException(400, "workspaceData is empty");

        const updateWorkspaceById: Workspace = await this.workspaces
            .findByIdAndUpdate(_id, workspaceData, { new: true })
            .select("-__v");
        if (!updateWorkspaceById) throw new HttpException(409, "Workspace doesn't exist");

        return updateWorkspaceById;
    }

    public async deleteWorkspace(_id: string): Promise<Workspace> {
        const deleteWorkspaceById: Workspace = await this.workspaces
            .findByIdAndDelete(_id)
            .select("-__v");
        if (!deleteWorkspaceById) throw new HttpException(409, "Workspace doesn't exist");

        return deleteWorkspaceById;
    }
}