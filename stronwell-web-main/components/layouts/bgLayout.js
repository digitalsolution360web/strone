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
        {/* Simple dark background */}
        <div className="absolute inset-0 bg-black" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 50% 20%, rgba(255, 79, 1, 0.08) 0%, transparent 50%)'
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