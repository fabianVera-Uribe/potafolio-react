import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
      <Link to="contacto">Contact</Link>
    </nav>
  );
}

export default NavBar;
