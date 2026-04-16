"use client"
import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from '../../contexts/TranslationContext'

function Faqs() {
  const { t } = useTranslation()
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    { id: 1, question: t('sections.faqs.q1'), answer: t('sections.faqs.a1') },
    { id: 2, question: t('sections.faqs.q2'), answer: t('sections.faqs.a2') },
    {
      id: 3,
      question: t('sections.faqs.q3'),
      answer: <p>{t('sections.faqs.a3')} <Link href={'/dealer'} className='text-[#ff4f01] font-bold hover:underline'>{t('sections.faqs.a3Link')}</Link> {t('sections.faqs.a3End')}</p>
    },
    { id: 4, question: t('sections.faqs.q4'), answer: t('sections.faqs.a4') },
    { id: 5, question: t('sections.faqs.q5'), answer: t('sections.faqs.a5') },
    { id: 6, question: t('sections.faqs.q6'), answer: t('sections.faqs.a6') }
  ]

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  return (
    <section className="relative py-10 lg:py-16 px-6 lg:px-8" id='faqs'>
      {/* Section background overlay */}
      <div className="absolute inset-0 bg-[#070b12]/75 z-0"></div>
      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          {/* Product-website pill label */}
          <div className="flex items-center gap-3 mb-5">
            <div className="h-[2px] w-8 bg-[#ff4f01] rounded-full"></div>
            <span className="text-[#ff4f01] text-xs font-extrabold uppercase tracking-[0.2em]">Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight tracking-tight">
            {t('sections.faqs.title').split(' Questions')[0]} <span className="text-[#ff4f01]">Questions</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed font-light">
            {t('sections.faqs.subtitle')}
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-3 mb-16"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <div
                className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                  openFaq === faq.id
                    ? 'bg-white/[0.06] border border-[#ff4f01]/40 shadow-[0_8px_32px_rgba(255,79,1,0.12)]'
                    : 'bg-white/[0.03] border border-white/8 hover:bg-white/[0.05] hover:border-white/15'
                }`}
              >
                {/* Left accent bar — visible when open */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-[#ff4f01] rounded-l-xl transition-all duration-300 ${openFaq === faq.id ? 'opacity-100' : 'opacity-0'}`}></div>

                {/* Question row */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full pl-7 pr-6 py-5 text-left cursor-pointer flex items-center justify-between gap-4"
                >
                  {/* Number + Question */}
                  <div className="flex items-start gap-4 min-w-0">
                    <span className={`text-xs font-extrabold pt-0.5 flex-shrink-0 transition-colors duration-200 ${openFaq === faq.id ? 'text-[#ff4f01]' : 'text-white/20'}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className={`text-base lg:text-lg font-semibold leading-snug transition-colors duration-200 ${openFaq === faq.id ? 'text-white' : 'text-gray-200'}`}>
                      {faq.question}
                    </h3>
                  </div>

                  {/* Toggle icon */}
                  <motion.div
                    animate={{ rotate: openFaq === faq.id ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 ${
                      openFaq === faq.id
                        ? 'bg-[#ff4f01] border-[#ff4f01]'
                        : 'bg-transparent border-white/20 hover:border-[#ff4f01]/60'
                    }`}
                  >
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openFaq === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pl-16 pr-6 pb-6">
                        <div className="h-px bg-white/8 mb-4" />
                        <motion.p
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.08, duration: 0.25 }}
                          className="text-gray-300 leading-relaxed text-base font-light"
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

        {/* CTA Block — premium dark with orange accent */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden border border-[#ff4f01]/25 bg-white/[0.03] backdrop-blur-sm"
        >
          {/* Subtle left accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ff4f01] to-[#ff4f01]/20 rounded-l-2xl"></div>
          {/* Soft glow */}
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#ff4f01] opacity-[0.06] blur-[60px] rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#ff4f01] opacity-[0.04] blur-[50px] rounded-full"></div>

          <div className="relative z-10 p-8 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-6 bg-[#ff4f01] rounded-full"></div>
                <p className="text-[#ff4f01] text-xs font-extrabold uppercase tracking-[0.2em]">Get Started</p>
              </div>
              <h3 className="text-2xl lg:text-4xl font-bold text-white leading-tight mb-3">
                {t('sections.faqs.ctaTitle')}
              </h3>
              <p className="text-gray-400 text-base max-w-xl font-light leading-relaxed">
                {t('sections.faqs.ctaSubtitle')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3 bg-[#ff4f01] text-white font-bold text-sm rounded-xl shadow-[0_4px_20px_rgba(255,79,1,0.25)] hover:shadow-[0_8px_28px_rgba(255,79,1,0.35)] hover:bg-[#e64500] transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  {t('sections.faqs.exploreProducts')}
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3 bg-transparent border border-white/20 text-gray-300 font-semibold text-sm rounded-xl hover:bg-white/5 hover:border-white/40 hover:text-white transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  {t('sections.faqs.contactUs')}
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Faqs