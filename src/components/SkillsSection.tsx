import { motion } from "framer-motion";

const hardSkills = [
  { name: "Excel", url: "https://support.microsoft.com/en-gb/office/what-is-excel-94b00f50-5896-479c-b0c5-ff74603b35a3" },
  { name: "Oracle ERP", url: "https://www.oracle.com/erp/what-is-erp/" },
  { name: "C++", url: "https://codeinstitute.net/global/blog/what-is-c/" },
  { name: "Python", url: "https://blog.lewagon.com/skills/introduction-to-python-for-beginners/" },
  { name: "RStudio", url: "https://www.geeksforgeeks.org/r-language/introduction-to-r-studio/" },
  { name: "AutoCAD", url: "https://pinnacleinfotech.com/what-is-autocad/" },
  { name: "MATLAB", url: "https://www.mathworks.com/discovery/what-is-matlab.html" },
  { name: "Arduino", url: "https://www.geeksforgeeks.org/blogs/what-is-arduino/" },
  { name: "Power BI", url: "https://learn.microsoft.com/en-us/power-bi/fundamentals/power-bi-overview" },
  { name: "SQL", url: "https://aws.amazon.com/what-is/sql/" },
  { name: "Hyperion", url: "https://www.oracle.com/in/performance-management/hyperion-planning/" }
];

const softSkills = ["Leadership", "Communication", "Teamwork & Collaboration", "Org. & Event Management", "Analytical Thinking"];

const SkillsSection = () => {
  const blockReveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 0.8, ease: "easeOut" as const }
  };

  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-24 lg:px-48 bg-transparent relative z-10 border-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white uppercase leading-none">
            Technical <br />
            <span className="italic font-serif font-light lowercase text-white">
              Expertise
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-32 gap-y-16 md:gap-y-24">
          
          {/* CORE PRINCIPLES (Left) */}
          <motion.div {...blockReveal} className="space-y-8 md:space-y-12">
            <h3 className="text-[10px] md:text-xs font-mono tracking-[0.3em] uppercase text-white/40 flex items-center gap-4">
              01 // Core Principles <span className="h-px flex-grow bg-white/10" />
            </h3>
            <div className="flex flex-col items-start gap-y-4 md:gap-y-6">
              {softSkills.map((skill) => (
                <div key={skill} className="group relative cursor-default">
                  <span className="text-xl md:text-3xl font-medium text-white/80 group-hover:text-white transition-colors duration-300">
                    {skill}
                  </span>
                  <span 
                    className="absolute left-0 -bottom-1 w-0 h-px transition-all duration-300 group-hover:w-full bg-white/40" 
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* TECHNICAL STACK (Right) */}
          <motion.div 
            {...blockReveal} 
            transition={{ ...blockReveal.transition, delay: 0.2 } as any} 
            className="space-y-8 md:space-y-12"
          >
            <h3 className="text-[10px] md:text-xs font-mono tracking-[0.3em] uppercase text-white/40 flex items-center gap-4">
              02 // Technical Stack <span className="h-px flex-grow bg-white/10" />
            </h3>
            <div className="flex flex-wrap gap-x-8 md:gap-x-12 gap-y-6 md:gap-y-8">
              {hardSkills.map((skill) => (
                <div key={skill.name} className="group relative">
                  <a 
                    href={skill.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl md:text-3xl font-medium text-white/60 group-hover:text-white transition-colors duration-300 cursor-pointer block no-underline"
                  >
                    {skill.name}
                  </a>
                  <span 
                    className="absolute left-0 -bottom-1 w-0 h-px transition-all duration-300 group-hover:w-full bg-white/40" 
                  />
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;