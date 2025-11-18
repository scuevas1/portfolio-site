import { Link, useLocation } from "react-router-dom";
import "../App.css"; 

export default function Navbar() {
  const { pathname } = useLocation(); 

  return (
    <nav className="navbar" id="navbar">
      <div>
        <Link to="/" className="initials-logo">SC</Link>
      </div>

      <div className="navbar-links">
        <ul>
          <li>
            <Link
              to="/"
              className={pathname === "/" ? "active navbuttons" : "navbuttons"}
            >
              HOMEPAGE
            </Link>
          </li>

          <li>
            <Link
              to="/resume"
              className={pathname === "/resume" ? "active navbuttons" : "navbuttons"}
            >
              RESUME
            </Link>
          </li>

          <li>
            <Link
              to="/travel"
              className={pathname === "/travel" ? "active navbuttons" : "navbuttons"}
            >
              TRAVEL
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className={pathname === "/contact" ? "active navbuttons" : "navbuttons"}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
