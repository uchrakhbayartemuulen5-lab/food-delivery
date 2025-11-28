import { userModel } from "../../model/user-model.js";

import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  try {
    const user = req.body;

    const password = user.password;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
      email: user.email,
      password: hashedPassword,
      phoneNumber: user.phoneNumber,
      address: user.address,
      role: user.role,
      orderedFoods: user.orderedFoods,
      ttlAmount: user.ttlAmount,
    });
    res.status(200).send(newUser);
  } catch (error) {
    res.send("Error creating user: " + error);
  }
};
