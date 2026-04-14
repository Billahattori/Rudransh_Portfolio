import { useState } from "react";
import { motion } from "framer-motion";

const ConnectSection = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    const formData = new FormData(e.currentTarget);
    // Replace with your actual Access Key
    formData.append("access_key", "4cca5ef1-7daa-4fbf-9194-a77e549ec806");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Success! Message sent.");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setResult("Error: " + data.message);
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rudransh-pujari-829702195" },
    { label: "GitHub", href: "https://github.com/rudyyyyyy" },
    { label: "Instagram", href: "https://www.instagram.com/rudransh_it_is" },
    { label: "Twitter", href: "#" },
  ];

  return (
    <section id="connect" className="relative py-40 px-6 flex flex-col items-center overflow-hidden bg-transparent z-10">
      
      {/* 1. TITLE */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="text-center mb-24"
      >
        <h2 className="text-[12vw] lg:text-[10vw] font-bold tracking-tighter text-white leading-[0.8] uppercase">
          Let's <br />
          <span className="italic font-serif font-light lowercase text-white">
            connect.
          </span>
        </h2>
      </motion.div>

      {/* 2. FORM BOX */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-xl bg-white/[0.03] p-10 md:p-16 rounded-[2.5rem] border border-white/10 backdrop-blur-md shadow-2xl"
      >
        <form onSubmit={handleSubmit} className="space-y-10">
          {[
            { id: "name", label: "Name", type: "text" },
            { id: "email", label: "Email", type: "email" },
            { id: "subject", label: "Subject", type: "text" }
          ].map((field) => (
            <div key={field.id} className="group">
              <label className="block text-[10px] font-mono uppercase tracking-[0.3em] mb-2 text-white/40 group-focus-within:text-white transition-colors">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.id} // Added name attribute for Web3Forms
                required
                value={form[field.id as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white outline-none focus:border-white transition-colors placeholder:text-white/10"
                placeholder={`Enter your ${field.id}...`}
              />
            </div>
          ))}
          
          <div className="group">
            <label className="block text-[10px] font-mono uppercase tracking-[0.3em] mb-2 text-white/40 group-focus-within:text-white transition-colors">
              Message
            </label>
            <textarea
              name="message" // Added name attribute for Web3Forms
              required
              rows={3}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white outline-none focus:border-white transition-colors resize-none"
              placeholder="What's on your mind?"
            />
          </div>

          <div className="space-y-4">
            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-5 rounded-full bg-white text-black font-bold tracking-[0.3em] uppercase text-xs transition-all hover:bg-neutral-200 active:scale-[0.98] disabled:bg-neutral-500"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {result && (
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-center text-[10px] uppercase tracking-[0.2em] text-white/60"
              >
                {result}
              </motion.p>
            )}
          </div>
        </form>
      </motion.div>

      {/* 3. SOCIALS */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        className="mt-24 flex flex-wrap justify-center gap-x-12 gap-y-8 max-w-4xl"
      >
        {socials.map((s, i) => (
          <motion.a
            key={s.label}
            href={s.href}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group text-xl md:text-3xl font-serif italic tracking-tight text-white/30 hover:text-white transition-colors px-1"
          >
            {s.label}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 ease-in-out group-hover:w-full" />
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default ConnectSection;