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
    <section className="relative py-16 lg:py-20 px-6 lg:px-8 bg-[#070b12]" id='faqs'>
      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Section Header - Tighter margins */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center"
        >
          {/* Support Pill Label */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-[#ff4f01] rounded-full"></div>
            <span className="text-[#ff4f01] text-xs font-bold uppercase tracking-[0.2em]">Support</span>
            <div className="h-[2px] w-8 bg-[#ff4f01] rounded-full"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">
            Frequently Asked <span className="text-[#ff4f01]">Questions</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
            {t('sections.faqs.subtitle')}
          </p>
        </motion.div>

        {/* FAQ Accordion - Tighter spacing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-3"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div
                className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                  openFaq === faq.id
                    ? 'bg-white/[0.06] border border-[#ff4f01]/40 shadow-[0_8px_32px_rgba(255,79,1,0.12)]'
                    : 'bg-white/[0.03] border border-white/8 hover:bg-white/[0.05]'
                }`}
              >
                {/* Left accent bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-[#ff4f01] transition-all duration-300 ${openFaq === faq.id ? 'opacity-100' : 'opacity-0'}`}></div>

                {/* Question row */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full pl-6 pr-6 py-4.5 text-left cursor-pointer flex items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4 min-w-0">
                    <span className={`text-[10px] font-bold pt-1 transition-colors duration-200 ${openFaq === faq.id ? 'text-[#ff4f01]' : 'text-white/20'}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className={`text-base lg:text-lg font-bold leading-snug transition-colors duration-200 ${openFaq === faq.id ? 'text-white' : 'text-gray-200'}`}>
                      {faq.question}
                    </h3>
                  </div>

                  <motion.div
                    animate={{ rotate: openFaq === faq.id ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-300 ${
                      openFaq === faq.id
                        ? 'bg-[#ff4f01] border-[#ff4f01]'
                        : 'bg-transparent border-white/20'
                    }`}
                  >
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                    </svg>
                  </motion.div>
                </button>

                {/* Answer - Tighter */}
                <AnimatePresence>
                  {openFaq === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pl-16 pr-6 pb-5">
                        <div className="h-px bg-white/5 mb-3" />
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-gray-400 leading-relaxed text-sm font-medium"
                        >
                          {faq.answer}
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Faqs