'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useIsMobile, useIsTablet } from '@/hooks/useMediaQuery'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [isFading, setIsFading] = useState(false)
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()

  useEffect(() => {
    // Prevent body scroll while loading
    document.body.style.overflow = 'hidden'
    const mainContent = document.querySelector('main')
    
    // Set initial opacity but keep content in DOM (not hidden)
    if (mainContent) {
      const element = mainContent as HTMLElement
      element.style.opacity = '0'
      element.style.transition = 'opacity 0.25s ease-in'
      element.style.willChange = 'opacity' // Optimize for smooth animation
    }

    // Minimum display time for smooth experience (reduced for faster loading)
    const minDisplayTime = 300 // 300ms minimum - faster loading
    const startTime = Date.now()

    // Hide loading screen once page is ready
    const handleLoad = () => {
      const elapsed = Date.now() - startTime
      const remainingTime = Math.max(0, minDisplayTime - elapsed)

      setTimeout(() => {
        // Ensure main content exists and is ready
        const content = document.querySelector('main') || mainContent
        if (content) {
          const element = content as HTMLElement
          // Use requestAnimationFrame to ensure smooth transition
          requestAnimationFrame(() => {
            element.style.opacity = '1'
          })
        }
        document.body.style.overflow = ''
        document.body.classList.add('loaded')
        
        // Start fade out at the same time as content fade-in (crossfade effect)
        setIsFading(true)
        setTimeout(() => {
          setIsLoading(false)
        }, 250) // Faster fade out (250ms)
      }, remainingTime)
    }

    // Use DOMContentLoaded for faster initial render (doesn't wait for images)
    // This makes the transition faster and smoother
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      // Small delay to ensure DOM is fully ready
      setTimeout(handleLoad, 50)
    } else {
      const handleDOMReady = () => {
        handleLoad()
      }
      document.addEventListener('DOMContentLoaded', handleDOMReady)
      window.addEventListener('load', handleLoad) // Fallback for slower connections
      return () => {
        document.removeEventListener('DOMContentLoaded', handleDOMReady)
        window.removeEventListener('load', handleLoad)
        document.body.style.overflow = ''
        const content = document.querySelector('main') || mainContent
        if (content) {
          (content as HTMLElement).style.opacity = '1'
        }
      }
    }
  }, [])

  if (!isLoading) return null

  return (
    <div
      className="loading-screen"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        background: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        animation: isFading ? 'fadeOut 0.25s ease-out forwards' : 'fadeIn 0.2s ease-in',
        pointerEvents: isFading ? 'none' : 'auto',
        willChange: isFading ? 'opacity' : 'auto', // Optimize for smooth animation
      }}
    >
      {/* Animated Background Blur Shapes */}
      <div
        style={{
          position: 'absolute',
          height: isMobile ? '300px' : isTablet ? '500px' : '600px',
          width: isMobile ? '300px' : isTablet ? '500px' : '600px',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'linear-gradient(135deg, #9ECE58 0%, #93E4F1 100%)',
          opacity: 0.15,
          filter: 'blur(60px)',
          borderRadius: '50%',
          animation: 'pulse 2s ease-in-out infinite',
        }}
      />

      {/* Logo Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Logo */}
        <div
          style={{
            width: isMobile ? '120px' : isTablet ? '150px' : '180px',
            height: isMobile ? '44px' : isTablet ? '55px' : '66px',
            position: 'relative',
            animation: 'logoFadeIn 0.6s ease-out 0.2s both',
          }}
        >
          <Image
            src="/Liqwifi_logo.svg"
            alt="Liqwifi Logo"
            width={180}
            height={66}
            priority
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              animation: 'logoScale 1.2s ease-in-out infinite',
            }}
            unoptimized
          />
        </div>
      </div>
    </div>
  )
}



