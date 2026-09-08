'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/components/language-provider'
import { site } from '@/lib/site'
import { Menu, X } from 'lucide-react'

export function SiteHeader() {
  const { t, lang, toggle } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#work', label: t.nav.work },
    { href: '#about', label: t.nav.about },
    { href: '#pricing', label: t.nav.pricing },
    { href: '#studio', label: t.nav.studio },
  ]

  // Sopra l'hero scuro il testo è chiaro; dopo lo scroll (sfondo avorio) diventa scuro.
  const onLight = scrolled
  const textColor = onLight ? 'text-foreground/80' : 'text-background/80'
  const logoColor = onLight ? 'text-foreground' : 'text-background'
  const captionColor = onLight ? 'text-muted-foreground' : 'text-background/60'
  const accentHover = 'hover:text-[oklch(0.72_0.13_25)]'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex flex-col leading-none">
          <span className={`font-serif text-xl font-bold tracking-tight ${logoColor}`}>
            {site.name}
          </span>
          <span className={`text-[10px] uppercase tracking-[0.25em] ${captionColor}`}>
            Tattoo · Köln
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${textColor} ${accentHover}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className={`flex items-center gap-1 rounded-sm border px-2 py-1 text-xs font-semibold tracking-wide transition-colors ${
              onLight ? 'border-border text-foreground/80' : 'border-background/30 text-background/80'
            } ${accentHover}`}
            aria-label="Sprache wechseln / Switch language"
          >
            <span className={lang === 'de' ? 'text-[oklch(0.72_0.13_25)]' : ''}>DE</span>
            <span className="opacity-50">/</span>
            <span className={lang === 'en' ? 'text-[oklch(0.72_0.13_25)]' : ''}>EN</span>
          </button>

          <a
            href="#book"
            className={`hidden rounded-sm px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-90 sm:inline-block ${
              onLight
                ? 'bg-primary text-primary-foreground'
                : 'bg-[oklch(0.5_0.14_20)] text-background'
            }`}
          >
            {t.nav.book}
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            className={`md:hidden ${logoColor}`}
            aria-label="Menü"
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm font-medium text-foreground/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="py-3 text-sm font-semibold text-primary"
            >
              {t.nav.book}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
