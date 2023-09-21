import mongoose from "mongoose";

const adoptionSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  id: { type: Number, required: true },
  userId: { type: Number, required: true },
});

const Adoption = mongoose.model("Adoption", adoptionSchema);

export default Adoption;
