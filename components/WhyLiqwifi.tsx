'use client'

import Image from 'next/image'
import { useIsMobile, useIsTablet } from '@/hooks/useMediaQuery'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function WhyLiqwifi() {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const sectionRef = useScrollAnimation()
  
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '100%', overflow: 'visible' }}>
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="fade-in-up"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: isMobile ? '20px' : isTablet ? '100px' : '40px',
        paddingBottom: isMobile ? '50px' : isTablet ? '100px' : '200px',
        paddingLeft: isMobile ? '30px' : isTablet ? '40px' : '0px',
        paddingRight: isMobile ? '30px' : isTablet ? '40px' : '0px',
        width: '100%',
        maxWidth: '100%',
        minHeight: isMobile ? '779.68px' : isTablet ? 'auto' : '800px',
        background: '#FFFFFF',
        flex: 'none',
        order: 1,
        flexGrow: 0,
        zIndex: 1,
        position: 'relative',
        overflow: 'visible',
        margin: '0 auto',
        boxSizing: 'border-box',
      }}
    >
      {/* Container */}
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : isTablet ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0px',
          paddingLeft: isMobile ? '0px' : '0px',
          paddingRight: isMobile ? '0px' : '0px',
          gap: isMobile ? '40px' : isTablet ? '80px' : '120px',
          width: isMobile ? '100%' : isTablet ? '100%' : '100%',
          maxWidth: isMobile ? '100%' : isTablet ? '750px' : '960px',
          minHeight: isMobile ? 'auto' : isTablet ? 'auto' : '446.98px',
          flex: 'none',
          order: 0,
          alignSelf: 'stretch',
          flexGrow: 0,
          position: 'relative',
          overflow: 'visible',
          margin: '0 auto',
        }}
      >
        {/* Left Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: isMobile ? 'center' : isTablet ? 'center' : 'flex-start',
            padding: '0px',
            gap: isMobile ? '24px' : isTablet ? '32px' : '48px',
            width: isMobile ? '100%' : isTablet ? '100%' : '515.13px',
            maxWidth: isMobile ? '100%' : isTablet ? '700px' : '515.13px',
            height: isMobile ? 'auto' : isTablet ? 'auto' : '395px',
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
                alignItems: isMobile ? 'center' : isTablet ? 'center' : 'flex-start',
                padding: '0px',
                gap: isMobile ? '16px' : isTablet ? '24px' : '16px',
                width: isMobile ? '100%' : isTablet ? '100%' : '515.13px',
                maxWidth: isMobile ? '100%' : isTablet ? '700px' : '515.13px',
                height: isMobile ? 'auto' : isTablet ? 'auto' : '395px',
                minHeight: isMobile ? 'auto' : isTablet ? 'auto' : '395px',
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
                alignItems: isMobile ? 'center' : isTablet ? 'center' : 'flex-start',
                padding: '0px',
                gap: isMobile ? '16px' : isTablet ? '20px' : '8px',
                width: isMobile ? '100%' : isTablet ? '100%' : '515.13px',
                maxWidth: isMobile ? '100%' : isTablet ? '700px' : '515.13px',
                height: isMobile ? 'auto' : isTablet ? 'auto' : '188px',
                minHeight: isMobile ? 'auto' : isTablet ? 'auto' : '188px',
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
                  alignItems: 'center',
                  padding: '0px',
                  width: isMobile ? 'auto' : isTablet ? 'auto' : '113px',
                  height: isMobile ? 'auto' : isTablet ? 'auto' : '28px',
                  flex: 'none',
                  order: 0,
                  flexGrow: 0,
                }}
              >
                {/* Why Liqwifi? */}
                <span
                  style={{
                    width: isMobile ? 'auto' : isTablet ? 'auto' : '113px',
                    height: isMobile ? 'auto' : isTablet ? 'auto' : '28px',
                    fontFamily: 'var(--font-plus-jakarta)',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: isMobile ? '16px' : isTablet ? '15px' : '16px',
                    lineHeight: isMobile ? '27px' : isTablet ? '24px' : '27px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textTransform: 'uppercase',
                    color: isMobile ? '#85D06A' : isTablet ? '#69B43B' : '#85D06A',
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
                  alignItems: isMobile ? 'center' : isTablet ? 'center' : 'flex-start',
                  padding: '0px',
                  width: isMobile ? '100%' : isTablet ? '100%' : '420px',
                  maxWidth: isMobile ? '100%' : isTablet ? '700px' : '420px',
                  height: isMobile ? 'auto' : isTablet ? 'auto' : 'auto',
                  minHeight: isMobile ? 'auto' : isTablet ? 'auto' : 'auto',
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
                    alignItems: isMobile ? 'center' : isTablet ? 'center' : 'flex-start',
                    padding: '0px',
                    width: isMobile ? '100%' : isTablet ? '100%' : '420px',
                    maxWidth: isMobile ? '100%' : isTablet ? '700px' : '420px',
                    height: isMobile ? 'auto' : isTablet ? 'auto' : 'auto',
                    minHeight: isMobile ? 'auto' : isTablet ? 'auto' : 'auto',
                    flex: 'none',
                    order: 0,
                    alignSelf: 'stretch',
                    flexGrow: 0,
                  }}
                >
                  {/* A Simple Money App for Sending, Borrowing & Growing Your Money */}
                  <h2
                    style={{
                      width: isMobile ? '100%' : isTablet ? '100%' : '420px',
                      maxWidth: isMobile ? '100%' : isTablet ? '700px' : '420px',
                      height: isMobile ? 'auto' : isTablet ? 'auto' : 'auto',
                      minHeight: isMobile ? 'auto' : isTablet ? 'auto' : 'auto',
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: isMobile ? 'clamp(24px, 6.5vw, 28px)' : isTablet ? '42px' : '36px',
                      lineHeight: isMobile ? 'clamp(32px, 8.5vw, 38px)' : isTablet ? '1.25' : '50px',
                      letterSpacing: '-1px',
                      display: 'block',
                      textAlign: isMobile ? 'center' : isTablet ? 'center' : 'left',
                      color: '#0F0F0F',
                      margin: 0,
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
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
                alignItems: isMobile ? 'center' : isTablet ? 'center' : 'flex-start',
                padding: '0px',
                width: isMobile ? '100%' : isTablet ? '100%' : '420px',
                maxWidth: isMobile ? '100%' : isTablet ? '700px' : '420px',
                height: isMobile ? 'auto' : isTablet ? 'auto' : '191px',
                minHeight: isMobile ? 'auto' : isTablet ? 'auto' : '191px',
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
                  alignItems: isMobile ? 'center' : isTablet ? 'center' : 'flex-start',
                  padding: '0px',
                  width: isMobile ? '100%' : isTablet ? '100%' : '420px',
                  maxWidth: isMobile ? '100%' : isTablet ? '700px' : '420px',
                  height: isMobile ? 'auto' : isTablet ? 'auto' : '191px',
                  minHeight: isMobile ? 'auto' : isTablet ? 'auto' : '191px',
                  flex: 'none',
                  order: 0,
                  alignSelf: 'stretch',
                  flexGrow: 0,
                }}
              >
                {/* Paragraph */}
                  <p
                    style={{
                      width: isMobile ? '100%' : isTablet ? '100%' : '420px',
                      maxWidth: isMobile ? '100%' : isTablet ? '700px' : '420px',
                      height: isMobile ? 'auto' : isTablet ? 'auto' : '191px',
                      minHeight: isMobile ? 'auto' : isTablet ? 'auto' : '191px',
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: isMobile ? '16px' : isTablet ? '17px' : '16px',
                      lineHeight: isMobile ? '27px' : isTablet ? '1.5' : '27px',
                      display: 'flex',
                      alignItems: 'center',
                      textAlign: isMobile ? 'center' : isTablet ? 'center' : 'left',
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
            width: isMobile ? '100%' : isTablet ? '225px' : '280px',
            maxWidth: isMobile ? '100%' : isTablet ? '225px' : '280px',
            height: isMobile ? 'auto' : isTablet ? 'auto' : '100%',
            minHeight: isMobile ? '200px' : isTablet ? 'auto' : 'auto',
            flex: 'none',
            order: 1,
            flexGrow: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'visible',
            marginTop: isMobile ? '24px' : isTablet ? '0px' : '0px',
            alignSelf: isMobile ? 'auto' : isTablet ? 'auto' : 'stretch',
          }}
        >
          {/* FORE LOGO - Foreground, smaller, on top, centered */}
          <div
            style={{
              position: 'relative',
              width: isMobile ? '100%' : isTablet ? '225px' : '280px',
              maxWidth: isMobile ? '300px' : isTablet ? '225px' : '280px',
              height: isMobile ? 'auto' : isTablet ? 'auto' : '380px',
              aspectRatio: isMobile ? '292.87/446.98' : isTablet ? '225/343' : 'auto',
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
              width={280}
              height={380}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>
        </div>

      {/* BG LOGO - Background, bigger, faded, positioned absolutely relative to section - Hidden on mobile and tablet */}
      {!isMobile && !isTablet && (
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
