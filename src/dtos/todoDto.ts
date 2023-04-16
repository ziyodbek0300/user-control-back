import { IsMongoId, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateTodoDto {
  @IsString()
  @IsOptional()
  @MaxLength(250)
  public title: string;

  @IsString()
  @MinLength(3)
  public body: string;

  @IsMongoId()
  public userId: string;
}

export class UpdateTodoDto {
  @IsString()
  @IsOptional()
  @MaxLength(250)
  public title: string;

  @IsString()
  @MinLength(3)
  public body: string;
}