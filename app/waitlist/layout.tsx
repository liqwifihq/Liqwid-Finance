import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join Liqwifi Waitlist | Get Priority Access & Exclusive Perks',
  description: 'Join the Liqwifi waitlist and be among the first to access our all-in-one finance app. Get priority onboarding, better transaction limits, and exclusive early features. Free to join.',
  keywords: [
    'Liqwifi waitlist',
    'join waitlist',
    'early access',
    'finance app waitlist',
    'priority access',
    'exclusive features',
    'Liqwifi signup',
  ],
  openGraph: {
    title: 'Join Liqwifi Waitlist | Get Priority Access & Exclusive Perks',
    description: 'Join the Liqwifi waitlist and be among the first to access our all-in-one finance app. Get priority onboarding, better transaction limits, and exclusive early features.',
    url: 'https://liqwifi.com/waitlist',
    siteName: 'Liqwifi',
    images: [
      {
        url: '/seo_image.png',
        width: 1200,
        height: 630,
        alt: 'Join Liqwifi Waitlist',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Join Liqwifi Waitlist | Get Priority Access',
    description: 'Join the Liqwifi waitlist for early access to money transfers, loans, and investments—all in one powerful finance app.',
    images: ['/seo_image.png'],
  },
  alternates: {
    canonical: 'https://liqwifi.com/waitlist',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function WaitlistLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

