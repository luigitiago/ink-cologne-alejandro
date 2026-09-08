'use client'

import { useState, type FormEvent } from 'react'
import { useLanguage } from '@/components/language-provider'
import { Check } from 'lucide-react'

export function Booking() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = (data.get('name') as string)?.trim()
    const email = (data.get('email') as string)?.trim()
    const message = (data.get('message') as string)?.trim()

    if (!name || !email || !message) {
      setError(true)
      return
    }
    setError(false)
    // Nessun database: la richiesta viene raccolta lato client.
    // Sostituibile con una Server Action o un invio email.
    console.log('[v0] Anfrage:', Object.fromEntries(data.entries()))
    setSubmitted(true)
  }

  const fieldClass =
    'w-full rounded-sm border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary'
  const labelClass = 'mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground/70'

  return (
    <section id="book" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">{t.booking.kicker}</p>
          <h2 className="font-serif text-4xl font-bold tracking-tight text-balance md:text-5xl">
            {t.booking.title}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            {t.booking.lead}
          </p>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 border border-primary/40 bg-card p-10 text-center">
            <span className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Check className="size-6" />
            </span>
            <p className="max-w-md font-serif text-xl italic text-foreground">{t.booking.success}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="grid gap-5 border border-border bg-card p-6 md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>
                  {t.booking.name} *
                </label>
                <input id="name" name="name" type="text" className={fieldClass} required />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  {t.booking.email} *
                </label>
                <input id="email" name="email" type="email" className={fieldClass} required />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className={labelClass}>
                  {t.booking.phone}
                </label>
                <input id="phone" name="phone" type="tel" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="style" className={labelClass}>
                  {t.booking.style}
                </label>
                <select id="style" name="style" className={fieldClass} defaultValue="">
                  <option value="" disabled>
                    {t.booking.stylePlaceholder}
                  </option>
                  {t.booking.styleOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              <div>
                <label htmlFor="placement" className={labelClass}>
                  {t.booking.placement}
                </label>
                <input id="placement" name="placement" type="text" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="size" className={labelClass}>
                  {t.booking.size}
                </label>
                <input id="size" name="size" type="text" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="date" className={labelClass}>
                  {t.booking.date}
                </label>
                <input id="date" name="date" type="text" className={fieldClass} />
              </div>
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>
                {t.booking.message} *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder={t.booking.messagePlaceholder}
                className={`${fieldClass} resize-none`}
                required
              />
            </div>

            {error && <p className="text-sm text-destructive">{t.booking.required}</p>}

            <button
              type="submit"
              className="mt-1 w-full rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto sm:justify-self-start"
            >
              {t.booking.submit}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
