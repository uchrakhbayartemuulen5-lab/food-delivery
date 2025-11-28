import { userModel } from "../../model/user-model.js";

export const getUsers = async (req, res) => {
  const user = req.body;
  console.log(user);
  try {
    const dbusers = await userModel.find(user);
    res.status(200).json(dbusers);
  } catch (error) {
    res.send("Error getting users: " + error);
  }
};
