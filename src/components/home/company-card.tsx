'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Typography } from '@/components/ui';
import { ValuePropCard } from '@/components/ui/value-prop-card';
import { CornerAccent } from '../styling';

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
  >
    <ValuePropCard className="min-h-55 md:min-h-70">
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
      <div className="border-primary/20 flex-1 border-t pt-3 md:pt-4">
        <Typography variant="body">{description}</Typography>
      </div>
    </ValuePropCard>
  </motion.a>
);
