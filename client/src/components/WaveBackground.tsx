import React, { useEffect, useRef } from 'react';
import { useTheme } from '@/lib/ThemeContext';

interface WaveBackgroundProps {
  className?: string;
  waveOpacity?: number;
  animated?: boolean;
}

const WaveBackground: React.FC<WaveBackgroundProps> = ({
  className = '',
  waveOpacity = 0.08,
  animated = true
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let step = 0;
    
    const setCanvasSize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };

    const drawWaves = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const colors = isDark 
        ? ['#6366f1', '#a855f7', '#3b82f6']  // indigo, purple, blue
        : ['#818cf8', '#c084fc', '#60a5fa']; // lighter versions
      
      // Draw multiple waves with different amplitudes, frequencies and speeds
      for (let i = 0; i < colors.length; i++) {
        ctx.beginPath();
        
        const amplitude = canvas.height * 0.05 * (i + 1);
        const frequency = 0.01 - (i * 0.002);
        const speed = animated ? (step * (0.02 + i * 0.005)) : 0;
        
        ctx.moveTo(0, canvas.height / 2);
        
        for (let x = 0; x < canvas.width; x += 1) {
          const y = 
            Math.sin(x * frequency + speed) * amplitude + 
            Math.sin(x * frequency * 2 + speed * 1.5) * amplitude * 0.5 +
            canvas.height / 2;
            
          ctx.lineTo(x, y);
        }
        
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        
        ctx.fillStyle = colors[i] + (waveOpacity < 0.1 
          ? '16' // hex for ~10% opacity 
          : waveOpacity < 0.2 
            ? '33' // hex for ~20% opacity
            : '66'); // hex for ~40% opacity
        ctx.fill();
      }
      
      if (animated) {
        step += 1;
        animationRef.current = requestAnimationFrame(drawWaves);
      }
    };

    const handleResize = () => {
      setCanvasSize();
      drawWaves();
    };

    setCanvasSize();
    drawWaves();
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDark, waveOpacity, animated]);

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full" 
        style={{ opacity: waveOpacity * 2 }}
      />
    </div>
  );
};

export default WaveBackground;