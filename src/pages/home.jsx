import { useEffect, useState } from "react";
import { useTypedName } from "../utils/home";
import "../App.css";

export default function Home() {
  const [typedName, setTypedName] = useState("");
  const startTyping = useTypedName("Suheily Cuevas", 120);

  useEffect(() => {
    const cleanup = startTyping(setTypedName);
    return cleanup;
  }, []);

  return (
    <div className="page-content">

      <header className="home-hero fade-in">
        <div className="home-hero-inner">
          <p className="home-tagline">
            IT & Management Student • Chicago • Latina in Tech
          </p>

          <h1 className="home-title">{typedName}</h1>

          <p className="home-sub fade-in-delay">
            Welcome! I’m an Information Technology & Management student passionate 
            about networking, systems, creativity, and continuous growth.
          </p>

          <div className="home-actions fade-in-delay">
            <a href="#about" className="btn-primary">Learn More</a>
            <a href="/resume" className="btn-secondary">View Resume</a>
          </div>
        </div>
      </header>

      <section className="about-me fade-in" id="about">
        <h2 className="about-title">ABOUT ME</h2>

        <p className="about-text">
          My name is Suheily Cuevas, and I'm a proud Puerto Rican and Mexican woman
          from Chicago, IL. I'm pursuing both my bachelor's and master's degrees 
          in Information Technology & Management at Illinois Tech.
        </p>

        <p className="about-text">
          My focus is networking and systems administration. I love solving technical
          problems, building systems, and learning how technology empowers people.
        </p>

        <p className="about-text">
          Outside of school and work, I love exploring Chicago’s food scene, 
          traveling, and going to concerts. Music + tech are my favorite combo.
        </p>
      </section>

      <section className="featured-section fade-in">
        <h2 className="section-title">Explore</h2>

        <div className="feature-grid">
          <a href="/travel" className="feature-card travel-card">
            <h3>Travel</h3>
            <p>Places I’ve visited and captured.</p>
          </a>

          <a href="/resume" className="feature-card resume-card">
            <h3>Resume</h3>
            <p>Skills, experience and education.</p>
          </a>

          <a href="/contact" className="feature-card contact-card">
            <h3>Contact</h3>
            <p>Connect with me professionally.</p>
          </a>
        </div>
      </section>
    </div>
  );
}
