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
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 2, // Langsam verblassen über 2 Sekunden
              ease: "easeOut"
            }}
          >
            {/* Vollbild-Overlay mit dem Bild */}
            <motion.div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: "url('/image-from-rawpixel-id-4218554-jpeg.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
              initial={{ scale: 1, opacity: 1 }}
              animate={{ 
                scale: 1.1, // Leichtes Zoomen für Effekt
                opacity: 0.8 
              }}
              transition={{ 
                duration: 2,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Seiteninhalt */}
      {children}
    </>
  );
}
