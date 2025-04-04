import React from 'react';
import { useTheme } from '@/lib/ThemeContext';
import { motion } from 'framer-motion';

interface GridBackgroundProps {
  className?: string;
  dotOpacity?: number;
  dotSize?: number;
  gridSize?: number;
  animated?: boolean;
}

const GridBackground: React.FC<GridBackgroundProps> = ({
  className = '',
  dotOpacity = 0.3,
  dotSize = 1,
  gridSize = 30,
  animated = true
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  // Calculate number of dots based on grid size
  const horizontalCount = Math.ceil(100 / gridSize) + 1;
  const verticalCount = Math.ceil(100 / gridSize) + 1;
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
      <div className="absolute inset-0" style={{ opacity: dotOpacity }}>
        {Array.from({ length: horizontalCount * verticalCount }).map((_, index) => {
          const x = (index % horizontalCount) * gridSize;
          const y = Math.floor(index / horizontalCount) * gridSize;
          
          return (
            <motion.div
              key={index}
              className="absolute rounded-full"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${dotSize}px`,
                height: `${dotSize}px`,
                backgroundColor: `var(--primary)`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
              initial={{ scale: 1 }}
              animate={animated ? { 
                scale: [1, 1.5, 1],
                opacity: [dotOpacity, dotOpacity * 1.5, dotOpacity] 
              } : {}}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </div>
      
      {/* Add a subtle gradient layer over the grid */}
      <div 
        className="absolute inset-0 bg-gradient-radial"
        style={{
          background: isDark
            ? 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.2) 100%)'
            : 'radial-gradient(circle at center, transparent 30%, rgba(255,255,255,0.5) 100%)'
        }}
      />
    </div>
  );
};

export default GridBackground;