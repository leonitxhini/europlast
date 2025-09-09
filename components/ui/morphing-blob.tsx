"use client";

import { motion } from 'framer-motion';

interface MorphingBlobProps {
  size?: number;
  color?: string;
  className?: string;
}

export function MorphingBlob({ 
  size = 200, 
  color = "from-blue-400/20 to-teal-400/20",
  className = ""
}: MorphingBlobProps) {
  return (
    <motion.div
      className={`blob bg-gradient-to-r ${color} ${className}`}
      style={{ width: size, height: size }}
      animate={{
        borderRadius: [
          "30% 70% 70% 30% / 30% 30% 70% 70%",
          "58% 42% 75% 25% / 76% 46% 54% 24%",
          "50% 50% 33% 67% / 55% 27% 73% 45%",
          "33% 67% 58% 42% / 63% 68% 32% 37%",
          "30% 70% 70% 30% / 30% 30% 70% 70%"
        ],
        rotate: [0, 90, 180, 270, 360],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
}