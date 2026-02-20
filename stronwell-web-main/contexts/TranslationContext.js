'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import enTranslations from './translations-en.json'
import esTranslations from './translations-es.json'
import ptTranslations from './translations-pt.js'

const translations = {
  en: enTranslations,
  es: esTranslations,
  pt: ptTranslations
}

// Country codes for Spanish-speaking regions (excluding Portuguese-speaking)
const SPANISH_COUNTRIES = [
  'MX', 'GT', 'BZ', 'SV', 'HN', 'NI', 'CR', 'PA',
  'CO', 'EC', 'PE', 'BO', 'CL', 'AR', 'PY', 'UY', 'VE', 'GY', 'SR', 'GF'
]
// Portuguese-speaking: BR (Brazil), PT (Portugal), AO, MZ, etc.
const PORTUGUESE_COUNTRIES = ['BR', 'PT', 'AO', 'MZ', 'CV', 'GW', 'ST', 'TL']

const TranslationContext = createContext()

export function TranslationProvider({ children }) {
  const [locale, setLocale] = useState('es') // Default to Spanish
  const [isLoading, setIsLoading] = useState(true)

  // Detect user's country and set initial locale
  useEffect(() => {
    const detectLocale = async () => {
      try {
        // Check if user has a saved preference
        const savedLocale = localStorage.getItem('stronwell-locale')
        if (savedLocale && (savedLocale === 'en' || savedLocale === 'es' || savedLocale === 'pt')) {
          setLocale(savedLocale)
          setIsLoading(false)
          return
        }

        // Try to detect country using a free IP geolocation service
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 3000)
        
        const response = await fetch('https://ipapi.co/json/', {
          signal: controller.signal
        })
        
        clearTimeout(timeoutId)
        
        if (response.ok) {
          const data = await response.json()
          const countryCode = data.country_code
          
          // Prefer Portuguese for Brazil/Portugal, then Spanish for Latam, else English
          if (countryCode && PORTUGUESE_COUNTRIES.includes(countryCode)) {
            setLocale('pt')
          } else if (countryCode && SPANISH_COUNTRIES.includes(countryCode)) {
            setLocale('es')
          } else {
            setLocale('en')
          }
        }
      } catch (error) {
        console.log('Could not detect location, defaulting to Spanish')
        // Keep Spanish as default if detection fails
      }
      
      setIsLoading(false)
    }

    detectLocale()
  }, [])

  // Save locale preference when it changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('stronwell-locale', locale)
    }
  }, [locale, isLoading])

  const switchLocale = (code) => {
    if (code && (code === 'en' || code === 'es' || code === 'pt')) {
      setLocale(code)
    } else {
      setLocale(prev => prev === 'en' ? 'es' : prev === 'es' ? 'pt' : 'en')
    }
  }

  // Helper function to get nested translation
  const t = (key) => {
    const keys = key.split('.')
    let value = translations[locale]
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        // Fallback to English if key not found
        let fallback = translations.en
        for (const fk of keys) {
          if (fallback && typeof fallback === 'object' && fk in fallback) {
            fallback = fallback[fk]
          } else {
            return key // Return key itself if no translation found
          }
        }
        return fallback
      }
    }
    
    return value || key
  }

  return (
    <TranslationContext.Provider value={{ 
      locale, 
      setLocale, 
      switchLocale, 
      t, 
      isLoading 
    }}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider')
  }
  return context
}
