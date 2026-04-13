"use client"

import { motion } from "framer-motion"
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['About', 'Projects', 'Tech Stack'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center text-white shadow-lg">
              <span className="text-xl">NI</span>
            </div>
            <span className="text-xl hidden sm:block">Nurul Istiqomah</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all" onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Let&apos;s Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 space-y-4"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block text-gray-700 hover:text-purple-600 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full hover:shadow-lg transition-all" onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Let&apos;s Talk
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
