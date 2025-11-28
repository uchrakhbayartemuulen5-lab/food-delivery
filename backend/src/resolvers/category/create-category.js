import { categorymodel } from "../../model/category-model.js";

export const createCategory = async (req, res) => {
  const category = req.body;
  console.log(category);

  try {
    const newCategory = await categorymodel.create(category);
    res.status(200).send("New Category Created Successfully!", newCategory);
  } catch (error) {
    res.send("Error creating category: " + error);
  }
};
