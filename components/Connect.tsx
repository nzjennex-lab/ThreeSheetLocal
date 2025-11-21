'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Copy, Check, FileText, FileImage } from 'lucide-react'

export default function Connect() {
  const [copied, setCopied] = useState(false)
  const email = "nzjennex@gmail.com"

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className="relative bg-[#1B4332] text-[#F8F9FA] pt-20 overflow-hidden">
      
      {/* Main Content Grid */}
      <div className="container mx-auto px-6 md:px-20 mb-20">
        <div className="flex flex-col md:flex-row gap-16 justify-between">
          
          {/* LEFT: Title & Socials */}
          <div className="md:w-1/2">
            <motion.h2 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="font-display text-[5rem] md:text-[8rem] leading-[0.8] mb-8 text-[#95D5B2]"
            >
              LET'S<br/>CONNECT
            </motion.h2>

            <div className="space-y-6 text-xl">
              {/* Email Copy Interaction */}
              <button 
                onClick={handleCopy}
                className="group flex items-center gap-4 hover:text-[#E9C46A] transition-colors text-left"
              >
                <span className="border-b border-white/30 pb-1 group-hover:border-[#E9C46A]">
                  {email}
                </span>
                {copied ? <Check className="text-green-400" /> : <Copy size={20} className="opacity-50 group-hover:opacity-100" />}
              </button>

              {/* Instagram Link */}
              <a 
                href="https://instagram.com/nzjennex" 
                target="_blank"
                className="flex items-center gap-4 hover:text-[#E9C46A] transition-colors w-max"
              >
                <span className="border-b border-white/30 pb-1 hover:border-[#E9C46A]">
                  @nzjennex
                </span>
                <ArrowUpRight size={20} className="opacity-50" />
              </a>
            </div>
          </div>

          {/* RIGHT: The Important Downloads */}
          <div className="md:w-1/3 flex flex-col gap-6 justify-center">
            <p className="text-[#95D5B2] uppercase tracking-widest font-bold text-sm mb-2">
              Downloads
            </p>
            
            {/* Resume Button */}
            <DownloadCard 
              title="My Resume" 
              subtitle="PDF (2.4 MB)" 
              icon={<FileText size={32} />} 
              href="/assets/Resume.pdf" // You will need to put the actual file here later
            />

            {/* One Sheet Button */}
            <DownloadCard 
              title="One Sheet" 
              subtitle="PDF (1.1 MB)" 
              icon={<FileImage size={32} />} 
              href="/assets/OneSheet.pdf" 
            />
          </div>

        </div>
      </div>

      {/* Marquee Animation (Infinite Scroll) */}
      <div className="border-t border-[#95D5B2]/20 py-6 bg-[#153426]">
        <div className="overflow-hidden whitespace-nowrap flex gap-10">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-10 text-[#95D5B2]/40 font-display text-4xl uppercase"
          >
            {/* Repeated text for seamless loop */}
            {[...Array(10)].map((_, i) => (
              <span key={i}>Available for Freelance • Open to Work • Graphic Design • Branding •</span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Logo Signoff */}
      <div className="absolute bottom-0 right-0 p-4 opacity-10 pointer-events-none">
        <img src="/assets/Logo/ThreeSheetLocal Logo Final.png" alt="Logo" className="w-96" />
      </div>

    </footer>
  )
}

// Sub-component for the Download Buttons
function DownloadCard({ title, subtitle, icon, href }: any) {
  return (
    <a 
      href={href} 
      download 
      className="group bg-white/5 border border-white/10 p-6 rounded-sm flex items-center justify-between hover:bg-[#E9C46A] hover:text-[#1B4332] transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <div className="p-3 bg-white/10 rounded-full group-hover:bg-[#1B4332]/20">
          {icon}
        </div>
        <div>
          <h3 className="font-display text-2xl uppercase leading-none">{title}</h3>
          <p className="text-xs opacity-60 group-hover:opacity-80">{subtitle}</p>
        </div>
      </div>
      <ArrowUpRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
    </a>
  )
}