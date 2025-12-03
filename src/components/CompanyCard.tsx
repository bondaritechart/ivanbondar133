'use client';

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
  <motion.a
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex min-h-[220px] flex-col border-2 border-purple-500/30 bg-black p-6 transition-all duration-300 hover:border-purple-500 md:min-h-[280px]"
  >
    <CornerAccent position="top-left" />
    <CornerAccent position="bottom-right" color="fuchsia" />
    <div className="mb-4 flex flex-1 items-center justify-center md:mb-6">
      {logo ? (
        <div className="relative h-10 w-full md:h-12">
          <Image
            src={logo}
            alt={name}
            fill
            className="object-contain grayscale group-hover:grayscale-0"
          />
        </div>
      ) : (
        <span className="text-lg tracking-wider text-zinc-200 uppercase transition-colors duration-300 group-hover:text-white md:text-2xl">
          {name}
        </span>
      )}
    </div>
    <div className="flex-1 border-t border-purple-500/20 pt-3 md:pt-4">
      <p className="text-sm leading-relaxed text-zinc-200">{description}</p>
    </div>
  </motion.a>
);
