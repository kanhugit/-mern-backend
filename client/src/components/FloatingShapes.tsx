import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/ThemeContext';

interface FloatingShapesProps {
  count?: number;
  className?: string;
}

const FloatingShapes: React.FC<FloatingShapesProps> = ({
  count = 15,
  className = '',
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [shapes, setShapes] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    rotation: number;
    type: 'circle' | 'square' | 'triangle';
    color: string;
    delay: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    const colorsLight = [
      'rgba(99, 102, 241, 0.2)', // indigo
      'rgba(168, 85, 247, 0.2)',  // purple
      'rgba(236, 72, 153, 0.2)',  // pink
      'rgba(59, 130, 246, 0.2)',  // blue
      'rgba(16, 185, 129, 0.2)',  // emerald
    ];
    
    const colorsDark = [
      'rgba(129, 140, 248, 0.2)', // indigo
      'rgba(192, 132, 252, 0.2)', // purple
      'rgba(244, 114, 182, 0.2)', // pink
      'rgba(96, 165, 250, 0.2)',  // blue
      'rgba(52, 211, 153, 0.2)',  // emerald
    ];
    
    const colors = isDark ? colorsDark : colorsLight;
    
    const shapeTypes: Array<'circle' | 'square' | 'triangle'> = ['circle', 'square', 'triangle'];
    
    const generatedShapes = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 80 + 20,
      rotation: Math.random() * 360,
      type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 5,
      duration: Math.random() * 20 + 15,
    }));
    
    setShapes(generatedShapes);
  }, [count, isDark]);

  const renderShape = (shape: typeof shapes[0]) => {
    if (shape.type === 'triangle') {
      return (
        <motion.div 
          key={shape.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.5, 
            scale: 1,
            x: [0, Math.random() * 30 - 15, 0],
            y: [0, Math.random() * 30 - 15, 0],
            rotate: shape.rotation + [0, 15, -15, 0][Math.floor(Math.random() * 4)],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "easeInOut" as const,
          }}
          className="absolute opacity-30"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            backgroundColor: 'transparent',
            width: 0,
            height: 0,
            borderLeft: `${shape.size / 2}px solid transparent`,
            borderRight: `${shape.size / 2}px solid transparent`,
            borderBottom: `${shape.size}px solid ${shape.color}`,
          }}
        />
      );
    }

    return (
      <motion.div 
        key={shape.id}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: 0.5, 
          scale: 1,
          x: [0, Math.random() * 30 - 15, 0],
          y: [0, Math.random() * 30 - 15, 0],
          rotate: shape.rotation + [0, 15, -15, 0][Math.floor(Math.random() * 4)],
        }}
        transition={{
          duration: shape.duration,
          delay: shape.delay,
          repeat: Infinity,
          repeatType: "reverse" as const,
          ease: "easeInOut" as const,
        }}
        className="absolute opacity-30"
        style={{
          left: `${shape.x}%`,
          top: `${shape.y}%`,
          width: `${shape.size}px`,
          height: `${shape.size}px`,
          backgroundColor: shape.color,
          filter: 'blur(1px)',
          borderRadius: shape.type === 'circle' ? '50%' : '10%',
        }}
      />
    );
  };

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {shapes.map(renderShape)}
    </div>
  );
};

export default FloatingShapes;