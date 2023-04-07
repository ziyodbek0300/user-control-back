import { hash } from "bcrypt";
import { CreateUserDto } from "@/dtos/userDto";
import { HttpException } from "@exceptions/httpException";
import { User } from "@/interfaces/userInterface";
import userModel from "@/models/User";
import { isEmpty } from "@utils/util";

/** Admins services: getAll, createAdmin, getById, updateAdmin **/
export default class AdminService {
    public users = userModel;

    public async findAllUser(query: object): Promise<User[]> {
        return this.users.find(query).select("-__v -password");
    }

    public async findUserById(userId: string): Promise<User> {
        if (isEmpty(userId)) throw new HttpException(400, "UserId is empty");

        const findUser: User = await this.users
            .findOne({ _id: userId })
            .select("-__v -password");

        if (!findUser) throw new HttpException(409, "User doesn't exist");

        return findUser;
    }

    public async createAdmin(adminData: CreateUserDto): Promise<User> {
        if (isEmpty(adminData)) throw new HttpException(400, "adminData is empty");

        const findAdmin: User = await this.users.findOne({ username: adminData.username });
        if (findAdmin) throw new HttpException(409, `This username ${adminData.username} already exists`);

        adminData.password = await hash(adminData.password, 10);
        return this.users.create(adminData);
    }

    public async updateAdmin(adminId: string, adminData: CreateUserDto): Promise<User> {
        if (isEmpty(adminData)) throw new HttpException(400, "adminData is empty");

        if (adminData.username) {
            const findAdmin: User = await this.users.findOne({
                _id: { $ne: adminId },
                username: adminData.username
            });
            if (findAdmin) throw new HttpException(409, `This username ${adminData.username} already exists`);
        }

        if (adminData.password) {
            adminData.password = await hash(adminData.password, 10);
        }

        const updateUserById: User = await this.users
            .findByIdAndUpdate(adminId, adminData, { new: true })
            .select("-__v -password");
        if (!updateUserById) throw new HttpException(409, "Admin doesn't exist");

        return updateUserById;
    }

    public async deleteAdmin(userId: string): Promise<User> {
        const deleteUserById: User = await this.users
            .findByIdAndDelete(userId)
            .select("-__v -password");
        if (!deleteUserById) throw new HttpException(409, "Admin doesn't exist");

        return deleteUserById;
    }
}