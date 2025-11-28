import { orderModel } from "../../model/order-model.js";

export const deleteorder = async (req, res) => {
  const { id } = req.body;
  console.log(id);

  try {
    const neworder = await orderModel.fingbyIdAndDelete(req.body.id);
    res.status(200).send("Order Deleted Successfully!", neworder);
  } catch (error) {
    res.send("Error deleting order: " + error);
  }
};
