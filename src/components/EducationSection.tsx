import { motion } from "framer-motion";

interface EducationCard {
  name: string;
  detail: string;
  score: string;
  image: string;
  category: string;
}

const educationData: EducationCard[] = [
  { 
    name: "Sishya School", 
    detail: "Class X, ICSE | 2016-17", 
    score: "Score: 91.1%", 
    image: "/assets/sishya.png", 
    category: "Schooling" 
  },
  { 
    name: "Chettinad Vidyashram", 
    detail: "Class XII, CBSE | 2018-19", 
    score: "Score: 94.2%", 
    image: "/assets/chettinad.png", 
    category: "High School" 
  },
  { 
    name: "IIT Tirupati", 
    detail: "B.Tech in Mechanical Engineering | 2020-24", 
    score: "Score: 75.4%", 
    image: "/assets/iit_tirupati.png", 
    category: "B.Tech" 
  },
  { 
    name: "IIT Madras", 
    detail: "BS in Data Science and Applications | 2024-26", 
    score: "Score: 75%", 
    image: "/assets/iit_chennai.png", 
    category: "BS Degree" 
  },
  { 
    name: "IIM Kashipur", 
    detail: "Master of Business Administration (MBA) | 2025-27", 
    score: "Pursuing", 
    image: "/assets/iim.png", 
    category: "MBA" 
  },
];

const RevealText = ({ text }: { text: string }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.h2
      className="text-4xl md:text-8xl font-bold tracking-tighter text-white text-center uppercase break-words px-4"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      {letters.map((letter, index) => (
        <motion.span 
          key={index} 
          variants={child}
          className={letter === " " ? "inline-block" : "inline-block hover:text-white transition-colors duration-300"}
          style={{ color: letter !== " " ? undefined : "transparent" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h2>
  );
};

const TimelineItem = ({ item, index }: { item: EducationCard; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row items-center w-full mb-16 md:mb-32 ${isEven ? "" : "md:flex-row-reverse"}`}>
      
      {/* 1. Content Block */}
      <motion.div
        initial={{ x: isEven ? -30 : 30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-[48%] z-10"
      >
        <div className={`group bg-white/[0.03] border border-white/5 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] backdrop-blur-md hover:border-white/20 transition-all duration-500 ${isEven ? "md:text-right" : "md:text-left"}`}>
          <span className="font-mono font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block text-white/40">
            {item.category}
          </span>

          <h3 className="text-2xl md:text-4xl font-serif italic text-white leading-tight break-words">
            {item.name}
          </h3>

          <p className="text-base md:text-lg text-white/60 mt-4 font-medium leading-relaxed">
            {item.detail}
          </p>

          <div className={`mt-4 flex ${isEven ? "md:justify-end" : "md:justify-start"}`}>
             <span className="bg-white/5 border border-white/10 px-4 py-1 rounded-full text-[10px] md:text-sm font-mono text-white/80">
                {item.score}
             </span>
          </div>
          
          <div className="mt-8 rounded-2xl md:rounded-3xl overflow-hidden h-48 md:h-96 border border-white/10 relative">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        </div>
      </motion.div>

      {/* 2. Central Dot (Hidden on mobile for cleaner vertical stack) */}
      <div className="absolute left-1/2 -ml-2 w-4 h-4 rounded-full bg-white ring-4 ring-white/10 hidden md:block z-10" />

      {/* 3. Empty spacer */}
      <div className="hidden md:block w-[48%]" />
    </div>
  );
};

const EducationSection = () => {
  return (
    <section id="education" className="py-24 md:py-40 px-4 md:px-24 relative overflow-hidden bg-transparent z-10">
      
      <div className="mb-20 md:mb-40 relative z-10">
        <RevealText text="Once Upon A Time..." />
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "60px", md: "100px", opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="h-px bg-white/20 mx-auto mt-6 md:mt-8"
        />
      </div>

      <div className="relative max-w-screen-xl mx-auto z-10">
        {/* Central Line (Hidden on mobile) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[1px] h-full bg-white/20 hidden md:block" />

        <div className="flex flex-col">
          {educationData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;