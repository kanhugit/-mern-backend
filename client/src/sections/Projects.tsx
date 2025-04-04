import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, projectCategories } from "@/data/portfolioData";

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50">
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
              My Work
            </motion.span>
            <motion.h2 
              className="font-poppins font-bold text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Recent Projects
            </motion.h2>
          </div>
        </div>
        
        <div className="row mb-10">
          <div className="col-lg-12">
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {["All", ...projectCategories].map((category, index) => (
                <motion.button
                  key={index}
                  className={`px-4 py-2 rounded-full ${
                    activeCategory === category
                      ? "bg-primary text-white"
                      : "bg-gray-200 hover:bg-gray-300 transition-colors"
                  }`}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
        
        <div className="row">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id} 
                className="col-md-6 col-lg-4 mb-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                exit={{ opacity: 0, y: 30 }}
                layout
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all project-card h-full">
                  <div className="overflow-hidden h-56">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {project.category}
                      </span>
                      <span className="text-gray-500 text-sm">{project.year}</span>
                    </div>
                    <h3 className="font-poppins font-semibold text-xl mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-gray-100 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a 
                        href={project.link} 
                        className="text-primary hover:text-primary/80 transition-colors"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <div className="row">
          <div className="col-lg-12 text-center">
            <motion.a
              href="#"
              className="px-6 py-3 rounded-lg border border-primary/20 text-primary font-medium hover:bg-primary/5 transition-all inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
              <i className="bi bi-arrow-right ml-2"></i>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
