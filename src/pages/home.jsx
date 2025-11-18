// src/pages/home.jsx
export default function Home() {
  return (
    <main className="page-content">
      <header className="home-hero" id="top">
        <div className="home-hero-inner">
          <p className="home-tagline">Information Technology &amp; Management Student</p>

          <h1 className="home-title">Suheily Cuevas</h1>

          <p className="home-sub">
            Welcome! I’m a Latina Information Technology and Management student
            passionate about technology, creativity, and continuous growth.
          </p>

          <div className="home-actions">
            <a href="#about" className="btn-primary">Learn more</a>
            <a href="/contact" className="btn-secondary">Contact</a>
          </div>
        </div>
      </header>

      <section className="about-me" id="about">
        <h2 className="about-title">ABOUT ME</h2>
        <p className="about-text">
          My name is Suheily Cuevas, and I'm a proud Puerto Rican and Mexican woman
          born and raised in Chicago, IL. I'm currently pursuing both my bachelor's
          and master's degrees in Information Technology and Management at Illinois Tech.
        </p>
        <p className="about-text">
          I'm passionate about building a career in networking and systems management,
          with a goal of becoming a network administrator.
        </p>
        <p className="about-text">
          Outside of school and work, I love exploring Chicago's food scene, traveling
          to new places, and spending time with my family. I also have a deep love for
          music, and you can usually find me at concerts or festivals around the city.
        </p>
      </section>

      <footer className="home-footer">
        <div className="copyright">
          <p>© 2025 Suheily Cuevas</p>
          <div className="address">
            <p>Chicago, IL</p>
            <p>
              <a href="mailto:suheily.cuevas24@gmail.com">
                suheily.cuevas24@gmail.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
