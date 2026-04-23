import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react/dist/esm/lucide-react';

const Achievements = () => {
  const items = [
    {
      title: "LeetCode Elite",
      desc: "300+ Problems solved with a focus on optimization.",
      link: "https://leetcode.com/u/siddhantsaxena45/",
      tag: "DSA"
    },
    {
      title: "Content Creation",
      desc: "Educating developers on Full Stack & AI via YouTube.",
      link: "https://www.youtube.com/@SiddhantSaxenaCreates",
      tag: "YouTube"
    },
    {
      title: "NSS Leadership",
      desc: "Coordinated blood donation drives with 150+ donors.",
      link: "https://drive.google.com/file/d/1h27R59oRmdEvKB3rED8-JKAD9osqThNH/view",
      tag: "Leadership"
    },
    {
      title: "Full Stack Master",
      desc: "Certified Full Stack Web Developer (Delta).",
      link: "https://drive.google.com/file/d/1_j4UpfR-NYxuONE9yC_0uoErt6HMhgE0/view",
      tag: "Certified"
    }
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-sm uppercase tracking-[0.4em] text-accent font-bold mb-4">Milestones</h2>
          <h3 className="text-5xl font-display font-bold">Awards</h3>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {items.map((item, idx) => (
            <motion.a 
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group border-b border-white/5 pb-8 flex flex-col items-start hover:border-accent transition-colors"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-4">
                {item.tag}
              </span>
              <h3 className="text-2xl font-display font-bold text-white mb-4 flex items-center gap-2">
                {item.title} <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-muted text-lg leading-relaxed">
                {item.desc}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
