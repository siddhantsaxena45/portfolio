import React, { useEffect, useRef } from 'react';

const NanoParticleCanvas = ({ onAssembleComplete }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    
    let particles = [];
    let animationFrameId;
    let assembled = false;
    
    // Config
    const cyan = '0, 240, 255';
    
    const init = () => {
      // Resize to match container or window
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Draw the Arc Reactor shape on the temporary canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const size = Math.min(canvas.width, canvas.height) * 0.15;

      // Draw outer thick ring
      ctx.beginPath();
      ctx.arc(cx, cy, size, 0, Math.PI * 2);
      ctx.lineWidth = 15;
      ctx.strokeStyle = `rgb(${cyan})`;
      ctx.stroke();

      // Draw inner thin ring
      ctx.beginPath();
      ctx.arc(cx, cy, size * 0.8, 0, Math.PI * 2);
      ctx.lineWidth = 4;
      ctx.strokeStyle = `rgb(${cyan})`;
      ctx.stroke();

      // Draw inner triangle
      ctx.beginPath();
      const tSize = size * 0.5;
      ctx.moveTo(cx, cy - tSize);
      ctx.lineTo(cx + tSize * 0.866, cy + tSize * 0.5);
      ctx.lineTo(cx - tSize * 0.866, cy + tSize * 0.5);
      ctx.closePath();
      ctx.lineWidth = 8;
      ctx.strokeStyle = `rgb(${cyan})`;
      ctx.stroke();

      // Fill center glow
      ctx.beginPath();
      ctx.arc(cx, cy, size * 0.2, 0, Math.PI * 2);
      ctx.fillStyle = `rgb(${cyan})`;
      ctx.fill();

      // Get pixel data
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles = [];
      const step = 6; // Particle size/gap
      for (let y = 0; y < canvas.height; y += step) {
        for (let x = 0; x < canvas.width; x += step) {
          const index = (y * canvas.width + x) * 4;
          const alpha = imageData.data[index + 3];
          
          if (alpha > 50) { // Solid pixels
            const r = imageData.data[index];
            const g = imageData.data[index + 1];
            const b = imageData.data[index + 2];
            
            // Start scattered randomly around the screen, far away
            const startX = (Math.random() - 0.5) * canvas.width * 2 + cx;
            const startY = (Math.random() - 0.5) * canvas.height * 2 + cy;
            
            particles.push({
              x: startX,
              y: startY,
              originX: x,
              originY: y,
              color: `rgba(${r},${g},${b}, 1)`,
              size: step - 2,
              ease: Math.random() * 0.05 + 0.015
            });
          }
        }
      }
      
      animate();
    };

    const animate = () => {
      // Trail effect
      ctx.fillStyle = 'rgba(10, 15, 22, 0.4)'; // match dark theme
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      let assembledCount = 0;

      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];

        // Assembly physics
        let dx = p.originX - p.x;
        let dy = p.originY - p.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 1) {
          p.x += dx * p.ease;
          p.y += dy * p.ease;
        } else {
          p.x = p.originX;
          p.y = p.originY;
          assembledCount++;
        }

        // Draw glowing particle
        ctx.fillStyle = p.color;
        ctx.shadowBlur = distance < 10 ? 15 : 0; // Glow only when assembled
        ctx.shadowColor = `rgb(${cyan})`;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      }
      
      // Check if mostly assembled
      if (!assembled && assembledCount > particles.length * 0.95) {
        assembled = true;
        setTimeout(() => {
          if(onAssembleComplete) onAssembleComplete();
        }, 1500); // Wait 1.5 second after assembly to trigger next phase
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      cancelAnimationFrame(animationFrameId);
      init();
    };

    window.addEventListener('resize', handleResize);
    // Slight delay to ensure layout is ready
    setTimeout(init, 100);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [onAssembleComplete]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full z-50 pointer-events-none"
    />
  );
};

export default NanoParticleCanvas;
