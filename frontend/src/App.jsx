import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Dogs from "./pages/Adoption-Doglist";
import AdoptionForm from "./pages/AdoptionForm";
import DonatePage from "./pages/DonatPage";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/adoptionform" element={<AdoptionForm />} />
          <Route path="/donation" element={<DonatePage />} />
        </Routes>
      </div>
    </Router>
  );
}
