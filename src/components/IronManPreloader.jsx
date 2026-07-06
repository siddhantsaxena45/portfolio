import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NanoParticleCanvas from './NanoParticleCanvas';

const IronManPreloader = ({ onComplete }) => {
  const [phase, setPhase] = useState('assembling'); // 'assembling' | 'opening'

  const handleAssembleComplete = () => {
    setPhase('opening');
    // Wait for the opening animation to finish before removing the preloader entirely
    setTimeout(() => {
      onComplete();
    }, 1500); 
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden pointer-events-none">
      {/* Top half of the helmet/screen */}
      <motion.div 
        initial={{ y: 0 }}
        animate={{ y: phase === 'opening' ? '-100%' : 0 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 left-0 w-full h-1/2 bg-[#0a0f16] border-b-2 border-[#00f0ff] flex flex-col justify-end"
      >
        {/* Decorative HUD lines on the split line */}
        <div className="w-full h-1 bg-[#00f0ff] shadow-[0_0_15px_#00f0ff]" />
      </motion.div>

      {/* Bottom half of the helmet/screen */}
      <motion.div 
        initial={{ y: 0 }}
        animate={{ y: phase === 'opening' ? '100%' : 0 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-[#0a0f16] border-t-2 border-[#00f0ff]"
      >
        <div className="w-full h-1 bg-[#00f0ff] shadow-[0_0_15px_#00f0ff]" />
      </motion.div>

      {/* Nano Particle Canvas - Arc Reactor */}
      {phase === 'assembling' && (
        <NanoParticleCanvas onAssembleComplete={handleAssembleComplete} />
      )}
      
      {/* Central glowing core that flashes right before opening */}
      {phase === 'opening' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [1, 0], scale: [1, 5] }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#00f0ff] rounded-full blur-3xl z-50"
        />
      )}
    </div>
  );
};

export default IronManPreloader;
