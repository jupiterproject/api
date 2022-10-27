import express, { RouterOptions } from "express";
import { Route } from "../types/Route";

class BaseController {
  public path: string;
  public router: express.Router = express.Router();
  public app: express.Application = express();
  public routes: object[] = [];
}

export default BaseController;
