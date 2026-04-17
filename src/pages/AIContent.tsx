import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, Sparkles, Binary, Code, ArrowLeft, X, Maximize2 } from "lucide-react";
import { Link } from "react-router-dom";
import { PatternOverlay, SectionHeading, BrutalCard } from "../components/UI";

export const AIContent = () => {
  const [selectedAsset, setSelectedAsset] = useState<string | null>(null);

  const explorations = [
    {
      url: 'https://github.com/sanjana-nayak-design/WEBSITE-IMAGES/blob/main/WhatsApp%20Image%202026-04-17%20at%204.58.56%20PM.jpeg?raw=true',
      type: 'image'
    },
    {
      url: 'https://github.com/sanjana-nayak-design/WEBSITE-IMAGES/blob/main/WhatsApp%20Image%202026-04-17%20at%205.12.07%20PM.jpeg?raw=true',
      type: 'image'
    },
    {
      url: 'https://github.com/sanjana-nayak-design/WEBSITE-IMAGES/blob/main/WhatsApp%20Image%202026-04-17%20at%205.12.09%20PM.jpeg?raw=true',
      type: 'image'
    }
  ];

  const isVideo = (url: string) => {
    return url.match(/\.(mp4|webm|ogg|mov)$/i) || url.includes('raw=true') && url.toLowerCase().includes('.mp4');
  };

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
             <SectionHeading className="md:text-6xl text-retro-purple">AI CONTENT CREATION</SectionHeading>
             <p className="text-2xl font-bold leading-relaxed mb-12">
                Utilizing state-of-the-art AI for Art Direction workflows. Managing complexities of neural networks to deliver consistent, brand-aligned visual assets for modern enterprises.
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
          <SectionHeading className="text-white text-center mb-16">AI Content For Burger Brand.</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {explorations.map((item, idx) => (
              <motion.div 
                 key={idx}
                 whileHover={{ y: -8 }}
                 onClick={() => setSelectedAsset(item.url)}
                 className="relative aspect-[4/5] brutal-border overflow-hidden bg-retro-purple/40 cursor-zoom-in group"
              >
                  <img 
                     src={item.url} 
                     alt={`AI sample ${idx + 1}`} 
                     className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                     referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 text-xs uppercase font-bold brutal-border-sm z-10">
                     EXP-0{idx + 1}
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="brutal-border bg-white p-4">
                        <Maximize2 className="text-black" />
                      </div>
                  </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedAsset && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAsset(null)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-6xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedAsset(null)}
                className="absolute -top-12 right-0 md:-top-16 md:-right-0 text-white hover:text-retro-blue transition-colors flex items-center gap-2 font-bold uppercase"
                aria-label="Close lightbox"
              >
                CLOSE <X size={32} />
              </button>
              {selectedAsset && isVideo(selectedAsset) ? (
                <video 
                  src={selectedAsset} 
                  controls 
                  autoPlay 
                  className="max-w-full max-h-full brutal-border-xl bg-black shadow-[20px_20px_0px_0px_rgba(59,130,246,1)]"
                />
              ) : (
                <img
                  src={selectedAsset || ''}
                  alt="Enlarged exploration"
                  className="max-w-full max-h-full object-contain brutal-border-xl bg-white shadow-[20px_20px_0px_0px_rgba(59,130,246,1)]"
                  referrerPolicy="no-referrer"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
