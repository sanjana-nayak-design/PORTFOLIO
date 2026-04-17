import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  Smile, 
  Linkedin, 
  X,
  Mail,
  Heart
} from "lucide-react";
import { PatternOverlay } from "./UI";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const userName = "Sanjana Nayak";
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [showAboutPopup, setShowAboutPopup] = useState(false);
  const email = "sanjananayaku1234@gmail.com";

  return (
    <div className="min-h-screen selection:bg-retro-orange selection:text-white flex flex-col">
      {/* Shared Nav Header */}
      <header className="flex h-24 items-stretch border-b-2 border-black z-50 bg-retro-offwhite sticky top-0">
        <div className="flex-1 flex items-center px-8 border-r-2 border-black">
          <button 
            onClick={() => setShowAboutPopup(true)} 
            className="flex items-center hover:opacity-80 transition-opacity cursor-pointer group"
          >
            <Sparkles className="mr-3 text-retro-orange group-hover:rotate-12 transition-transform" />
            <h2 className="font-display text-2xl uppercase tracking-tighter">{userName}</h2>
          </button>
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
      <footer id="contact" className="bg-black text-white relative overflow-hidden min-h-[600px] md:min-h-[800px] flex flex-col items-end justify-center p-8 md:p-24">
        {/* Blended Background Image - Left Side */}
        <div className="absolute inset-y-0 left-0 w-full md:w-3/4 lg:w-1/2 overflow-hidden pointer-events-none z-0">
          <img 
            src="https://github.com/sanjana-nayak-design/WEBSITE-IMAGES/blob/main/WhatsApp%20Image%202026-04-17%20at%202.35.12%20PM%20(1).jpeg?raw=true" 
            alt="Contact Background"
            className="w-full h-full object-cover grayscale opacity-40 md:opacity-60"
            referrerPolicy="no-referrer"
          />
          {/* Gradient for blending */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/20 to-black" />
          <div className="absolute inset-0 bg-retro-purple/5" />
        </div>

        <PatternOverlay type="dots" />
        
        <div className="max-w-7xl w-full relative z-10 text-right">
          <div className="max-w-5xl ml-auto">
            <motion.h2 
              className="font-display text-4xl md:text-[7rem] mb-12 leading-[0.85] uppercase tracking-tighter"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              Sarcastic <br />
              <span className="text-white">Yet</span> <br />
              <span className="text-retro-mustard">Competent.</span> <br /> 
              <span className="text-white">Ready to</span> <br />
              <span className="text-retro-pink">CREATE.</span>
            </motion.h2>

            <div className="flex flex-wrap gap-6 justify-end items-center mb-16">
              <button 
                onClick={() => setShowEmailPopup(true)}
                className="brutal-border-lg px-12 py-6 bg-retro-purple text-white font-bold text-xl uppercase transition-all hover:-translate-y-2 hover:translate-x-1 active:translate-y-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
              >
                Email Me
              </button>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/sanjana-nayak-25b99a3b5" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-20 h-20 bg-white text-black brutal-border-lg flex items-center justify-center hover:bg-retro-blue hover:text-white transition-all hover:-translate-y-2"
                >
                  <Linkedin size={32} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showEmailPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowEmailPopup(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="relative bg-white brutal-border-xl p-8 md:p-12 max-w-lg w-full z-10"
            >
              <button 
                onClick={() => setShowEmailPopup(false)}
                className="absolute top-4 right-4 hover:rotate-90 transition-transform p-2"
              >
                <X size={24} />
              </button>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-retro-purple text-white brutal-border-lg flex items-center justify-center mb-6">
                  <Mail size={40} />
                </div>
                <h3 className="font-display text-4xl mb-4 uppercase tracking-tighter">Reach Out</h3>
                <p className="font-bold text-xl mb-6 text-black/60">I'm ready to create. Shoot me a line at:</p>
                <div className="bg-retro-offwhite brutal-border p-4 w-full mb-8 select-all group cursor-copy" onClick={() => {
                  navigator.clipboard.writeText(email);
                  // Optional: add a "copied" state/toast
                }}>
                  <p className="font-mono text-lg break-all">{email}</p>
                </div>
                <div className="flex gap-4 w-full">
                  <a 
                    href={`mailto:${email}`}
                    className="flex-1 brutal-border py-4 bg-retro-orange text-white font-bold uppercase hover:bg-black transition-colors"
                  >
                    Open Mail
                  </a>
                  <button 
                    onClick={() => setShowEmailPopup(false)}
                    className="flex-1 brutal-border py-4 bg-white font-bold uppercase hover:bg-gray-100 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showAboutPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAboutPopup(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, x: -20, opacity: 0 }}
              animate={{ scale: 1, x: 0, opacity: 1 }}
              exit={{ scale: 0.9, x: -20, opacity: 0 }}
              className="relative bg-white brutal-border-xl max-w-4xl w-full z-10 grid grid-cols-1 md:grid-cols-2 overflow-hidden"
            >
              <button 
                onClick={() => setShowAboutPopup(false)}
                className="absolute top-4 right-4 hover:rotate-90 transition-transform p-2 z-20 bg-white/80 rounded-full md:bg-transparent"
              >
                <X size={24} />
              </button>
              
              <div className="relative h-64 md:h-full overflow-hidden border-b-2 md:border-b-0 md:border-r-2 border-black">
                <img 
                  src="https://github.com/sanjana-nayak-design/WEBSITE-IMAGES/blob/main/WhatsApp%20Image%202026-04-17%20at%205.19.52%20PM.jpeg?raw=true" 
                  alt="Sanjana Nayak" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-center bg-retro-offwhite relative">
                <PatternOverlay type="dots" />
                <div className="relative z-10">
                  <span className="font-bold text-retro-orange uppercase tracking-widest text-sm mb-4 block">About Me</span>
                  <h3 className="font-display text-4xl md:text-5xl mb-6 uppercase tracking-tighter leading-none">
                    Hello! I'm <br />
                    <span className="text-retro-pink">Sanjana Nayak</span>
                  </h3>
                  <p className="font-medium text-lg md:text-xl text-black/80 leading-relaxed mb-8">
                    I'm a BA student in Graphic Design & Digital Media Marketing at MIC, MAHE, Manipal. 
                    I love to create visually appealing content through my design and photography skills. :)
                  </p>
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => setShowAboutPopup(false)}
                      className="brutal-border px-8 py-4 bg-black text-white font-bold uppercase hover:bg-retro-pink transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
