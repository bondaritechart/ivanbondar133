'use client';

import { motion } from 'framer-motion';
import { Calendar, Mail, MapPin, X } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';
import { CornerAccent, GridPattern, SectionHeading, SectionLabel, SharpAccent } from './styling';

interface CVProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CV = ({ isOpen, onClose }: CVProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const workExperience = [
    {
      period: '2021 - present',
      position: 'Senior Software Engineer',
      company: 'FREELANCE',
      description:
        'Led development of complex web applications using React, Next.js, and TypeScript. Architected scalable solutions, mentored junior developers, and optimized performance across multiple projects.',
    },
    {
      period: '2019 - 2021',
      position: 'Middle Software Engineer',
      company: 'INDUSTRIALAX',
      description:
        'Developed responsive web applications, implemented modern UI/UX patterns, collaborated with cross-functional teams to deliver high-quality products on time.',
    },
    {
      period: '2017 - 2019',
      position: 'Junior Software Engineer',
      company: 'STROKES',
      description:
        'Built interactive web interfaces, maintained codebase quality, participated in code reviews, and rapidly expanded technical expertise in modern frontend technologies.',
    },
  ];

  const education = {
    degree: 'Bachelor of Economics',
    university: 'ZZGU-ZID INSTITUTE OF ECONOMY',
    period: '2015 - 2019',
  };

  const skills = [
    { name: 'JavaScript', level: 95 },
    { name: 'React & Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'CSS', level: 90 },
    { name: 'GraphQL', level: 85 },
    { name: 'Node.js & Nest.js', level: 85 },
    { name: 'Vue.js', level: 75 },
  ];

  const companies = [
    {
      name: 'iTechArt',
      url: 'https://itechartgroup.by/',
      logo: '/images/85e599c989c466bac62d32cb8e1d5831ff4a2cc0.png',
    },
    {
      name: 'elemy',
      url: 'https://care.elemy.com/peds_b/',
      logo: '/images/8c88f966c88723e1fb4098ca5f9a50a2019e82ff.png',
    },
    {
      name: 'coverwallet',
      url: 'https://www.coverwallet.com/',
      logo: '/images/2451566175a740f38ecee00e8b5679d1687ac669.png',
    },
    {
      name: 'Keeps',
      url: 'https://www.keeps.com/',
      logo: '/images/a3389506a9c698eb3b4873165166cc863799daa8.png',
    },
    {
      name: 'Popsa',
      url: 'https://popsa.com/en-us/',
      logo: '/images/d33116a7f1973f42129f2fd150e1189098b7586f.png',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] overflow-y-auto"
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/95 backdrop-blur-sm" onClick={onClose} />

      {/* Close button */}
      <button
        onClick={onClose}
        className="group fixed top-4 right-4 z-[110] h-10 w-10 border-2 border-purple-500/50 bg-black transition-all duration-300 hover:border-purple-500 hover:bg-purple-500/20 md:top-8 md:right-8 md:h-12 md:w-12"
      >
        <X className="mx-auto h-5 w-5 text-purple-500 transition-colors group-hover:text-white md:h-6 md:w-6" />
      </button>

      {/* Content */}
      <div className="relative z-[105] min-h-screen px-4 py-16 md:px-6 md:py-24">
        {/* Grid pattern */}
        <GridPattern />

        {/* Sharp accents - smaller on mobile */}
        <SharpAccent position="top-left" className="bg-purple-600/10" />

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-20"
          >
            <SectionLabel className="mb-6 md:mb-8">Curriculum Vitae</SectionLabel>

            <div className="mb-8 grid gap-8 md:mb-12 md:grid-cols-2 md:gap-12">
              <div>
                <h1 className="mb-4 text-4xl md:text-6xl lg:text-8xl">
                  IVAN
                  <br />
                  <span className="text-purple-500">BONDAR</span>
                </h1>
                <p className="mb-6 text-lg tracking-wider text-zinc-400 uppercase md:mb-8 md:text-xl">
                  Senior Software Developer
                </p>
              </div>

              <div className="relative self-start border-2 border-purple-500/30 bg-black p-4 md:p-6">
                <CornerAccent position="top-right" size="md" showOn="always" />
                <CornerAccent position="bottom-left" size="md" color="fuchsia" showOn="always" />

                <h3 className="mb-3 flex items-center gap-2 text-xs tracking-[0.2em] text-purple-400 uppercase md:mb-4 md:text-sm">
                  <div className="h-[1px] w-4 bg-purple-500 md:w-6" />
                  Contact
                </h3>

                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-start gap-2 md:gap-3">
                    <Mail className="mt-1 flex-shrink-0 text-purple-500" size={16} />
                    <a
                      href="mailto:ivanbondar133@gmail.com"
                      className="text-sm break-all text-zinc-400 transition-colors hover:text-white md:text-base"
                    >
                      ivanbondar133@gmail.com
                    </a>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <MapPin className="mt-1 flex-shrink-0 text-purple-500" size={16} />
                    <span className="text-sm text-zinc-400 md:text-base">Remote / Worldwide</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-20"
          >
            <SectionHeading>Work Experience</SectionHeading>

            <div className="space-y-6 md:space-y-8">
              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative border-l-2 border-purple-500/30 pb-8 pl-8 transition-colors duration-300 hover:border-purple-500"
                >
                  <div className="absolute top-0 -left-[9px] h-4 w-4 rotate-45 bg-purple-500" />

                  <div className="mb-2 flex items-center gap-3">
                    <Calendar size={16} className="text-purple-500" />
                    <span className="text-sm tracking-wider text-purple-400 uppercase">
                      {job.period}
                    </span>
                  </div>

                  <h3 className="mb-1 text-2xl text-white">{job.position}</h3>
                  <p className="mb-4 text-lg tracking-wider text-zinc-500 uppercase">
                    {job.company}
                  </p>
                  <p className="leading-relaxed text-zinc-400">{job.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Companies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-20"
          >
            <SectionHeading>Companies Worked With</SectionHeading>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
              {companies.map((company, index) => (
                <motion.a
                  key={company.name}
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative flex min-h-[100px] items-center justify-center border-2 border-purple-500/30 bg-black p-4 transition-all duration-300 hover:border-purple-500 md:min-h-[120px] md:p-6"
                >
                  <CornerAccent position="top-left" size="xs" />
                  <CornerAccent position="bottom-right" size="xs" color="fuchsia" />
                  <div className="relative h-8 w-full md:h-12">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      fill
                      className="object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-20"
          >
            <SectionHeading>Education</SectionHeading>

            <div className="group relative border-2 border-purple-500/30 bg-black p-6 transition-colors duration-300 hover:border-purple-500 md:p-8">
              <CornerAccent position="top-right" size="md" />
              <CornerAccent position="bottom-left" size="md" color="fuchsia" />

              <div className="mb-3 flex items-center gap-2 md:mb-4 md:gap-3">
                <Calendar size={16} className="text-purple-500" />
                <span className="text-xs tracking-wider text-purple-400 uppercase md:text-sm">
                  {education.period}
                </span>
              </div>

              <h3 className="mb-2 text-xl text-white md:text-2xl">{education.degree}</h3>
              <p className="text-base tracking-wider text-zinc-500 uppercase md:text-lg">
                {education.university}
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionHeading>Skills</SectionHeading>

            <div className="grid gap-4 md:grid-cols-2 md:gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="tracking-wider text-white uppercase">{skill.name}</span>
                    <span className="text-sm text-purple-400">{skill.level}%</span>
                  </div>
                  <div className="h-[2px] w-full bg-purple-500/20">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-purple-500 to-fuchsia-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
