import { motion } from 'framer-motion';
import { Code2, MessageSquare, Zap } from 'lucide-react';
import { PageSection, SECTION_CONTAINER_STYLES } from '@/components/page-section';
import { SectionLabel } from '@/components/styling';
import { Typography } from '@/components/ui';
import { Container } from '@/components/ui/Container';
import { ValuePropCard } from '@/components/ui/value-prop-card';

const reasons = [
  {
    id: 1,
    title: 'Strong architecture mindset',
    description:
      'I design frontend and full-stack systems that remain maintainable as products and teams scale.',
    icon: Code2,
  },
  {
    id: 2,
    title: 'Battle-tested production career',
    description:
      'I’ve built and maintained healthcare and fintech products used by thousands of real users in production.',
    icon: Zap,
  },
  {
    id: 3,
    title: 'Clear communication & ownership',
    description:
      'I provide honest feedback, realistic estimates, and take full ownership of delivery and outcomes.',
    icon: MessageSquare,
  },
];

export const WhyMe = () => {
  return (
    <PageSection>
      <Container className={SECTION_CONTAINER_STYLES}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <Typography variant="h2" as="h2">
            Why teams choose to work with me
          </Typography>
          <Typography variant="description" className="max-w-2xl">
            Clear thinking. Real ownership. No surprises.
          </Typography>
        </motion.div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.5 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <ValuePropCard className="flex flex-col gap-4">
                <reason.icon className="text-primary" size={38} />
                <Typography variant="h5">{reason.title}</Typography>
                <Typography variant="label">{reason.description}</Typography>
              </ValuePropCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </PageSection>
  );
};
