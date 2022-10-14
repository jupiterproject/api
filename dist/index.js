"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const PostController_1 = __importDefault(require("./controllers/posts/PostController"));
const app = new app_1.default([new PostController_1.default()], 5000);
app.listen();
