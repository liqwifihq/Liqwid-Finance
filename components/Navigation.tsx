'use client'

import Image from 'next/image'
import { useIsMobile, useIsTablet } from '@/hooks/useMediaQuery'
import { useState } from 'react'

export default function Navigation() {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <nav
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: isMobile ? '10px 16px' : isTablet ? '10px 20px' : '0px',
        width: isMobile ? '100%' : isTablet ? '100%' : '1169px',
        maxWidth: isMobile ? '100%' : isTablet ? '100%' : '1169px',
        height: isMobile ? '60px' : isTablet ? '65px' : '75px',
        borderRadius: '66px',
        flex: 'none',
        order: 0,
        alignSelf: 'stretch',
        flexGrow: 0,
        zIndex: 0,
        justifyContent: 'space-between',
        background: isMobile ? 'rgba(255, 255, 255, 0.85)' : isTablet ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: isMobile ? 'blur(2.5px)' : isTablet ? 'blur(5px)' : 'blur(10px)',
        border: '1px solid rgba(15, 15, 15, 0.1)',
        boxSizing: 'border-box',
        position: 'relative',
      }}
    >
      {/* Logo */}
      <div
        className="flex items-center"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          paddingLeft: isMobile ? '0px' : isTablet ? '12px' : '24px',
        }}
      >
        {/* Logo Icon */}
        <div
          style={{
            width: isMobile ? '82px' : isTablet ? '95px' : '108.74px',
            height: isMobile ? '30.05px' : isTablet ? '35px' : '43.14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Image
            src="/Liqwifi_logo.svg"
            alt="Liqwifi Logo"
            width={109}
            height={43}
            style={{
              width: isMobile ? '82px' : isTablet ? '95px' : '108.74px',
              height: isMobile ? '30.05px' : isTablet ? '35px' : '43.14px',
              objectFit: 'contain',
            }}
            unoptimized
          />
        </div>
      </div>

      {/* Mobile/Tablet Menu Button */}
      {(isMobile || isTablet) && (
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '4px',
            width: '40px',
            height: '40px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            zIndex: 100,
          }}
          aria-label="Toggle menu"
        >
          <div
            style={{
              width: '24px',
              height: '2px',
              background: '#0F0F0F',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              transform: isMenuOpen ? 'rotate(45deg) translateY(8px)' : 'none',
            }}
          />
          <div
            style={{
              width: '24px',
              height: '2px',
              background: '#0F0F0F',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              opacity: isMenuOpen ? 0 : 1,
            }}
          />
          <div
            style={{
              width: '24px',
              height: '2px',
              background: '#0F0F0F',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              transform: isMenuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none',
            }}
          />
        </button>
      )}

      {/* Mobile/Tablet Menu Overlay */}
      {(isMobile || isTablet) && isMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'transparent',
            zIndex: 99,
            animation: 'fadeIn 0.3s ease-in-out',
          }}
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            style={{
              position: 'absolute',
              top: isMobile ? '80px' : '85px',
              left: isMobile ? '16px' : '24px',
              right: isMobile ? '16px' : '24px',
              width: isMobile ? 'calc(100% - 32px)' : 'calc(100% - 48px)',
              background: 'transparent',
              animation: 'slideUp 0.3s ease-out',
              zIndex: 100,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <a
              href="/waitlist"
              onClick={() => setIsMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                padding: isMobile ? '15px 24px' : '15px 32px',
                background: '#0F0F0F',
                borderRadius: '58px',
                color: '#FFFFFF',
                textDecoration: 'none',
                fontFamily: 'var(--font-plus-jakarta)',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: isMobile ? '16px' : '16px',
                lineHeight: '27px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(15, 15, 15, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.9'
                e.currentTarget.style.transform = 'translateY(-1px)'
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(15, 15, 15, 0.25)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(15, 15, 15, 0.2)'
              }}
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      )}

      {/* Header Button - Exact CSS from Figma */}
      {!isMobile && !isTablet && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: '10px',
            width: '239.45px',
            height: '62px',
            flex: 'none',
            order: 1,
            flexGrow: 0,
          }}
        >
          {/* Container */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '0px',
              width: '222px',
              height: '62px',
              flex: 'none',
              order: 0,
              flexGrow: 0,
              position: 'relative',
            }}
          >
            {/* Link - Primary Button */}
            <a
              href="/waitlist"
              className="relative"
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '0px',
                paddingTop: '15px',
                paddingRight: '32px',
                paddingBottom: '15px',
                paddingLeft: '32px',
                gap: '8px',
                isolation: 'isolate',
                width: '222px',
                height: '60px',
                background: '#0F0F0F',
                borderRadius: '58px',
                border: 'none',
                cursor: 'pointer',
                flex: 'none',
                order: 0,
                flexGrow: 0,
                opacity: 1,
                textDecoration: 'none',
              }}
            >
              {/* Get In Touch */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  padding: '0px',
                  width: '118px',
                  height: '28px',
                  flex: 'none',
                  order: 0,
                  flexGrow: 0,
                  zIndex: 0,
                }}
              >
                {/* Container */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: '0px',
                    width: '118px',
                    height: '28px',
                    flex: 'none',
                    order: 0,
                    alignSelf: 'stretch',
                    flexGrow: 0,
                  }}
                >
                  {/* Join the Waitlist */}
                  <span
                    style={{
                      width: '118px',
                      height: '28px',
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '16px',
                      lineHeight: '27px',
                      display: 'flex',
                      alignItems: 'center',
                      color: '#FFFFFF',
                      flex: 'none',
                      order: 0,
                      flexGrow: 0,
                    }}
                  >
                    Join the Waitlist
                  </span>
                </div>
              </div>

              {/* Border */}
              <div
                style={{
                  boxSizing: 'border-box',
                  position: 'absolute',
                  left: '0%',
                  right: '0%',
                  top: '0%',
                  bottom: '0%',
                  border: '1px solid #0F0F0F',
                  borderRadius: '58px',
                  flex: 'none',
                  order: 1,
                  flexGrow: 0,
                  zIndex: 1,
                }}
              />

              {/* Send Icon */}
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  transform: 'matrix(-1, 0, 0, 1, 0, 0)',
                  flex: 'none',
                  order: 2,
                  flexGrow: 0,
                  zIndex: 2,
                  position: 'relative',
                }}
              >
                <Image
                  src="/send.svg"
                  alt="Send"
                  width={32}
                  height={32}
                  style={{
                    width: '100%',
                    height: '100%',
                    transform: 'matrix(-1, 0, 0, 1, 0, 0)',
                  }}
                  unoptimized
                />
              </div>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
