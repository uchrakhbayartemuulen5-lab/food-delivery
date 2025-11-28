import { userModel } from "../../model/user-model.js";

export const deleteUser = async (req, res) => {
  const { id } = req.body;
  console.log(id);

  try {
    const newUser = await userModel.findByIdAndDelete(req.body.id);
    res.status(200).send("User Deleted Successfully!", newUser);
  } catch (error) {
    res.send("Error deleting user: " + error);
  }
};
