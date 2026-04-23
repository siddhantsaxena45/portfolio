import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react/dist/esm/lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "DocMind",
      subtitle: "PDF Research Assistant",
      description: "Advanced RAG-based PDF analyzer using FastAPI and vector search.",
      github: "https://github.com/siddhantsaxena45/DocMind",
      tech: ["FastAPI", "Vector DB"]
    },
    {
      title: "AI-Proctor",
      subtitle: "Interview Simulation",
      description: "Interview platform with real-time monitoring and speech-to-text.",
      github: "https://github.com/siddhantsaxena45/AI-Proctor",
      tech: ["MERN", "CV"]
    },
    {
      title: "Zocial",
      subtitle: "Social Infrastructure",
      description: "Real-time social networking system with deep analytics.",
      github: "https://github.com/siddhantsaxena45/Zocial",
      tech: ["Node.js", "MongoDB"]
    }
  ];

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-sm uppercase tracking-[0.4em] text-accent font-bold mb-4">Portfolio</h2>
          <h3 className="text-5xl font-display font-bold">Selected Work</h3>
        </motion.div>
        
        <div className="space-y-0">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group py-12 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:bg-white/[0.01] transition-colors px-4"
            >
              <div className="max-w-xl">
                <div className="flex gap-4 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-widest font-bold text-accent">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-4xl font-display font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-500">{project.title}</h3>
                <p className="text-muted text-lg">{project.description}</p>
              </div>
              
              <div className="flex items-center gap-6">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                >
                  <Github size={20} />
                </a>
                <a href={project.github} className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center hover:scale-110 transition-all">
                  <ArrowUpRight size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
