import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-sm uppercase tracking-[0.4em] text-accent font-bold mb-4">Academic</h2>
          <h3 className="text-5xl font-display font-bold">Education</h3>
        </motion.div>

        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-t border-white/5 pt-16"
          >
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="grow">
                <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">Jaypee Institute of <br /> Information Technology</h3>
                <p className="text-2xl text-muted font-medium mb-2">B.Tech in Computer Science and Engineering</p>
                <p className="text-sm text-accent tracking-widest uppercase font-bold">Noida, India</p>
              </div>

              <div className="flex flex-col gap-8 text-left border-l border-white/5 pl-8 md:pl-12">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted font-bold mb-1">Current CGPA</p>
                  <p className="text-4xl font-display font-bold text-accent">9.0</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted font-bold mb-1">Timeline</p>
                  <p className="text-4xl font-display font-bold text-white">2023 - 2027</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-t border-white/5 pt-16"
          >
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="grow">
                <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">Shri Gulab Rai Montessori <br /> Sr. Sec. School</h3>
                <p className="text-2xl text-muted font-medium mb-2">High School & Intermediate</p>
                <p className="text-sm text-accent tracking-widest uppercase font-bold">Bareilly, India</p>
              </div>

              <div className="flex flex-col gap-8 text-left border-l border-white/5 pl-8 md:pl-12">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted font-bold mb-1">Scores</p>
                  <p className="text-4xl font-display font-bold text-accent">97.6%</p>
                  <p className="text-xs text-muted mt-2">Class XII & Class X</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted font-bold mb-1">Timeline</p>
                  <p className="text-4xl font-display font-bold text-white">2020 - 2022</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
