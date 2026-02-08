'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui';
import { Routes } from '@/constants/routes';

const links = [
  {
    label: 'Career',
    href: Routes.CAREER,
  },
  {
    label: 'Projects',
    href: Routes.PROJECTS,
  },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 border-b transition-all duration-500 ${
        isScrolled
          ? 'border-purple-500/30 bg-black/90 backdrop-blur-xl'
          : 'border-purple-500/0 bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-center justify-between">
          <motion.a
            href={Routes.HOME}
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
          <div className="hidden items-center md:flex">
            {links.map((link) => (
              <Button key={link.href} variant="text" size="sm" href={link.href}>
                {link.label}
              </Button>
            ))}
            <Button variant="animated">Get in Touch</Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            variant="ghost"
            className="md:hidden"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] h-screen w-screen bg-black/95 backdrop-blur-xl md:hidden"
          >
            <Button
              aria-label="Close menu"
              onClick={() => setIsMobileMenuOpen(false)}
              variant="ghost"
              className="absolute top-6 right-6"
            >
              <X className="h-5 w-5" />
            </Button>

            <motion.div
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 12, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex h-full flex-col items-center justify-center gap-6 px-6"
            >
              {links.map((link) => (
                <Button
                  key={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="text"
                  size="sm"
                  href={link.href}
                >
                  {link.label}
                </Button>
              ))}
              <Button fullWidth className="max-w-xs" onClick={() => setIsMobileMenuOpen(false)}>
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
