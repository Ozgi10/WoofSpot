// routes/LostFoundRoutes.js
import express from "express";
import {
  createLostFoundItem,
  getAllLostFoundItems,
} from "../controllers/LostFoundController.js";

const router = express.Router();

// Route to create a new lost and found item
router.post("/lostfound", createLostFoundItem);

// Route to get all lost and found items
router.get("/lostfound", getAllLostFoundItems);

export default router;
