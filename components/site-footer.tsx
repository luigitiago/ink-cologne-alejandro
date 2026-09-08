'use client'

import { useLanguage } from '@/components/language-provider'
import { site } from '@/lib/site'
import { Camera } from 'lucide-react'

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="bg-background py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <span className="font-serif text-2xl font-bold tracking-tight">{site.name}</span>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {t.footer.tagline}
          </p>
          <p className="mt-3 text-sm text-muted-foreground">{site.address}</p>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
          >
            <Camera className="size-4" /> @{site.instagram}
          </a>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {site.name} · {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
