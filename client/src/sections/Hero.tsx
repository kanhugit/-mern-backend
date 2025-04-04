import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { fadeIn, staggerContainer, textVariant } from '@/lib/animations';
import { personalInfo } from '@/data/portfolioData';
import { ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';
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
          className="grid lg:grid-cols-2 gap-10 items-center"
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
              <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary hover:to-purple-500">
                View Projects
              </Button>
              <Button variant="outline" size="lg">
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
              <a 
                href={personalInfo.socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className={cn(
                  "hover:text-primary transition-colors",
                  isDark ? "text-gray-400" : "text-gray-500"
                )}
              >
                <Twitter size={24} />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Image or illustration */}
          <motion.div 
            variants={fadeIn('left')} 
            className="hidden lg:flex justify-center items-center"
          >
            <div className={cn(
              "relative w-80 h-80 rounded-full overflow-hidden",
              "border-4 border-primary",
              "bg-gradient-to-br from-primary/10 to-purple-500/10"
            )}>
              {/* Will be replaced with an actual profile image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-7xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  {personalInfo.firstName.charAt(0)}{personalInfo.lastName.charAt(0)}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          variants={fadeIn('up', 0.7)}
          initial="hidden"
          animate="visible"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
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