'use client';

import { Companies } from '@/components/Companies';
import { Contact } from '@/components/Contact';
import { Hero } from '@/components/home/hero';
import { Skills } from '@/components/skills';

export default function Home() {
  return (
    <main>
      <Hero />
      <Companies />
      <Skills />
      <Contact />
    </main>
  );
}
