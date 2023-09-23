// controllers/LostFoundController.js
import LostFound from "../models/LostFoundModel.js";

// Create a new lost and found item
export const createLostFoundItem = async (req, res) => {
  try {
    const newItem = new LostFound(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ error: "Error creating the lost and found item" });
  }
};

// Get all lost and found items
export const getAllLostFoundItems = async (req, res) => {
  try {
    const items = await LostFound.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: "Error getting lost and found items" });
  }
};
