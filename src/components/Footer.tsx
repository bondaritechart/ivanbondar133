'use client';

import { GridPattern } from './styling';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-purple-500/30 px-6 py-16">
      <div className="absolute inset-0 bg-black" />

      {/* Grid pattern */}
      <GridPattern />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <p className="text-sm tracking-wider text-zinc-600 uppercase">
            © {currentYear} All rights reserved
          </p>

          <div className="flex gap-12">
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-wider text-zinc-600 uppercase transition-colors duration-300 hover:text-purple-500"
            >
              Dribbble
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-wider text-zinc-600 uppercase transition-colors duration-300 hover:text-purple-500"
            >
              Behance
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-wider text-zinc-600 uppercase transition-colors duration-300 hover:text-purple-500"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
