"use client";

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Award, 
  Zap,
  Package,
  Recycle,
  Shield,
  Globe,
  TrendingUp,
  Star,
  Factory,
  Sparkles,
  Layers,
  Cpu
} from 'lucide-react';
import HeroProcess from '@/components/HeroProcess';
import StatsSection from '@/components/StatsSection';

// Dynamic imports for client-only components
const EnhancedCard = dynamic(() => import('@/components/ui/enhanced-card').then(mod => ({ default: mod.EnhancedCard })), { ssr: false });
const GradientButton = dynamic(() => import('@/components/ui/gradient-button').then(mod => ({ default: mod.GradientButton })), { ssr: false });
const ParticleSystem = dynamic(() => import('@/components/ui/particle-system').then(mod => ({ default: mod.ParticleSystem })), { ssr: false });
const MorphingBlob = dynamic(() => import('@/components/ui/morphing-blob').then(mod => ({ default: mod.MorphingBlob })), { ssr: false });
const Card3D = dynamic(() => import('@/components/ui/3d-card').then(mod => ({ default: mod.Card3D })), { ssr: false });
const AnimatedCounter = dynamic(() => import('@/components/ui/animated-counter').then(mod => ({ default: mod.AnimatedCounter })), { ssr: false });
const MagneticButton = dynamic(() => import('@/components/ui/magnetic-button').then(mod => ({ default: mod.MagneticButton })), { ssr: false });
const TextReveal = dynamic(() => import('@/components/ui/text-reveal').then(mod => ({ default: mod.TextReveal })), { ssr: false });
const ParallaxSection = dynamic(() => import('@/components/ui/parallax-section').then(mod => ({ default: mod.ParallaxSection })), { ssr: false });

const products = [
  {
    name: 'Shrink Foil',
    description: 'High-quality shrink wrap for food packaging and industrial applications.',
    image: '/water-bottle.jpg',
    features: ['Food Safe', 'Transparent', 'Heat Sealable']
  },
  {
    name: 'Black Foil',
    description: 'Durable black plastic sheeting for agricultural and construction uses.',
    image: '/cover-film.jpg',
    features: ['UV Resistant', 'Heavy Duty', 'Weather Proof']
  },
  {
    name: 'Large Plastic Bags',
    description: 'Industrial-strength bags for bulk storage and transportation.',
    image: '/pallets-cover.jpg',
    features: ['High Capacity', 'Tear Resistant', 'Custom Sizes']
  },
  {
    name: 'Colored Foils',
    description: 'Vibrant colored plastic films for branding and decorative applications.',
    image: '/chemical-clean.jpg',
    features: ['Custom Colors', 'Printable', 'Fade Resistant']
  },
];


const certifications = [
  { name: 'ISO 9001', description: 'Quality Management' },
  { name: 'ISO 14001', description: 'Environmental Management' },
  { name: 'HACCP', description: 'Food Safety' },
  { name: 'CE Marking', description: 'European Conformity' },
];

export default function Home() {
  const [productsRef, productsInView] = useInView({ threshold: 0.1 });

  return (
    <div className="min-h-screen">
      {/* Hero Process Section */}
      <HeroProcess />

      {/* New Stats Section */}
      <StatsSection />

      {/* Enhanced Products Preview with 3D Cards */}
      <section ref={productsRef} className="py-16 sm:py-20 md:py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
        <ParticleSystem count={20} />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={productsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base glass border-white/30 backdrop-blur-xl">
              <Package className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-red-500" />
              Product Showcase
            </Badge>
            <TextReveal className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6 sm:mb-8 px-4">
              Our Premium Products
            </TextReveal>
            <TextReveal className="text-lg sm:text-xl text-muted-foreground/80 max-w-4xl mx-auto leading-relaxed px-4" delay={0.3}>
              Discover our comprehensive range of plastic packaging solutions designed for various industries with cutting-edge technology and sustainable practices.
            </TextReveal>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 relative z-10">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 50, rotateX: -30 }}
                animate={productsInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="group"
              >
                <Card3D>
                  <EnhancedCard className="h-full overflow-hidden group" hover magnetic glow>
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-125 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                        <motion.div 
                          className="w-8 h-8 sm:w-10 sm:h-10 glass rounded-full flex items-center justify-center backdrop-blur-xl border border-white/30"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Star className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
                        </motion.div>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                        <motion.div
                          className="glass rounded-xl p-2 sm:p-3 backdrop-blur-xl border border-white/20"
                          initial={{ opacity: 0, y: 20 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                            <span className="text-white text-xs sm:text-sm font-medium">Premium Quality</span>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                    <div className="p-6 sm:p-8 space-y-4 sm:space-y-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 group-hover:gradient-text transition-all duration-500">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground/80 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                        {product.description}
                      </p>
                      <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 sm:pt-4">
                        {product.features.map((feature, idx) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <Badge variant="secondary" className="text-xs sm:text-sm glass border-white/20 backdrop-blur-sm px-2 sm:px-3 py-1">
                              {feature}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </EnhancedCard>
                </Card3D>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12 sm:mt-16 md:mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={productsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/products">
              <MagneticButton>
                <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base">
                  View Products
                  <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </MagneticButton>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}