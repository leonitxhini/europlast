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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="gradient-mesh absolute inset-0" />
        <ParticleSystem count={80} />
        
        {/* Morphing Blobs */}
        <div className="absolute top-20 left-20">
          <MorphingBlob size={300} color="from-blue-500/10 to-purple-500/10" />
        </div>
        <div className="absolute bottom-20 right-20">
          <MorphingBlob size={250} color="from-teal-500/10 to-cyan-500/10" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <MorphingBlob size={400} color="from-purple-500/5 to-pink-500/5" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Title */}
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-16 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="gradient-text">
              How We Make Our Plastic Film
            </span>
          </motion.h1>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
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
                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                      {/* Icon Background */}
                      <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500`}>
                        <Icon className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                      animate={{ 
                        y: [-5, 5, -5],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    >
                      <span className="text-white text-sm font-bold">{step.id}</span>
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:gradient-text transition-all duration-500">
                      {step.title}
                    </h3>
                    <p className="text-lg text-muted-foreground/80 leading-relaxed max-w-xs mx-auto">
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
            className="mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <p className="text-xl sm:text-2xl text-muted-foreground/80 leading-relaxed">
              From premium raw materials to advanced extrusion technology, we ensure every step of our production process meets the highest quality standards for sustainable packaging solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

