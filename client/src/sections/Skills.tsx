import React from 'react';
import { motion } from 'framer-motion';
import { technicalSkills, otherSkills } from '@/data/portfolioData';
import { fadeIn, staggerContainer, textVariant } from '@/lib/animations';
import { useTheme } from '@/lib/ThemeContext';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGithub, FaDocker, FaJira, FaGraduationCap, FaCode } from 'react-icons/fa';
import { SiSpring, SiHibernate, SiMongodb, SiMysql, SiOracle, SiTypescript, SiPostman, SiSwagger, SiJenkins, SiKubernetes, SiJunit5, SiRedis, SiApachekafka, SiEclipseide } from 'react-icons/si';
import { TbBrandGit } from 'react-icons/tb';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { BsFillKanbanFill } from 'react-icons/bs';

// Map skills to their respective icons
const skillIcons: Record<string, React.ReactElement> = {
  "Java": <FaJava size={28} />,
  "HTML": <FaHtml5 size={28} />,
  "CSS": <FaCss3Alt size={28} />,
  "JavaScript": <FaJs size={28} />,
  "TypeScript": <SiTypescript size={24} />,
  "React.js": <FaReact size={28} />,
  "Spring": <SiSpring size={24} />,
  "Spring Boot": <SiSpring size={28} />,
  "Hibernate and JPA": <SiHibernate size={24} />,
  "Bootstrap": <FaBootstrap size={28} />,
  "MongoDB": <SiMongodb size={28} />,
  "MySQL": <SiMysql size={28} />,
  "Oracle": <SiOracle size={24} />,
  "GitHub": <FaGithub size={28} />,
  "POSTMAN": <SiPostman size={24} />,
  "Swagger": <SiSwagger size={24} />,
  "JENKINS": <SiJenkins size={28} />,
  "Docker": <FaDocker size={28} />,
  "Kubernetes": <SiKubernetes size={24} />,
  "JUNIT": <SiJunit5 size={24} />,
  "Redis Cache": <SiRedis size={24} />,
  "Apache Kafka": <SiApachekafka size={24} />,
  "Eclipse": <SiEclipseide size={24} />,
  "VS Code": <FaCode size={24} />,
  "Gradle": <FaGraduationCap size={24} />,
  "JIRA": <FaJira size={24} />,
  "Agile Methodology": <BsFillKanbanFill size={24} />,
};

const Skills: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Create a flat array of all technical skills
  const allTechnicalSkills = technicalSkills.flatMap(category => 
    category.skills.map(skill => ({ skill, category: category.category }))
  );

  return (
    <section id="skills" className="section-padding">
      <div className="container">
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

        {/* Technical Skills - Circular Format */}
        <motion.div
          variants={fadeIn('up')}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold mb-12 text-center">Technical Skills</h3>
          
          <TooltipProvider>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {allTechnicalSkills
                .filter(item => skillIcons[item.skill]) // Only show skills with icons
                .map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn('up', index * 0.05)}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex flex-col items-center"
                  >
                    <Tooltip>
                      <TooltipTrigger>
                        <div className={cn(
                          "skill-circle w-16 h-16 md:w-20 md:h-20 text-primary",
                          isDark ? 'hover:bg-primary/30' : 'hover:bg-primary/20'
                        )}>
                          {skillIcons[item.skill]}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="font-medium">{item.skill}</p>
                        <p className="text-xs text-muted-foreground">{item.category}</p>
                      </TooltipContent>
                    </Tooltip>
                    <span className="mt-2 text-xs md:text-sm text-center font-medium">
                      {item.skill}
                    </span>
                  </motion.div>
              ))}
            </div>
          </TooltipProvider>

          {/* Skills without icons */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            className="mt-12"
          >
            <h4 className="text-xl font-semibold mb-6 text-center">Additional Tools & Technologies</h4>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {allTechnicalSkills
                .filter(item => !skillIcons[item.skill])
                .map((item, index) => (
                  <Badge 
                    key={index} 
                    variant="outline"
                    className="text-sm py-1.5 px-3 bg-primary/5 hover:bg-primary/10 border-primary/20"
                  >
                    {item.skill}
                  </Badge>
                ))}
            </div>
          </motion.div>
        </motion.div>
        
        {/* Other Skills */}
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-10"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Professional Skills</h3>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {otherSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.4 + index * 0.05)}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Badge 
                  variant="outline"
                  className="text-base py-2.5 px-5 bg-primary/5 hover:bg-primary/10 border-primary/20"
                >
                  {skillIcons[skill] && (
                    <span className="mr-2">{skillIcons[skill]}</span>
                  )}
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