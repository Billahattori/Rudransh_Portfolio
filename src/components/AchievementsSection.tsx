import { motion } from "framer-motion";

const achievements = [
  {
    rank: "8651",
    label: "AIR // JEE ADVANCED",
    description: "Secured out of 1.1 million+ aspirants in one of the world's toughest engineering entrance exams.",
  },
  {
    rank: "7583",
    label: "AIR // JEE MAINS",
    description: "Placed in the top 0.6% nationwide among 1.1 million+ candidates.",
  },
  {
    rank: "98.76",
    label: "PERCENTILE // GATE 2025",
    description: "Ranked in the top 1.24% out of 6.5 lakh+ candidates, showing elite analytical proficiency.",
  },
];

const AchievementsSection = () => {
  const rowVariants = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <section id="achievements" className="relative py-24 md:py-32 px-6 md:px-24 lg:px-48 overflow-hidden bg-transparent z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="mb-16 md:mb-32"
        >
          <h2 className="text-6xl md:text-8xl font-medium tracking-tight text-white leading-tight">
            Major <span className="italic font-serif font-light text-white">Milestones</span>
          </h2>
        </motion.div>

        {/* Structured Rows */}
        <div className="space-y-24 md:space-y-64">
          {achievements.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                {...rowVariants}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-24 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* 1. THE NUMERICAL */}
                <div className="flex-1 w-full flex justify-center md:justify-start">
                  <h2 className="text-[70px] sm:text-[120px] md:text-[200px] font-bold leading-none tracking-tighter text-white selection:bg-white selection:text-black">
                    {item.rank}
                    {item.rank.includes(".") && <span className="text-2xl md:text-6xl font-medium"> %</span>}
                  </h2>
                </div>

                {/* 2. THE CONTENT */}
                <div className={`flex-1 w-full flex flex-col gap-4 md:gap-6 ${
                  isEven 
                  ? "items-center text-center md:items-start md:text-left" 
                  : "items-center text-center md:items-end md:text-right"
                }`}>
                  <span className="font-mono text-[10px] md:text-sm tracking-[0.4em] uppercase text-white/40">
                    {item.label}
                  </span>
                  <p className="text-lg md:text-3xl font-serif italic text-white/60 leading-snug max-w-lg">
                    {item.description}
                  </p>
                  <div className="h-px bg-white/10 w-20 md:w-full md:max-w-[120px]" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;