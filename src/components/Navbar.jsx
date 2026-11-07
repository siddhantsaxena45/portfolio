import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ExternalLink } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Honors', href: '#achievements' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-100 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`glass rounded-full px-6 md:px-8 py-3 flex justify-between items-center transition-all duration-500 ${scrolled ? 'shadow-2xl shadow-black/50 bg-black/60 border-accent/20' : 'bg-transparent border-transparent'}`}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <a href="#" className="text-sm font-display font-bold tracking-[0.2em] uppercase hover:text-accent transition-colors flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              Siddhant Saxena
            </a>
          </motion.div>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted hover:text-white hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}

            <a
              href="https://drive.google.com/file/d/1q0IX9IR8mNq_kEVfW8-FJlN0mx2oyPNW/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 border border-accent/50 text-accent rounded hover:bg-accent hover:text-black hover:shadow-[0_0_12px_rgba(0,240,255,0.4)] transition-all flex items-center gap-1.5"
            >
              <span>Resume</span>
              <ExternalLink size={12} />
            </a>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <a
              href="https://drive.google.com/file/d/1q0IX9IR8mNq_kEVfW8-FJlN0mx2oyPNW/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 border border-accent/50 text-accent rounded"
            >
              Resume
            </a>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-6 top-24 z-99 md:hidden"
          >
            <div className="glass rounded-3xl p-6 shadow-2xl bg-black/90 border border-accent/20">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-bold uppercase tracking-widest text-muted hover:text-accent transition-colors p-2"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="https://drive.google.com/file/d/1q0IX9IR8mNq_kEVfW8-FJlN0mx2oyPNW/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold uppercase tracking-widest text-accent border border-accent/40 bg-accent/10 p-2.5 text-center rounded mt-2 flex items-center justify-center gap-2"
                >
                  <span>Download CV / Resume</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
