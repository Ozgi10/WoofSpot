import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dogsRoutes from "./routes/dogsRoutes.js";

const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3993;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB is connected...🎉");
  })
  .catch((err) => console.log(err));

app.use("/", dogsRoutes);

app.get("/", (req, res) => res.send("Woof-Spot🐕🦮🐩🐾🦴"));

app.listen(PORT, () => {
  console.log(`Serving is running on port http://localhost:${PORT}`);
});
