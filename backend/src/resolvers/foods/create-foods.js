import { foodModel } from "../../model/food-model.js";

export const createfoods = async (req, res) => {
  const food = req.body;
  console.log(food);

  try {
    const newFood = await foodModel.create(food);
    res.status(200).send("New Food Created Successfully!", newFood);
  } catch (error) {
    res.send("Error creating food: " + error);
  }
};
