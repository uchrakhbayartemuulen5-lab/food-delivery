export const updatefoods = async (req, res) => {
  const updatedfood = req.body;

  try {
    const newfood = await foodModel.findByIdAndUpdate(
      updatedfood.id,
      updatedfood
    );
    res.status(200).send("Food Updated Successfully!", newfood);
  } catch (error) {
    res.send("Error updating food: " + error);
  }
};
