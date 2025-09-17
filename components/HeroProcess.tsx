"use client";

import { motion } from 'framer-motion';
import { Factory, Recycle, Package } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';

// Dynamic imports for client-only components
const ParticleSystem = dynamic(() => import('@/components/ui/particle-system').then(mod => ({ default: mod.ParticleSystem })), { ssr: false });
const MorphingBlob = dynamic(() => import('@/components/ui/morphing-blob').then(mod => ({ default: mod.MorphingBlob })), { ssr: false });

const processSteps = [
  {
    id: 1,
    title: "Raw Materials",
    description: "High-quality plastic granules",
    icon: Factory,
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    title: "Extrusion",
    description: "Advanced film extrusion technology",
    icon: Recycle,
    color: "from-green-500 to-green-600"
  },
  {
    id: 3,
    title: "Final Product",
    description: "Durable & sustainable packaging",
    icon: Package,
    color: "from-red-500 to-red-600"
  }
];

export default function HeroProcess() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-12 md:pb-16"
    >
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="gradient-mesh absolute inset-0" />
        <ParticleSystem count={40} />
        
        {/* Morphing Blobs - Mobile optimized */}
        <div className="absolute top-10 left-10 sm:top-20 sm:left-20">
          <MorphingBlob size={200} color="from-blue-500/10 to-purple-500/10" />
        </div>
        <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20">
          <MorphingBlob size={150} color="from-teal-500/10 to-cyan-500/10" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <MorphingBlob size={250} color="from-purple-500/5 to-pink-500/5" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Title */}
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-12 md:mb-16 leading-tight px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="gradient-text">
              How We Make Our Plastic Film
            </span>
          </motion.h1>

          {/* Process Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 px-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  className="flex flex-col items-center text-center group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.3 
                  }}
                >
                  {/* Icon Container */}
                  <motion.div
                    className="relative mb-8"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Background Circle */}
                    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                      {/* Icon Background */}
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500`}>
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <motion.div
                      className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                      animate={{ 
                        y: [-3, 3, -3],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    >
                      <span className="text-white text-xs sm:text-sm font-bold">{step.id}</span>
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground group-hover:gradient-text transition-all duration-500">
                      {step.title}
                    </h3>
                    <p className="text-base sm:text-lg text-muted-foreground/80 leading-relaxed max-w-xs mx-auto px-2">
                      {step.description}
                    </p>
                  </div>

                  {/* Connecting Line (Desktop only) */}
                  {index < processSteps.length - 1 && (
                    <motion.div
                      className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-white/30 to-transparent"
                      initial={{ scaleX: 0 }}
                      animate={inView ? { scaleX: 1 } : {}}
                      transition={{ 
                        duration: 1, 
                        delay: (index * 0.3) + 0.5 
                      }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Description */}
          <motion.div
            className="mt-12 sm:mt-16 max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground/80 leading-relaxed">
              From premium raw materials to advanced extrusion technology, we ensure every step of our production process meets the highest quality standards for sustainable packaging solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

