'use client'

import { useLanguage } from '@/components/language-provider'

const images = [
  '/images/tattoo-1.png',
  '/images/tattoo-2.png',
  '/images/tattoo-3.png',
  '/images/tattoo-4.png',
  '/images/tattoo-5.png',
  '/images/tattoo-6.png',
]

export function Portfolio() {
  const { t } = useLanguage()

  return (
    <section id="work" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">{t.work.kicker}</p>
            <h2 className="font-serif text-4xl font-bold tracking-tight text-balance md:text-5xl">
              {t.work.title}
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{t.work.lead}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.work.items.map((item, i) => (
            <figure
              key={item.title}
              className="group relative overflow-hidden rounded-sm border border-border bg-card"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={images[i] || '/placeholder.svg'}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-foreground/85 to-transparent p-4 pt-10">
                <span className="font-serif text-lg font-semibold text-background">{item.title}</span>
                <span className="text-[10px] uppercase tracking-wider text-background/70">
                  {item.style}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
