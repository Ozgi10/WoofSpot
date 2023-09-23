import mongoose from "mongoose";

const donateSchema = new mongoose.Schema({
  donationAmount: Number,
  name: String,
  email: String,
  cardNumber: String,
  expirationDate: String,
});

const Donate = mongoose.model("Donate", donateSchema);

export default Donate;
