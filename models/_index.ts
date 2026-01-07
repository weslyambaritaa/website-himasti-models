import type { Model, ModelStatic } from "sequelize";

// Import all models here
import HakAksesModel from "./HakAksesModel";
import TodoModel from "./TodoModel";

const models: ModelStatic<Model>[] = [
  HakAksesModel,
  TodoModel,
];

export default models;
