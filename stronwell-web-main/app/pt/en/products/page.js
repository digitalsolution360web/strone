"use client"
import { motion } from 'framer-motion'
import BgLayout from '@/components/layouts/bgLayout'
import React, { useState } from 'react'
import Link from 'next/link'
import categoryData from './category.json'

function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

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

  // Get all categories
  const categories = Object.keys(categoryData.products)
  
  // Get all products flattened
  const allProducts = Object.values(categoryData.products).flat()

  // Filter products based on active category and search term
  const getFilteredProducts = () => {
    let filtered = activeCategory === 'all' ? allProducts : categoryData.products[activeCategory] || []
    
    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    
    return filtered
  }

  const filteredProducts = getFilteredProducts()

  // Format category name for display
  const formatCategoryName = (category) => {
    return category.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  }

  // Get product count for category
  const getCategoryCount = (category) => {
    return category === 'all' ? allProducts.length : (categoryData.products[category]?.length || 0)
  }

  return (
    <BgLayout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <motion.img
            src="/banners/home-banner-small.png"
            alt="Stronwell Products - Quality Equipment"
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
          className="relative z-10 text-center max-w-6xl mx-auto px-6 lg:px-8"
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
                <li className="text-[#ff4f01] font-medium">Products</li>
              </ol>
            </nav>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={contentVariants} className="mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-6">
              <motion.span
                className="block mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Our
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Products
              </motion.span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={contentVariants} className="mb-12">
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive range of high-quality outdoor power equipment designed for professionals and enthusiasts alike.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={contentVariants}
            className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#ff4f01] mb-2">{categories.length}</div>
              <div className="text-sm text-gray-300 font-medium">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#ff4f01] mb-2">{allProducts.length}</div>
              <div className="text-sm text-gray-300 font-medium">Products</div>
            </div>
            <div className="text-center col-span-2 lg:col-span-1">
              <div className="text-3xl lg:text-4xl font-bold text-[#ff4f01] mb-2">24/7</div>
              <div className="text-sm text-gray-300 font-medium">Support</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="flex flex-col items-center space-y-2 text-white/60">
            <span className="text-sm font-medium">Explore Products</span>
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
          </div>
        </motion.div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-5 lg:py-10 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="max-w-md mx-auto relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#ff4f01] transition-colors duration-300"
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Category Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {/* All Products Tab */}
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === 'all'
                    ? 'bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] text-white shadow-lg'
                    : 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                All Products ({getCategoryCount('all')})
              </button>
              
              {/* Category Tabs */}
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] text-white shadow-lg'
                      : 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {formatCategoryName(category)} ({getCategoryCount(category)})
                </button>
              ))}
            </div>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={`${product.category}-${product.id}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <Link href={product.link}>
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-[#ff4f01]/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                        
                        {/* Product Image */}
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                          
                          {/* Category Badge */}
                          <div className="absolute top-4 left-4 px-3 py-1 bg-[#ff4f01]/90 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                            {formatCategoryName(product.category)}
                          </div>
                        </div>

                        {/* Product Info */}
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ff4f01] transition-colors duration-300">
                            {product.title}
                          </h3>
                          
                          {/* View Details Button */}
                          <div className="flex items-center text-[#ff4f01] font-medium group-hover:text-[#ff6b2e] transition-colors duration-300">
                            <span className="mr-2">View Details</span>
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
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
                <h3 className="text-2xl font-bold text-white mb-4">No products found</h3>
                <p className="text-gray-300 mb-8">Try adjusting your search term or category filter.</p>
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setActiveCategory('all')
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] text-white font-bold rounded-xl hover:scale-105 transition-transform duration-300"
                >
                  View All Products
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 lg:py-10 px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative p-12 rounded-3xl overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, #ff4f01 0%, transparent 50%), 
                                 radial-gradient(circle at 75% 75%, #ff6b2e 0%, transparent 50%)`
              }} />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Need Help Choosing the Right Product?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our expert team is ready to help you find the perfect equipment for your specific needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 lg:text-xl cursor-pointer bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-[#ff4f01]/25 transition-all duration-300"
                  >
                    Get Expert Advice
                  </motion.button>
                </Link>
                
                <Link href="/dealer">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 lg:text-xl cursor-pointer bg-transparent border-2 border-white/30 text-white font-bold text-lg rounded-xl hover:border-[#ff4f01] hover:bg-[#ff4f01]/10 transition-all duration-300"
                  >
                    Become Distributor
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </BgLayout>
  )
}

export default ProductsPage