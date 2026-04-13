import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Particles } from "@/components/ui/Particles";
import { blogs, Blog } from "@/data/blogData";
import { motion, AnimatePresence } from "framer-motion";

const Blogs = () => {
  const [searchParams] = useSearchParams();
  const blogId = searchParams.get("id");
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const found = blogs.find((b) => b.id === blogId);
    setSelectedBlog(found || null);
    window.scrollTo(0, 0);
  }, [blogId]);

  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 }, // Reduced y for smoother mobile entrance
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <Particles className="fixed inset-0 z-0" quantity={60} color="#ffffff" />

      <nav className="relative z-20 p-6 md:p-8 max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg md:text-xl tracking-tighter font-bold">
          RUDRANSH PUJARI
        </Link>
        <Link
          to="/"
          className="text-[9px] md:text-[10px] uppercase tracking-widest text-neutral-500 hover:text-white transition-colors"
        >
          Back to Portfolio
        </Link>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <AnimatePresence mode="wait">
          {!selectedBlog ? (
            <motion.div
              key="grid-view"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-6xl md:text-9xl font-bold mb-12 md:mb-20 tracking-tighter leading-none"
              >
                THE <span className="italic font-serif font-light">JOURNAL</span>
              </motion.h1>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
              >
                {blogs.map((blog) => (
                  <motion.div key={blog.id} variants={fadeInUp}>
                    <Link to={`?id=${blog.id}`} className="group">
                      <div className="border border-white/5 bg-[#0a0a0a] rounded-lg overflow-hidden transition-all hover:border-white/30">
                        <div className="overflow-hidden">
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-56 md:h-64 object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                          />
                        </div>
                        <div className="p-6 md:p-8">
                          <div className="flex flex-wrap gap-2 mb-4">
                            {blog.tags.map((t) => (
                              <span
                                key={t}
                                className="text-[8px] md:text-[9px] text-white/60 tracking-widest uppercase"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                          <h2 className="text-2xl md:text-3xl font-serif mb-4 leading-tight group-hover:text-white transition-colors">
                            {blog.title}
                          </h2>
                          <p className="text-neutral-500 text-[9px] md:text-[10px] uppercase tracking-widest">
                            {blog.date}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ) : (
            <motion.article
              key="article-view"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={staggerContainer}
              className="max-w-3xl mx-auto pt-4 md:pt-10"
            >
              <motion.img
                variants={fadeInUp}
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-[300px] md:h-[500px] object-cover rounded-xl mb-8 md:mb-12 shadow-2xl shadow-white/5"
              />

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mb-6 md:mb-8">
                {selectedBlog.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 md:px-4 md:py-1.5 bg-white/5 rounded-full text-[9px] md:text-[10px] tracking-widest uppercase border border-white/10 text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-7xl font-serif mb-6 md:mb-8 leading-tight text-white"
              >
                {selectedBlog.title}
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-neutral-500 uppercase tracking-widest text-[10px] md:text-xs mb-8 md:mb-12"
              >
                {selectedBlog.date}
              </motion.p>

              <motion.div variants={fadeInUp} className="prose prose-invert max-w-none">
                <p className="text-xl md:text-2xl font-serif italic text-neutral-300 leading-relaxed border-l-4 border-white/20 pl-6 md:pl-8 mb-8 md:mb-10">
                  {selectedBlog.content}
                </p>
                <div className="space-y-6 mb-16 md:mb-20">
                  <p className="text-base md:text-lg text-neutral-400 leading-relaxed md:leading-loose">
                    In the rapidly shifting landscape of today's industries, staying ahead requires more than just technical proficiency; it requires a holistic understanding of how these trends intersect with human behavior and global markets.
                  </p>
                  <p className="text-base md:text-lg text-neutral-400 leading-relaxed md:leading-loose">
                    As we look toward the future, the integration of sustainable practices and ethical leadership will be the defining characteristics of successful ventures. Whether in finance, technology, or design, the core principle remains: creating value that lasts.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="border-t border-white/10 pt-10 md:pt-12 flex justify-center">
                <Link
                  to="/blogs"
                  className="group relative w-full md:w-auto text-center px-8 py-4 md:px-12 md:py-4 border border-white/20 text-white tracking-[0.3em] text-[10px] uppercase overflow-hidden transition-all hover:border-white"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <span className="mr-3 transition-transform group-hover:-translate-x-1">←</span>
                    Return to Journal
                  </span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0"></div>
                  <style>{`.group:hover span { color: black; }`}</style>
                </Link>
              </motion.div>
            </motion.article>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Blogs;