import Navbar from "./components/Navbar.jsx";
import Footer from "./components/footer.jsx";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/home.jsx";
import Resume from "./pages/resume.jsx";
import Contact from "./pages/contact.jsx";
import Travel from "./pages/travel.jsx";
import TravelDetails from "./pages/travelDetails.jsx";

// scroll component
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

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
