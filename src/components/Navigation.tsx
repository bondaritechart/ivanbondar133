"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

interface NavigationProps {
  onOpenCV: () => void;
}

export function Navigation({ onOpenCV }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleOpenCV = () => {
    onOpenCV();
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-purple-500/30' 
          : 'bg-transparent border-purple-500/0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <motion.a
            href="/"
            className="relative group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image 
              src="/images/08a4c2941dcc091823d73b529c66d66174d578f3.png" 
              alt="Logo" 
              width={40}
              height={40}
              className="h-8 md:h-10 w-auto"
            />
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={handleOpenCV}
              className="text-zinc-400 hover:text-white transition-colors duration-300 uppercase text-sm tracking-wider"
            >
              CV
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="text-zinc-400 hover:text-white transition-colors duration-300 uppercase text-sm tracking-wider"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('career')}
              className="text-zinc-400 hover:text-white transition-colors duration-300 uppercase text-sm tracking-wider"
            >
              Career
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative px-6 py-2.5 overflow-hidden border-2 border-purple-500"
            >
              <div className="absolute inset-0 bg-purple-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative text-white uppercase text-sm tracking-wider">Get in Touch</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 border-2 border-purple-500/50 hover:border-purple-500 flex items-center justify-center transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-purple-500" />
            ) : (
              <Menu className="w-5 h-5 text-purple-500" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-b border-purple-500/30"
          >
            <div className="px-6 py-6 space-y-4">
              <button
                onClick={handleOpenCV}
                className="block w-full text-left text-zinc-400 hover:text-white transition-colors duration-300 uppercase text-sm tracking-wider py-3 border-b border-purple-500/20"
              >
                CV
              </button>
              <button
                onClick={() => scrollToSection('work')}
                className="block w-full text-left text-zinc-400 hover:text-white transition-colors duration-300 uppercase text-sm tracking-wider py-3 border-b border-purple-500/20"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('career')}
                className="block w-full text-left text-zinc-400 hover:text-white transition-colors duration-300 uppercase text-sm tracking-wider py-3 border-b border-purple-500/20"
              >
                Career
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full mt-4 px-6 py-3 border-2 border-purple-500 bg-purple-500 hover:bg-purple-600 transition-colors text-white uppercase text-sm tracking-wider"
              >
                Get in Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
