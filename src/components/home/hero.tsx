'use client';

import { motion } from 'framer-motion';
import { Typography } from '@/components/ui';
import { GridPattern, CornerAccent, SharpAccent } from '../styling';

export const Hero = () => (
  <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 md:px-6">
    <SharpAccent position="top-right" size="lg" />
    <SharpAccent position="bottom-left" color="fuchsia" />
    <GridPattern opacity="medium" />
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative z-10 mx-auto max-w-6xl space-y-8 text-center md:space-y-14"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="border-primary relative inline-block border-2 px-4 py-2 md:px-6"
      >
        <CornerAccent position="top-right" showOn="always" />
        <CornerAccent position="bottom-left" color="accent" showOn="always" />
        <Typography variant="caption">Full-Stack Developer</Typography>
      </motion.div>

      <div className="relative p-10">
        <div className="via-primary absolute top-0 right-[-200px] left-[-200px] hidden h-[1px] bg-gradient-to-r from-transparent to-transparent md:block" />
        <div className="via-accent absolute right-[-200px] bottom-0 left-[-200px] hidden h-[1px] bg-gradient-to-r from-transparent to-transparent md:block" />
        <div className="via-primary absolute top-[-150px] bottom-[-150px] left-0 hidden w-[1px] bg-gradient-to-b from-transparent to-transparent md:block" />
        <div className="via-accent absolute top-[-150px] right-0 bottom-[-150px] hidden w-[1px] bg-gradient-to-b from-transparent to-transparent md:block" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Typography variant="h1" as="h1">
            I build web apps that <span className="text-primary">grow businesses</span>
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-12 max-w-3xl"
        >
          <Typography variant="description">
            Full-stack developer with 7+ years of experience, building high-load web apps for
            fintech, healthcare and e-commerce.
          </Typography>
        </motion.div>
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
            Discuss your project
          </span>
        </a>

        <a
          href="#work"
          className="group relative w-full border-2 border-purple-500 bg-stone-950 px-8 py-3 text-center text-sm tracking-widest text-purple-400 uppercase transition-all duration-300 hover:bg-purple-500 hover:text-white sm:w-auto md:px-10 md:py-4 md:text-base"
        >
          View examples
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
