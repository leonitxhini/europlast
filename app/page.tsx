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

const stats = [
  { label: 'Years Experience', value: 20, suffix: '+', icon: TrendingUp },
  { label: 'Happy Clients', value: 150, suffix: '+', icon: Users },
  { label: 'Quality Guarantee', value: 100, suffix: '%', icon: Award },
  { label: 'Countries Served', value: 25, suffix: '+', icon: Globe },
];

const certifications = [
  { name: 'ISO 9001', description: 'Quality Management' },
  { name: 'ISO 14001', description: 'Environmental Management' },
  { name: 'HACCP', description: 'Food Safety' },
  { name: 'CE Marking', description: 'European Conformity' },
];

export default function Home() {
  const [statsRef, statsInView] = useInView({ threshold: 0.3 });
  const [productsRef, productsInView] = useInView({ threshold: 0.1 });

  return (
    <div className="min-h-screen">
      {/* Hero Process Section */}
      <HeroProcess />

      {/* Enhanced Stats Section with Parallax */}
      <ParallaxSection speed={0.3}>
        <section ref={statsRef} className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-50/80 via-gray-50/60 to-red-50/80 dark:from-red-950/30 dark:via-gray-950/20 dark:to-red-950/30" />
          <ParticleSystem count={50} />
          
          {/* Animated Background Elements */}
          <div className="absolute top-10 left-10">
            <motion.div
              className="w-32 h-32 bg-gradient-to-r from-red-500/10 to-gray-500/10 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
          <div className="absolute bottom-10 right-10">
            <motion.div
              className="w-40 h-40 bg-gradient-to-r from-red-500/10 to-gray-500/10 rounded-full blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.6, 0.3, 0.6]
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 50, rotateY: -90 }}
                    animate={statsInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    <Card3D>
                      <EnhancedCard className="text-center p-10 group h-full" hover magnetic glow>
                        <div className="space-y-8">
                          <div className="relative">
                            <motion.div 
                              className="w-20 h-20 bg-gradient-to-r from-red-600 via-red-700 to-gray-800 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-125 transition-all duration-500 shadow-2xl"
                              whileHover={{ rotateY: 180 }}
                              transition={{ duration: 0.6 }}
                            >
                              <Icon className="w-10 h-10 text-white" />
                            </motion.div>
                            <motion.div
                              className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-gray-800 via-red-700 to-red-600 rounded-3xl flex items-center justify-center mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                              style={{ rotateY: 180 }}
                            >
                              <Sparkles className="w-10 h-10 text-white" />
                            </motion.div>
                          </div>
                          <div>
                            <div className="text-5xl font-bold gradient-text mb-3">
                              <AnimatedCounter 
                                value={stat.value} 
                                suffix={stat.suffix}
                                className="text-5xl font-bold gradient-text"
                              />
                            </div>
                            <p className="text-lg text-muted-foreground font-medium">{stat.label}</p>
                          </div>
                        </div>
                      </EnhancedCard>
                    </Card3D>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Enhanced Products Preview with 3D Cards */}
      <section ref={productsRef} className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
        <ParticleSystem count={40} />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={productsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-8 px-6 py-3 text-base glass border-white/30 backdrop-blur-xl">
              <Package className="w-5 h-5 mr-3 text-red-500" />
              Product Showcase
            </Badge>
            <TextReveal className="text-5xl sm:text-6xl font-bold gradient-text mb-8">
              Our Premium Products
            </TextReveal>
            <TextReveal className="text-xl text-muted-foreground/80 max-w-4xl mx-auto leading-relaxed" delay={0.3}>
              Discover our comprehensive range of plastic packaging solutions designed for various industries with cutting-edge technology and sustainable practices.
            </TextReveal>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
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
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-125 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <motion.div 
                          className="w-10 h-10 glass rounded-full flex items-center justify-center backdrop-blur-xl border border-white/30"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Star className="w-5 h-5 text-red-400" />
                        </motion.div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <motion.div
                          className="glass rounded-xl p-3 backdrop-blur-xl border border-white/20"
                          initial={{ opacity: 0, y: 20 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-white text-sm font-medium">Premium Quality</span>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                    <div className="p-8 space-y-6">
                      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:gradient-text transition-all duration-500">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground/80 mb-6 text-base leading-relaxed">
                        {product.description}
                      </p>
                      <div className="flex flex-wrap gap-3 pt-4">
                        {product.features.map((feature, idx) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <Badge variant="secondary" className="text-sm glass border-white/20 backdrop-blur-sm px-3 py-1">
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
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={productsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/products">
              <MagneticButton>
                <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4">
                  View Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </MagneticButton>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}