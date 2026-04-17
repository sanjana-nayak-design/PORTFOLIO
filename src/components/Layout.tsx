import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  Sparkles, 
  Smile, 
  Linkedin, 
  Instagram, 
  Palette,
  Heart
} from "lucide-react";
import { PatternOverlay } from "./UI";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const userName = "Sanjana Nayak";

  return (
    <div className="min-h-screen selection:bg-retro-orange selection:text-white flex flex-col">
      {/* Shared Nav Header */}
      <header className="flex h-24 items-stretch border-b-2 border-black z-50 bg-retro-offwhite sticky top-0">
        <div className="flex-1 flex items-center px-8 border-r-2 border-black">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Sparkles className="mr-3 text-retro-orange" />
            <h2 className="font-display text-2xl uppercase tracking-tighter">{userName}</h2>
          </Link>
        </div>
        <nav className="hidden md:flex items-center px-12 gap-8 font-bold uppercase tracking-widest text-xs">
          <Link to="/design" className="hover:underline underline-offset-8">Design</Link>
          <Link to="/photography" className="hover:underline underline-offset-8">Photography</Link>
          <Link to="/ai-content" className="hover:underline underline-offset-8">AI Content</Link>
          <a href="#contact" className="hover:underline underline-offset-8">Contact</a>
        </nav>
        <div className="w-24 flex items-center justify-center bg-retro-mustard border-l-2 border-black cursor-pointer hover:bg-black hover:text-white transition-colors">
          <Smile size={32} />
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      {/* Shared Footer */}
      <footer id="contact" className="bg-black text-white p-8 md:p-24 relative overflow-hidden">
        <PatternOverlay type="dots" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div className="flex-1">
              <motion.h2 
                className="font-display text-5xl md:text-8xl mb-8 leading-tight"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                Sarcastic yet Competent. <br /> Ready to create. <br />
                <span className="text-retro-pink">LET'S TALK.</span>
              </motion.h2>
              <div className="flex flex-wrap gap-4">
                <button className="brutal-border px-8 py-4 bg-retro-purple text-white font-bold uppercase transition-transform hover:-translate-y-1 active:translate-y-0">
                  Email Me
                </button>
                <div className="flex gap-2">
                  <a href="#" className="w-14 h-14 bg-white text-black brutal-border flex items-center justify-center hover:bg-retro-blue hover:text-white transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="w-14 h-14 bg-white text-black brutal-border flex items-center justify-center hover:bg-retro-pink hover:text-white transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="w-14 h-14 bg-white text-black brutal-border flex items-center justify-center hover:bg-retro-orange hover:text-white transition-colors">
                    <Palette size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="text-right flex flex-col gap-4">
              <p className="font-bold text-sm opacity-50">© 2026 PORTFOLIO — BUILT ON CRAFT</p>
              <p className="font-mono text-xs opacity-40">ORCID ID: 0000-0001-5992-5807</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
