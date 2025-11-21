'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { beerData } from '@/data/beer'

export default function Beer() {
  return (
    <section className="relative bg-paper">
      
      {/* PART 1: The Main Ad (Intro) */}
      <div className="h-screen flex items-center justify-center p-4 md:p-20 bg-white relative z-10">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl w-full shadow-2xl border-8 border-black"
        >
          <img 
            src={beerData.mainAd} 
            alt="4SZN Main Ad" 
            className="w-full h-auto"
          />
        </motion.div>
        <div className="absolute bottom-10 animate-bounce text-gray-400 uppercase tracking-widest text-sm">
          Scroll for the Seasons
        </div>
      </div>

      {/* PART 2: The Sticky Seasons */}
      {beerData.seasons.map((season, index) => (
        <SeasonCard key={season.id} season={season} index={index} />
      ))}

    </section>
  )
}

function SeasonCard({ season, index }: { season: typeof beerData.seasons[0], index: number }) {
  
  // Function to handle the "Pop" Sound
  const playPop = () => {
    try {
      const audio = new Audio('/assets/soda-can-open.mp3');
      audio.volume = 0.5; // 50% volume so it's not annoying
      audio.play();
    } catch (error) {
      console.error("Audio play failed (did you add pop.mp3 to assets?)", error);
    }
  }

  return (
    <div className="sticky top-0 h-screen flex flex-col md:flex-row overflow-hidden">
      
      {/* LEFT SIDE: Background Color & Text */}
      <div 
        className="flex-1 flex flex-col justify-center px-10 md:px-20 transition-colors duration-700"
        style={{ backgroundColor: season.color, color: season.textColor }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-xl font-bold uppercase tracking-[0.3em] border-b-2 border-current pb-2 mb-6 inline-block">
            0{index + 1} / {season.id}
          </span>
          <h2 className="font-display text-7xl md:text-9xl uppercase leading-none mb-4">
            {season.name}
          </h2>
          <h3 className="text-2xl md:text-4xl font-light italic opacity-80 mb-8">
            "{season.tagline}"
          </h3>
          <p className="text-lg md:text-xl max-w-md font-medium leading-relaxed opacity-90">
            {season.desc}
          </p>
        </motion.div>
      </div>

      {/* RIGHT SIDE: The Can (Float + Shake + Pop) */}
      <div 
        className="flex-1 flex items-center justify-center relative"
        style={{ backgroundColor: season.color }}
      >
        <div className="absolute w-[400px] h-[400px] bg-white/20 rounded-full blur-3xl" />

        <motion.img 
          src={season.image}
          alt={`${season.name} Can`}
          
          // 1. Entrance Animation
          initial={{ y: 100, opacity: 0, rotate: 10 }}
          whileInView={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ type: "spring", bounce: 0.4, duration: 1 }}
          
          // 2. The Shake & Pop Interaction
          whileHover={{ 
            scale: 1.1, 
            rotate: [0, -5, 5, -5, 5, 0], // The Wiggle
            transition: { duration: 0.4 } 
          }}
          onMouseEnter={playPop} // Trigger sound
          
          className="relative z-10 h-[50vh] md:h-[70vh] w-auto object-contain drop-shadow-2xl cursor-pointer"
        />

        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-10 right-10 w-48 md:w-64 rotate-[-5deg] border-4 border-white shadow-lg bg-white hidden md:block"
        >
          <img src={season.label} alt="Label Detail" />
        </motion.div>
      </div>

    </div>
  )
}