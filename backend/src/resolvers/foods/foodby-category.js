import { foodModel } from "../../model/food-model.js";

export const getFoodByCategory = async (req, res) => {
  const categoryId = req.params.categoryId;

  try {
    const dbfoods = await foodModel
      .find({ category: categoryId })
      .populate(`category`);
    res.status(200).json(dbfoods);
  } catch (error) {
    res.send("Error getting foods: " + error);
  }
};
