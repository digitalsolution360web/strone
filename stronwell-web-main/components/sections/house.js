"use client"
import { motion } from 'framer-motion'
import React from 'react'
import Link from 'next/link'
import { useTranslation } from '../../contexts/TranslationContext'

function House() {
  const { t } = useTranslation()

  const companies = [
    {
      id: 1,
      name: t('sections.house.bonhoeffer.name'),
      description: 'Intensive Use',
      website: 'https://bonhoeffermachines.com',
      logo: '/logos/bon_letter.png',
      tagline: t('sections.house.bonhoeffer.tagline'),
      color: '#94A034'
    },
    {
      id: 3,
      name: t('sections.house.mechnova.name'),
      description: 'Occasionally Use',
      website: 'https://mechnovamachines.com',
      logo: '/logos/mechnova_logo.png',
      tagline: t('sections.house.mechnova.tagline'),
      color: '#0084ff'
    },
    {
      id: 4,
      name: t('sections.house.stevron.name'),
      description: 'Hardware Division',
      website: 'https://stevrontools.com',
      logo: '/logos/stevron_logo.png',
      tagline: t('sections.house.stevron.tagline'),
      color: '#94A034'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
    },
    hover: {
      y: -12,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  }

  return (
    <section className="relative py-16 lg:py-20 px-6 lg:px-8 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Global Group Header Banner */}
        <motion.div
          className="flex justify-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white px-10 py-3 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-200">
            <h2 className="text-[#020617] font-sans text-xs sm:text-base lg:text-lg font-black tracking-[0.2em] text-center uppercase" style={{ fontFamily: 'var(--font-titillium-web)' }}>
              {t('sections.house.globalGroup')}
            </h2>
          </div>
        </motion.div>

        {/* Brand Comparison Grid - Single Row for All 3 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {companies.map((company) => (
            <motion.div
              key={company.id}
              variants={cardVariants}
              whileHover="hover"
              className="group"
            >
              <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col p-6 lg:p-8 transition-all duration-500">
                {/* Brand Header area */}
                <div className="flex flex-col items-center text-center">
                  <h3 
                    className="font-bold text-3xl lg:text-4xl tracking-tighter mb-1.5 transition-colors duration-300"
                    style={{ color: company.color }}
                  >
                    {company.name.split(' ')[0]}
                  </h3>

                  {/* Horizontal Divider with Tight Gapping */}
                  <div className="w-full flex items-center justify-center gap-3 mb-3">
                    <div className="h-[1px] flex-1 bg-slate-100" />
                    <span className="text-slate-500 text-[11px] font-bold tracking-tight">
                      {company.tagline}
                    </span>
                    <div className="h-[1px] flex-1 bg-slate-100" />
                  </div>

                  <p className="text-slate-400 text-[11px] font-bold uppercase tracking-[0.15em] mb-5">
                    {company.description}
                  </p>

                  {/* Link Box - Improved Visibility */}
                  <Link 
                    href={company.website} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-[#ff4f01] rounded-xl py-3 px-6 flex items-center justify-center shadow-[0_10px_20px_-5px_rgba(255,79,1,0.3)] group-hover:bg-[#ff6b2e]"
                    >
                      <span className="font-bold text-[13px] tracking-wide text-white lowercase">
                        {company.website.replace('https://', 'www.')}
                      </span>
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default House
