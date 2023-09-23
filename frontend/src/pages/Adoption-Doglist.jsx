import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Dogs = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    // Fetching data
    axios
      .get("https://doglist.cyclic.cloud/dogs") // deployed API URL
      .then((response) => {
        setDogs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <h1
        className="text-center text-2xl 
                         capitalize text-teal-400/100 rounded-4xl
                         w-112 bg-white hover:text-[#5c77ae]
                         transform hover:scale-110 transition duration-500 hover:border-[#5c77de]"
      >
        Available Dogs for Adoption🐶
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dogs.map((dog) => (
          <div
            key={dog._id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <img
              src={dog.image}
              alt={dog.name}
              className="w-full h-112 object-cover rounded-md"
              style={{ transform: "scale(0.75)" }}
            />
            <h2 className="text-xl font-semibold mt-2">{dog.name}</h2>
            <p className="text-gray-600">{dog.breed}</p>
            <p className="mt-2">{dog.description}</p>
            <Link to="/adoptionform">
              <button className="bg-blue-500 text-white mt-4 px-4 py-2 rounded hover:bg-blue-600">
                Adopt Me
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dogs;
