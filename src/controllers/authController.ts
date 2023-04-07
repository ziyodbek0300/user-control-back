import { NextFunction, Request, Response } from "express";
import { CreateUserDto } from "@/dtos/userDto";
import { RequestWithUser } from "@/interfaces/authInterface";
import { User } from "@/interfaces/userInterface";
import AuthService from "@/services/authServices";

class AuthController {
    public authService = new AuthService();

    public logIn = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { cookie, findUser, token } = await this.authService.login(req.body as CreateUserDto);
            res.setHeader("Set-Cookie", [cookie]);
            res.status(200).json({ data: { findUser, token }, message: "login" });
        } catch (error) {
            next(error);
        }
    };

    public logOut = async (req: RequestWithUser, res: Response, next: NextFunction) => {
        try {
            const logOutUserData: User = await this.authService.logout(req.user as User);

            res.setHeader("Set-Cookie", ["Authorization=; Max-age=0"]);
            res.status(200).json({ data: logOutUserData, message: "logout" });
        } catch (error) {
            next(error);
        }
    };
}

export default AuthController;