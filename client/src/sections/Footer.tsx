import React from 'react';
import { Github, Linkedin, Heart } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';
import emailSignature from '../assets/email-signature.png';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-primary/5">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Email signature card */}
        <div className="flex justify-center mb-10">
          <div className="max-w-md w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img 
              src={emailSignature} 
              alt="Kanhu Behera Email Signature" 
              className="w-full h-auto" 
            />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and copyright */}
          <div className="flex flex-col items-center md:items-start">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
              Portfolio
            </div>
            <p className="text-muted-foreground text-sm">
              © {year} {personalInfo.firstName} {personalInfo.lastName}. All rights reserved.
            </p>
          </div>
          
          {/* Contact info */}
          <div className="flex flex-col items-center md:items-end">
            <p className="flex items-center gap-1 text-sm">
              Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by {personalInfo.firstName} {personalInfo.lastName}
            </p>
            <div className="flex gap-4 mt-3">
              <a 
                href={personalInfo.socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Github"
              >
                <Github size={20} />
              </a>
              <a 
                href={personalInfo.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;