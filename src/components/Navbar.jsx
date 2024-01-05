import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [navLinks, setNavLinks] = useState(false);
  const toogleMenu = () => {
    setMenuToggle(!menuToggle);
    if (menuToggle == false) {
      setNavLinks(!navLinks);
    } else {
      setNavLinks(!navLinks);
    }
  };
  const handleClick = (sectionId) => {
    scrollToSection(sectionId);
  };

  return (
    <div className="navbar">
      {navLinks && (
        <div className="modal">
          <a href="/">01. Home</a>
          <a href="/about">02. About</a>
          <a href="/experience">03. Experience</a>
          <a href="/work">04. Work</a>
          <a href="/contact">05. Contact</a>
        </div>
      )}
      <div className="logo">PE</div>
      <div className="links">
        <a href="/">01. Home</a>
        <a href="/about">02. About</a>
        <a href="/experience">03. Experience</a>
        <a href="/work">04. Work</a>
        <a href="/contact">05. Contact</a>
      </div>
      <div className="menu">
        {menuToggle === false ? (
          <button onClick={toogleMenu}>
            <HiMenuAlt3 />
          </button>
        ) : (
          <button onClick={toogleMenu}>
            <AiOutlineClose />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
