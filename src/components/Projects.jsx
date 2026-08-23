import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Lumina",
      subtitle: "AI-Powered Technical Interview Platform",
      description: "Built a full-stack AI mock interview platform supporting coding, conceptual, and voice interviews. Integrated gemini api for real-time speech transcripts and feedback. Includes in-browser Monaco editor and browser-based AI proctoring via TensorFlow.js.",
      github: "https://github.com/siddhantsaxena45/Lumina",
      live: "https://ai-interviewer-phi-ten.vercel.app/",
      tech: ["MERN","FastAPI", "Gemini" ,"TensorFlow.js", "Monaco","Socket.io"]
    },
    {
      title: "Zocial",
      subtitle: "AI-Powered Social Networking Platform",
      description: "Developed a MERN social networking platform with WebRTC-based video/audio calls. Built a FastAPI-based AI service using Gemini for sentiment analysis and profile insights. Responsive dashboards using Recharts to visualize user engagement.",
      github: "https://github.com/siddhantsaxena45/Zocial",
      live: "https://zocial-2x3k.vercel.app",
      tech: ["MERN", "WebRTC", "FastAPI", "Gemini", "Socket.io"]
    },
    {
      title: "DocMind",
      subtitle: "Multi-Agent RAG Document Intelligence Platform",
      description: "RAG-based document intelligence platform using React, FastAPI, PostgreSQL, Pinecone, and CrewAI. Built AI agents for resume analysis and research assistance. Implemented semantic search and vector embeddings.",
      github: "https://github.com/siddhantsaxena45/DocMind",
      live: "https://doc-mind-eight.vercel.app",
      tech: ["React", "FastAPI", "Pinecone","Supabase" , "LangChain", "CrewAI"]
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-sm uppercase tracking-[0.4em] text-accent font-bold mb-4">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">Selected Work</h3>
        </motion.div>
        
        <div className="space-y-0">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group py-8 md:py-12 border border-[#00f0ff]/10 bg-[#00f0ff]/5 mb-8 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-8 hover:bg-[#00f0ff]/10 hover:border-[#00f0ff]/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-500 px-6 md:px-8 relative overflow-hidden"
            >
              {/* Decorative HUD corners */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00f0ff]/50" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00f0ff]/50" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00f0ff]/50" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00f0ff]/50" />
              <div className="max-w-xl">
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-widest font-bold text-accent">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-500">{project.title}</h3>
                <p className="text-muted text-base md:text-lg">{project.description}</p>
              </div>
              
              <div className="flex items-center gap-6">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                  title="View Source"
                >
                  <Github size={20} />
                </a>
                {project.live ? (
                  <a 
                    href={project.live} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center hover:scale-110 transition-all shadow-[0_0_15px_rgba(var(--accent-rgb),0.5)]"
                    title="Live Demo"
                  >
                    <ArrowUpRight size={20} />
                  </a>
                ) : (
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center hover:scale-110 transition-all shadow-[0_0_15px_rgba(var(--accent-rgb),0.5)]"
                    title="View Source"
                  >
                    <ArrowUpRight size={20} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
