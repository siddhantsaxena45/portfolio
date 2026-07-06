import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';

const Achievements = () => {
  const items = [
    {
      title: "NPTEL Elite (Top 2%)",
      desc: "Awarded NPTEL Elite in Algorithmic Graph Theory and Data Structures by IIT Kharagpur with a score of 91/100.",
      link: "https://drive.google.com/file/d/1tL3rWk2k58OSUxWn0nR5O0AdAyyu389L/view?usp=sharing",
      tag: "Academic"
    },
    {
      title: "SidCode.AI Founder",
      desc: "Built and launched SidCode.AI, growing to 700+ subscribers, 20K+ views, and publishing 35+ technical videos.",
      link: "https://sidcode-ai.vercel.app/",
      tag: "YouTube"
    },
    {
      title: "Algorithmic Problem Solver",
      desc: "Solved 400+ algorithmic problems across LeetCode and competitive platforms covering Graphs, DP, Trees, and more.",
      link: "https://leetcode.com/u/siddhantsaxena45/",
      tag: "DSA"
    },
    {
      title: "NSS Leadership",
      desc: "Led an NSS blood donation drive by coordinating 20+ volunteers and facilitating 150+ blood donations.",
      link: "https://drive.google.com/file/d/1h27R59oRmdEvKB3rED8-JKAD9osqThNH/view",
      tag: "Social Service"
    }
  ];

  return (
    <section id="achievements" className="py-16 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-sm uppercase tracking-[0.4em] text-accent font-bold mb-4">Milestones</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">Awards</h3>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {items.map((item, idx) => (
            <motion.a 
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group border border-[#00f0ff]/10 bg-[#00f0ff]/5 p-6 md:p-8 flex flex-col items-start hover:border-[#00f0ff]/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] hover:bg-[#00f0ff]/10 transition-all relative overflow-hidden"
            >
              {/* Decorative HUD corners */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#00f0ff]/50" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#00f0ff]/50" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-4">
                {item.tag}
              </span>
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4 flex items-center gap-2 group-hover:text-accent transition-colors">
                {item.title} {item.link !== "#" && <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
              </h3>
              <p className="text-muted text-base md:text-lg leading-relaxed">
                {item.desc}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
