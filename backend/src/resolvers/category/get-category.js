import { categorymodel } from "../../model/category-model.js";

export const getcategory = async (req, res) => {
  const category = req.body;
  console.log(category);

  try {
    const dbcategory = await categorymodel.find(category);
    res.status(200).json(dbcategory);
  } catch (error) {
    res.send("Error getting category: " + error);
  }
};
