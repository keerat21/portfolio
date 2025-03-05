import React, { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">Keerat Tanwar &lt;/&gt;</div>

      <ul className={`navbar__links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="www.google.com">Contact</a>
        </li>
      </ul>

      <button className="navbar__toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav >
  );
};

export default Navbar;
