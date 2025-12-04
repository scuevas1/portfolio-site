import { useState } from "react";
import ResumeCarousel from "../components/resumeCarousel";

export default function Resume() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="resume-page">

      <header className="resume-hero">
        <h1 className="resume-name">Suheily Cuevas</h1>
        <p className="resume-tag">
          Information Technology Intern • Psychology • Networking
        </p>
        <p className="resume-subtitle">Resume</p>

        <div className="resume-links">
          <a href="mailto:suheily.cuevas24@gmail.com">Email</a>
          <a href="tel:312-868-3395">Phone</a>
          <a href="https://linkedin.com/in/suheily-cuevas" target="_blank">LinkedIn</a>
        </div>
      </header>
      <section className="resume-instructions">
        <ResumeCarousel onSelect={setSelectedItem} />
        <p className="resume-instruction">Click a card to view more details.</p>
      </section>
      {selectedItem && (
        <div className="carousel-details">
          <h2 className="details-title">{selectedItem.title}</h2>

          <div className="details-meta">
            <span className="details-chip">{selectedItem.category}</span>
            {selectedItem.date && <span className="details-chip">{selectedItem.date}</span>}
          </div>

          <p className="details-description">{selectedItem.description}</p>

          <div className="details-badges">
            {selectedItem.badges?.map((badge, i) => (
              <span key={i} className="details-badge">{badge}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
