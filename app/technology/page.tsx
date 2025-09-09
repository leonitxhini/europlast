"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Settings, 
  Recycle, 
  Leaf, 
  Zap,
  Shield,
  Award,
  Factory,
  TrendingUp,
  CheckCircle,
  Globe,
  ArrowRight,
  Cpu,
  Beaker,
  Gauge
} from 'lucide-react';

const technologies = [
  {
    icon: Factory,
    title: 'Advanced Extrusion Technology',
    description: 'State-of-the-art blown film extrusion lines with precise temperature control and thickness uniformity.',
    features: [
      'Multi-layer co-extrusion capability',
      'Automated thickness control',
      'Real-time quality monitoring',
      'Energy-efficient heating systems'
    ],
    image: '/cover-film.jpg'
  },
  {
    icon: Cpu,
    title: 'Digital Quality Control',
    description: 'AI-powered inspection systems ensuring consistent quality and defect detection in real-time.',
    features: [
      'Computer vision inspection',
      'Automated defect detection',
      'Statistical process control',
      'Traceability systems'
    ],
    image: '/chemical-clean.jpg'
  },
  {
    icon: Beaker,
    title: 'Material Innovation Lab',
    description: 'In-house R&D laboratory developing next-generation sustainable plastic formulations.',
    features: [
      'Biodegradable additives research',
      'Barrier property optimization',
      'Recyclability testing',
      'Custom formulation development'
    ],
    image: '/water-bottle.jpg'
  }
];

const sustainability = [
  {
    icon: Recycle,
    title: 'Circular Economy',
    description: 'Implementing closed-loop recycling systems and designing for recyclability.',
    percentage: 95,
    metrics: [
      { label: 'Recyclable Materials', value: '95%' },
      { label: 'Waste Reduction', value: '80%' },
      { label: 'Energy Recovery', value: '90%' }
    ]
  },
  {
    icon: Leaf,
    title: 'Bio-based Materials',
    description: 'Developing and incorporating renewable bio-based polymers in our products.',
    percentage: 75,
    metrics: [
      { label: 'Bio Content', value: '30%' },
      { label: 'Carbon Reduction', value: '45%' },
      { label: 'Renewable Sources', value: '60%' }
    ]
  },
  {
    icon: Zap,
    title: 'Clean Energy',
    description: 'Transitioning to renewable energy sources for sustainable manufacturing.',
    percentage: 85,
    metrics: [
      { label: 'Solar Power', value: '70%' },
      { label: 'Energy Efficiency', value: '40%' },
      { label: 'Carbon Neutral Goal', value: '2030' }
    ]
  }
];

const certifications = [
  { name: 'ISO 9001:2015', category: 'Quality Management' },
  { name: 'ISO 14001:2015', category: 'Environmental Management' },
  { name: 'HACCP', category: 'Food Safety' },
  { name: 'FDA Approved', category: 'Food Contact' },
  { name: 'EU Regulation', category: 'Food Contact Materials' },
  { name: 'BRC Packaging', category: 'Global Standard' }
];

const innovations = [
  {
    title: 'Smart Packaging Solutions',
    description: 'Developing intelligent packaging with embedded sensors for freshness monitoring.',
    status: 'In Development',
    timeline: '2025-2026'
  },
  {
    title: 'Nano-barrier Technology',
    description: 'Ultra-thin barrier coatings providing superior protection with minimal material use.',
    status: 'Pilot Testing',
    timeline: '2025'
  },
  {
    title: 'Compostable Films',
    description: 'Fully compostable packaging films for organic waste applications.',
    status: 'Commercial Ready',
    timeline: '2025'
  },
  {
    title: 'Carbon-negative Materials',
    description: 'Materials that actively remove CO2 from the atmosphere during production.',
    status: 'Research Phase',
    timeline: '2026-2027'
  }
];

export default function Technology() {
  const [headerRef, headerInView] = useInView({ threshold: 0.3 });
  const [techRef, techInView] = useInView({ threshold: 0.1 });
  const [sustainabilityRef, sustainabilityInView] = useInView({ threshold: 0.2 });
  const [innovationsRef, innovationsInView] = useInView({ threshold: 0.2 });

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section ref={headerRef} className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-6 px-4 py-2">
              <Settings className="w-4 h-4 mr-2" />
              Advanced Manufacturing
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Technology & Innovation
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Cutting-edge technology meets sustainable innovation. Discover how we're revolutionizing 
              plastic packaging through advanced manufacturing processes and environmental stewardship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technology Sections */}
      <section ref={techRef} className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={techInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Manufacturing Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our state-of-the-art facilities combine decades of expertise with the latest 
              technological innovations to deliver superior quality products.
            </p>
          </motion.div>

          <div className="space-y-20">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={tech.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                  {/* Content */}
                  <motion.div
                    className={`space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {tech.title}
                      </h3>
                    </div>
                    
                    <p className="text-lg text-muted-foreground">
                      {tech.description}
                    </p>

                    <div className="space-y-3">
                      {tech.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Image */}
                  <motion.div
                    className={`relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative h-96 rounded-2xl overflow-hidden group">
                      <Image
                        src={tech.image}
                        alt={tech.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section ref={sustainabilityRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={sustainabilityInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Sustainability Initiatives
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to environmental responsibility drives innovation in sustainable 
              materials and manufacturing processes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {sustainability.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={sustainabilityInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 p-6 hover:border-primary/50 transition-all duration-300">
                    <CardContent className="p-0 space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {item.title}
                        </h3>
                      </div>
                      
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>

                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium text-foreground">{item.percentage}%</span>
                        </div>
                        <Progress value={item.percentage} className="h-2" />
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-1 gap-3 pt-4 border-t border-border/50">
                        {item.metrics.map((metric, idx) => (
                          <div key={idx} className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">{metric.label}</span>
                            <Badge variant="secondary" className="text-xs">
                              {metric.value}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Quality Certifications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to quality and safety is backed by international certifications and standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-0 space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground">{cert.category}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Innovations */}
      <section ref={innovationsRef} className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={innovationsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Future Innovations
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Pioneering the next generation of sustainable packaging solutions 
              with breakthrough technologies and materials.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {innovations.map((innovation, index) => (
              <motion.div
                key={innovation.title}
                initial={{ opacity: 0, y: 30 }}
                animate={innovationsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-0 space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold text-white">
                        {innovation.title}
                      </h3>
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                        {innovation.status}
                      </Badge>
                    </div>
                    <p className="text-white/80">
                      {innovation.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/20">
                      <span className="text-sm text-white/70">Timeline:</span>
                      <span className="text-sm font-medium text-white">{innovation.timeline}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Partner with Innovation
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the future of sustainable packaging. Let our technology and expertise 
              help you achieve your sustainability and quality goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
               <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/products">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Explore Products
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}