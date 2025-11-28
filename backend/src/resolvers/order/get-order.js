import { orderModel } from "../../model/order-model.js";

export const getOrder = async (req, res) => {
  const order = req.body;
  console.log(order);
  try {
    const dborder = await orderModel.find(order);
    res.status(200).json(dborder);
  } catch (error) {
    res.send("Error getting order: " + error);
  }
};
