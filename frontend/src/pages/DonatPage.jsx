import { useState, useEffect } from "react";
//import Navbar from "../components/Navbar";

const DonatePage = () => {
  const [donationAmount, setDonationAmount] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

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
  }, [donationAmount, name, email, cardNumber, expirationDate]);

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-4">
          Donate to Our Pet Shelter
        </h1>
        {isConfirmed ? (
          <div className="text-green-500 text-lg">
            <p>Big thanks for Your Woof donation!</p>
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
      </div>
    </div>
  );
};

export default DonatePage;
