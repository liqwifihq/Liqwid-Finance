import HeroSection from '@/components/HeroSection'
import WhyLiqwifi from '@/components/WhyLiqwifi'
import HowItWorks from '@/components/HowItWorks'
import InteractiveTools from '@/components/InteractiveTools'
import ExperienceLiqwifi from '@/components/ExperienceLiqwifi'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Liqwifi - Your Money, Loans & Investments in One App | Join Waitlist',
  description: 'Send money locally & internationally, pay bills instantly, unlock credit-score loans, and invest—all in one secure app. Join the waitlist for early access and exclusive perks.',
  openGraph: {
    title: 'Liqwifi - Your Money, Loans & Investments in One App | Join Waitlist',
    description: 'Send money locally & internationally, pay bills instantly, unlock credit-score loans, and invest—all in one secure app. Join the waitlist for early access.',
    images: [
      {
        url: 'https://liqwifi.com/seo_image.png',
        width: 1200,
        height: 630,
        alt: 'Liqwifi - All-in-One Finance App for Money Transfers, Loans, and Investments',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Liqwifi - Your Money, Loans & Investments in One App',
    description: 'Send money locally & internationally, pay bills instantly, unlock credit-score loans, and invest—all in one secure app.',
    images: ['https://liqwifi.com/seo_image.png'],
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white" style={{ width: '100%', maxWidth: '100%', overflowX: 'hidden' }}>
      <HeroSection />
      <div className="flex justify-center w-full" style={{ width: '100%', maxWidth: '100%' }}>
        <WhyLiqwifi />
      </div>
      <div className="flex justify-center w-full" style={{ width: '100%', maxWidth: '100%' }}>
        <HowItWorks />
      </div>
      <div className="flex justify-center w-full" style={{ width: '100%', maxWidth: '100%' }}>
        <InteractiveTools />
      </div>
      <div className="flex justify-center w-full" style={{ width: '100%', maxWidth: '100%' }}>
        <ExperienceLiqwifi />
      </div>
      <div className="flex justify-center w-full" style={{ width: '100%', maxWidth: '100%', overflow: 'visible' }}>
        <FAQ />
      </div>
      <div className="flex justify-center w-full" style={{ width: '100%', maxWidth: '100%' }}>
        <Footer />
      </div>
    </main>
  )
}
