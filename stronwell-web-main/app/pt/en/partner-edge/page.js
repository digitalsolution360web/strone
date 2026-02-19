"use client"
import { motion } from 'framer-motion'
import BgLayout from '@/components/layouts/bgLayout'
import React from 'react'
import Link from 'next/link'

function PartnerPage() {
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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
    <BgLayout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <motion.img
            src="/banners/mission.png"
            alt="Stronwell Partner Edge - Mission"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
          
          {/* Brand Color Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff4f01]/20 via-transparent to-[#ff6b2e]/20" />
        </div>

        {/* Hero Content */}
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center max-w-7xl mx-auto px-6 lg:px-8"
        >
          
          {/* Breadcrumb */}
          <motion.div variants={contentVariants} className="mb-8">
            <nav className="flex justify-center">
              <ol className="flex items-center space-x-2 text-sm text-gray-300">
                <li>
                  <Link href="/" className="hover:text-[#ff4f01] transition-colors duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </li>
                <li className="text-[#ff4f01] font-medium">Partner Edge</li>
              </ol>
            </nav>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={contentVariants} className="mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Stronwell
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Partner Edge
              </motion.span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={contentVariants} className="mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-bold mb-4">
              Real Solutions for Real Importer Challenges
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-5xl mx-auto leading-relaxed">
              Stronwell helps Latin American distributors break free from overpriced premium brands and unreliable low-end imports—offering trusted performance, solid margins, and scalable growth.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={contentVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            
            {/* Solutions Button */}
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <button 
                onClick={() => document.getElementById('challenges').scrollIntoView({ behavior: 'smooth' })}
                className="group relative cursor-pointer px-8 py-4 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] text-white font-bold text-lg rounded-xl shadow-2xl overflow-hidden"
              >
                {/* Button Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#ff6b2e] to-[#ff4f01] opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                
                {/* Button Content */}
                <div className="relative z-10 flex items-center space-x-2">
                  <span className='text-xl'>See Solutions</span>
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </motion.svg>
                </div>
                
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </button>
            </motion.div>

            {/* Contact Us Button */}
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link href="/contact">
                <button className="group relative cursor-pointer px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold text-lg rounded-xl backdrop-blur-sm hover:border-[#ff4f01] transition-all duration-300 overflow-hidden">
                  {/* Hover Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#ff4f01]/20 to-[#ff6b2e]/20 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Button Content */}
                  <div className="relative z-10 flex items-center space-x-2">
                    <span className='text-xl'>Contact Us</span>
                    <motion.svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </motion.svg>
                  </div>
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="flex flex-col items-center space-y-2 text-white/60">
            <span className="text-sm font-medium">Discover solutions</span>
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

      {/* Challenge Solutions Section */}
      <section className="py-5 lg:py-10 px-6 lg:px-8" id="challenges">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              We Solve Your <span className="bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] bg-clip-text text-transparent">Biggest Challenges</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real distributor challenges require engineered solutions, not Band-Aid fixes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                challenge: "Dominated by Premium Brands?",
                solution: "30% lower FOB + dealer-ready sales kits",
                icon: "💰"
              },
              {
                challenge: "Fear SKU Conflicts?",
                solution: "Smart portfolio mapping prevents cannibalization",
                icon: "🎯"
              },
              {
                challenge: "Worried Products Won\'t Move?",
                solution: "Fast-moving SKUs + POS & promo materials",
                icon: "📈"
              },
              {
                challenge: "Warranty Kills Margin?",
                solution: "Spares + 24-hr support + shared warranty handling",
                icon: "🔧"
              },
              {
                challenge: "Already Import from China?",
                solution: "Branded, stable specs with resale trust",
                icon: "🏷️"
              },
              {
                challenge: "Hate Rigid Contracts?",
                solution: "No targets. Soft exclusivity starts from Order 1",
                icon: "🤝"
              },
              {
                challenge: "Weak in Digital?",
                solution: "Social reels, flyers, WhatsApp kits—all done for you",
                icon: "📱"
              },
              {
                challenge: "Specs Keep Changing?",
                solution: "Fixed codes + manuals + update logs",
                icon: "📋"
              },
              {
                challenge: "Service Team Struggles?",
                solution: "Video guides + mechanic cheat sheets",
                icon: "🎥"
              },
              {
                challenge: "Dealers Demand Big Discounts?",
                solution: "Demo units + incentive flyers = sell without cutting",
                icon: "🎁"
              },
              {
                challenge: "Returns Hit Profits?",
                solution: "Setup videos + misuse filters prevent false claims",
                icon: "📹"
              },
              {
                challenge: "Fear Category Dependence?",
                solution: "Launch spans 6+ categories to de-risk from Day 1",
                icon: "🌟"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:border-[#ff4f01]/30 transition-all duration-300">
                  {/* <span className="text-3xl mb-4 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] rounded-full px-4 py-2">{index + 1}</span> */}
                  <div className="text-3xl mb-4 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] rounded-full px-4 py-2 text-white font-bold w-12 h-12 flex items-center justify-center">{index + 1}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.challenge}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Partner Edge Works Section */}
      <section className="py-5 lg:py-10 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              How Partner Edge <span className="bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] bg-clip-text text-transparent">Works</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] mx-auto rounded-full mb-6" />
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ff4f01] to-[#ff6b2e] transform lg:-translate-x-0.5" />
            
            {[
              {
                step: "Step 1",
                title: "You Launch with 3–4 Containers",
                description: "Start your journey with our carefully selected starter portfolio",
                position: "left"
              },
              {
                step: "Step 2", 
                title: "You Receive Dealer Kits + Spares + Display Units",
                description: "Complete sales ecosystem delivered to accelerate your market entry",
                position: "right"
              },
              {
                step: "Step 3",
                title: "Soft Exclusivity from Order 1",
                description: "Immediate territorial protection without rigid commitments",
                position: "left"
              },
              {
                step: "Step 4",
                title: "You Rotate Stock Within 6 Months",
                description: "Proven fast-moving inventory ensures healthy cash flow",
                position: "right"
              },
              {
                step: "Step 5",
                title: "You Earn Country-Wide 24-Month Exclusivity",
                description: "Full territorial protection with proven performance metrics",
                position: "left"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: step.position === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex ${step.position === "right" ? "lg:justify-end" : ""} mb-12`}
              >
                <div className={`lg:w-5/12 ${step.position === "right" ? "lg:text-right" : ""}`}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 ml-16 lg:ml-0">
                    <div className="text-sm font-bold text-[#ff4f01] mb-2">{step.step}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-8 lg:left-1/2 w-4 h-4 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] rounded-full transform lg:-translate-x-2 translate-y-8" />
                
                {/* Step Number */}
                <div className="absolute left-4 lg:left-1/2 w-8 h-8 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] rounded-full flex items-center justify-center text-white font-bold text-sm transform lg:-translate-x-4 translate-y-4">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-5 lg:py-10 px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative p-12 rounded-3xl overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, #ff4f01 0%, transparent 50%), 
                                 radial-gradient(circle at 75% 75%, #ff6b2e 0%, transparent 50%)`
              }} />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Distribution Business?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the Partner Edge program and scale with confidence, margin, and dealer trust.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/dealer">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 lg:text-xl cursor-pointer bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-[#ff4f01]/25 transition-all duration-300"
                  >
                    Become Distributor
                  </motion.button>
                </Link>
                
                <Link href="/products">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 lg:text-xl cursor-pointer bg-transparent border-2 border-white/30 text-white font-bold text-lg rounded-xl hover:border-[#ff4f01] hover:bg-[#ff4f01]/10 transition-all duration-300"
                  >
                    Explore Products
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </BgLayout>
  )
}

export default PartnerPage