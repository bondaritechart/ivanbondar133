'use client';

import { motion } from 'framer-motion';
import { Cone, ExternalLink } from 'lucide-react';
import { PageSection } from '@/components/page-section';
import { SectionLabel, SharpAccent } from '@/components/styling';
import { Typography } from '@/components/ui';
import { Container } from '@/components/ui/Container';
import { ValuePropCard } from '@/components/ui/value-prop-card';

const projects = [
  {
    title: 'Elemy',
    description: 'Healthcare Platform, US',
    position: 'Senior Frontend Engineer',
    achievements: [
      'Delivered new features for a nationwide mental healthcare platform used across the US',
      'Implemented Stripe payments and complex form flows',
      'Built responsive, accessible interfaces, ensuring up to ~85%',
      'Improved frontend reliability through code reviews and testing strategy',
      'Onboarded and supported new frontend engineers',
    ],
    url: 'https://care.elemy.com/peds_b',
  },
  {
    title: 'Keeps',
    description: 'Healthcare, US',
    position: 'Senior Frontend Engineer',
    achievements: [
      'Led migration from React to Next.js, improving SEO and application performance',
      'Reduced bundle size and optimized rendering for better loading behavior',
      'Designed reusable components and established clear UX patterns',
      'Improved A/B testing implementation using LaunchDarkly',
      'Developed and maintained new product pages',
      'Led launching new conversion funnel',
      'Moved project to Turborepo dedicated styled system to tailwind',
    ],
    url: 'https://keeps.com',
  },
  {
    title: 'CoverWallet',
    description: 'Fintech, Spain',
    position: 'Senior Frontend Engineer',
    achievements: [
      'Improved frontend stability by introducing and expanding automated E2E and unit testing',
      'Helped scale the frontend codebase by contributing to monorepo setup and shared tooling',
      'Designed and implemented reusable UI components and design system',
      'Worked closely with designers by optimizing GraphQL queries, pagination, and rendering logic',
      'Enhanced performance of large data-driven pages, improving UX for document and policy management flows',
    ],
    url: 'https://coverwallet.com',
  },
  {
    title: 'Popsa',
    description: 'E-commerce Photo Books, GB',
    position: 'Frontend Engineer',
    achievements: [
      'Built interactive photo book creator with drag-and-drop functionality',
      'Optimized image handling and upload processes',
      'Implemented complex layout algorithms for automatic photo placement',
      'Collaborated with design team to deliver pixel-perfect UI',
    ],
    url: 'https://popsa.com',
  },
];

export default function Page() {
  return (
    <main className="py-10">
      <SharpAccent
        position="top-right"
        className="hidden h-[400px] w-[400px] bg-purple-600/10 md:block"
      />
      <PageSection className="border-0">
        <Container className="relative z-10 space-y-6 lg:space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <SectionLabel>Portfolio</SectionLabel>
            <Typography variant="h1" as="h1">
              Selected <br /> <span className="text-primary">Projects</span>
            </Typography>
            <Typography variant="description" className="max-w-2xl">
              Production applications serving thousands of users across healthcare, fintech, and
              e-commerce sectors.
            </Typography>
          </motion.div>
          <div className="grid grid-cols-2 gap-4 lg:gap-8">
            {projects.map((project) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                key={project.title}
              >
                <ValuePropCard>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Typography as="h4" variant="h4">
                        {project.title}
                      </Typography>
                      <a target="_blank" href={project.url} rel="noopener noreferrer">
                        <ExternalLink className="text-primary hover:text-accent cursor-pointer transition duration-300" />
                      </a>
                    </div>
                    <Typography variant="description">{project.description}</Typography>
                    <Typography className="text-primary md:text-lg">{project.position}</Typography>
                    <ul className="space-y-2 pl-4">
                      {project.achievements.map((a, i) => (
                        <li className="flex items-start gap-2" key={i}>
                          <Cone
                            size={12}
                            className="text-primary mt-2 shrink-0 rotate-90 transform"
                          />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ValuePropCard>
              </motion.div>
            ))}
          </div>
        </Container>
      </PageSection>
    </main>
  );
}
