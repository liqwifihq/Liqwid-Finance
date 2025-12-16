import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join the Liqwifi Waitlist - Early Access | Liqwifi',
  description: 'Join the Liqwifi waitlist for early access to our all-in-one finance app. Get priority onboarding, better transaction limits, and exclusive early features.',
  openGraph: {
    title: 'Join the Liqwifi Waitlist - Early Access',
    description: 'Join the Liqwifi waitlist for early access to our all-in-one finance app. Get priority onboarding, better transaction limits, and exclusive early features.',
    url: 'https://liqwifi.com/waitlist',
    images: [
      {
        url: 'https://liqwifi.com/seo_image.png',
        width: 1200,
        height: 630,
        alt: 'Liqwifi Waitlist - Join for Early Access',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Join the Liqwifi Waitlist - Early Access',
    description: 'Join the Liqwifi waitlist for early access to our all-in-one finance app.',
    images: ['https://liqwifi.com/seo_image.png'],
  },
  alternates: {
    canonical: 'https://liqwifi.com/waitlist',
  },
}

export default function WaitlistLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


