import express, { Router } from "express";
import mongoose from "mongoose";
import cors from "cors";
import { userRouter } from "./src/routes/users.js";
import { categoryRouter } from "./src/routes/category.js";
import { foodRouter } from "./src/routes/food.js";
import { orderRouter } from "./src/routes/order.js";

const app = express();
const PORT = 10000;

app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/category", categoryRouter);
app.use("/food", foodRouter);
app.use("/order", orderRouter);

mongoose
  .connect("mongodb+srv://Temuulen:90170811@cluster0.8tqa60m.mongodb.net/")
  .then(() => console.log("Connected to MongoDB"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
