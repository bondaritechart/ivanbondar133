"use client";

import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { GridPattern } from './GridPattern';

const companies = [
  { 
    name: 'iTechArt', 
    logo: '/images/85e599c989c466bac62d32cb8e1d5831ff4a2cc0.png', 
    url: 'https://itechartgroup.by/',
    description: 'Architected React applications, optimized performance, built enterprise solutions'
  },
  { 
    name: 'elemy', 
    logo: '/images/8c88f966c88723e1fb4098ca5f9a50a2019e82ff.png', 
    url: 'https://care.elemy.com/peds_b/',
    description: 'Built healthcare platform interfaces, implemented real-time features, ensured HIPAA compliance'
  },
  { 
    name: 'coverwallet', 
    logo: '/images/2451566175a740f38ecee00e8b5679d1687ac669.png', 
    url: 'https://www.coverwallet.com/',
    description: 'Created insurance management dashboards, integrated payment systems, refined UX workflows'
  },
  { 
    name: 'Keeps', 
    logo: '/images/a3389506a9c698eb3b4873165166cc863799daa8.png', 
    url: 'https://www.keeps.com/?srsltid=AfmBOoq44hUlcDidv_pg4tf3iAL6xrMjTu9Be_lYQZY59WAIwwDiD7Cj',
    description: 'Crafted e-commerce experiences, optimized checkout flows, integrated subscription systems'
  },
  { 
    name: 'Popsa', 
    logo: '/images/d33116a7f1973f42129f2fd150e1189098b7586f.png', 
    url: 'https://popsa.com/en-us/',
    description: 'Built photo book creator, implemented drag-and-drop interface, enhanced mobile UX'
  }
];

export function Companies() {
  return (
    <section id="career" className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden border-t border-purple-500/30">

      {/* Grid pattern */}
      <GridPattern />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 flex items-center gap-4"
        >
          <div className="h-[2px] w-8 md:w-12 bg-purple-500" />
          <p className="text-xs md:text-sm text-purple-400 uppercase tracking-[0.2em] md:tracking-[0.3em]">
            Career Path
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative p-6 border-2 border-purple-500/30 bg-black hover:border-purple-500 transition-all duration-300 min-h-[220px] md:min-h-[280px] flex flex-col"
              >
                {/* Corner accents */}
                <div className="absolute -top-1 -left-1 w-2 md:w-3 h-2 md:h-3 bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -bottom-1 -right-1 w-2 md:w-3 h-2 md:h-3 bg-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex-1 flex items-center justify-center mb-4 md:mb-6">
                  {company.logo ? (
                    <ImageWithFallback
                      src={company.logo}
                      alt={company.name}
                      className="w-full h-auto max-h-10 md:max-h-12 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                    />
                  ) : (
                    <span className="text-lg md:text-2xl text-zinc-500 group-hover:text-white transition-colors duration-300 uppercase tracking-wider">
                      {company.name}
                    </span>
                  )}
                </div>
                
                <div className="border-t border-purple-500/20 pt-3 md:pt-4">
                  <p className="text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors duration-300 leading-relaxed">
                    {company.description}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
