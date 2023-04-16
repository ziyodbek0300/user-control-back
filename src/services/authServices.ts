import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { SECRET_KEY } from "@/config/env";
import { CreateUserDto } from "@/dtos/userDto";
import { HttpException } from "@/exceptions/httpException";
import { DataStoredInToken, TokenData } from "@/interfaces/authInterface";
import { User } from "@/interfaces/userInterface";
import userModel from "@/models/User";
import { isEmpty } from "@utils/util";
import any = jasmine.any;


class AuthService {
    public users = userModel;

    public async login(userData: CreateUserDto): Promise<{ findUser: User; cookie: string; token: string }> {
        if (isEmpty(userData)) throw new HttpException(400, "CreateUserDto is empty");

        const findUser: User = await this.users
            .findOne({ username: userData.username })
            .select("-__v");
        if (!findUser)
            throw new HttpException(409, `This username ${userData.username} was not found`);

        const isPasswordMatching: boolean = await compare(userData.password, findUser.password);
        if (!isPasswordMatching) throw new HttpException(409, "Password is not matching");

        const tokenData = this.createToken(findUser);
        const token: string = this.createToken(findUser).token;
        const cookie = this.createCookie(tokenData);

        return { cookie, findUser, token };
    }

    public async logout(userData: User): Promise<User> {
        if (isEmpty(userData)) throw new HttpException(400, "UserData is empty");

        const findUser: User = await this.users
            .findOne({
                username: userData.username,
                password: userData.password
            })
            .select("-__v -password");
        if (!findUser)
            throw new HttpException(409, `This username ${userData.username} was not found`);

        return findUser;
    }

    public createToken(user: User): TokenData {
        const dataStoredInToken: DataStoredInToken = { _id: user._id };
        const secretKey: string = SECRET_KEY;
        const expiresIn: number = (60 * 60) * 100;

        return { expiresIn, token: sign(dataStoredInToken, secretKey, { expiresIn }) };
    }

    public createCookie(tokenData: TokenData): string {
        return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
    }
}

export default AuthService;