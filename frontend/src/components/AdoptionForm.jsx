import { useState } from "react";

function AdoptionForm() {
  // Define your form state here
  const [formData, setFormData] = useState({
    date: "",
    id: "",
    userId: "",
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add code to send the form data to your backend
    // You can use Axios, Fetch, or any other HTTP library here
  };

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Adoption Questionnaire</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-600 mb-2">
            Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border rounded-lg py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="id" className="block text-gray-600 mb-2">
            Pet ID:
          </label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="w-full border rounded-lg py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="userId" className="block text-gray-600 mb-2">
            Your User ID:
          </label>
          <input
            type="text"
            id="userId"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            className="w-full border rounded-lg py-2 px-3"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdoptionForm;
