"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface LogoRevealProps {
  children: React.ReactNode;
}

export default function LogoReveal({ children }: LogoRevealProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Logo für 2 Sekunden zeigen, dann ausblenden
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white via-gray-100 to-gray-200"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut"
            }}
          >
            {/* Logo mit Animation - Handy-optimiert */}
            <motion.div
              className="flex items-center justify-center px-4 sm:px-6 md:px-8"
              initial={{ scale: 0, opacity: 0, rotate: -180 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotate: 45 }}
              transition={{
                duration: 0.8,
                ease: "easeOut"
              }}
            >
              <div className="relative">
                <Image
                  src="/EUROPLAST_LOGO_BLACK.png"
                  alt="Europlast Logo"
                  width={300}
                  height={150}
                  className="object-contain w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
                  priority
                />
                {/* Glow Effekt */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-lg blur-2xl scale-110" />
                
                {/* Schatten für besseren Kontrast */}
                <div className="absolute inset-0 bg-black/10 rounded-lg shadow-2xl" />
              </div>
            </motion.div>

            {/* Subtile Partikel im Hintergrund - Handy-optimiert */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-gray-400/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Seiteninhalt */}
      <div className="relative z-10">
        {children}
      </div>
    </>
  );
}
