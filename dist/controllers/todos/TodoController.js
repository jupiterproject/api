"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Todo_1 = require("../../models/Todo");
class TodoController {
    constructor() {
        this.path = "/todos";
        this.router = express_1.default.Router();
        this.getAllTodos = (request, response) => __awaiter(this, void 0, void 0, function* () {
            //  TODO: Add functionality to get all todos
        });
        this.createTodo = (request, response) => {
            console.log(request.body);
            const { name, createdAt, subject, createdBy } = request.body;
            const createdTodo = new Todo_1.Todo({
                name,
                createdAt,
                subject,
                createdBy,
            });
            createdTodo.save();
            response.json(createdTodo);
        };
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(this.path, this.getAllTodos);
        this.router.post(this.path, this.createTodo);
    }
}
exports.default = TodoController;
