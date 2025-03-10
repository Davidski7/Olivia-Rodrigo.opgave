import { Link } from "react-router-dom";
import "../style/navbar.scss";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/songs">Songs</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/timeline">Timeline</Link></li>
      </ul>
    </nav>
  );
}
