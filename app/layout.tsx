import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, Public_Sans } from 'next/font/google'
import './globals.css'

const archivo = Archivo({ subsets: ['latin'], variable: '--font-archivo', display: 'swap' })
const publicSans = Public_Sans({ subsets: ['latin'], variable: '--font-public-sans', display: 'swap' }) 
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: {
    default: 'CIPHER-CODEX | Digital Technology & Creative Company',
    template: '%s | CIPHER-CODEX',
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    'CIPHER-CODEX',
    'website development',
    'mobile app development',
    'branding',
    'graphic design',
    'digital marketing',
    'SEO',
    'cyber security',
    'AI automation',
    'campaign services',
    'Nigeria',
  ],
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  publisher: siteConfig.name,
  category: 'technology',
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: 'CIPHER-CODEX | Digital Technology & Creative Company',
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary',
    title: 'CIPHER-CODEX | Digital Technology & Creative Company',
    description: siteConfig.description,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F2F4F0' },
    { media: '(prefers-color-scheme: dark)', color: '#12262A' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${archivo.variable} ${publicSans.variable} antialiased bg-[#F2F4F0] text-[#12262A] dark:bg-[#12262A] dark:text-[#F2F4F0]`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: siteConfig.name,
              url: siteConfig.url,
              logo: `${siteConfig.url}/logo.svg`,
              description: siteConfig.description,
              email: siteConfig.contact.email,
              telephone: siteConfig.contact.whatsapp,
            }),
          }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
