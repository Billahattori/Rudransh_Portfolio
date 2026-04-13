import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const toggleVisibility = () => {
      const eduSection = document.getElementById("education");
      if (eduSection) {
        const selectionBottom = eduSection.offsetTop + eduSection.offsetHeight;
        setIsVisible(window.scrollY > selectionBottom);
      } else {
        // Fallback if ID isn't found
        setIsVisible(window.scrollY > 800);
      }
    };

    // Initial checks
    handleResize();
    
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", toggleVisibility);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={!isMobile ? { scale: 1.1, backgroundColor: "#fff", color: "#000" } : {}}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed z-[1000] flex items-center justify-center transition-all duration-300"
          style={{
            // Position adjustments for mobile vs desktop
            bottom: isMobile ? "24px" : "40px",
            right: isMobile ? "24px" : "40px",
            
            // Size and Shape
            width: isMobile ? "44px" : "auto",
            height: isMobile ? "44px" : "auto",
            borderRadius: isMobile ? "50%" : "0px",
            padding: isMobile ? "0px" : "12px 20px",
            
            // Typography & Visuals
            fontFamily: "serif",
            fontSize: isMobile ? "18px" : "14px",
            backgroundColor: isMobile ? "rgba(255, 255, 255, 0.1)" : "transparent",
            backdropFilter: isMobile ? "blur(10px)" : "none",
            color: "white",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            cursor: "pointer",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          {isMobile ? "↑" : "↑ Top"}
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;