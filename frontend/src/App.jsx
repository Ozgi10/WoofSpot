import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdoptionForm from "./components/AdoptionForm";
import "./index.css";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/adoption" element={<AdoptionForm />} />
        </Routes>
      </div>
    </Router>
  );
}
