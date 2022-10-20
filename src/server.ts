import App from "./structures/App";

/* Controllers */
import TestController from "./controllers/test/TestController";

const app = new App(5000, [new TestController()]);

app.listen();
