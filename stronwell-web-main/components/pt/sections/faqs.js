"use client"
import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import Link from 'next/link'

function Faqs() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      id: 1,
      question: "What types of industrial equipment does Stronwell manufacture?",
      answer: "Stronwell specializes in a comprehensive range of industrial equipment including agricultural machinery, power tools, garden equipment, marine motors, cleaning systems, generators, and construction tools. Our product portfolio spans over 500 different models designed for professional and commercial use."
    },
    {
      id: 2,
      question: "Do you offer warranty on your products?",
      answer: "Yes, all Stronwell products come with comprehensive warranty coverage. Our standard warranty ranges from 1-3 years depending on the product category. We also offer extended warranty options and comprehensive after-sales support through our global service network."
    },
    {
      id: 3,
      question: "How can I become a distributor for Stronwell products?",
      answer: <p>We welcome partnership opportunities with qualified distributors worldwide. To become a Stronwell distributor, you&apos;ll need to meet certain criteria including market presence, technical expertise, and service capabilities. Please contact our partnership team through our <Link href={'/dealer'} className='text-[#ff4f01] font-bold hover:underline'>Become Distributor</Link> page for detailed requirements and application process.</p>
    },
    {
      id: 4,
      question: "Do you provide international shipping and support?",
      answer: "Yes, we serve customers in over 50 countries worldwide. We have established shipping partnerships and service networks globally to ensure timely delivery and local support. Our international team can assist with logistics, customs clearance, and provide technical support in multiple languages."
    },
    {
      id: 5,
      question: "How do I find the right product for my specific needs?",
      answer: "Our expert team can help you select the perfect equipment for your requirements. You can browse our product categories online, use our product finder tool, or contact our technical consultants who will assess your needs and recommend the most suitable solutions. We also offer product demonstrations and trial programs for qualifying customers."
    },
    {
      id: 6,
      question: "What kind of technical support and training do you provide?",
      answer: "We offer comprehensive technical support including installation guidance, operation training, maintenance workshops, and troubleshooting assistance. Our certified technicians provide on-site training, video tutorials, detailed manuals, and 24/7 technical helpline support to ensure optimal performance of your equipment."
    }
  ]

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id)
  }

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

  const faqVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
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

  const answerVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 45 }
  }

  return (
    <section className="py-5 lg:py-10 px-6 lg:px-8" id='faqs'>
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] bg-clip-text text-transparent">Questions</span>
          </h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our products, services, and partnerships. 
            Can&apos;t find what you&apos;re looking for? Contact our support team.
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              variants={faqVariants}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm  border border-white/10 rounded-2xl overflow-hidden hover:border-[#ff4f01]/30 transition-all duration-300">
                
                {/* Question */}
                <motion.button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left cursor-pointer flex items-center justify-between group-hover:bg-white/5 transition-all duration-300"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-lg lg:text-xl font-bold text-white pr-4 leading-relaxed">
                    {faq.question}
                  </h3>
                  
                  <motion.div
                    variants={iconVariants}
                    animate={openFaq === faq.id ? "open" : "closed"}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </motion.div>
                </motion.button>
                
                {/* Answer */}
                <AnimatePresence>
                  {openFaq === faq.id && (
                    <motion.div
                      variants={answerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="h-px bg-gradient-to-r from-[#ff4f01]/20 to-[#ff6b2e]/20 mb-4" />
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                          className="text-gray-300 leading-relaxed text-base lg:text-lg"
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          variants={containerVariants}
          className="text-center p-12 relative overflow-hidden"
        >
          <motion.div variants={itemVariants} className="relative z-10">
            <h3 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Experience Excellence?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Stronwell for their industrial equipment needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 lg:text-xl cursor-pointer bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-[#ff4f01]/25 transition-all duration-100"
                >
                  Explore Products
                </motion.button>
              </Link>
              
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 lg:text-xl cursor-pointer bg-transparent border-2 border-white/30 text-white font-bold text-lg rounded-xl hover:border-[#ff4f01] hover:bg-[#ff4f01]/10 transition-all duration-100"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Faqs