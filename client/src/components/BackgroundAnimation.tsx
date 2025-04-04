import React, { useEffect, useRef } from 'react';
import { useTheme } from '@/lib/ThemeContext';

// Define Particle class outside component to avoid reference error
class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  canvasWidth: number;
  canvasHeight: number;
  
  constructor(canvasWidth: number, canvasHeight: number) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = Math.random() * 0.5 - 0.25;
    this.speedY = Math.random() * 0.5 - 0.25;
  }
  
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    
    // Bounce off edges
    if (this.x < 0 || this.x > this.canvasWidth) {
      this.speedX = -this.speedX;
    }
    
    if (this.y < 0 || this.y > this.canvasHeight) {
      this.speedY = -this.speedY;
    }
  }
  
  draw(ctx: CanvasRenderingContext2D, color: string) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
}

const BackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const isDark = theme === 'dark';
    
    // Particle properties based on theme - increased opacity for better visibility
    const particleColor = isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.5)';
    const lineColor = isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)';
    const particleCount = 80; // Increased number of particles
    
    // Resize canvas to fill window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Initialize particles
    function initParticles() {
      particles = [];
      if (canvas) {
        for (let i = 0; i < particleCount; i++) {
          particles.push(new Particle(canvas.width, canvas.height));
        }
      }
    }
    
    // Draw connections between particles
    function drawConnections() {
      if (!ctx) return;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }
    
    // Animation loop
    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw(ctx, particleColor);
      }
      
      drawConnections();
      animationFrameId = requestAnimationFrame(animate);
    }
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]); // Re-initialize when theme changes
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default BackgroundAnimation;