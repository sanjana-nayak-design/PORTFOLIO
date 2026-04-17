import React from "react";
import { motion } from "motion/react";
import { Camera, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { PatternOverlay, SectionHeading, BrutalCard } from "../components/UI";

export const Photography = () => {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="p-8 md:p-24 bg-retro-green border-b-2 border-black relative overflow-hidden min-h-[40vh] flex flex-col justify-center">
        <PatternOverlay type="psychedelic" />
        <Link 
          to="/" 
          className="absolute top-8 left-8 z-20 brutal-border bg-white p-3 hover:bg-black hover:text-white transition-colors group flex items-center gap-2 font-bold uppercase text-sm"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </Link>
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <SectionHeading className="md:text-8xl">FAVOURITE WORKS.</SectionHeading>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="p-8 md:p-24 bg-retro-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10, rotate: idx % 2 === 0 ? 1 : -1 }}
                className="relative group"
              >
                <BrutalCard color="bg-white" className="p-0 overflow-hidden shadow-brutal hover:shadow-brutal-lg transition-shadow">
                  <div className="relative h-[30rem] overflow-hidden">
                    <img 
                      src={idx === 1 
                        ? 'https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&q=80&w=800' 
                        : `https://picsum.photos/seed/photography-${idx}/600/1000`} 
                      alt={idx === 1 ? "AI Character Portrait" : `Visual archive ${idx}`} 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <PatternOverlay type="starburst" />
                      <div className="bg-white p-4 brutal-border-sm rotate-12 relative z-10">
                        <Camera className="text-black scale-150" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 border-t-2 border-black bg-white">
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-bold uppercase text-xs tracking-widest text-gray-500">Vol. 4K // Archive {idx}</p>
                      <p className="text-xs font-mono opacity-50 px-2 py-1 bg-gray-100 border border-black/10">#STUDIO_{idx}</p>
                    </div>
                    <p className="font-display text-2xl text-black">
                      {idx === 1 ? 'AI Character' : 'Cinematic Portraiture'}
                    </p>
                  </div>
                </BrutalCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details / CTA */}
      <section className="p-8 md:p-24 bg-black text-white border-t-2 border-black relative">
        <PatternOverlay type="dots" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="font-display text-4xl md:text-6xl mb-8 uppercase">Let's shoot your vision.</h3>
          <div className="flex flex-wrap justify-center gap-8 text-xl font-bold opacity-80 mb-12 uppercase tracking-wide">
             <span>∙ 4K Resolution</span>
             <span>∙ Color Grading</span>
             <span>∙ Cinematic Direction</span>
             <span>∙ Digital Archiving</span>
          </div>
          <button className="brutal-border px-12 py-6 bg-retro-green text-black font-display text-2xl uppercase hover:-translate-y-2 transition-transform">
            Book a Session
          </button>
        </div>
      </section>
    </div>
  );
};
