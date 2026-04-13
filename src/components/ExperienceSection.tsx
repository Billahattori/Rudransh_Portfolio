import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Experience {
  title: string;
  subtitle: string;
  location: string;
  fullDescription: string;
  bullets: string[];
}

const experiences: Experience[] = [
  {
    title: "AI/ML Engineer",
    subtitle: "Automated finance systems, boosting efficiency significantly.",
    location: "Nayona Consultancy Services | Sep 2025 - Feb 2026",
    fullDescription: "Developed AI-driven pipelines integrating Oracle EPM and Hyperion Essbase, automating consolidation and cutting prep time by 40%",
    bullets: [
      "Built predictive forecasting models using enterprise data, improving accuracy by 25% across 5 business units and enhancing planning",
      "Automated real-time KPI dashboards, boosting performance tracking efficiency, reducing month-end closing time and errors by 30%.",
    ],
  },
  {
    title: "Data Engineer",
    subtitle: "Optimized data pipelines and AI-driven validation.",
    location: "VDime Innovative Works | Nov 2024 - Jan 2025",
    fullDescription: "Built a data ingestion tool at an IITM startup, mapped 20+ datasets, and achieved more than 100% load success across 3 pilot deployments",
    bullets: [
      "Developed AI agents to generate 100+ SQL integrity checks with over 92% precision, cutting manual validation time by approximately 60%",
      "Evaluated fit across other startup functions at IITM research, selected data quality stream aligned to both firm needs and personal skillset",
    ],
  },
  {
    title: "Research Intern",
    subtitle: "Modeled chaotic vortex transport, optimizing efficiency.",
    location: "IIT Madras | Apr 2023 - Jun 2023",
    fullDescription: "Spearheaded computational research at IIT Madras on model vortex-induced transport, analyzing 10+ setups to optimize mixing efficiency",
    bullets: [
      "Engineered and executed 50+ MATLAB-based simulations using Runge-Kutta methods to assess their behavior under varying flow conditions",
      "Delivered actionable, data-driven insights on chaotic transport via numerical modeling, informing scalable design strategies for industries",
    ],
  },
];

const ExperienceItem = ({ 
  exp, 
  i, 
  activeIdx, 
  setActiveIdx,
  isMobile 
}: { 
  exp: Experience; 
  i: number; 
  activeIdx: number | null;
  setActiveIdx: (idx: number | null) => void;
  isMobile: boolean;
}) => {
  const isOpen = activeIdx === i;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      onMouseEnter={() => !isMobile && setActiveIdx(i)}
      onMouseLeave={() => !isMobile && setActiveIdx(null)}
      className="group relative border-b border-white/10 py-12 md:py-24 transition-all duration-500 cursor-default"
    >
      <motion.div 
        className="absolute inset-0 bg-white/[0.03] -z-10"
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 md:gap-12">
        <div className="w-full md:w-2/5">
          <span className="text-[10px] md:text-sm font-mono tracking-[0.3em] uppercase mb-4 block text-white/60">
            {exp.location}
          </span>
          <h3 className="text-3xl md:text-6xl font-bold text-white leading-[1.1]">
            {exp.title}
          </h3>
        </div>

        <div className="w-full md:w-1/2">
          <p className="text-lg md:text-2xl text-neutral-400 mb-6 font-medium leading-snug">
            {exp.subtitle}
          </p>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-l-2 border-white/20 pl-6 md:pl-8 ml-1">
                  <p className="text-base md:text-xl text-white/90 leading-relaxed mb-6">
                    {exp.fullDescription}
                  </p>
                  
                  <ul className="space-y-4">
                    {exp.bullets.map((bullet, j) => (
                      <motion.li 
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: j * 0.1 }}
                        className="text-sm md:text-lg text-neutral-500 flex items-start gap-3"
                      >
                        <span className="mt-1.5 md:mt-2 text-white text-[8px]">●</span>
                        <span>{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  // Detect Device Type
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle Mobile Scroll Trigger
  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const currentScroll = window.scrollY;
      // If we are scrolling up rapidly (like Back to Top), close all
      if (currentScroll < lastScrollY.current - 50) {
        setActiveIdx(null);
        lastScrollY.current = currentScroll;
        return;
      }
      
      const elements = containerRef.current.querySelectorAll('.group');
      const viewportCenter = window.innerHeight / 2;

      let foundIndex = null;
      elements.forEach((el, idx) => {
        const rect = el.getBoundingClientRect();
        const elementMid = rect.top + rect.height / 2;
        
        // Slightly tighter threshold for mobile scroll activation
        if (elementMid > viewportCenter - 150 && elementMid < viewportCenter + 150) {
          foundIndex = idx;
        }
      });

      setActiveIdx(foundIndex);
      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <section
      id="experience"
      className="min-h-screen px-6 md:px-16 lg:px-32 py-24 md:py-40 bg-transparent relative z-10 overflow-hidden"
    >
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="mb-20 md:mb-32"
      >
        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white uppercase leading-none">
          Professional <br />
          <span className="italic font-serif font-light lowercase text-white/80">
            experience
          </span>
        </h2>
        <p className="text-neutral-500 mt-8 max-w-2xl text-lg md:text-2xl leading-relaxed font-light">
          A journey through strategy, development, and leadership in the tech and finance landscape.
        </p>
      </motion.div>

      <div ref={containerRef} className="relative flex flex-col border-t border-white/10">
        {experiences.map((exp, i) => (
          <ExperienceItem 
            key={exp.title} 
            exp={exp} 
            i={i} 
            activeIdx={activeIdx} 
            setActiveIdx={setActiveIdx}
            isMobile={isMobile}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;