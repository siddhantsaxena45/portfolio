import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-white/5 pt-20"
        >
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="grow">
              <h2 className="text-sm uppercase tracking-[0.4em] text-accent font-bold mb-4">Alma Mater</h2>
              <h3 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">Jaypee Institute of <br /> Information Technology</h3>
              <p className="text-2xl text-muted font-medium">B.Tech in Computer Science and Engineering</p>
            </div>

            <div className="flex flex-col gap-8 text-left border-l border-white/5 pl-8 md:pl-12">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted font-bold mb-1">Current CGPA</p>
                <p className="text-4xl font-display font-bold text-accent">9.00</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted font-bold mb-1">Graduation</p>
                <p className="text-4xl font-display font-bold text-white">2027</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
