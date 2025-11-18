import { Link } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  return (
    <nav className="navbar" id="navbar">
      <div>
        <Link to="/" className="initials-logo">SC</Link>
      </div>

      <div className="navbar-links">
        <ul>
          <li><Link to="/" className="navbuttons">HOMEPAGE</Link></li>
          <li><Link to="/resume" className="navbuttons">RESUME</Link></li>
          <li><Link to="/travel" className="navbuttons">TRAVEL</Link></li>
          <li><Link to="/contact" className="navbuttons">CONTACT</Link></li>
        </ul>
      </div>
    </nav>
  );
}
