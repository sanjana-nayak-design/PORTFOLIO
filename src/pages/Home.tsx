import React from "react";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  Camera, 
  Palette, 
  Mail, 
  ExternalLink,
  Smile,
  Sparkles,
  Heart,
  Laptop,
  Paintbrush
} from "lucide-react";
import { Link } from "react-router-dom";
import { PatternOverlay, SectionHeading, BrutalCard } from "../components/UI";

export const Home = () => {
  const userName = "Sanjana Nayak";

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-6rem)] flex flex-col bg-retro-offwhite overflow-hidden border-b-2 border-black">
        <div className="flex-1 relative flex flex-col items-center justify-center p-8 overflow-hidden">
          {/* Wavy Rainbow Stripes in Background */}
          <div className="absolute inset-0 z-0 flex flex-col justify-center opacity-70 pointer-events-none">
             {[
               "bg-retro-pink",
               "bg-retro-blue",
               "bg-retro-mustard",
               "bg-retro-orange",
               "bg-retro-green"
             ].map((color, i) => (
               <motion.div 
                 key={i} 
                 className={`h-12 w-[150%] -rotate-2 -ml-[25%] ${color} border-y border-black`} 
                 animate={{ rotate: i % 2 === 0 ? [-2, 2, -2] : [2, -2, 2] }}
                 transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                 style={{ 
                   transform: `rotate(${i % 2 === 0 ? '-2deg' : '2deg'}) translateY(${(i - 2) * 20}px)`
                 }}
               />
             ))}
          </div>

          <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
            {/* Main Branding Stickers */}
            <div className="flex flex-col items-center gap-2 mb-8 text-center sm:text-left">
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="font-display text-5xl sm:text-7xl md:text-[11rem] leading-none uppercase text-layer-pink text-center"
              >
                CREATIVE
              </motion.div>
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="font-display text-5xl sm:text-7xl md:text-[10rem] leading-none uppercase text-layer-yellow -mt-6 md:-mt-10"
              >
                PORTFOLIO
              </motion.div>
            </div>

            {/* Sticker Elements */}
            <motion.div 
              className="absolute -top-12 -left-4 md:left-20 bg-retro-green brutal-border-lg px-6 py-4 rotate-12 flex items-center justify-center rounded-full hidden sm:flex"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <span className="font-display text-2xl uppercase">EST 2026</span>
            </motion.div>

            <motion.div 
              className="absolute top-20 right-4 md:right-40 bg-retro-blue brutal-border p-4 -rotate-6 hidden lg:block"
              animate={{ rotate: [-6, 6, -6] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <div className="w-20 h-20 pattern-starburst rounded-full border-2 border-black flex items-center justify-center">
                <motion.div
                  animate={{ 
                    color: ["#FD5A46", "#FB7DA8", "#552CB7", "#00995E", "#058CD7"],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Heart fill="currentColor" size={40} />
                </motion.div>
              </div>
            </motion.div>

            {/* Browser Window Overlay */}
            <motion.div 
              className="w-full max-w-xl brutal-border-xl bg-retro-offwhite mt-12 overflow-hidden"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-white border-b-2 border-black p-3 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-retro-orange border border-black" />
                <div className="w-3 h-3 rounded-full bg-retro-mustard border border-black" />
                <div className="w-3 h-3 rounded-full bg-retro-green border border-black" />
              </div>
              <div className="p-8 text-center bg-white relative">
                <PatternOverlay type="dots" />
                <p className="relative z-10 text-xl md:text-2xl font-bold mb-8 leading-relaxed max-w-md mx-auto text-black">
                   Creative specializing in Design, Photography & AI Content Art Direction.
                </p>
                <div className="relative z-10 brutal-border px-10 py-5 bg-retro-pink text-black inline-block">
                  <div className="flex items-center gap-6">
                    <Camera size={28} />
                    <Paintbrush size={28} />
                    <Laptop size={28} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Marquee Ticker */}
        <div className="h-14 bg-black border-t-2 border-black flex items-center text-white overflow-hidden uppercase font-bold text-lg">
          <div className="marquee-content whitespace-nowrap">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <span key={i} className="px-8 whitespace-nowrap">CREATIVE SOLUTIONS FOR BOLD BRANDS / DESIGNER / PHOTOGRAPHER / AI ARTIST / </span>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Quick Nav */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-b-1 border-black">
        {[
          { label: 'DESIGN', path: '/design', color: 'hover:bg-retro-orange' },
          { label: 'PHOTOGRAPHY', path: '/photography', color: 'hover:bg-retro-green' },
          { label: 'AI CONTENT', path: '/ai-content', color: 'hover:bg-retro-blue' }
        ].map((link, i) => (
          <Link
            key={link.label}
            to={link.path}
            className={`
              relative py-16 px-6 text-2xl font-display uppercase border-black transition-colors duration-300 text-center flex flex-col items-center justify-center gap-4
              ${i !== 2 ? 'md:border-r-1' : ''} border-b-1 md:border-b-0
              ${link.color}
              group
            `}
          >
            <span className="relative z-10 group-hover:text-white transition-colors">{link.label}</span>
            <ArrowRight className="group-hover:translate-x-2 transition-transform group-hover:text-white" />
          </Link>
        ))}
      </section>

      {/* Favourite Works Section */}
      <section className="p-8 md:p-24 bg-retro-green border-b-1 border-black relative overflow-hidden">
        <PatternOverlay type="starburst" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading>FAVOURITE WORKS.</SectionHeading>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
            {[
              {
                title: 'AI Character',
                img: 'https://github.com/sanjana-nayak-design/WEBSITE-IMAGES/blob/main/WhatsApp%20Image%202026-04-17%20at%202.22.18%20PM.jpeg?raw=true'
              },
              {
                title: 'Nature Photography',
                img: 'https://github.com/sanjana-nayak-design/WEBSITE-IMAGES/blob/main/WhatsApp%20Image%202026-04-17%20at%204.03.39%20PM.jpeg?raw=true'
              },
              {
                title: 'Food Photography',
                img: 'https://github.com/sanjana-nayak-design/WEBSITE-IMAGES/blob/main/WhatsApp%20Image%202026-04-17%20at%202.34.03%20PM.jpeg?raw=true'
              },
              {
                title: 'Moodboard Collage Design',
                img: 'https://github.com/sanjana-nayak-design/WEBSITE-IMAGES/blob/main/WhatsApp%20Image%202026-04-17%20at%202.35.12%20PM.jpeg?raw=true'
              }
            ].map((work, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.02, rotate: idx % 2 === 0 ? 0.5 : -0.5 }}
                className="group"
              >
                <BrutalCard color="bg-white" className="p-0 overflow-hidden brutal-border-xl h-full">
                  <div className="relative h-80 sm:h-[30rem] overflow-hidden">
                    <img 
                      src={work.img} 
                      alt={`Favourite work ${idx + 1}`} 
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all" />
                  </div>
                  <div className="p-6 border-t-2 border-black bg-white">
                    <p className="font-bold uppercase text-xs tracking-widest text-gray-400 mb-1">Featured No. 0{idx + 1}</p>
                    <p className="font-display text-2xl text-black">
                      {work.title}
                    </p>
                  </div>
                </BrutalCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Archive */}
      <section className="p-8 md:py-24 md:px-12 bg-retro-offwhite">
        <div className="max-w-[1600px] mx-auto">
          <SectionHeading>EXPERIENCE ARCHIVE.</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black border-1 border-black mt-12 bg-opacity-20 overflow-hidden brutal-border-xl">
            {/* Card 1 */}
            <div className="bg-retro-offwhite p-12 hover:bg-retro-mustard transition-colors group">
              <p className="font-bold text-sm mb-2 opacity-50">01 / Team member</p>
              <h3 className="font-display text-2xl md:text-3xl mb-4 uppercase">social media team member</h3>
              <p className="font-medium text-sm md:text-base">Designing visuals to make the MIC social media page look attractive</p>
            </div>
            {/* Card 2 */}
            <div className="bg-retro-offwhite p-12 hover:bg-retro-pink transition-colors group">
              <p className="font-bold text-sm mb-2 opacity-50">02 / ACADEMIA</p>
              <h3 className="font-display text-2xl md:text-3xl mb-4 uppercase">MANIPAL INSTITUTE OF COMMUNICATION</h3>
              <p className="font-medium text-sm md:text-base">Specialising in graphic design and digital marketing at MIC, studying the art of storytelling.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-retro-offwhite p-12 hover:bg-retro-purple transition-colors group">
              <p className="font-bold text-sm mb-2 opacity-50">03 / BRAND STRATEGY</p>
              <h3 className="font-display text-2xl md:text-3xl mb-4 uppercase">Cinnamon & Soul DOP</h3>
              <p className="font-medium text-sm md:text-base">Architecting the visual identity and market entry for premium cloud kitchens.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-retro-offwhite p-12 hover:bg-retro-blue transition-colors group">
              <p className="font-bold text-sm mb-2 opacity-50">04 / TEAM HEAD</p>
              <h3 className="font-display text-2xl md:text-3xl mb-4 uppercase">TTT MAGE GRAPHICS & MEDIA HEAD</h3>
              <p className="font-medium text-sm md:text-base">Heading the Graphics & Media department for the 2025-26 tenure.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
