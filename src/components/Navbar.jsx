import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import "../styles/Navbar.css";

const Navbar = () => {
  const startTag = "<";
  const endTag = "/>";
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
          <a href="#1">01. Home</a>
          <a href="#2">02. About</a>
          <a href="#3">03. Experience</a>
          <a href="#4">04. Work</a>
          <a href="#5">05. Contact</a>
        </div>
      )}
      <div className="logo">
        <span>{startTag}</span>UCMee<span>{endTag}</span>
      </div>
      <div className="links">
        <a href="#1">Home</a>
        <a href="#2">About</a>
        <a href="#3">Experience</a>
        <a href="#4">Work</a>
        <a href="#5">Contact</a>
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
