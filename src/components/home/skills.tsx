'use client';

import { motion } from 'framer-motion';
import { Blocks, Zap, Layers, ShieldCheck, Rocket, Users } from 'lucide-react';
import { PageSection, SECTION_CONTAINER_STYLES } from '@/components/page-section';
import { Container } from '@/components/ui/Container';
import { Pill } from '@/components/ui/Pill';
import { ValuePropCard } from '@/components/ui/value-prop-card';
import { CornerAccent, SectionLabel, SharpAccent } from '../styling';
import { Button, Typography } from '../ui';

const skills = [
  {
    id: 1,
    title: 'Scalable Frontend Architecture',
    description: 'Designing scalable frontend architectures for complex, long-living products.',
    tools: ['React', 'Next.js', 'TypeScript', 'Monorepos'],
    result: 'Cleaner codebase, faster onboarding, reduced technical debt',
    icon: Blocks,
  },
  {
    id: 2,
    title: 'Performance Optimization',
    description: 'Optimizing rendering, data fetching and bundle size in production applications.',
    tools: ['SSR / CSR', 'GraphQL', 'Code Splitting'],
    result: 'Faster load times and improved real-user performance',
    icon: Zap,
  },
  {
    id: 3,
    title: 'Backend Architecture (NestJS)',
    description:
      'Building backend services and full-stack architectures with a strong frontend focus.',
    tools: ['NestJS', 'REST', 'GraphQL', 'Auth flows'],
    result: 'End-to-end solutions with predictable APIs and scalable architecture',
    icon: Layers,
  },
  {
    id: 4,
    title: 'Testing & Frontend Reliability',
    description:
      'Defining testing strategies to ensure frontend stability and confidence in changes.',
    tools: ['Jest', 'React Testing Library', 'Cypress'],
    result: 'Test coverage up to ~85% and fewer production regressions',
    icon: ShieldCheck,
  },
  {
    id: 5,
    title: 'Product-Focused Feature Delivery',
    description:
      'Delivering complex product features in close collaboration with product and design teams.',
    tools: ['React', 'Next.js', 'Stripe', 'A/B Testing'],
    result: 'Successful launches of conversion funnels and core product features',
    icon: Rocket,
  },
  {
    id: 6,
    title: 'Leadership',
    description: 'Leading frontend initiatives, mentoring engineers and setting best practices.',
    tools: ['Code Reviews', 'Mentorship', 'CI/CD', 'Git'],
    result: 'Higher development velocity and consistent code quality',
    icon: Users,
  },
];

export const Skills = () => (
  <PageSection id="skills">
    <SharpAccent
      position="top-right"
      className="hidden h-[400px] w-[400px] bg-purple-600/10 md:block"
    />

    <Container className={SECTION_CONTAINER_STYLES}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <SectionLabel>Expertise</SectionLabel>
        <Typography variant="h2" as="h2">
          What I build & What I use
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
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <ValuePropCard className="md:min-h-50">
              <CornerAccent position="top-left" size="md" />
              <CornerAccent position="bottom-right" size="md" color="accent" />
              <div className="relative flex h-full flex-col gap-4">
                <skill.icon className="text-primary" size={38} />
                <Typography variant="h5">{skill.title}</Typography>
                <Typography variant="label">{skill.description}</Typography>
                <div className="mt-auto flex flex-wrap gap-2">
                  {skill.tools.map((tool) => (
                    <Pill label={tool} key={tool} />
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <Typography variant="caption">Result</Typography>
                  <Typography variant="label">{skill.result}</Typography>
                </div>
              </div>
            </ValuePropCard>
          </motion.div>
        ))}
      </div>
      <div className="text-center">
        <Button variant="outline">Discover more</Button>
      </div>
    </Container>
  </PageSection>
);
