import { HttpException } from "@exceptions/httpException";
import userModel from "@/models/User";
import todoModel from "@/models/Todo";
import { isEmpty } from "@utils/util";
import { Todo } from "@/interfaces/todoInterface";
import { CreateTodoDto, UpdateTodoDto } from "@/dtos/todoDto";

export default class TodoServices {
    public users = userModel;
    public todos = todoModel;

    public async findAllTodos(query: object): Promise<Todo[]> {
        return this.todos.find(query).select("-__v");
    }

    public async findOneTodo(_id: string): Promise<Todo> {
        if (isEmpty(_id)) throw new HttpException(400, "_id is empty");

        const findTodo: Todo = await this.todos
            .findOne({ _id: _id })
            .select("-__v");

        if (!findTodo) throw new HttpException(409, "Todo doesn't exist");

        return findTodo;
    }
    
    public async findUserById(userId: string): Promise<Todo[]> {
        if (isEmpty(userId)) throw new HttpException(400, "UserId is empty");

        const findTodo: Todo[] = await this.todos
            .find({ userId: userId })
            .select("-__v");

        if (!findTodo) throw new HttpException(409, "Todo doesn't exist");

        return findTodo;
    }

    public async createTodo(todoData: CreateTodoDto): Promise<Todo> {
        if (isEmpty(todoData)) throw new HttpException(400, "todoData is empty");

        return this.todos.create(todoData);
    }

    public async updateTodo(_id: string, todoData: UpdateTodoDto): Promise<Todo> {
        if (isEmpty(todoData)) throw new HttpException(400, "userData is empty");

        const updateTodoById: Todo = await this.todos
            .findByIdAndUpdate(_id, todoData, { new: true })
            .select("-__v");
        if (!updateTodoById) throw new HttpException(409, "todo doesn't exist");

        return updateTodoById;
    }

    public async deleteTodo(_id: string): Promise<Todo> {
        const deleteTodoById: Todo = await this.todos
            .findByIdAndDelete(_id)
            .select("-__v");
        if (!deleteTodoById) throw new HttpException(409, "todo doesn't exist");

        return deleteTodoById;
    }
}