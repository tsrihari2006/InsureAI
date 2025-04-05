import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/Navbar.css"; // Ensure correct CSS path

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation(); // Get current path

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to check if the current path matches the link
  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/" className={isActive("/")}>Home</Link></li>
        <li><Link to="/about" className={isActive("/about")}>About Us</Link></li>
        <li><Link to="/contact" className={isActive("/contact")}>Contact Us</Link></li>
        <li><Link to="/services" className={isActive("/services")}>Government Policies</Link></li>

        {/* Dropdown Menu */}
        <li className="dropdown" ref={dropdownRef}>
          <span className="dropdown-toggle" onClick={() => setDropdownOpen(!dropdownOpen)}>
            Insurance Types ▼
          </span>
          <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
            <li><Link to="/health-insurance" className={isActive("/health-insurance")}>🏥HealthInsurance</Link></li>
            <li><Link to="/vehicle-insurance" className={isActive("/vehicle-insurance")}>🚗VehicleInsurance</Link></li>
            <li><Link to="/life-insurance" className={isActive("/life-insurance")}>❤️LifeInsurance</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
