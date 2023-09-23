// controllers/DonateController.js
import Donate from "../models/DonateModel.js";

// Controller function to create a new donation
export const createDonation = async (req, res) => {
  try {
    const newDonation = new Donate(req.body);
    await newDonation.save();
    res.status(201).json(newDonation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to get all donations
export const getAllDonations = async (req, res) => {
  try {
    const donations = await Donate.find();
    res.status(200).json(donations);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
