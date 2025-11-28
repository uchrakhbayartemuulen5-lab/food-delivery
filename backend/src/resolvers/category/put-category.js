export const updatecategory = async (req, res) => {
  const updatedcategory = req.body;

  try {
    const newcategory = await categorymodel.findByIdAndUpdate(
      updatedcategory.id,
      updatedcategory
    );
    res.status(200).send("Category Updated Successfully!", newcategory);
  } catch (error) {
    res.send("Error updating category: " + error);
  }
};
