import { useState } from "react";
import { motion } from "framer-motion";

const ConnectSection = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (Demo)");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const socials = [
    { label: "LinkedIn", href: "https://linkedin.com/in/rudranshpujari" },
    { label: "GitHub", href: "https://github.com/rudransh-pujari" },
    { label: "Instagram", href: "#" },
    { label: "Email", href: "mailto:rudransh@example.com" }, 
    { label: "Twitter", href: "#" },
  ];

  return (
    <section id="connect" className="relative py-24 md:py-40 px-6 overflow-hidden bg-transparent z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 items-start">
        
        {/* LEFT: THE TITLE & FORM */}
        <div className="lg:col-span-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            <h2 className="text-[18vw] md:text-[12vw] lg:text-[10vw] font-bold tracking-tighter text-white leading-[0.85] md:leading-[0.8] uppercase">
              Let's <br />
              <span className="italic font-serif font-light lowercase text-white">
                connect.
              </span>
            </h2>
          </motion.div>

          {/* FORM */}
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 md:mt-24 max-w-xl space-y-10 md:space-y-12"
          >
            {[
              { id: "name", label: "Name", type: "text" },
              { id: "email", label: "Email", type: "email" },
              { id: "subject", label: "Subject", type: "text" }
            ].map((field) => (
              <div key={field.id} className="group relative">
                <label className="block text-[10px] uppercase tracking-[0.4em] text-white/40 group-focus-within:text-white transition-colors duration-300">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  required
                  value={form[field.id as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 py-3 md:py-4 text-lg md:text-xl text-white focus:outline-none focus:border-white transition-all placeholder:text-white/10"
                  placeholder={`Enter your ${field.id}...`}
                />
              </div>
            ))}
            
            <div className="group relative">
              <label className="block text-[10px] uppercase tracking-[0.4em] text-white/40 group-focus-within:text-white transition-colors duration-300">
                Message
              </label>
              <textarea
                required
                rows={1}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 py-3 md:py-4 text-lg md:text-xl text-white focus:outline-none focus:border-white transition-all resize-none overflow-hidden"
                placeholder="What's on your mind?"
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = "auto";
                  target.style.height = `${target.scrollHeight}px`;
                }}
              />
            </div>

            <button 
              type="submit" 
              className="group relative flex items-center gap-4 text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase text-white transition-colors duration-300"
            >
              <span className="w-12 h-px bg-white/40 group-hover:w-20 group-hover:bg-white transition-all duration-500" />
              Send Message
            </button>
          </motion.form>
        </div>

        {/* RIGHT: SOCIALS */}
        <div className="lg:col-span-4 flex flex-col items-start lg:items-end lg:pt-20">
          <div className="flex flex-col gap-6 md:gap-8 lg:text-right w-full">
            <p className="text-[10px] uppercase tracking-[0.5em] text-white/30 mb-2 md:mb-4">Follow // Contact</p>
            <div className="flex flex-wrap lg:flex-col gap-6 md:gap-8">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center lg:flex-row-reverse gap-3 md:gap-4 text-xs md:text-sm font-mono tracking-widest text-white/50 hover:text-white transition-colors"
                >
                  <span className="text-[9px] md:text-[10px] opacity-40 transition-opacity text-white">
                    0{i + 1}
                  </span>
                  {s.label.toUpperCase()}
                  <span className="hidden lg:block w-0 group-hover:w-8 h-px bg-white transition-all duration-500" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ConnectSection;