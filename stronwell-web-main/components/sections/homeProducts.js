"use client"
import { motion } from 'framer-motion'
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
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
  const CARD_WIDTH = 280 // Width of each card including gap
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
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff4f01]/50 to-transparent" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.span variants={titleVariants} className="section-label block mb-2">
            Products
          </motion.span>
          <motion.h2 
            variants={titleVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            {t('sections.homeProducts.title').split(' ')[0]} <span className="text-[#ff4f01]">{t('sections.homeProducts.title').split(' ')[1]}</span>
          </motion.h2>
          <motion.p 
            variants={titleVariants}
            className="text-base lg:text-lg text-gray-400 max-w-2xl mx-auto"
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
                    className="group cursor-pointer"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="w-64 bg-black/40 rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-300 group/card">
                      {/* Product Image Container */}
                      <div className="relative h-full bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                        <motion.img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 px-3 py-1 bg-[#ff4f01] backdrop-blur-sm rounded-full text-xs font-medium text-gray-100">
                          {product.category.replace('-', ' ').toUpperCase()}
                        </div>
                        
                        {/* Hover Icon */}
                        <div className="absolute top-4 right-4 w-8 h-8 bg-[#ff4f01] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Product Info – bottom bar style */}
                      <div className="p-5 border-t border-white/10 bg-black/30">
                        <h3 className="text-lg font-bold text-white group-hover:text-[#ff4f01] transition-colors leading-tight">
                          {product.title}
                        </h3>
                        <div className="mt-2 flex items-center text-[#ff4f01] font-medium text-sm">
                          <span>{t('sections.homeProducts.viewDetails')}</span>
                          <motion.svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </motion.svg>
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