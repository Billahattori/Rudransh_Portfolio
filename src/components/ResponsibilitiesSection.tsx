import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RoleCard {
  roleTitle: string;
  bullets: string[];
  image: string;
}

const roles: RoleCard[] = [
  { 
    roleTitle: "President - IIM Kashipur (2026-27)", 
    bullets: [
      "Represented 1,000+ students, liaising with all external stakeholders to resolve infrastructure and policy-issues.",
      "Oversaw 40+ student bodies, ensuring adherence to processes, and smooth execution of institute-wide initiatives.",
      "Led 10+ flagship events and supervised large budgets, instituting audit mechanisms for transparent fund utilization."
    ], 
    image: "/assets/POR1.png" 
  },
  { 
    roleTitle: "Student General Secretary - IIT Tirupati (2023-24)", 
    bullets: [
      "Represented 1,400+ students, driving structured dialogue with administration to resolve key concerns of students.",
      "Organized 30+ major campus events, hackathons, cultural nights, boosting student engagement by more than 60%.",
      "Doubled institute budget from ₹40L to ₹80L, and restructured the Students’ Constitution to enhance governance."
    ], 
    image: "/assets/POR2.jpeg" 
  },
  { 
    roleTitle: "Sponsorship & Marketing Team - IIT Tirupati (2021-22)", 
    bullets: [
      "Secured corporate sponsorships from 10+ companies, raising over ₹3.2 Lakhs toward Tirutsava 2022 (Fest at IITT).",
      "Initiated and scaled Campus Ambassador Program, driving ~300 signups, resulting in a 3× rise in the brand reach.",
      "Contributed to a 25% growth in Tirutsava’s social media following through targeted content, influencer tie-ups."
    ], 
    image: "/assets/POR3.png" 
  },
  { 
    roleTitle: "UG Head of Guidance and Counselling Unit - IIT Tirupati (2022-23)", 
    bullets: [
      "Facilitated confidential one-on-one counselling sessions for 100+ undergraduate students, promoting well-being.",
      "Served as liaison between students and GCU, improving session accessibility by 40% via active outreach methods.",
      "Organized peer-support campaigns and forums, driving a noted 30% rise in mental health resource utilization."
    ], 
    image: "/assets/POR4.png" 
  },
];

const ResponsibilitiesSection = () => {
  const [bookState, setBookState] = useState<"closed" | "open" | "finished">("closed");
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const totalPages = Math.ceil(roles.length / 2);

  const handleTurnPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    } else {
      setBookState("finished");
    }
  };

  const scrollFadeVariant = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.1 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
  };

  const PageContent = ({
    role,
    pageNum,
    isRightPage,
  }: {
    role: RoleCard;
    pageNum: number;
    isRightPage?: boolean;
  }) => (
    <div className={`flex-1 flex flex-col p-8 md:p-14 pb-24 relative bg-[#e8e4d9] text-neutral-800 h-full ${isRightPage ? 'md:rounded-r-3xl' : 'md:rounded-l-md'} rounded-lg md:rounded-none shadow-xl md:shadow-none`}>
      {/* Paper texture lines */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#888 1px, transparent 1px)",
          backgroundSize: "100% 2.8rem",
          marginTop: "3.5rem",
        }}
      />

      <span className="text-black/40 font-mono text-[10px] mb-5 z-10 tracking-widest uppercase">
        REF NO. — 00{pageNum}
      </span>

      <div className="w-full h-48 md:h-72 mb-8 rounded-sm overflow-hidden border border-neutral-400/20 shadow-sm z-10 bg-neutral-200">
        <img
          src={role.image}
          alt={role.roleTitle}
          className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
        />
      </div>

      <h3 className="text-xl md:text-2xl font-bold mb-6 font-serif z-10 border-b border-neutral-400/30 pb-3 text-neutral-900 leading-tight">
        {role.roleTitle}
      </h3>

      <ul className="space-y-4 z-10">
        {role.bullets.map((bullet, idx) => (
          <li key={idx} className="text-sm md:text-lg leading-relaxed font-serif text-neutral-700 italic flex gap-3">
            <span className="text-black/20 mt-1.5 text-xs">/</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {isRightPage && !isMobile && (
        <div className="absolute bottom-6 right-10 z-30">
          <button
            onClick={handleTurnPage}
            className="group flex items-center gap-2 bg-neutral-900 text-white px-6 py-2.5 rounded-sm border border-neutral-700 transition-all duration-300 shadow-md font-serif italic text-sm hover:bg-neutral-800"
          >
            {currentPage === totalPages - 1 ? "Close Volume" : "Next Entry"}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      )}
    </div>
  );

  return (
    <section id="responsibilities" ref={ref} className="bg-transparent relative z-10 min-h-screen flex flex-col justify-center py-20 md:py-32 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="w-full mb-12 md:mb-24 px-6"
      >
        <h2 className="text-5xl md:text-9xl font-bold tracking-tight text-white leading-none text-center">
          Positions of <br />
          <span className="italic font-serif font-light text-neutral-500">Responsibility</span>
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto w-full px-6">
        {isMobile ? (
          /* MOBILE VIEW: Stacked Editorial Layout */
          <div className="flex flex-col gap-10">
            {roles.map((role, idx) => (
              <motion.div
                key={idx}
                {...scrollFadeVariant}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                {/* Visual "Tape" element to match the archive vibe */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/10 backdrop-blur-md z-20 shadow-sm border border-white/5 rotate-1" />
                <PageContent role={role} pageNum={idx + 1} />
              </motion.div>
            ))}
          </div>
        ) : (
          /* DESKTOP VIEW: Book Interaction */
          <motion.div {...scrollFadeVariant} className="w-full">
            <AnimatePresence mode="wait">
              {bookState === "closed" && (
                <motion.div
                  key="cover"
                  initial={{ rotateY: -15, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: -90, opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  onClick={() => setBookState("open")}
                  className="mx-auto w-full max-w-xl h-[750px] bg-[#2a2a2a] rounded-l-md rounded-r-3xl border-l-[14px] border-[#1a1a1a] shadow-2xl flex items-center justify-center cursor-pointer group"
                >
                  <div className="text-center p-14 border border-white/5 m-8 h-[calc(100%-4rem)] w-[calc(100%-4rem)] flex flex-col justify-center rounded-r-2xl bg-[#242424]">
                    <h3 className="font-mono text-xs tracking-[0.4em] mb-8 text-white/40">ARCHIVE VOL. I</h3>
                    <h2 className="text-4xl font-serif text-neutral-300 tracking-tight mb-12">Leadership & <br /> Engagement</h2>
                    <div className="w-12 h-px mx-auto group-hover:w-24 transition-all duration-700 bg-white/30" />
                    <p className="mt-12 text-neutral-600 text-[11px] uppercase tracking-[0.5em] font-light">Click to Open</p>
                  </div>
                </motion.div>
              )}

              {bookState === "open" && (
                <motion.div
                  key="open-book"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  className="relative w-full flex flex-col md:flex-row min-h-[850px] shadow-2xl rounded-3xl"
                >
                  <div className="absolute left-1/2 top-0 bottom-0 w-16 bg-gradient-to-r from-black/15 via-black/30 to-black/15 -translate-x-1/2 z-20 hidden md:block" />
                  <div className="flex flex-col md:flex-row w-full bg-[#1a1a1a] p-1.5 rounded-3xl overflow-hidden">
                    <div className="flex-1 flex border-r border-neutral-400/10">
                      <AnimatePresence mode="popLayout">
                        <motion.div 
                          key={`left-${currentPage}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="w-full"
                        >
                          <PageContent role={roles[currentPage * 2]} pageNum={currentPage * 2 + 1} />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                    <div className="flex-1 flex">
                      <AnimatePresence mode="popLayout">
                        {roles[currentPage * 2 + 1] && (
                          <motion.div 
                            key={`right-${currentPage}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="w-full"
                          >
                            <PageContent role={roles[currentPage * 2 + 1]} pageNum={currentPage * 2 + 2} isRightPage={true} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              )}

              {bookState === "finished" && (
                <motion.div
                  key="back-cover"
                  initial={{ rotateY: 90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  className="mx-auto w-full max-w-xl h-[750px] bg-[#2a2a2a] rounded-r-md rounded-l-3xl border-r-[14px] border-[#1a1a1a] shadow-2xl flex items-center justify-center"
                >
                  <button 
                    onClick={() => { setBookState("closed"); setCurrentPage(0); }} 
                    className="text-xs text-neutral-500 hover:text-white transition-all tracking-[0.4em] uppercase underline underline-offset-8"
                  >
                    Reset Archive
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ResponsibilitiesSection;