'use client';

import { Contact } from '@/components/contact';
import { Companies } from '@/components/home/companies';
import { Hero } from '@/components/home/hero';
import { Skills } from '@/components/home/skills';
import { WhyMe } from '@/components/home/why-me';

export default function Home() {
  return (
    <main>
      <Hero />
      <Companies />
      <WhyMe />
      <Skills />
      <Contact />
    </main>
  );
}
