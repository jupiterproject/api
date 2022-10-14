import express from "express";
import mongoose from "mongoose";
import { Todo } from "../../models/Todo";

class TodoController {
  public path = "/todos";
  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get(this.path, this.createATodo);
    this.router.post(this.path, this.getAllTodos);
  }

  getAllTodos = async (
    request: express.Request,
    response: express.Response
  ) => {
    //  TODO: Add functionality to get all todos
  };

  createATodo = (request: express.Request, response: express.Response) => {
    const createdTodo = new Todo({
      name: "Some Todo",
      createdAt: "10/14/22",
      subject: "French",
    });
    createdTodo.save();
    response.json(createdTodo);
  };
}

export default TodoController;
