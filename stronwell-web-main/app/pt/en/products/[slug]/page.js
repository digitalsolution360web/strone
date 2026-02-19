"use client"
import { motion } from 'framer-motion'
import BgLayout from '@/components/layouts/bgLayout'
import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import modelsData from './models.json'

function ModelPage() {
  const params = useParams()
  const slug = params.slug
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedImageGroup, setSelectedImageGroup] = useState(0)
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [showThankYouModal, setShowThankYouModal] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Form data state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    productName: '',
    productCodes: '',
    message: ''
  })

  // Get product data based on slug
  const productData = useMemo(() => {
    const productGroups = modelsData.filter(item => item.product === slug)
    return productGroups
  }, [slug])

  // Filter models based on search term
  const filteredModels = useMemo(() => {
    if (!searchTerm) return productData

    return productData.filter(group => 
      group.models.some(model => 
        Object.values(model).some(value => 
          value && value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    ).map(group => ({
      ...group,
      models: group.models.filter(model =>
        Object.values(model).some(value => 
          value && value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    }))
  }, [productData, searchTerm])

  // Get product title from slug
  const getProductTitle = (slug) => {
    return slug.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  }

  // Get category name
  const getCategoryName = (category) => {
    return category.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  }

  // Count total models
  const totalModels = productData.reduce((total, group) => total + group.models.length, 0)

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create FormData for submission
      const formSubmitData = new FormData()
      formSubmitData.append('_subject', `New Lead of ${formData.productName} from Website`)
      formSubmitData.append('_captcha', 'false')
      formSubmitData.append('_template', 'table')
      formSubmitData.append('_autoresponse', 'Thank you for your quote request. We will get back to you within 24 hours.')
      
      // Add all form fields
      Object.keys(formData).forEach(key => {
        formSubmitData.append(key, formData[key])
      })

      // Submit using fetch with no-cors mode to avoid redirect
      fetch('https://formsubmit.co/scmintern7@gmail.com', {
        method: 'POST',
        mode: 'no-cors', // This prevents redirect and CORS issues
        body: formSubmitData
      }).then(() => {
        // Form submitted successfully (no-cors mode always resolves)
        setIsSubmitting(false)
        setShowQuoteModal(false)
        setShowThankYouModal(true)
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          country: '',
          productName: '',
          productCodes: '',
          message: ''
        })

        // Auto redirect after 5 seconds
        setTimeout(() => {
          window.location.href = '/'
        }, 5000)
      }).catch(() => {
        // Even if there's an error, assume it worked (no-cors limitations)
        setIsSubmitting(false)
        setShowQuoteModal(false)
        setShowThankYouModal(true)
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          country: '',
          productName: '',
          productCodes: '',
          message: ''
        })

        // Auto redirect after 5 seconds
        setTimeout(() => {
          window.location.href = '/'
        }, 5000)
      })

    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your quote request. Please try again.')
      setIsSubmitting(false)
    }
  }

  // Open quote modal with pre-filled product name
  const openQuoteModal = () => {
    setFormData(prev => ({
      ...prev,
      productName: getProductTitle(slug)
    }))
    setShowQuoteModal(true)
  }

  if (productData.length === 0) {
    return (
      <BgLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Product Not Found</h1>
            <p className="text-gray-300 mb-8">The product you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/products">
              <button className="px-6 py-3 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] text-white font-bold rounded-xl">
                Back to Products
              </button>
            </Link>
          </div>
        </div>
      </BgLayout>
    )
  }

  return (
    <BgLayout>
      {/* Product Header Section (Acts as Hero) */}
      <section className="py-5 lg:py-10 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <nav className="flex items-center space-x-2 text-sm text-gray-300">
              <Link href="/" className="hover:text-[#ff4f01] transition-colors duration-200">
                Home
              </Link>
              <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <Link href="/products" className="hover:text-[#ff4f01] transition-colors duration-200">
                Products
              </Link>
              <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-[#ff4f01] font-medium">{getProductTitle(slug)}</span>
            </nav>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Product Images */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                {/* Main Image */}
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                  <img
                    src={`/products/${productData[selectedImageGroup]?.image}`}
                    alt={getProductTitle(slug)}
                    className="w-full object-cover"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#ff4f01]/90 backdrop-blur-sm text-white text-sm font-bold rounded-full">
                    {getCategoryName(productData[0]?.category)}
                  </div>
                </div>

                {/* Image Thumbnails */}
                {productData.length > 1 && (
                  <div className="grid grid-cols-4 gap-3">
                    {productData.map((group, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImageGroup(index)}
                        className={`relative rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                          selectedImageGroup === index 
                            ? 'border-[#ff4f01] scale-105' 
                            : 'border-white/20 hover:border-white/40'
                        }`}
                      >
                        <img
                          src={`/products/${group.image}`}
                          alt={`Variant ${index + 1}`}
                          className="w-full h-16 object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              
              {/* Product Title */}
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                  {getProductTitle(slug)}
                </h1>
                <p className="text-xl text-gray-300">
                  Professional {getCategoryName(productData[0]?.category)} Equipment
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <div className="text-2xl font-bold text-[#ff4f01] mb-1">{productData.length}</div>
                  <div className="text-sm text-gray-300">Variants</div>
                </div>
                <div className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <div className="text-2xl font-bold text-[#ff4f01] mb-1">{totalModels}</div>
                  <div className="text-sm text-gray-300">Models</div>
                </div>
                <div className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <div className="text-2xl font-bold text-[#ff4f01] mb-1">24/7</div>
                  <div className="text-sm text-gray-300">Support</div>
                </div>
              </div>

              {/* Common Features */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  {/* <span className="text-2xl mr-3">✨</span> */}
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {productData[selectedImageGroup]?.sharedDescription?.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-[#ff4f01] rounded-full mt-2 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={openQuoteModal}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full cursor-pointer sm:w-auto px-8 py-4 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-[#ff4f01]/25 transition-all duration-300"
                >
                  Get Quote
                </motion.button>
                
                <Link href="/partner-edge">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full cursor-pointer sm:w-auto px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold text-lg rounded-xl hover:border-[#ff4f01] hover:bg-[#ff4f01]/10 transition-all duration-300"
                  >
                    Become Partner
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section className="py-5 lg:py-10 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header with Search */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Available <span className="bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] bg-clip-text text-transparent">Models</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] mx-auto rounded-full mb-8" />
            
            {/* Search Box */}
            <div className="max-w-md mx-auto relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search models by specifications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#ff4f01] transition-colors duration-300"
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              {searchTerm && (
                <div className="text-sm text-gray-400 mt-2">
                  Showing models matching &quot;{searchTerm}&quot;
                </div>
              )}
            </div>
          </motion.div>

          {/* Models Grid */}
          <div className="space-y-12">
            {filteredModels.length > 0 ? (
              filteredModels.map((group, groupIndex) => (
                <motion.div
                  key={`${group.image}-${groupIndex}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
                >
                  
                  {/* Group Header */}
                  {/* <div className="p-6 border-b border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <img
                          src={`/products/${group.image}`}
                          alt={`Variant ${groupIndex + 1}`}
                          className="w-16 h-16 object-cover rounded-xl"
                        />
                        <div>
                          <h3 className="text-xl font-bold text-white">Variant {groupIndex + 1}</h3>
                          <p className="text-gray-300">{group.models.length} models available</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Image ID</div>
                        <div className="font-mono text-[#ff4f01]">{group.image}</div>
                      </div>
                    </div>
                  </div> */}

                  {/* Models List */}
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {group.models.map((model, modelIndex) => (
                        <motion.div
                          key={`${model.model || modelIndex}`}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: modelIndex * 0.1 }}
                          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#ff4f01]/30 transition-all duration-300"
                        >
                          
                          {/* Model Header */}
                          {model.model && (
                            <div className="mb-4 pb-3 border-b border-white/10">
                              <h4 className="text-lg font-bold text-white">{model.model}</h4>
                            </div>
                          )}

                          {/* Model Specifications */}
                          <div className="space-y-3">
                            {Object.entries(model).map(([key, value]) => {
                              if (key === 'model' || !value) return null
                              
                              return (
                                <div key={key} className="flex justify-between items-start">
                                  <span className="text-gray-400 text-sm capitalize min-w-0 mr-3">
                                    {key.replace(/([A-Z])/g, ' $1').trim()}:
                                  </span>
                                  <span className="text-white text-sm font-medium text-right">
                                    {typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value}
                                  </span>
                                </div>
                              )
                            })}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              /* No Results */
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No models found</h3>
                <p className="text-gray-300 mb-8">Try adjusting your search term or browse all models.</p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="px-6 py-3 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] text-white font-bold rounded-xl hover:scale-105 transition-transform duration-300"
                >
                  Show All Models
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-5 lg:py-10 px-6 lg:px-8">
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
                Need More Information?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our technical team can help you choose the right model and provide detailed specifications.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 lg:text-xl cursor-pointer bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-[#ff4f01]/25 transition-all duration-300"
                  >
                    Technical Support
                  </motion.button>
                </Link>
                
                <Link href="/products">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 lg:text-xl cursor-pointer bg-transparent border-2 border-white/30 text-white font-bold text-lg rounded-xl hover:border-[#ff4f01] hover:bg-[#ff4f01]/10 transition-all duration-300"
                  >
                    Browse All Products
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Request Quote</h2>
              <button
                onClick={() => setShowQuoteModal(false)}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                        </label>
                        <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#ff4f01] transition-colors duration-300"
                        placeholder="Your full name"
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
                        placeholder="your.email@example.com"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number *
                        </label>
                        <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#ff4f01] transition-colors duration-300"
                        placeholder="+1 (555) 123-4567"
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

                    {/* Product Name - Pre-filled */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                        Product Name
                        </label>
                        <input
                        type="text"
                        name="productName"
                        value={formData.productName}
                        onChange={handleInputChange}
                        readOnly
                        className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-gray-300 cursor-not-allowed"
                        />
                    </div>

                    {/* Product Codes */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                        Product Codes (If Any)
                        </label>
                        <input
                        type="text"
                        name="productCodes"
                        value={formData.productCodes}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#ff4f01] transition-colors duration-300"
                        placeholder="e.g., BBC26DC, BBC33DC"
                        />
                    </div>
                </div>

                {/* Message */}
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message with Quantity *
                    </label>
                    <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#ff4f01] transition-colors duration-300 resize-none"
                    placeholder="Please provide details about your requirements and mention the quantity you need..."
                    />
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
                {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      )}

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

            <div className="text-6xl mb-6">✅</div>
            <h2 className="text-2xl font-bold text-white mb-4">Thank You!</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your quote request has been submitted successfully. Our team will review your requirements and get back to you within 24 hours.
            </p>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 mb-6">
              <p className="text-sm text-gray-300 mb-2">
                Need immediate support?
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

export default ModelPage