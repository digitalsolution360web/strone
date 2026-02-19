"use client"
import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from '../../contexts/TranslationContext'

function Faqs() {
  const { t } = useTranslation()
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      id: 1,
      question: t('sections.faqs.q1'),
      answer: t('sections.faqs.a1')
    },
    {
      id: 2,
      question: t('sections.faqs.q2'),
      answer: t('sections.faqs.a2')
    },
    {
      id: 3,
      question: t('sections.faqs.q3'),
      answer: <p>{t('sections.faqs.a3')} <Link href={'/dealer'} className='text-[#ff4f01] font-bold hover:underline'>{t('sections.faqs.a3Link')}</Link> {t('sections.faqs.a3End')}</p>
    },
    {
      id: 4,
      question: t('sections.faqs.q4'),
      answer: t('sections.faqs.a4')
    },
    {
      id: 5,
      question: t('sections.faqs.q5'),
      answer: t('sections.faqs.a5')
    },
    {
      id: 6,
      question: t('sections.faqs.q6'),
      answer: t('sections.faqs.a6')
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
    <section className="py-16 lg:py-24 px-6 lg:px-8" id='faqs'>
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label block mb-2">FAQ</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('sections.faqs.title').split(' Questions')[0]} <span className="bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] bg-clip-text text-transparent">{t('sections.faqs.title').includes('Questions') ? 'Questions' : t('sections.faqs.title').split(' ').slice(-1)[0]}</span>
          </h2>
          
          <motion.div
            className="w-20 h-1.5 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t('sections.faqs.subtitle')}
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
              <div className={`bg-white/5 backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === faq.id ? 'border-[#ff4f01]/40 shadow-[0_12px_32px_rgba(0,0,0,0.25)]' : 'border-white/15 hover:border-[#ff4f01]/30'} hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)]`}>
                
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
          className="text-center p-10 lg:p-14 rounded-2xl border border-white/10 bg-white/[0.03]"
        >
          <motion.div variants={itemVariants} className="relative z-10">
            <h3 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              {t('sections.faqs.ctaTitle')}
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('sections.faqs.ctaSubtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 lg:text-xl cursor-pointer bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] text-white font-bold text-lg rounded-2xl shadow-[0_8px_30px_rgba(255,79,1,0.25)] hover:shadow-[0_12px_40px_rgba(255,79,1,0.3)] transition-all duration-300 border border-[#ff4f01]/20"
                >
                  {t('sections.faqs.exploreProducts')}
                </motion.button>
              </Link>
              
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 lg:text-xl cursor-pointer bg-transparent border-2 border-white/30 text-white font-bold text-lg rounded-2xl hover:border-[#ff4f01] hover:bg-[#ff4f01]/10 hover:shadow-[0_0_24px_rgba(255,79,1,0.15)] transition-all duration-300"
                >
                  {t('sections.faqs.contactUs')}
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