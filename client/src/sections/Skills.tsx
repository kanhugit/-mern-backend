import React from "react";
import { motion } from "framer-motion";
import { technicalSkills, otherSkills, stats } from "@/data/portfolioData";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white">
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
              My Abilities
            </motion.span>
            <motion.h2 
              className="font-poppins font-bold text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Skills & Expertise
            </motion.h2>
          </div>
        </div>
        
        <div className="row mb-10">
          <div className="col-lg-6 mb-10 mb-lg-0">
            <h3 className="font-poppins font-semibold text-2xl mb-8">Technical Skills</h3>
            
            {technicalSkills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="mb-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-primary font-medium">{skill.level}%</span>
                </div>
                <div className="skill-bar bg-gray-200">
                  <motion.div 
                    className="skill-percentage bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="col-lg-6">
            <h3 className="font-poppins font-semibold text-2xl mb-8">Other Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {otherSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="p-6 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-4 text-primary">
                    <i className={`bi ${skill.icon} text-4xl`}></i>
                  </div>
                  <h4 className="font-poppins font-semibold text-xl mb-2">{skill.name}</h4>
                  <p className="text-gray-600">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-12">
            <motion.div 
              className="p-10 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <motion.div 
                      className="font-poppins font-bold text-4xl text-primary mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-gray-600">{stat.title}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
