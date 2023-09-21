import mongoose from "mongoose";
import hashPassword from "../middlewares/PassHashing";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
});

// PassHashing
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await hashPassword(this.password);
  }
  next();
});

export default mongoose.model("User", userSchema);
