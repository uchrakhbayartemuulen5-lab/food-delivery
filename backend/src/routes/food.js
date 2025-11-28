import express from "express";
import { getfoods } from "../resolvers/foods/get-foods.js";
import { createfoods } from "../resolvers/foods/create-foods.js";
import { updatefoods } from "../resolvers/foods/put-foods.js";
import { deletefoods } from "../resolvers/foods/delete-foods.js";
import { getFoodByCategory } from "../resolvers/foods/foodby-category.js";

export const foodRouter = express.Router();
foodRouter.get("/", getfoods);
foodRouter.get("/:categoryId", getFoodByCategory);
foodRouter.post("/", createfoods);
foodRouter.put("/", updatefoods);
foodRouter.delete("/", deletefoods);
