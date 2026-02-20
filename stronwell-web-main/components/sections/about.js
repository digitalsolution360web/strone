"use client"
import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import Link from 'next/link'
import { useTranslation } from '../../contexts/TranslationContext'

function About() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const stats = [
    {
      id: 1,
      number: "25+",
      label: "Years of Excellence",
      icon: "🏆"
    },
    {
      id: 2,
      number: "10,000+",
      label: "Satisfied Customers",
      icon: "👥"
    },
    {
      id: 3,
      number: "500+",
      label: "Product Range",
      icon: "🔧"
    },
    {
      id: 4,
      number: "50+",
      label: "Countries Served",
      icon: "🌍"
    }
  ]

  const values = [
    {
      id: 1,
      title: t('sections.about.innovation'),
      description: t('sections.about.innovationDesc'),
      icon: "💡",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: t('sections.about.quality'),
      description: t('sections.about.qualityDesc'),
      icon: "⭐",
      color: "from-[#ff4f01] to-[#ff6b2e]"
    },
    {
      id: 3,
      title: t('sections.about.reliability'),
      description: t('sections.about.reliabilityDesc'),
      icon: "🛡️",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: t('sections.about.sustainability'),
      description: t('sections.about.sustainabilityDesc'),
      icon: "🌱",
      color: "from-teal-500 to-green-500"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-20 lg:pt-20 lg:pb-28">
        
        {/* Section Header – left-aligned on desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16 lg:mb-20 text-center lg:text-left"
        >
          <motion.span variants={itemVariants} className="section-label block mb-3">
            About Us
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 lg:mb-5 max-w-2xl"
          >
            {t('sections.about.title').split(' ')[0]} <span className="text-[#ff4f01]">Stronwell</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-16 h-0.5 bg-[#ff4f01] rounded-full mb-6 lg:mb-6 mx-auto lg:mx-0"
          />
          <motion.p 
            variants={itemVariants}
            className="text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed mx-auto lg:mx-0"
          >
            {t('sections.about.subtitle')}
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mb-20" id='our-story'>
          
          {/* Left Column - Story */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl lg:text-5xl font-bold text-gray-100 mb-6">
                {t('sections.about.ourStory').split(' ')[0]} <span className="bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] bg-clip-text text-transparent">{t('sections.about.ourStory').split(' ')[1]}</span>
              </h3>
              <div className="space-y-6 text-lg text-gray-200 leading-relaxed">
                <p>
                  {t('sections.about.story1')}
                </p>
                <p>
                  {t('sections.about.story2')}
                </p>
                <p>
                  {t('sections.about.story3')}
                </p>
              </div>
            </motion.div>

            {/* Mission Statement – outline style */}
            <motion.div 
              variants={itemVariants}
              className="relative p-8 rounded-2xl border-2 border-white/15 bg-white/[0.02] hover:border-[#ff4f01]/30 transition-colors duration-300"
            >
              <div>
                <h4 className="text-2xl font-bold text-gray-100 mb-3">{t('sections.about.ourMission').split(' ')[0]} <span className="bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] bg-clip-text text-transparent">{t('sections.about.ourMission').split(' ')[1]}</span></h4>
                <p className="text-gray-200 leading-relaxed">
                  {t('sections.about.missionText')}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Images */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="space-y-4">
                <motion.div 
                  className="relative h-48 rounded-2xl overflow-hidden border border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-shadow duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="/about/about-1.png" 
                    alt="Manufacturing facility"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
                <motion.div 
                  className="relative h-56 rounded-2xl overflow-hidden border border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-shadow duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="/about/about-2.png" 
                    alt="Quality control"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div 
                  className="relative h-56 rounded-2xl overflow-hidden border border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-shadow duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="/about/about-3.png" 
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
                <motion.div 
                  className="relative h-48 rounded-2xl overflow-hidden border border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-shadow duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="/about/about-4.png" 
                    alt="Global reach"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h3 className="text-3xl lg:text-5xl font-bold text-gray-100 mb-6">
              {t('sections.about.ourCoreValues').split(' Core')[0]}
              <span className='text-[#ff4f01]'> {t('sections.about.ourCoreValues').split(' ').slice(-2).join(' ')}</span>
            </h3>
            <p className="text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto">
              {t('sections.about.valuesSubtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                variants={itemVariants}
                custom={index}
                className="group cursor-pointer"
              >
                <div className="relative bg-white/[0.03] rounded-2xl p-8 border border-white/10 hover:border-white/25 transition-all duration-300 overflow-hidden group-hover:bg-white/[0.05]">
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <h4 className="text-xl font-bold text-gray-100 mb-4 group-hover:text-[#ff4f01] transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-gray-200 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About