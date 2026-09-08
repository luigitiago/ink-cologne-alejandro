'use client'

import { useLanguage } from '@/components/language-provider'

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-5 md:gap-12 md:px-8">
        <div className="md:col-span-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border">
            <img
              src="/images/artist.png"
              alt="Portrait von Alejandro Borrelli"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-3 md:pt-6">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">{t.about.kicker}</p>
          <h2 className="font-serif text-4xl font-bold tracking-tight text-balance md:text-5xl">
            {t.about.title}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/80">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p className="border-l-2 border-primary pl-4 font-serif text-lg italic text-foreground">
              {t.about.p3}
            </p>
          </div>
          <p className="mt-6 font-serif text-3xl italic text-primary">{t.about.signature}</p>
        </div>
      </div>
    </section>
  )
}
