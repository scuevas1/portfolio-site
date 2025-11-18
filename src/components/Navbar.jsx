import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#000000ff" }}>
      <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
      <Link to="/contact" style={{ marginRight: "15px" }}>Contact</Link>
      <Link to="/travel" style={{ marginRight: "15px "}}>Travel</Link>
      <Link to="/resume">Resume</Link>
    </nav>
  );
}
