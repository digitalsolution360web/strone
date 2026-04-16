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
      {/* Section background overlay for visual separation */}
      <div className="absolute inset-0 bg-[#0d1117]/70 z-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-14 lg:pt-14 lg:pb-18">
        
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-10 lg:mb-12"
        >
          {/* Product-website style pill label */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-5">
            <div className="h-[2px] w-8 bg-[#ff4f01] rounded-full"></div>
            <span className="text-[#ff4f01] text-xs font-extrabold uppercase tracking-[0.2em]">About Us</span>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 lg:mb-5 leading-tight tracking-tight"
          >
            {t('sections.about.title').split(' ')[0]} <span className="text-[#ff4f01]">Stronwell</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg lg:text-xl text-gray-400 max-w-2xl leading-relaxed font-light"
          >
            {t('sections.about.subtitle')}
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-14" id='our-story'>
          
          {/* Left Column - Story */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-10"
          >
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-8 w-1.5 bg-[#ff4f01] rounded-full"></div>
                <h3 className="text-2xl lg:text-4xl font-bold text-white">
                  {t('sections.about.ourStory').split(' ')[0]} <span className="text-[#ff4f01]">{t('sections.about.ourStory').split(' ')[1]}</span>
                </h3>
              </div>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
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

            {/* Mission Statement – Premium Glass Styled */}
            <motion.div 
              variants={itemVariants}
              className="w-full bg-white/[0.03] backdrop-blur-xl rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-white/10 hover:border-[#ff4f01]/30 flex flex-col group relative transition-all duration-500"
            >
              {/* Top accent line */}
              <div className="h-1 w-full bg-gradient-to-r from-[#ff4f01] to-transparent"></div>
              
              {/* Badge Tab */}
              <div className="absolute top-6 left-6 z-20">
                 <div className="inline-block px-4 py-1.5 rounded-full bg-[#ff4f01]/10 border border-[#ff4f01]/30 backdrop-blur-md">
                   <h4 className="text-[#ff4f01] font-extrabold text-xs uppercase tracking-widest">
                     {t('sections.about.ourMission').split(' ').join(' ')}
                   </h4>
                 </div>
              </div>
              
              {/* Content Area */}
              <div className="p-8 pt-20 relative">
                 <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#ff4f01] opacity-10 blur-[50px] rounded-full group-hover:opacity-20 transition-opacity duration-500"></div>
                 
                 {/* Quote icon */}
                 <div className="text-[#ff4f01]/20 font-serif text-6xl absolute top-14 left-4 z-0">"</div>
                 
                 <p className="text-gray-200 leading-relaxed text-xl italic relative z-10 pl-6">
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
                  className="relative h-48 rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-[4px] border-white hover:border-[#ff4f01] transition-colors duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="/about/about-1.png" 
                    alt="Manufacturing facility"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                </motion.div>
                <motion.div 
                  className="relative h-56 rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-[4px] border-white hover:border-[#ff4f01] transition-colors duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="/about/about-2.png" 
                    alt="Quality control"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div 
                  className="relative h-56 rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-[4px] border-white hover:border-[#ff4f01] transition-colors duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="/about/about-3.png" 
                    alt="Team collaboration"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                </motion.div>
                <motion.div 
                  className="relative h-48 rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-[4px] border-white hover:border-[#ff4f01] transition-colors duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="/about/about-4.png" 
                    alt="Global reach"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
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
          className="mb-14"
        >
          <motion.div variants={itemVariants} className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-[2px] w-8 bg-[#ff4f01] rounded-full"></div>
              <span className="text-[#ff4f01] text-xs font-extrabold uppercase tracking-[0.2em]">Core Values</span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              {t('sections.about.ourCoreValues').split(' ').slice(0,2).join(' ')} <span className="text-[#ff4f01]">{t('sections.about.ourCoreValues').split(' ').slice(2).join(' ')}</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                variants={itemVariants}
                custom={index}
                className="group"
              >
                <div className="h-full bg-white/[0.04] backdrop-blur-sm rounded-2xl p-7 border border-white/10 hover:border-[#ff4f01]/40 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] relative overflow-hidden flex flex-col">
                  {/* Top accent line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff4f01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-t-2xl"></div>
                  
                  {/* Glow blob */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#ff4f01] opacity-0 blur-[40px] group-hover:opacity-15 transition-opacity duration-500 rounded-full"></div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-[#ff4f01]/10 border border-[#ff4f01]/20 flex items-center justify-center mb-5 group-hover:bg-[#ff4f01]/20 group-hover:border-[#ff4f01]/40 transition-all duration-300">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{value.icon}</span>
                  </div>

                  {/* Title */}
                  <h4 className="text-white font-bold text-base uppercase tracking-wider mb-3 group-hover:text-[#ff4f01] transition-colors duration-300">
                    {value.title}
                  </h4>

                  {/* Divider */}
                  <div className="h-px w-8 bg-[#ff4f01]/40 mb-4 group-hover:w-full transition-all duration-500 ease-out"></div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-300 flex-grow">
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