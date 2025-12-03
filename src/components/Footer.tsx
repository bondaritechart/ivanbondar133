"use client";

import { GridPattern } from './GridPattern';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 border-t border-purple-500/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      
      {/* Grid pattern */}
      <GridPattern />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-zinc-600 text-sm uppercase tracking-wider">
            © {currentYear} All rights reserved
          </p>
          
          <div className="flex gap-12">
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-purple-500 transition-colors duration-300 text-sm uppercase tracking-wider"
            >
              Dribbble
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-purple-500 transition-colors duration-300 text-sm uppercase tracking-wider"
            >
              Behance
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-purple-500 transition-colors duration-300 text-sm uppercase tracking-wider"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
