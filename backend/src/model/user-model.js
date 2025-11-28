import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  id: ObjectId,
  email: { type: String, required: true, default: "No Email" },
  password: String,
  phoneNumber: Number,
  address: String,
  role: String,
  orderedFoods: [String],
  ttl: Date,
  isVerified: Boolean,
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now },
});

export const userModel = mongoose.model("user", UserSchema);
