'use client';

import { motion } from 'framer-motion';
import { CompanyCard } from './CompanyCard';
import { GridPattern, SectionLabel } from './styling';

const companies = [
  {
    name: 'iTechArt',
    logo: '/images/85e599c989c466bac62d32cb8e1d5831ff4a2cc0.png',
    url: 'https://itechartgroup.by/',
    description:
      'Architected React applications, optimized performance, built enterprise solutions',
  },
  {
    name: 'elemy',
    logo: '/images/8c88f966c88723e1fb4098ca5f9a50a2019e82ff.png',
    url: 'https://care.elemy.com/peds_b/',
    description:
      'Built healthcare platform interfaces, implemented real-time features, ensured HIPAA compliance',
  },
  {
    name: 'coverwallet',
    logo: '/images/2451566175a740f38ecee00e8b5679d1687ac669.png',
    url: 'https://www.coverwallet.com/',
    description:
      'Created insurance management dashboards, integrated payment systems, refined UX workflows',
  },
  {
    name: 'Keeps',
    logo: '/images/a3389506a9c698eb3b4873165166cc863799daa8.png',
    url: 'https://www.keeps.com/?srsltid=AfmBOoq44hUlcDidv_pg4tf3iAL6xrMjTu9Be_lYQZY59WAIwwDiD7Cj',
    description:
      'Crafted e-commerce experiences, optimized checkout flows, integrated subscription systems',
  },
  {
    name: 'Popsa',
    logo: '/images/d33116a7f1973f42129f2fd150e1189098b7586f.png',
    url: 'https://popsa.com/en-us/',
    description:
      'Built photo book creator, implemented drag-and-drop interface, enhanced mobile UX',
  },
];

export const Companies = () => (
  <section
    id="companies"
    className="relative overflow-hidden border-t border-purple-500/30 px-4 py-16 md:px-6 md:py-32"
  >
    <GridPattern />
    <div className="relative z-10 mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12 md:mb-16"
      >
        <SectionLabel>Career Path</SectionLabel>
      </motion.div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-5">
        {companies.map((company, index) => (
          <CompanyCard key={company.name} {...company} index={index} />
        ))}
      </div>
    </div>
  </section>
);
