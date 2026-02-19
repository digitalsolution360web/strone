"use client"
import { motion } from 'framer-motion'
import BgLayout from '@/components/layouts/bgLayout'
import React, { useState } from 'react'
import Link from 'next/link'

function CookiesPage() {
  const sections = [
    {
      title: "What Are Cookies?",
      content: [
        "Cookies are small text files that are stored on your device when you visit a website. They help websites remember information about your visit, such as your preferred language and other settings.",
        "Cookies make your next visit easier and the site more useful to you. They can also help us analyze web traffic patterns and optimize user experience.",
        "Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer."
      ]
    },
    {
      title: "Why We Use Cookies",
      content: [
        "We use cookies to provide you with a better browsing experience and to improve our website functionality.",
        "Cookies help us understand which parts of our website are most popular and how visitors navigate through our content.",
        "They enable us to personalize your experience and provide relevant product information and quotes.",
        "Cookies also help us maintain website security and prevent fraudulent activities."
      ]
    },
    {
      title: "Cookie Duration",
      content: [
        "Session Cookies: These temporary cookies are deleted when you close your browser.",
        "Persistent Cookies: These cookies remain on your device for a set period or until you delete them.",
        "Most of our cookies are session-based and expire when you end your browsing session.",
        "Some functional cookies may persist for up to 12 months to remember your preferences."
      ]
    },
    {
      title: "Third-Party Cookies",
      content: [
        "We may use third-party services that set their own cookies on our website.",
        "These include analytics services (like Google Analytics), social media platforms, and advertising networks.",
        "Third-party cookies are governed by the respective third party's privacy policy.",
        "We carefully select our third-party partners to ensure they meet our privacy standards."
      ]
    },
    {
      title: "Managing Your Cookie Preferences",
      content: [
        "You can control and manage cookies in various ways. Most browsers allow you to refuse or delete cookies.",
        "Browser Settings: You can set your browser to block or alert you about cookies.",
        "Cookie Preferences: Use our cookie preference center to manage specific cookie categories.",
        "Opt-out Tools: Many advertising networks provide opt-out tools for targeted advertising cookies."
      ]
    },
    {
      title: "Impact of Disabling Cookies",
      content: [
        "If you choose to disable cookies, some features of our website may not function properly.",
        "You may not be able to save preferences or access personalized content.",
        "Quote requests and form submissions may not work correctly without essential cookies.",
        "We recommend keeping essential cookies enabled for the best user experience."
      ]
    }
  ]

  return (
    <BgLayout>
      {/* Header Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center space-x-2 text-sm text-gray-300 mb-8">
              <Link href="/" className="hover:text-[#ff4f01] transition-colors duration-200">
                Home
              </Link>
              <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-[#ff4f01] font-medium">Cookie Policy</span>
            </nav>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Cookie <span className="bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Learn about how we use cookies to improve your browsing experience
            </p>
            <h3 className="text-lg font-semibold text-white mb-2">Last Updated</h3>
            <p className="text-gray-300">July 30, 2025</p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] mx-auto rounded-full mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Overview Tab */}
        <section className="pb-20 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                Understanding Cookies
              </h2>
              <p className="text-gray-300 leading-relaxed">
                At Stronwell Machines, we use cookies and similar technologies to enhance your browsing experience, 
                analyze website traffic, and provide personalized content. This Cookie Policy explains what cookies are, 
                how we use them, and how you can control them.
              </p>
            </motion.div>

            {/* Policy Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-6">{section.title}</h3>
                  <div className="space-y-4">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-300 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      {/* Contact Section */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="relative p-12 rounded-3xl overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Questions About Cookies?
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Our team is here to help you understand how we use cookies and manage your preferences.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-[#ff4f01]/25 transition-all duration-300"
                    >
                      Contact Support
                    </motion.button>
                  </Link>
                  
                  <Link href="/privacy">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold text-lg rounded-xl hover:border-[#ff4f01] hover:bg-[#ff4f01]/10 transition-all duration-300"
                    >
                      Privacy Policy
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </BgLayout>
  )
}

export default CookiesPage