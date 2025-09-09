"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Package, 
  Filter, 
  ArrowRight,
  Utensils,
  Tractor,
  Factory,
  Shield,
  Leaf,
  Zap
} from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Products', icon: Package },
  { id: 'food', name: 'Food Packaging', icon: Utensils },
  { id: 'agriculture', name: 'Agriculture', icon: Tractor },
  { id: 'industrial', name: 'Industrial', icon: Factory },
];

const products = [
  {
    id: 1,
    name: 'Premium Shrink Foil',
    category: 'food',
    description: 'High-clarity shrink wrap perfect for food packaging with excellent barrier properties.',
    image: '/water-bottle.jpg',
    features: ['Food Safe', 'Transparent', 'Heat Sealable', 'FDA Approved'],
    applications: ['Food packaging', 'Retail display', 'Product protection'],
    specs: {
      thickness: '12-25 microns',
      width: '100-2000mm',
      material: 'PE/PVC'
    }
  },
  {
    id: 2,
    name: 'Agricultural Black Foil',
    category: 'agriculture',
    description: 'UV-stabilized black plastic sheeting for mulching and soil protection.',
    image: '/cover-film.jpg',
    features: ['UV Resistant', 'Heavy Duty', 'Weather Proof', '2-Year Durability'],
    applications: ['Mulching', 'Soil protection', 'Greenhouse covering'],
    specs: {
      thickness: '50-200 microns',
      width: '1-12 meters',
      material: 'LDPE with UV additives'
    }
  },
  {
    id: 3,
    name: 'Industrial Storage Bags',
    category: 'industrial',
    description: 'Heavy-duty plastic bags for bulk storage and industrial applications.',
    image: '/pallets-cover.jpg',
    features: ['High Capacity', 'Tear Resistant', 'Custom Sizes', 'Anti-Static'],
    applications: ['Bulk storage', 'Waste management', 'Construction materials'],
    specs: {
      capacity: '50-1000L',
      thickness: '100-300 microns',
      material: 'HDPE/LDPE blend'
    }
  },
  {
    id: 4,
    name: 'Colored Foils Collection',
    category: 'food',
    description: 'Vibrant colored films for branding and decorative packaging applications.',
    image: '/chemical-clean.jpg',
    features: ['Custom Colors', 'Printable', 'Fade Resistant', 'Food Safe'],
    applications: ['Brand packaging', 'Decorative wrapping', 'Product identification'],
    specs: {
      thickness: '15-50 microns',
      colors: '20+ standard colors',
      material: 'Colored PE/PP'
    }
  },
  {
    id: 5,
    name: 'Greenhouse Films',
    category: 'agriculture',
    description: 'Specialized films for greenhouse covering with optimal light transmission.',
    image: '/cover-film.jpg',
    features: ['Light Transmission', 'Thermal Properties', 'Anti-Drip', '5-Year Warranty'],
    applications: ['Greenhouse covering', 'Tunnel farming', 'Plant protection'],
    specs: {
      thickness: '150-200 microns',
      width: '6-14 meters',
      material: 'EVA/PE Co-polymer'
    }
  },
  {
    id: 6,
    name: 'Food Grade Bags',
    category: 'food',
    description: 'FDA-approved bags for direct food contact applications.',
    image: '/water-bottle.jpg',
    features: ['FDA Approved', 'BPA Free', 'Freezer Safe', 'Microwave Safe'],
    applications: ['Food storage', 'Frozen foods', 'Restaurant supplies'],
    specs: {
      sizes: '15x20cm to 60x80cm',
      thickness: '25-100 microns',
      material: 'Food-grade PE'
    }
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [headerRef, headerInView] = useInView({ threshold: 0.3 });
  const [productsRef, productsInView] = useInView({ threshold: 0.1 });

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

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
              Premium Product Range
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Our Plastic Solutions
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Discover our comprehensive range of high-quality plastic products designed for 
              food packaging, agriculture, and industrial applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category, index) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section ref={productsRef} className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={productsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={productsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-background/90">
                        {categories.find(c => c.id === product.category)?.name}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {product.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground text-sm">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature) => (
                          <Badge key={feature} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Specifications */}
                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground text-sm">Specifications:</h4>
                      <div className="grid grid-cols-1 gap-1 text-xs text-muted-foreground">
                        {Object.entries(product.specs).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="capitalize">{key}:</span>
                            <span>{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Applications */}
                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground text-sm">Applications:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.applications.map((app, idx) => (
                          <span key={idx} className="text-xs text-muted-foreground">
                            {app}{idx < product.applications.length - 1 && ' • '}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border/50">
                      <Link href="/contact">
                        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          Request Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No products found
              </h3>
              <p className="text-muted-foreground">
                Try selecting a different category or contact us for custom solutions.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Need Custom Solutions?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We specialize in creating tailored plastic packaging solutions 
              to meet your specific requirements and industry standards.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white">
                  Contact Our Experts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/technology">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-red-600">
                  Our Technology
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}