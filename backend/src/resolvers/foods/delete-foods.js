import { foodModel } from "../../model/food-model.js";

export const deletefoods = async (req, res) => {
  const { id } = req.body;
  console.log(id);

  try {
    const newFood = await foodModel.findByIdAndDelete(req.body.id);
    res.status(200).send("Food Deleted Successfully!", newFood);
  } catch (error) {
    res.send("Error deleting food: " + error);
  }
};
