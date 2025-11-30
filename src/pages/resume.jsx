export default function Resume() {
  return (
    <div className="resume-page">

      <header className="resume-header" data-aos="fade">
        <h1 className="resume-title">Resume</h1>
        <p className="resume-sub">Information Technology • Chicago IL</p>
      </header>

      <div className="resume-grid">

        {/* LEFT SECTION */}
        <div className="resume-left">

          <section className="resume-block">
            <h2 className="resume-section-label">Summary</h2>
            <p>
              Information Technology student passionate about networking systems,
              troubleshooting, and building technology that helps people.
              Experienced working in fast-paced environments and supporting
              enterprise systems.
            </p>
          </section>

          <section className="resume-block">
            <h2 className="resume-section-label">Education</h2>
            <div className="resume-card neon-border">
              <h3>Illinois Institute of Technology</h3>
              <p>B.S. & M.S. Information Technology & Management</p>
              <span className="resume-tag">GPA 3.92</span>
            </div>
          </section>

          <section className="resume-block">
            <h2 className="resume-section-label">Honors</h2>
            <div className="resume-card neon-border">
              Dean’s List (2022 – 2025)
            </div>
          </section>

        </div>

        {/* RIGHT SECTION */}
        <div className="resume-right">

          <section className="resume-block">
            <h2 className="resume-section-label">Skills</h2>

            <div className="skills-grid">
              <span>Python</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>SharePoint</span>
              <span>Office 365</span>
              <span>Bilingual (English + Spanish)</span>
            </div>
          </section>

          <section className="resume-block">
            <h2 className="resume-section-label">Experience</h2>

            <div className="resume-card neon-border">
              <h3>IT Intern • Metra</h3>
              <p>2025 – Present</p>
            </div>

            <div className="resume-card neon-border">
              <h3>IT Intern • MSI Museum of Science & Industry</h3>
              <p>2023</p>
            </div>

            <div className="resume-card neon-border">
              <h3>IT Support Intern • Chicago Public Schools</h3>
              <p>2021</p>
            </div>

            <div className="resume-card neon-border">
              <h3>Girls Who Code</h3>
              <p>2020</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
