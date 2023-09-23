// components/LostFound.jsx
import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const LostFoundForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    breed: "",
    gender: "",
    description: "",
    image: "",
    status: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send a POST request to your backend API
      const response = await axios.post(
        "https://doglist.cyclic.cloud/lostfound",
        formData
      );

      if (response.status === 200) {
        setIsSubmitted(true);
      } else {
        // Handle other response statuses or errors
        console.error("Error adding Lost and Found item:", response.data);
      }
    } catch (error) {
      console.error("Error adding Lost and Found item:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <Navbar />
      <h1 className="text-3xl font-semibold mb-6">Report Lost or Found Pet </h1>
      {isSubmitted ? (
        <div className="text-green-500 font-semibold mb-4">
          added successfully!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-bold">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border rounded-md py-2 px-3 w-full"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold">Age:</label>
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="border rounded-md py-2 px-3 w-full"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold">Breed:</label>
            <input
              type="text"
              name="breed"
              value={formData.breed}
              onChange={handleChange}
              className="border rounded-md py-2 px-3 w-full"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold">Gender:</label>
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="border rounded-md py-2 px-3 w-full"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold">
              Description:
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="border rounded-md py-2 px-3 w-full h-20"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold">Image URL:</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="border rounded-md py-2 px-3 w-full"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold">Status:</label>
            <input
              type="text"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="border rounded-md py-2 px-3 w-full"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Adding..." : "Report"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default LostFoundForm;
