import { categorymodel } from "../../model/category-model.js";

export const deletecategory = async (req, res) => {
  const { id } = req.body;
  console.log(id);

  try {
    const newcategory = await categorymodel.findByIdAndDelete(req.body.id);
    res.status(200).send("Category Deleted Successfully!", newcategory);
  } catch (error) {
    res.send("Error deleting category: " + error);
  }
};
