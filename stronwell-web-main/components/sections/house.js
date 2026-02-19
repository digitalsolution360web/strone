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
    <section className="py-16 lg:py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Garden & Forestry</span>
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-100 mb-6 tracking-tight"
            style={{ fontFamily: 'var(--font-titillium-web)' }}
          >
            {t('sections.house.gardenForestry').split(' & ')[0]} & {' '}
            <span className="bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] bg-clip-text text-transparent">
              {t('sections.house.gardenForestry').split(' & ')[1]}
            </span>
          </motion.h2>

          <motion.div
            className="w-20 h-1.5 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
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
              <div className="relative bg-black/50 rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-300">
                {/* Card Header */}
                <div className="relative h-32 bg-white/5 overflow-hidden">

                  {/* Logo Container */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-20 rounded-xl flex items-center justify-center">
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="h-32 p-4 object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">

                  {/* Company Name */}
                  <motion.h3
                    className="text-xl lg:text-2xl text-center text-gray-100 mb-4"
                  >
                    {company.tagline}
                  </motion.h3>

                  {/* Visit Website Button */}
                  <Link href={company.website} target="_blank" rel="noopener noreferrer">
                    <motion.button
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="w-full text-lg hover:text-xl cursor-pointer bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] text-white font-bold py-3 px-6 rounded-xl shadow-[0_4px_20px_rgba(255,79,1,0.2)] group-hover:shadow-[0_8px_28px_rgba(255,79,1,0.3)] transition-all duration-300 border border-[#ff4f01]/20"
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <span className="">{company.name}</span>
                        <motion.svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ x: [0, 2, 0] }}
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
          className="text-center my-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Hardware Division</span>
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-100 mb-6 tracking-tight"
            style={{ fontFamily: 'var(--font-titillium-web)' }}
          >
            {t('sections.house.hardwareDivision').split(' ')[0]} {' '}
            <span className="bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] bg-clip-text text-transparent">
              {t('sections.house.hardwareDivision').split(' ')[1]}
            </span>
          </motion.h2>

          <motion.div
            className="w-20 h-1.5 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
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
              <div className="relative bg-black/50 rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-300">
                {/* Card Header */}
                <div className="relative h-32 bg-white/5 overflow-hidden">

                  {/* Logo Container */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-20  rounded-xl  flex items-center justify-center">
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="h-32 p-4 object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">

                  {/* Company Name */}
                  <motion.h3
                    className="text-xl lg:text-2xl text-center text-gray-100 mb-4"
                  >
                    {company.tagline}
                  </motion.h3>

                  {/* Description Badge */}
                  {/* <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-[#ff4f01] text-sm font-medium mb-4">
                    {company.description}
                  </div> */}

                  {/* Tagline */}
                  {/* <p className="text-gray-100 text-sm mb-6 leading-relaxed">
                    {company.tagline}
                  </p> */}

                  {/* Visit Website Button */}
                  <Link href={company.website} target="_blank" rel="noopener noreferrer">
                    <motion.button
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="w-full text-lg hover:text-xl cursor-pointer bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] text-white font-bold py-3 px-6 rounded-xl shadow-[0_4px_20px_rgba(255,79,1,0.2)] group-hover:shadow-[0_8px_28px_rgba(255,79,1,0.3)] transition-all duration-300 border border-[#ff4f01]/20"
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <span className="">{company.name}</span>
                        <motion.svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ x: [0, 2, 0] }}
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
