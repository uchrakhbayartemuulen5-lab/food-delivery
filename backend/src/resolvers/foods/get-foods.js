import { foodModel } from "../../model/food-model.js";

export const getfoods = async (req, res) => {
  const food = req.body;
  console.log(food);
  try {
    const dbfoods = await foodModel.find(food);
    res.status(200).json(dbfoods);
  } catch (error) {
    res.send("Error getting foods: " + error);
  }
};
