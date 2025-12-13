'use client'

import Image from 'next/image'
import { useIsMobile } from '@/hooks/useMediaQuery'

export default function WhyLiqwifi() {
  const isMobile = useIsMobile()
  
  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'visible' }}>
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: isMobile ? '20px 20px 50px' : '40px 120px 200px 122px',
        width: '100%',
        maxWidth: isMobile ? '390px' : '1440px',
        minHeight: isMobile ? '779.68px' : '800px',
        background: '#FFFFFF',
        flex: 'none',
        order: 1,
        flexGrow: 0,
        zIndex: 1,
        position: 'relative',
        overflow: 'visible',
        margin: '0 auto',
      }}
    >
      {/* Container */}
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          padding: '0px',
          gap: isMobile ? '40px' : '239px',
          width: '100%',
          maxWidth: isMobile ? '90%' : '1198px',
          minHeight: isMobile ? 'auto' : '446.98px',
          flex: 'none',
          order: 0,
          alignSelf: 'stretch',
          flexGrow: 0,
          position: 'relative',
          overflow: 'visible',
        }}
      >
        {/* Left Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: isMobile ? 'center' : 'flex-start',
            padding: '0px',
            gap: isMobile ? '24px' : '48px',
            width: isMobile ? '100%' : '515.13px',
            maxWidth: isMobile ? '100%' : '515.13px',
            height: isMobile ? 'auto' : '395px',
            flex: 'none',
            order: 0,
            flexGrow: 0,
          }}
        >
            {/* Title and Paragraph */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px',
                gap: isMobile ? '16px' : '16px',
                width: isMobile ? '100%' : '515.13px',
                maxWidth: isMobile ? '100%' : '515.13px',
                height: isMobile ? 'auto' : '395px',
                minHeight: isMobile ? 'auto' : '395px',
                flex: 'none',
                order: 0,
                alignSelf: 'stretch',
                flexGrow: 0,
              }}
            >
            {/* Section Title */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: isMobile ? 'center' : 'flex-start',
                padding: '0px',
                gap: isMobile ? '16px' : '8px',
                width: isMobile ? '100%' : '515.13px',
                maxWidth: isMobile ? '100%' : '515.13px',
                height: isMobile ? 'auto' : '188px',
                minHeight: isMobile ? 'auto' : '188px',
                flex: 'none',
                order: 0,
                alignSelf: 'stretch',
                flexGrow: 0,
              }}
            >
              {/* Container */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: isMobile ? 'center' : 'flex-start',
                  padding: '0px',
                  width: isMobile ? 'auto' : '113px',
                  height: isMobile ? 'auto' : '28px',
                  flex: 'none',
                  order: 0,
                  flexGrow: 0,
                }}
              >
                {/* Why Liqwifi? */}
                <span
                  style={{
                    width: isMobile ? 'auto' : '113px',
                    height: isMobile ? 'auto' : '28px',
                    fontFamily: 'var(--font-plus-jakarta)',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '27px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: isMobile ? 'center' : 'flex-start',
                    textTransform: 'uppercase',
                    color: '#85D06A',
                    flex: 'none',
                    order: 0,
                    flexGrow: 0,
                  }}
                >
                  WHY LIQWIFY
                </span>
              </div>

              {/* Container */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: isMobile ? 'center' : 'flex-start',
                  padding: '0px',
                  width: isMobile ? '100%' : '515.13px',
                  maxWidth: isMobile ? '100%' : '515.13px',
                  height: isMobile ? 'auto' : '152px',
                  minHeight: isMobile ? 'auto' : '152px',
                  flex: 'none',
                  order: 1,
                  alignSelf: 'stretch',
                  flexGrow: 0,
                }}
              >
                {/* Heading 3 */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: isMobile ? 'center' : 'flex-start',
                    padding: '0px',
                    width: isMobile ? '100%' : '515.13px',
                    maxWidth: isMobile ? '100%' : '515.13px',
                    height: isMobile ? 'auto' : '152px',
                    minHeight: isMobile ? 'auto' : '152px',
                    flex: 'none',
                    order: 0,
                    alignSelf: 'stretch',
                    flexGrow: 0,
                  }}
                >
                  {/* A Simple Money App for Sending, Borrowing & Growing Your Money */}
                  <h2
                    style={{
                      width: isMobile ? '100%' : '515.13px',
                      maxWidth: isMobile ? '100%' : '515.13px',
                      height: isMobile ? 'auto' : '152px',
                      minHeight: isMobile ? 'auto' : '152px',
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: isMobile ? 'clamp(24px, 6.5vw, 28px)' : '36px',
                      lineHeight: isMobile ? 'clamp(32px, 8.5vw, 38px)' : '50px',
                      letterSpacing: '-1px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: isMobile ? 'center' : 'flex-start',
                      textAlign: 'center',
                      color: '#0F0F0F',
                      flex: 'none',
                      order: 0,
                      alignSelf: 'stretch',
                      flexGrow: 0,
                      margin: 0,
                    }}
                  >
                    A Simple Money App for Sending, Borrowing & Growing Your Money
                  </h2>
                </div>
              </div>
            </div>

            {/* Container */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '0px',
                width: isMobile ? '100%' : '458.46px',
                maxWidth: isMobile ? '100%' : '458.46px',
                height: isMobile ? 'auto' : '191px',
                minHeight: isMobile ? 'auto' : '191px',
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
                  width: isMobile ? '100%' : '458.46px',
                  maxWidth: isMobile ? '100%' : '458.46px',
                  height: isMobile ? 'auto' : '191px',
                  minHeight: isMobile ? 'auto' : '191px',
                  flex: 'none',
                  order: 0,
                  alignSelf: 'stretch',
                  flexGrow: 0,
                }}
              >
                {/* Paragraph */}
                  <p
                    style={{
                      width: isMobile ? '100%' : '458.46px',
                      maxWidth: isMobile ? '100%' : '458.46px',
                      height: isMobile ? 'auto' : '191px',
                      minHeight: isMobile ? 'auto' : '191px',
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '27px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      textAlign: 'left',
                      color: '#4B4B57',
                      flex: 'none',
                      order: 0,
                      alignSelf: 'stretch',
                      flexGrow: 0,
                      margin: 0,
                    }}
                  >
                  We're building Liqwifi for people who send money home, pay bills for family, work with international clients or run growing businesses. With one app you'll be able to make local and international transfers, access loans based on your credit score, and invest toward your goals—without juggling multiple platforms. Join the waitlist to help shape the first version of the app.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Logo Stack */}
        <div
          style={{
            position: 'relative',
            width: isMobile ? '100%' : '292.87px',
            maxWidth: isMobile ? '100%' : '292.87px',
            height: isMobile ? 'auto' : '446.98px',
            minHeight: isMobile ? '200px' : '446.98px',
            flex: 'none',
            order: 1,
            flexGrow: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'visible',
            marginTop: isMobile ? '24px' : '0px',
          }}
        >
          {/* FORE LOGO - Foreground, smaller, on top, centered */}
          <div
            style={{
              position: 'relative',
              width: isMobile ? '100%' : '292.87px',
              maxWidth: isMobile ? '300px' : '292.87px',
              height: isMobile ? 'auto' : '446.98px',
              aspectRatio: isMobile ? '292.87/446.98' : 'auto',
              flex: 'none',
              order: 1,
              flexGrow: 0,
              zIndex: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/fore_logo.png"
              alt="Liqwifi Foreground Logo"
              width={293}
              height={447}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>
        </div>

      {/* BG LOGO - Background, bigger, faded, positioned absolutely relative to section - Hidden on mobile */}
      {!isMobile && (
        <div
        style={{
          position: 'absolute',
          width: '584.87px',
          height: '892.63px',
          left: '85%',
          top: '30%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        <img
          src="/BG_logo.png"
          alt="Liqwifi Background Logo"
          width={585}
          height={893}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </div>
      )}
      </div>
    </section>
    </div>
  )
}
