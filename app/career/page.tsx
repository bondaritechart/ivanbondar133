'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { CalendarIcon, Cone } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { PageSection } from '@/components/page-section';
import { SectionLabel, SharpAccent } from '@/components/styling';
import { Divider, Typography } from '@/components/ui';
import { Container } from '@/components/ui/Container';
import { Pill } from '@/components/ui/Pill';
import { ValuePropCard } from '@/components/ui/value-prop-card';
import { cn } from '@/utils/tailwind';

const items = [
  {
    title: 'Senior Frontend Engineer',
    company: 'Vention',
    period: '2021 - Present',
    year: '2021',
    responsibilities: [
      'Spearheaded frontend development for large-scale web applications utilizing React, Next.js, and TypeScript, resulting in robust and scalable solutions.',
      'Architected and maintained frontend systems with a strong emphasis on performance, scalability, and long-term maintainability.',
      'Partnered with cross-functional teams, including product managers, designers, and backend engineers, to deliver complex and high-impact features on schedule.',
      'Mentored junior and mid-level engineers, conducted comprehensive code reviews, and established frontend best practices to elevate team performance.',
      'Refactored legacy codebases to reduce technical debt, improve maintainability, and accelerate development cycles.',
      'Developed and implemented a robust frontend testing strategy, significantly enhancing code reliability and product stability.',
    ],
  },
  {
    title: 'Frontend Engineer',
    company: 'Industrialax',
    period: '2019 – 2021',
    year: '2019',
    responsibilities: [
      'Developed and maintained modern, responsive user interfaces using React and Vue, ensuring a seamless user experience across devices.',
      'Contributed to frontend architecture design discussions and feature planning, influencing key technical decisions.',
      'Optimized application performance through code splitting, lazy loading, and asset optimization, resulting in faster load times and enhanced user engagement.',
      'Operated within an Agile environment, actively participating in sprint planning, daily stand-ups, and retrospectives to drive continuous improvement.',
      'Collaborated with backend and design teams to deliver intuitive and user-friendly interfaces aligned with business goals.',
    ],
  },
  {
    title: 'Frontend Engineer',
    company: 'STForex',
    period: '2017 – 2019',
    year: '2017',
    responsibilities: [
      'Implemented responsive and accessible user interfaces using HTML, CSS, and JavaScript, improving overall usability.',
      'Assisted in the development of reusable UI components, contributing to a more efficient and maintainable codebase.',
      'Participated in testing, debugging, and optimization of frontend features to ensure high-quality product releases.',
      'Gained valuable experience working within complex fintech business domains, deepening industry knowledge and problem-solving skills.',
    ],
  },
];

export default function Page() {
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const lineHeight = useMotionValue(0);
  const lineHeightSpring = useSpring(lineHeight, { stiffness: 300, damping: 40 });
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const el = cardsRef.current;
    if (!el) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const viewportMidY = window.innerHeight / 2;

      // Height from container top to viewport middle, clamped to container height.
      const nextHeight = Math.max(0, Math.min(viewportMidY - rect.top, rect.height));
      lineHeight.set(nextHeight);

      // Last item whose top is above the viewport midpoint becomes "active".
      let nextActiveIndex = -1;
      for (let i = 0; i < itemRefs.current.length; i++) {
        const node = itemRefs.current[i];
        if (!node) continue;
        const itemRect = node.getBoundingClientRect();
        if (itemRect.top <= viewportMidY) nextActiveIndex = i;
      }
      setActiveIndex((prev) => (prev === nextActiveIndex ? prev : nextActiveIndex));
    };

    const onScrollOrResize = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);

    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [lineHeight]);

  return (
    <main className="relative py-10">
      <PageSection className="border-0">
        <Container className="relative z-10 space-y-6 lg:space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <SectionLabel>Professional Journey</SectionLabel>
            <Typography variant="h1" as="h1">
              Career <br /> <span className="text-primary">Timeline</span>
            </Typography>
            <Typography variant="description" className="max-w-2xl">
              9+ years of frontend engineering experience across healthcare, fintech, and tech
              industries.
            </Typography>
          </motion.div>

          <div ref={cardsRef} className="cards relative space-y-4 md:space-y-6 lg:space-y-8">
            <div className="bg-primary/20 absolute top-0 left-3 h-full w-0.5 origin-top lg:left-[74px]" />
            <motion.div
              className="bg-accent absolute top-0 left-3 w-0.5 origin-top lg:left-[74px]"
              style={{ height: lineHeightSpring }}
            />
            {items.map((item, index) => (
              <motion.div
                ref={(node) => {
                  itemRefs.current[index] = node;
                }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                key={item.company}
                className="relative pl-10 lg:pl-50"
              >
                <Pill
                  className="absolute top-0 left-0 z-2 hidden w-[150px] lg:flex"
                  variant="square"
                  size="lg"
                  appearance={index <= activeIndex ? 'active' : 'default'}
                  icon={<CalendarIcon size={16} />}
                  label={item.period}
                />
                <div
                  className={cn(
                    'border-primary absolute top-0 left-[3px] h-5 w-5 rotate-45 transform border-2 transition-colors duration-300 lg:hidden',
                    index <= activeIndex ? 'bg-primary' : ''
                  )}
                />
                <ValuePropCard className="relative">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Typography as="h4" variant="h4">
                        {item.title}
                      </Typography>
                      <Pill
                        icon={<CalendarIcon size={16} />}
                        variant="square"
                        size="lg"
                        label={item.period}
                        className="text-nowrap lg:hidden"
                      />
                    </div>
                    <Typography variant="description">{item.company}</Typography>
                  </div>
                  <Divider />
                  <ul className="space-y-2">
                    {item.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Cone
                          size={12}
                          className="text-primary mt-2 shrink-0 rotate-90 transform"
                        />
                        <Typography>{responsibility}</Typography>
                      </li>
                    ))}
                  </ul>
                </ValuePropCard>
              </motion.div>
            ))}
          </div>
        </Container>
      </PageSection>
      <SharpAccent position="bottom-left" color="fuchsia" />
    </main>
  );
}
