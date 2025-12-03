"use client";

import { motion } from 'framer-motion';
import { Mail, MapPin, Calendar, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CVProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CV({ isOpen, onClose }: CVProps) {
  if (!isOpen) return null;

  const workExperience = [
    {
      period: '2021 - present',
      position: 'Senior Software Engineer',
      company: 'FREELANCE',
      description: 'Led development of complex web applications using React, Next.js, and TypeScript. Architected scalable solutions, mentored junior developers, and optimized performance across multiple projects.'
    },
    {
      period: '2019 - 2021',
      position: 'Middle Software Engineer',
      company: 'INDUSTRIALAX',
      description: 'Developed responsive web applications, implemented modern UI/UX patterns, collaborated with cross-functional teams to deliver high-quality products on time.'
    },
    {
      period: '2017 - 2019',
      position: 'Junior Software Engineer',
      company: 'STROKES',
      description: 'Built interactive web interfaces, maintained codebase quality, participated in code reviews, and rapidly expanded technical expertise in modern frontend technologies.'
    }
  ];

  const education = {
    degree: 'Bachelor of Economics',
    university: 'ZZGU-ZID INSTITUTE OF ECONOMY',
    period: '2015 - 2019'
  };

  const skills = [
    { name: 'JavaScript', level: 95 },
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'CSS', level: 90 },
    { name: 'GraphQL', level: 85 },
    { name: 'Node.js', level: 85 },
    { name: 'React.js', level: 95 }
  ];

  const companies = [
    { name: 'iTechArt', url: 'https://itechartgroup.by/', logo: '/images/85e599c989c466bac62d32cb8e1d5831ff4a2cc0.png' },
    { name: 'elemy', url: 'https://care.elemy.com/peds_b/', logo: '/images/8c88f966c88723e1fb4098ca5f9a50a2019e82ff.png' },
    { name: 'coverwallet', url: 'https://www.coverwallet.com/', logo: '/images/2451566175a740f38ecee00e8b5679d1687ac669.png' },
    { name: 'Keeps', url: 'https://www.keeps.com/', logo: '/images/a3389506a9c698eb3b4873165166cc863799daa8.png' },
    { name: 'Popsa', url: 'https://popsa.com/en-us/', logo: '/images/d33116a7f1973f42129f2fd150e1189098b7586f.png' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] overflow-y-auto"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Close button */}
      <button
        onClick={onClose}
        className="fixed top-4 md:top-8 right-4 md:right-8 z-[110] w-10 h-10 md:w-12 md:h-12 border-2 border-purple-500/50 hover:border-purple-500 bg-black hover:bg-purple-500/20 transition-all duration-300 group"
      >
        <X className="w-5 h-5 md:w-6 md:h-6 text-purple-500 group-hover:text-white transition-colors mx-auto" />
      </button>

      {/* Content */}
      <div className="relative z-[105] min-h-screen py-16 md:py-24 px-4 md:px-6">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />

        {/* Sharp accents - smaller on mobile */}
        <div className="absolute top-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-600/10" style={{
          clipPath: 'polygon(0 0, 100% 0, 0 100%)'
        }} />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-20"
          >
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="h-[2px] w-8 md:w-12 bg-purple-500" />
              <p className="text-xs md:text-sm text-purple-400 uppercase tracking-[0.2em] md:tracking-[0.3em]">Curriculum Vitae</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
              <div>
                <h1 className="text-4xl md:text-6xl lg:text-8xl mb-4">
                  IVAN<br />
                  <span className="text-purple-500">BONDAR</span>
                </h1>
                <p className="text-lg md:text-xl text-zinc-400 uppercase tracking-wider mb-6 md:mb-8">
                  Senior Software Developer
                </p>
              </div>

              <div className="border-2 border-purple-500/30 p-4 md:p-6 bg-black relative self-start">
                <div className="absolute -top-1 -right-1 w-3 md:w-4 h-3 md:h-4 bg-purple-500" />
                <div className="absolute -bottom-1 -left-1 w-3 md:w-4 h-3 md:h-4 bg-fuchsia-500" />
                
                <h3 className="text-xs md:text-sm text-purple-400 uppercase tracking-[0.2em] mb-3 md:mb-4 flex items-center gap-2">
                  <div className="h-[1px] w-4 md:w-6 bg-purple-500" />
                  Contact
                </h3>
                
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-start gap-2 md:gap-3">
                    <Mail className="text-purple-500 mt-1 flex-shrink-0" size={16} />
                    <a href="mailto:ivanbondar133@gmail.com" className="text-sm md:text-base text-zinc-400 hover:text-white transition-colors break-all">
                      ivanbondar133@gmail.com
                    </a>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <MapPin className="text-purple-500 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm md:text-base text-zinc-400">Remote / Worldwide</span>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-12 flex items-center gap-4">
              <div className="h-[2px] w-8 md:w-12 bg-purple-500" />
              Work Experience
            </h2>

            <div className="space-y-6 md:space-y-8">
              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-l-2 border-purple-500/30 pl-8 pb-8 relative group hover:border-purple-500 transition-colors duration-300"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-500 rotate-45" />
                  
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar size={16} className="text-purple-500" />
                    <span className="text-sm text-purple-400 uppercase tracking-wider">{job.period}</span>
                  </div>
                  
                  <h3 className="text-2xl mb-1 text-white">{job.position}</h3>
                  <p className="text-lg text-zinc-500 uppercase tracking-wider mb-4">{job.company}</p>
                  <p className="text-zinc-400 leading-relaxed">{job.description}</p>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-12 flex items-center gap-4">
              <div className="h-[2px] w-8 md:w-12 bg-purple-500" />
              Companies Worked With
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
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
                  className="group relative border-2 border-purple-500/30 bg-black hover:border-purple-500 transition-all duration-300 p-4 md:p-6 flex items-center justify-center min-h-[100px] md:min-h-[120px]"
                >
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <ImageWithFallback
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-auto max-h-8 md:max-h-12 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-12 flex items-center gap-4">
              <div className="h-[2px] w-8 md:w-12 bg-purple-500" />
              Education
            </h2>

            <div className="border-2 border-purple-500/30 p-6 md:p-8 bg-black relative group hover:border-purple-500 transition-colors duration-300">
              <div className="absolute -top-1 -right-1 w-3 md:w-4 h-3 md:h-4 bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -bottom-1 -left-1 w-3 md:w-4 h-3 md:h-4 bg-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <Calendar size={16} className="text-purple-500" />
                <span className="text-xs md:text-sm text-purple-400 uppercase tracking-wider">{education.period}</span>
              </div>
              
              <h3 className="text-xl md:text-2xl mb-2 text-white">{education.degree}</h3>
              <p className="text-base md:text-lg text-zinc-500 uppercase tracking-wider">{education.university}</p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-12 flex items-center gap-4">
              <div className="h-[2px] w-8 md:w-12 bg-purple-500" />
              Skills
            </h2>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white uppercase tracking-wider">{skill.name}</span>
                    <span className="text-purple-400 text-sm">{skill.level}%</span>
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
}
