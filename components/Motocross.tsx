'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { motocrossData } from '@/data/motocross'
import { ChevronRight } from 'lucide-react'

export default function Motocross() {
  const [activeBg, setActiveBg] = useState(0)

  return (
    <section className="min-h-screen bg-zinc-900 text-white py-20 px-4 md:px-10 overflow-hidden relative">
      
      {/* Decorative "Racing Strip" Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent -skew-x-12 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="mb-16 border-l-8 border-red-600 pl-8"
        >
          <h2 className="font-display text-6xl md:text-8xl italic uppercase leading-none">
            {motocrossData.title}
          </h2>
          <p className="text-xl text-gray-400 mt-2 max-w-2xl">
            {motocrossData.desc}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* LEFT: The Final Vertical Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:w-1/3 w-full flex justify-center"
          >
            <div className="relative border-4 border-white/10 p-2 bg-black shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <span className="absolute -top-4 -left-4 bg-red-600 text-white px-4 py-1 font-bold uppercase text-sm tracking-wider">
                Final Render
              </span>
              <img 
                src={motocrossData.finalVertical} 
                alt="Vertical Banner" 
                className="w-auto h-[600px] object-contain"
              />
            </div>
          </motion.div>

          {/* RIGHT: Interactive Background Swap */}
          <div className="lg:w-2/3 w-full">
            
            <div className="mb-6 flex items-center gap-4">
              <h3 className="text-2xl font-display uppercase text-gray-300">
                Interchangeable Backgrounds
              </h3>
              <div className="h-[1px] flex-1 bg-gray-700" />
            </div>

            {/* The Viewer Window */}
            <div className="relative w-full h-[400px] bg-black border border-gray-700 overflow-hidden rounded-lg shadow-inner">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeBg}
                  src={motocrossData.backgrounds[activeBg].image}
                  alt="Background Texture"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {/* Overlay Grid (for tech feel) */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            </div>

            {/* Controls */}
            <div className="flex gap-4 mt-6">
              {motocrossData.backgrounds.map((bg, index) => (
                <button
                  key={bg.id}
                  onClick={() => setActiveBg(index)}
                  className={`flex-1 py-4 px-6 border flex items-center justify-between group transition-all duration-300
                    ${activeBg === index 
                      ? 'border-red-600 bg-red-600/10 text-white' 
                      : 'border-gray-700 bg-zinc-800/50 text-gray-500 hover:border-gray-500'
                    }`}
                >
                  <span className="font-bold uppercase tracking-wider">
                    0{index + 1} / {bg.name}
                  </span>
                  {/* Color Dot Indicator */}
                  <div className={`w-3 h-3 rounded-full ${bg.color} ${activeBg === index ? 'animate-pulse' : ''}`} />
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* BOTTOM: Horizontal Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <ChevronRight className="text-red-600" />
            <h3 className="text-xl font-display uppercase text-gray-400">Trackside Display</h3>
          </div>
          <div className="w-full overflow-hidden border-y-4 border-red-600">
            <img 
              src={motocrossData.finalHorizontal} 
              alt="Horizontal Banner" 
              className="w-full h-auto object-cover min-h-[200px]"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}