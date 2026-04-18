"use client"
import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import { useTranslation } from '../../contexts/TranslationContext'

function CoreValues() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const values = [
    {
      id: 1,
      title: t('sections.about.innovation'),
      description: t('sections.about.innovationDesc'),
      icon: "💡",
      color: "text-blue-600"
    },
    {
      id: 2,
      title: t('sections.about.quality'),
      description: t('sections.about.qualityDesc'),
      icon: "⭐",
      color: "text-[#ff4f01]"
    },
    {
      id: 3,
      title: t('sections.about.reliability'),
      description: t('sections.about.reliabilityDesc'),
      icon: "🛡️",
      color: "text-emerald-600"
    },
    {
      id: 4,
      title: t('sections.about.sustainability'),
      description: t('sections.about.sustainabilityDesc'),
      icon: "🌱",
      color: "text-green-600"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section ref={sectionRef} className="relative py-12 lg:py-16 bg-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header - More Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-[#ff4f01] rounded-full"></div>
            <span className="text-[#ff4f01] text-xs font-bold uppercase tracking-[0.2em]">Our Principles</span>
            <div className="h-[2px] w-8 bg-[#ff4f01] rounded-full"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#020617] mb-4 leading-tight tracking-tight">
            Our <span className="text-[#ff4f01]">Core</span> Values
          </h2>
          <p className="text-base text-slate-500 font-medium leading-relaxed">
            These are the pillars that support our commitment to excellence and global industrial leadership.
          </p>
        </motion.div>

        {/* Values Grid - Tighter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              variants={itemVariants}
              className="group"
            >
              <div className="h-full bg-slate-50 rounded-[2rem] p-8 border border-slate-100 hover:bg-white hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden">
                {/* Accent Blob */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#ff4f01] opacity-0 group-hover:opacity-5 blur-[40px] rounded-full transition-opacity duration-500"></div>
                
                {/* Icon Container - Scaled Down */}
                <div className="w-16 h-16 rounded-2xl bg-white shadow-[0_5px_15px_rgba(0,0,0,0.03)] flex items-center justify-center mb-6 border border-slate-100 group-hover:scale-105 transition-transform duration-500">
                  <span className="text-3xl">{value.icon}</span>
                </div>

                <h3 className="text-[#020617] font-bold text-lg uppercase tracking-tight mb-3 group-hover:text-[#ff4f01] transition-colors">
                  {value.title}
                </h3>
                
                <div className="w-8 h-0.5 bg-slate-200 mb-4 group-hover:w-full group-hover:bg-[#ff4f01]/20 transition-all duration-500"></div>

                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CoreValues
