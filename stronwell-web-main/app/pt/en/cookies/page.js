"use client"
import { motion } from 'framer-motion'
import BgLayout from '@/components/layouts/bgLayout'
import React, { useState } from 'react'
import Link from 'next/link'

function CookiesPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const cookieTypes = [
    {
      id: 'essential',
      name: 'Essential Cookies',
      icon: '🔧',
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      examples: [
        'Session management and user authentication',
        'Security features and fraud prevention',
        'Load balancing and website performance',
        'Form submission and data processing'
      ],
      canDisable: false
    },
    {
      id: 'analytics',
      name: 'Analytics Cookies',
      icon: '📊',
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: [
        'Page views and user navigation patterns',
        'Traffic sources and referral information',
        'Device and browser information',
        'Time spent on pages and bounce rates'
      ],
      canDisable: false
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      icon: '🎯',
      description: 'These cookies are used to deliver relevant advertisements and track campaigns.',
      examples: [
        'Personalized content and product recommendations',
        'Advertisement effectiveness tracking',
        'Social media integration and sharing',
        'Retargeting and remarketing campaigns'
      ],
      canDisable: false
    },
    {
      id: 'functional',
      name: 'Functional Cookies',
      icon: '⚙️',
      description: 'These cookies enhance website functionality and personalization.',
      examples: [
        'Language and region preferences',
        'User interface customization',
        'Form auto-fill and saved preferences',
        'Chat and support widget functionality'
      ],
      canDisable: false
    }
  ]

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
            className="text-center mb-16"
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
            <div className="w-24 h-1 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] mx-auto rounded-full mt-8" />
          </motion.div>

          {/* Last Updated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-12"
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Last Updated</h3>
                <p className="text-gray-300">July 30, 2025</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400 mb-1">Effective Date</p>
                <p className="text-[#ff4f01] font-medium">July 30, 2025</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="pb-12 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {[
              { id: 'overview', label: 'Overview', icon: '📋' },
              { id: 'types', label: 'Cookie Types', icon: '🍪' },
              { id: 'settings', label: 'Settings', icon: '⚙️' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] text-white'
                    : 'bg-white/5 border border-white/20 text-gray-300 hover:border-[#ff4f01]/50'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
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
                <span className="text-3xl mr-3">🍪</span>
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
      )}

      {/* Cookie Types Tab */}
      {activeTab === 'types' && (
        <section className="pb-20 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Types of Cookies We Use</h2>
              <p className="text-gray-300">Learn about the different categories of cookies and their purposes</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cookieTypes.map((type, index) => (
                <motion.div
                  key={type.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#ff4f01]/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <span className="text-3xl mr-3">{type.icon}</span>
                      <h3 className="text-xl font-bold text-white">{type.name}</h3>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      type.canDisable 
                        ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' 
                        : 'bg-red-500/20 text-red-300 border border-red-500/30'
                    }`}>
                      {type.canDisable ? 'Optional' : 'Required'}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{type.description}</p>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">Examples:</h4>
                    <ul className="space-y-2">
                      {type.examples.map((example, eIndex) => (
                        <li key={eIndex} className="flex items-start text-gray-300 text-sm">
                          <div className="w-2 h-2 bg-[#ff4f01] rounded-full mt-2 mr-3 flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Settings Tab */}
      {activeTab === 'settings' && (
        <section className="pb-20 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Cookie Preferences</h2>
              <p className="text-gray-300">Manage your cookie settings and preferences</p>
            </motion.div>

            {/* Cookie Controls */}
            <div className="space-y-6">
              {cookieTypes.map((type, index) => (
                <motion.div
                  key={type.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex items-center justify-between"
                >
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">{type.icon}</span>
                      <h3 className="text-lg font-semibold text-white">{type.name}</h3>
                    </div>
                    <p className="text-gray-300 text-sm">{type.description}</p>
                  </div>
                  
                  <div className="ml-6">
                    {type.canDisable ? (
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ff4f01]"></div>
                      </label>
                    ) : (
                      <span className="px-4 py-2 bg-gray-700 text-gray-400 rounded-lg text-sm font-medium">
                        Always Active
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Browser Instructions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-12 bg-gradient-to-r from-[#ff4f01]/10 to-[#ff6b2e]/10 backdrop-blur-sm border border-[#ff4f01]/20 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="text-2xl mr-3">🌐</span>
                Browser Cookie Settings
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { browser: 'Chrome', instruction: 'Settings > Privacy and security > Cookies and other site data' },
                  { browser: 'Firefox', instruction: 'Options > Privacy & Security > Cookies and Site Data' },
                  { browser: 'Safari', instruction: 'Preferences > Privacy > Cookies and website data' },
                  { browser: 'Edge', instruction: 'Settings > Cookies and site permissions > Cookies and site data' }
                ].map((item, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">{item.browser}</h4>
                    <p className="text-gray-300 text-sm">{item.instruction}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

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
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, #ff4f01 0%, transparent 50%), 
                                   radial-gradient(circle at 75% 75%, #ff6b2e 0%, transparent 50%)`
                }} />
              </div>

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