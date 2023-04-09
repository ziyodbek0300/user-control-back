import { IsIn, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  @MaxLength(50)
  @MinLength(3)
  public firstName: string;

  @IsString()
  @MaxLength(50)
  @MinLength(3)
  public lastName: string;

  @IsString()
  @Matches(/^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){5,25}[a-zA-Z0-9]$/)
  @MaxLength(25)
  @MinLength(5)
  public username: string;

  @IsString()
  @MinLength(6)
  public password: string;

  @IsString()
  @IsIn(["admin", "user", "other", "head"])
  public role: "admin" | "other" | "head" | "user";
}

export class AuthUserDto {
  @IsString()
  @Matches(/^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){5,25}[a-zA-Z0-9]$/)
  @MaxLength(25)
  @MinLength(5)
  public username: string;

  @IsString()
  @MinLength(6)
  public password: string;
}