import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/footer.jsx";

import Home from "./pages/home.jsx";
import Resume from "./pages/resume.jsx";
import Contact from "./pages/contact.jsx";
import Travel from "./pages/travel.jsx";
import TravelDetails from "./pages/travelDetails.jsx";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />

      <div className="main-content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/travel/:slug" element={<TravelDetails />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
