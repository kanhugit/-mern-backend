import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import BackToTop from "@/components/BackToTop";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Education from "@/sections/Education";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import { useTheme } from "@/lib/ThemeContext";

const Home: React.FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      // Update active nav link on scroll
      const scrollPosition = window.scrollY;
      
      document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          document.querySelectorAll('.nav-link').forEach(navLink => {
            navLink.classList.remove('active');
            if (navLink.getAttribute('href') === `#${sectionId}`) {
              navLink.classList.add('active');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`font-sans min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-background text-foreground' : 'bg-background text-foreground'}`}>
      <BackgroundAnimation />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
      {/* AIAssistant will be added once all base components are ready */}
    </div>
  );
};

export default Home;
