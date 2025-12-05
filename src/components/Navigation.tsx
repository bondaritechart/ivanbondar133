'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface NavigationProps {
  onOpenCV: () => void;
}

export const Navigation = ({ onOpenCV }: NavigationProps) => {
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

  const NAV_LINKS = [
    { label: 'CV', onClick: handleOpenCV },
    { label: 'Career', onClick: () => scrollToSection('career') },
    { label: 'Skills', onClick: () => scrollToSection('work') },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed top-0 right-0 left-0 z-50 border-b transition-all duration-500 ${
        isScrolled
          ? 'border-purple-500/30 bg-black/90 backdrop-blur-xl'
          : 'border-purple-500/0 bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-center justify-between">
          <motion.a
            href="/"
            className="group relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/images/08a4c2941dcc091823d73b529c66d66174d578f3.png"
              alt="Logo"
              width={40}
              height={40}
              className="h-8 w-auto md:h-10"
            />
          </motion.a>
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={link.onClick}
                className="text-sm tracking-wider text-zinc-400 uppercase transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative overflow-hidden border-2 border-purple-500 px-6 py-2.5"
            >
              <div className="absolute inset-0 translate-y-full bg-purple-500 transition-transform duration-300 group-hover:translate-y-0" />
              <span className="relative text-sm tracking-wider text-white uppercase">
                Get in Touch
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center border-2 border-purple-500/50 transition-colors hover:border-purple-500 md:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 text-purple-500" />
            ) : (
              <Menu className="h-5 w-5 text-purple-500" />
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
            className="overflow-hidden border-b border-purple-500/30 bg-black/95 backdrop-blur-xl md:hidden"
          >
            <div className="space-y-4 px-6 py-6">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={link.onClick}
                  className="block w-full border-b border-purple-500/20 py-3 text-left text-sm tracking-wider text-zinc-400 uppercase transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="mt-4 w-full border-2 border-purple-500 bg-purple-500 px-6 py-3 text-sm tracking-wider text-white uppercase transition-colors hover:bg-purple-600"
              >
                Get in Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
