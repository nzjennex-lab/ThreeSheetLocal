'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { posterItems } from '@/data/posters'

export default function Posters() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Parallax Settings:
  // The left column moves slower (y1), the right column moves faster (y2)
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]) 
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]) 

  // Split data into two columns
  const leftColumn = [posterItems[0], posterItems[2]]
  const rightColumn = [posterItems[1], posterItems[3]]

  return (
    <section ref={containerRef} className="min-h-screen bg-[#111] text-white py-24 relative overflow-hidden">
      
      {/* Background Noise Texture for "Gritty" feel */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="container mx-auto px-4 md:px-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="font-display text-[5rem] md:text-[10rem] leading-[0.8] text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 uppercase">
            The Vault
          </h2>
          <p className="text-xl text-gray-400 mt-4 max-w-xl">
            Selected works in digital manipulation, composite imagery, and vector illustration.
          </p>
        </motion.div>

        {/* The Grid */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          
          {/* LEFT COLUMN (Slow) */}
          <motion.div style={{ y: y1 }} className="flex-1 flex flex-col gap-20 md:pt-20">
            {leftColumn.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </motion.div>

          {/* RIGHT COLUMN (Fast) */}
          <motion.div style={{ y: y2 }} className="flex-1 flex flex-col gap-20">
            {rightColumn.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

// Sub-component for cleaner code
function Card({ item }: { item: typeof posterItems[0] }) {
  return (
    // 1. Center the card in the column and constrain width
    <div className="w-full flex justify-center">
      <div className="group relative w-full max-w-[550px]">
        
        {/* Hover Effect: The image glows with its specific color */}
        <div className={`absolute inset-0 ${item.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700 rounded-full`} />
        
        <div className="relative overflow-hidden rounded-sm border border-white/10 bg-zinc-900">
          <img 
            src={item.image} 
            alt={item.title} 
            // 2. 'max-h-[600px]' ensures tall posters don't scroll forever
            className="w-full h-auto max-h-[600px] object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
          />
          
          {/* Overlay Info */}
          <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
            <span className="text-accent text-xs font-bold uppercase tracking-widest mb-2">
              {item.category}
            </span>
            <h3 className="font-display text-3xl uppercase leading-none mb-3">
              {item.title}
            </h3>
            <p className="text-gray-300 text-xs leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}