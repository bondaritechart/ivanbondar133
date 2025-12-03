'use client';

import { useState } from 'react';
import { Companies } from '@/components/Companies';
import { Contact } from '@/components/Contact';
import { CV } from '@/components/CV';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Navigation } from '@/components/Navigation';
import { Portfolio } from '@/components/Portfolio';

export default function Home() {
  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-zinc-50">
      <Navigation onOpenCV={() => setIsCVOpen(true)} />
      <CV isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
      <main>
        <Hero />
        <Companies />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
