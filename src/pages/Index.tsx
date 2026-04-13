import { useState } from "react"; // Added useState
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ResponsibilitiesSection from "@/components/ResponsibilitiesSection";
import ConnectSection from "@/components/ConnectSection";
import { motion, Variants, AnimatePresence } from "framer-motion"; // Added AnimatePresence
import { Particles } from "@/components/ui/Particles"; 
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";
import CertificationsSection from "@/components/Certifications";
import BackToTop from "@/components/BackToTop";
import { blogs } from "@/data/blogData";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Added icons

const PortfolioContent = () => {
  const recentBlogs = blogs.slice(0, 3);
  
  // Mobile Carousel State
  const [currentBlogIdx, setCurrentBlogIdx] = useState(0);

  const nextBlog = () => setCurrentBlogIdx((prev) => (prev + 1) % recentBlogs.length);
  const prevBlog = () => setCurrentBlogIdx((prev) => (prev - 1 + recentBlogs.length) % recentBlogs.length);

  const scrollFadeVariant: Variants = {
    initial: { opacity: 0, y: 40 },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    },
    viewport: { once: false, amount: 0.1 }
  };

  const buttonTransition = {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
    delay: 0.2
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <Particles className="fixed inset-0 z-0" quantity={100} staticity={30} color="#2dd4bf" />

      <div className="relative z-10 bg-transparent">
        <HeroSection />
        <div id="about" className="px-4 md:px-0"><AboutSection /></div>
        <div id="education" className="px-4 md:px-0"><EducationSection /></div>
        <div id="experience" className="px-4 md:px-0"><ExperienceSection /></div>
        <ProjectSectionWrapper />
        <div id="skills" className="px-4 md:px-0"><SkillsSection /></div>
        <div id="responsibilities" className="px-4 md:px-0"><ResponsibilitiesSection /></div>
        <div className="px-4 md:px-0"><AchievementsSection /></div>
        <div className="px-4 md:px-0"><CertificationsSection /></div>
        
        {/* --- BLOGS PREVIEW SECTION --- */}
        <section id="blogs" className="py-20 md:py-32 bg-transparent relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="w-full mb-10 md:mb-16 px-6 text-center"
          >
            <h2 className="text-4xl md:text-8xl font-bold tracking-tight text-white inline-block leading-tight">
              Latest <span className="italic font-serif font-light text-white">Blogs</span>
            </h2>
          </motion.div>

          <div className="max-w-7xl mx-auto px-6 relative">
            
            {/* MOBILE VIEW CAROUSEL (Arrows only visible on small screens) */}
            <div className="block md:hidden">
              <div className="relative flex items-center">
                {/* Left Arrow */}
                <button 
                  onClick={prevBlog}
                  className="absolute -left-2 z-20 p-2 bg-black/50 border border-white/10 rounded-full text-white backdrop-blur-md active:scale-90 transition-transform"
                >
                  <ChevronLeft size={20} />
                </button>

                <div className="w-full overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={recentBlogs[currentBlogIdx].id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <BlogCard blog={recentBlogs[currentBlogIdx]} />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Right Arrow */}
                <button 
                  onClick={nextBlog}
                  className="absolute -right-2 z-20 p-2 bg-black/50 border border-white/10 rounded-full text-white backdrop-blur-md active:scale-90 transition-transform"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
              
              {/* Pagination Dots for Mobile */}
              <div className="flex justify-center gap-2 mt-6">
                {recentBlogs.map((_, idx) => (
                  <div 
                    key={idx}
                    className={`h-1 transition-all duration-300 ${currentBlogIdx === idx ? "w-4 bg-white" : "w-1 bg-white/20"}`}
                  />
                ))}
              </div>
            </div>

            {/* DESKTOP VIEW (Original Grid) */}
            <motion.div 
              variants={scrollFadeVariant}
              initial="initial"
              whileInView="whileInView"
              viewport={scrollFadeVariant.viewport}
              className="hidden md:grid grid-cols-3 gap-8 mb-12"
            >
              {recentBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </motion.div>

            <motion.div 
              initial="initial"
              whileInView="whileInView"
              viewport={scrollFadeVariant.viewport}
              variants={{
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 }
              }}
              transition={buttonTransition}
              className="text-center mt-12"
            >
              <a 
                href="/blogs" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block px-8 py-4 md:px-10 md:py-4 border border-white/20 text-white tracking-[0.3em] text-[10px] uppercase hover:bg-white hover:text-black transition-all duration-300 rounded-sm"
              >
                View All Blogs
              </a>
            </motion.div>
          </div>
        </section>

        <div id="connect" className="px-4 md:px-0"><ConnectSection /></div>
        <BackToTop /> 
      </div>
    </div>
  );
};

// Extracted BlogCard for cleaner re-use
const BlogCard = ({ blog }: { blog: any }) => (
  <a 
    href={`/blogs?id=${blog.id}`} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="group block w-full h-full"
  >
    <div className="bg-[#111] border border-white/5 rounded-xl overflow-hidden transition-all hover:border-white/10 hover:-translate-y-1 h-full flex flex-col">
      <div className="h-48 md:h-56 overflow-hidden">
        <img 
          src={blog.image} 
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-3 font-serif transition-colors leading-snug">
          {blog.title}
        </h3>
        <p className="text-neutral-500 text-sm line-clamp-3 mb-6 font-serif italic flex-grow">
          {blog.content}
        </p>
        <div className="mt-auto">
          <span className="text-neutral-700 text-[10px] uppercase tracking-widest font-medium">
            {blog.date}
          </span>
        </div>
      </div>
    </div>
  </a>
);

const ProjectSectionWrapper = () => (
  <div id="projects" className="bg-transparent px-4 md:px-0">
    <ProjectsSection />
  </div>
);

const Index = () => <PortfolioContent />;

export default Index;