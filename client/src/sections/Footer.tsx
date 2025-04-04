import React from 'react';
import { Github, Linkedin, Heart, Mail, MapPin, Phone } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-16 bg-gradient-to-b from-background to-primary/10">
      <motion.div 
        className="container mx-auto px-4 lg:px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <motion.div
            variants={fadeIn('right', 0.2)}
            className="flex flex-col"
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-4">
              Portfolio
            </h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Passionate full-stack developer proficient in Java, React, Spring Boot and modern web technologies. Building intuitive and performant applications.
            </p>
            <div className="flex gap-4 mt-auto">
              <motion.a 
                href={personalInfo.socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary/10 p-2 rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="Github"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={18} />
              </motion.a>
              <motion.a 
                href={personalInfo.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary/10 p-2 rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a 
                href={`mailto:${personalInfo.email}`}
                className="bg-primary/10 p-2 rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="Email"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={18} />
              </motion.a>
            </div>
          </motion.div>
          
          {/* Contact */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            className="flex flex-col"
          >
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <span>{personalInfo.email}</span>
              </div>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            variants={fadeIn('left', 0.4)}
            className="flex flex-col"
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  whileHover={{ x: 5, color: 'var(--primary)' }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Divider */}
        <motion.div 
          variants={fadeIn('up', 0.5)}
          className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent my-6"
        />
        
        {/* Copyright */}
        <motion.div 
          variants={fadeIn('up', 0.6)}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © {year} {personalInfo.firstName} {personalInfo.lastName}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" /> by {personalInfo.firstName} {personalInfo.lastName}
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;