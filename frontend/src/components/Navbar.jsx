import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-semibold">
          Woof-Spot
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/dogs"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Adoption
            </Link>
          </li>
          <li>
            <Link
              to="/lostfound"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Lost & Found
            </Link>
          </li>
          <li>
            <Link
              to="/donation"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Donation
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
