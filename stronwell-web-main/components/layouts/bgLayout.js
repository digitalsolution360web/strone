"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Header from './header'
import Footer from './footer'

function BgLayout({ children }) {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      transition: { 
        duration: 0.3,
        ease: "easeIn"
      }
    }
  }

  return (
    <motion.div
      className="min-h-screen flex flex-col"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Header */}
      <Header />

      {/* Main Content */}
      <motion.main 
        className="flex-1 relative overflow-hidden"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Same gradient as Products section - full website */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c1222] via-[#1e293b] to-[#0f172a]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#ff4f01]/05 via-transparent to-transparent pointer-events-none" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background:
              'radial-gradient(ellipse 80% 70% at 50% 0%, rgba(30,41,59,0.6) 0%, transparent 55%)'
          }}
        />

        <div className="relative">
          <motion.div
            className="min-h-screen"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {children}
          </motion.div>
        </div>
      </motion.main>

      {/* Footer */}
      <Footer />
    </motion.div>
  )
}

export default BgLayout