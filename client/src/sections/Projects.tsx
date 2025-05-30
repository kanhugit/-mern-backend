import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, projectCategories } from '@/data/portfolioData';
import { fadeIn, staggerContainer, textVariant } from '@/lib/animations';
import { useTheme } from '@/lib/ThemeContext';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Code, ArrowRight, Monitor, Info, X, CheckSquare, List } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Projects: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('code');
  
  // Filter projects based on selected category
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const openProjectDetails = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  return (
    <section id="projects" className="py-20 alt-section">
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
            My <span className="text-primary">Projects</span>
          </motion.h2>
          <motion.div 
            variants={textVariant(0.2)}
            className="mx-auto w-24 h-1 bg-primary mb-6"
          ></motion.div>
          <motion.p 
            variants={textVariant(0.3)}
            className="max-w-2xl mx-auto text-muted-foreground"
          >
            Explore some of my recent work and personal projects
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={fadeIn('up')}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <Button
            variant={activeCategory === 'All' ? 'default' : 'outline'}
            onClick={() => setActiveCategory('All')}
            className={cn(
              activeCategory === 'All' 
                ? 'gradient-button border-none' 
                : 'border-primary text-primary hover:text-primary/90 hover:bg-primary/5'
            )}
          >
            All
          </Button>
          
          {projectCategories.map((category, index) => (
            <Button
              key={index}
              variant={activeCategory === category ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category)}
              className={cn(
                activeCategory === category 
                  ? 'gradient-button border-none' 
                  : 'border-primary text-primary hover:text-primary/90 hover:bg-primary/5'
              )}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeIn('up', index * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className={cn(
                "h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all rounded-xl",
                isDark 
                  ? "bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm" 
                  : "bg-gradient-to-br from-white to-gray-50"
              )}>
                <div className="relative h-52 overflow-hidden group">
                  {/* Colorful top border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-blue-500"></div>
                  
                  {/* Overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  <div className="absolute top-3 right-3 z-10">
                    <Badge className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-500/90 border-0 text-white shadow-md">
                      {project.category}
                    </Badge>
                  </div>
                  
                  {/* Project title on hover overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                
                <CardContent className="pt-6 pb-2">
                  <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline"
                        className={cn(
                          "border-0 bg-gradient-to-r shadow-sm",
                          techIndex % 3 === 0 ? "from-primary/10 to-primary/5" :
                          techIndex % 3 === 1 ? "from-purple-500/10 to-purple-500/5" :
                          "from-blue-500/10 to-blue-500/5"
                        )}
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="bg-gray-500/10 border-0">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                </CardContent>
                
                <CardFooter className="pt-0 pb-4 px-6 flex gap-3 flex-wrap">
                  <Button 
                    variant="default" 
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-500/90 border-0 shadow-md hover:shadow-lg transition-all duration-300"
                    asChild
                  >
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <ExternalLink className="h-4 w-4 mr-2" /> Demo
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 bg-transparent border border-primary/30 text-primary hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
                    asChild
                  >
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <Code className="h-4 w-4 mr-2" /> Code
                    </a>
                  </Button>
                  
                  <Button 
                    variant="secondary" 
                    size="sm"
                    className="w-full mt-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-foreground"
                    onClick={() => openProjectDetails(project)}
                  >
                    <Info className="h-4 w-4 mr-2" /> View Details
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* View All Projects */}
        {activeCategory !== 'All' && (
          <motion.div 
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="text-center mt-10"
          >
            <Button 
              variant="outline" 
              onClick={() => setActiveCategory('All')}
              className="group border-primary text-primary hover:text-primary/90 hover:bg-primary/5"
            >
              View All Projects 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        )}
      </div>

      {/* Project Details Dialog */}
      {selectedProject && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 rounded-xl">
            {/* Header with background image and gradient overlay */}
            <div className="relative h-48 md:h-64 w-full overflow-hidden rounded-t-xl">
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40 z-10"></div>
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-4 right-4 z-20">
                <DialogClose className="h-8 w-8 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors">
                  <X className="h-4 w-4" />
                </DialogClose>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <Badge className="bg-gradient-to-r from-primary to-purple-600 border-0 text-white mb-2">
                  {selectedProject.category}
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {selectedProject.title}
                </h2>
              </div>
            </div>
            
            <div className="p-6">
              <DialogDescription className="text-base mb-6">
                {selectedProject.description}
              </DialogDescription>
            
              <div className="border rounded-xl p-4 bg-card shadow-sm">
                <Tabs defaultValue="code" onValueChange={setActiveTab}>
                  <TabsList className="grid grid-cols-2 mb-4">
                    <TabsTrigger value="code" className="flex items-center gap-2">
                      <Code className="h-4 w-4" /> Code Examples
                    </TabsTrigger>
                    <TabsTrigger value="demo" className="flex items-center gap-2">
                      <Monitor className="h-4 w-4" /> Demo Details
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="code" className="pt-2">
                    {selectedProject.codeSnippets && selectedProject.codeSnippets.length > 0 ? (
                      <div className="space-y-6">
                        <div className="grid grid-cols-3 gap-2 mb-4 border-b pb-3">
                          {selectedProject.codeSnippets.map((snippet: { title: string; language: string; code: string }, idx: number) => (
                            <Button 
                              key={idx} 
                              variant={idx === 0 ? "default" : "outline"}
                              size="sm"
                              className="text-xs"
                              onClick={() => {
                                // Logic to switch between code snippets could be added here
                              }}
                            >
                              {snippet.title}
                            </Button>
                          ))}
                        </div>
                        
                        <div className="rounded-md overflow-hidden">
                          <div className="bg-primary/10 py-2 px-4 font-medium">
                            {selectedProject.codeSnippets[0].title} 
                            <Badge className="ml-2 text-xs">{selectedProject.codeSnippets[0].language}</Badge>
                          </div>
                          <pre className="p-4 overflow-x-auto bg-gray-100 dark:bg-gray-900 rounded-b-md">
                            <code className="text-sm">
                              {selectedProject.codeSnippets[0].code}
                            </code>
                          </pre>
                        </div>
                        
                        <p className="text-sm text-muted-foreground">
                          This code snippet shows a key part of the {selectedProject.title} project. 
                          The full source code is available on GitHub.
                        </p>
                      </div>
                    ) : (
                      <div className="text-center p-8">
                        <Code className="h-16 w-16 mx-auto text-primary/40" />
                        <p className="mt-4 text-muted-foreground">
                          No code examples available for this project.
                        </p>
                      </div>
                    )}
                  </TabsContent>
                  
                  <TabsContent value="demo" className="pt-2">
                    {selectedProject.demoDetails ? (
                      <div className="space-y-6">
                        <h3 className="text-lg font-medium">About the Project</h3>
                        <p className="text-muted-foreground">
                          {selectedProject.demoDetails.description}
                        </p>
                        
                        <div>
                          <h3 className="text-lg font-medium mb-3 flex items-center">
                            <CheckSquare className="h-5 w-5 mr-2 text-primary" />
                            Key Features
                          </h3>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {selectedProject.demoDetails.features.map((feature: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="h-5 w-5 flex items-center justify-center mt-0.5">
                                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                                </div>
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-medium mb-3 flex items-center">
                            <Monitor className="h-5 w-5 mr-2 text-primary" />
                            Screenshots
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {selectedProject.demoDetails.screenshots.map((screenshot: { title: string; description: string }, idx: number) => (
                              <div key={idx} className="border rounded-md overflow-hidden">
                                <div className="bg-primary/10 p-2 font-medium text-sm">
                                  {screenshot.title}
                                </div>
                                <div className="p-3">
                                  <p className="text-sm text-muted-foreground">
                                    {screenshot.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-primary/5 p-4 rounded-md">
                          <h3 className="text-lg font-medium mb-2 flex items-center">
                            <List className="h-5 w-5 mr-2 text-primary" />
                            Technologies Used
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.technologies.map((tech: string, idx: number) => (
                              <Badge 
                                key={idx} 
                                variant="outline"
                                className="bg-background"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center p-8">
                        <Monitor className="h-16 w-16 mx-auto text-primary/40" />
                        <p className="mt-4 text-muted-foreground">
                          No demo details available for this project.
                        </p>
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              </div>

              <DialogFooter className="mt-6 flex-col sm:flex-row gap-3">
                <Button 
                  variant="outline"
                  className="flex-1 border-primary/30 hover:border-primary/50 text-primary"
                  asChild
                >
                  <a href={selectedProject.codeLink} target="_blank" rel="noopener noreferrer">
                    <Code className="h-4 w-4 mr-2" /> View Source Code
                  </a>
                </Button>
                <Button 
                  className="flex-1 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-500/90 border-0 text-white shadow-md"
                  asChild
                >
                  <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" /> View Live Demo
                  </a>
                </Button>
              </DialogFooter>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default Projects;
