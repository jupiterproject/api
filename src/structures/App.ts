import express from "express";

class App {
  private app: express.Application = express();
  public port: number;

  private controllers: any[];

  constructor(port: number, controllers: any[]) {
    this.port = port;
    this.controllers = controllers;
    this.initializeControllers(controllers);
  }

  listen(): void {
    this.app.listen(this.port, () => {
      console.log("App listening on port " + this.port);
    });
  }

  private initializeControllers(controllers: any): void {
    controllers.forEach((controller: any) => {
      this.app.use("/", controller.router);
    });
  }
}

export default App;
