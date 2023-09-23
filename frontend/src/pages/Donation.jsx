import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

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
    <div className="wholeDonate-container">
      <Navbar />
      <div className="donate-container">
        <h1>Donate to Our Pet Shelter</h1>
        {isConfirmed ? (
          <div className="confirmation-message">
            <p>Big thanks for Your Woof donation!</p>
          </div>
        ) : (
          <form onSubmit={handleDonate} className="donation-form">
            <label>
              Donation Amount ($):
              <input
                type="number"
                value={donationAmount}
                onChange={(e) =>
                  setDonationAmount(Math.max(1, parseInt(e.target.value)))
                }
                min="1"
                required
              />
            </label>
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
              Card Number:
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </label>

            <label>
              Expiration Date:
              <input
                type="date"
                value={expirationDate}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </label>
            <button
              type="submit"
              className="donate-button"
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
