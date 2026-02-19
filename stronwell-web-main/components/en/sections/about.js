"use client"
import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import Link from 'next/link'

function About() {
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
      title: "Innovation",
      description: "Constantly pushing boundaries with cutting-edge technology and forward-thinking solutions.",
      icon: "💡",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Quality",
      description: "Uncompromising commitment to excellence in every product we manufacture and deliver.",
      icon: "⭐",
      color: "from-[#ff4f01] to-[#ff6b2e]"
    },
    {
      id: 3,
      title: "Reliability",
      description: "Building trust through consistent performance for our customers.",
      icon: "🛡️",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Sustainability",
      description: "Creating environmentally responsible products that contribute to a better future.",
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
    <section ref={sectionRef} className="py-5 lg:py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants}>
            <h2 
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-100 mb-6"
            >
              About <span className="bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] bg-clip-text text-transparent">Stronwell</span>
            </h2>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] mx-auto rounded-full mb-8"
          />
          
          <motion.p 
            variants={itemVariants}
            className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
          >
            Pioneering excellence in industrial solutions for over two decades, 
            we&apos;ve been the trusted partner for businesses worldwide.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mb-20" id='our-story'>
          
          {/* Left Column - Story */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl lg:text-5xl font-bold text-gray-100 mb-6">
                Our <span className="bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] bg-clip-text text-transparent">Story</span>
              </h3>
              <div className="space-y-6 text-lg text-gray-200 leading-relaxed">
                <p>
                  Founded with a vision to revolutionize the industrial equipment landscape, 
                  Stronwell has grown from a small workshop to a global leader in manufacturing 
                  high-quality tools and machinery.
                </p>
                <p>
                  Our journey began with a simple belief: that every professional deserves 
                  access to reliable, innovative equipment that enhances their productivity 
                  and drives their success. This philosophy continues to guide us today.
                </p>
                <p>
                  Through continuous innovation, strategic partnerships, and an unwavering 
                  commitment to quality, we&apos;ve built a reputation that spans continents 
                  and serves diverse industries worldwide.
                </p>
              </div>
            </motion.div>

            {/* Mission Statement */}
            <motion.div 
              variants={itemVariants}
              className="relative p-8 bg-gray-800 rounded-2xl border border-white/70"
            >
              <div>
                <h4 className="text-2xl font-bold text-gray-100 mb-3">Our <span className="bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] bg-clip-text text-transparent">Mission</span></h4>
                <p className="text-gray-200 leading-relaxed">
                  To empower businesses and professionals with innovative, reliable, and 
                  sustainable industrial solutions that drive growth, efficiency, and success 
                  in an ever-evolving marketplace.
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
                  className="relative h-48 rounded-2xl overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="/about/about-1.png" 
                    alt="Manufacturing facility"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
                <motion.div 
                  className="relative h-56 rounded-2xl overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="/about/about-2.png" 
                    alt="Quality control"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div 
                  className="relative h-56 rounded-2xl overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="/about/about-3.png" 
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
                <motion.div 
                  className="relative h-48 rounded-2xl overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="/about/about-4.png" 
                    alt="Global reach"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h3 className="text-3xl lg:text-5xl font-bold text-gray-100 mb-6">
              Our 
              <span className='text-[#ff4f01]'> Core Values</span>
            </h3>
            <p className="text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto">
              The principles that drive our success and guide our relationships with customers, partners, and communities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                variants={itemVariants}
                custom={index}
                className="group cursor-pointer"
              >
                <div className="relative bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#ff4f01]/20 overflow-hidden">                  
                  <div className="relative z-10">                    
                    <h4 className="text-xl font-bold text-gray-100 mb-4 group-hover:text-[#ff4f01] transition-colors duration-300">
                      {value.title}
                    </h4>

                    <p className="text-gray-200 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
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