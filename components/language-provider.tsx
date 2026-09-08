'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { dictionary, type Lang, type Dict } from '@/lib/i18n'

type LanguageContextValue = {
  lang: Lang
  t: Dict
  setLang: (lang: Lang) => void
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('de')

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    if (typeof document !== 'undefined') {
      document.documentElement.lang = next
    }
  }, [])

  const toggle = useCallback(() => {
    setLangState((prev) => {
      const next = prev === 'de' ? 'en' : 'de'
      if (typeof document !== 'undefined') {
        document.documentElement.lang = next
      }
      return next
    })
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, t: dictionary[lang], setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
