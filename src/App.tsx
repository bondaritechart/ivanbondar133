import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { CV } from './components/CV';
import { Companies } from './components/Companies';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
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