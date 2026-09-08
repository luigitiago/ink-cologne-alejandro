'use client'

import { useLanguage } from '@/components/language-provider'
import { site } from '@/lib/site'
import { MapPin, Clock, Mail, Phone, Camera } from 'lucide-react'

export function Studio() {
  const { t } = useLanguage()

  return (
    <section id="studio" className="bg-foreground py-20 text-background md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:gap-12 md:px-8">
        <div className="order-2 md:order-1">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-background/10">
            <img
              src="/images/studio.png"
              alt="Innenansicht des Pura Vida Studios in Köln"
              className="h-full w-full object-cover"
            />
          </div>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[oklch(0.72_0.13_25)] underline-offset-4 hover:underline"
          >
            <MapPin className="size-4" />
            {t.studio.directions}
          </a>
        </div>

        <div className="order-1 md:order-2">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[oklch(0.72_0.13_25)]">
            {t.studio.kicker}
          </p>
          <h2 className="font-serif text-4xl font-bold tracking-tight text-balance md:text-5xl">
            {t.studio.title}
          </h2>

          <p className="mt-6 flex items-start gap-3 text-lg text-background/90">
            <MapPin className="mt-1 size-5 shrink-0 text-[oklch(0.72_0.13_25)]" />
            {t.studio.address}
          </p>

          <div className="mt-8">
            <h3 className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-background/60">
              <Clock className="size-4" /> {t.studio.hoursTitle}
            </h3>
            <ul className="divide-y divide-background/15 border-y border-background/15">
              {t.studio.hours.map((row) => (
                <li key={row.d} className="flex justify-between py-3 text-sm">
                  <span className="text-background/80">{row.d}</span>
                  <span className="font-medium text-background">{row.h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="mb-3 text-xs uppercase tracking-[0.2em] text-background/60">
              {t.studio.contactTitle}
            </h3>
            <div className="flex flex-col gap-3 text-sm">
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-[oklch(0.72_0.13_25)]">
                <Mail className="size-4 text-background/60" /> {site.email}
              </a>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 hover:text-[oklch(0.72_0.13_25)]">
                <Phone className="size-4 text-background/60" /> {site.phone}
              </a>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[oklch(0.72_0.13_25)]"
              >
                <Camera className="size-4 text-background/60" /> @{site.instagram}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
