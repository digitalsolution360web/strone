"use client"
import { motion, useInView } from 'framer-motion'
import React, { useRef, useState } from 'react'
import Link from 'next/link'
import { useTranslation } from '../../contexts/TranslationContext'

function Footer() {
  const { t } = useTranslation()
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, amount: 0.2 })
  const [hoveredSocial, setHoveredSocial] = useState(null)

  const footerSections = [
    {
      title: t('footer.company'),
      links: [
        { name: t('footer.aboutUs'), href: "/about" },
        { name: t('footer.ourStory'), href: "/#our-story" },
        // { name: "Our Vision", href: "/about#vision" },
        // { name: "Our Values", href: "/about#values" },
        // { name: "Careers", href: "https://bonhoeffer.in/careers" },
        { name: t('footer.faqs'), href: "/#faqs" },
        // { name: "News & Press", href: "/news" }
      ]
    },
    {
      title: t('footer.productsTitle'),
      links: [
        { name: t('footer.ourProducts'), href: "/products" },
        { name: t('footer.brushCutter'), href: "/products/brush-cutter" },
        { name: t('footer.chainsaw'), href: "/products/chainsaw" },
        // { name: "Accessories", href: "/products/accessories" }
      ]
    },
    {
      title: t('footer.support'),
      links: [
        { name: t('footer.partnerEdge'), href: "/partner-edge" },
        { name: t('footer.contactUs'), href: "/contact" },
        // { name: "Documentation", href: "/docs" },
        { name: t('footer.warranty'), href: "/warranty" }
      ]
    },
    // {
    //   title: "Legal",
    //   links: [
    //     { name: "Privacy Policy", href: "/privacy" },
    //     { name: "Terms of Service", href: "/terms" },
    //     { name: "Cookie Policy", href: "/cookies" },
    //     { name: "Compliance", href: "/compliance" }
    //   ]
    // }
  ]

  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: "💼" },
    { name: "Twitter", href: "#", icon: "🐦" },
    { name: "Instagram", href: "#", icon: "📷" },
    { name: "YouTube", href: "#", icon: "🎥" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const sectionVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const linkVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  }

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.4,
        type: "spring",
        stiffness: 300
      }
    })
  }

  return (
    <motion.footer
      ref={footerRef}
      className="relative bg-black text-white overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/40 to-transparent" />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#ff4f01] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 lg:gap-16">
            {/* Brand Section */}
            <motion.div 
              className="lg:col-span-1"
              variants={sectionVariants}
            >
              <Link href="/" className="inline-block mb-6">
                <motion.div
                  className="flex items-center space-x-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src="/logo.png" 
                    alt="Stronwell Logo" 
                    className="h-7 shadow-lg"
                  />
                  {/* <span className="text-2xl font-bold text-white">
                    Stronwell
                  </span> */}
                </motion.div>
              </Link>
              
              <motion.p 
                className="text-white/70 text-lg mb-8 max-w-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {t('footer.description')}
              </motion.p>

              <Link href="/dealer">
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="px-6 py-3 bg-[#ff4f01] text-white text-xl font-semibold cursor-pointer hover:scale-[1.03] rounded-xl shadow-[0_4px_20px_rgba(255,79,1,0.25)] hover:shadow-[0_8px_28px_rgba(255,79,1,0.35)] hover:bg-[#ff6b2e] transition-all duration-300 border border-[#ff4f01]/30"
                >
                    {t('footer.becomeDealer')}
                </motion.button>
              </Link>
            </motion.div>

            <div className='flex flex-col justify-between'>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
                {/* Footer Links */}
                {footerSections.map((section, sectionIndex) => (
                  <motion.div 
                    key={section.title}
                    className="lg:col-span-1 "
                    variants={sectionVariants}
                  >
                    <motion.h3 
                      className="text-xl font-bold text-white mb-6 mt-6 lg:mt-0 relative"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.2 + sectionIndex * 0.1, duration: 0.5 }}
                    >
                      {section.title}
                      <motion.div
                        className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e]"
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : {}}
                        transition={{ delay: 0.4 + sectionIndex * 0.1, duration: 0.4 }}
                      />
                    </motion.h3>
                    
                    <ul className="space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <motion.li
                          key={link.name}
                          variants={linkVariants}
                          custom={linkIndex}
                        >
                          <Link
                            href={link.href}
                            className="text-white/70 hover:text-[#ff4f01] transition-all duration-300 text-base group relative block"
                          >
                            <motion.span
                              className="relative z-10"
                              whileHover={{ x: 4 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              {link.name}
                            </motion.span>
                            <motion.div
                              className="absolute -left-2 top-1/2 w-1 h-1 bg-[#ff4f01] rounded-full opacity-0 group-hover:opacity-100"
                              initial={{ scale: 0 }}
                              whileHover={{ scale: 1 }}
                              transition={{ duration: 0.2 }}
                            />
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <div>
                <motion.div 
                  className="mt-10 flex flex-col md:flex-row items-center justify-center md:space-x-6 space-y-3 lg:space-y-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <div className="flex items-center space-x-1 text-white/70">
                    <motion.svg
                      className="w-5 h-5 text-[#ff4f01]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </motion.svg>
                    <span className="text-sm md:text-lg font-bold">{t('footer.contactEmail')}</span>
                    <motion.a
                      href="mailto:crm@stronwell.com"
                      className="text-sm md:text-lg hover:text-[#ff4f01] transition-all duration-300"
                      whileHover={{ x: 2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      crm@stronwell.com
                    </motion.a>
                  </div>
                  <div className='flex flex-row gap-2 lg:gap-8'>
                    {/* WhatsApp */}
                    <motion.a
                      href="https://wa.me/919995900918"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 hover:bg-green-500 border border-white/20 rounded-xl flex items-center justify-center transition-all duration-300 group"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      title="WhatsApp: +91 9995900918"
                    >
                      <motion.svg
                        className="w-5 h-5 text-white group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                      </motion.svg>
                    </motion.a>

                    {/* Facebook */}
                    <motion.a
                      href="https://facebook.com/stronwell.machines"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 hover:bg-blue-500 border border-white/20 rounded-xl flex items-center justify-center transition-all duration-300 group"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      title="Facebook: stronwell.machines"
                    >
                      <motion.svg
                        className="w-5 h-5 text-white group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </motion.svg>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-white/15 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              
              {/* Copyright */}
              <motion.p 
                className="text-white/60 text-base"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1, duration: 0.4 }}
              >
                © {new Date().getFullYear()} {t('footer.copyright')}
              </motion.p>

              <div className="hidden md:block"/>

              {/* Privacy and Terms */}
              <motion.div 
                className="flex items-center space-x-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.1, duration: 0.4 }}
              >
                <Link href="/privacy" className="text-white/70 hover:text-[#ff4f01] transition-all duration-300">
                  {t('footer.privacyPolicy')}
                </Link>
                <Link href="/terms" className="text-white/70 hover:text-[#ff4f01] transition-all duration-300">
                  {t('footer.termsOfService')}
                </Link>
                <Link href="/cookies" className="text-white/70 hover:text-[#ff4f01] transition-all duration-300">
                  {t('footer.cookiePolicy')}
                </Link>
              </motion.div>

              <div className="hidden md:block"/>
              

              {/* Back to Top Button */}
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center cursor-pointer space-x-2 text-white/70 hover:text-[#ff4f01] transition-all duration-300 group"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.2, duration: 0.4 }}
              >
                <span className="text-base">{t('footer.backToTop')}</span>
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </motion.svg>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
