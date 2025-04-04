import React from "react";
import { motion } from "framer-motion";
import { education, experience } from "@/data/portfolioData";

const Education: React.FC = () => {
  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="education" className="py-20 bg-gray-50">
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
              My Journey
            </motion.span>
            <motion.h2 
              className="font-poppins font-bold text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Education & Experience
            </motion.h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-10 mb-lg-0">
            <h3 className="font-poppins font-semibold text-2xl mb-8 flex items-center">
              <i className="bi bi-mortarboard-fill text-primary mr-3"></i>
              Education
            </h3>
            
            <motion.div
              variants={containerAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {education.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="relative pl-10 pb-10 timeline-item"
                  variants={itemAnimation}
                >
                  <div className="timeline-dot"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                    <div className="flex justify-between items-start mb-3 flex-wrap">
                      <h4 className="font-poppins font-semibold text-xl">{item.degree}</h4>
                      <span className="text-sm font-medium text-white bg-primary px-3 py-1 rounded-full mt-1">
                        {item.year}
                      </span>
                    </div>
                    <h5 className="text-gray-600 mb-3">{item.institution}</h5>
                    <p className="text-gray-500">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <div className="col-lg-6">
            <h3 className="font-poppins font-semibold text-2xl mb-8 flex items-center">
              <i className="bi bi-briefcase-fill text-primary mr-3"></i>
              Experience
            </h3>
            
            <motion.div
              variants={containerAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {experience.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="relative pl-10 pb-10 timeline-item"
                  variants={itemAnimation}
                >
                  <div className="timeline-dot"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                    <div className="flex justify-between items-start mb-3 flex-wrap">
                      <h4 className="font-poppins font-semibold text-xl">{item.position}</h4>
                      <span className="text-sm font-medium text-white bg-secondary px-3 py-1 rounded-full mt-1">
                        {item.year}
                      </span>
                    </div>
                    <h5 className="text-gray-600 mb-3">{item.company}</h5>
                    <p className="text-gray-500">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
