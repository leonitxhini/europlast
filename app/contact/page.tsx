"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useInView } from 'react-intersection-observer';
import { toast } from 'sonner';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  Send,
  CheckCircle,
  Globe,
  Factory,
  MessageCircle,
  ExternalLink
} from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  phone: z.string().min(8, 'Please enter a valid phone number'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    details: ['Kaçanik, Kosovo', 'Industrial Zone'],
    action: 'View on Maps'
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['+383 (0) 38 123 456', '+383 (0) 49 123 456'],
    action: 'Call Now'
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@europlast.eu', 'sales@europlast.eu'],
    action: 'Send Email'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM'],
    action: null
  }
];

const quickContact = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Quick support via WhatsApp',
    action: 'Chat Now',
    color: 'from-red-600 to-red-700'
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Instant support during business hours',
    action: 'Start Chat',
    color: 'from-red-600 to-red-700'
  },
  {
    icon: Phone,
    title: 'Emergency Line',
    description: '24/7 support for urgent matters',
    action: 'Call Emergency',
    color: 'from-red-700 to-red-800'
  }
];

const offices = [
  {
    city: 'Kaçanik (HQ)',
    country: 'Kosovo',
    address: 'Industrial Zone, Kaçanik 71000',
    phone: '+383 (0) 38 123 456',
    email: 'kacanik@europlast.eu'
  }
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [headerRef, headerInView] = useInView({ threshold: 0.3 });
  const [formRef, formInView] = useInView({ threshold: 0.2 });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
    reset();
    setIsSubmitting(false);
  };

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
              <MessageSquare className="w-4 h-4 mr-2" />
              Get in Touch
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to discuss your packaging needs? Our team of experts is here to help 
              you find the perfect solution for your business requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Quick Contact Options
            </h2>
            <p className="text-muted-foreground">
              Choose the fastest way to reach us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickContact.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="text-center p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-0 space-y-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${option.color} rounded-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-lg mb-2">
                          {option.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {option.description}
                        </p>
                        <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          {option.action}
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section ref={formRef} className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-8">
                <CardContent className="p-0">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Send us a Message
                  </h2>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Input
                          {...register('name')}
                          placeholder="Full Name *"
                          className={errors.name ? 'border-red-500' : ''}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <Input
                          {...register('email')}
                          type="email"
                          placeholder="Email Address *"
                          className={errors.email ? 'border-red-500' : ''}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Input
                          {...register('company')}
                          placeholder="Company Name"
                        />
                      </div>
                      <div>
                        <Input
                          {...register('phone')}
                          placeholder="Phone Number *"
                          className={errors.phone ? 'border-red-500' : ''}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Input
                        {...register('subject')}
                        placeholder="Subject *"
                        className={errors.subject ? 'border-red-500' : ''}
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                      )}
                    </div>

                    <div>
                      <Textarea
                        {...register('message')}
                        placeholder="Tell us about your packaging needs... *"
                        rows={6}
                        className={errors.message ? 'border-red-500' : ''}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground">
                      * Required fields. We'll respond within 24 hours.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8">
                  Reach out to us through any of these channels. Our team is ready 
                  to assist you with your packaging requirements.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, x: 30 }}
                      animate={formInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="p-4 bg-card/30 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                        <CardContent className="p-0 flex items-center space-x-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground text-sm mb-1">
                              {info.title}
                            </h3>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-muted-foreground text-sm">
                                {detail}
                              </p>
                            ))}
                          </div>
                          {info.action && (
                            <Button variant="ghost" size="sm" className="text-xs">
                              {info.action}
                            </Button>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Card className="p-4 bg-card/30 backdrop-blur-sm border-border/50">
                  <CardContent className="p-0">
                    <div className="h-48 bg-gradient-to-br from-blue-100 to-teal-100 dark:from-blue-900/20 dark:to-teal-900/20 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Interactive Map</p>
                        <p className="text-xs text-muted-foreground">Click to view location</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Locations
            </h2>
            <p className="text-lg text-muted-foreground">
              Find us across the Balkans region
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
                  <CardContent className="p-0 space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center mx-auto">
                      <Factory className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">
                        {office.city}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {office.country}
                      </p>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>{office.address}</p>
                      <p>{office.phone}</p>
                      <p>{office.email}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our experienced team is ready to help you find the perfect packaging solution. 
              From custom requirements to technical specifications, we're here to assist.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-red-600" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-red-600" />
                <span>Custom solutions</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-red-600" />
                <span>Technical support</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-red-600" />
                <span>Fast response time</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}