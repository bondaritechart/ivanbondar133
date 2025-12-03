"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CornerAccent } from './styling';

interface CompanyCardProps {
  name: string;
  logo: string;
  url: string;
  description: string;
  index: number;
}

export const CompanyCard = ({ name, logo, url, description, index }: CompanyCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative"
  >
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative p-6 border-2 border-purple-500/30 bg-black hover:border-purple-500 transition-all duration-300 min-h-[220px] md:min-h-[280px] flex flex-col"
    >
      {/* Corner accents */}
      <CornerAccent position="top-left" />
      <CornerAccent position="bottom-right" color="fuchsia" />
      
      <div className="flex-1 flex items-center justify-center mb-4 md:mb-6">
        {logo ? (
          <div className="relative w-full h-10 md:h-12">
            <Image
              src={logo}
              alt={name}
              fill
              className="object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
            />
          </div>
        ) : (
          <span className="text-lg md:text-2xl text-zinc-500 group-hover:text-white transition-colors duration-300 uppercase tracking-wider">
            {name}
          </span>
        )}
      </div>
      
      <div className="border-t border-purple-500/20 pt-3 md:pt-4">
        <p className="text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors duration-300 leading-relaxed">
          {description}
        </p>
      </div>
    </a>
  </motion.div>
);
