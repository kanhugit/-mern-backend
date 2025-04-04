import React from "react";
import { motion } from "framer-motion";

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="fixed -z-10 w-full h-full overflow-hidden opacity-5">
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full opacity-20 blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 3,
          delay: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-40 right-20 w-96 h-96 bg-secondary rounded-full opacity-20 blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 3,
          delay: 0.75,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-1/4 w-80 h-80 bg-accent rounded-full opacity-20 blur-3xl"
      />
    </div>
  );
};

export default BackgroundAnimation;
