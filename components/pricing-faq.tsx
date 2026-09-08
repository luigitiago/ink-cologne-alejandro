'use client'

import { useState } from 'react'
import { useLanguage } from '@/components/language-provider'
import { Plus, Minus } from 'lucide-react'

export function PricingFaq() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="pricing" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">{t.pricing.kicker}</p>
          <h2 className="font-serif text-4xl font-bold tracking-tight text-balance md:text-5xl">
            {t.pricing.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t.pricing.lead}</p>
        </div>

        <div className="mb-16 grid gap-4 md:grid-cols-3">
          {t.pricing.tiers.map((tier) => (
            <div
              key={tier.name}
              className="flex flex-col border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {tier.name}
              </span>
              <span className="mt-3 font-serif text-3xl font-bold text-primary">{tier.price}</span>
              <span className="mt-3 text-sm leading-relaxed text-foreground/70">{tier.desc}</span>
            </div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <h3 className="font-serif text-2xl font-bold md:col-span-1">{t.pricing.faqTitle}</h3>
          <div className="md:col-span-2">
            {t.pricing.faq.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <div key={item.q} className="border-b border-border">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-foreground">{item.q}</span>
                    {isOpen ? (
                      <Minus className="size-5 shrink-0 text-primary" />
                    ) : (
                      <Plus className="size-5 shrink-0 text-muted-foreground" />
                    )}
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
