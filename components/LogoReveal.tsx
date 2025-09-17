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
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut"
            }}
          >
            {/* Blurred background with website content */}
            <div className="absolute inset-0 bg-white/80 backdrop-blur-md" />
            {/* Logo mit Animation - Handy-optimiert */}
            <motion.div
              className="relative z-10 flex items-center justify-center px-4 sm:px-6 md:px-8"
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
                  className="object-contain w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl drop-shadow-2xl"
                  priority
                />
                {/* Subtiler Glow Effekt */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-blue-500/10 rounded-lg blur-xl scale-110" />
              </div>
            </motion.div>

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
