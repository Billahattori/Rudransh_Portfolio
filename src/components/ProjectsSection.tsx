import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";

interface Project {
  name: string;
  location: string;
  period: string;
  title: string;
  description: string;
  bullets: string[];
  tags: string[];
  githubUrl: string;
  image: string;
}

const projects: Project[] = [
  {
    name: "SDG Simulator",
    location: "IIT Tirupati",
    period: "2022–2023",
    title: "AI-Powered SDG Awareness Simulator",
    description: "Built an AI-driven interactive simulator using scenario-based logic to promote awareness of the existing 17 UN SDGs",
    bullets: [
      "Led a 10-member team to develop a rules-based simulation of real-world environmental and social dilemmas",
      "Deployed behavioral tracking with 50+ student participants, capturing real-time decision data during gameplay",
    ],
    tags: ["AI Simulation", "Sustainability", "Behavioral Analytics"],
    githubUrl: "https://github.com/rudransh-pujari/project-one",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Factory Flow",
    location: "IIT Tirupati",
    period: "2023–2024",
    title: "Optimisation of Material Flow using Tecnomatix Plant Simulation",
    description: "Led a 4-member team to simulate a factory with 2+ workstations, robotic arms, and boosted throughput by 28%",
    bullets: [
      "Implemented discrete event simulation with logic-controlled automated material flow, pick-and-place operations",
      "Conducted in-depth performance analytics on part flow, workstation cycle times, and production bottlenecks",
    ],
    tags: ["Factory Simulation", "Throughput Optimization", "Discrete Event Modeling"],
    githubUrl: "https://github.com/rudransh-pujari/project-two",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Valuation",
    location: "IIM Kashipur",
    period: "2026",
    title: "Financial Statement Analysis and Valuation Project",
    description: "Analyzed 5 years of financial statements for 5 listed companies (~25 annual reports, 300+ financial line items)",
    bullets: [
      "Computed and benchmarked 25+ financial ratios across 3 performance dimensions",
      "Identified 15+ trends and synthesized them into 4 data-backed conclusions on market positioning."
    ],
    tags: ["Financial Modeling", "Ratio Analysis", "Market Benchmarking"],
    githubUrl: "https://github.com/rudransh-pujari/project-three",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
];

const ProjectsSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextProject = () => setActiveIdx((prev) => (prev + 1) % projects.length);
  const prevProject = () => setActiveIdx((prev) => (prev - 1 + projects.length) % projects.length);

  const active = projects[activeIdx];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = (direction: number) => ({
    hidden: { opacity: 0, x: direction * 30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    },
  });

  return (
    <section id="projects" className="relative min-h-screen overflow-hidden bg-transparent z-10">
      <div className="relative z-10 px-6 md:px-24 lg:px-48 py-24 md:py-32">
        
        {/* HEADER: Desktop arrows stay here, Mobile arrows hidden here */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white uppercase leading-none">
              Featured <br />
              <span className="italic font-serif font-light lowercase">projects</span>
            </h2>
          </motion.div>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <div className="hidden md:flex gap-4">
            <button onClick={prevProject} className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all text-white"><ChevronLeft size={24} /></button>
            <button onClick={nextProject} className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all text-white"><ChevronRight size={24} /></button>
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start"
        >
          {/* VISUALS CARD CONTAINER */}
          <div className="relative group">
            {/* Mobile Navigation Arrows (Flanking the card, hidden on Desktop) */}
            <div className="absolute inset-y-0 -left-4 -right-4 flex items-center justify-between z-20 md:hidden pointer-events-none">
              <button 
                onClick={prevProject} 
                className="p-3 rounded-full bg-black/60 border border-white/20 text-white pointer-events-auto backdrop-blur-md active:scale-90 transition-transform"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextProject} 
                className="p-3 rounded-full bg-black/60 border border-white/20 text-white pointer-events-auto backdrop-blur-md active:scale-90 transition-transform"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <motion.div 
              variants={itemVariants(-1)}
              className="relative aspect-[4/3] md:aspect-[4/3] rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 shadow-2xl backdrop-blur-sm"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full"
                >
                  <img src={active.image} alt={active.title} className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 md:opacity-0 group-hover:opacity-40 transition-opacity" />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* DETAILS CARD */}
          <motion.div variants={itemVariants(1)} className="flex flex-col justify-center min-h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-white/60">{active.location}</span>
                    <span className="text-white/20">—</span>
                    <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">{active.period}</span>
                  </div>
                  <motion.a
                    href={active.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.95 }}
                    className="w-fit flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/80 hover:bg-white/10 transition-colors"
                  >
                    <Github size={14} />
                    <span className="text-[10px] font-mono uppercase">Source</span>
                    <ExternalLink size={10} className="opacity-40" />
                  </motion.a>
                </div>

                <h3 className="text-2xl md:text-5xl font-bold text-white leading-tight mb-4">{active.title}</h3>
                <p className="text-base md:text-lg text-white/60 mb-6 leading-relaxed">{active.description}</p>

                <ul className="space-y-3 mb-8">
                  {active.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-white/30" />
                      <span className="text-sm md:text-base text-white/80 leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {active.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/[0.05] border border-white/10 rounded-full text-[9px] tracking-widest text-white/50 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;