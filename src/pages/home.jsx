import { useEffect, useState } from "react";
import "../App.css";

export default function Home() {
  const fullName = "Suheily Cuevas";
  const [typedName, setTypedName] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedName(fullName.slice(0, i));
      i++;
      if (i > fullName.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-content">

      <header className="home-hero fade-in">
        <div className="home-hero-inner">

          <p className="home-tagline fade-in-delay">
            IT & Management Student • Chicago • Latina in Tech
          </p>

          <h1 className="home-title typewriter-name">
            {typedName}
          </h1>

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
    </div>
  );
}
