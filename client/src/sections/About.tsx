import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, stats, experience } from '@/data/portfolioData';
import { fadeIn, staggerContainer, textVariant } from '@/lib/animations';
import { MapPin, Mail, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/ThemeContext';
import { Card, CardContent } from '@/components/ui/card';

const About: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={textVariant(0.1)}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            About <span className="text-primary">Me</span>
          </motion.h2>
          <motion.div 
            variants={textVariant(0.2)}
            className="mx-auto w-24 h-1 bg-primary mb-6"
          ></motion.div>
          <motion.p 
            variants={textVariant(0.3)}
            className="max-w-2xl mx-auto text-muted-foreground"
          >
            Here you'll find more information about me, what I do, and my current skills
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Personal Info */}
          <motion.div
            variants={fadeIn('right')}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h3 className="text-2xl font-bold mb-6">Get to know me!</h3>
            
            <div className="space-y-6">
              <p className="text-muted-foreground">
                I'm a <span className="font-medium text-foreground">Full Stack Web Developer</span> building robust and user-friendly web applications that solve real-world problems. Check out some of my work in the Projects section.
              </p>
              
              <p className="text-muted-foreground">
                I also like sharing content related to the stuff that I have learned over the years in web development so it can help other people of the dev community.
              </p>
              
              <p className="text-muted-foreground">
                I'm open to job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills then don't hesitate to contact me.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <MapPin className="text-primary h-5 w-5" />
                  <span>{personalInfo.location}</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="text-primary h-5 w-5" />
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="hover:text-primary transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="text-primary h-5 w-5" />
                  <a 
                    href={`tel:${personalInfo.phone}`} 
                    className="hover:text-primary transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Stats */}
          <motion.div
            variants={fadeIn('left')}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h3 className="text-2xl font-bold mb-6">My Achievements</h3>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card 
                  key={index}
                  className={cn(
                    "border-2 hover:border-primary transition-colors duration-300",
                    isDark ? "bg-background/50" : "bg-background/50"
                  )}
                >
                  <CardContent className="p-6 text-center">
                    <h4 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </h4>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3">Main Focus</h3>
              <ul className="space-y-2">
                {personalInfo.interests.map((interest, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;