'use client';

import { motion } from 'framer-motion';
import { Code2, Palette, Database, Zap } from 'lucide-react';
import { GridPattern, CornerAccent, SectionLabel, SharpAccent } from './styling';

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
    icon: Code2,
  },
  {
    id: 2,
    name: 'TYPESCRIPT & JAVASCRIPT',
    category: 'PROGRAMMING LANGUAGES',
    experience: '7+ years',
    icon: Code2,
  },
  {
    id: 3,
    name: 'UI/UX DESIGN',
    category: 'DESIGN & PROTOTYPING',
    experience: '4+ years',
    icon: Palette,
  },
  {
    id: 4,
    name: 'NODE.JS & DATABASES',
    category: 'BACKEND DEVELOPMENT',
    experience: '3+ years',
    icon: Database,
  },
  {
    id: 5,
    name: 'TAILWIND CSS',
    category: 'STYLING FRAMEWORKS',
    experience: '4+ years',
    icon: Zap,
  },
  {
    id: 6,
    name: 'GIT & CI/CD',
    category: 'DEVOPS & VERSION CONTROL',
    experience: '7+ years',
    icon: Code2,
  },
];

export const Skills = () => (
  <section
    id="work"
    className="relative overflow-hidden border-t border-purple-500/30 px-4 py-16 md:px-6 md:py-32"
  >
    <GridPattern />
    <SharpAccent
      position="top-right"
      className="hidden h-[400px] w-[400px] bg-purple-600/10 md:block"
    />

    <div className="relative z-10 mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12 md:mb-20"
      >
        <SectionLabel className="mb-6">Expertise</SectionLabel>
        <h2 className="mb-4 text-3xl md:mb-6 md:text-5xl lg:text-7xl">Technical Skills</h2>
        <p className="max-w-2xl text-sm tracking-wider text-zinc-500 uppercase md:text-lg">
          Core technologies and tools mastered through years of production experience
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="relative flex flex-col border-2 border-purple-500/30 p-6 transition-all duration-300 hover:border-purple-500 md:min-h-[200px] md:p-8">
              <CornerAccent position="top-left" size="md" />
              <CornerAccent position="bottom-right" size="md" color="fuchsia" />
              <div className="hidden md:block mb-4 md:mb-6">
                <skill.icon
                  className="text-purple-500 transition-colors duration-300 group-hover:text-white"
                  size={28}
                />
              </div>
              <div className="mb-3 flex items-center gap-3 md:mb-4">
                <div className="h-[1px] w-6 bg-purple-500 md:w-8" />
                <span className="text-[10px] tracking-[0.2em] text-purple-400 uppercase md:text-xs">
                  {skill.category}
                </span>
              </div>

              <h3 className="mb-3 text-xl transition-colors duration-300 group-hover:text-purple-400 md:mb-4 md:text-2xl">
                {skill.name}
              </h3>

              <div className="mt-auto">
                <div className="flex items-center gap-2">
                  <div className="h-[2px] w-full bg-purple-500/20">
                    <div className="h-full w-4/5 bg-purple-500" />
                  </div>
                  <span className="text-xs tracking-wider whitespace-nowrap text-zinc-500 uppercase md:text-sm">
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
