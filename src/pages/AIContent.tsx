import React from "react";
import { motion } from "motion/react";
import { Cpu, Sparkles, Binary, Code, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { PatternOverlay, SectionHeading, BrutalCard } from "../components/UI";

export const AIContent = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="p-8 md:p-24 bg-retro-blue border-b-2 border-black relative overflow-hidden flex flex-col items-center justify-center min-h-[70vh]">
        <PatternOverlay type="checker" />
        <Link 
          to="/" 
          className="absolute top-8 left-8 z-20 brutal-border bg-white p-3 hover:bg-black hover:text-white transition-colors group flex items-center gap-2 font-bold uppercase text-sm"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </Link>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <SectionHeading className="md:text-[12rem] text-white">AI VISION.</SectionHeading>
        </div>
      </section>

      {/* Main Feature / Vision */}
      <section className="p-8 md:p-24 bg-retro-offwhite relative overflow-hidden">
        <PatternOverlay type="psychedelic" />
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
             <SectionHeading className="md:text-6xl">THE WORKFLOW.</SectionHeading>
             <p className="text-2xl font-bold leading-relaxed mb-12">
                Utilizing state-of-the-art AI for Art Direction workflows. Managing complexities of neural networks to deliver consistent, brand-aligned visual assets.
             </p>
             <div className="space-y-6">
                <div className="brutal-border p-8 bg-white hover:bg-retro-pink transition-colors cursor-default">
                   <div className="flex items-center gap-4 mb-4">
                      <Binary className="text-retro-purple" />
                      <h4 className="font-display text-2xl uppercase">PROMPT MASTERY.</h4>
                   </div>
                   <p className="font-medium opacity-70">Crafting precise textual guides to steer generative models toward intentional outcomes.</p>
                </div>
                <div className="brutal-border p-8 bg-white hover:bg-retro-blue transition-colors cursor-default text-layer-blue">
                   <div className="flex items-center gap-4 mb-4">
                      <Cpu className="text-retro-blue" />
                      <h4 className="font-display text-2xl uppercase">VISUAL REFINEMENT.</h4>
                   </div>
                   <p className="font-medium opacity-70 text-black">Iterative editing and upscaling to bring raw AI outputs to production quality standards.</p>
                </div>
                <div className="brutal-border p-8 bg-white hover:bg-retro-green transition-colors cursor-default">
                   <div className="flex items-center gap-4 mb-4">
                      <Sparkles className="text-retro-orange" />
                      <h4 className="font-display text-2xl uppercase">ART DIRECTION.</h4>
                   </div>
                   <p className="font-medium opacity-70">Ensuring every AI-generated asset adheres to strict brand guidelines and aesthetic themes.</p>
                </div>
             </div>
          </div>
          <div className="order-1 lg:order-2">
             <div className="brutal-border-xl p-2 bg-retro-blue rotate-3">
                <img 
                   src="https://images.unsplash.com/photo-1675272112956-6556e431525a?auto=format&fit=crop&q=80&w=1000" 
                   alt="AI Concept Art"
                   className="w-full h-full object-cover brutal-border"
                   referrerPolicy="no-referrer"
                />
                <div className="bg-white p-4 border-t-2 border-black flex justify-between items-center text-xs font-mono">
                   <span>ID // AEON-990</span>
                   <span className="bg-retro-orange px-2 py-0.5 border border-black text-white font-bold tracking-tighter">RENDER_4K_P01</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Grid of Samples */}
      <section className="p-8 md:p-24 bg-black border-t-2 border-black">
        <div className="max-w-7xl mx-auto">
          <SectionHeading className="text-white text-center mb-16">AI EXPLORATIONS.</SectionHeading>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
              <motion.div 
                 key={idx}
                 whileHover={{ scale: 1.05 }}
                 className="relative aspect-square brutal-border overflow-hidden bg-retro-purple/40"
              >
                  <img 
                     src={`https://picsum.photos/seed/ai-exploration-${idx}/600/600`} 
                     alt={`AI sample ${idx}`} 
                     className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                     referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 bg-white text-black px-2 py-0.5 text-[10px] uppercase font-bold brutal-border-sm">
                     EXP-{idx}
                  </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
