import { LanguageProvider } from '@/components/language-provider'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Portfolio } from '@/components/portfolio'
import { About } from '@/components/about'
import { PricingFaq } from '@/components/pricing-faq'
import { Studio } from '@/components/studio'
import { Booking } from '@/components/booking'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <LanguageProvider>
      <SiteHeader />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <PricingFaq />
        <Studio />
        <Booking />
      </main>
      <SiteFooter />
    </LanguageProvider>
  )
}
