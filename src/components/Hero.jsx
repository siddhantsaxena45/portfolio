import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowRight, Mail, Youtube, Code2 } from 'lucide-react';

const Hero = () => {
  const [helmetOpen, setHelmetOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 md:pt-32 pb-16 md:pb-20 px-4 sm:px-6 overflow-hidden">
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
            className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-none border border-accent bg-accent/10 mb-8 text-[10px] uppercase tracking-[0.3em] font-bold text-accent shadow-[0_0_10px_rgba(0,240,255,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full bg-accent opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 bg-accent"></span>
              </span>
              SYSTEM.ONLINE // FULL STACK ENGINEER
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-extrabold tracking-tight mb-6 md:mb-8 leading-[1.1]">
              <span className="text-gradient">Siddhant</span> <br />
              <span className="text-white">Saxena</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-muted mb-10 md:mb-12 max-w-2xl leading-relaxed font-sans mx-auto lg:mx-0">
              Computer Science student building <span className="text-white font-medium">high-performance systems</span> and 
              scalable full-stack applications with a focus on backend efficiency.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, textShadow: "0 0 8px rgb(0,240,255)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-4 border-2 border-accent text-accent bg-accent/5 hover:bg-accent hover:text-black font-bold flex items-center justify-center gap-3 uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)]"
              >
                Access Databanks <ArrowRight size={20} />
              </motion.a>
              
              <div className="flex flex-wrap justify-center items-center gap-4">
                <motion.a
                  href="https://github.com/siddhantsaxena45"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(0,240,255,0.2)", boxShadow: "0 0 15px rgba(0,240,255,0.5)" }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 border border-accent/30 flex items-center justify-center text-accent transition-all"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="https://leetcode.com/u/siddhantsaxena45/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(0,240,255,0.2)", boxShadow: "0 0 15px rgba(0,240,255,0.5)" }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 border border-accent/30 flex items-center justify-center text-accent transition-all"
                >
                  <Code2 size={20} />
                </motion.a>
                <motion.a
                  href="https://www.youtube.com/@sidcodeai"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(0,240,255,0.2)", boxShadow: "0 0 15px rgba(0,240,255,0.5)" }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 border border-accent/30 flex items-center justify-center text-accent transition-all"
                >
                  <Youtube size={20} />
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(0,240,255,0.2)", boxShadow: "0 0 15px rgba(0,240,255,0.5)" }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 border border-accent/30 flex items-center justify-center text-accent transition-all"
                >
                  <Mail size={20} />
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
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-2 border-accent/30 relative flex items-center justify-center p-4 shadow-[0_0_30px_rgba(0,240,255,0.15)]">
                {/* Rotating outer rings */}
                <div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-accent/60 animate-spin-slow" />
                <div className="absolute inset-[-10px] rounded-full border-b-2 border-l-2 border-accent/30" style={{animation: 'spin 12s linear infinite reverse'}} />
                
                {/* Inner HUD Core with Photo and Helmet */}
                <div className="w-full h-full rounded-full border border-accent/20 flex items-center justify-center relative bg-linear-to-b from-slate-800 via-slate-900 to-black shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] group" style={{ perspective: '1200px' }}>
                  
                  {/* The Photo (Face inside helmet) */}
                  <div className="absolute w-[75%] h-[75%] rounded-full overflow-hidden border-4 border-accent/20 z-10 shadow-[inset_0_0_20px_rgba(0,0,0,0.9)]">
                    <img 
                      src="/photo.png" 
                      alt="Siddhant Saxena" 
                      className="w-full h-full object-cover"
                    />
                    {/* Dark shadow overlay when inside helmet */}
                    <div className={`absolute inset-0 bg-black transition-opacity duration-1000 ${helmetOpen ? 'opacity-10' : 'opacity-80'}`} />
                  </div>

                  {/* 3D Iron Man Stealth Faceplate (SVG) */}
                  <motion.div
                    initial={{ rotateX: 0, y: 0, opacity: 1 }}
                    animate={
                      helmetOpen 
                        ? { rotateX: 105, y: "-100%", opacity: 0.9, scale: 1.1 } 
                        : { rotateX: 0, y: 0, opacity: 1, scale: 1 }
                    }
                    transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }} // Springy ease
                    style={{ transformOrigin: "top center", transformStyle: 'preserve-3d' }}
                    className="absolute inset-0 w-full h-full z-20 flex items-center justify-center pointer-events-none drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
                  >
                    <svg viewBox="0 0 100 110" className="w-[95%] h-[95%] drop-shadow-2xl" style={{ filter: 'drop-shadow(0px 10px 15px rgba(0,0,0,0.5))' }}>
                      <defs>
                        <linearGradient id="stealthGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#334155" /> {/* slate-700 */}
                          <stop offset="40%" stopColor="#1e293b" /> {/* slate-800 */}
                          <stop offset="80%" stopColor="#0f172a" /> {/* slate-900 */}
                          <stop offset="100%" stopColor="#020617" /> {/* slate-950 */}
                        </linearGradient>
                        <filter id="eyeGlow">
                          <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                          <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                      
                      {/* Main Faceplate Shape */}
                      <path 
                        d="M 50 5 
                           C 75 5, 92 15, 96 35 
                           L 88 72 
                           L 72 98 
                           L 50 106 
                           L 28 98 
                           L 12 72 
                           L 4 35 
                           C 8 15, 25 5, 50 5 Z" 
                        fill="url(#stealthGradient)" 
                        stroke="#00f0ff" 
                        strokeWidth="0.5"
                        opacity="0.95"
                      />
                      
                      {/* Forehead Details */}
                      <path d="M 30 18 C 40 22, 60 22, 70 18 L 76 28 C 60 32, 40 32, 24 28 Z" fill="#020617" opacity="0.6"/>
                      <path d="M 45 8 L 55 8 L 53 15 L 47 15 Z" fill="#475569" opacity="0.6"/>

                      {/* Cheeks / Jaw Lines */}
                      <path d="M 12 72 L 28 98 L 35 85 L 18 65 Z" fill="#020617" opacity="0.5"/>
                      <path d="M 88 72 L 72 98 L 65 85 L 82 65 Z" fill="#020617" opacity="0.5"/>

                      {/* Left Eye */}
                      <path d="M 22 44 L 44 50 L 40 55 L 25 50 Z" fill="#cffafe" filter="url(#eyeGlow)"/>
                      <path d="M 22 44 L 44 50 L 40 55 L 25 50 Z" fill="#fff" />
                      
                      {/* Right Eye */}
                      <path d="M 78 44 L 56 50 L 60 55 L 75 50 Z" fill="#cffafe" filter="url(#eyeGlow)"/>
                      <path d="M 78 44 L 56 50 L 60 55 L 75 50 Z" fill="#fff" />
                      
                      {/* Mouth Detailing */}
                      <path d="M 38 88 L 62 88 L 56 94 L 44 94 Z" fill="#020617" opacity="0.8"/>
                      <path d="M 32 78 L 68 78 L 64 83 L 36 83 Z" fill="#0f172a" opacity="0.6"/>
                    </svg>
                  </motion.div>
                </div>
              </div>
              
              {/* Toggle Button */}
              <div className="absolute -bottom-12 md:-bottom-16 left-1/2 -translate-x-1/2 z-50">
                <button
                  onClick={() => setHelmetOpen(!helmetOpen)}
                  className="px-6 py-2 bg-accent/10 text-accent border border-accent/50 uppercase tracking-[0.3em] font-bold text-[10px] hover:bg-accent hover:text-black hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all cursor-pointer whitespace-nowrap"
                >
                  {helmetOpen ? "CLOSE MASK" : "OPEN MASK"}
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
