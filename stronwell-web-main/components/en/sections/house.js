"use client"
import { motion } from 'framer-motion'
import React from 'react'
import Link from 'next/link'

function House() {
  const companies = [
    {
      id: 1,
      name: 'Bonhoeffer Machines',
      description: 'Intensive Use',
      website: 'https://bonhoeffermachines.com',
      logo: '/logos/bonhoeffer_logo.png', // You'll need to add this logo
      tagline: 'Industrial Excellence & Innovation'
    },
    {
      id: 2,
      name: 'Mechnova Machines',
      description: 'Occasionally Use',
      website: 'https://mechnovamachines.com',
      logo: '/logos/mechnova_logo.png', // You'll need to add this logo
      tagline: 'Quality Solutions for Everyone'
    },
    {
      id: 3,
      name: 'Stevron Tools',
      description: 'Hardware Division',
      website: 'https://stevrontools.com',
      logo: '/logos/stevron_logo.png', // You'll need to add this logo
      tagline: 'Professional Hardware Solutions'
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
    <section className="py-5 lg:py-10 px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-100 mb-6"
            style={{ fontFamily: 'var(--font-titillium-web)' }}
          >
            <span className="block text-gray-100 text-xl md:text-2xl lg:text-3xl font-medium mb-4">
              From the House of
            </span>
            <span className="bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] bg-clip-text text-transparent">
              Bonhoeffer Machines
            </span>
          </motion.h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          
          <motion.p 
            className="text-lg lg:text-xl text-gray-100 max-w-5xl mx-auto mt-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            From Mechnova&apos;s light-duty machines to Bonhoeffer&apos;s heavy-duty powerhouses, each brand serves a distinct user. Stronwell supports everyday pros, while Stevron delivers precise, reliable tools. United by shared values, all are built to solve real challenges - because Bonhoeffer users expect nothing less.
          </motion.p>
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
              <div className="relative bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/30">
                
                {/* Card Header with Gradient */}
                <div className="relative h-32 bg-white/10 overflow-hidden">
                  {/* <div className="absolute inset-0 " /> */}
                  
                  {/* Logo Container */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-20  rounded-xl  flex items-center justify-center">
                      {/* Placeholder for logo - replace with actual logo */}
                      {/* <div className="w-12 h-12 bg-gradient-to-br from-[#ff4f01] to-[#ff6b2e] rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {company.name.split(' ').map(word => word[0]).join('')}
                        </span>
                      </div> */}
                      {/* Uncomment when you have actual logos */}
                      <img 
                        src={company.logo} 
                        alt={`${company.name} logo`}
                        className="h-32 p-4 object-contain"
                      />
                    </div>
                  </div>

                  {/* Top corner indicator */}
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-[#ff4f01] rounded-full animate-pulse" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  
                  {/* Company Name */}
                  <motion.h3 
                    className="text-xl lg:text-2xl font-bold text-gray-100 mb-2"
                  >
                    {company.name}
                  </motion.h3>
                  
                  {/* Description Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-[#ff4f01] text-sm font-medium mb-4">
                    {company.description}
                  </div>
                  
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
                      className="w-full text-lg hover:text-xl cursor-pointer bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] text-white font-bold py-3 px-6 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <span className="">Visit Website</span>
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

                {/* Connecting Lines Effect */}
                {index < companies.length - 1 && (
                  <div className="hidden lg:block absolute -right-5 top-1/2 transform -translate-y-1/2 z-10">
                    <motion.div
                      className="w-10 h-0.5 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e]"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        {/* <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-lg text-gray-100 mb-8">
            United by excellence, driven by innovation - discover how our brands work together to serve you better.
          </p>
          
          <motion.div
            className="flex justify-center space-x-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-[#ff4f01] rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  )
}

export default House
