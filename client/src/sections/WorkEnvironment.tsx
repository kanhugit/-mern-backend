import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '@/lib/animations';
import laptopBg from '../assets/laptop-background.gif';

const WorkEnvironment: React.FC = () => {
  return (
    <section id="work-environment" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mb-12"
        >
          <motion.h2 
            variants={textVariant(0.1)} 
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            My <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Work Environment</span>
          </motion.h2>
          <motion.p 
            variants={textVariant(0.2)} 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Where innovation happens and code comes to life
          </motion.p>
        </motion.div>
        
        {/* Laptop GIF Display */}
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl hover:shadow-primary/20 transition-all duration-500">
            <img 
              src={laptopBg} 
              alt="Development Environment" 
              className="w-full h-auto object-cover"
            />
            
            {/* Overlay with tech stack labels */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 md:p-8">
              <h3 className="text-white text-xl md:text-2xl font-bold mb-2">Crafting Digital Experiences</h3>
              <p className="text-white/90 mb-4 max-w-xl">
                Equipped with the latest tools and technologies to build modern, responsive, and high-performance applications.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Java', 'React', 'Spring Boot', 'MongoDB', 'Node.js', 'Express', 'REST APIs'].map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-primary/80 text-white px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkEnvironment;