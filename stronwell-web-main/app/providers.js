"use client"
import { TranslationProvider } from "@/contexts/TranslationContext"

export function Providers({ children }) {
  return (
    <TranslationProvider>
      {children}
    </TranslationProvider>
  )
}
