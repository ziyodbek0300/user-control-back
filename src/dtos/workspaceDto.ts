import { CategoryEnum } from "@/interfaces/workspaceInterface";
import {
    IsMongoId,
    IsOptional,
    IsString,
    IsUrl,
    MaxLength
} from "class-validator";

export class CreateWorkspace {
    @IsString()
    @MaxLength(250)
    public title: string;

    @IsString()
    @MaxLength(250)
    public shortTitle: string;

    @IsString()
    @IsOptional()
    public description: string;

    @IsString()
    @IsOptional()
    @IsUrl()
    public website: string;

    @IsString()
    @IsOptional()
    public category: CategoryEnum;

    @IsString()
    @IsOptional()
    public type: "private" | "public";

    @IsString()
    @IsOptional()
    public photoUrl: string;

    @IsMongoId()
    public userId: string;
}

export class UpdateWorkspaceDto {
    @IsString()
    @MaxLength(250)
    public title: string;

    @IsString()
    @MaxLength(250)
    public shortTitle: string;

    @IsString()
    @IsOptional()
    public description: string;

    @IsString()
    @IsOptional()
    @IsUrl()
    public website: string;

    @IsString()
    @IsOptional()
    public category: CategoryEnum;

    @IsString()
    @IsOptional()
    public type: "private" | "public";
}