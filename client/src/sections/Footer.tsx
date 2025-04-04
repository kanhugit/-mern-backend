import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";

const Footer: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    const targetId = e.currentTarget.getAttribute('href');
    if (!targetId || !targetId.startsWith('#')) return;
    
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: (targetElement as HTMLElement).offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="py-10 bg-gray-900 text-white">
      <div className="container">
        <div className="row mb-8">
          <div className="col-lg-4 mb-6 mb-lg-0">
            <a className="flex items-center mb-4" href="#home" onClick={handleLinkClick}>
              <span className="font-poppins text-2xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">JD</span>
              <span className="ml-2 font-poppins font-semibold text-white">Portfolio</span>
            </a>
            <p className="text-gray-400 mb-6">
              Creating elegant web solutions with modern technologies. Let's build something amazing together.
            </p>
            <div className="flex gap-4">
              <a href={personalInfo.socialLinks.github} className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github"></i>
              </a>
              <a href={personalInfo.socialLinks.linkedin} className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href={personalInfo.socialLinks.twitter} className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter"></i>
              </a>
              <a href={personalInfo.socialLinks.instagram} className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-4 mb-6 mb-md-0">
            <h4 className="font-medium mb-4">Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors" onClick={handleLinkClick}>Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors" onClick={handleLinkClick}>About</a></li>
              <li><a href="#education" className="text-gray-400 hover:text-white transition-colors" onClick={handleLinkClick}>Education</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors" onClick={handleLinkClick}>Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors" onClick={handleLinkClick}>Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors" onClick={handleLinkClick}>Contact</a></li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-4 mb-6 mb-md-0">
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Consulting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Code Review</a></li>
            </ul>
          </div>
          
          <div className="col-lg-4 col-md-4">
            <h4 className="font-medium mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to receive updates and tech articles.</p>
            <form className="flex">
              <input type="email" placeholder="Your email address" className="px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-primary text-white" />
              <button type="submit" className="px-4 py-2 rounded-r-lg bg-primary text-white">
                <i className="bi bi-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
        
        <div className="row border-t border-gray-800 pt-8">
          <div className="col-md-6 mb-4 mb-md-0">
            <p className="text-gray-500">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="#" className="text-gray-500 hover:text-white transition-colors mr-4">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
