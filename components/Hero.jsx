'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'

export default function Hero() {
  // Animation Settings
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <section className="h-screen w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 overflow-hidden relative">
      
      {/* LEFT SIDE: Text Content */}
      <div className="flex-1 flex flex-col justify-center z-10 pt-20 md:pt-0">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.p variants={fadeUp} className="text-secondary font-bold tracking-widest mb-4 uppercase">
            Graphic Designer
          </motion.p>

          <motion.h1 variants={fadeUp} className="font-display text-7xl md:text-9xl font-bold uppercase leading-[0.9] mb-6">
            Three<br/>
            Sheet<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Local
            </span>
          </motion.h1>

          <motion.h2 variants={fadeUp} className="text-xl text-primary/80 font-medium mb-8">
            Nathan Jennex
          </motion.h2>

          <motion.div variants={fadeUp} className="flex gap-4">
            <button className="bg-primary text-white px-8 py-3 font-display tracking-wider text-lg hover:bg-accent hover:text-primary transition-colors duration-300">
              CONTACT ME
            </button>
            
            {/* Download Button (Mock functionality for now) */}
            <button className="border-2 border-primary text-primary px-6 py-3 flex items-center gap-2 hover:bg-primary hover:text-white transition-colors duration-300">
              <Download size={18} />
              RESUME
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* RIGHT SIDE: Image (Grayscale to Color) */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex-1 h-full w-full flex items-center justify-center relative"
      >
        {/* The Image Container */}
        <div className="relative w-[350px] h-[450px] md:w-[450px] md:h-[600px] group cursor-pointer">
            {/* Green Border Offset */}
            <div className="absolute inset-0 border-4 border-secondary translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
            
            {/* The Photo */}
            <img 
              src="/assets/Photo of me/nathan.jpg" 
              alt="Nathan Jennex" 
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out relative z-10 shadow-xl"
            />
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/50"
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  )
}