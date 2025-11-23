'use client'

import { motion, AnimatePresence, Variants } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [index, setIndex] = useState(0)
  
  // The skills to cycle through
  const words = [
    ["GRAPHIC", "DESIGNER"],
    ["FREE", "LANCER"],
    ["BRAND", "IDENTITY"],
  ]

  // Cycle every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  // --- ADDED ': Variants' TO FIX BUILD ERROR ---
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  const sentence: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { delay: 0.2, staggerChildren: 0.03 },
    },
  }

  const letter: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="h-screen w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 overflow-hidden relative">

      {/* LEFT SIDE: Text Content */}
      <div className="flex-1 flex flex-col justify-center z-10 pt-20 md:pt-0">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
          className="relative"
        >
          {/* Small Top Label */}
          <motion.p variants={fadeUp} className="text-secondary font-bold tracking-widest mb-2 uppercase">
            Portfolio 2025
          </motion.p>

          {/* --- THE VAPORIZE CONTAINER --- */}
          <div className="relative h-[160px] md:h-[220px] mb-6 flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                exit="vaporize"
                className="absolute top-0 left-0 font-display text-7xl md:text-8xl font-bold uppercase leading-[0.9] text-primary/10 select-none whitespace-nowrap"
              >
                {words[index].map((word, i) => (
                  <VaporizeWord key={i} text={word} delay={i * 0.1} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* --- FOREGROUND INTRO (Static) --- */}
          <motion.h2
            variants={sentence}
            className="font-display text-3xl md:text-4xl font-bold uppercase leading-tight mb-8 text-white drop-shadow-md relative z-20"
          >
            <span className="block">
              {"Hey,".split("").map((char, i) => <motion.span key={i} variants={letter}>{char}</motion.span>)}
            </span>
            <span className="block">
              {"Name's Nathan".split("").map((char, i) => <motion.span key={i} variants={letter}>{char}</motion.span>)}
            </span>
            <span className="block text-secondary">
              {"Here's some of my work".split("").map((char, i) => <motion.span key={i} variants={letter}>{char}</motion.span>)}
            </span>
          </motion.h2>

          {/* Buttons */}
          <motion.div variants={fadeUp} className="flex gap-4 relative z-20">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-white px-8 py-3 font-display tracking-wider text-lg hover:bg-accent hover:text-primary transition-colors duration-300 shadow-xl"
            >
              CONTACT ME
            </button>

            <a
              href="/assets/Resume.pdf"
              download
              className="border-2 border-primary text-primary px-6 py-3 flex items-center gap-2 hover:bg-primary hover:text-white transition-colors duration-300 backdrop-blur-sm"
            >
              <Download size={18} />
              RESUME
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* RIGHT SIDE: Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex-1 h-full w-full flex items-center justify-center relative mt-10 md:mt-0"
      >
        <div className="relative w-[350px] h-[450px] md:w-[450px] md:h-[600px] group cursor-pointer transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="absolute inset-0 border-4 border-secondary translate-x-4 translate-y-4" />
          <img
            src="/assets/Photo of me/nathan.jpg"
            alt="Nathan Jennex"
            className="w-full h-full object-cover relative z-10 shadow-xl"
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

// --- HELPER FOR THE BACKGROUND TEXT ---
function VaporizeWord({ text, delay }: { text: string, delay: number }) {
  
  // --- ADDED ': Variants' HERE TOO ---
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { delayChildren: delay, staggerChildren: 0.05 } 
    },
    vaporize: { 
      opacity: 0,
      transition: { staggerChildren: 0.02, staggerDirection: -1 } 
    }
  }

  const charAnim: Variants = {
    hidden: { opacity: 0, filter: "blur(10px)", scale: 1.2, x: -20 },
    visible: { 
      opacity: 1, 
      filter: "blur(0px)", 
      scale: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    vaporize: { 
      opacity: 0, 
      filter: "blur(20px)", 
      y: -40, // Float UP into dust
      scale: 1.1,
      transition: { duration: 1.2 } 
    }
  }

  return (
    <motion.div variants={container} className="block">
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={charAnim} className="inline-block">
          {char}
        </motion.span>
      ))}
    </motion.div>
  )
}