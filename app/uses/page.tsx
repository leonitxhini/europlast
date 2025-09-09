"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Utensils, 
  Tractor, 
  Factory, 
  ArrowRight,
  Shield,
  Leaf,
  CheckCircle,
  Package,
  Recycle,
  Award
} from 'lucide-react';

const applications = [
  {
    id: 1,
    category: 'Food Packaging',
    icon: Utensils,
    image: '/water-bottle.jpg',
    description: 'Our food-grade plastic solutions ensure freshness, safety, and compliance with international food standards.',
    features: [
      'FDA and EU approved materials',
      'Excellent barrier properties',
      'Extended shelf life',
      'Tamper-evident sealing',
      'Microwave and freezer safe options'
    ],
    applications: [
      'Fresh produce packaging',
      'Meat and poultry wrapping',
      'Dairy product protection',
      'Bakery item covering',
      'Ready meal containers',
      'Frozen food packaging'
    ],
    benefits: [
      'Maintains food quality and safety',
      'Reduces food waste significantly',
      'Cost-effective packaging solution',
      'Enhances product presentation'
    ]
  },
  {
    id: 2,
    category: 'Agriculture',
    icon: Tractor,
    image: '/cover-film.jpg',
    description: 'Agricultural films and covers designed to optimize crop yield, protect plants, and conserve resources.',
    features: [
      'UV-stabilized materials',
      'Weather-resistant construction',
      'Multi-season durability',
      'Anti-drip technology',
      'Optimal light transmission'
    ],
    applications: [
      'Greenhouse covering',
      'Mulching films',
      'Tunnel farming',
      'Crop protection',
      'Soil moisture retention',
      'Weed suppression'
    ],
    benefits: [
      'Increases crop yield by up to 40%',
      'Reduces water consumption',
      'Protects against harsh weather',
      'Extends growing seasons'
    ]
  },
  {
    id: 3,
    category: 'Industrial Applications',
    icon: Factory,
    image: '/pallets-cover.jpg',
    description: 'Heavy-duty industrial packaging solutions for manufacturing, construction, and logistics sectors.',
    features: [
      'High tensile strength',
      'Chemical resistance',
      'Anti-static properties',
      'Custom sizing available',
      'Temperature stability'
    ],
    applications: [
      'Bulk material storage',
      'Construction site protection',
      'Waste management',
      'Chemical packaging',
      'Equipment covering',
      'Transport packaging'
    ],
    benefits: [
      'Reduces material handling costs',
      'Ensures product protection',
      'Improves workplace safety',
      'Streamlines logistics operations'
    ]
  }
];

const stats = [
  { label: 'Food Safety Compliance', value: '100%', icon: Shield },
  { label: 'Recyclable Materials', value: '95%', icon: Recycle },
  { label: 'Quality Certifications', value: '12+', icon: Award },
  { label: 'Industry Applications', value: '50+', icon: Package }
];

export default function Uses() {
  const [headerRef, headerInView] = useInView({ threshold: 0.3 });
  const [statsRef, statsInView] = useInView({ threshold: 0.3 });

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
              <Package className="w-4 h-4 mr-2" />
              Versatile Applications
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              How Our Products Are Used
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              From food packaging to industrial applications, discover how our plastic solutions 
              serve diverse industries and improve efficiency across various sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Applications Sections */}
      {applications.map((app, index) => {
        const Icon = app.icon;
        const isEven = index % 2 === 0;
        
        return (
          <section key={app.id} className={`py-20 ${isEven ? 'bg-background' : 'bg-muted/30'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                isEven ? '' : 'lg:grid-cols-2'
              }`}>
                {/* Content */}
                <motion.div
                  className={`space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">
                      {app.category}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-muted-foreground">
                    {app.description}
                  </p>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {app.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-red-600" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Applications
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {app.applications.map((application) => (
                        <Badge key={application} variant="secondary" className="text-xs">
                          {application}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Benefits
                    </h3>
                    <div className="space-y-2">
                      {app.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <ArrowRight className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
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
                  <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden group">
                    <Image
                      src={app.image}
                      alt={app.category}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    
                    {/* Floating Stats Card */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <Card className="bg-background/90 backdrop-blur-sm border-border/50">
                        <CardContent className="p-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-foreground">
                                {index === 0 ? '95%' : index === 1 ? '40%' : '30%'}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {index === 0 ? 'Food Safety' : index === 1 ? 'Yield Increase' : 'Cost Reduction'}
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-foreground">
                                {index === 0 ? '20+' : index === 1 ? '5+' : '100+'}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {index === 0 ? 'Countries' : index === 1 ? 'Years Durable' : 'Industries'}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Quality You Can Trust
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Our commitment to excellence is reflected in our certifications, 
              sustainability practices, and industry recognition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to Find Your Solution?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Explore our product range or contact our experts to discuss 
              your specific packaging requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/products">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
                  Browse Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Get Expert Advice
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}