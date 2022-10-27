<<<<<<< HEAD
import express from "express";

/**
 * DO NOT TOUCH THIS FILE. -atom
 */

class TestController {
  public path = "/test";
  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get(this.path, this.sendTest);
  }

  sendTest = (request: express.Request, response: express.Response) => {
    response.json({ status: "OK" });
  };
=======
import { Request, Response } from "express";
import express from "express";

import BaseController from "../../structures/BaseController";

class TestController extends BaseController {
  public path = "/test";
  public routes = [
    {
      method: "get",
      path: "/",
      action: (req: Request, res: Response) => {
        res.send("hello world");
      },
    },
  ];

  constructor() {
    super();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.app.get(this.routes[0].path, this.routes[0].action);
  }
>>>>>>> f826d5b48e58ed924011902a81396461f2ba7e54
}

export default TestController;
