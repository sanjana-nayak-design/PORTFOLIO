import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { Palette, ArrowRight, ArrowLeft, X, Maximize2 } from "lucide-react";
import { PatternOverlay, SectionHeading, BrutalCard } from "../components/UI";

export const Design = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      title: "ABSTRACT DESIGN",
      img: "https://github.com/sanjana-nayak-design/WEBSITE-IMAGES/blob/main/WhatsApp%20Image%202026-04-17%20at%202.32.18%20PM%20(1).jpeg?raw=true"
    },
    {
      title: "Brochure Design",
      img: "https://github.com/sanjana-nayak-design/WEBSITE-IMAGES/blob/main/BROCHURE.1.png?raw=true"
    },
    {
      title: "UI App Interface",
      img: "https://github.com/sanjana-nayak-design/WEBSITE-IMAGES/blob/main/WhatsApp%20Image%202026-04-17%20at%204.14.27%20PM.jpeg?raw=true"
    },
    {
      title: "Magazine Cover Design",
      img: "https://github.com/sanjana-nayak-design/WEBSITE-IMAGES/blob/main/MAGAZINE%20COVER%20DESIGN%20copy.jpg?raw=true"
    }
  ];

  const isVideo = (url: string) => {
    return url.match(/\.(mp4|webm|ogg|mov)$/i) || url.includes('raw=true') && url.toLowerCase().includes('.mp4');
  };

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
            {projects.map((project, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -8 }}
                className="group"
              >
                <BrutalCard color="bg-white" className="p-0 overflow-hidden brutal-border-xl">
                  <div 
                    className="relative h-96 overflow-hidden bg-retro-purple/10 cursor-zoom-in"
                    onClick={() => setSelectedImage(project.img)}
                  >
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                       <div className="brutal-border bg-white p-4">
                          <Maximize2 className="text-black" />
                       </div>
                    </div>
                  </div>
                  <div className="p-8 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-retro-orange mb-2">0{idx + 1} // Design Exploration</p>
                        <h3 className="font-display text-4xl uppercase">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                </BrutalCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-6xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 md:-top-8 md:-right-8 text-white hover:text-retro-orange transition-colors"
                aria-label="Close lightbox"
              >
                <X size={40} />
              </button>
              {selectedImage && isVideo(selectedImage) ? (
                <video 
                  src={selectedImage} 
                  controls 
                  autoPlay 
                  className="max-w-full max-h-full brutal-border-xl bg-black shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]"
                />
              ) : (
                <img
                  src={selectedImage || ''}
                  alt="Enlarged design"
                  className="max-w-full max-h-full object-contain brutal-border-xl bg-white shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]"
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
