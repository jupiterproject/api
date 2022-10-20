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
}

export default TestController;
