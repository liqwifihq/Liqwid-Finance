import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import LoadingScreen from '@/components/LoadingScreen'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Liqwifi - Your Money, Loans & Investments in One Powerful App',
  description: 'Send and receive money locally and internationally, pay bills in seconds, unlock instant loans with your credit score, and grow your money with simple investments, all from one secure app.',
  icons: {
    icon: '/favivon.svg',
  },
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
        <LoadingScreen />
        {children}
      </body>
    </html>
  )
}
