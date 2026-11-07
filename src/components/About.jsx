import { motion } from 'framer-motion';
import { UserCheck } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent/30 bg-accent/5 text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-4">
              <UserCheck size={14} /> Profile
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-tight text-white">
              Engineering <span className="text-accent">GenAI systems</span> & scalable architectures.
            </h2>
            <div className="space-y-5 text-base sm:text-lg text-muted leading-relaxed font-sans">
              <p>
                I'm a Computer Science undergraduate at <span className="text-white font-medium">Jaypee Institute of Information Technology (JIIT, Noida)</span> passionate about building high-performance GenAI applications, intelligent retrieval engines, and scalable full-stack platforms.
              </p>
              <p>
                My work spans designing production-grade <span className="text-white font-medium">Hybrid RAG architectures</span>, real-time WebRTC collaborative environments, microservices BFFs, and accessible human-computer interfaces. I pair strong computer science fundamentals with modern distributed systems principles.
              </p>
              <p>
                Outside core engineering, I've earned top national ranks in competitive NPTEL certifications (Top 1% in Generative AI for Computer Vision with a 100/100 score, Top 1% in GenAI & LLMs, Top 2% in Graph Theory & DSA) and founded <span className="text-accent font-medium">SidCode.AI</span> to educate aspiring developers.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-accent/10 blur-[80px] -z-10" />
            <div className="grid grid-cols-2 gap-6 p-6 sm:p-8 border border-accent/20 bg-accent/[0.03] rounded-2xl relative">
              <div className="border-l-2 border-accent/40 pl-6 py-2 hover:border-accent transition-colors">
                <h4 className="text-3xl md:text-4xl font-display font-bold text-accent mb-1">9.0/10</h4>
                <p className="text-[10px] uppercase tracking-widest text-muted font-bold">Current CGPA (JIIT)</p>
              </div>
              <div className="border-l-2 border-accent/40 pl-6 py-2 hover:border-accent transition-colors">
                <h4 className="text-3xl md:text-4xl font-display font-bold text-white mb-1">400+</h4>
                <p className="text-[10px] uppercase tracking-widest text-muted font-bold">DSA Problems Solved</p>
              </div>
              <div className="border-l-2 border-accent/40 pl-6 py-2 hover:border-accent transition-colors">
                <h4 className="text-3xl md:text-4xl font-display font-bold text-accent mb-1">Top 1%</h4>
                <p className="text-[10px] uppercase tracking-widest text-muted font-bold">GenAI NPTEL Rank</p>
              </div>
              <div className="border-l-2 border-accent/40 pl-6 py-2 hover:border-accent transition-colors">
                <h4 className="text-3xl md:text-4xl font-display font-bold text-white mb-1">2027</h4>
                <p className="text-[10px] uppercase tracking-widest text-muted font-bold">B.Tech Graduation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
