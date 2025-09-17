"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Package,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter
} from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Technology', href: '/technology' },
    { name: 'Sustainability', href: '/technology' },
    { name: 'Careers', href: '/contact' },
  ],
  products: [
    { name: 'Shrink Foil', href: '/products' },
    { name: 'Black Foil', href: '/products' },
    { name: 'Plastic Bags', href: '/products' },
    { name: 'Colored Foils', href: '/products' },
  ],
  support: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Technical Support', href: '/contact' },
    { name: 'Documentation', href: '/uses' },
    { name: 'FAQ', href: '/contact' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative">
                <Image
                  src="/EUROPLAST_LOGO_BLACK.png"
                  alt="Europlast Logo"
                  width={120}
                  height={32}
                  className="object-contain dark:invert sm:w-[150px] sm:h-[40px]"
                  priority
                />
              </div>
            </Link>
            
            <p className="text-muted-foreground max-w-md text-sm sm:text-base">
              Since 2005, we've been Kosovo's leading manufacturer of premium plastic packaging solutions, 
              serving clients across Europe with quality and innovation.
            </p>

            {/* Contact Info */}
            <div className="space-y-1.5 sm:space-y-2">
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Kaçanik, Kosovo</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>+383 (0) 38 123 456</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>info@europlast.eu</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-1.5 sm:space-x-2">
              {[
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="p-1.5 sm:p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Links Sections - Horizontal layout on mobile */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-3 sm:space-y-4">
                <h3 className="font-semibold text-foreground capitalize text-sm sm:text-base">
                  {category === 'company' ? 'Company' : category === 'products' ? 'Products' : 'Support'}
                </h3>
                <ul className="space-y-1.5 sm:space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-border/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="font-semibold text-base sm:text-lg text-foreground mb-2">
                Stay Updated
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Get the latest news about our products and sustainability initiatives.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 text-sm"
              />
              <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © 2025 Europlast. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 sm:space-x-6">
            <Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}