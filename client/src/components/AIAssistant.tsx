import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/ThemeContext';
import { TypeAnimation } from 'react-type-animation';

type Message = {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
};

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hi there! I\'m your portfolio assistant. How can I help you today?',
      role: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  // Auto-scroll to the bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleAssistant = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: query,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setQuery('');
    setIsTyping(true);

    // Simulate API response
    setTimeout(() => {
      const getResponse = (question: string): string => {
        // Simple response logic based on keywords
        const lowerQuestion = question.toLowerCase();
        
        if (lowerQuestion.includes('contact') || lowerQuestion.includes('reach') || lowerQuestion.includes('email')) {
          return 'You can contact me through the contact form in the Contact section. Just fill out your name, email, and message, and I\'ll get back to you as soon as possible!';
        } else if (lowerQuestion.includes('experience') || lowerQuestion.includes('work')) {
          return 'I have experience in web development, including frontend technologies like React, Vue.js, and backend technologies like Node.js and Python. You can check out my work experience in the About section!';
        } else if (lowerQuestion.includes('project') || lowerQuestion.includes('portfolio')) {
          return 'My portfolio showcases various projects I\'ve worked on. You can filter them by category in the Projects section to see what interests you most!';
        } else if (lowerQuestion.includes('education') || lowerQuestion.includes('study') || lowerQuestion.includes('degree')) {
          return 'I have a background in Computer Science. You can find more details about my education in the Education section of this portfolio.';
        } else if (lowerQuestion.includes('skill') || lowerQuestion.includes('technology') || lowerQuestion.includes('tech stack')) {
          return 'My technical skills include JavaScript/TypeScript, React, Node.js, Python, and more. Check out the Skills section for a comprehensive list!';
        } else if (lowerQuestion.includes('hire') || lowerQuestion.includes('job') || lowerQuestion.includes('opportunity')) {
          return 'I\'m always open to new opportunities! Feel free to reach out through the contact form with details about your project or position.';
        } else {
          return 'Thanks for your question! Please explore the different sections of my portfolio to learn more about my experience, skills, and projects. If you need specific information, feel free to ask more targeted questions.';
        }
      };

      const botMessage: Message = {
        id: Date.now().toString(),
        content: getResponse(userMessage.content),
        role: 'assistant',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Assistant Button */}
      <Button
        onClick={toggleAssistant}
        className={cn(
          'fixed bottom-6 right-6 rounded-full h-14 w-14 p-0 shadow-lg',
          'bg-gradient-to-r from-primary to-purple-600 hover:from-primary hover:to-purple-500',
          'transition-all duration-300 ease-in-out transform hover:scale-105'
        )}
        aria-label="Open AI Assistant"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Assistant Dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-80 sm:w-96 z-50"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Card className={cn(
              'border-2 shadow-lg overflow-hidden',
              theme === 'dark' ? 'border-primary/20' : 'border-primary/40',
              theme === 'dark' ? 'bg-background/95' : 'bg-background/95'
            )}>
              <CardHeader className={cn(
                'py-3 px-4',
                'bg-gradient-to-r from-primary to-purple-600'
              )}>
                <CardTitle className="text-white flex items-center gap-2 text-lg">
                  <Bot className="h-5 w-5" />
                  Portfolio Assistant
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-80 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        'flex items-start gap-2 max-w-[90%]',
                        message.role === 'user' ? 'ml-auto' : 'mr-auto'
                      )}
                    >
                      {message.role === 'assistant' && (
                        <Avatar className="h-8 w-8 bg-primary">
                          <Bot className="h-4 w-4 text-white" />
                        </Avatar>
                      )}
                      <div
                        className={cn(
                          'rounded-lg p-3',
                          message.role === 'user'
                            ? 'bg-primary text-white'
                            : theme === 'dark'
                            ? 'bg-accent'
                            : 'bg-muted'
                        )}
                      >
                        {message.role === 'assistant' ? (
                          message === messages[messages.length - 1] && isTyping ? (
                            <TypeAnimation
                              sequence={[message.content]}
                              speed={70}
                              cursor={false}
                            />
                          ) : (
                            <span>{message.content}</span>
                          )
                        ) : (
                          <span>{message.content}</span>
                        )}
                      </div>
                      {message.role === 'user' && (
                        <Avatar className="h-8 w-8 bg-primary">
                          <User className="h-4 w-4 text-white" />
                        </Avatar>
                      )}
                    </div>
                  ))}
                  {isTyping && messages[messages.length - 1].role === 'user' && (
                    <div className="flex items-start gap-2">
                      <Avatar className="h-8 w-8 bg-primary">
                        <Bot className="h-4 w-4 text-white" />
                      </Avatar>
                      <div
                        className={cn(
                          'rounded-lg p-3',
                          theme === 'dark' ? 'bg-accent' : 'bg-muted'
                        )}
                      >
                        <TypeAnimation
                          sequence={['...', 500, '..', 500, '...', 500]}
                          repeat={Infinity}
                          cursor={false}
                        />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>
              <CardFooter className="p-3 border-t">
                <form onSubmit={handleSubmit} className="flex gap-2 w-full">
                  <Textarea
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Ask me anything..."
                    className="min-h-10 resize-none"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSubmit(e);
                      }
                    }}
                  />
                  <Button 
                    type="submit" 
                    size="icon" 
                    disabled={!query.trim()}
                    className="shrink-0 bg-primary hover:bg-primary/90"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;