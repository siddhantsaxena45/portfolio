import { motion } from 'framer-motion';
import { Github, ArrowUpRight, Cpu, Sparkles } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "DocMind AI",
      subtitle: "Perplexity-Style Hybrid RAG Document Intelligence Engine",
      timeline: "Apr 2026 – May 2026",
      summary: "Production-grade document intelligence and real-time research engine modeled after Google AI Overviews and Perplexity AI. Solves naive RAG limitations through Reciprocal Rank Fusion, hypothetical embeddings, sub-15ms semantic caching, and automated Ragas evaluation gates.",
      highlights: [
        "Hybrid RAG with RRF (k=60): Combines dense vector search (Pinecone Serverless text-embedding-004) and sparse BM25 keyword matching in Supabase PostgreSQL.",
        "HyDE & Multi-Query Expansion: Synthesizes hypothetical document embeddings and lexical reformulations to bridge phrasing mismatches with dense document syntax.",
        "In-Memory LRU Semantic Caching: Delivers sub-15ms response times on repeat queries, slashing Gemini API token consumption by ~40%.",
        "Langfuse Distributed Tracing & Ragas CI/CD Gates: Tracks full observation hierarchy (retriever, tool, generation); benchmarked with 87.1% Faithfulness, 90.5% Relevance, and 90.8% Precision in automated tests.",
        "Perplexity-Style Streaming & SSRF Shield: Real-time SSE streaming with interactive grounded citation pills [1], [2], GFM comparison tables, and SSRF pre-resolution DNS filtering."
      ],
      metrics: [
        { label: "Faithfulness", value: "87.1%" },
        { label: "Relevance", value: "90.5%" },
        { label: "Semantic Cache", value: "<15ms" }
      ],
      github: "https://github.com/siddhantsaxena45/DocMind",
      live: "https://doc-mind-eight.vercel.app",
      tech: ["React 19", "FastAPI", "Python 3.11+", "Pinecone Serverless", "Supabase Postgres", "Google Gemini", "Langfuse v5", "Ragas", "Docker"]
    },
    {
      title: "Lumina AI",
      subtitle: "Next-Gen AI Technical & Behavioral Interview Platform",
      timeline: "Jan 2026 – Mar 2026",
      summary: "Full-stack AI-driven mock interview platform preparing candidates for technical coding challenges and STAR-method behavioral rounds with real-time feedback, neural speech synthesis, and in-browser proctoring.",
      highlights: [
        "Microservices BFF Architecture: Decoupled Node.js Express 5 Backend-for-Frontend (BFF) and Python FastAPI AI microservice for independent horizontal scaling.",
        "Monaco Code Editor & WebSockets: In-browser live coding workspace with bidirectional Socket.io streaming for real-time interview progression and automated code evaluation.",
        "Client-Side PDF Parsing: Secure, instant resume and Job Description parsing directly in the browser via pdf.js to generate ATS match scores and tailored interview questions.",
        "In-Browser AI Proctoring: Integrated TensorFlow.js (COCO-SSD) for automated anti-cheat and candidate integrity verification without external streaming latency.",
        "Neural Speech Synthesis & Security: High-fidelity voice synthesis powered by edge-tts (Microsoft Edge Neural Voices) with helmet, rate-limiting, and node-cache invalidation."
      ],
      metrics: [
        { label: "Architecture", value: "Microservices BFF" },
        { label: "Anti-Cheat", value: "TensorFlow.js" },
        { label: "Voice", value: "Neural TTS" }
      ],
      github: "https://github.com/siddhantsaxena45/Lumina",
      live: "https://ai-interviewer-phi-ten.vercel.app/",
      tech: ["React 19", "Node.js", "Express 5", "FastAPI", "MongoDB", "Google Gemini", "Monaco Editor", "Socket.io", "TensorFlow.js", "Docker"]
    },
    {
      title: "Zocial",
      subtitle: "Career Intelligence Hub & Elite Developer Network",
      timeline: "Dec 2025 – Feb 2026",
      summary: "AI-powered career intelligence network and real-time collaborative platform connecting proof-of-work transmissions with semantic talent scouting, multimodal vision resume synthesis, and connection-gated WebRTC collaboration.",
      highlights: [
        "Zocial Scout (AI Recruiter Portal): Evaluates candidate proof-of-work transmissions and profiles directly against pasted Job Descriptions using semantic similarity scoring.",
        "Multimodal Gemini Vision Pipeline: Audits developer project screenshots (UI diagrams, schemas, terminal logs) to identify skill gaps and synthesize print-ready ATS resumes.",
        "Gated WebRTC Collaboration Suite: Peer-to-peer video calling gated by mutual synergy with Web Audio API marimba ringtones, real-time synchronized pair-coding editor, and whiteboard.",
        "Synergy Network & Peer Vouching: LinkedIn-style connection ledger with co-developer tagging and cryptographic-style peer-verified synergy badges on technical transmissions.",
        "10-Key Multi-Model Cascade: High-throughput Gemini key rotator with round-robin load distribution and automatic fallback cascade across 6 Gemini models, paired with anti-spam messaging."
      ],
      metrics: [
        { label: "Key Rotator", value: "10 Keys / 6 Models" },
        { label: "Collaboration", value: "Gated WebRTC" },
        { label: "Vision AI", value: "ATS Synthesizer" }
      ],
      github: "https://github.com/siddhantsaxena45/Zocial",
      live: "https://zocial-2x3k.vercel.app",
      tech: ["React 19", "Node.js 20", "Express 5.1", "MongoDB Atlas", "Socket.io", "WebRTC", "Google Gemini Vision", "Cloudinary", "Redux Toolkit"]
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent/30 bg-accent/5 text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-4">
            <Cpu size={14} /> Production Systems
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-3">Featured Projects</h2>
          <p className="text-muted text-base md:text-lg max-w-2xl">
            Scalable full-stack systems, production GenAI engines, and real-time distributed platforms engineered with strict evaluation benchmarks and clean microservice architectures.
          </p>
        </motion.div>
        
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group border border-[#00f0ff]/15 bg-[#00f0ff]/[0.03] rounded-2xl p-6 sm:p-8 md:p-10 hover:bg-[#00f0ff]/[0.07] hover:border-[#00f0ff]/50 hover:shadow-[0_0_35px_rgba(0,240,255,0.18)] transition-all duration-500 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Decorative HUD corners */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00f0ff]/60" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00f0ff]/60" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00f0ff]/60" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00f0ff]/60" />

              <div>
                {/* Header row: timeline, metrics, action buttons */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/5">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-accent/80 px-2.5 py-0.5 border border-accent/20 bg-accent/5 rounded-sm">
                        {project.timeline}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-accent/90 font-medium mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Top-right action links */}
                  <div className="flex items-center gap-3 self-start lg:self-center">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg border border-white/15 bg-white/5 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-white hover:text-black hover:border-white transition-all shadow-sm"
                      title="View Source on GitHub"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-accent text-black text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-white hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] transition-all"
                        title="Open Live Deployment"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Metrics Badges */}
                <div className="flex flex-wrap gap-2 sm:gap-3 my-5">
                  {project.metrics.map((metric, mIdx) => (
                    <div 
                      key={mIdx} 
                      className="px-3 py-1.5 rounded-md border border-[#00f0ff]/20 bg-black/40 text-xs flex items-center gap-2"
                    >
                      <span className="text-muted text-[11px] uppercase tracking-wider">{metric.label}:</span>
                      <span className="text-accent font-bold font-mono">{metric.value}</span>
                    </div>
                  ))}
                </div>

                {/* Summary Paragraph */}
                <p className="text-muted text-base md:text-lg leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Key Architectural Highlights / Features */}
                <div className="space-y-2.5 mb-6 bg-black/30 p-4 sm:p-5 rounded-xl border border-white/5">
                  <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-accent mb-2 flex items-center gap-2">
                    <Sparkles size={13} /> Engineering Highlights
                  </p>
                  {project.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-gray-300">
                      <span className="text-accent mt-1 shrink-0">▹</span>
                      <span className="leading-snug">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                <span className="text-[10px] uppercase tracking-widest text-muted font-bold mr-2">Tech:</span>
                {project.tech.map((t, i) => (
                  <span 
                    key={i} 
                    className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#00f0ff]/10 text-accent border border-[#00f0ff]/20 font-medium"
                  >
                    {t}
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

export default Projects;
