'use client';

import { motion } from 'framer-motion';
import { Code2, Palette, Database, Zap } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { GridPattern, CornerAccent, SectionLabel, SharpAccent } from './styling';
import { Typography } from './ui';

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
    name: 'Scalable Frontend Architecture',
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
    id="skills"
    className="border-primary/30 relative overflow-hidden border-t py-16 md:py-32"
  >
    <GridPattern />
    <SharpAccent
      position="top-right"
      className="hidden h-[400px] w-[400px] bg-purple-600/10 md:block"
    />

    <Container className="relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <SectionLabel>Expertise</SectionLabel>
        <Typography variant="h2" as="h2">
          Technical Skills
        </Typography>
        <Typography variant="description" className="max-w-2xl">
          Tools change. Engineering principles stay.
        </Typography>
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
            <div className="border-primary/30 hover:border-primary relative flex flex-col border-2 p-6 transition-all duration-300 md:min-h-[200px] md:p-8">
              <CornerAccent position="top-left" size="md" />
              <CornerAccent position="bottom-right" size="md" color="accent" />
              <div className="mb-4 hidden md:mb-6 md:block">
                <skill.icon
                  className="text-primary transition-colors duration-300 group-hover:text-white"
                  size={28}
                />
              </div>
              <div className="mb-3 flex items-center gap-3 md:mb-4">
                <div className="bg-primary h-[1px] w-6 md:w-8" />
                <Typography variant="caption">{skill.category}</Typography>
              </div>

              <h3 className="group-hover:text-primary-active mb-3 text-xl transition-colors duration-300 md:mb-4 md:text-2xl">
                {skill.name}
              </h3>

              <div className="mt-auto">
                <div className="flex items-center gap-2">
                  <div className="bg-primary/20 h-[2px] w-full">
                    <div className="bg-primary h-full w-4/5" />
                  </div>
                  <span className="text-muted text-xs tracking-wider whitespace-nowrap uppercase md:text-sm">
                    {skill.experience}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
);
