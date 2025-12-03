"use client";

import { motion } from 'framer-motion';
import { Code2, Palette, Database, Zap } from 'lucide-react';
import { GridPattern, CornerAccent } from './styling';

interface Skill {
  id: number;
  name: string;
  category: string;
  experience: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

const skills: Skill[] = [
  {
    id: 1,
    name: 'REACT & NEXT.JS',
    category: 'FRONTEND DEVELOPMENT',
    experience: '5+ years',
    icon: Code2
  },
  {
    id: 2,
    name: 'TYPESCRIPT & JAVASCRIPT',
    category: 'PROGRAMMING LANGUAGES',
    experience: '6+ years',
    icon: Code2
  },
  {
    id: 3,
    name: 'UI/UX DESIGN',
    category: 'DESIGN & PROTOTYPING',
    experience: '4+ years',
    icon: Palette
  },
  {
    id: 4,
    name: 'NODE.JS & DATABASES',
    category: 'BACKEND DEVELOPMENT',
    experience: '5+ years',
    icon: Database
  },
  {
    id: 5,
    name: 'TAILWIND CSS',
    category: 'STYLING FRAMEWORKS',
    experience: '4+ years',
    icon: Zap
  },
  {
    id: 6,
    name: 'GIT & CI/CD',
    category: 'DEVOPS & VERSION CONTROL',
    experience: '6+ years',
    icon: Code2
  }
];

export const Portfolio = () => (
  <section id="work" className="py-16 md:py-32 px-4 md:px-6 relative overflow-hidden border-t border-purple-500/30">
    {/* Grid pattern */}
    <GridPattern />

    {/* Sharp accent - hidden on mobile */}
    <div className="hidden md:block absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/10" style={{
      clipPath: 'polygon(100% 0, 100% 100%, 50% 100%)'
    }} />

    <div className="max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12 md:mb-20"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[2px] w-8 md:w-12 bg-purple-500" />
          <p className="text-xs md:text-sm text-purple-400 uppercase tracking-[0.2em] md:tracking-[0.3em]">Expertise</p>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-7xl mb-4 md:mb-6">
          Technical Skills
        </h2>
        <p className="text-sm md:text-lg text-zinc-500 max-w-2xl uppercase tracking-wider">
          Core technologies and tools mastered through years of production experience
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="relative p-6 md:p-8 border-2 border-purple-500/30 bg-black hover:border-purple-500 transition-all duration-300 min-h-[180px] md:min-h-[200px] flex flex-col">
              {/* Corner accents */}
              <CornerAccent position="top-left" size="md" />
              <CornerAccent position="bottom-right" size="md" color="fuchsia" />
              
              <div className="mb-4 md:mb-6">
                <skill.icon className="text-purple-500 group-hover:text-white transition-colors duration-300" size={28} />
              </div>

              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <div className="h-[1px] w-6 md:w-8 bg-purple-500" />
                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-purple-400">
                  {skill.category}
                </span>
              </div>
              
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4 group-hover:text-purple-400 transition-colors duration-300">
                {skill.name}
              </h3>
              
              <div className="mt-auto">
                <div className="flex items-center gap-2">
                  <div className="h-[2px] w-full bg-purple-500/20">
                    <div className="h-full bg-purple-500 w-4/5" />
                  </div>
                  <span className="text-xs md:text-sm text-zinc-500 uppercase tracking-wider whitespace-nowrap">
                    {skill.experience}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
