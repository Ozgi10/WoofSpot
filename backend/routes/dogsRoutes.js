import express from "express";
import {
  getAllDogs,
  createDog,
  getDogById,
  updateDogById,
  deleteDogById,
} from "../controllers/DogsController.js";

const router = express.Router();

router.get("/dogs", getAllDogs);
router.post("/dogs", createDog);
router.get("/dogs/:id", getDogById);
router.put("/dogs/:id", updateDogById);
router.delete("/dogs/:id", deleteDogById);

export default router;
