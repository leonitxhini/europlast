"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { AnimatedCounter } from '@/components/ui/animated-counter';

const stats = [
  {
    number: 19,
    suffix: "+",
    label: "Years Experience",
    description: "Since 2005 in the plastic industry",
    icon: "🏭",
    color: "from-blue-500 to-cyan-500"
  },
  {
    number: 500,
    suffix: "+",
    label: "Happy Clients",
    description: "Satisfied customers worldwide",
    icon: "😊",
    color: "from-green-500 to-emerald-500"
  },
  {
    number: 1000,
    suffix: "+",
    label: "Projects Completed",
    description: "Successfully completed projects",
    icon: "✅",
    color: "from-purple-500 to-pink-500"
  },
  {
    number: 24,
    suffix: "/7",
    label: "Support",
    description: "Available around the clock",
    icon: "🕐",
    color: "from-orange-500 to-red-500"
  }
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-4 px-4">
            Our Achievements
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-4">
            Numbers that speak for themselves - Trust in our years of experience and expertise
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700 hover:border-transparent">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>

                {/* Number */}
                <div className="mb-2">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                    {isInView ? (
                      <AnimatedCounter 
                        value={stat.number} 
                        duration={2}
                      />
                    ) : (
                      stat.number
                    )}
                    <span className="text-xl sm:text-2xl md:text-3xl">{stat.suffix}</span>
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-white mb-2 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {stat.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base">
            <span>🚀</span>
            <span>Become part of our success story</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
