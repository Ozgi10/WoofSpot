import mongoose from "mongoose";

const AdoptionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  desiredDog: { type: String, required: true },
  adoptionReason: { type: String, required: true },
  familyAcceptance: { type: String, required: true },
  adoptTiming: { type: String, required: true },
  householdInfo: { type: String, required: true },
  childrenInfo: { type: String, required: true },
  freeTimeInfo: { type: String, required: true },
  presenceInfo: { type: String, required: true },
  allergiesInfo: { type: String, required: true },
  currentPetsInfo: { type: String, required: true },
  previousPetsInfo: { type: String, required: true },
  vacationInfo: { type: String, required: true },
  aloneInfo: { type: String, required: true },
  dedicationInfo: { type: String, required: true },
  residenceInfo: { type: String, required: true },
});

export default mongoose.model("Adoption", AdoptionSchema);
