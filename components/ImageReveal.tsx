"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ImageRevealProps {
  children: React.ReactNode;
}

export default function ImageReveal({ children }: ImageRevealProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Nach 2 Sekunden startet das Verblassen
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 2, // Langsam verblassen über 2 Sekunden
              ease: "easeOut"
            }}
          >
            {/* Vollbild-Overlay mit dem Bild - Handy-optimiert */}
            <motion.div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/image-from-rawpixel-id-4218554-jpeg.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundAttachment: 'fixed',
                minHeight: '100vh',
                minWidth: '100vw'
              }}
              initial={{ scale: 1, opacity: 1 }}
              animate={{ 
                scale: 1.05, // Leichtes Zoomen für Effekt
                opacity: 0.9 
              }}
              transition={{ 
                duration: 2,
                ease: "easeInOut"
              }}
            />
            
            {/* Sicherheits-Overlay für bessere Sichtbarkeit auf allen Geräten */}
            <div className="absolute inset-0 bg-black/10" />
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
