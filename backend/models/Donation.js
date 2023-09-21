import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  userId: { type: Number, required: true },
});

const Donation = mongoose.model("Donation", donationSchema);

export default Donation;
