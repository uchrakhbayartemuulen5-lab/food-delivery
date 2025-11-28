import { orderModel } from "../../model/order-model.js";

export const createOrder = async (req, res) => {
  const order = req.body;
  console.log(order);

  try {
    const neworder = new orderModel(order);
    await neworder.save();
    res.status(200).send("Order Created Successfully!");
  } catch (error) {
    res.send("Error creating order: " + error);
  }
};
