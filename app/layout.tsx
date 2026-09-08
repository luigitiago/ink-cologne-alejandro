import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pura Vida Tattoo — Alejandro Borrelli · Köln',
  description:
    'Pura Vida Tattoo — Studio von Alejandro Borrelli in der Eifelstraße 20, Köln. Individuelle Tattoos in Blackwork, Fine Line, Realismus und Old School. Tattoo studio in Cologne, Germany.',
  generator: 'v0.app',
  keywords: [
    'Tattoo Köln',
    'Tattoo Cologne',
    'Pura Vida Tattoo',
    'Alejandro Borrelli',
    'Blackwork',
    'Fine Line',
    'Old School Tattoo',
    'Eifelstraße',
  ],
  openGraph: {
    title: 'Pura Vida Tattoo — Alejandro Borrelli · Köln',
    description:
      'Individuelle Tattoos in Köln. Blackwork, Fine Line, Realismus & Old School. Studio in der Eifelstraße 20.',
    type: 'website',
    locale: 'de_DE',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#eae4d6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`light ${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
