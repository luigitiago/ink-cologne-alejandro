'use client'

import { useLanguage } from '@/components/language-provider'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="relative overflow-hidden bg-foreground text-background">
      <div className="film-grain absolute inset-0" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-32 md:grid-cols-2 md:items-center md:gap-8 md:px-8 md:pb-24 md:pt-40">
        <div className="relative z-10">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-background/60">
            {t.hero.kicker}
          </p>
          <h1 className="font-serif text-5xl font-bold leading-[1.05] tracking-tight text-balance md:text-6xl lg:text-7xl">
            {t.hero.title}
          </h1>
          <p className="mt-4 font-serif text-2xl italic leading-tight text-primary-foreground/90 md:text-3xl">
            <span className="text-[oklch(0.62_0.13_20)]">{t.hero.titleAccent}</span>
          </p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-background/70">
            {t.hero.lead}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#book"
              className="rounded-sm bg-[oklch(0.5_0.14_20)] px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              {t.hero.ctaBook}
            </a>
            <a
              href="#work"
              className="rounded-sm border border-background/30 px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-background/10"
            >
              {t.hero.ctaWork}
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-background/20 pt-6">
            <div>
              <dt className="font-serif text-3xl font-bold">10+</dt>
              <dd className="text-xs leading-snug text-background/60">{t.hero.stat1}</dd>
            </div>
            <div>
              <dt className="font-serif text-3xl font-bold">100%</dt>
              <dd className="text-xs leading-snug text-background/60">{t.hero.stat2}</dd>
            </div>
            <div>
              <dt className="font-serif text-3xl font-bold">Köln</dt>
              <dd className="text-xs leading-snug text-background/60">{t.hero.stat3}</dd>
            </div>
          </dl>
        </div>

        <div className="relative z-10">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-background/10">
            <img
              src="/images/hero-portrait.png"
              alt="Alejandro Borrelli bei der Arbeit im Studio"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
          </div>
          <span className="absolute -bottom-3 -left-3 hidden bg-[oklch(0.5_0.14_20)] px-4 py-2 font-serif text-sm italic text-background md:block">
            Pura Vida — est. 2014
          </span>
        </div>
      </div>
    </section>
  )
}
