import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const categorySchema = new Schema({
  id: ObjectId,
  categoryName: String,
  createdAT: Date,
  upddatedAT: Date,
});

export const categorymodel = mongoose.model("category", categorySchema);
