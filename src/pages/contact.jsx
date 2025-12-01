import "../App.css";

export default function Contact() {
  return (
    <div className="contact-page">

      <div className="contact-hero">
        <h1>Let’s Connect</h1>
        <p>I’m always open to new opportunities, collaborations, and tech conversations.</p>
      </div>

      <div className="contact-wrapper">

        <div className="contact-card">
          <h2>Contact Info</h2>

          <div className="contact-links">
            <a href="mailto:suheily.cuevas24@gmail.com">
              ✉ Email: <span>suheily.cuevas24@gmail.com</span>
            </a>

            <a href="https://linkedin.com/in/suheily-cuevas" target="_blank">
              🔗 LinkedIn Profile
            </a>

            <a href="/resume">
              📄 View Resume
            </a>
          </div>
        </div>

        <form className="contact-form">
          <h2>Send me a message</h2>

          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea rows="4" placeholder="Your Message" />

          <button type="submit" className="btn-glow">
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
}
