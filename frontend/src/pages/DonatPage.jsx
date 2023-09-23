import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const DonatePage = () => {
  const [donationAmount, setDonationAmount] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [donations, setDonations] = useState([]); // State to store donations data

  const handleDonate = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulating a delay
    setTimeout(() => {
      setIsLoading(false);
      setIsConfirmed(true);
    }, 2000);
  };

  useEffect(() => {
    setIsConfirmed(false);
    // Fetch donations data when the component mounts
    fetchDonationsData();
  }, [donationAmount, name, email, cardNumber, expirationDate]);

  // Function to fetch donations data
  const fetchDonationsData = async () => {
    try {
      const response = await axios.get(
        "https://doglist.cyclic.cloud/donations"
      );
      setDonations(response.data);
    } catch (error) {
      console.error("Error fetching donations:", error);
    }
  };

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <Navbar />
        <h1 className="text-3xl font-semibold mb-4">
          Donate to Our Pet Shelter
        </h1>
        {isConfirmed ? (
          <div className="text-green-500 text-lg">
            <p>Big thanks for Your Woof donation!🐾🦴🍗</p>
          </div>
        ) : (
          <form onSubmit={handleDonate} className="donation-form">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Donation Amount ($):
              </label>
              <input
                type="number"
                value={donationAmount}
                onChange={(e) =>
                  setDonationAmount(Math.max(1, parseInt(e.target.value)))
                }
                min="1"
                className="border rounded-md py-2 px-3 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Full Name:
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border rounded-md py-2 px-3 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Email Address:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded-md py-2 px-3 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Card Number:
              </label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="border rounded-md py-2 px-3 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Expiration Date:
              </label>
              <input
                type="date"
                value={expirationDate}
                onChange={(e) => setDate(e.target.value)}
                className="border rounded-md py-2 px-3 w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md w-full"
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Donate Now"}
            </button>
          </form>
        )}
        {/* Display donations data */}
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Donations History:</h2>
          <ul>
            {donations.map((donation) => (
              <li key={donation._id}>
                Donation Amount: ${donation.donationAmount} by {donation.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
