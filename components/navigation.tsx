"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Package,
  Users,
  Info,
  Settings,
  MessageSquare
} from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/', icon: Package },
  { name: 'Products', href: '/products', icon: Package },
  { name: 'Uses', href: '/uses', icon: Users },
  { name: 'About', href: '/about', icon: Info },
  { name: 'Technology', href: '/technology', icon: Settings },
  { name: 'Contact', href: '/contact', icon: MessageSquare },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-lg border-b border-border shadow-lg' 
            : 'bg-background/90 backdrop-blur-sm border-b border-border/50'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/EUROPLAST_LOGO_BLACK.png"
                alt="Europlast Logo"
                width={100}
                height={28}
                className="object-contain dark:invert sm:w-[120px] sm:h-[32px]"
              />
            </Link>

            {/* Navigation - Always visible, horizontal scroll on mobile */}
            <nav className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto scrollbar-hide">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? 'text-white bg-red-600 shadow-md'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden xs:inline">{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Theme Toggle - No mobile menu needed */}
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon" 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-9 h-9 sm:w-10 sm:h-10"
              >
                <Sun className="h-3 w-3 sm:h-4 sm:w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-3 w-3 sm:h-4 sm:w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div 
          className="absolute bottom-0 left-0 h-1 bg-red-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </motion.header>

    </>
  );
}