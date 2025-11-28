import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const foodSchema = new Schema({
  id: ObjectId,
  foodname: { type: String, required: true, default: "No Name" },
  price: Number,
  Image: String,
  ingredients: String,
  category: {
    type: ObjectId,
    ref: "category",
  },
  createAT: { type: Date, required: true, default: Date.now },
  updateAT: { type: Date, required: true, default: Date.now },
});

export const foodModel = mongoose.model("food", foodSchema);
