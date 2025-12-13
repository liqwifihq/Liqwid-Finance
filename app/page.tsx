import HeroSection from '@/components/HeroSection'
import WhyLiqwifi from '@/components/WhyLiqwifi'
import HowItWorks from '@/components/HowItWorks'
import InteractiveTools from '@/components/InteractiveTools'
import ExperienceLiqwifi from '@/components/ExperienceLiqwifi'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

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
