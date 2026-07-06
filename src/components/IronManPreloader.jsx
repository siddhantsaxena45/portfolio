import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const IronManPreloader = ({ onComplete }) => {
  const [phase, setPhase] = useState('assembling'); // 'assembling' | 'opening'

  useEffect(() => {
    // Show the welcome text for a short time, then open
    const timer = setTimeout(() => {
      setPhase('opening');
      setTimeout(() => {
        onComplete();
      }, 600); 
    }, 1200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 9999 }}>
      {/* Top half of the helmet/screen */}
      <motion.div 
        initial={{ y: 0 }}
        animate={{ y: phase === 'opening' ? '-100%' : 0 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 left-0 w-full h-1/2 bg-[#0a0f16] border-b-2 border-[#00f0ff] flex flex-col justify-end"
      >
        <div className="w-full h-1 bg-[#00f0ff] shadow-[0_0_15px_#00f0ff]" />
      </motion.div>

      {/* Bottom half of the helmet/screen */}
      <motion.div 
        initial={{ y: 0 }}
        animate={{ y: phase === 'opening' ? '100%' : 0 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-[#0a0f16] border-t-2 border-[#00f0ff]"
      >
        <div className="w-full h-1 bg-[#00f0ff] shadow-[0_0_15px_#00f0ff]" />
      </motion.div>

      {/* Welcome Text */}
      {phase === 'assembling' && (
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center px-4"
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase tracking-[0.2em] drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">
              Welcome to my portfolio
            </h1>
          </motion.div>
        </div>
      )}
      
      {/* Central glowing core that flashes right before opening */}
      {phase === 'opening' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [1, 0], scale: [1, 5] }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#00f0ff] rounded-full blur-3xl z-50"
        />
      )}
    </div>
  );
};

export default IronManPreloader;
