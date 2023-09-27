import { Link } from "react-router-dom";
import  "../Layout/StyleSidebar.css";

 function Sidebar() {
  return (
    <div className="Navbar-Vertical">
      <ul>
      <li>
          <a><Link to="/Principal">Principal</Link></a>
        </li>
        <li>
          <a><Link to="/">Home</Link></a>
        </li>
        <li>
          <a><Link to="/Aboutme">About</Link></a>
        </li>
        <li>
          <a><Link to="/Services">Services</Link></a>
        </li>
        <li>
          <a><Link to="/Proyects">Proyects</Link></a>
        </li>
        <li>
          <a><Link to="/Skills">Skills</Link></a>
        </li>
        <li>
          <a><Link to="/Contact">Contact</Link></a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;