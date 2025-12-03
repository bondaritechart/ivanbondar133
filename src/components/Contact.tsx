"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter, Send } from 'lucide-react';
import { useState } from 'react';
import { GridPattern, CornerAccent, SectionLabel, SharpAccent } from './styling';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showPlane, setShowPlane] = useState(false);

  const socialLinks = [
    { icon: Mail, href: 'mailto:ivanbondar133@gmail.com', label: 'Email' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowPlane(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Hide plane after animation
      setTimeout(() => {
        setShowPlane(false);
      }, 2000);

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 md:py-32 px-4 md:px-6 relative overflow-hidden border-t border-purple-500/30">
      {/* Grid pattern */}
      <GridPattern />

      {/* Sharp accent - smaller on mobile */}
      <SharpAccent position="bottom-left" size="sm" className="bg-purple-600/10" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionLabel centered className="mb-6">Contact</SectionLabel>

          <h2 className="text-3xl md:text-5xl lg:text-7xl mb-6 md:mb-8">
            Get in Touch
          </h2>

          <p className="text-sm md:text-lg text-zinc-500 mb-12 md:mb-16 max-w-2xl mx-auto uppercase tracking-wider px-4">
            Ready to discuss your project? Let's connect and build something extraordinary together.
          </p>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="mb-12 md:mb-16 max-w-2xl mx-auto text-left"
          >
            <div className="space-y-6">
              {/* Name Field */}
              <div className="relative group">
                <CornerAccent position="top-left" size="xs" showOn="focus" className="w-3 h-3" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="YOUR NAME"
                  className="w-full bg-black border-2 border-purple-500/30 focus:border-purple-500 px-6 py-4 text-white placeholder:text-zinc-600 uppercase tracking-wider text-sm transition-colors duration-300 outline-none"
                />
              </div>

              {/* Email Field */}
              <div className="relative group">
                <CornerAccent position="top-right" size="xs" color="fuchsia" showOn="focus" className="w-3 h-3" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="YOUR EMAIL"
                  className="w-full bg-black border-2 border-purple-500/30 focus:border-purple-500 px-6 py-4 text-white placeholder:text-zinc-600 uppercase tracking-wider text-sm transition-colors duration-300 outline-none"
                />
              </div>

              {/* Message Field */}
              <div className="relative group">
                <CornerAccent position="bottom-left" size="xs" showOn="focus" className="w-3 h-3" />
                <CornerAccent position="bottom-right" size="xs" color="fuchsia" showOn="focus" className="w-3 h-3" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="YOUR MESSAGE"
                  className="w-full bg-black border-2 border-purple-500/30 focus:border-purple-500 px-6 py-4 text-white placeholder:text-zinc-600 uppercase tracking-wider text-sm transition-colors duration-300 outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="relative">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full px-8 py-4 border-2 border-purple-500 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-800 disabled:cursor-not-allowed overflow-hidden transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-purple-500 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  <CornerAccent position="top-right" size="xs" className="w-4 h-4" />
                  <span className="relative text-white uppercase tracking-widest flex items-center justify-center gap-3">
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

                {/* Flying Plane Animation */}
                <AnimatePresence>
                  {showPlane && (
                    <motion.div
                      initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                      animate={{
                        x: [0, 200, 400, 600],
                        y: [0, -100, -200, -300],
                        opacity: [1, 1, 0.5, 0],
                        scale: [1, 1.2, 1.5, 2],
                        rotate: [0, 15, 30, 45]
                      }}
                      transition={{
                        duration: 2,
                        ease: "easeOut"
                      }}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50"
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
                  className="border-2 border-green-500/50 bg-green-500/10 px-6 py-4 text-green-400 text-center uppercase tracking-wider text-sm"
                >
                  Message sent successfully!
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
                className="group relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center"
                aria-label={link.label}
              >
                <div className="absolute inset-0 border-2 border-purple-500/30 bg-black group-hover:border-purple-500 transition-all duration-300" />
                <CornerAccent position="top-right" size="xs" />
                <link.icon className="relative text-purple-500 group-hover:text-white transition-colors duration-300" size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
