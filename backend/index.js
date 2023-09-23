import "dotenv/config";
import express from "express";
import cors from "cors";
import dbConnect from "./dbConnect.js";

import dogsRoutes from "./routes/dogsRoutes.js";
import AdoptRoutes from "./routes/AdoptRoutes.js";
import DonateRoutes from "./routes/DonateRoutes.js";
import LostFoundRoutes from "./routes/LostFoundRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());
dbConnect();

app.get("/", (req, res) => {
  res.send("Woof-Spot🐕🦮🐩🐾🦴");
});

app.use("/", dogsRoutes);
app.use("/", AdoptRoutes);
app.use("/", DonateRoutes);
app.use("/", LostFoundRoutes);

const PORT = 3993;
app.listen(PORT, () => {
  console.log(`Serving is running on port http://localhost:${PORT}`);
});
