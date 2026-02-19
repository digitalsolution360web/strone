"use client"
import React, { createContext, useContext, useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

const LanguageContext = createContext()

export const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' }
]

export function LanguageProvider({ children }) {
  // Default to Spanish
  const [currentLanguage, setCurrentLanguage] = useState('es')

  // Function to switch language (without navigation)
  const switchLanguage = (langCode) => {
    setCurrentLanguage(langCode)
  }

  // Get current language object
  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === currentLanguage) || languages[0]
  }

  return (
    <LanguageContext.Provider value={{ 
      currentLanguage, 
      switchLanguage, 
      getCurrentLanguage,
      languages 
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
