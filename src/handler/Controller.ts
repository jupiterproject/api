import express from "express";

type Route = {
  path: string;
  method: any;
  action: Function;
};

class Controller {
  public router = express.Router();
  private routes: object[] = [];

  constructor() {
    this.initializeRoutes(this.routes);
  }

  private initializeRoutes(routes: any) {
    routes.forEach((route: Route) => {
      this.router[route.method as keyof any](route.path, route.action);
    });
  }
}
