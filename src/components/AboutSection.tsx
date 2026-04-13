import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const aboutPhoto = "public/R1.jpeg";

/** Renders the entire text block with a single fade+slide animation */
const FadeInBlock = ({
  text,
  className = "",
  delay = 0,
  tealWord,
}: {
  text: string;
  className?: string;
  delay?: number;
  tealWord?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const renderContent = () => {
    if (!tealWord) return text;

    return text.split(" ").map((word, i) => {
      const isTeal = word.replace(/[.,!?]/g, "") === tealWord;
      return (
        <span
          key={i}
          className="mr-[0.3em] inline-block whitespace-nowrap"
          style={isTeal ? { color: "hsl(var(--teal))" } : {}}
        >
          {word}
        </span>
      );
    });
  };

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      animate={
        isInView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: 20, filter: "blur(4px)" }
      }
      transition={{
        duration: 0.8,
        delay: delay,
        ease: "easeOut",
      }}
    >
      {renderContent()}
    </motion.span>
  );
};

const AboutSection = () => {
  const photoRef = useRef<HTMLDivElement>(null);
  const isPhotoInView = useInView(photoRef, { once: false, amount: 0.3 });

  const sectionRef = useRef<HTMLDivElement>(null);
  const isSectionInView = useInView(sectionRef, { once: false, amount: 0.15 });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 py-20 bg-transparent relative z-10 overflow-hidden"
    >
      <motion.div
        animate={isSectionInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-[90rem] w-full mx-auto"
      >
        <div className="mb-10">
          <span
            className="text-xs md:text-md tracking-[0.3em] font-medium"
            style={{ color: "hsl(var(--teal))" }}
          >
            —— WELCOME
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content 
            order-1 (Mobile: Top) -> lg:order-1 (Laptop: Left)
          */}
          <div className="flex flex-col space-y-8 md:space-y-12 order-1 lg:order-1">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-foreground max-w-4xl">
              <FadeInBlock text="Hi, I'm Rudransh" delay={0} />
              <br className="hidden md:block" />
              <FadeInBlock
                text="I craft strategies for impactful outcomes"
                delay={0.2}
                tealWord="strategies"
              />
            </h2>

            <div className="max-w-2xl space-y-6">
              <div className="text-base md:text-lg text-muted-foreground leading-relaxed">
                <FadeInBlock 
                  text="I'm a student at IIM Kashipur with a keen interest in technology, design, and innovation. I work at the intersection of business strategy and emerging technologies, exploring data-driven solutions and product thinking to create meaningful impact." 
                  delay={0.4} 
                />
              </div>
              <div className="text-base md:text-lg text-muted-foreground leading-relaxed">
                <FadeInBlock 
                  text="I like clarity. I like systems. I like when things make sense." 
                  delay={0.6} 
                />
              </div>
            </div>
          </div>

          {/* Right Column: Photo 
            order-2 (Mobile: Bottom) -> lg:order-2 (Laptop: Right)
          */}
          <motion.div
            ref={photoRef}
            initial={{ opacity: 0, x: 50 }}
            animate={
              isPhotoInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 50 }
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full flex justify-center lg:justify-end order-2 lg:order-2"
          >
            <div className="relative group w-full max-w-[320px] md:max-w-[380px] aspect-[2/3] lg:h-[550px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={aboutPhoto}
                alt="Rudransh Pujari"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
