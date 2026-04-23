import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowRight, Mail } from 'lucide-react/dist/esm/lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Mesh Background */}
      <div className="absolute inset-0 mesh-gradient opacity-30 -z-10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 blur-[120px] rounded-full -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 text-left order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-[10px] uppercase tracking-[0.3em] font-bold text-white/60">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
              </span>
              Full Stack Engineer
            </div>

            <h1 className="text-5xl md:text-8xl font-display font-extrabold tracking-tight mb-8 leading-[1.1]">
              <span className="text-gradient">Siddhant</span> <br />
              <span className="text-white">Saxena</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted mb-12 max-w-2xl leading-relaxed font-sans">
              Computer Science student building <span className="text-white font-medium">high-performance systems</span> and 
              scalable full-stack applications with a focus on backend efficiency.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-5 bg-white text-black rounded-full font-bold flex items-center justify-center gap-3 hover:bg-gray-100 transition-all"
              >
                View Projects <ArrowRight size={20} />
              </motion.a>
              
              <div className="flex items-center gap-4">
                <motion.a
                  href="https://github.com/siddhantsaxena45"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <Mail size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Circular Photo Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center"
          >
            <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full -z-10" />
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-2 border-2 border-white/5 relative">
                <div className="absolute inset-0 rounded-full border border-accent/20 animate-spin-slow" />
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl">
                  <img 
                    src="/photo.png" 
                    alt="Siddhant Saxena" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
