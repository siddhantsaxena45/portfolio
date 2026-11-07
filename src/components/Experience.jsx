import { motion } from 'framer-motion';
import { ExternalLink, Briefcase, Folder } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent/30 bg-accent/5 text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-4">
              <Briefcase size={14} /> Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Work Experience</h2>
            <p className="text-muted text-base leading-relaxed">
              Research and development experience applying computer vision, speech recognition, and human-computer interaction to solve real-world accessibility challenges.
            </p>
          </motion.div>

          <div className="lg:w-2/3 border-l border-accent/20 pl-6 md:pl-12 ml-2 md:ml-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group bg-[#00f0ff]/[0.02] border border-[#00f0ff]/15 p-6 sm:p-8 rounded-xl hover:border-accent/40 hover:bg-[#00f0ff]/[0.05] transition-all duration-300"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-31px] md:left-[-55px] top-8 w-3.5 h-3.5 rounded-full bg-accent ring-4 ring-background shadow-[0_0_12px_rgba(0,240,255,0.8)]" />
              
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-accent transition-colors">
                    Research Intern
                  </h3>
                  <span className="text-xs font-mono font-bold text-accent/90 px-2.5 py-1 bg-accent/10 border border-accent/30 rounded w-fit">
                    May 2025 – Jul 2025
                  </span>
                </div>
                
                <p className="text-sm font-medium text-gray-300 mb-5">
                  <span className="text-accent font-semibold">Directorate of Research, Innovation and Development (DRID), JIIT</span> • Noida, India
                  <br />
                  <span className="text-xs text-muted italic">Project: Esports & Stress Management for Differently-Abled People</span>
                </p>

                <ul className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed space-y-2.5">
                  <li className="flex items-start gap-2.5">
                    <span className="text-accent mt-1 shrink-0">▹</span>
                    <span>Built Python games and an interactive music app for JIIT research on esports and stress management for people with different abilities.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-accent mt-1 shrink-0">▹</span>
                    <span>Added webcam gesture controls to a Pygame space shooter using <strong className="text-white font-medium">OpenCV</strong> and <strong className="text-white font-medium">MediaPipe</strong> for touch-free accessibility.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-accent mt-1 shrink-0">▹</span>
                    <span>Integrated offline voice controls with <strong className="text-white font-medium">Vosk</strong> for the space shooter and music application for hands-free instrument selection and track recording.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-accent mt-1 shrink-0">▹</span>
                    <span>Engineered an interactive music workstation in Pygame, enabling instrument loop recording, audio layering, and custom song mixing.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-accent mt-1 shrink-0">▹</span>
                    <span>Collaborated with faculty researchers to evaluate interaction models, conduct usability tests, and iterate game mechanics.</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
                  <a 
                    href="https://drive.google.com/file/d/1OeTofYkEZlQcu1_AGMtueg6AJAcmuBs3/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-black bg-accent px-4 py-2 rounded flex items-center gap-2 uppercase tracking-wider hover:bg-white hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all"
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={14} />
                  </a>
                  <a 
                    href="https://drive.google.com/drive/folders/1Jjt0960PhiyKOMfrFM6g-y2pUekO34Ox?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-gray-200 border border-white/20 bg-white/5 px-4 py-2 rounded flex items-center gap-2 uppercase tracking-wider hover:border-accent hover:text-accent transition-all"
                  >
                    <Folder size={14} />
                    <span>DRID Drive Folder</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
