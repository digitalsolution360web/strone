"use client"
import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import { useTranslation } from '../../contexts/TranslationContext'

function OurStory() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <section ref={sectionRef} className="relative py-12 lg:py-16 bg-slate-50 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-8 bg-[#ff4f01] rounded-full"></div>
                <span className="text-[#ff4f01] text-xs font-bold uppercase tracking-[0.2em]">Our Legacy</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#020617] mb-5 leading-tight tracking-tight text-balance">
                Building The <span className="text-[#ff4f01]">Future</span> Of Industry
              </h2>
              <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                <p>{t('sections.about.story1')}</p>
                <p>{t('sections.about.story2')}</p>
              </div>
            </motion.div>

            {/* Mission Card - More Compact */}
            <motion.div 
                variants={itemVariants}
                className="bg-white p-6 lg:p-8 rounded-[1.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-100/80 relative group overflow-hidden"
            >
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#ff4f01] opacity-5 blur-[40px] rounded-full group-hover:opacity-10 transition-opacity"></div>
                <div className="inline-block px-3 py-1 rounded-full bg-[#ff4f01]/10 border border-[#ff4f01]/20 mb-4 text-[10px] font-bold uppercase tracking-widest text-[#ff4f01]">
                    {t('sections.about.ourMission')}
                </div>
                <p className="text-[#020617] text-xl lg:text-2xl font-bold leading-tight italic">
                    "{t('sections.about.missionText')}"
                </p>
            </motion.div>
          </div>

          {/* Right Column - Single Premium Image */}
          <motion.div variants={itemVariants} className="relative">
            {/* Decorative background blob */}
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-[#ff4f01]/10 rounded-full blur-3xl pointer-events-none z-0" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-slate-200/60 rounded-full blur-2xl pointer-events-none z-0" />

            {/* Main Image Card */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.18)] border-4 border-white group" style={{ height: '520px' }}>
              <img
                src="/banners/hero-banner.png"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                alt="Stronwell Industrial Equipment"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Bottom overlay text */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <p className="text-white text-sm font-semibold uppercase tracking-widest opacity-80">Est. 1999</p>
                <p className="text-white text-xl font-bold leading-snug mt-1">Trusted by industries worldwide</p>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-5 -right-5 bg-[#ff4f01] text-white px-7 py-5 rounded-[1.5rem] shadow-2xl z-20 hidden md:flex flex-col items-center justify-center">
              <div className="text-4xl font-black leading-none">25+</div>
              <div className="text-[10px] font-black uppercase tracking-widest opacity-80 mt-1 whitespace-nowrap">Years of Excellence</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurStory
