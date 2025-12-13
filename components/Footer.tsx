'use client'

import Image from 'next/image'
import { useIsMobile } from '@/hooks/useMediaQuery'

export default function Footer() {
  const isMobile = useIsMobile()
  
  return (
    <footer
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: isMobile ? '30px 20px' : '60px 30px',
        width: '100%',
        maxWidth: isMobile ? '390px' : '1440px',
        minHeight: isMobile ? '588.11px' : '365.12px',
        background: '#FFFFFF',
        flex: 'none',
        order: 7,
        flexGrow: 0,
        zIndex: 7,
        margin: '0 auto',
      }}
    >
      {/* Container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0px',
          gap: isMobile ? '32px' : '78.01px',
          width: '100%',
          maxWidth: isMobile ? '100%' : '1200px',
          minHeight: isMobile ? 'auto' : '245.12px',
          flex: 'none',
          order: 0,
          flexGrow: 0,
        }}
      >
        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: isMobile ? 'center' : 'space-between',
            alignItems: isMobile ? 'center' : 'flex-start',
            padding: '0px',
            gap: isMobile ? '30px' : '192px',
            width: '100%',
            maxWidth: isMobile ? '350px' : '1200px',
            height: isMobile ? 'auto' : '139.11px',
            flex: 'none',
            order: 0,
            alignSelf: 'stretch',
            flexGrow: 0,
          }}
        >
          {/* Top - Left Side */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0px',
              width: '100%',
              maxWidth: isMobile ? '100%' : '480px',
              minHeight: isMobile ? 'auto' : '139.11px',
              flex: 'none',
              order: 0,
              flexGrow: 0,
              gap: isMobile ? '16px' : '0px',
            }}
          >
            {/* Text */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0px',
                gap: '19px',
                width: '100%',
                maxWidth: '480px',
                minHeight: '139.11px',
                flex: 'none',
                order: 0,
                alignSelf: 'stretch',
                flexGrow: 0,
              }}
            >
              {/* Logo */}
              <div
                style={{
                  width: isMobile ? '104px' : '104px',
                  height: isMobile ? 'auto' : '38.11px',
                  flex: 'none',
                  order: 0,
                  flexGrow: 0,
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  src="/Liqwifi_logo.svg"
                  alt="Liqwifi Logo"
                  width={104}
                  height={38}
                  quality={100}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </div>

              {/* Container */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  padding: '0px',
                  width: '100%',
                  maxWidth: '480px',
                  minHeight: '82px',
                  flex: 'none',
                  order: 1,
                  alignSelf: 'stretch',
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
                    width: '100%',
                    maxWidth: '480px',
                    minHeight: '82px',
                    flex: 'none',
                    order: 0,
                    alignSelf: 'stretch',
                    flexGrow: 0,
                  }}
                >
                  <p
                    style={{
                      width: '100%',
                      maxWidth: isMobile ? '100%' : '480px',
                      minHeight: isMobile ? 'auto' : '82px',
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '27px',
                      textAlign: 'center',
                      color: '#4B4B57',
                      margin: 0,
                    }}
                  >
                    Liqwifi is a digital financial platform in development, focused on simplifying local and international payments, credit-score-based loans and accessible investments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Menus - Right Side */}
          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: isMobile ? 'center' : 'flex-start',
              padding: '0px 0.01px 0px 0px',
              gap: isMobile ? '20px' : '113.5px',
              width: '100%',
              maxWidth: isMobile ? '157.5px' : '299.01px',
              minHeight: isMobile ? 'auto' : '72.01px',
              flex: 'none',
              order: 1,
              flexGrow: 0,
            }}
          >
            {/* Menu List */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '0px',
                gap: isMobile ? '16px' : '16.01px',
                width: '100%',
                maxWidth: isMobile ? '100%' : '299px',
                minHeight: isMobile ? 'auto' : '72.01px',
                flex: 'none',
                order: 0,
                flexGrow: 0,
              }}
            >
              {/* Container - Links Heading */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '0px',
                  width: isMobile ? 'auto' : '39px',
                  height: '28px',
                  opacity: 0.5,
                  flex: 'none',
                  order: 0,
                  flexGrow: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-plus-jakarta)',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '27px',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#0F0F0F',
                  }}
                >
                  Links
                </span>
              </div>

              {/* Menu */}
              <div
                className="footer-menu-links-mobile"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '0px',
                  gap: isMobile ? '12px' : '16px',
                  width: isMobile ? '100%' : '299px',
                  height: isMobile ? 'auto' : '28px',
                  flex: 'none',
                  order: 1,
                  flexGrow: 0,
                }}
              >
                {/* Link - About */}
                <a
                  href="#about"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0px',
                    width: isMobile ? 'auto' : '48px',
                    height: '28px',
                    borderRadius: '10px',
                    flex: 'none',
                    order: 0,
                    flexGrow: 0,
                    textDecoration: 'none',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '16px',
                      lineHeight: '27px',
                      display: 'flex',
                      alignItems: 'center',
                      color: '#0F0F0F',
                    }}
                  >
                    About
                  </span>
                </a>

                {/* Link - FAQ */}
                <a
                  href="#faq"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0px',
                    width: isMobile ? 'auto' : '33px',
                    height: '28px',
                    borderRadius: '10px',
                    flex: 'none',
                    order: 1,
                    flexGrow: 0,
                    textDecoration: 'none',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '16px',
                      lineHeight: '27px',
                      display: 'flex',
                      alignItems: 'center',
                      color: '#0F0F0F',
                    }}
                  >
                    FAQ
                  </span>
                </a>

                {/* Link - Terms */}
                <a
                  href="#terms"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0px',
                    width: isMobile ? 'auto' : '46px',
                    height: '28px',
                    borderRadius: '10px',
                    flex: 'none',
                    order: 2,
                    flexGrow: 0,
                    textDecoration: 'none',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '16px',
                      lineHeight: '27px',
                      display: 'flex',
                      alignItems: 'center',
                      color: '#0F0F0F',
                    }}
                  >
                    Terms
                  </span>
                </a>

                {/* Link - Privacy */}
                <a
                  href="#privacy"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0px',
                    width: isMobile ? 'auto' : '56px',
                    height: '28px',
                    borderRadius: '10px',
                    flex: 'none',
                    order: 3,
                    flexGrow: 0,
                    textDecoration: 'none',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '16px',
                      lineHeight: '27px',
                      display: 'flex',
                      alignItems: 'center',
                      color: '#0F0F0F',
                    }}
                  >
                    Privacy
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0px',
            width: '100%',
            maxWidth: isMobile ? '100%' : '1200px',
            height: isMobile ? 'auto' : '28px',
            minHeight: isMobile ? 'auto' : '28px',
            flex: 'none',
            order: 1,
            alignSelf: 'stretch',
            flexGrow: 0,
            gap: isMobile ? '0px' : '0px',
          }}
        >
          {/* Container - Copyright */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0px',
              width: '100%',
              maxWidth: isMobile ? '100%' : '354px',
              minHeight: isMobile ? 'auto' : '28px',
              flex: 'none',
              order: 0,
              flexGrow: 0,
            }}
          >
            <span
              style={{
                width: '100%',
                maxWidth: isMobile ? '100%' : '354px',
                minHeight: isMobile ? 'auto' : '28px',
                fontFamily: 'var(--font-plus-jakarta)',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '27px',
                textAlign: 'center',
                color: '#4B4B57',
              }}
            >
              Copyright © 2025 Liqwify. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

