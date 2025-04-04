import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { fadeIn, staggerContainer, textVariant, zoomIn } from '@/lib/animations';
import { personalInfo } from '@/data/portfolioData';
import { ChevronDown, Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/ThemeContext';
import FloatingShapes from '@/components/FloatingShapes';

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // No need to define variants anymore as we're using inline animation

  return (
    <section 
      id="home" 
      ref={ref}
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-20 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-purple-500/30 animate-gradient-shift"></div>
      </div>
      
      {/* Floating Shapes Background */}
      <FloatingShapes className="-z-10" count={10} />
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={index}
            className={cn(
              "absolute rounded-full",
              index % 3 === 0 ? "bg-primary/10" : 
              index % 3 === 1 ? "bg-purple-500/10" : "bg-blue-500/5",
            )}
            style={{
              width: `${Math.random() * 50 + 10}px`,
              height: `${Math.random() * 50 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ 
              y: [0, -10, 0],
              x: [0, 5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.1,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-10 items-center"
        >
          {/* Text content */}
          <motion.div 
            variants={fadeIn('right', 0.2)} 
            className="flex flex-col gap-6"
          >
            <motion.div 
              variants={fadeIn('up', 0.1)}
              className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-sm md:text-base font-medium text-primary">
                Available for freelance work
              </span>
            </motion.div>
            
            <motion.span 
              variants={textVariant(0.2)} 
              className="text-lg md:text-xl font-medium text-primary"
            >
              Hello, I'm
            </motion.span>
            
            <motion.h1 
              variants={textVariant(0.3)} 
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
            >
              {personalInfo.firstName}{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent inline-block relative">
                {personalInfo.lastName}
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>
            </motion.h1>
            
            <motion.div
              variants={textVariant(0.4)}
              className="text-xl md:text-2xl font-semibold h-12 flex items-center"
            >
              <span className="text-muted-foreground mr-2">I'm a </span>
              <TypeAnimation
                sequence={[
                  personalInfo.title,
                  1500,
                  "UI/UX Designer",
                  1500,
                  "Backend Developer",
                  1500,
                  "React.js Developer",
                  1500,
                ]}
                speed={40}
                wrapper="span"
                repeat={Infinity}
                className="text-accent-foreground bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent animate-gradient-shift"
              />
            </motion.div>
            
            <motion.p 
              variants={textVariant(0.5)} 
              className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>
            
            <motion.div 
              variants={textVariant(0.6)} 
              className="flex gap-4 flex-wrap"
            >
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-500/90 transition-all duration-300 shadow-md hover:shadow-lg"
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects 
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="group border-primary/20 hover:border-primary/50 transition-all duration-300"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="flex items-center gap-2">
                  Contact Me
                  <Mail className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
              
              <Button
                variant="ghost"
                size="lg"
                className="hidden md:flex items-center gap-2 text-muted-foreground group hover:text-foreground"
                onClick={() => {
                  // Download Resume functionality
                  const link = document.createElement('a');
                  link.href = '/assets/resume.pdf';
                  link.download = 'Kanhu_Behera_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
                Resume
              </Button>
            </motion.div>
            
            <motion.div 
              variants={textVariant(0.7)} 
              className="flex items-center gap-6 mt-4"
            >
              <motion.a 
                href={personalInfo.socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                href={personalInfo.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                href={`mailto:${personalInfo.email}`}
                className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Profile image with animated effects */}
          <motion.div 
            variants={fadeIn('left', 0.4)} 
            className="flex flex-col justify-center items-center mt-8 lg:mt-0"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className={cn(
                "relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden profile-image-container",
                "border-4 border-primary/80 shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500",
              )}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 opacity-70 bg-gradient-to-br from-primary/30 via-transparent to-purple-500/30 animate-pulse-slow"></div>
              </div>
              
              {/* Animated circles with glows */}
              <div className="absolute inset-0 -z-5">
                <motion.div 
                  className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-primary/20 blur-md"
                  animate={{ 
                    y: [0, -10, 0], 
                    x: [0, 10, 0],
                    scale: [1, 1.1, 1] 
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-purple-500/20 blur-md"
                  animate={{ 
                    y: [0, 15, 0], 
                    x: [0, -15, 0],
                    scale: [1, 1.2, 1] 
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute top-1/3 -right-8 w-16 h-16 rounded-full bg-blue-500/20 blur-md"
                  animate={{ 
                    y: [0, -20, 0], 
                    scale: [1, 1.1, 1] 
                  }}
                  transition={{ duration: 7, repeat: Infinity }}
                />
              </div>
              
              {/* Image container with subtle hover animation */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 z-10"
              >
                <img 
                  src={personalInfo.profileImage} 
                  alt={`${personalInfo.firstName} ${personalInfo.lastName}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -z-1 inset-0 bg-gradient-radial from-transparent to-primary/5 opacity-30"></div>
            </motion.div>
            
            {/* Skills badges floating around image */}
            <motion.div 
              className="absolute top-1/4 -left-4 md:left-0 z-20"
              variants={zoomIn(0.7, 0.5)}
            >
              <div className="bg-background/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-primary/20">
                <span className="text-sm font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Java
                </span>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-1/3 -right-4 md:right-0 z-20"
              variants={zoomIn(0.9, 0.5)}
            >
              <div className="bg-background/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-primary/20">
                <span className="text-sm font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  React
                </span>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-2 left-1/3 z-20"
              variants={zoomIn(1.1, 0.5)}
            >
              <div className="bg-background/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-primary/20">
                <span className="text-sm font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Spring Boot
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          variants={fadeIn('up', 0.8)}
          initial="hidden"
          animate="visible"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          style={{ cursor: 'pointer' }}
          whileHover={{ y: 5 }}
        >
          <span className="text-sm font-medium text-muted-foreground">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="bg-primary/10 p-2 rounded-full"
          >
            <ChevronDown className="h-5 w-5 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;