import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm uppercase tracking-[0.4em] text-accent font-bold mb-6">Discovery</h2>
            <h3 className="text-5xl md:text-6xl font-display font-bold mb-10 leading-tight">
              Bridging the gap between <span className="text-muted">logic</span> and <span className="text-white">experience</span>.
            </h3>
            <div className="space-y-6 text-lg text-muted leading-relaxed font-sans">
              <p>
                I'm a Computer Science undergraduate at <span className="text-white font-medium">JIIT</span> with a passion for architecting systems that are as robust as they are intuitive. My journey in tech is driven by curiosity and a relentless pursuit of efficiency.
              </p>
              <p>
                With a strong foundation in <span className="text-white font-medium">Data Structures and Backend Engineering</span>, I specialize in building scalable APIs and full-stack applications that solve real-world problems.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-accent/10 blur-[80px] -z-10" />
            <div className="grid grid-cols-2 gap-12 p-8">
              <div className="border-l-2 border-white/5 pl-6 hover:border-accent transition-colors">
                <h4 className="text-4xl font-display font-bold text-white mb-1">9.09</h4>
                <p className="text-[10px] uppercase tracking-widest text-muted font-bold">Current CGPA</p>
              </div>
              <div className="border-l-2 border-white/5 pl-6 hover:border-accent transition-colors">
                <h4 className="text-4xl font-display font-bold text-white mb-1">300+</h4>
                <p className="text-[10px] uppercase tracking-widest text-muted font-bold">DSA Solved</p>
              </div>
              <div className="border-l-2 border-white/5 pl-6 hover:border-accent transition-colors">
                <h4 className="text-4xl font-display font-bold text-white mb-1">2027</h4>
                <p className="text-[10px] uppercase tracking-widest text-muted font-bold">Graduation</p>
              </div>
              <div className="border-l-2 border-white/5 pl-6 hover:border-accent transition-colors">
                <h4 className="text-4xl font-display font-bold text-white mb-1">3+</h4>
                <p className="text-[10px] uppercase tracking-widest text-muted font-bold">Core Projects</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
