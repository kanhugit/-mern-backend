import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/ThemeContext';

type Message = {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
};

const predefinedResponses = [
  {
    triggers: ['hello', 'hi', 'hey', 'greetings'],
    responses: [
      "Hello! Welcome to Kanhu's portfolio. How can I help you today?",
      "Hi there! I'm Kanhu's virtual assistant. What would you like to know about his work or skills?",
      "Hey! Thanks for visiting. Feel free to ask me anything about Kanhu's projects or experience."
    ]
  },
  {
    triggers: ['project', 'projects', 'work', 'portfolio'],
    responses: [
      "Kanhu has worked on several exciting projects! Check out the Projects section to see his latest work including a To-Do List application and Video Library platform.",
      "In the Projects section, you'll find Kanhu's work showcasing his skills in Full Stack development, particularly with Java, React, and Spring Boot.",
      "Kanhu's portfolio includes various projects that demonstrate his expertise in web development. The Projects section has all the details!"
    ]
  },
  {
    triggers: ['skill', 'skills', 'technology', 'technologies', 'tech stack'],
    responses: [
      "Kanhu is proficient in Java, Spring Boot, React.js, and various web technologies. Check the Skills section for a complete list!",
      "Kanhu's technical skills include Java, JDBC, Servlet, JSP, HTML, CSS, JavaScript, Spring Boot, React.js, and database technologies like Oracle, MySQL, and MongoDB.",
      "As a full-stack developer, Kanhu is skilled in both frontend (React.js, HTML, CSS) and backend (Java, Spring Boot) technologies. He also works with databases like MySQL and MongoDB."
    ]
  },
  {
    triggers: ['contact', 'hire', 'email', 'message', 'reach'],
    responses: [
      "You can contact Kanhu through the Contact form in the Contact section, or directly via email at beherakanha029@gamil.com.",
      "Interested in working with Kanhu? Head to the Contact section to send a message or use his email: beherakanha029@gamil.com.",
      "The best way to reach Kanhu is through the Contact form or via LinkedIn. You can find the links in the Contact section."
    ]
  },
  {
    triggers: ['education', 'qualification', 'degree', 'study'],
    responses: [
      "Kanhu has a Master's in Computer Application from Institute Of Management And Information Technology, and he's also trained in Java Full Stack Development at JSPIDER Training Center.",
      "Kanhu's educational background includes a Bachelor of Science degree and a Master's in Computer Application. He's also completed specialized training in Java Full Stack Development.",
      "Kanhu has studied Computer Applications at the master's level and has professional training in Full Stack Development. Check the Education section for more details!"
    ]
  },
  {
    triggers: ['experience', 'job', 'work history', 'career'],
    responses: [
      "Kanhu has experience working on various full-stack development projects, including a comprehensive To-Do List application and a Video Library platform.",
      "Kanhu's professional experience includes developing web applications using Java, Spring Boot, and React.js. His Projects section showcases his practical experience.",
      "While building his portfolio, Kanhu has gained valuable experience in both frontend and backend development, working with modern web technologies and frameworks."
    ]
  }
];

// Fallback responses for when no specific match is found
const fallbackResponses = [
  "I'm here to help you learn more about Kanhu's skills and experience. Feel free to ask about his projects, education, or technical skills!",
  "I don't have specific information about that, but I'd be happy to tell you about Kanhu's projects, skills, or how to contact him.",
  "That's an interesting question! While I don't have all the details, I can help you navigate through Kanhu's portfolio. What specific aspect are you interested in?",
  "Kanhu is a full-stack developer with expertise in Java and React.js. Is there something specific about his work or skills you'd like to know more about?"
];

// Function to find the most appropriate response based on user input
const findResponse = (userInput: string): string => {
  const lowercaseInput = userInput.toLowerCase();
  
  // Check each predefined response category
  for (const category of predefinedResponses) {
    for (const trigger of category.triggers) {
      if (lowercaseInput.includes(trigger)) {
        // Return a random response from this category
        const randomIndex = Math.floor(Math.random() * category.responses.length);
        return category.responses[randomIndex];
      }
    }
  }
  
  // If no match found, return a fallback response
  const randomIndex = Math.floor(Math.random() * fallbackResponses.length);
  return fallbackResponses[randomIndex];
};

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi there! I'm Kanhu's AI assistant. How can I help you today?",
      role: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Auto-scroll to the bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Create user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      role: 'user',
      timestamp: new Date(),
    };

    // Add user message to chat
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate AI typing
    setIsTyping(true);
    
    // Simulate response delay
    setTimeout(() => {
      // Generate AI response
      const responseContent = findResponse(userMessage.content);
      
      // Create AI response message
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: responseContent,
        role: 'assistant',
        timestamp: new Date(),
      };

      // Add AI response to chat
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring' }}
      >
        <Button
          onClick={() => setIsOpen(prev => !prev)}
          className={cn(
            "w-14 h-14 rounded-full shadow-lg",
            isOpen ? "bg-red-500 hover:bg-red-600" : "bg-primary hover:bg-primary/90"
          )}
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </Button>
      </motion.div>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-40 w-80 md:w-96"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <Card className={cn(
              "border-2 border-primary/20 shadow-xl overflow-hidden",
              isDark ? "bg-background/90 backdrop-blur-md" : "bg-background"
            )}>
              <CardHeader className="bg-primary/10 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Bot className="h-6 w-6 text-primary" />
                    <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full"></span>
                  </div>
                  <div>
                    <CardTitle className="text-sm font-semibold">AI Assistant</CardTitle>
                    <p className="text-xs text-muted-foreground">
                      <Badge variant="outline" className="text-[10px] px-1 py-0">online</Badge>
                    </p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-4 h-96 overflow-y-auto flex flex-col gap-4">
                {messages.map(message => (
                  <motion.div
                    key={message.id}
                    className={cn(
                      "flex gap-2",
                      message.role === 'user' ? "justify-end" : "justify-start"
                    )}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {message.role === 'assistant' && (
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                    )}
                    
                    <div
                      className={cn(
                        "max-w-[80%] rounded-lg p-3",
                        message.role === 'user' 
                          ? "bg-primary text-primary-foreground" 
                          : isDark 
                            ? "bg-muted" 
                            : "bg-primary/10"
                      )}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className="text-[10px] mt-1 opacity-70 text-right">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                    
                    {message.role === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-primary/80 flex items-center justify-center flex-shrink-0">
                        <User className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div
                    className="flex gap-2 justify-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    
                    <div className={cn(
                      "rounded-lg p-3 bg-muted",
                      isDark ? "bg-muted" : "bg-primary/10"
                    )}>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '600ms' }}></div>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <div ref={messagesEndRef} />
              </CardContent>
              
              <CardFooter className="p-2 border-t bg-muted/30">
                <div className="flex w-full gap-2">
                  <Input
                    type="text"
                    placeholder="Type a message..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 focus-visible:ring-primary"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="icon"
                    disabled={!inputValue.trim() || isTyping}
                    className="bg-primary hover:bg-primary/90"
                  >
                    {isTyping ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;