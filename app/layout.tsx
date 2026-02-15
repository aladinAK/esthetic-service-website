import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'

import './globals.css'

const _playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Clinique Lumea | Soins Esthetiques Premium',
  description:
    'Clinique Lumea - Votre destination premium pour des soins esthetiques personnalises. Injections, laser, soins du visage et traitements corporels par des experts certifies.',
  keywords: [
    'clinique esthetique',
    'soins du visage',
    'injections',
    'laser',
    'botox',
    'acide hyaluronique',
    'medecine esthetique',
  ],
  openGraph: {
    title: 'Clinique Lumea | Soins Esthetiques Premium',
    description:
      'Votre destination premium pour des soins esthetiques personnalises.',
    type: 'website',
    locale: 'fr_FR',
  },
}

export const viewport: Viewport = {
  themeColor: '#F5F0EB',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${_playfair.variable} ${_inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
