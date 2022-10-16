import express from "express";
import * as bodyParser from "body-parser";
import morgan from "morgan";

import mongoose from "mongoose";

class App {
  public app: express.Application;
  public port: number;

  constructor(controllers: any, port: any) {
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.raw());
    this.app.use(bodyParser.json());
    this.app.use(morgan("common"));
    // TODO: Add morgan middleware
  }

  private initializeControllers(controllers: any) {
    controllers.forEach((controller: any) => {
      this.app.use("/", controller.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App is listening on the port ${this.port}!`);
    });
  }

  public async mongoInit(url: string) {
    await mongoose.connect(url).then(() => {
      console.log(`Connected to database`);
    });
  }
}

export default App;
