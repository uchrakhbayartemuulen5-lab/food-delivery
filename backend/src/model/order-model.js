import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const OrderSchema = new Schema({
  id: ObjectId,
  user: ObjectId,
  price: { type: Number, require: true },
  category: { type: Schema.ObjectId, require: true, ref: `category` },
  status: { type: String, require: true, default: "Pending" },
  createAT: { type: Date, require: true, default: Date.now },
  updateAT: { type: Date, require: true, default: Date.now },
});

export const orderModel = mongoose.model("order", OrderSchema);
