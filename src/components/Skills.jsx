import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    { title: "Languages", skills: ["C++", "Python", "JavaScript", "SQL"] },
    { title: "Backend", skills: ["Node.js", "Express.js", "FastAPI"] },
    { title: "Frontend", skills: ["React", "Tailwind CSS", "Redux Toolkit"] },
    { title: "Databases", skills: ["MongoDB", "PostgreSQL"] },
    { title: "Generative AI", skills: ["LangChain", "CrewAI"] },
    { title: "Tools", skills: ["Git", "GitHub", "Postman", "VS Code"] },
    { title: "Core CS", skills: ["Data Structures & Algorithms", "OOP", "Operating Systems", "DBMS", "Computer Networks"] }
  ];

  return (
    <section id="skills" className="py-16 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-sm uppercase tracking-[0.4em] text-accent font-bold mb-4">Stack</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">Tech Toolbox</h3>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-4 py-2 text-sm font-display font-medium text-accent border border-accent/20 bg-accent/5 hover:bg-accent hover:text-black hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all cursor-default uppercase tracking-wider"
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
