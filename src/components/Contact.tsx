"use client";

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export function Contact() {
  const socialLinks = [
    { icon: Mail, href: 'mailto:ivanbondar133@gmail.com', label: 'Email' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' }
  ];

  return (
    <section id="contact" className="py-16 md:py-32 px-4 md:px-6 relative overflow-hidden border-t border-purple-500/30">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />
      
      {/* Sharp accent - smaller on mobile */}
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/10" style={{
        clipPath: 'polygon(0 100%, 100% 100%, 0 0)'
      }} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[2px] w-8 md:w-12 bg-purple-500" />
            <p className="text-xs md:text-sm text-purple-400 uppercase tracking-[0.2em] md:tracking-[0.3em]">Contact</p>
            <div className="h-[2px] w-8 md:w-12 bg-purple-500" />
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-7xl mb-6 md:mb-8">
            Get in Touch
          </h2>
          
          <p className="text-sm md:text-lg text-zinc-500 mb-12 md:mb-16 max-w-2xl mx-auto uppercase tracking-wider px-4">
            Ready to discuss your project? Let&apos;s connect and build something extraordinary together.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16 px-4"
          >
            <a
              href="mailto:ivanbondar133@gmail.com"
              className="group relative inline-block border-2 border-purple-500 px-6 md:px-12 py-4 md:py-6 overflow-hidden"
            >
              <div className="absolute inset-0 bg-purple-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <div className="absolute -top-1 -right-1 w-3 md:w-4 h-3 md:h-4 bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -bottom-1 -left-1 w-3 md:w-4 h-3 md:h-4 bg-purple-500" />
              <div className="relative text-sm md:text-xl lg:text-3xl text-white uppercase tracking-wider break-all">
                ivanbondar133@gmail.com
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center gap-3 md:gap-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center"
                aria-label={link.label}
              >
                <div className="absolute inset-0 border-2 border-purple-500/30 bg-black group-hover:border-purple-500 transition-all duration-300" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <link.icon className="relative text-purple-500 group-hover:text-white transition-colors duration-300" size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
