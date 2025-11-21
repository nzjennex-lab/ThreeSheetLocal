'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Hero from "@/components/Hero";
import Kombucha from "@/components/Kombucha";
import Posters from "@/components/Posters";
import Motocross from "@/components/Motocross";
import Beer from "@/components/Beer";
import Connect from "@/components/Connect";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true)

  return (
    <main className="min-h-screen bg-paper selection:bg-accent selection:text-primary">
      
      {/* 1. The Loader (Shows first) */}
      <AnimatePresence mode='wait'>
        {loading && (
          <Loader onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {/* 2. The Website (Shows after loader) */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <Hero />
          <Kombucha />
          <Posters />
          <Motocross />
          <Beer />
          <Connect />
        </motion.div>
      )}
    </main>
  );
}