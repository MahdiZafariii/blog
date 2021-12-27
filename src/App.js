import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactusPage from "./pages/ContactusPage";
import AboutusPage from "./pages/AboutusPage";
import { Rotate } from "hamburger-react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/contact-us" element={<ContactusPage />} />
        <Route path="/about-us" element={<AboutusPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
