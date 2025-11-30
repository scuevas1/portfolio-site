import Navbar from "./components/Navbar.jsx";
import Footer from "./components/footer.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home.jsx";
import Resume from "./pages/resume.jsx";
import Contact from "./pages/contact.jsx";
import Travel from "./pages/travel.jsx";
import TravelDetails from "./pages/travelDetails.jsx";

function App() {
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
