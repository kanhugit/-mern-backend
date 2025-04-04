import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { fadeIn, staggerContainer, textVariant } from '@/lib/animations';
import { personalInfo } from '@/data/portfolioData';
import { ChevronDown, Github, Linkedin } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/ThemeContext';

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16"
    >
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-10 items-start"
        >
          {/* Text content */}
          <motion.div 
            variants={fadeIn('right')} 
            className="flex flex-col gap-6"
          >
            <motion.span 
              variants={textVariant(0.1)} 
              className="text-lg md:text-xl font-medium text-primary"
            >
              Hello, I'm
            </motion.span>
            
            <motion.h1 
              variants={textVariant(0.2)} 
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
            >
              {personalInfo.firstName}{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                {personalInfo.lastName}
              </span>
            </motion.h1>
            
            <motion.div
              variants={textVariant(0.3)}
              className="text-xl md:text-2xl font-semibold h-10"
            >
              <TypeAnimation
                sequence={[
                  personalInfo.title,
                  1000,
                  "UI/UX Designer",
                  1000,
                  "Backend Developer",
                  1000,
                  "Mobile App Developer",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
                className="text-accent-foreground"
              />
            </motion.div>
            
            <motion.p 
              variants={textVariant(0.4)} 
              className="text-base md:text-lg text-muted-foreground max-w-xl"
            >
              {personalInfo.bio}
            </motion.p>
            
            <motion.div 
              variants={textVariant(0.5)} 
              className="flex gap-4"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary hover:to-purple-500"
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Me
              </Button>
            </motion.div>
            
            <motion.div 
              variants={textVariant(0.6)} 
              className="flex items-center gap-4 mt-2"
            >
              <a 
                href={personalInfo.socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className={cn(
                  "hover:text-primary transition-colors",
                  isDark ? "text-gray-400" : "text-gray-500"
                )}
              >
                <Github size={24} />
              </a>
              <a 
                href={personalInfo.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className={cn(
                  "hover:text-primary transition-colors",
                  isDark ? "text-gray-400" : "text-gray-500"
                )}
              >
                <Linkedin size={24} />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Profile image with animated background and personal details */}
          <motion.div 
            variants={fadeIn('left')} 
            className="flex flex-col justify-center items-center mt-8 lg:mt-0"
          >
            <div className={cn(
              "relative w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden profile-image-container",
              "border-4 border-primary/80 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300",
            )}>
              {/* Animated background circles */}
              <div className="absolute inset-0 -z-10 animate-pulse-slow">
                <div className="absolute top-5 left-5 w-20 h-20 rounded-full bg-primary/20 animate-float-slow"></div>
                <div className="absolute bottom-10 right-5 w-12 h-12 rounded-full bg-purple-500/20 animate-float-medium"></div>
                <div className="absolute top-1/2 right-10 w-16 h-16 rounded-full bg-primary/10 animate-float-fast"></div>
                <div className="absolute bottom-1/4 left-1/4 w-10 h-10 rounded-full bg-purple-500/15 animate-spin-slow"></div>
              </div>
              
              {/* Radial gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-primary/5 -z-5"></div>
              
              <img 
                src={personalInfo.profileImage} 
                alt={`${personalInfo.firstName} ${personalInfo.lastName}`}
                className="absolute inset-0 w-full h-full object-cover z-10"
              />
            </div>
            

          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          variants={fadeIn('up', 0.7)}
          initial="hidden"
          animate="visible"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          style={{ cursor: 'pointer' }}
        >
          <span className="text-sm font-medium text-muted-foreground">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          >
            <ChevronDown className="h-6 w-6 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;