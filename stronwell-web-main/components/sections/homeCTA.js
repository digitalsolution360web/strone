"use client"
import { motion } from 'framer-motion'
import React from 'react'
import Link from 'next/link'
import { useTranslation } from '../../contexts/TranslationContext'

function HomeCTA() {
  const { t } = useTranslation()

  return (
    <section className="relative py-16 lg:py-20 px-6 lg:px-8 bg-[#020617] overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff4f01] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff4f01] opacity-[0.03] blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden border border-[#ff4f01]/20 bg-white/[0.02] backdrop-blur-sm shadow-[0_40px_100px_rgba(0,0,0,0.3)]"
        >
          {/* Subtle left accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#ff4f01]"></div>
          
          <div className="p-8 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-[2px] w-6 bg-[#ff4f01] rounded-full"></div>
                <p className="text-[#ff4f01] text-xs font-bold uppercase tracking-[0.2em]">{t('sections.faqs.ctaPill') || 'Get Started'}</p>
              </div>
              <h3 className="text-3xl lg:text-5xl font-bold text-white leading-tight tracking-tight max-w-2xl">
                Ready to Experience <span className="text-[#ff4f01]">Excellence?</span>
              </h3>
              <p className="text-gray-400 text-base lg:text-lg max-w-xl font-medium leading-relaxed">
                Connect with our team to discover how our industrial solutions can drive your success to new heights.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0 w-full sm:w-auto">
              <Link href="/products" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-4 bg-[#ff4f01] text-white font-bold text-sm rounded-xl shadow-[0_20px_40px_-10px_rgba(255,79,1,0.4)] hover:bg-[#ff6b2e] transition-all duration-300"
                >
                  {t('sections.faqs.exploreProducts')}
                </motion.button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-bold text-sm rounded-xl hover:bg-white/5 transition-all duration-300"
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

export default HomeCTA
