import { useState, useRef } from "react";
import resumeData from "../components/resumeData.json";
import { getVisibleIndices, scrollToCard } from "../utils/carouselLogic";

export default function resumeCarousel({ onSelect }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);

  const nextCard = () => {
    const newIndex = (currentIndex + 1) % resumeData.length;
    setCurrentIndex(newIndex);
    scrollToCard(trackRef, newIndex);
    onSelect(resumeData[newIndex]);
  };

  const prevCard = () => {
    const newIndex = (currentIndex - 1 + resumeData.length) % resumeData.length;
    setCurrentIndex(newIndex);
    scrollToCard(trackRef, newIndex);
    onSelect(resumeData[newIndex]);
  };

  const { left, right } = getVisibleIndices(currentIndex, resumeData.length);

  return (
    <div className="resume-carousel">
      <div className="carousel-row">
        <button className="carousel-arrow" onClick={prevCard}>‹</button>

        <div className="carousel-track" ref={trackRef}>
          {resumeData.map((item, index) => {
            let className = "carousel-card";

            if (index === currentIndex) className += " card-active";
            else if (index === left) className += " card-left";
            else if (index === right) className += " card-right";
            else className += " card-far";

            return (
              <div
                key={item.id}
                className={className}
                onClick={() => {
                  setCurrentIndex(index);
                  scrollToCard(trackRef, index);
                  onSelect(item);
                }}
              >
                <div className="carousel-card-title">{item.title}</div>
                <div className="carousel-card-category">{item.category}</div>
                <div className="carousel-card-date">{item.date}</div>
              </div>
            );
          })}
        </div>

        <button className="carousel-arrow" onClick={nextCard}>›</button>
      </div>
    </div>
  );
}
