import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { personalInfo } from "@/data/portfolioData";

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      <div className="container">
        <div className="row align-items-center">
          <motion.div
            className="col-lg-6 mb-5 mb-lg-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-medium px-4 py-2 rounded-full border border-primary/20 inline-flex items-center mb-6">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              {personalInfo.title}
            </span>
            <div className="mb-3">
              <h1 className="font-poppins font-bold text-5xl md:text-6xl mb-4">
                Hi, I'm {" "}
                <TypeAnimation
                  sequence={[personalInfo.name, 2000]}
                  speed={40}
                  wrapper="span"
                  repeat={Infinity}
                  className="text-primary"
                />
              </h1>
            </div>
            <p className="text-lg text-gray-600 mb-8 md:pr-10">
              {personalInfo.summary}
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="px-6 py-3 rounded-lg bg-primary text-white font-medium shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
              <motion.a
                href="#projects"
                className="px-6 py-3 rounded-lg border border-primary/20 text-primary font-medium hover:bg-primary/5 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </div>
            <div className="mt-10 flex items-center">
              <span className="text-gray-500 mr-4">Follow me on:</span>
              <div className="flex gap-4">
                <a
                  href={personalInfo.socialLinks.github}
                  className="text-dark hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-github text-xl"></i>
                </a>
                <a
                  href={personalInfo.socialLinks.linkedin}
                  className="text-dark hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-linkedin text-xl"></i>
                </a>
                <a
                  href={personalInfo.socialLinks.twitter}
                  className="text-dark hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-twitter text-xl"></i>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-full h-96 md:h-[450px] bg-gradient-to-tr from-primary/80 to-secondary/80 rounded-xl overflow-hidden shadow-xl">
                <img 
                  src={personalInfo.profileImage || "https://via.placeholder.com/800x1000"}
                  alt="Profile" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-80" 
                />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 border border-gray-100"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="text-sm text-gray-700 font-medium">Completed Projects</div>
                <div className="font-poppins font-bold text-3xl text-primary">{personalInfo.stats.projects}</div>
              </motion.div>
              <motion.div
                className="absolute -top-6 -left-6 bg-white rounded-lg shadow-lg p-4 border border-gray-100"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="text-sm text-gray-700 font-medium">Years Experience</div>
                <div className="font-poppins font-bold text-3xl text-primary">{personalInfo.stats.years}</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
