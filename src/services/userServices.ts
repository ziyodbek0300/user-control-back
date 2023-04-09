import { hash } from "bcrypt";
import { CreateUserDto } from "@/dtos/userDto";
import { HttpException } from "@exceptions/httpException";
import { User } from "@/interfaces/userInterface";
import userModel from "@/models/User";
import { isEmpty } from "@utils/util";

export default class UserService {
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

  public async createUser(userData: CreateUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "userData is empty");

    const findUser: User = await this.users.findOne({ username: userData.username });
    if (findUser) throw new HttpException(409, `This username ${userData.username} already exists`);

    userData.password = await hash(userData.password, 10);
    return this.users.create(userData);
  }

  public async updateUser(userId: string, userData: CreateUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "userData is empty");

    if (userData.username) {
      const findUser: User = await this.users.findOne({
        _id: { $ne: userId },
        username: userData.username
      });
      if (findUser) throw new HttpException(409, `This username ${userData.username} already exists`);
    }

    if (userData.password) {
      userData.password = await hash(userData.password, 10);
    }

    const updateUserById: User = await this.users
      .findByIdAndUpdate(userId, userData, { new: true })
      .select("-__v -password");
    if (!updateUserById) throw new HttpException(409, "user doesn't exist");

    return updateUserById;
  }

  public async deleteUser(userId: string): Promise<User> {
    const deleteUserById: User = await this.users
      .findByIdAndDelete(userId)
      .select("-__v -password");
    if (!deleteUserById) throw new HttpException(409, "user doesn't exist");

    return deleteUserById;
  }
}