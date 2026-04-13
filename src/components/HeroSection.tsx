import { useEffect, useState, useRef } from "react";
import heroBg from "/assets/hero-bg.jpeg";
import { Menu, X } from "lucide-react"; // Assuming you have lucide-react for the mobile menu icon

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [nameScale, setNameScale] = useState(1);
  const [nameOpacity, setNameOpacity] = useState(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = heroBg;
    img.onload = () => {
      setImageLoaded(true);
      setTimeout(() => setShowContent(true), 800);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      const scrollRatio = Math.min(1, scrollY / heroHeight);
      setOpacity(1 - scrollRatio);
      setNameScale(1 + scrollRatio * 1.2); // Reduced scale factor for better mobile control
      setNameOpacity(Math.max(0, 1 - scrollRatio * 2.5));
    };

    let frameId: number;
    const onScroll = () => {
      frameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frameId);
    };
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    setIsMobileMenuOpen(false); // Close menu if open
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navItems = [
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "responsibilities", label: "Responsibilities" },
    { id: "blogs", label: "Blogs" },
    { id: "connect", label: "Contact" },
  ];

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div ref={heroRef} className="relative h-screen w-full overflow-hidden bg-black z-20">
      {/* GLOBAL LOGO */}
      <a
        href="#"
        onClick={scrollToTop}
        className="fixed top-6 left-6 md:left-10 text-base md:text-lg tracking-[0.2em] font-medium text-white no-underline cursor-pointer z-[100] group"
      >
        RUDRANSH PUJARI
        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
      </a>

      {/* MOBILE MENU TOGGLE */}
      <button 
        className="fixed top-6 right-6 z-[100] text-white md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* MOBILE NAV OVERLAY */}
      <div className={`fixed inset-0 bg-black z-[90] flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="text-2xl tracking-[0.2em] text-white font-light uppercase"
          >
            {item.label}
          </button>
        ))}
      </div>

      <div
        className="absolute inset-0"
        style={{ 
          opacity: imageLoaded ? opacity : 0,
          transition: opacity === 1 ? "opacity 0.7s ease-in" : "none" 
        }}
      >
        <img
          src={heroBg}
          alt="Rudransh"
          className="w-full h-full object-cover object-top"
          style={{ filter: "grayscale(0.3) brightness(0.6)" }}
        />
      </div>

      <div
        className="relative z-10 h-full flex flex-col justify-between"
        style={{ 
          opacity: showContent ? opacity : 0,
          transition: opacity === 1 ? "opacity 1000ms ease-in" : "none"
        }}
      >
        <nav className="flex justify-end items-center px-6 md:px-12 py-6">
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="relative text-sm tracking-[0.15em] text-white transition-colors group"
              >
                {item.label.toUpperCase()}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>
        </nav>

        <div className="flex-1 flex items-center justify-center px-6 pointer-events-none">
          <h1 
            className="text-[3.2rem] sm:text-[4.5rem] md:text-[5rem] lg:text-[7rem] font-bold tracking-tight text-white text-center leading-[0.9]"
            style={{ 
              fontFamily: "'Bowlby One', cursive",
              fontWeight: 400,
              // Responsive translateY: smaller on mobile so it stays centered
              transform: `translateY(clamp(80px, 15vh, 160px)) scale(${nameScale})`,
              opacity: nameOpacity,
              transition: 'none',
            }}
          >
            RUDRANSH PUJARI
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-end px-6 md:px-12 pb-10 gap-4 text-center md:text-left">
          <p className="text-xs md:text-md tracking-[0.1em] text-white uppercase">Based in Chennai, India</p>
          <div className="text-center md:text-right">
            <p className="text-lg md:text-3xl font-light text-white leading-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
              STUDENT AT IIM KASHIPUR
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;