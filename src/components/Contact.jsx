import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowUpRight, Youtube, Code2 } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { name: "Email", icon: <Mail size={20} />, href: "https://mail.google.com/mail/?view=cm&fs=1&to=siddhant.saxena.2004@gmail.com", label: "siddhant.saxena.2004@gmail.com" },
    { name: "GitHub", icon: <Github size={20} />, href: "https://github.com/siddhantsaxena45", label: "github.com/siddhantsaxena45" },
    { name: "LinkedIn", icon: <Linkedin size={20} />, href: "https://linkedin.com/in/siddhant-saxena-617286271", label: "linkedin.com/in/siddhant-saxena" },
    { name: "LeetCode", icon: <Code2 size={20} />, href: "https://leetcode.com/u/siddhantsaxena45/", label: "leetcode.com/siddhantsaxena45" },
    { name: "YouTube", icon: <Youtube size={20} />, href: "https://www.youtube.com/@sidcodeai", label: "youtube.com/@sidcodeai" }
  ];

  return (
    <footer id="contact" className="py-32 px-6 relative overflow-hidden bg-black">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-5xl md:text-8xl font-display font-extrabold tracking-tight mb-10 text-white">
            Let's build <br />
            <span className="text-accent">together</span>.
          </h2>

        </motion.div>

        <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 mb-32">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-muted hover:text-accent transition-all"
            >
              {link.icon} {link.name}
            </a>
          ))}
        </div>


      </div>
    </footer>
  );
};

export default Contact;
