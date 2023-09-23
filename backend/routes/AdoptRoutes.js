import express from "express";
import {
  createAdoptForm,
  getAllAdoptionForms,
} from "../controllers/AdoptController.js";

const router = express.Router();

router.post("/adoption", createAdoptForm);
router.get("/adoption", getAllAdoptionForms);

export default router;
