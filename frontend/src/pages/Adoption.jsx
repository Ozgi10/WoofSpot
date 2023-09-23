import { useState } from "react";
import Navbar from "./components//Navbar";

const Adopt = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [desiredDog, setDesiredDog] = useState("");
  const [adoptionReason, setAdoptionReason] = useState("");
  const [familyAcceptance, setFamilyAcceptance] = useState(""); // Question 1
  const [adoptTiming, setAdoptTiming] = useState(""); //  2
  const [householdInfo, setHouseholdInfo] = useState(""); //  3
  const [childrenInfo, setChildrenInfo] = useState(""); //  4
  const [freeTimeInfo, setFreeTimeInfo] = useState(""); //  6
  const [presenceInfo, setPresenceInfo] = useState(""); //  7
  const [allergiesInfo, setAllergiesInfo] = useState(""); //  8
  const [currentPetsInfo, setCurrentPetsInfo] = useState(""); //  9
  const [previousPetsInfo, setPreviousPetsInfo] = useState(""); //  10
  const [vacationInfo, setVacationInfo] = useState(""); //  11
  const [aloneInfo, setAloneInfo] = useState(""); //  12
  const [dedicationInfo, setDedicationInfo] = useState(""); //  13
  const [residenceInfo, setResidenceInfo] = useState(""); //  14

  const handleAdoptSubmit = (e) => {
    e.preventDefault();
    //  adoption data to the server here !!!
  };

  return (
    <div>
      <Navbar />
      <div className="adopt-container">
        <h1>Adoption Questionnaire</h1>
        <form onSubmit={handleAdoptSubmit} className="questionnaire-form">
          <label>
            Full Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Email Address:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </label>

          <label>
            Desired Dog&apos;s Name:
            <input
              type="text"
              value={desiredDog}
              onChange={(e) => setDesiredDog(e.target.value)}
              required
            />
          </label>

          <label>
            Reason for Adoption:
            <textarea
              value={adoptionReason}
              onChange={(e) => setAdoptionReason(e.target.value)}
              rows="4"
              required
            ></textarea>
          </label>

          {/* Family Acceptance (1) */}
          <label>
            1. Do all family members accept and agree to the fact of adopting a
            dog?
            <select
              value={familyAcceptance}
              onChange={(e) => setFamilyAcceptance(e.target.value)}
              required
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>

          {/* Adoption Timing (2) */}
          <label>
            2. Why did you decide to adopt a dog now? Why did you choose this
            particular dog?
            <textarea
              value={adoptTiming}
              onChange={(e) => setAdoptTiming(e.target.value)}
              rows="4"
              required
            ></textarea>
          </label>

          {/* Household Info (3) */}
          <label>
            3. How many people live in your house? How old are the residents?
            <textarea
              value={householdInfo}
              onChange={(e) => setHouseholdInfo(e.target.value)}
              rows="4"
              required
            ></textarea>
          </label>

          {/* Children Infor (4) */}
          <label>
            4. Are there children at home? If so, how old are they?
            <textarea
              value={childrenInfo}
              onChange={(e) => setChildrenInfo(e.target.value)}
              rows="4"
              required
            ></textarea>
          </label>

          {/* Free Time Info (6) */}
          <label>
            6. How do you spend your free time?
            <textarea
              value={freeTimeInfo}
              onChange={(e) => setFreeTimeInfo(e.target.value)}
              rows="4"
              required
            ></textarea>
          </label>

          {/* Presence Infor (7) */}
          <label>
            7. Is someone present at home constantly (or most of the time)
            during the day?
            <select
              value={presenceInfo}
              onChange={(e) => setPresenceInfo(e.target.value)}
              required
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>

          {/* Allergies Info (8) */}
          <label>
            8. Is anyone in your home allergic to animals?
            <select
              value={allergiesInfo}
              onChange={(e) => setAllergiesInfo(e.target.value)}
              required
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="No, but it occurs in family whom we see often/they visit us at home/we spend free time together, e.g. holidays together">
                No, but it occurs in family whom we see often/they visit us at
                home/we spend free time together, e.g. holidays together
              </option>
              <option value="I don't know">I don t know</option>
            </select>
          </label>

          {/* Current Pets Infor (9) */}
          <label>
            9. Are there any animals currently in your house/apartment? If so,
            what kind and what is their attitude towards other animals?
            <textarea
              value={currentPetsInfo}
              onChange={(e) => setCurrentPetsInfo(e.target.value)}
              rows="4"
              required
            ></textarea>
          </label>

          {/* Previous Pets Infor (10) */}
          <label>
            10. Have you had any pets before? If so, what?
            <textarea
              value={previousPetsInfo}
              onChange={(e) => setPreviousPetsInfo(e.target.value)}
              rows="4"
              required
            ></textarea>
          </label>

          {/* Vacation Information (Question 11) */}
          <label>
            11. What will happen to the dog during your holidays and trips? Are
            there people who would take care of the dog (equally aware of the
            requirements) during your longer absence?
            <textarea
              value={vacationInfo}
              onChange={(e) => setVacationInfo(e.target.value)}
              rows="4"
              required
            ></textarea>
          </label>

          {/* Alone Information (Question 12) */}
          <label>
            12. How often and how long will the dog be left alone (how many
            hours at a time)?
            <textarea
              value={aloneInfo}
              onChange={(e) => setAloneInfo(e.target.value)}
              rows="4"
              required
            ></textarea>
          </label>

          {/* Dedication Information (Question 13) */}
          <label>
            13. How many hours a day do you plan to devote to your dog?
            <textarea
              value={dedicationInfo}
              onChange={(e) => setDedicationInfo(e.target.value)}
              rows="4"
              required
            ></textarea>
          </label>

          {/* Residence Information (Question 14) */}
          <label>
            14. Where do you live: in a block of flats or tenement house / in a
            house?
            <select
              value={residenceInfo}
              onChange={(e) => setResidenceInfo(e.target.value)}
              required
            >
              <option value="Apartment">Apartment</option>
              <option value="Apartment with a garden">
                Apartment with a garden
              </option>
              <option value="House">House</option>
            </select>
          </label>

          <button type="submit" className="adopt-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Adopt;
