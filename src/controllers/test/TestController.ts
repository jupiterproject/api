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
}

export default TestController;
