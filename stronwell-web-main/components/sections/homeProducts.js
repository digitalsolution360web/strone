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
    <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
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
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#020617] mb-3 leading-tight tracking-tight font-orbitron capitalize"
          >
            {t('sections.homeProducts.title').split(' ').slice(0,-1).join(' ')} <span className="text-[#ff4f01]">{t('sections.homeProducts.title').split(' ').slice(-1)[0]}</span>
          </motion.h2>
          <motion.p 
            variants={titleVariants}
            className="text-base lg:text-lg text-gray-500 max-w-2xl font-medium"
          >
            {t('sections.homeProducts.subtitle')}
          </motion.p>
        </motion.div>

        {/* Infinite Product Slider */}
        <div className="relative mb-5">
          {/* Decorative side fades */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
          
          <div 
            ref={containerRef}
            className="overflow-hidden py-12"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="flex space-x-10 will-change-transform"
              style={{
                transform: `translateX(${currentX}px)`,
                width: `${duplicatedProducts.length * (CARD_WIDTH + 8)}px` // Adjusted for larger gap
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
                    whileHover={{ y: -12 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                  >
                    <div className="w-[340px] h-[440px] bg-white rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_45px_100px_-20px_rgba(255,79,1,0.15)] border border-gray-100 flex flex-col relative transition-all duration-500">
                      
                      {/* Product Category/Type (Subtle) */}
                      <div className="pt-8 px-8 text-center">
                        <span className="text-[#ff4f01]/60 text-[10px] font-black uppercase tracking-[0.3em] block mb-2">
                          Premium Equipment
                        </span>
                        <h3 className="text-[#020617] font-orbitron font-black text-xl uppercase tracking-tighter group-hover:text-[#ff4f01] transition-colors line-clamp-2">
                          {product.title}
                        </h3>
                      </div>
                      
                      {/* Image Area with Inner Glass */}
                      <div className="relative flex-1 m-4 mb-2 rounded-[2rem] bg-gray-50/50 flex items-center justify-center overflow-hidden border border-gray-100/50">
                        {/* Interactive Spotlight */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#ff4f01] opacity-0 blur-[60px] rounded-full group-hover:opacity-10 transition-opacity duration-700"></div>
                        
                        <motion.div
                          className="relative w-full h-full p-8 flex items-center justify-center z-10"
                          whileHover={{ scale: 1.1, rotate: [-1, 1, -1] }}
                          transition={{ duration: 0.5 }}
                        >
                          <Image
                            src={product.image}
                            alt={product.title}
                            width={400}
                            height={300}
                            className="object-contain w-auto h-auto max-h-full max-w-full drop-shadow-2xl brightness-105"
                            loading="eager"
                            quality={100}
                            unoptimized={true}
                          />
                        </motion.div>
                      </div>

                      {/* Footer Link Bar (Subtle) */}
                      <div className="px-8 pb-8 mt-auto flex justify-center">
                        <div className="bg-[#020617] w-full py-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg group-hover:bg-[#ff4f01] transition-all duration-300">
                          <span className="text-white text-xs font-bold uppercase tracking-widest">
                            {t('products.viewDetails')}
                          </span>
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7-7 7" />
                          </svg>
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
          className="text-center mt-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Link href="/products">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="group cursor-pointer relative inline-flex items-center px-12 py-5 bg-[#020617] text-white font-black text-xs uppercase tracking-[0.3em] rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.1)] overflow-hidden transition-all duration-300 border border-transparent hover:border-[#ff4f01]/40"
            >
              <div className="relative z-10 flex items-center space-x-3">
                <span>{t('sections.homeProducts.exploreAll')}</span>
                <motion.svg
                  className="w-5 h-5 text-[#ff4f01]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Products