import App from "./app";
import TodoController from "./controllers/todos/TodoController";
import TestController from "./controllers/test/TestController";
import * as dotenv from "dotenv";
dotenv.config();

const app = new App([new TodoController(), new TestController()], 5000);

app.mongoInit(process.env.MONGODB_CONNECTION_URI!);
app.listen();
