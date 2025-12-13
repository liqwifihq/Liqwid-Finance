import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import LoadingScreen from '@/components/LoadingScreen'
import StructuredData from '@/components/StructuredData'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://liqwifi.com'),
  title: {
    default: 'Liqwifi - Your Money, Credit Score & Investments in One App | Join Waitlist',
    template: '%s | Liqwifi',
  },
  description: 'Send money locally & internationally, unlock credit-score loans, and invest, all in one secure app. Join the waitlist for early access and exclusive perks.',
  keywords: [
    'finance app',
    'money transfer',
    'international money transfer',
    'credit score loans',
    'investment app',
    'digital banking',
    'all-in-one finance',
    'cross-border payments',
    'bill payment app',
    'financial platform',
    'send money globally',
    'instant loans',
    'simple investments',
    'Liqwifi',
  ],
  authors: [{ name: 'Liqwifi' }],
  creator: 'Liqwifi',
  publisher: 'Liqwifi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favivon.svg',
    apple: '/favivon.svg',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://liqwifi.com',
    siteName: 'Liqwifi',
    title: 'Liqwifi - Your Money, Credit Score & Investments in One App | Join Waitlist',
    description: 'Send money locally & internationally, unlock credit-score loans, and invest, all in one secure app. Join the waitlist for early access and exclusive perks.',
    images: [
      {
        url: '/seo_image.png',
        width: 1200,
        height: 630,
        alt: 'Liqwifi - All-in-One Finance App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Liqwifi - Your Money, Credit Score & Investments in One App',
    description: 'Send money locally & internationally, unlock credit-score loans, and invest, all in one secure app. Join the waitlist for early access.',
    images: ['/seo_image.png'],
    creator: '@liqwifi',
    site: '@liqwifi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: 'https://liqwifi.com',
  },
  category: 'Finance',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} font-sans antialiased`} suppressHydrationWarning>
        <StructuredData />
        <LoadingScreen />
        {children}
      </body>
    </html>
  )
}
