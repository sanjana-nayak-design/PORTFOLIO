import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Palette, ExternalLink, ArrowRight, ArrowLeft } from "lucide-react";
import { PatternOverlay, SectionHeading, BrutalCard } from "../components/UI";

export const Design = () => {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="p-8 md:p-24 bg-retro-orange border-b-2 border-black relative overflow-hidden min-h-[40vh] flex flex-col justify-center">
        <PatternOverlay type="wavy" />
        <Link 
          to="/" 
          className="absolute top-8 left-8 z-20 brutal-border bg-white p-3 hover:bg-black hover:text-white transition-colors group flex items-center gap-2 font-bold uppercase text-sm"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </Link>
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <SectionHeading className="md:text-8xl">DESIGN.</SectionHeading>
        </div>
      </section>

      {/* Case Studies / Dummy Projects */}
      <section className="p-8 md:p-24 bg-retro-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1, 2, 3, 4].map((idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -8 }}
                className="group"
              >
                <BrutalCard color="bg-white" className="p-0 overflow-hidden brutal-border-xl">
                  <div className="relative h-96 overflow-hidden bg-retro-purple/10">
                    <img 
                      src={`https://picsum.photos/seed/design-${idx}/1000/600`} 
                      alt={`Design ${idx}`} 
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 p-8">
                       <p className="text-white text-xl font-bold text-center leading-relaxed">
                          Developing visual systems for forward-thinking brands in 2026.
                       </p>
                    </div>
                  </div>
                  <div className="p-8 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-retro-orange mb-2">0{idx} // Design Exploration</p>
                        <h3 className="font-display text-4xl uppercase">Project Alpha {idx}</h3>
                      </div>
                      <ExternalLink className="text-black/50 hover:text-black cursor-pointer" />
                    </div>
                  </div>
                </BrutalCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
