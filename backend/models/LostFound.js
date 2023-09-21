import mongoose from "mongoose";

const lostFoundSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  breed: { type: String },
  gender: { type: String },
  description: { type: String, required: true },
  image: { type: String },
  status: { type: String, required: true },
});

const LostFound = mongoose.model("LostFound", lostFoundSchema);

export default LostFound;
