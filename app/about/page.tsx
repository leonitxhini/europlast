"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, 
  Users, 
  Award, 
  Target,
  Eye,
  Heart,
  Factory,
  Globe,
  Leaf,
  Shield,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const timeline = [
  {
    year: 2005,
    title: 'Company Founded',
    description: 'Europlast was established in Pristina, Kosovo, with a vision to provide quality plastic solutions.',
    icon: Factory
  },
  {
    year: 2008,
    title: 'First Major Expansion',
    description: 'Expanded production capacity and introduced new product lines for agricultural applications.',
    icon: TrendingUp
  },
  {
    year: 2012,
    title: 'ISO Certifications',
    description: 'Achieved ISO 9001 and ISO 14001 certifications, establishing quality and environmental standards.',
    icon: Award
  },
  {
    year: 2015,
    title: 'European Market Entry',
    description: 'Successfully entered European markets, serving clients across multiple countries.',
    icon: Globe
  },
  {
    year: 2018,
    title: 'Sustainability Initiative',
    description: 'Launched comprehensive sustainability program focusing on recyclable materials.',
    icon: Leaf
  },
  {
    year: 2020,
    title: 'Digital Transformation',
    description: 'Implemented advanced manufacturing technologies and digital quality control systems.',
    icon: Shield
  },
  {
    year: 2025,
    title: 'Innovation Hub',
    description: 'Established R&D center for developing next-generation sustainable packaging solutions.',
    icon: Target
  }
];

const values = [
  {
    icon: Shield,
    title: 'Quality First',
    description: 'We never compromise on quality, ensuring every product meets the highest international standards.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Environmental responsibility is at the core of our operations and product development.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'We build lasting partnerships by understanding and exceeding our customers\' expectations.',
  },
  {
    icon: Heart,
    title: 'Innovation',
    description: 'Continuous improvement and innovation drive our pursuit of better solutions.',
  }
];

const stats = [
  { label: 'Years in Business', value: '20+', icon: Calendar },
  { label: 'Countries Served', value: '25+', icon: Globe },
  { label: 'Team Members', value: '150+', icon: Users },
  { label: 'Products Delivered', value: '1M+', icon: Award }
];

export default function About() {
  const [headerRef, headerInView] = useInView({ threshold: 0.3 });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.2 });
  const [statsRef, statsInView] = useInView({ threshold: 0.3 });

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section ref={headerRef} className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-6 px-4 py-2">
                <Factory className="w-4 h-4 mr-2" />
                Since 2005
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                About Europlast
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                For over two decades, we've been Kosovo's leading manufacturer of premium plastic 
                packaging solutions. Our commitment to quality, innovation, and sustainability has 
                made us a trusted partner for businesses across Europe.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
                    Get in Touch
                  </Button>
                </Link>
                <Link href="/products">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Our Products
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/pallets-cover.jpg"
                  alt="Europlast Factory"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              
              {/* Floating Achievement Card */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-background/95 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-1">20+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 p-8">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    To provide innovative, sustainable plastic packaging solutions that protect products, 
                    enhance brand value, and contribute to a circular economy. We are committed to 
                    delivering exceptional quality while minimizing our environmental impact.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 p-8">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg flex items-center justify-center">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    To be the leading sustainable packaging partner in Southeast Europe, recognized 
                    for our innovation, quality, and commitment to environmental stewardship. We 
                    envision a future where packaging protects without harming our planet.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are as a company.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full text-center p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-0 space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              These numbers represent our commitment to excellence and the trust our clients place in us.
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
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </motion.div>
              );
            })}
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
              Join Our Success Story
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Partner with us and experience the difference that two decades of expertise, 
              innovation, and commitment to quality can make for your business.
              made us a trusted partner for businesses across Europe, operating from our facility in Kaçanik.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
                  Start Partnership
                  <CheckCircle className="ml-2 h-4 w-4" />
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