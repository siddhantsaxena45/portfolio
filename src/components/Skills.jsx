import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    { 
      title: "GenAI & Retrieval", 
      skills: ["Google Gemini", "Hybrid RAG (RRF)", "HyDE Expansion", "Pinecone Serverless", "Langfuse v5 Tracing", "Ragas Evals", "CrewAI", "LangChain"] 
    },
    { 
      title: "Backend & Distributed Systems", 
      skills: ["Node.js", "Express.js 5", "FastAPI", "Python 3.11+", "RESTful APIs", "Socket.io", "WebRTC (P2P)", "Microservices BFF"] 
    },
    { 
      title: "Frontend Engineering", 
      skills: ["React 19", "Vite", "Tailwind CSS", "Redux Toolkit", "Monaco Editor", "TensorFlow.js", "Framer Motion", "Shadcn/UI"] 
    },
    { 
      title: "Databases & In-Memory Caching", 
      skills: ["MongoDB Atlas", "PostgreSQL", "Supabase", "MySQL", "In-Memory LRU Cache", "Cloudinary CDN"] 
    },
    { 
      title: "Programming Languages", 
      skills: ["C++", "Python", "JavaScript (ES6+)", "SQL", "HTML5 / CSS3"] 
    },
    { 
      title: "DevOps & Cloud Tools", 
      skills: ["Docker", "Docker Compose", "Git", "GitHub Actions (CI/CD)", "Postman", "Vercel", "Render"] 
    },
    { 
      title: "Core Computer Science", 
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "Database Management Systems (DBMS)", "Operating Systems", "Computer Networks"] 
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent/30 bg-accent/5 text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-4">
            <Terminal size={14} /> Arsenal
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-3">Technical Stack</h2>
          <p className="text-muted text-base md:text-lg max-w-2xl">
            Core technologies, AI engineering frameworks, and architectural paradigms I use to build scalable production products.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="border border-[#00f0ff]/15 bg-[#00f0ff]/[0.02] p-6 rounded-xl hover:bg-[#00f0ff]/[0.06] hover:border-[#00f0ff]/40 transition-all duration-300 relative group"
            >
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent/50" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-accent/50" />
              
              <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-3 py-1.5 text-xs font-mono font-medium text-gray-200 border border-white/10 bg-white/[0.03] group-hover:border-accent/30 hover:!border-accent hover:!text-accent hover:!bg-accent/10 transition-all cursor-default rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
