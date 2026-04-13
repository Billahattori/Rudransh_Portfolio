import { motion } from "framer-motion";

const CertificationsSection = () => {
  const certificates = [
    { 
      id: 1, 
      title: "Full Stack Development", 
      issuer: "Google", 
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800", 
      link: "#", 
      description: "Comprehensive study of modern web architectures and cloud deployment." 
    },
    { 
      id: 2, 
      title: "Advanced React Patterns", 
      issuer: "Meta", 
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800", 
      link: "#", 
      description: "Mastering hooks, performance optimization, and scalable component design." 
    },
    { 
      id: 3, 
      title: "Cloud Practitioner", 
      issuer: "AWS", 
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800", 
      link: "#", 
      description: "Foundational knowledge of cloud platform security and infrastructure." 
    },
    { 
      id: 4, 
      title: "UI/UX Design Systems", 
      issuer: "Microsoft", 
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800", 
      link: "#", 
      description: "Creating accessible and cohesive design languages for enterprise apps." 
    },
    { 
      id: 5, 
      title: "Data Science Specialization", 
      issuer: "IBM", 
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", 
      link: "#", 
      description: "Statistical analysis and machine learning model implementation." 
    }
  ];

  return (
    <section id="certifications" className="relative py-24 md:py-32 px-6 md:px-16 lg:px-48 overflow-hidden bg-transparent z-10">
      
      {/* 1. TITLE */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="mb-16 md:mb-24 text-left"
      >
        <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white">
          <span className="italic font-serif font-light">
            Certificates
          </span>
        </h2>
      </motion.div>

      {/* 2. CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10">
        {certificates.map((cert, i) => (
          <motion.a
            key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ 
              delay: i * 0.1, 
              duration: 0.6, 
              ease: "easeOut"
            }}
            className="group relative block bg-white/[0.03] border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-white/20 transition-all duration-500"
          >
            {/* Image Container - Height reduced for mobile to fit more on screen */}
            <div className="relative h-48 md:h-56 w-full overflow-hidden">
              <img 
                src={cert.image} 
                alt={cert.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            <div className="p-6 md:p-8">
              <span className="text-[9px] md:text-[10px] font-mono tracking-[0.3em] uppercase block mb-2 md:mb-3 text-white/40">
                {cert.issuer}
              </span>
              <h3 className="text-lg md:text-xl font-serif italic text-white mb-3 md:mb-4 group-hover:text-white transition-colors">
                {cert.title}
              </h3>
              <p className="text-xs md:text-sm text-white/50 leading-relaxed mb-6">
                {cert.description}
              </p>
              
              <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-widest text-white uppercase opacity-60 group-hover:opacity-100 transition-opacity">
                <span>View Certificate</span>
                <div className="h-px w-6 md:w-8 bg-white group-hover:w-16 transition-all duration-500" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;