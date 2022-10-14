import App from "./app";
import PostsController from "./controllers/posts/PostController";
import TodoController from "./controllers/todos/TodoController";
import * as dotenv from "dotenv";
dotenv.config();

const app = new App([new PostsController(), new TodoController()], 5000);

app.mongoInit(process.env.MONGODB_CONNECTION_URI!);
app.listen();
