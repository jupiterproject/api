import App from "./app";
import PostsController from "./controllers/posts/PostController";

const app = new App([new PostsController()], 5000);

app.listen();
