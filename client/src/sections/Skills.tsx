import React from 'react';
import { motion } from 'framer-motion';
import { technicalSkills, otherSkills } from '@/data/portfolioData';
import { fadeIn, staggerContainer, textVariant } from '@/lib/animations';
import { useTheme } from '@/lib/ThemeContext';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const Skills: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="skills" className="py-20">
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
            My <span className="text-primary">Skills</span>
          </motion.h2>
          <motion.div 
            variants={textVariant(0.2)}
            className="mx-auto w-24 h-1 bg-primary mb-6"
          ></motion.div>
          <motion.p 
            variants={textVariant(0.3)}
            className="max-w-2xl mx-auto text-muted-foreground"
          >
            A snapshot of my technical toolkit and professional capabilities
          </motion.p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          variants={fadeIn('up')}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalSkills.map((category, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', index * 0.1)}
                className={cn(
                  "p-6 rounded-lg border-2",
                  isDark ? 'bg-background/50 border-border' : 'bg-background/50 border-border'
                )}
              >
                <h4 className="text-lg font-semibold mb-4 text-primary">{category.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline"
                      className="bg-primary/10 hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Other Skills */}
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Other Skills</h3>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {otherSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.4 + index * 0.05)}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Badge 
                  variant="outline"
                  className="text-base py-2 px-4 bg-primary/5 hover:bg-primary/10 border-primary/20"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;