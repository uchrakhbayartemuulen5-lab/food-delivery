export const updateOrder = async (req, res) => {
  const updatedorder = req.body;

  try {
    const neworder = await ordermodel.findByIdAndUpdate(
      updatedorder.id,
      updatedorder
    );
    res.status(200).send("Order Updated Successfully!", neworder);
  } catch (error) {
    res.send("Error updating order: " + error);
  }
};
