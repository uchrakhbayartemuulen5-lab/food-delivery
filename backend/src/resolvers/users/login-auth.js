import { userModel } from "../../model/user-model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const loginAuth = async (req, res) => {
  try {
    const body = req.body;

    if (!body || !body.email || !body.password) {
      return res.status(400).send({ message: "Email and password required" });
    }

    const user = await userModel.findOne({ email: body.email });

    if (!user) {
      return res.status(401).send({ message: "Invalid email or password" });
    }

    const match = await bcrypt.compare(body.password, user.password);

    if (!match) {
      return res.status(401).send({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET || "secretkey",
      {
        expiresIn: "7d",
      }
    );

    return res
      .status(200)
      .send({ message: `User ${body.email} logged in`, token });
  } catch (error) {
    console.error("loginAuth error:", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};
