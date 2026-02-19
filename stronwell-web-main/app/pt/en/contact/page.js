"use client"
import BgLayout from '@/components/layouts/bgLayout'
import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import Link from 'next/link'

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    company: '',
    requirement: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formElement = e.target
      const formDataObj = new FormData(formElement)
      
      const response = await fetch('https://formsubmit.co/scmintern7@gmail.com', {
        method: 'POST',
        body: formDataObj
      })

      if (response.ok) {
        setShowThankYou(true)
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          country: '',
          company: '',
          requirement: '',
          message: ''
        })
        
        // Auto redirect after 5 seconds
        setTimeout(() => {
          window.location.href = '/'
        }, 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeModal = () => {
    setShowThankYou(false)
    window.location.href = '/'
  }

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  }

  return (
    <BgLayout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <motion.img
            src="/banners/grass-banner.jpg"
            alt="Contact Stronwell"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
          
          {/* Brand Color Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff4f01]/20 via-transparent to-[#ff6b2e]/20" />
        </div>

        {/* Hero Content */}
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center max-w-5xl mx-auto px-6 lg:px-8"
        >
          
          {/* Breadcrumb */}
          <motion.div variants={contentVariants} className="mb-8">
            <nav className="flex justify-center">
              <ol className="flex items-center space-x-2 text-sm text-gray-300">
                <li>
                  <Link href="/" className="hover:text-[#ff4f01] transition-colors duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </li>
                <li className="text-[#ff4f01] font-medium">Contact</li>
              </ol>
            </nav>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={contentVariants} className="mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
              <motion.span
                className="block mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Contact
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Stronwell
              </motion.span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={contentVariants} className="mb-12">
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your industrial operations? Let&apos;s discuss your requirements and find the perfect solution.
            </p>
          </motion.div>

          {/* Quick Contact Stats */}
          <motion.div
            variants={contentVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { number: "24/7", label: "Support Available" },
              { number: "< 1hr", label: "Response Time" },
              { number: "21+", label: "Countries Served" },
              { number: "100%", label: "Satisfaction Rate" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              >
                <div className="text-2xl lg:text-3xl font-bold text-[#ff4f01] mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="py-5 lg:py-10 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-8 ">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                  Get in <span className="bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] bg-clip-text text-transparent">Touch</span>
                </h2>
                
                <div className="space-y-6 ">
                  
                  {/* Email */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-[#ff4f01]/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">Email</h3>
                      <Link href="mailto:crm@stronwell.com" className="text-gray-300 hover:text-[#ff4f01] transition-colors">
                        crm@stronwell.com
                      </Link>
                    </div>
                  </motion.div>

                  {/* WhatsApp */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-[#ff4f01]/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">WhatsApp</h3>
                      <Link href="https://wa.me/919995900918" className="text-gray-300 hover:text-green-400 transition-colors">
                        +91 9995900918
                      </Link>
                    </div>
                  </motion.div>

                  {/* Facebook */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-[#ff4f01]/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">Facebook</h3>
                      <Link href="https://facebook.com/stronwell.machines" className="text-gray-300 hover:text-blue-400 transition-colors">
                        stronwell.machines
                      </Link>
                    </div>
                  </motion.div>

                  {/* Address */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-[#ff4f01]/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">Address</h3>
                      <Link href="https://maps.app.goo.gl/6xCYBSgjGfJfArtY9" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">
                        <p className="text-gray-300 hover:text-purple-400 transition-colors text-sm leading-relaxed">
                            Plot No. 756, 2nd Floor,<br />
                            Udyog Vihar Phase - 5,<br />
                            Gurugram, Haryana, India
                        </p>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={formVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-8">Send us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Hidden FormSubmit fields */}
                  <input type="hidden" name="_next" value="javascript:void(0)" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Full Name */}
                    <motion.div variants={inputVariants} whileFocus="focus">
                      <label className="block text-white font-medium mb-2">
                        Full Name <span className="text-[#ff4f01]">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#ff4f01] focus:outline-none transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </motion.div>

                    {/* Email */}
                    <motion.div variants={inputVariants} whileFocus="focus">
                      <label className="block text-white font-medium mb-2">
                        Email <span className="text-[#ff4f01]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#ff4f01] focus:outline-none transition-all duration-300"
                        placeholder="Enter your email"
                      />
                    </motion.div>

                    {/* Phone */}
                    <motion.div variants={inputVariants} whileFocus="focus">
                      <label className="block text-white font-medium mb-2">
                        Phone <span className="text-[#ff4f01]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#ff4f01] focus:outline-none transition-all duration-300"
                        placeholder="Enter your phone number"
                      />
                    </motion.div>

                    {/* Country */}
                    <motion.div variants={inputVariants} whileFocus="focus">
                      <label className="block text-white font-medium mb-2">
                        Country <span className="text-[#ff4f01]">*</span>
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#ff4f01] focus:outline-none transition-all duration-300"
                        placeholder="Enter your country"
                      />
                    </motion.div>

                    {/* Company */}
                    <motion.div variants={inputVariants} whileFocus="focus">
                      <label className="block text-white font-medium mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#ff4f01] focus:outline-none transition-all duration-300"
                        placeholder="Enter your company name (optional)"
                      />
                    </motion.div>

                    {/* Requirement */}
                    <motion.div variants={inputVariants} whileFocus="focus">
                      <label className="block text-white font-medium mb-2">
                        Requirement <span className="text-[#ff4f01]">*</span>
                      </label>
                      <select
                        name="requirement"
                        value={formData.requirement}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-[#ff4f01] focus:outline-none transition-all duration-300"
                      >
                        <option value="" className="bg-gray-800">Select requirement type</option>
                        <option value="Buyer" className="bg-gray-800">Buyer</option>
                        <option value="Dealer" className="bg-gray-800">Dealer</option>
                        <option value="General Enquiry" className="bg-gray-800">General Enquiry</option>
                      </select>
                    </motion.div>
                  </div>

                  {/* Message */}
                  <motion.div variants={inputVariants} whileFocus="focus">
                    <label className="block text-white font-medium mb-2">
                      Message <span className="text-[#ff4f01]">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#ff4f01] focus:outline-none transition-all duration-300 resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full cursor-pointer px-8 py-4 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-[#ff4f01]/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <span>Send Message</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </div>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Thank You Modal */}
      <AnimatePresence>
        {showThankYou && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 max-w-md mx-auto text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your message has been sent successfully. Our team will get back to you soon.
              </p>
              <p className="text-sm text-gray-400 mb-6">
                For immediate assistance, contact us at:{' '}
                <Link href="mailto:crm@stronwell.com" className="text-[#ff4f01] hover:underline">
                  crm@stronwell.com
                </Link>
              </p>
              
              <motion.button
                onClick={closeModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 cursor-pointer bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] text-white font-bold rounded-xl"
              >
                Close
              </motion.button>
              
              <p className="text-xs text-gray-500 mt-4">Redirecting to home in 5 seconds...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </BgLayout>
  )
}

export default ContactPage