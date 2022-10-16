import App from "./app";
import TodoController from "./controllers/todos/TodoController";
import * as dotenv from "dotenv";
dotenv.config();

const app = new App([new TodoController()], 5000);

app.mongoInit(process.env.MONGODB_CONNECTION_URI!);
app.listen();
