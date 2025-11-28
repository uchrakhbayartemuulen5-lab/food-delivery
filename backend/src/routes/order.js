import express from "express";
import { createOrder } from "../resolvers/order/create-order.js";
import { deleteorder } from "../resolvers/order/delete-order.js";
import { getOrder } from "../resolvers/order/get-order.js";
import { updateOrder } from "../resolvers/order/put-order.js";

export const orderRouter = express.Router();

orderRouter.get("/", getOrder);
orderRouter.post("/", createOrder);
orderRouter.put("/", updateOrder);
orderRouter.delete("/", deleteorder);
