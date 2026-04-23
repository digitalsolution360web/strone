"use client"
import { motion } from 'framer-motion'
import React from 'react'
import Link from 'next/link'
import { useTranslation } from '../../contexts/TranslationContext'

function FeatureShowcase() {
  const { t } = useTranslation()

  const features = [
    {
      id: 1,
      title: "Clear More Ground in Less Time - Grass Cutting Machines",
      description: "Are you looking for an ideal grass cutting machine which is more durable and powerful in terms of operation? Stronwell Brush Cutters are designed for efficiency, reliability and ease of use in the toughest conditions.",
      image: "/banners/grass-banner.jpg",
      overlayText: "Stronwell Farming Machinery",
      link: "/products/brush-cutter",
      reverse: false,
      bgColor: "bg-slate-50"
    },
    {
      id: 2,
      title: "Cut Faster. Work Stronger - Stronwell Chainsaws",
      description: "Delivering powerful cutting performance for wood, trees and farm maintenance tasks. Our chainsaws are lightweight with ergonomic design, providing excellent control and comfort during long working hours.",
      image: "/banners/b1.jpeg",
      overlayText: "Total Farming Power",
      link: "/products/chainsaw",
      reverse: true,
      bgColor: "bg-white"
    },
    {
      id: 3,
      title: "Reliable Water. Relentless Performance - Gasoline Water Pumps",
      description: "Stronwell Gasoline Water Pumps ensure fast and reliable water transfer for irrigation, construction and daily agricultural needs. Powered by fuel-efficient engines for high flow output.",
      image: "/banners/b3.jpeg",
      overlayText: "Trusted by Farmers",
      link: "/products/water-pump",
      reverse: false,
      bgColor: "bg-slate-50"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#020617] mb-6 tracking-tight"
          >
            Complete Farming Machinery Under One Roof — <span className="text-[#ff4f01]">Stronwell Machines</span>
          </motion.h2>
          <div className="w-24 h-1 bg-[#ff4f01] mx-auto rounded-full mb-8"></div>
          <p className="text-slate-500 max-w-3xl mx-auto text-lg">
            We provide a complete range of farming machinery under one roof, such as Power Tillers, Gasoline Water Pumps, Gasoline Engines, Brush Cutters and Chainsaws.
          </p>
        </div>

        {/* Feature Rows */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12 lg:space-y-20"
        >
          {features.map((feature) => (
            <motion.div 
              key={feature.id}
              variants={itemVariants}
              className={`flex flex-col ${feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 group`}
            >
              {/* Image Side */}
              <div className="lg:w-1/2 relative h-[400px] lg:h-auto min-h-[450px] overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                
                {/* Floating Text Overlay like screenshot */}
                <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                   <h3 className="text-white text-4xl md:text-5xl font-black uppercase tracking-tighter drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] transform -rotate-2">
                     {feature.overlayText.split(' ').map((word, i) => (
                       <span key={i} className="block">{word}</span>
                     ))}
                   </h3>
                </div>
              </div>

              {/* Text Side */}
              <div className={`lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center ${feature.bgColor}`}>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#020617] mb-6 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-10">
                  {feature.description}
                </p>
                <div>
                  <Link href={feature.link}>
                    <motion.button
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-[#ff4f01] text-white font-bold rounded-xl shadow-[0_15px_30px_rgba(255,79,1,0.25)] hover:bg-[#ff6b2e] transition-all flex items-center gap-3"
                    >
                      Explore Products
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7-7 7" />
                      </svg>
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

export default FeatureShowcase
