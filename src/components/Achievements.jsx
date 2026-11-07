import { motion } from 'framer-motion';
import { ExternalLink, Trophy, Folder } from 'lucide-react';

const Achievements = () => {
  const items = [
    {
      title: "NPTEL Top 1% (100/100) — GenAI for Computer Vision",
      desc: "Earned Elite + Gold with a perfect 100/100 score, ranking in the Top 1% nationwide in Generative AI for Computer Vision by IIT Kharagpur.",
      link: "https://drive.google.com/file/d/1Vv6QMcbrf9xgrA8nnMC3VHUw3YsW5Bnk/view?usp=sharing",
      tag: "Top 1% • Perfect Score 100/100"
    },
    {
      title: "NPTEL Top 1% (91/100) — Fundamentals of GenAI & LLMs",
      desc: "Scored 91/100, ranking in the Top 1% nationwide in Fundamentals of Generative AI and Large Language Models: Theory and Practice by IIT Kharagpur.",
      link: "https://drive.google.com/file/d/1Oiu82e7_cFmbWjLr4-iuashesbkzc0PQ/view?usp=sharing",
      tag: "Top 1% • Elite + Gold"
    },
    {
      title: "NPTEL Top 2% (91/100) — Graph Theory & DSA",
      desc: "Awarded NPTEL Elite + Gold in Algorithmic Graph Theory and Data Structures by IIT Kharagpur with 91/100, ranking in the Top 2% nationwide.",
      link: "https://drive.google.com/file/d/1k6ztBcjDC6N7-K34KawJd0nRwUmfgrHq/view?usp=sharing",
      tag: "Top 2% • Elite + Gold"
    },
    {
      title: "NPTEL Top 5% (79/100) — Deep Learning for NLP",
      desc: "Awarded NPTEL Elite + Silver ranking in the Top 5% nationwide with 79/100 in Deep Learning for Natural Language Processing by IIT Kharagpur.",
      link: "https://drive.google.com/file/d/1YUHkTMIgq_-Iw7gXjIV_iywAyJdvOyI_/view?usp=sharing",
      tag: "Top 5% • Elite + Silver"
    },
    {
      title: "NPTEL Elite (85/100) — HR Analytics",
      desc: "Awarded NPTEL Elite + Silver with an 85/100 score in HR Analytics by IIT Kharagpur.",
      link: "https://drive.google.com/file/d/1HnmeorqXSAmkbY3fe9cc0E4vkH86LUk5/view?usp=sharing",
      tag: "Elite + Silver"
    },
    {
      title: "SidCode.AI Founder & Technical Creator",
      desc: "Built and launched SidCode.AI educational platform and YouTube channel, growing to 700+ subscribers, 20K+ views, and publishing 35+ technical videos on Full-Stack & AI.",
      link: "https://sidcode-ai.vercel.app/",
      tag: "Platform / YouTube"
    },
    {
      title: "Algorithmic Problem Solver (400+ Solved)",
      desc: "Solved 400+ algorithmic problems across LeetCode and competitive programming platforms covering Advanced Graph Theory, DP, Trees, and Complex Data Structures.",
      link: "https://leetcode.com/u/siddhantsaxena45/",
      tag: "Competitive DSA"
    },
    {
      title: "Generative AI Fundamentals & Delta Full-Stack",
      desc: "Completed Google Cloud Generative AI Fundamentals and Apna College Delta (Full Stack Web Development) certification programs.",
      link: "https://drive.google.com/file/d/1pU6Nx6zqzLIXLdSAwh1rVD3WAaBTarFE/view?usp=sharing",
      tag: "Certifications"
    },
    {
      title: "NSS Blood Donation Camp Leadership",
      desc: "Organized and led an NSS blood donation drive by coordinating 20+ volunteers and facilitating 150+ blood donations.",
      link: "https://drive.google.com/file/d/1h27R59oRmdEvKB3rED8-JKAD9osqThNH/view?usp=sharing",
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
          className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent/30 bg-accent/5 text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-4">
              <Trophy size={14} /> Milestones
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-3">Honors & Certifications</h2>
            <p className="text-muted text-base md:text-lg max-w-2xl">
              Competitive national rankings, top NPTEL Elite honors from IIT Kharagpur, and community leadership milestones.
            </p>
          </div>

          <a 
            href="https://drive.google.com/drive/folders/1X_JZvPbqpHgjH6Fscz5rVAyiy2Wp2eVQ?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-accent/40 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-accent hover:text-black hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all self-start md:self-auto rounded"
          >
            <Folder size={15} />
            <span>All Certificates Drive</span>
            <ExternalLink size={14} />
          </a>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, idx) => (
            <motion.a 
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group border border-[#00f0ff]/15 bg-[#00f0ff]/[0.03] p-6 rounded-xl flex flex-col justify-between hover:border-[#00f0ff]/50 hover:shadow-[0_0_25px_rgba(0,240,255,0.18)] hover:bg-[#00f0ff]/[0.08] transition-all relative overflow-hidden"
            >
              {/* Decorative HUD corners */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#00f0ff]/50" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#00f0ff]/50" />
              
              <div>
                <span className="inline-block text-[10px] uppercase tracking-[0.2em] font-bold text-accent bg-accent/10 px-2.5 py-1 rounded border border-accent/20 mb-4">
                  {item.tag}
                </span>
                <h3 className="text-lg md:text-xl font-display font-bold text-white mb-3 flex items-start justify-between gap-2 group-hover:text-accent transition-colors">
                  <span>{item.title}</span>
                  <ExternalLink size={16} className="shrink-0 mt-1 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-accent/70 font-mono group-hover:text-accent">
                <span>View Credential</span>
                <span>→</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
