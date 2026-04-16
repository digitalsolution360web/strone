"use client"
import { motion } from 'framer-motion'
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import productsData from '../../data/homeProducts.json'
import { useTranslation } from '../../contexts/TranslationContext'

function Products() {
  const { t } = useTranslation()
  const [isPaused, setIsPaused] = useState(false)
  const [currentX, setCurrentX] = useState(0)
  const containerRef = useRef(null)
  const animationRef = useRef(null)

  const { products } = productsData
  
  // Triple the products for seamless infinite scroll
  const duplicatedProducts = [...products, ...products, ...products]
  const CARD_WIDTH = 352 // Width of each card (w-80) including gap (space-x-8)
  const TOTAL_WIDTH = products.length * CARD_WIDTH

  useEffect(() => {
    if (!isPaused) {
      const animate = () => {
        setCurrentX(prev => {
          const newX = prev - 0.9 // Slower, smoother animation
          // Reset when we've scrolled past one full set
          if (Math.abs(newX) >= TOTAL_WIDTH) {
            return 0
          }
          return newX
        })
        animationRef.current = requestAnimationFrame(animate)
      }
      animationRef.current = requestAnimationFrame(animate)
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPaused, TOTAL_WIDTH])

  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  }

  const titleVariants = {
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

  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  }

  return (
    <section className="relative py-10 lg:py-16 overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#131d2e] to-[#0c1222]">
      <div className="absolute inset-0 bg-gradient-to-t from-[#ff4f01]/05 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff4f01]/50 to-transparent" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14"
        >
          <motion.div variants={titleVariants} className="flex items-center gap-3 mb-5">
            <div className="h-[2px] w-8 bg-[#ff4f01] rounded-full"></div>
            <span className="text-[#ff4f01] text-xs font-extrabold uppercase tracking-[0.2em]">Our Products</span>
          </motion.div>
          <motion.h2 
            variants={titleVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight tracking-tight"
          >
            {t('sections.homeProducts.title').split(' ').slice(0,-1).join(' ')} <span className="text-[#ff4f01]">{t('sections.homeProducts.title').split(' ').slice(-1)[0]}</span>
          </motion.h2>
          <motion.p 
            variants={titleVariants}
            className="text-base lg:text-lg text-gray-400 max-w-2xl font-light"
          >
            {t('sections.homeProducts.subtitle')}
          </motion.p>
        </motion.div>

        {/* Infinite Product Slider */}
        <div className="relative mb-5">
          
          {/* Slider Container */}
          <div 
            ref={containerRef}
            className="overflow-hidden py-8"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="flex space-x-8 will-change-transform"
              style={{
                transform: `translateX(${currentX}px)`,
                width: `${duplicatedProducts.length * CARD_WIDTH}px`
              }}
            >
              {duplicatedProducts.map((product, index) => (
                <Link 
                  key={`${product.id}-${Math.floor(index / products.length)}`}
                  href={product.link}
                  className="flex-shrink-0"
                >
                  <motion.div
                    className="group cursor-pointer h-full"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="w-80 h-[400px] bg-[#151515] rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] border-[3px] border-white flex flex-col flex-shrink-0 group/card relative">
                      {/* Top Tab */}
                      <div className="bg-white py-3 text-center shadow-sm relative z-10 w-[95%] mx-auto mt-2 rounded-t-lg">
                        <h3 className="text-black font-extrabold text-sm uppercase tracking-widest whitespace-nowrap overflow-hidden text-ellipsis px-2 group-hover:text-[#ff4f01] transition-colors">
                          {product.title}
                        </h3>
                      </div>
                      
                      {/* Image Area */}
                      <div className="relative flex-1 bg-gradient-to-br from-gray-900 to-black p-5 flex items-center justify-center overflow-hidden w-full mt-2 rounded-b-lg">
                        {/* Spotlight effect behind image */}
                        <div className="absolute inset-0 bg-white opacity-5 mix-blend-overlay group-hover:opacity-10 transition-opacity duration-300"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#ff4f01] opacity-0 blur-[60px] rounded-full group-hover:opacity-20 transition-opacity duration-500"></div>
                        
                        <motion.div
                          className="relative w-full h-full flex items-center justify-center z-10"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Image
                            src={product.image}
                            alt={product.title}
                            width={360}
                            height={256}
                            className={`object-contain w-auto h-auto max-h-[85%] max-w-full drop-shadow-[0_10px_15px_rgba(0,0,0,0.7)] ${
                              product.image.includes('manual-seed-spreader') ? 'max-h-[70%] max-w-[70%]' : ''
                            }`}
                            loading="eager"
                            quality={100}
                            unoptimized={true}
                            sizes="(max-width: 380px) 100vw, 360px"
                            style={{
                              imageRendering: '-webkit-optimize-contrast',
                              transform: 'translateZ(0)',
                              backfaceVisibility: 'hidden',
                              ...(product.image.includes('manual-seed-spreader') && {
                                filter: 'contrast(1.08)'
                              })
                            }}
                          />
                        </motion.div>
                        
                        {/* Category Badge hover effect */}
                        <div className="absolute bottom-4 left-4 pt-4 mt-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-[#ff4f01] text-xs font-bold uppercase tracking-wider bg-black/80 px-2 py-1 rounded border border-[#ff4f01]/30 flex items-center gap-1">
                            {t('products.viewDetails')}
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Explore All Products Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/products">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="group cursor-pointer relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] text-white font-bold text-lg rounded-2xl shadow-[0_8px_30px_rgba(255,79,1,0.25)] overflow-hidden border border-[#ff4f01]/20"
            >
              {/* Button Background Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#ff6b2e] to-[#ff4f01] opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              
              {/* Button Content */}
              <div className="relative z-10 flex items-center space-x-3">
                <span>{t('sections.homeProducts.exploreAll')}</span>
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </div>
              
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Products