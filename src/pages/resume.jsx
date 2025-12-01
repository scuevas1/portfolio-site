export default function Resume() {
  return (
    <div className="resume-page">
      
      <header className="resume-hero">
        <h1 className="resume-name">Suheily Cuevas</h1>
        <p className="resume-tag">
          Information Technology Intern • Psychology • Networking
        </p>

        <div className="resume-links">
          <a href="mailto:suheily.cuevas24@gmail.com">Email</a>
          <a href="tel:312-868-3395">Phone</a>
          <a href="https://linkedin.com/in/suheily-cuevas" target="_blank">
            LinkedIn
          </a>
        </div>
      </header>

      <section className="resume-section">
        <h2>Education</h2>
        <div className="resume-card neon-border">
          <h3>Illinois Institute of Technology</h3>
          <p>B.S & M.S in Information Technology and Management</p>
          <p className="resume-small">Expected Graduation: May 2027</p>
          <p className="resume-small">GPA: 3.92</p>
        </div>
      </section>

      <section className="resume-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <span>Python</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Networking</span>
          <span>Technical Support</span>
          <span>Bilingual: Spanish + English</span>
        </div>
      </section>

      <section className="resume-section">
        <h2>Experience</h2>

        <div className="timeline">
          <div className="timeline-item">
            <h3>IT Intern – Metra Commuter Rail</h3>
            <p>APR 2025 – Present</p>
            <ul>
              <li>Troubleshoot hardware + software tickets</li>
              <li>Assist with onboarding and system setup</li>
              <li>Support department-wide projects</li>
            </ul>
          </div>

          <div className="timeline-item">
            <h3>IT Intern – Museum of Science and Industry</h3>
            <p>MAY 2023 – AUG 2023</p>
            <ul>
              <li>Built SharePoint intranet for staff</li>
              <li>Supported 300+ employees with Office 365</li>
              <li>Helped onboard new hires and phone systems</li>
            </ul>
          </div>

          <div className="timeline-item">
            <h3>IT Intern – Chicago Public Schools</h3>
            <p>JUN 2021 – AUG 2021</p>
            <ul>
              <li>Set up laptops for 3,000+ students</li>
              <li>Assisted teachers with help desk requests</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2>Achievements</h2>
        <div className="resume-card">
          Dean’s List (Fall 2022 – Spring 2025)
        </div>
      </section>

    </div>
  );
}
