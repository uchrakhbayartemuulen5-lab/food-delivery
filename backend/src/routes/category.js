import express from "express";
import { createCategory } from "../resolvers/category/create-category.js";
import { getcategory } from "../resolvers/category/get-category.js";
import { updatecategory } from "../resolvers/category/put-category.js";
import { deletecategory } from "../resolvers/category/delete-category.js";

export const categoryRouter = express.Router();

categoryRouter.get("/", getcategory);
categoryRouter.post("/", createCategory);
categoryRouter.put("/", updatecategory);
categoryRouter.delete("/", deletecategory);
