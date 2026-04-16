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
      tagline: t('sections.house.bonhoeffer.tagline')
    },
    {
      id: 2,
      name: t('sections.house.stronwell.name'),
      description: 'Hardware Division',
      website: 'https://stronwell.com',
      logo: '/logo.png',
      tagline: t('sections.house.stronwell.tagline')
    },
    {
      id: 3,
      name: t('sections.house.mechnova.name'),
      description: 'Occasionally Use',
      website: 'https://mechnovamachines.com',
      logo: '/logos/mechnova_logo.png',
      tagline: t('sections.house.mechnova.tagline')
    }
  ]

  const HardCompanies = [
    {
      id: 1,
      name: t('sections.house.stevron.name'),
      description: 'Hardware Division',
      website: 'https://stevrontools.com',
      logo: '/logos/stevron_logo.png',
      tagline: t('sections.house.stevron.tagline')
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#ff6b2e",
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  }

  return (
    <section className="relative py-10 lg:py-16 px-6 lg:px-8">
      {/* Section background overlay */}
      <div className="absolute inset-0 bg-[#0c111d]/80 z-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-[2px] w-8 bg-[#ff4f01] rounded-full"></div>
            <span className="text-[#ff4f01] text-xs font-extrabold uppercase tracking-[0.2em]">Garden &amp; Forestry</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight tracking-tight"
            style={{ fontFamily: 'var(--font-titillium-web)' }}
          >
            {t('sections.house.gardenForestry').split(' & ')[0]} &amp; {' '}
            <span className="text-[#ff4f01]">
              {t('sections.house.gardenForestry').split(' & ')[1]}
            </span>
          </h2>
        </motion.div>

        {/* Companies Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.id}
              variants={cardVariants}
              whileHover="hover"
              className="group"
            >
              <div className="relative bg-[#111111] rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] border-[3px] border-white flex flex-col group h-full transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
                {/* Top Tab for Description */}
                <div className="bg-white py-2.5 text-center shadow-sm relative z-10 w-[95%] mx-auto mt-2 rounded-t-lg">
                  <h4 className="text-black font-extrabold text-xs uppercase tracking-widest whitespace-nowrap px-2">
                    {company.description}
                  </h4>
                </div>

                {/* Card Header with Logo */}
                <div className="relative flex-1 bg-gradient-to-br from-gray-900 to-black p-6 flex flex-col items-center justify-center overflow-hidden w-full mt-2 rounded-b-lg min-h-[160px]">
                  {/* Spotlight effect behind logo */}
                  <div className="absolute inset-0 bg-white opacity-5 mix-blend-overlay group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#ff4f01] opacity-0 blur-[50px] rounded-full group-hover:opacity-20 transition-opacity duration-500"></div>

                  {/* Logo Container */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <motion.img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="max-h-24 max-w-full p-2 object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 pt-4 flex flex-col">
                  {/* Tagline */}
                  <div className="flex items-center justify-center w-full mb-5 opacity-90">
                    <div className="h-[1px] bg-gray-600 flex-grow"></div>
                    <span className="px-3 text-[#ff4f01] text-sm font-bold tracking-wider text-center">
                      {company.tagline}
                    </span>
                    <div className="h-[1px] bg-gray-600 flex-grow"></div>
                  </div>

                  {/* Visit Website Button */}
                  <Link href={company.website} target="_blank" rel="noopener noreferrer" className="mt-auto">
                    <motion.button
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="w-full text-base font-bold bg-white text-black py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 group-hover:shadow-[0_5px_15px_rgba(255,255,255,0.2)] border-2 border-transparent hover:border-[#ff4f01]"
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <span>{company.name}</span>
                        <motion.svg
                          className="w-4 h-4 text-[#ff4f01]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </motion.svg>
                      </div>
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mb-10 mt-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-[2px] w-8 bg-[#ff4f01] rounded-full"></div>
            <span className="text-[#ff4f01] text-xs font-extrabold uppercase tracking-[0.2em]">Hardware Division</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight tracking-tight"
            style={{ fontFamily: 'var(--font-titillium-web)' }}
          >
            {t('sections.house.hardwareDivision').split(' ')[0]} {' '}
            <span className="text-[#ff4f01]">
              {t('sections.house.hardwareDivision').split(' ')[1]}
            </span>
          </h2>
        </motion.div>

        {/* Companies Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {HardCompanies.map((company, index) => (
            <motion.div
              key={company.id}
              variants={cardVariants}
              whileHover="hover"
              className="group w-full md:w-[50%] lg:w-[33%] mx-auto"
            >
              <div className="relative bg-[#111111] rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] border-[3px] border-white flex flex-col group h-full transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
                {/* Top Tab for Description */}
                <div className="bg-white py-2.5 text-center shadow-sm relative z-10 w-[95%] mx-auto mt-2 rounded-t-lg">
                  <h4 className="text-black font-extrabold text-xs uppercase tracking-widest whitespace-nowrap px-2">
                    {company.description}
                  </h4>
                </div>

                {/* Card Header with Logo */}
                <div className="relative flex-1 bg-gradient-to-br from-gray-900 to-black p-6 flex flex-col items-center justify-center overflow-hidden w-full mt-2 rounded-b-lg min-h-[160px]">
                  {/* Spotlight effect behind logo */}
                  <div className="absolute inset-0 bg-white opacity-5 mix-blend-overlay group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#ff4f01] opacity-0 blur-[50px] rounded-full group-hover:opacity-20 transition-opacity duration-500"></div>

                  {/* Logo Container */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <motion.img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="max-h-24 max-w-full p-2 object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 pt-4 flex flex-col">
                  {/* Tagline */}
                  <div className="flex items-center justify-center w-full mb-5 opacity-90">
                    <div className="h-[1px] bg-gray-600 flex-grow"></div>
                    <span className="px-3 text-[#ff4f01] text-sm font-bold tracking-wider text-center">
                      {company.tagline}
                    </span>
                    <div className="h-[1px] bg-gray-600 flex-grow"></div>
                  </div>

                  {/* Visit Website Button */}
                  <Link href={company.website} target="_blank" rel="noopener noreferrer" className="mt-auto">
                    <motion.button
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="w-full text-base font-bold bg-white text-black py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 group-hover:shadow-[0_5px_15px_rgba(255,255,255,0.2)] border-2 border-transparent hover:border-[#ff4f01]"
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <span>{company.name}</span>
                        <motion.svg
                          className="w-4 h-4 text-[#ff4f01]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </motion.svg>
                      </div>
                    </motion.button>
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
