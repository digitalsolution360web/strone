"use client"
import { motion, AnimatePresence } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslation } from '../../contexts/TranslationContext'

function Hero() {
  const { t } = useTranslation()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(1)

  const banners = [
    {
      id: 1,
      image: '/banners/grass-banner.jpg',
      title: t('sections.hero.slide1Title'),
      subtitle: t('sections.hero.slide1Subtitle')
    },
    {
      id: 2,
      image: '/banners/hero-banner.png',
      title: t('sections.hero.slide2Title'),
      subtitle: t('sections.hero.slide2Subtitle')
    },
    {
     id: 3,
      image: '/banners/home-banner-small.png',
      title: t('sections.hero.slide2Title'),
      subtitle: t('sections.hero.slide2Subtitle')
    },
    {
     id: 4,
      image: '/banners/home-banner.png',
      title: t('sections.hero.slide2Title'),
      subtitle: t('sections.hero.slide2Subtitle')
    }
  ]

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentSlide((prev) => (prev + 1) % banners.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [banners.length])

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 1,
      scale: 1
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    })
  }

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.8 + i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  }

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#020617]" id="main-content">
      {/* Background Slider */}
      <div className="absolute inset-0 bg-[#020617]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 bg-[#020617]"
          >
            <div className="relative h-full w-full">
              {/* Background Image */}
              <motion.img
                src={banners[currentSlide].image}
                alt={banners[currentSlide].title}
                className="h-full w-full object-cover"
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
              
              {/* Gradient overlay (lighter so images stay visible) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/85 via-[#020617]/30 to-transparent" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content – centered glass panel (different UI) */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-14 lg:pb-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-2xl rounded-3xl border border-white/20 bg-black/50 backdrop-blur-xl px-8 py-10 sm:px-10 sm:py-12 text-center shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
            {banners[currentSlide].title}
          </h1>
          <p className="text-white/80 text-base sm:text-lg mb-8">
            {banners[currentSlide].subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link href="/products">
              <motion.button
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                custom={0}
                className="px-6 py-3 sm:px-8 sm:py-3.5 bg-[#ff4f01] text-white font-semibold text-sm sm:text-base rounded-lg hover:bg-[#ff6b2e] transition-colors"
              >
                {t('sections.hero.exploreProducts')} →
              </motion.button>
            </Link>
            <Link href="/dealer">
              <motion.button
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                custom={1}
                className="px-6 py-3 sm:px-8 sm:py-3.5 bg-white/10 text-white font-semibold text-sm sm:text-base rounded-lg border border-white/30 hover:bg-white/20 hover:border-white/50 transition-all"
              >
                {t('sections.hero.becomeDistributor')}
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="hidden lg:block absolute bottom-50 left-181 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-sm font-medium">{t('sections.hero.scroll')}</span>
          <motion.svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </div>
      </motion.div>

    </section>
  )
}

export default Hero
