import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Camera, ArrowLeft, X, Maximize2 } from "lucide-react";
import { Link } from "react-router-dom";
import { PatternOverlay, SectionHeading, BrutalCard } from "../components/UI";

export const Photography = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    {
      url: 'https://github.com/sanjana-nayak-design/WEBSITE-IMAGES/blob/main/WhatsApp%20Image%202026-04-17%20at%204.51.52%20PM.jpeg?raw=true',
      title: 'Cinematic Archive 01'
    },
    {
      url: 'https://github.com/sanjana-nayak-design/WEBSITE-IMAGES/blob/main/WhatsApp%20Image%202026-04-17%20at%204.51.20%20PM.jpeg?raw=true',
      title: 'Cinematic Archive 02'
    },
    {
      url: 'https://github.com/sanjana-nayak-design/WEBSITE-IMAGES/blob/main/WhatsApp%20Image%202026-04-17%20at%204.51.55%20PM.jpeg?raw=true',
      title: 'Cinematic Archive 03'
    },
    {
      url: 'https://github.com/sanjana-nayak-design/WEBSITE-IMAGES/blob/main/WhatsApp%20Image%202026-04-17%20at%204.51.46%20PM.jpeg?raw=true',
      title: 'Cinematic Archive 04'
    },
    {
      url: 'https://github.com/sanjana-nayak-design/WEBSITE-IMAGES/blob/main/WhatsApp%20Image%202026-04-17%20at%204.51.20%20PM%20(2).jpeg?raw=true',
      title: 'Cinematic Archive 05'
    },
    {
      url: 'https://github.com/sanjana-nayak-design/WEBSITE-IMAGES/blob/main/WhatsApp%20Image%202026-04-17%20at%204.51.20%20PM%20(1).jpeg?raw=true',
      title: 'Cinematic Archive 06'
    }
  ];

  const isVideo = (url: string) => {
    return url.match(/\.(mp4|webm|ogg|mov)$/i) || url.includes('raw=true') && url.toLowerCase().includes('.mp4');
  };

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
          <SectionHeading className="md:text-8xl">PHOTOGRAPHY.</SectionHeading>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="p-8 md:p-24 bg-retro-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {photos.map((photo, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="relative group cursor-zoom-in"
                onClick={() => setSelectedImage(photo.url)}
              >
                <BrutalCard color="bg-white" className="p-0 overflow-hidden brutal-border hover:shadow-brutal-lg transition-shadow">
                  <div className="relative h-[45rem] md:h-[55rem] overflow-hidden">
                    <img 
                      src={photo.url} 
                      alt={photo.title} 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="brutal-border bg-white p-4 rotate-12 relative z-10 transition-transform group-hover:rotate-0">
                        <Maximize2 className="text-black scale-150" />
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
                className="absolute -top-12 right-0 md:-top-8 md:-right-8 text-white hover:text-retro-green transition-colors"
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
                  alt="Enlarged photograph"
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
