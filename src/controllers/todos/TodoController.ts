import express from "express";
import { Todo } from "../../models/Todo";
import TodoInterface from "./todo.interface";

class TodoController {
  public path = "/todos";
  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get(this.path, this.createTodo);
    this.router.post(this.path, this.getAllTodos);
  }

  getAllTodos = async (
    request: express.Request,
    response: express.Response
  ) => {
    response.send("hello world");
  };

  createTodo = (request: express.Request, response: express.Response) => {
    console.log(request.body);
    const { name, createdAt, subject, createdBy } = request.body;
    const createdTodo: TodoInterface | any = new Todo({
      name,
      createdAt,
      subject,
      createdBy,
    });
    createdTodo.save();
    response.json(createdTodo);
  };
}

export default TodoController;
