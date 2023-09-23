import { useState } from "react";
import axios from "axios";
//import Adoption from "../../../backend/models/AdoptionModel";

const AdoptionForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [desiredDog, setDesiredDog] = useState("");
  const [adoptionReason, setAdoptionReason] = useState("");
  const [familyAcceptance, setFamilyAcceptance] = useState("");
  const [adoptTiming, setAdoptTiming] = useState("");
  const [householdInfo, setHouseholdInfo] = useState("");
  const [childrenInfo, setChildrenInfo] = useState("");
  const [freeTimeInfo, setFreeTimeInfo] = useState("");
  const [presenceInfo, setPresenceInfo] = useState("");
  const [allergiesInfo, setAllergiesInfo] = useState("");
  const [currentPetsInfo, setCurrentPetsInfo] = useState("");
  const [previousPetsInfo, setPreviousPetsInfo] = useState("");
  const [vacationInfo, setVacationInfo] = useState("");
  const [aloneInfo, setAloneInfo] = useState("");
  const [dedicationInfo, setDedicationInfo] = useState("");
  const [residenceInfo, setResidenceInfo] = useState("");

  const handleAdoptSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      phoneNumber,
      desiredDog,
      adoptionReason,
      familyAcceptance,
      adoptTiming,
      householdInfo,
      childrenInfo,
      freeTimeInfo,
      presenceInfo,
      allergiesInfo,
      currentPetsInfo,
      previousPetsInfo,
      vacationInfo,
      aloneInfo,
      dedicationInfo,
      residenceInfo,
    };

    try {
      await axios.post("https://doglist.cyclic.cloud/adoption", formData);
      alert("Adoption data submitted successfully!");
    } catch (error) {
      console.error("Error submitting adoption form:", error);
    }
  };

  return (
    <div className="py-4 mx-auto max-w-md">
      <h1 className="text-3xl font-semibold mb-4">Adoption Questionnaire</h1>
      <form onSubmit={handleAdoptSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="mb-1">Full Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border rounded"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Email Address:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border rounded"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Phone Number:</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="p-2 border rounded"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Desired Dog&apos;s Name:</label>
          <input
            type="text"
            value={desiredDog}
            onChange={(e) => setDesiredDog(e.target.value)}
            className="p-2 border rounded"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Reason for Adoption:</label>
          <textarea
            value={adoptionReason}
            onChange={(e) => setAdoptionReason(e.target.value)}
            rows="4"
            className="p-2 border rounded"
            required
          ></textarea>
        </div>

        {/* Family Acceptance (1) */}
        <div className="flex flex-col">
          <label className="mb-1">
            1. Do all family members accept and agree to the fact of adopting a
            dog?
          </label>
          <select
            value={familyAcceptance}
            onChange={(e) => setFamilyAcceptance(e.target.value)}
            className="p-2 border rounded"
            required
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Adoption Timing (2) */}
        <div className="flex flex-col">
          <label className="mb-1">
            2. Why did you decide to adopt a dog now? Why did you choose this
            particular dog?
          </label>
          <textarea
            value={adoptTiming}
            onChange={(e) => setAdoptTiming(e.target.value)}
            rows="4"
            className="p-2 border rounded"
            required
          ></textarea>
        </div>

        {/* Household Info (3) */}
        <div className="flex flex-col">
          <label className="mb-1">
            3. How many people live in your house? How old are the residents?
          </label>
          <textarea
            value={householdInfo}
            onChange={(e) => setHouseholdInfo(e.target.value)}
            rows="4"
            className="p-2 border rounded"
            required
          ></textarea>
        </div>

        {/* Children Info (4) */}
        <div className="flex flex-col">
          <label className="mb-1">
            4. Are there children at home? If so, how old are they?
          </label>
          <textarea
            value={childrenInfo}
            onChange={(e) => setChildrenInfo(e.target.value)}
            rows="4"
            className="p-2 border rounded"
            required
          ></textarea>
        </div>

        {/* Free Time Info (6) */}
        <div className="flex flex-col">
          <label className="mb-1">6. How do you spend your free time?</label>
          <textarea
            value={freeTimeInfo}
            onChange={(e) => setFreeTimeInfo(e.target.value)}
            rows="4"
            className="p-2 border rounded"
            required
          ></textarea>
        </div>

        {/* Presence Info (7) */}
        <div className="flex flex-col">
          <label className="mb-1">
            7. Is someone present at home constantly (or most of the time)
            during the day?
          </label>
          <select
            value={presenceInfo}
            onChange={(e) => setPresenceInfo(e.target.value)}
            className="p-2 border rounded"
            required
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Allergies Info (8) */}
        <div className="flex flex-col">
          <label className="mb-1">
            8. Is anyone in your home allergic to animals?
          </label>
          <select
            value={allergiesInfo}
            onChange={(e) => setAllergiesInfo(e.target.value)}
            className="p-2 border rounded"
            required
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="No, but it occurs in family whom we see often/they visit us at home/we spend free time together, e.g. holidays together">
              No, but it occurs in family whom we see often/they visit us at
              home/we spend free time together, e.g. holidays together
            </option>
            <option value="I don't know">I don&apos;t know</option>
          </select>
        </div>

        {/* Current Pets Info (9) */}
        <div className="flex flex-col">
          <label className="mb-1">
            9. Are there any animals currently in your house/apartment? If so,
            what kind and what is their attitude towards other animals?
          </label>
          <textarea
            value={currentPetsInfo}
            onChange={(e) => setCurrentPetsInfo(e.target.value)}
            rows="4"
            className="p-2 border rounded"
            required
          ></textarea>
        </div>

        {/* Previous Pets Info (10) */}
        <div className="flex flex-col">
          <label className="mb-1">
            10. Have you had any pets before? If so, what?
          </label>
          <textarea
            value={previousPetsInfo}
            onChange={(e) => setPreviousPetsInfo(e.target.value)}
            rows="4"
            className="p-2 border rounded"
            required
          ></textarea>
        </div>

        {/* Vacation Information (Question 11) */}
        <div className="flex flex-col">
          <label className="mb-1">
            11. What will happen to the dog during your holidays and trips? Are
            there people who would take care of the dog (equally aware of the
            requirements) during your longer absence?
          </label>
          <textarea
            value={vacationInfo}
            onChange={(e) => setVacationInfo(e.target.value)}
            rows="4"
            className="p-2 border rounded"
            required
          ></textarea>
        </div>

        {/* Alone Information (Question 12) */}
        <div className="flex flex-col">
          <label className="mb-1">
            12. How often and how long will the dog be left alone (how many
            hours at a time)?
          </label>
          <textarea
            value={aloneInfo}
            onChange={(e) => setAloneInfo(e.target.value)}
            rows="4"
            className="p-2 border rounded"
            required
          ></textarea>
        </div>

        {/* Dedication Information (Question 13) */}
        <div className="flex flex-col">
          <label className="mb-1">
            13. How many hours a day do you plan to devote to your dog?
          </label>
          <textarea
            value={dedicationInfo}
            onChange={(e) => setDedicationInfo(e.target.value)}
            rows="4"
            className="p-2 border rounded"
            required
          ></textarea>
        </div>

        {/* Residence Information (Question 14) */}
        <div className="flex flex-col">
          <label className="mb-1">
            14. Where do you live: in a block of flats or tenement house / in a
            house?
          </label>
          <select
            value={residenceInfo}
            onChange={(e) => setResidenceInfo(e.target.value)}
            className="p-2 border rounded"
            required
          >
            <option value="Apartment">Apartment</option>
            <option value="Apartment with a garden">
              Apartment with a garden
            </option>
            <option value="House">House</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdoptionForm;
