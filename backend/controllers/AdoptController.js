import Adoption from "../models/AdoptionModel.js";

// Get all adoption forms
export const getAllAdoptionForms = async (req, res) => {
  try {
    const adoptionForms = await Adoption.find();
    res.json(adoptionForms);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createAdoptForm = async (req, res) => {
  try {
    const newAdoptForm = new Adoption(req.body);
    const savedAdoptForm = await newAdoptForm.save();
    res.status(201).json(savedAdoptForm);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
