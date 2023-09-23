// routes/DonateRoutes.js
import express from "express";
import {
  createDonation,
  getAllDonations,
} from "../controllers/DonateController.js";

const router = express.Router();

// Route to create a new donation
router.post("/donate", createDonation);

// Route to get all donations
router.get("/donations", getAllDonations);

export default router;
