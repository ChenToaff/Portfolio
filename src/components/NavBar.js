import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      if (window.scrollY > 50 && isMenuOpen) setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  const headerStyle = {
    backgroundColor: isMenuOpen
      ? "white"
      : `rgba(255, 255, 255, ${Math.min(scrollPosition / 200, 1)})`,
    boxShadow: scrollPosition > 50 ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
  };

  return (
    <header
      style={headerStyle}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out"
    >
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="text-lg font-bold">Chen Toaff</div>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span>&#9776;</span> {/* hamburger icon */}
        </button>
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col absolute top-full left-0 w-full bg-white shadow-md md:contents`}
        >
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer p-2 text-center"
            activeClass="active"
            spy={true}
            offset={-50}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer p-2 text-center"
            activeClass="active"
            spy={true}
            offset={-50}
            onClick={() => setIsMenuOpen(false)}
          >
            About me
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer p-2 text-center"
            activeClass="active"
            spy={true}
            offset={-50}
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer p-2 text-center"
            activeClass="active"
            spy={true}
            offset={-50}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
