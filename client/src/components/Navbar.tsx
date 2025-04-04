import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    const targetId = e.currentTarget.getAttribute('href');
    if (!targetId) return;
    
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: (targetElement as HTMLElement).offsetTop - 80,
        behavior: 'smooth'
      });
      
      // Update active nav link
      document.querySelectorAll('.nav-link').forEach(navLink => {
        navLink.classList.remove('active');
      });
      e.currentTarget.classList.add('active');
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`navbar navbar-expand-lg fixed-top py-3 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container">
        <a className="navbar-brand flex items-center" href="#home">
          <span className="font-poppins text-2xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">JD</span>
          <span className="ml-2 font-poppins font-semibold text-dark">Portfolio</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link mx-2 active" href="#home" onClick={handleNavClick}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#about" onClick={handleNavClick}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#education" onClick={handleNavClick}>
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#skills" onClick={handleNavClick}>
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#projects" onClick={handleNavClick}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#contact" onClick={handleNavClick}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
