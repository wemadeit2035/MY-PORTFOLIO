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
    <nav className="fixed top-0 w-full px-4 py-3 bg-gray-900/80 backdrop-blur-lg z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex items-center">
          <img
            title="logo"
            src="/images/logo.webp"
            alt="XYLR"
            className="h-10 w-auto transition-transform duration-300 hover:scale-110 hover:rotate-12"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <Link
            to="/projects"
            className={`px-4 py-2 font-semibold transition-all duration-300 rounded-lg ${
              isActiveLink("/projects")
                ? "text-white bg-accent/20 border border-accent/30"
                : "text-accent hover:text-white hover:bg-white/10"
            }`}
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link
            to="/skills"
            className={`px-4 py-2 font-semibold transition-all duration-300 rounded-lg ${
              isActiveLink("/skills")
                ? "text-white bg-accent/20 border border-accent/30"
                : "text-accent hover:text-white hover:bg-white/10"
            }`}
            onClick={closeMenu}
          >
            Skills
          </Link>
          <Link
            to="/about"
            className={`px-4 py-2 font-semibold transition-all duration-300 rounded-lg ${
              isActiveLink("/about")
                ? "text-white bg-accent/20 border border-accent/30"
                : "text-accent hover:text-white hover:bg-white/10"
            }`}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`px-4 py-2 font-semibold transition-all duration-300 rounded-lg ${
              isActiveLink("/contact")
                ? "text-white bg-accent/20 border border-accent/30"
                : "text-accent hover:text-white hover:bg-white/10"
            }`}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-accent text-2xl p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
          onClick={() => setIsActive(!isActive)}
          aria-label="Toggle menu"
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-lg border-b border-white/10 transition-all duration-300 ease-in-out ${
          isActive
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          <Link
            to="/projects"
            className={`block px-6 py-3 font-semibold text-lg transition-all duration-300 rounded-lg ${
              isActiveLink("/projects")
                ? "text-white bg-accent/20 border border-accent/30"
                : "text-accent hover:text-white hover:bg-white/10"
            }`}
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link
            to="/skills"
            className={`block px-6 py-3 font-semibold text-lg transition-all duration-300 rounded-lg ${
              isActiveLink("/skills")
                ? "text-white bg-accent/20 border border-accent/30"
                : "text-accent hover:text-white hover:bg-white/10"
            }`}
            onClick={closeMenu}
          >
            Skills
          </Link>
          <Link
            to="/about"
            className={`block px-6 py-3 font-semibold text-lg transition-all duration-300 rounded-lg ${
              isActiveLink("/about")
                ? "text-white bg-accent/20 border border-accent/30"
                : "text-accent hover:text-white hover:bg-white/10"
            }`}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`block px-6 py-3 font-semibold text-lg transition-all duration-300 rounded-lg ${
              isActiveLink("/contact")
                ? "text-white bg-accent/20 border border-accent/30"
                : "text-accent hover:text-white hover:bg-white/10"
            }`}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isActive && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
