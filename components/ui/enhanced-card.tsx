"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface EnhancedCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  magnetic?: boolean;
  gradient?: boolean;
}

export function EnhancedCard({ 
  children, 
  className, 
  hover = true, 
  glow = false,
  magnetic = false,
  gradient = false 
}: EnhancedCardProps) {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-2xl",
        gradient ? "gradient-mesh" : "glass",
        hover && "hover:shadow-2xl transition-all duration-500",
        glow && "pulse-glow",
        magnetic && "magnetic",
        className
      )}
      whileHover={hover ? { 
        y: -8,
        rotateX: 5,
        rotateY: 5,
        scale: 1.02
      } : undefined}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
    >
      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000" />
      </div>
    </motion.div>
  );
}