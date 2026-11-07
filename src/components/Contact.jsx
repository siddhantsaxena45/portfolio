import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowUpRight, Youtube, Code2, FileText } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { name: "Email", icon: <Mail size={18} />, href: "https://mail.google.com/mail/?view=cm&fs=1&to=siddhant.saxena.2004@gmail.com", label: "siddhant.saxena.2004@gmail.com" },
    { name: "LinkedIn", icon: <Linkedin size={18} />, href: "https://linkedin.com/in/siddhant-saxena-617286271", label: "linkedin.com/in/siddhant-saxena" },
    { name: "GitHub", icon: <Github size={18} />, href: "https://github.com/siddhantsaxena45", label: "github.com/siddhantsaxena45" },
    { name: "LeetCode", icon: <Code2 size={18} />, href: "https://leetcode.com/u/siddhantsaxena45/", label: "leetcode.com/siddhantsaxena45" },
    { name: "YouTube", icon: <Youtube size={18} />, href: "https://www.youtube.com/@sidcodeai", label: "@sidcodeai" },
    { name: "Resume", icon: <FileText size={18} />, href: "https://drive.google.com/file/d/1q0IX9IR8mNq_kEVfW8-FJlN0mx2oyPNW/view?usp=sharing", label: "Download CV" }
  ];

  return (
    <footer id="contact" className="py-16 md:py-28 px-4 sm:px-6 relative overflow-hidden bg-black/40">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent/30 bg-accent/5 text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-6">
            Get In Touch
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold tracking-tight mb-6 text-white">
            Let's build <br />
            <span className="text-accent">together</span>.
          </h2>

          <p className="text-muted text-base md:text-lg max-w-xl mx-auto mb-8">
            Interested in collaborating, hiring for GenAI & full-stack roles, or discussing distributed systems? Let's connect.
          </p>

          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=siddhant.saxena.2004@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-accent text-black font-bold uppercase tracking-widest text-xs rounded hover:bg-white hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] transition-all"
          >
            <Mail size={16} />
            <span>Initiate Transmission (Email)</span>
          </a>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-8 border-t border-white/5">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/[0.02] rounded text-xs font-mono font-medium text-muted hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all"
            >
              {link.icon}
              <span>{link.name}</span>
              <ArrowUpRight size={13} className="opacity-40" />
            </a>
          ))}
        </div>

        <p className="text-[11px] text-muted/60 mt-12 font-mono uppercase tracking-widest">
          © {new Date().getFullYear()} Siddhant Saxena • GenAI & Full-Stack Engineer
        </p>
      </div>
    </footer>
  );
};

export default Contact;
