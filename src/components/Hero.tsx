'use client';

import { motion } from 'framer-motion';
import { GridPattern, CornerAccent, SharpAccent } from './styling';

export const Hero = () => (
  <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 md:px-6">
    <SharpAccent position="top-right" size="lg" />
    <SharpAccent position="bottom-left" color="fuchsia" />
    <GridPattern opacity="medium" />
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative z-10 mx-auto max-w-6xl text-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mb-6 inline-block border-2 border-purple-500 bg-black px-4 py-2 md:mb-8 md:px-6"
      >
        <CornerAccent position="top-right" showOn="always" />
        <CornerAccent position="bottom-left" color="fuchsia" showOn="always" />
        <span className="text-xs tracking-[0.2em] text-purple-400 uppercase md:text-sm md:tracking-[0.3em]">
          Full-Stack Developer
        </span>
      </motion.div>

      <div className="relative">
        <div className="absolute top-0 right-[-200px] left-[-200px] hidden h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent md:block" />
        <div className="absolute right-[-200px] bottom-0 left-[-200px] hidden h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent md:block" />
        <div className="absolute top-[-150px] bottom-[-150px] left-0 hidden w-[1px] bg-gradient-to-b from-transparent via-purple-500 to-transparent md:block" />
        <div className="absolute top-[-150px] right-0 bottom-[-150px] hidden w-[1px] bg-gradient-to-b from-transparent via-fuchsia-500 to-transparent md:block" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6 px-4 text-4xl leading-none sm:text-6xl md:mb-8 md:text-8xl lg:text-9xl"
        >
          WELCOME TO THE <br />
          <span className="text-purple-500">DIGITAL</span> WORLD
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mb-8 max-w-3xl px-4 pb-6 text-sm leading-relaxed tracking-wider text-zinc-400 uppercase md:mb-12 md:text-lg lg:text-xl"
        >
          Full-Stack Developer with rich experience in building innovative web applications.
          Combining creativity with technical expertise to deliver cutting-edge solutions.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex flex-col items-center justify-center gap-4 px-4 sm:flex-row"
      >
        <a
          href="#contact"
          className="group relative w-full overflow-hidden border-2 border-purple-500 bg-purple-600 px-8 py-3 text-center transition-all duration-300 hover:bg-purple-500 sm:w-auto md:px-10 md:py-4"
        >
          <span className="relative text-sm tracking-widest text-white uppercase md:text-base">
            Get Started
          </span>
        </a>

        <a
          href="#work"
          className="group relative w-full border-2 border-purple-500 bg-black px-8 py-3 text-center text-sm tracking-widest text-purple-400 uppercase transition-all duration-300 hover:bg-purple-500 hover:text-white sm:w-auto md:px-10 md:py-4 md:text-base"
        >
          View Work
        </a>
      </motion.div>
    </motion.div>

    {/* Scanline effect */}
    <motion.div
      className="absolute right-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
      animate={{
        top: ['0%', '100%'],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  </section>
);
