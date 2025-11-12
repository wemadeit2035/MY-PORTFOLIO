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
    <nav className="fixed top-0 w-full px-4 py-3 bg-gray-900/95 backdrop-blur-lg z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex items-center">
          <img
            title="logo"
            src="/images/logo.webp"
            alt="XYLR"
            className="h-8 w-auto transition-transform duration-300 hover:scale-110"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
          {["projects", "skills", "about", "contact"].map((path) => (
            <Link
              key={path}
              to={`/${path}`}
              className={`px-3 py-2 font-semibold transition-all duration-300 rounded-lg text-sm ${
                isActiveLink(`/${path}`)
                  ? "text-white bg-accent/20 border border-accent/30"
                  : "text-accent hover:text-white hover:bg-white/10"
              }`}
              onClick={closeMenu}
            >
              {path.charAt(0).toUpperCase() + path.slice(1)}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-accent text-xl p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
          onClick={() => setIsActive(!isActive)}
          aria-label="Toggle menu"
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-lg border-b border-white/10 transition-all duration-300 ease-in-out ${
          isActive
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {["projects", "skills", "about", "contact"].map((path) => (
            <Link
              key={path}
              to={`/${path}`}
              className={`block px-6 py-3 font-semibold text-lg transition-all duration-300 rounded-lg ${
                isActiveLink(`/${path}`)
                  ? "text-white bg-accent/20 border border-accent/30"
                  : "text-accent hover:text-white hover:bg-white/10"
              }`}
              onClick={closeMenu}
            >
              {path.charAt(0).toUpperCase() + path.slice(1)}
            </Link>
          ))}
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
