import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-14">
            <motion.span 
              className="text-primary font-medium px-4 py-2 rounded-full border border-primary/20 inline-flex items-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              About Me
            </motion.span>
            <motion.h2 
              className="font-poppins font-bold text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Get to Know Me Better
            </motion.h2>
          </div>
        </div>
        <div className="row align-items-center">
          <motion.div 
            className="col-lg-5 mb-10 mb-lg-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-xl">
                <img 
                  src={personalInfo.aboutImage || "https://via.placeholder.com/800x1000"} 
                  alt="About me" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-dots rounded-lg"></div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-dots rounded-lg"></div>
            </div>
          </motion.div>
          <motion.div 
            className="col-lg-6 offset-lg-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-poppins font-semibold text-2xl mb-6">
              I'm a {personalInfo.title} with a passion for building beautiful, functional applications
            </h3>
            <p className="text-gray-600 mb-8">
              {personalInfo.aboutLong}
            </p>
            <p className="text-gray-600 mb-8">
              {personalInfo.aboutSecondary}
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div>
                <h4 className="font-semibold text-lg mb-3">Personal Details</h4>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="text-primary mr-2 font-medium">Age:</span>
                    <span>{personalInfo.age}</span>
                  </li>
                  <li className="flex">
                    <span className="text-primary mr-2 font-medium">Location:</span>
                    <span>{personalInfo.location}</span>
                  </li>
                  <li className="flex">
                    <span className="text-primary mr-2 font-medium">Email:</span>
                    <span>{personalInfo.email}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.interests.map((interest, index) => (
                    <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <motion.a 
              href={personalInfo.resumeUrl}
              className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Download CV
              <i className="bi bi-download ml-2"></i>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
