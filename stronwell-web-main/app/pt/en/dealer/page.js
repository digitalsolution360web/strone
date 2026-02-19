"use client"
import { motion } from 'framer-motion'
import BgLayout from '@/components/layouts/bgLayout'
import React, { useState } from 'react'
import Link from 'next/link'

function DealerPage() {
  const [showThankYouModal, setShowThankYouModal] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // Form data state
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    contactNumber: '',
    currentBrands: '',
    city: '',
    country: '',
    dataConsent: false
  })

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.dataConsent) {
      alert('Please accept the data consent checkbox to proceed.')
      return
    }
    
    setIsSubmitting(true)

    try {
      // Create FormData for submission
      const formSubmitData = new FormData()
      formSubmitData.append('_subject', `New Dealer Application from ${formData.companyName}`)
      formSubmitData.append('_captcha', 'false')
      formSubmitData.append('_template', 'table')
      formSubmitData.append('_autoresponse', 'Thank you for your dealer application. We will review your application and get back to you within 48 hours.')
      
      // Add all form fields
      Object.keys(formData).forEach(key => {
        if (key === 'dataConsent') {
          formSubmitData.append(key, formData[key] ? 'Yes' : 'No')
        } else {
          formSubmitData.append(key, formData[key])
        }
      })

      // Submit using fetch with no-cors mode to avoid redirect
      fetch('https://formsubmit.co/scmintern7@gmail.com', {
        method: 'POST',
        mode: 'no-cors',
        body: formSubmitData
      }).then(() => {
        setIsSubmitting(false)
        setShowThankYouModal(true)
        
        // Reset form
        setFormData({
          companyName: '',
          email: '',
          contactNumber: '',
          currentBrands: '',
          city: '',
          country: '',
          dataConsent: false
        })

        // Auto redirect after 5 seconds
        setTimeout(() => {
          window.location.href = '/'
        }, 5000)
      }).catch(() => {
        setIsSubmitting(false)
        setShowThankYouModal(true)
        
        // Reset form
        setFormData({
          companyName: '',
          email: '',
          contactNumber: '',
          currentBrands: '',
          city: '',
          country: '',
          dataConsent: false
        })

        // Auto redirect after 5 seconds
        setTimeout(() => {
          window.location.href = '/'
        }, 5000)
      })

    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your dealer application. Please try again.')
      setIsSubmitting(false)
    }
  }

  return (
    <BgLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/banners/grass-banner.jpg"
            alt="Dealer Partnership"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Become a <span className="bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] bg-clip-text text-transparent">Dealer</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join our network of trusted dealers and grow your business with premium quality machinery and equipment
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <a href="#application-form">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 cursor-pointer bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-[#ff4f01]/25 transition-all duration-100"
              >
                Apply Now
              </motion.button>
            </a>
            
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 cursor-pointer bg-transparent border-2 border-white/30 text-white font-bold text-lg rounded-xl hover:border-[#ff4f01] hover:bg-[#ff4f01]/10 transition-all duration-100"
              >
                View Products
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-25 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-[#ff4f01] rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Partner <span className="bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] bg-clip-text text-transparent">With Us?</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Premium Products",
                description: "Access to high-quality machinery and equipment with proven reliability and performance."
              },
              {
                icon: "💰",
                title: "Competitive Margins",
                description: "Attractive profit margins and flexible pricing structures to maximize your business growth."
              },
              {
                icon: "🚀",
                title: "Marketing Support",
                description: "Comprehensive marketing materials, training, and promotional support to boost your sales."
              },
              {
                icon: "🛠️",
                title: "Technical Training",
                description: "Expert training programs to ensure you and your team are well-equipped with product knowledge."
              },
              {
                icon: "📈",
                title: "Business Growth",
                description: "Join a growing network and expand your business with our established brand reputation."
              },
              {
                icon: "🤝",
                title: "Dedicated Support",
                description: "24/7 support from our experienced team to help you succeed in your market."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#ff4f01]/30 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-10 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Dealer <span className="bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] bg-clip-text text-transparent">Application</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Fill out the form below to start your journey as a Stronwell dealer
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] mx-auto rounded-full mt-6" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Company Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#ff4f01] transition-colors duration-300"
                    placeholder="Your company name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#ff4f01] transition-colors duration-300"
                    placeholder="company@example.com"
                  />
                </div>

                {/* Contact Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#ff4f01] transition-colors duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                {/* Current Brands */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Current Brands
                  </label>
                  <input
                    type="text"
                    name="currentBrands"
                    value={formData.currentBrands}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#ff4f01] transition-colors duration-300"
                    placeholder="e.g., Honda, Yamaha, Suzuki"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#ff4f01] transition-colors duration-300"
                    placeholder="Your city"
                  />
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Country *
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#ff4f01] transition-colors duration-300"
                    placeholder="Your country"
                  />
                </div>
              </div>

              {/* Data Consent Checkbox */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="dataConsent"
                  name="dataConsent"
                  checked={formData.dataConsent}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-5 h-5 text-[#ff4f01] bg-white/10 border-white/20 rounded focus:ring-[#ff4f01] focus:ring-2"
                />
                <label htmlFor="dataConsent" className="text-sm text-gray-300 leading-relaxed">
                  You understand that when you click on submit, Stronwell Machines and its affiliates will use your personal data to respond to you. *
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-4 px-6 rounded-xl cursor-pointer font-bold text-lg transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] hover:shadow-lg hover:shadow-[#ff4f01]/25'
                } text-white`}
              >
                {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative p-12 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, #ff4f01 0%, transparent 50%), 
                                 radial-gradient(circle at 75% 75%, #ff6b2e 0%, transparent 50%)`
              }} />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Questions About <span className="text-[#ff4f01]">Partnership?</span>
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our team is here to help you understand the benefits and requirements of becoming a Stronwell dealer.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 cursor-pointer bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-[#ff4f01]/25 transition-all duration-100"
                  >
                    Contact Us
                  </motion.button>
                </Link>
                
                <Link href="/partner-edge">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 cursor-pointer bg-transparent border-2 border-white/30 text-white font-bold text-lg rounded-xl hover:border-[#ff4f01] hover:bg-[#ff4f01]/10 transition-all duration-100"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Thank You Modal */}
      {showThankYouModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 max-w-md w-full text-center"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-6"></div>
              <div className="flex-1"></div>
              <button
                onClick={() => {
                  setShowThankYouModal(false)
                  window.location.href = '/'
                }}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-2xl font-bold text-white mb-4">Application Submitted!</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Thank you for your interest in becoming a Stronwell dealer. We will review your application and get back to you within 48 hours.
            </p>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 mb-6">
              <p className="text-sm text-gray-300 mb-2">
                Have questions?
              </p>
              <p className="text-[#ff4f01] font-medium">
                crm@stronwell.com
              </p>
            </div>

            <p className="text-sm text-gray-400">
              Redirecting to home page in 5 seconds...
            </p>
          </motion.div>
        </div>
      )}
    </BgLayout>
  )
}

export default DealerPage