"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Download,
  Share2,
  Heart,
  Bookmark
} from 'lucide-react';

const dockItems = [
  { icon: MessageCircle, label: 'WhatsApp', color: 'from-green-500 to-green-600', action: () => window.open('https://wa.me/38338123456') },
  { icon: Phone, label: 'Call Us', color: 'from-blue-500 to-blue-600', action: () => window.open('tel:+38338123456') },
  { icon: Mail, label: 'Email', color: 'from-purple-500 to-purple-600', action: () => window.open('mailto:info@europlast.eu') },
  { icon: Download, label: 'Catalog', color: 'from-orange-500 to-orange-600', action: () => {} },
  { icon: Share2, label: 'Share', color: 'from-pink-500 to-pink-600', action: () => navigator.share?.({ title: 'Europlast', url: window.location.href }) },
  { icon: Heart, label: 'Favorite', color: 'from-red-500 to-red-600', action: () => {} },
  { icon: Bookmark, label: 'Save', color: 'from-teal-500 to-teal-600', action: () => {} },
];

export function FloatingDock() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.div
        className="flex flex-col items-end space-y-3"
        initial={false}
        animate={isExpanded ? "expanded" : "collapsed"}
      >
        <AnimatePresence>
          {isExpanded && dockItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0, x: 20 }}
                transition={{ delay: index * 0.05, type: "spring", stiffness: 300, damping: 20 }}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={item.action}
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} shadow-lg hover:shadow-xl glass border border-white/20 group relative`}
                >
                  <Icon className="w-5 h-5 text-white" />
                  <div className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {item.label}
                  </div>
                </Button>
              </motion.div>
            );
          })}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 shadow-xl glass border border-white/30 flex items-center justify-center group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ rotate: isExpanded ? 45 : 0 }}
        >
          <div className="w-6 h-6 relative">
            <motion.div
              className="absolute inset-0 bg-white rounded-full"
              animate={{
                scale: isExpanded ? 0 : 1,
                rotate: isExpanded ? 180 : 0
              }}
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                rotate: isExpanded ? 0 : -180,
                scale: isExpanded ? 1 : 0
              }}
            >
              <div className="w-4 h-0.5 bg-white rounded-full" />
              <div className="w-0.5 h-4 bg-white rounded-full absolute" />
            </motion.div>
          </div>
        </motion.button>
      </motion.div>
    </div>
  );
}