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
        padding: isMobile ? '20px 20px' : '24px 0px',
        width: '100%',
        maxWidth: isMobile ? '390px' : '1440px',
        minHeight: isMobile ? 'auto' : 'auto',
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
          gap: isMobile ? '24px' : '24px',
          width: '100%',
          maxWidth: isMobile ? '100%' : '1200px',
          margin: isMobile ? '0px' : '0 auto',
          minHeight: isMobile ? 'auto' : 'auto',
          flex: 'none',
          order: 0,
          flexGrow: 0,
        }}
      >
        {/* Top Row - Logo/Description and Links */}
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: isMobile ? 'center' : 'space-between',
            alignItems: isMobile ? 'center' : 'flex-start',
            padding: '0px',
            gap: isMobile ? '30px' : '0px',
            width: '100%',
            maxWidth: isMobile ? '350px' : '1200px',
            height: isMobile ? 'auto' : 'auto',
            flex: 'none',
            order: 0,
            alignSelf: 'stretch',
            flexGrow: 0,
          }}
        >
          {/* Left Side - Logo and Description */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: isMobile ? 'center' : 'flex-start',
              padding: '0px',
              gap: isMobile ? '16px' : '19px',
              width: isMobile ? '100%' : 'auto',
              maxWidth: isMobile ? '100%' : '480px',
              flex: 'none',
              order: 0,
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
                justifyContent: isMobile ? 'center' : 'flex-start',
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

            {/* Company Description */}
            <p
              style={{
                width: isMobile ? '100%' : '480px',
                maxWidth: isMobile ? '100%' : '480px',
                fontFamily: 'var(--font-plus-jakarta)',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '27px',
                textAlign: isMobile ? 'center' : 'left',
                color: '#4B4B57',
                margin: 0,
              }}
            >
              Liqwifi is a digital financial platform in development, focused on simplifying local and international payments, credit-score-based loans and accessible investments.
            </p>
          </div>

          {/* Right Side - Links */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: isMobile ? 'center' : 'flex-end',
              padding: '0px',
              gap: isMobile ? '16px' : '16px',
              width: isMobile ? '100%' : 'auto',
              flex: 'none',
              order: 1,
              flexGrow: 0,
            }}
          >
            {/* Links Heading */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: isMobile ? 'center' : 'flex-end',
                padding: '0px',
                width: isMobile ? 'auto' : 'auto',
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

            {/* Menu Links - Horizontal */}
            <div
              style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                justifyContent: isMobile ? 'center' : 'flex-end',
                alignItems: 'center',
                padding: '0px',
                gap: isMobile ? '12px' : '24px',
                width: isMobile ? '100%' : 'auto',
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

        {/* Bottom Row - Copyright and Contact */}
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: isMobile ? 'center' : 'space-between',
            alignItems: isMobile ? 'center' : 'center',
            padding: '0px',
            gap: isMobile ? '16px' : '0px',
            width: '100%',
            maxWidth: isMobile ? '350px' : '1200px',
            height: isMobile ? 'auto' : '28px',
            flex: 'none',
            order: 1,
            alignSelf: 'stretch',
            flexGrow: 0,
          }}
        >
          {/* Copyright - Left */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: isMobile ? 'center' : 'flex-start',
              padding: '0px',
              width: isMobile ? '100%' : 'auto',
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
                textAlign: isMobile ? 'center' : 'left',
                color: '#4B4B57',
              }}
            >
              Copyright © 2025 Liqwify. All Rights Reserved.
            </span>
          </div>

          {/* Contact Info - Right */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: isMobile ? 'center' : 'flex-end',
              alignItems: 'center',
              padding: '0px',
              gap: '8px',
              width: isMobile ? '100%' : 'auto',
              flex: 'none',
              order: 1,
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
                color: '#4B4B57',
              }}
            >
              support@liqwifi.com
            </span>
            <span
              style={{
                fontFamily: 'var(--font-plus-jakarta)',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '27px',
                display: 'flex',
                alignItems: 'center',
                color: '#4B4B57',
              }}
            >
              •
            </span>
            <span
              style={{
                fontFamily: 'var(--font-plus-jakarta)',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '27px',
                display: 'flex',
                alignItems: 'center',
                color: '#4B4B57',
              }}
            >
              +234 (0) XXXXXXXXXX
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

