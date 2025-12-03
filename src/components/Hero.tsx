"use client";

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-6 relative overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Sharp gradient accents */}
      <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-purple-600/20" style={{
        clipPath: 'polygon(100% 0, 100% 100%, 0 0)'
      }} />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-fuchsia-600/20" style={{
        clipPath: 'polygon(0 100%, 100% 100%, 0 0)'
      }} />
      
      {/* Technical grid */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.3) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />
      
      {/* Cyber lines - hidden on mobile */}
      <div className="hidden md:block absolute top-1/4 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      <div className="hidden md:block absolute top-3/4 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent" />
      <div className="hidden md:block absolute top-0 bottom-0 left-1/4 w-[1px] bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
      <div className="hidden md:block absolute top-0 bottom-0 right-1/4 w-[1px] bg-gradient-to-b from-transparent via-fuchsia-500 to-transparent" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-6 md:mb-8 px-4 md:px-6 py-2 border-2 border-purple-500 bg-black relative"
          >
            <div className="absolute -top-1 -right-1 w-2 md:w-3 h-2 md:h-3 bg-purple-500" />
            <div className="absolute -bottom-1 -left-1 w-2 md:w-3 h-2 md:h-3 bg-fuchsia-500" />
            <span className="text-purple-400 text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase">Full-Stack Developer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl mb-6 md:mb-8 leading-none px-4"
          >
            WELCOME TO THE{' '}
            <br />
            <span className="text-purple-500">
              DIGITAL
            </span>{' '}
            WORLD
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm md:text-lg lg:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-8 md:mb-12 uppercase tracking-wider px-4"
          >
            Full-Stack Developer with rich experience in building
            innovative web applications. Combining creativity with technical
            expertise to deliver cutting-edge solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          >
            <a
              href="#contact"
              className="group relative w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 bg-purple-600 border-2 border-purple-500 overflow-hidden text-center"
            >
              <div className="absolute inset-0 bg-purple-500 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              <div className="absolute -top-1 -right-1 w-3 md:w-4 h-3 md:h-4 bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative text-white uppercase tracking-widest text-sm md:text-base">Get Started</span>
            </a>
            
            <a
              href="#work"
              className="group relative w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 border-2 border-purple-500 text-purple-400 hover:text-white hover:bg-purple-500/10 transition-all duration-300 uppercase tracking-widest text-center text-sm md:text-base"
            >
              <div className="absolute -bottom-1 -left-1 w-3 md:w-4 h-3 md:h-4 bg-purple-500" />
              View Work
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scanline effect */}
      <motion.div
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        animate={{
          top: ["0%", "100%"]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </section>
  );
}
