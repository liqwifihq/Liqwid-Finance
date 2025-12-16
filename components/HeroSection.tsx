'use client'

import Image from 'next/image'
import Navigation from './Navigation'
import { useIsMobile, useIsTablet, useIsSmallDesktop } from '@/hooks/useMediaQuery'

export default function HeroSection() {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const isSmallDesktop = useIsSmallDesktop()
  
  return (
    <section 
      className="relative flex flex-col items-center w-full min-h-screen overflow-hidden bg-white"
      style={{
        padding: '0px',
        paddingTop: isMobile ? '100px' : isTablet ? '105px' : isSmallDesktop ? '105px' : '0px',
        paddingBottom: isMobile ? '0px' : isTablet ? '0px' : '0px',
        width: '100%',
        maxWidth: '100%',
        margin: '0',
        boxSizing: 'border-box',
        overflowX: 'hidden',
      }}
    >
      {/* Blur Shape Left - Exact CSS from Figma */}
      <div 
        className="absolute"
        style={{
          position: 'absolute',
          height: isMobile ? '378.19px' : isTablet ? '600px' : '937.58px',
          left: isMobile ? '-7.69%' : isTablet ? '-8%' : '-9.1%',
          right: isMobile ? '37.69%' : isTablet ? '55%' : '62.1%',
          top: '0px',
          background: '#9ECE58',
          opacity: 0.2,
          filter: 'blur(50px)',
          borderRadius: isMobile ? '325.6px' : isTablet ? '500px' : '807.19px',
          transform: 'rotate(180deg)',
          flex: 'none',
          order: 0,
          flexGrow: 0,
          zIndex: 0,
        }}
      />

      {/* Blur Shape Right - Exact CSS from Figma */}
      <div 
        className="absolute"
        style={{
          position: 'absolute',
          height: isMobile ? '790.2px' : '919.16px',
          left: isMobile ? '7.69%' : '78.03%',
          right: isMobile ? '-7.69%' : '-9.03%',
          top: isMobile ? 'calc(50% - 790.2px/2 - 396.01px)' : 'calc(50% - 919.16px/2 - 344.38px)',
          background: '#93E4F1',
          opacity: 0.3,
          filter: 'blur(50px)',
          borderRadius: isMobile ? '589.56px' : '674.82px',
          transform: 'rotate(180deg)',
          flex: 'none',
          order: 1,
          flexGrow: 0,
          zIndex: 1,
        }}
      />

      {/* Decorative Curved Shapes - Background Graphics */}
      <svg
        className="absolute"
        style={{
          position: 'absolute',
          width: '100%',
          height: '60%',
          top: 0,
          left: 0,
          zIndex: 2,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left Curved Shape - S-like curve, stops before image */}
        <path
          d="M -50 150 Q 80 200 100 350 Q 120 500 50 580"
          stroke="#E5E7EB"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.3"
        />
        
        {/* Right Curved Shape with Arrow Point, stops before image */}
        <path
          d="M 1450 120 Q 1380 250 1400 400 Q 1420 550 1350 580 Q 1280 600 1220 600"
          stroke="#E5E7EB"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.3"
        />
        {/* Arrow head tip */}
        <path
          d="M 1220 600 L 1190 585 L 1200 615"
          stroke="#E5E7EB"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.3"
        />
      </svg>

      {/* Navigation - Inside Hero Section */}
      <div 
        className="absolute top-0 z-20"
        style={{
          marginTop: isMobile ? '24px' : isTablet ? '0px' : isSmallDesktop ? '0px' : '24px',
          left: isMobile ? '0px' : isTablet ? '0px' : isSmallDesktop ? '0px' : '50%',
          right: isMobile ? '0px' : isTablet ? '0px' : isSmallDesktop ? '0px' : 'auto',
          transform: isMobile ? 'none' : (isTablet || isSmallDesktop) ? 'none' : 'translateX(-50%)',
          width: isMobile ? '100%' : isTablet ? '100%' : isSmallDesktop ? '100%' : 'auto',
          paddingLeft: isMobile ? '20px' : isTablet ? '0px' : isSmallDesktop ? '0px' : '0px',
          paddingRight: isMobile ? '20px' : isTablet ? '0px' : isSmallDesktop ? '0px' : '0px',
          boxSizing: 'border-box',
        }}
      >
        <Navigation />
      </div>

      {/* Main Container */}
      <div 
        className="relative flex flex-col items-center w-full"
        style={{ 
          width: '100%',
          maxWidth: '100%',
          paddingLeft: isMobile ? '30px' : '0px',
          paddingRight: isMobile ? '30px' : '0px',
          paddingTop: isMobile ? '24px' : isTablet ? '40px' : isSmallDesktop ? '40px' : '190px',
          paddingBottom: isMobile ? '0px' : isTablet ? '60px' : isSmallDesktop ? '60px' : '80px',
          zIndex: 10,
          gap: isMobile ? '0px' : '0px',
          boxSizing: 'border-box',
        }}
      >
        
        {/* Tagline/Category Pill - At the very top */}
          <div 
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: isMobile ? '24px' : isTablet ? '28px' : isSmallDesktop ? '28px' : '32px',
              marginTop: '0px',
              width: '100%',
            }}
          >
            <div 
              style={{
                background: isMobile ? '#F9FAFB' : isTablet ? 'rgba(75, 75, 87, 0.1)' : 'rgba(75, 75, 87, 0.1)',
                backdropFilter: isMobile ? 'none' : isTablet ? 'blur(8px)' : 'blur(10px)',
                width: isMobile ? 'auto' : 'auto',
                maxWidth: isMobile ? '100%' : 'none',
                height: isMobile ? '36px' : isTablet ? 'auto' : 'auto',
                borderRadius: isMobile ? '16px' : isTablet ? '9999px' : '9999px',
                padding: isMobile ? '4px 10px' : isTablet ? '6px 14px' : '8px 16px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: isMobile ? '1px solid #E5E7EB' : 'none',
                boxSizing: 'border-box',
              }}
            >
              <span 
                style={{
                  fontFamily: 'var(--font-plus-jakarta)',
                  fontSize: isMobile ? '13px' : isTablet ? '12px' : '13px',
                  lineHeight: isMobile ? '22px' : isTablet ? '20px' : '22px',
                  fontWeight: 400,
                  color: '#4B4B57',
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                }}
              >
                Early Access • Cross-Border Money • Smart Credit
              </span>
            </div>
          </div>

        {/* Top Section: Heading, Body Text, and Buttons - Grouped together */}
        <div
          className="flex flex-col items-center w-full"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: isMobile ? 'calc(100% - 40px)' : '100%',
            maxWidth: isMobile ? 'calc(100% - 40px)' : '1218px',
            marginBottom: isMobile ? '32px' : '80px',
            gap: isMobile ? '24px' : '0px',
            boxSizing: 'border-box',
            marginLeft: isMobile ? 'auto' : '0px',
            marginRight: isMobile ? 'auto' : '0px',
          }}
        >
          {/* Heading 1 - Exact from Figma */}
          <div 
            className="flex flex-col items-center"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0px',
              width: isMobile ? '100%' : '1218px',
              maxWidth: isMobile ? '100%' : '100%',
              height: isMobile ? 'auto' : '148px',
              flex: 'none',
              order: 0,
              alignSelf: 'stretch',
              flexGrow: 0,
              marginBottom: isMobile ? '0px' : '32px',
            }}
          >
            <h1 
              style={{
                width: isMobile ? '100%' : '1218px',
                maxWidth: isMobile ? '100%' : '100%',
                height: isMobile ? 'auto' : '148px',
                minHeight: isMobile ? 'auto' : '148px',
                fontFamily: 'var(--font-plus-jakarta)',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: isMobile ? 'clamp(28px, 8vw, 36px)' : '64px',
                lineHeight: isMobile ? 'clamp(34px, 9vw, 41px)' : '74px',
                letterSpacing: isMobile ? '-1px' : '-2px',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                justifyContent: 'center',
                color: '#0F0F0F',
                flex: 'none',
                order: 0,
                alignSelf: 'stretch',
                flexGrow: 0,
                margin: 0,
              }}
            >
              Your Money, Loans & Investments in One Powerful App
            </h1>
          </div>

          {/* Body Text - Exact from Figma - Immediately after heading */}
          <div 
            className="flex flex-col justify-center items-center"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0px',
              width: isMobile ? '100%' : isTablet ? '100%' : '1218px',
              maxWidth: isMobile ? '100%' : isTablet ? '100%' : '100%',
              height: isMobile ? 'auto' : isTablet ? 'auto' : '62px',
              flex: 'none',
              order: 1,
              alignSelf: 'stretch',
              flexGrow: 0,
              marginBottom: isMobile ? '0px' : isTablet ? '24px' : '32px',
            }}
          >
            <p 
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '0px',
                width: isMobile ? '100%' : isTablet ? '100%' : '1218px',
                maxWidth: isMobile ? '100%' : isTablet ? '100%' : '100%',
                height: isMobile ? 'auto' : isTablet ? 'auto' : '62px',
                minHeight: isMobile ? 'auto' : isTablet ? 'auto' : '62px',
                flex: 'none',
                order: 0,
                alignSelf: 'stretch',
                flexGrow: 0,
                margin: 0,
              }}
            >
              <span
                style={{
                  width: isMobile ? '100%' : isTablet ? '100%' : '1180px',
                  maxWidth: isMobile ? '100%' : isTablet ? '100%' : '100%',
                  height: isMobile ? 'auto' : isTablet ? 'auto' : '62px',
                  minHeight: isMobile ? 'auto' : isTablet ? 'auto' : '62px',
                  fontFamily: 'var(--font-plus-jakarta)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: isMobile ? 'clamp(16px, 4.5vw, 18px)' : isTablet ? 'clamp(16px, 2.5vw, 17px)' : '18px',
                  lineHeight: isMobile ? 'clamp(24px, 7vw, 31px)' : isTablet ? 'clamp(26px, 3.5vw, 28px)' : '31px',
                  display: 'flex',
                  alignItems: 'center',
                  textAlign: 'center',
                  justifyContent: 'center',
                  color: '#4B4B57',
                  flex: 'none',
                  order: 0,
                  alignSelf: 'stretch',
                  flexGrow: 0,
                }}
              >
                Send and receive money locally and internationally, pay bills in seconds, unlock instant loans with your credit score, and grow your money with simple investments, all from one secure app.
              </span>
            </p>
          </div>

          {/* Buttons Container - Exact from Figma - Immediately after body text */}
          <div 
            className="flex flex-row justify-center items-center"
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0px',
              gap: isMobile ? '16px' : '15.99px',
              width: isMobile ? '100%' : '1218px',
              maxWidth: isMobile ? '100%' : '100%',
              height: isMobile ? 'auto' : '58px',
              minHeight: isMobile ? 'auto' : '58px',
              flex: 'none',
              order: 2,
              alignSelf: 'center',
              flexGrow: 0,
              margin: '0 auto',
            }}
          >
          {/* Primary Button - Join the Waitlist - First Button (Black) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0px',
              width: isMobile ? '197px' : isTablet ? 'auto' : 'auto',
              maxWidth: isMobile ? '197px' : isTablet ? 'auto' : 'auto',
              height: isMobile ? '58px' : isTablet ? '56px' : '58px',
              flex: 'none',
              order: 0,
              flexGrow: 0,
            }}
          >
            <a
              href="/waitlist"
              className="relative"
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: isMobile ? '15px 32px' : isTablet ? '14px 22px' : '15px 24px',
                gap: '7.99px',
                isolation: 'isolate',
                width: isMobile ? '197px' : isTablet ? 'auto' : 'auto',
                maxWidth: isMobile ? '197px' : isTablet ? 'auto' : 'auto',
                height: isMobile ? '58px' : isTablet ? '56px' : '58px',
                background: '#0F0F0F',
                borderRadius: '58px',
                border: 'none',
                cursor: 'pointer',
                flex: 'none',
                order: 0,
                flexGrow: 0,
                textDecoration: 'none',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  padding: '0px',
                  width: 'auto',
                  height: '28px',
                  flex: 'none',
                  order: 0,
                  flexGrow: 0,
                  zIndex: 0,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: '0px',
                    width: 'auto',
                    height: '28px',
                    flex: 'none',
                    order: 0,
                    alignSelf: 'stretch',
                    flexGrow: 0,
                  }}
                >
                  <span
                    style={{
                      width: 'auto',
                      height: '28px',
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: isMobile ? '16px' : isTablet ? '15px' : '16px',
                      lineHeight: isMobile ? '27px' : isTablet ? '25px' : '27px',
                      display: 'flex',
                      alignItems: 'center',
                      color: '#FFFFFF',
                      flex: 'none',
                      order: 0,
                      flexGrow: 0,
                      whiteSpace: 'nowrap',
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
            </a>
          </div>

          {/* Secondary Button - See How It Works - Second Button (White) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0px',
              width: isMobile ? '197px' : isTablet ? 'auto' : 'auto',
              maxWidth: isMobile ? '197px' : isTablet ? 'auto' : 'auto',
              height: isMobile ? '58px' : isTablet ? '56px' : '58px',
              flex: 'none',
              order: 1,
              flexGrow: 0,
            }}
          >
            <a
              href="#getting-started"
              className="relative"
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('getting-started')
                if (element) {
                  const navHeight = isMobile ? 100 : isTablet ? 85 : isSmallDesktop ? 85 : 100
                  const elementPosition = element.getBoundingClientRect().top
                  const offsetPosition = elementPosition + window.pageYOffset - navHeight
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  })
                }
              }}
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: isMobile ? '15px 32px' : isTablet ? '14px 22px' : '15px 24px',
                gap: '7.99px',
                isolation: 'isolate',
                width: isMobile ? '197px' : isTablet ? 'auto' : 'auto',
                maxWidth: isMobile ? '197px' : isTablet ? 'auto' : 'auto',
                height: isMobile ? '58px' : isTablet ? '56px' : '58px',
                background: '#FFFFFF',
                borderRadius: '58px',
                border: 'none',
                cursor: 'pointer',
                flex: 'none',
                order: 0,
                flexGrow: 0,
                textDecoration: 'none',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  padding: '0px',
                  width: 'auto',
                  height: '28px',
                  flex: 'none',
                  order: 0,
                  flexGrow: 0,
                  zIndex: 0,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: '0px',
                    width: 'auto',
                    height: '28px',
                    flex: 'none',
                    order: 0,
                    alignSelf: 'stretch',
                    flexGrow: 0,
                  }}
                >
                  <span
                    style={{
                      width: 'auto',
                      height: '28px',
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: isMobile ? '16px' : isTablet ? '15px' : '16px',
                      lineHeight: isMobile ? '27px' : isTablet ? '25px' : '27px',
                      display: 'flex',
                      alignItems: 'center',
                      color: '#0F0F0F',
                      flex: 'none',
                      order: 0,
                      flexGrow: 0,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    See How It Works
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
                  bottom: '-3.25%',
                  border: '1px solid #0F0F0F',
                  borderRadius: '58px',
                  flex: 'none',
                  order: 1,
                  flexGrow: 0,
                  zIndex: 1,
                }}
              />
            </a>
          </div>
        </div>
        </div>

        {/* Cards and Image Container - Hero Image Area - Exact CSS from Figma */}
        <div 
          className="flex flex-row items-start"
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'center',
            alignItems: isMobile ? 'center' : isTablet ? 'flex-start' : isSmallDesktop ? 'flex-start' : 'flex-start',
            paddingTop: isMobile ? '32px' : isTablet ? '40px' : isSmallDesktop ? '40px' : '20px',
            gap: isMobile ? '10px' : isTablet ? '16px' : isSmallDesktop ? '16px' : '24px',
            width: '100%',
            maxWidth: isMobile ? '100%' : isTablet ? '100%' : isSmallDesktop ? '100%' : '1164px',
            height: isMobile ? 'auto' : isTablet ? 'auto' : isSmallDesktop ? 'auto' : '705.94px',
            flex: 'none',
            order: 1,
            flexGrow: 0,
            textAlign: 'left',
            boxSizing: 'border-box',
            paddingLeft: isMobile ? '0px' : isTablet ? '40px' : isSmallDesktop ? '40px' : '0px',
            paddingRight: isMobile ? '0px' : isTablet ? '40px' : isSmallDesktop ? '40px' : '0px',
            marginLeft: isMobile ? '0px' : '0px',
            marginRight: isMobile ? '0px' : '0px',
            position: 'relative',
          }}
        >
          
          {/* Hero Card 01 - Early Access Waitlist - Exact from Figma */}
          <div 
            className="flex flex-col justify-center items-center"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: isMobile ? 'center' : isTablet ? 'flex-start' : isSmallDesktop ? 'flex-start' : 'flex-start',
              padding: isMobile ? '36px' : isTablet ? '24px 20px 24px' : isSmallDesktop ? '24px 20px 24px' : '24px 32px 32px',
              width: isMobile ? '339.5px' : isTablet ? 'calc((100% - 80px - 32px - 280px) / 2)' : isSmallDesktop ? 'calc((100% - 80px - 32px - 280px) / 2)' : '388px',
              maxWidth: isMobile ? '339.5px' : isTablet ? 'none' : isSmallDesktop ? 'none' : '388px',
              height: isMobile ? 'auto' : isTablet ? 'auto' : isSmallDesktop ? 'auto' : '248px',
              minHeight: isMobile ? '238px' : isTablet ? 'auto' : isSmallDesktop ? 'auto' : '248px',
              background: isMobile ? 'linear-gradient(180deg, #F3F3F3 0%, #F9FAFB 100%)' : isTablet ? '#FFFFFF' : isSmallDesktop ? '#FFFFFF' : '#FFFFFF',
              borderRadius: '20px',
              flex: isMobile ? 'none' : isTablet ? '0 0 auto' : isSmallDesktop ? '0 0 auto' : 'none',
              order: 0,
              flexGrow: 0,
              position: 'relative',
              marginTop: isMobile ? '0px' : isTablet ? '0px' : isSmallDesktop ? '0px' : '170px',
              boxSizing: 'border-box',
            }}
          >
            {/* Border */}
            <div 
              style={{
                boxSizing: 'border-box',
                position: 'absolute',
                left: '0%',
                right: '0%',
                top: '0%',
                bottom: '-0.57%',
                border: '1px solid #E5E7EB',
                borderRadius: '20px',
                flex: 'none',
                order: 1,
                flexGrow: 0,
                zIndex: 1,
              }}
            />
            
            <div 
            className="flex flex-col items-start"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: isMobile ? 'center' : isTablet ? 'flex-start' : 'flex-start',
              padding: '0px',
              gap: isMobile ? '16px' : isTablet ? '20px' : '32px',
              width: '100%',
              height: isMobile ? 'auto' : isTablet ? 'auto' : '192px',
              minHeight: isMobile ? 'auto' : isTablet ? 'auto' : '192px',
              flex: 'none',
              order: 0,
              alignSelf: 'stretch',
              flexGrow: 0,
              position: 'relative',
              zIndex: 2,
            }}
          >
            {/* Text Content */}
            <div 
              className="flex flex-col items-start"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: isMobile ? 'center' : isTablet ? 'flex-start' : 'flex-start',
                padding: '0px',
                gap: '16px',
                width: '100%',
                height: isMobile ? 'auto' : isTablet ? 'auto' : '132px',
                minHeight: isMobile ? 'auto' : isTablet ? 'auto' : '132px',
                flex: 'none',
                order: 0,
                alignSelf: 'stretch',
                flexGrow: 0,
              }}
            >
              {/* Heading */}
              <h4 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: isMobile ? 'center' : isTablet ? 'flex-start' : 'flex-start',
                  padding: '0px',
                  width: '100%',
                  height: isMobile ? 'auto' : isTablet ? 'auto' : '34px',
                  minHeight: isMobile ? '26px' : isTablet ? 'auto' : '34px',
                  flex: 'none',
                  order: 0,
                  alignSelf: 'stretch',
                  flexGrow: 0,
                  margin: 0,
                }}
              >
                <span
                  style={{
                    width: '100%',
                    height: isMobile ? 'auto' : isTablet ? 'auto' : '34px',
                    minHeight: isMobile ? '26px' : isTablet ? 'auto' : '34px',
                    fontFamily: 'var(--font-plus-jakarta)',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: isMobile ? '18px' : isTablet ? '20px' : '24px',
                    lineHeight: isMobile ? '25px' : isTablet ? '28px' : '34px',
                    letterSpacing: '-0.5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: isMobile ? 'center' : isTablet ? 'flex-start' : 'flex-start',
                    textAlign: isMobile ? 'center' : isTablet ? 'left' : 'left',
                    color: '#0F0F0F',
                    flex: 'none',
                    order: 0,
                    alignSelf: 'stretch',
                    flexGrow: 0,
                  }}
                >
                  Early Access Waitlist
                </span>
              </h4>
              
              {/* Description */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: isMobile ? 'center' : isTablet ? 'flex-start' : 'flex-start',
                  padding: '0px',
                  width: '100%',
                  height: isMobile ? 'auto' : isTablet ? 'auto' : '82px',
                  minHeight: isMobile ? '82px' : isTablet ? 'auto' : '82px',
                  flex: 'none',
                  order: 1,
                  alignSelf: 'stretch',
                  flexGrow: 0,
                }}
              >
                <p
                  style={{
                    width: '100%',
                    height: isMobile ? 'auto' : isTablet ? 'auto' : '82px',
                    minHeight: isMobile ? '82px' : isTablet ? 'auto' : '82px',
                    fontFamily: 'var(--font-plus-jakarta)',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: isMobile ? '16px' : isTablet ? '14px' : '16px',
                    lineHeight: isMobile ? '27px' : isTablet ? '22px' : '27px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: isMobile ? 'center' : isTablet ? 'flex-start' : 'flex-start',
                    textAlign: isMobile ? 'center' : isTablet ? 'left' : 'left',
                    color: '#4B4B57',
                    flex: 'none',
                    order: 0,
                    alignSelf: 'stretch',
                    flexGrow: 0,
                    margin: 0,
                  }}
                >
                  Be among the first to try Liqwifi when we launch. Get priority onboarding, better limits and early features.
                </p>
              </div>
            </div>

              {/* Badge - Exact from Figma */}
              <div 
                className="flex flex-row items-center"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: isMobile ? 'center' : isTablet ? 'flex-start' : 'flex-start',
                  padding: '2px 10px',
                  isolation: 'isolate',
                  width: isMobile ? '212px' : isTablet ? 'auto' : '212px',
                  height: isMobile ? '28px' : isTablet ? '26px' : '28px',
                  background: '#0E0E0E',
                  borderRadius: '20px',
                  flex: 'none',
                  order: 1,
                  flexGrow: 0,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: '0px',
                    width: isMobile ? '192px' : isTablet ? 'auto' : '192px',
                    height: isMobile ? '24px' : isTablet ? '22px' : '24px',
                    flex: 'none',
                    order: 0,
                    flexGrow: 0,
                    zIndex: 0,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      padding: '0px',
                      width: isMobile ? '192px' : isTablet ? 'auto' : '192px',
                      height: isMobile ? '24px' : isTablet ? '22px' : '24px',
                      flex: 'none',
                      order: 0,
                      alignSelf: 'stretch',
                      flexGrow: 0,
                    }}
                  >
                    <span
                      style={{
                        width: isMobile ? '192px' : isTablet ? 'auto' : '192px',
                        height: isMobile ? '24px' : isTablet ? '22px' : '24px',
                        fontFamily: 'var(--font-plus-jakarta)',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: isMobile ? '14px' : isTablet ? '12px' : '14px',
                        lineHeight: isMobile ? '24px' : isTablet ? '22px' : '24px',
                        display: 'flex',
                        alignItems: 'center',
                        color: '#FFFFFF',
                        flex: 'none',
                        order: 0,
                        flexGrow: 0,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Thousands already signed up
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Image - Phone */}
          <div 
            className="flex-shrink-0"
            style={{
              width: isMobile ? '100%' : isTablet ? '280px' : '320px',
              maxWidth: isMobile ? '100%' : isTablet ? '280px' : '320px',
              height: isMobile ? 'auto' : isTablet ? 'auto' : '680.94px',
              minHeight: isMobile ? 'auto' : isTablet ? 'auto' : '680.94px',
              aspectRatio: isMobile ? '339.5/617.7' : isTablet ? '280/595' : '320/680.94',
              flex: isMobile ? 'none' : isTablet ? '0 0 280px' : 'none',
              order: 1,
              flexGrow: 0,
              alignSelf: isMobile ? 'center' : isTablet ? 'center' : 'flex-start',
              display: 'flex',
              justifyContent: 'center',
              alignItems: isMobile ? 'center' : isTablet ? 'center' : 'flex-start',
              position: 'relative',
              zIndex: isTablet ? 1 : 'auto',
            }}
          >
            <Image
              src="/hero-mockup.png"
              alt="Liqwifi App Interface"
              width={320}
              height={554}
              className="h-full w-auto object-contain"
              priority
            />
          </div>

          {/* Hero Card 02 - Built for fast, secure transactions - Exact from Figma */}
          <div 
            className="flex flex-col justify-start items-center"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: isMobile ? 'center' : isTablet ? 'flex-start' : isSmallDesktop ? 'flex-start' : 'center',
              padding: isMobile ? '36px' : isTablet ? '24px 20px 24px' : isSmallDesktop ? '24px 20px 24px' : '62px 0px 0px',
              margin: isMobile ? '0 auto' : isTablet ? '0' : isSmallDesktop ? '0' : '0 auto',
              width: isMobile ? '339.5px' : isTablet ? 'calc((100% - 80px - 32px - 280px) / 2)' : isSmallDesktop ? 'calc((100% - 80px - 32px - 280px) / 2)' : '388px',
              maxWidth: isMobile ? '339.5px' : isTablet ? 'none' : isSmallDesktop ? 'none' : '388px',
              height: isMobile ? 'auto' : isTablet ? 'auto' : isSmallDesktop ? 'auto' : '370px',
              minHeight: isMobile ? '266px' : isTablet ? 'auto' : isSmallDesktop ? 'auto' : '370px',
              background: isMobile ? 'linear-gradient(180deg, #F3F3F3 0%, #F9FAFB 100%)' : isTablet ? '#F3F3F3' : isSmallDesktop ? '#F3F3F3' : '#F3F3F3',
              borderRadius: '20px',
              flex: isMobile ? 'none' : isTablet ? '0 0 auto' : isSmallDesktop ? '0 0 auto' : 'none',
              order: 2,
              flexGrow: 0,
              position: 'relative',
              zIndex: (isTablet || isSmallDesktop) ? 10 : 'auto',
              marginTop: isMobile ? '0px' : isTablet ? '0px' : isSmallDesktop ? '0px' : '80px',
              boxSizing: 'border-box',
            }}
          >
            {/* Border */}
            <div 
              style={{
                boxSizing: 'border-box',
                position: 'absolute',
                left: '0%',
                right: '0%',
                top: '0%',
                bottom: '0%',
                border: '1px solid #E5E7EB',
                borderRadius: '20px',
                flex: 'none',
                order: 1,
                flexGrow: 0,
                zIndex: 1,
              }}
            />
            
            <div 
              className="flex flex-col items-start"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: isMobile ? 'center' : isTablet ? 'flex-start' : 'flex-start',
                padding: isMobile ? '0px' : isTablet ? '0px' : '0px 32px 32px 32px',
                gap: isMobile ? '16px' : isTablet ? '20px' : '32px',
                width: '100%',
                flex: 'none',
                order: 0,
                alignSelf: 'stretch',
                flexGrow: 0,
                position: 'relative',
                zIndex: 2,
              }}
            >
              {/* Stars - 5 green stars */}
              <div 
                className="flex flex-row"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: isMobile ? 'center' : isTablet ? 'flex-start' : 'flex-start',
                  alignItems: 'center',
                  gap: isMobile ? '4px' : isTablet ? '3px' : '4px',
                  width: isMobile ? '100%' : 'auto',
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    width={isMobile ? "24" : isTablet ? "20" : "24"} 
                    height={isMobile ? "24" : isTablet ? "20" : "24"} 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                      fill="#9ECE58"
                    />
                  </svg>
                ))}
              </div>

              {/* Text Content */}
              <div 
                className="flex flex-col items-start"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: isMobile ? 'center' : 'flex-start',
                  padding: '0px',
                  gap: '16px',
                  width: isMobile ? '100%' : '324px',
                  maxWidth: isMobile ? '100%' : '324px',
                  flex: 'none',
                  order: 0,
                  alignSelf: 'stretch',
                  flexGrow: 0,
                }}
              >
                {/* Heading */}
                <h4 
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: isMobile ? 'center' : 'flex-start',
                    padding: '0px',
                    width: isMobile ? '100%' : '324px',
                    maxWidth: isMobile ? '267.5px' : '324px',
                    height: isMobile ? 'auto' : '34px',
                    minHeight: isMobile ? '26px' : '34px',
                    flex: 'none',
                    order: 0,
                    alignSelf: 'stretch',
                    flexGrow: 0,
                    margin: 0,
                  }}
                >
                  <span
                    style={{
                      width: '100%',
                      height: isMobile ? 'auto' : isTablet ? 'auto' : '34px',
                      minHeight: isMobile ? '26px' : isTablet ? 'auto' : '34px',
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: isMobile ? '18px' : isTablet ? '20px' : '24px',
                      lineHeight: isMobile ? '25px' : isTablet ? '28px' : '34px',
                      letterSpacing: '-0.5px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: isMobile ? 'center' : 'flex-start',
                      textAlign: isMobile ? 'center' : isTablet ? 'left' : 'left',
                      color: '#0F0F0F',
                      flex: 'none',
                      order: 0,
                      alignSelf: 'stretch',
                      flexGrow: 0,
                    }}
                  >
                    Built for fast, secure transactions
                  </span>
                </h4>
                
                {/* Description */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: isMobile ? 'center' : isTablet ? 'flex-start' : 'flex-start',
                    padding: '0px',
                    width: '100%',
                    flex: 'none',
                    order: 1,
                    alignSelf: 'stretch',
                    flexGrow: 0,
                  }}
                >
                  <p
                    style={{
                      width: '100%',
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: isMobile ? '14px' : isTablet ? '14px' : '16px',
                      lineHeight: isMobile ? '24px' : isTablet ? '22px' : '27px',
                      display: 'flex',
                      alignItems: 'center',
                      textAlign: isMobile ? 'center' : isTablet ? 'left' : 'left',
                      color: '#4B4B57',
                      flex: 'none',
                      order: 0,
                      alignSelf: 'stretch',
                      flexGrow: 0,
                      margin: 0,
                    }}
                  >
                    Designed for 0.8s-2s processing times and high uptime so your money moves when you need it.
                  </p>
                </div>
              </div>

              {/* Button - Inside the card */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: isMobile ? 'center' : isTablet ? 'flex-start' : 'flex-start',
                  padding: '0px',
                  width: isMobile ? '100%' : 'auto',
                  flex: 'none',
                  order: 1,
                  flexGrow: 0,
                }}
              >
                <button 
                  className="relative"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: isMobile ? '15px 32px' : isTablet ? '12px 24px' : '15px 32px',
                    isolation: 'isolate',
                    width: isMobile ? 'auto' : isTablet ? 'auto' : 'auto',
                    minWidth: isMobile ? 'auto' : 'auto',
                    height: isMobile ? 'auto' : isTablet ? '36px' : '40px',
                    minHeight: isMobile ? '40px' : isTablet ? '36px' : '40px',
                    background: '#9ECE58',
                    borderRadius: '58px',
                    border: 'none',
                    cursor: 'pointer',
                    flex: 'none',
                    order: 0,
                    flexGrow: 0,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      padding: '0px',
                      flex: 'none',
                      order: 0,
                      flexGrow: 0,
                      zIndex: 0,
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        padding: '0px',
                        flex: 'none',
                        order: 0,
                        alignSelf: 'stretch',
                        flexGrow: 0,
                      }}
                    >
                      <span
                        className="hero-card-badge-mobile"
                        style={{
                          fontFamily: 'var(--font-plus-jakarta)',
                          fontStyle: 'normal',
                          fontWeight: 500,
                          fontSize: isMobile ? '16px' : isTablet ? '14px' : '16px',
                          lineHeight: isMobile ? '27px' : isTablet ? '22px' : '27px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#FFFFFF',
                          flex: 'none',
                          order: 0,
                          flexGrow: 0,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Launching Soon
                      </span>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}