import "./App.css";
import Navbar from "./components/Navbar.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home.jsx";
import Resume from "./pages/resume.jsx";
import Contact from "./pages/contact.jsx";
import Travel from "./pages/travel.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="main-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/travel" element={<Travel />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}