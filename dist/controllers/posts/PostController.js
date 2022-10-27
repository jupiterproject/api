"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class PostsController {
    constructor() {
        this.path = "/posts";
        this.router = express_1.default.Router();
        this.posts = [
            {
                author: "Max Schwarz",
                content: "Hello World!",
                title: "Hello World",
            },
        ];
        this.getAllPosts = (request, response) => {
            response.send(this.posts);
        };
        this.createAPost = (request, response) => {
            const post = request.body;
            this.posts.push(post);
            response.send(post);
        };
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(this.path, this.getAllPosts);
        this.router.post(this.path, this.createAPost);
    }
}
exports.default = PostsController;
