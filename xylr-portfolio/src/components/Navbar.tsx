import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsActive(false);
  };

  const isActiveLink = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <Link to="/" onClick={closeMenu}>
        <img title="logo" src="/images/logo.webp" alt="XYLR" className="logo" />
      </Link>
      <div className={`nav-links ${isActive ? "active" : ""}`}>
        <Link
          to="/projects"
          className={isActiveLink("/projects") ? "active" : ""}
          onClick={closeMenu}
        >
          Projects
        </Link>
        <Link
          to="/skills"
          className={isActiveLink("/skills") ? "active" : ""}
          onClick={closeMenu}
        >
          Skills
        </Link>
        <Link
          to="/about"
          className={isActiveLink("/about") ? "active" : ""}
          onClick={closeMenu}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={isActiveLink("/contact") ? "active" : ""}
          onClick={closeMenu}
        >
          Contact
        </Link>
      </div>
      <div className="menu-toggle" onClick={() => setIsActive(!isActive)}>
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
