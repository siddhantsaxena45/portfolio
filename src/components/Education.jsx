import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-16 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent/30 bg-accent/5 text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-4">
            <GraduationCap size={14} /> Background
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-3">Education</h2>
          <p className="text-muted text-base md:text-lg max-w-2xl">
            Academic qualifications and strong foundations in Computer Science and Engineering.
          </p>
        </motion.div>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[#00f0ff]/15 bg-[#00f0ff]/[0.02] p-8 md:p-10 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-accent/50" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-accent/50" />

            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start justify-between">
              <div className="grow">
                <span className="text-[10px] uppercase tracking-widest font-mono text-accent bg-accent/10 px-2.5 py-1 rounded border border-accent/20 mb-3 inline-block">
                  Undergraduate Degree
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-2 leading-tight">
                  Jaypee Institute of Information Technology
                </h3>
                <p className="text-lg sm:text-xl text-gray-300 font-medium mb-1">
                  B.Tech in Computer Science and Engineering
                </p>
                <p className="text-xs text-accent tracking-widest uppercase font-mono">
                  Noida, Uttar Pradesh, India
                </p>
              </div>

              <div className="flex flex-row md:flex-col gap-6 md:gap-6 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-10 w-full md:w-auto justify-between md:justify-start">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted font-bold mb-1">Current CGPA</p>
                  <p className="text-3xl md:text-4xl font-display font-extrabold text-accent">9.0<span className="text-lg text-muted font-normal">/10</span></p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted font-bold mb-1">Timeline</p>
                  <p className="text-2xl md:text-3xl font-display font-bold text-white font-mono">2023 – 2027</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[#00f0ff]/15 bg-[#00f0ff]/[0.02] p-8 md:p-10 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-accent/50" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-accent/50" />

            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start justify-between">
              <div className="grow">
                <span className="text-[10px] uppercase tracking-widest font-mono text-accent bg-accent/10 px-2.5 py-1 rounded border border-accent/20 mb-3 inline-block">
                  Senior Secondary & High School
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-2 leading-tight">
                  Shri Gulab Rai Montessori Sr. Sec. School
                </h3>
                <p className="text-lg sm:text-xl text-gray-300 font-medium mb-1">
                  Class XII & Class X (CBSE Board)
                </p>
                <p className="text-xs text-accent tracking-widest uppercase font-mono">
                  Bareilly, Uttar Pradesh, India
                </p>
              </div>

              <div className="flex flex-row md:flex-col gap-6 md:gap-6 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-10 w-full md:w-auto justify-between md:justify-start">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted font-bold mb-1">Academic Scores</p>
                  <p className="text-3xl md:text-4xl font-display font-extrabold text-accent">97.6%</p>
                  <p className="text-[11px] text-muted font-mono mt-0.5">Class XII & Class X</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted font-bold mb-1">Timeline</p>
                  <p className="text-2xl md:text-3xl font-display font-bold text-white font-mono">2020 – 2022</p>
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
