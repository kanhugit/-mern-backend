import React from 'react';
import { motion } from 'framer-motion';
import { education } from '@/data/portfolioData';
import { fadeIn, staggerContainer, textVariant } from '@/lib/animations';
import { useTheme } from '@/lib/ThemeContext';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="education" className="py-20 education-section relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/5 -z-10"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-primary/5 -z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-primary/5 -z-10"></div>
      
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
            My <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Education</span>
          </motion.h2>
          <motion.div 
            variants={textVariant(0.2)}
            className="mx-auto w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mb-6"
          ></motion.div>
          <motion.p 
            variants={textVariant(0.3)}
            className="max-w-2xl mx-auto text-muted-foreground"
          >
            My academic journey and qualifications
          </motion.p>
        </motion.div>

        {/* Education Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeIn('up', index * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className={cn(
                "h-full overflow-hidden border-2 hover:border-primary transition-all duration-300",
                isDark ? "bg-background/50" : "card-gradient"
              )}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge 
                      className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary hover:to-primary"
                    >
                      {item.startDate} - {item.endDate}
                    </Badge>
                    
                    <div className="bg-primary/10 p-3 rounded-full">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">
                    {item.degree}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <h4 className="text-lg font-medium">
                      {item.institution}
                    </h4>
                  </div>
                  
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                  
                  {item.achievements && (
                    <div className="mt-4 pt-4 border-t">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="h-4 w-4 text-primary" />
                        <span className="font-medium">Achievements</span>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {item.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;