import express from "express";
import { createUser } from "../resolvers/users/create-user.js";
import { getUsers } from "../resolvers/users/get-users.js";
import { updateUser } from "../resolvers/users/update-user.js";
import { deleteUser } from "../resolvers/users/delete-users.js";
import { loginAuth } from "../resolvers/users/login-auth.js";

export const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.post("/", createUser);
userRouter.put("/", updateUser);
userRouter.delete("/", deleteUser);

userRouter.post("/login", loginAuth);
