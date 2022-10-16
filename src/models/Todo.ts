import { Schema, model } from "mongoose";

const TodoSchema = new Schema({
  name: String,
  subject: String,
  createdAt: String,
  createdBy: String,
});

export const Todo = model("Todo", TodoSchema);
