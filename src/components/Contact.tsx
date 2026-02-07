'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { useState } from 'react';
import { GridPattern, CornerAccent, SectionLabel, SharpAccent } from './styling';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showPlane, setShowPlane] = useState(false);

  const socialLinks = [
    { icon: Mail, href: 'mailto:ivanbondar133@gmail.com', label: 'Email' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ivan-bondar-009456a7', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/bondaritechart', label: 'GitHub' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowPlane(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);

      setTimeout(() => {
        setShowPlane(false);
      }, 2000);

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-purple-500/30 px-4 py-16 md:px-6 md:py-32"
    >
      <GridPattern />
      <SharpAccent position="bottom-left" size="sm" className="bg-purple-600/10" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionLabel centered className="mb-6">
            Contact
          </SectionLabel>
          <h2 className="mb-6 text-3xl md:mb-8 md:text-5xl lg:text-7xl">Get in Touch</h2>
          <p className="mx-auto mb-12 max-w-2xl px-4 text-sm tracking-wider text-zinc-500 uppercase md:mb-16 md:text-lg">
            Ready to discuss your project? Let&apos;s connect and build something extraordinary
            together.
          </p>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="mx-auto mb-12 max-w-2xl text-left md:mb-16"
          >
            <div className="space-y-6">
              <div className="group relative">
                <CornerAccent position="top-left" size="xs" showOn="focus" className="h-3 w-3" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="YOUR NAME"
                  className="w-full border-2 border-purple-500/30 px-6 py-4 text-sm tracking-wider text-white uppercase transition-colors duration-300 outline-none placeholder:text-zinc-600 focus:border-purple-500"
                />
              </div>
              <div className="group relative">
                <CornerAccent
                  position="top-right"
                  size="xs"
                  color="fuchsia"
                  showOn="focus"
                  className="h-3 w-3"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="YOUR EMAIL"
                  className="w-full border-2 border-purple-500/30 px-6 py-4 text-sm tracking-wider text-white uppercase transition-colors duration-300 outline-none placeholder:text-zinc-600 focus:border-purple-500"
                />
              </div>
              <div className="group relative">
                <CornerAccent position="bottom-left" size="xs" showOn="focus" className="h-3 w-3" />
                <CornerAccent
                  position="bottom-right"
                  size="xs"
                  color="fuchsia"
                  showOn="focus"
                  className="h-3 w-3"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="YOUR MESSAGE"
                  className="w-full resize-none border-2 border-purple-500/30 px-6 py-4 text-sm tracking-wider text-white uppercase transition-colors duration-300 outline-none placeholder:text-zinc-600 focus:border-purple-500"
                />
              </div>
              <div className="relative">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full overflow-hidden border-2 border-purple-500 bg-purple-600 px-8 py-4 transition-all duration-300 hover:bg-purple-500 disabled:cursor-not-allowed disabled:bg-purple-800"
                >
                  <div className="absolute inset-0 translate-x-full bg-purple-500 transition-transform duration-300 group-hover:translate-x-0" />
                  <CornerAccent position="top-right" size="xs" className="h-4 w-4" />
                  <span className="relative flex items-center justify-center gap-3 tracking-widest text-white uppercase">
                    {isSubmitting ? (
                      'SENDING...'
                    ) : (
                      <>
                        <Send size={18} />
                        SEND MESSAGE
                      </>
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {showPlane && (
                    <motion.div
                      initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                      animate={{
                        x: [0, 200, 400, 600],
                        y: [0, -100, -200, -300],
                        opacity: [1, 1, 0.5, 0],
                        scale: [1, 1.2, 1.5, 2],
                        rotate: [0, 15, 30, 45],
                      }}
                      transition={{
                        duration: 2,
                        ease: 'easeOut',
                      }}
                      className="pointer-events-none absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2"
                    >
                      <Send className="text-purple-400" size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border-2 border-green-500/50 bg-green-500/10 px-6 py-4 text-center text-sm tracking-wider text-green-400 uppercase"
                >
                  Message sent successfully!
                </motion.div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border-2 border-red-500/50 bg-red-500/10 px-6 py-4 text-center text-sm tracking-wider text-red-400 uppercase"
                >
                  Failed to send message. Please try again.
                </motion.div>
              )}
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center gap-3 md:gap-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-12 w-12 items-center justify-center md:h-16 md:w-16"
                aria-label={link.label}
              >
                <div className="absolute inset-0 border-2 border-purple-500/30 bg-black transition-all duration-300 group-hover:border-purple-500" />
                <CornerAccent position="top-right" size="xs" />
                <link.icon
                  className="text-brand-primary relative transition-colors duration-300 group-hover:text-white"
                  size={20}
                />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
