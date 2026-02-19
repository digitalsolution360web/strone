"use client"
import { motion, AnimatePresence } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('EN')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'ES', name: 'Español' },
    { code: 'PT', name: 'Português' }
  ]

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Partner Edge', href: '/partner-edge' },
    { name: 'Contact Us', href: '/contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const headerVariants = {
    initial: { y: 0, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        type: "spring",
        stiffness: 120,
        damping: 25
      }
    }
  }

  const navItemVariants = {
    initial: { y: -30, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 200
      }
    }),
    hover: {
      y: -3,
      transition: { duration: 0.2, type: "spring", stiffness: 300 }
    }
  }

  const dropdownVariants = {
    initial: { opacity: 0, y: -20, scale: 0.95 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.3, 
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      y: -15, 
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  }

  const mobileMenuVariants = {
    initial: { opacity: 0, height: 0 },
    animate: { 
      opacity: 1, 
      height: "auto",
      transition: { 
        duration: 0.4,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.3 }
    }
  }

  return (
    <motion.header
      // className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full transition-all duration-500 ${
      //   isScrolled ? 'top-2' : 'top-4'
      // }`}
      className={`fixed left-1/2 transform -translate-x-1/2 z-50 w-full transition-all duration-500`}
      variants={headerVariants}
      initial="initial"
      animate="animate"
      role="banner"
    >
      <motion.nav
        className={`bg-black/80 backdrop-blur-2xl shadow-2xl transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/90 border-white/30 shadow-3xl' 
            : 'bg-black/70'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between py-3">
            <motion.div
            className="flex-shrink-0 p-4"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            >
            <Link href="/" className="flex items-center space-x-3" aria-label="Stronwell - Home">
                <motion.div 
                className="relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                <img 
                    src="/logo.png" 
                    alt="Stronwell Logo" 
                    className="h-5 sm:h-8 rounded-xl shadow-lg"
                />
                {/* <motion.div
                    className="absolute -inset-1 bg-gradient-to-br from-[#ff4f01] to-[#ff6b2e] rounded-xl opacity-30 blur-sm"
                    animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                    }}
                /> */}
                </motion.div>
            </Link>
            </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <ul className="flex items-center space-x-8" role="menubar">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  variants={navItemVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  custom={index}
                  role="none"
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setIsProductsOpen(true)}
                  onMouseLeave={() => item.hasDropdown && setIsProductsOpen(false)}
                >
                  {item.hasDropdown ? (
                    <div className="relative">
                      <button
                        className="flex items-center space-x-1 text-white/90 hover:text-[#ff4f01] transition-all duration-300 text-lg font-medium group"
                        role="menuitem"
                        aria-expanded={isProductsOpen}
                        aria-haspopup="true"
                      >
                        <span>{item.name}</span>
                        <motion.svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ rotate: isProductsOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </button>
                      
                      {/* Products Mega Menu */}
                      <AnimatePresence>
                        {isProductsOpen && (
                          <motion.div
                            className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl min-w-[480px] overflow-hidden"
                            variants={dropdownVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            role="menu"
                            aria-label="Products submenu"
                          >
                            <div className="p-6">
                              <div className="grid grid-cols-2 gap-4">
                                {productCategories.map((category, idx) => (
                                  <motion.div
                                    key={category.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                                  >
                                    <Link
                                      href={category.href}
                                      className="block p-4 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                                      role="menuitem"
                                    >
                                      <div className="flex items-start space-x-3">
                                        <motion.div 
                                          className="text-2xl"
                                          whileHover={{ scale: 1.2, rotate: 10 }}
                                          transition={{ type: "spring", stiffness: 300 }}
                                        >
                                          {category.icon}
                                        </motion.div>
                                        <div>
                                          <h3 className="text-white font-semibold text-base mb-1 group-hover:text-[#ff4f01] transition-colors">
                                            {category.name}
                                          </h3>
                                          <p className="text-white/60 text-sm">
                                            {category.description}
                                          </p>
                                        </div>
                                      </div>
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="relative text-white/90 hover:text-[#ff4f01] transition-all duration-300 text-2xl font-medium group"
                      role="menuitem"
                    >
                      {item.name}
                      <motion.div
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] group-hover:w-full transition-all duration-300"
                        layoutId="navbar-underline"
                      />
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            
            {/* Language Switcher */}
            <motion.div
              className="relative"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {/* Desktop Language Switcher - Horizontal Rectangle */}
              <div className="hidden lg:flex items-center bg-white/10 border border-white/20 rounded-xl overflow-hidden">
                {languages.map((lang, index) => (
                  <motion.button
                    key={lang.code}
                    onClick={() => setSelectedLanguage(lang.code)}
                    className={`px-4 py-2 text-base cursor-pointer font-medium transition-all duration-300 relative ${
                      selectedLanguage === lang.code
                        ? 'text-white'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Switch to ${lang.name}`}
                  >
                    {selectedLanguage === lang.code && (
                      <motion.div
                        className="absolute inset-0 bg-[#ff4f01] rounded-lg"
                        layoutId="language-selector"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 text-lg">{lang.code}</span>
                  </motion.button>
                ))}
              </div>

              {/* Mobile Language Switcher - Dropdown */}
              <motion.button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="lg:hidden flex items-center cursor-pointer space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-4 py-1 sm:py-2 text-white transition-all duration-300"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 79, 1, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                aria-label="Language selector"
                aria-expanded={isLanguageOpen}
                aria-haspopup="true"
              >
                <span className="text-base sm:text-lg font-medium">{selectedLanguage}</span>
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: isLanguageOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>

              {/* Mobile Language Dropdown */}
              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div
                    className="lg:hidden absolute top-full mt-3 right-0 bg-black/90 backdrop-blur-2xl border border-white/20 rounded-xl shadow-2xl min-w-[140px] overflow-hidden"
                    variants={dropdownVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    role="menu"
                    aria-label="Language options"
                  >
                    {languages.map((lang, idx) => (
                      <motion.button
                        key={lang.code}
                        onClick={() => {
                          setSelectedLanguage(lang.code)
                          setIsLanguageOpen(false)
                        }}
                        className={`w-full text-left px-4 py-3 text-lg cursor-pointer transition-all duration-200 ${
                          selectedLanguage === lang.code
                            ? 'bg-[#ff4f01] text-white'
                            : 'text-white/80 hover:bg-white/10 hover:text-[#ff4f01]'
                        }`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: idx * 0.05 }}
                        whileHover={{ x: 4 }}
                        role="menuitem"
                      >
                        <div className="flex items-center justify-between">
                          <span>{lang.code}</span>
                        </div>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 mr-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                <motion.span
                  className="block w-5 h-0.5 bg-white rounded-full"
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 6 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block w-5 h-0.5 bg-white rounded-full"
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block w-5 h-0.5 bg-white rounded-full"
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -6 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              className="lg:hidden border-t border-white/20 mt-4"
              variants={mobileMenuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="px-2 py-6">
                <ul className="space-y-0" role="menu">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      role="none"
                    >
                      {item.hasDropdown ? (
                        <div className="space-y-2">
                          <Link
                            href={item.href}
                            className="flex items-center justify-between text-white/90 hover:text-[#ff4f01] text-lg font-medium py-3 px-4 rounded-xl hover:bg-white/10 transition-all duration-300"
                            onClick={() => setIsMobileMenuOpen(false)}
                            role="menuitem"
                          >
                            <motion.span
                              whileHover={{ x: 4 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              {item.name}
                            </motion.span>
                          </Link>
                          <div className="pl-4 space-y-1">
                            {productCategories.map((category, catIndex) => (
                              <motion.div
                                key={category.name}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.3, delay: (index + catIndex) * 0.05 }}
                              >
                                <Link
                                  href={category.href}
                                  className="flex items-center space-x-3 text-white/70 hover:text-[#ff4f01] text-base py-2 px-4 rounded-lg hover:bg-white/5 transition-all duration-300"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  role="menuitem"
                                >
                                  <span className="text-lg">{category.icon}</span>
                                  <motion.span
                                    whileHover={{ x: 4 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                  >
                                    {category.name}
                                  </motion.span>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="block text-white/90 hover:text-[#ff4f01] text-lg font-medium py-3 px-4 rounded-xl hover:bg-white/10 transition-all duration-300"
                          onClick={() => setIsMobileMenuOpen(false)}
                          role="menuitem"
                        >
                          <motion.span
                            whileHover={{ x: 4 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {item.name}
                          </motion.span>
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Click Outside Overlay */}
      <AnimatePresence>
        {(isLanguageOpen || isProductsOpen) && (
          <motion.div
            className="fixed inset-0 z-[-1]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setIsLanguageOpen(false)
              setIsProductsOpen(false)
            }}
          />
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header