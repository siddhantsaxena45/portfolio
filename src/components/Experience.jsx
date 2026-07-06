import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <h2 className="text-sm uppercase tracking-[0.4em] text-accent font-bold mb-6">Career</h2>
            <h3 className="text-5xl font-display font-bold mb-8">History</h3>
          </motion.div>

          <div className="lg:w-2/3 border-l border-white/5 pl-8 md:pl-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute left-[-37px] md:left-[-69px] top-2 w-3 h-3 rounded-full bg-accent" />
              <div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h4 className="text-2xl font-display font-bold text-white">Research Intern</h4>
                  <span className="text-xs font-bold text-muted uppercase tracking-widest">DRID, JIIT | May 2025 - Jul 2025</span>
                </div>
                <ul className="text-muted text-lg mb-8 leading-relaxed max-w-2xl list-disc pl-5 space-y-2">
                  <li>Researched and developed accessible games and gamified applications for the DRID Giant Project, "Esports and Stress Management for Differently-abled People".</li>
                  <li>Built Python-based voice- and gesture-controlled interactive games using computer vision, speech recognition, and Pygame to improve accessibility for specially-abled users.</li>
                  <li>Collaborated with faculty researchers to evaluate interaction models, conduct usability testing, and refine game mechanics through iterative prototyping.</li>
                  <li>Documented technical findings and presented project demonstrations during research review meetings.</li>
                </ul>
                <a 
                  href="https://drive.google.com/file/d/1OeTofYkEZlQcu1_AGMtueg6AJAcmuBs3/view" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-white hover:text-accent transition-colors flex items-center gap-2 uppercase tracking-widest inline-flex"
                >
                  Credential <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
