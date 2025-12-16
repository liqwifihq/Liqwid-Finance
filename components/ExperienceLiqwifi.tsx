'use client'

import Image from 'next/image'
import { useIsMobile } from '@/hooks/useMediaQuery'

export default function ExperienceLiqwifi() {
  const isMobile = useIsMobile()
  
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: isMobile ? '40px' : '60px',
        paddingBottom: isMobile ? '0px' : '0px',
        paddingLeft: isMobile ? '30px' : '0px',
        paddingRight: isMobile ? '30px' : '0px',
        width: '100%',
        maxWidth: isMobile ? '100%' : '100%',
        minHeight: isMobile ? 'auto' : '587.29px',
        flex: 'none',
        order: 4,
        flexGrow: 0,
        zIndex: 4,
        position: 'relative',
        margin: '0 auto',
        boxSizing: 'border-box',
      }}
    >
      {/* Container */}
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'center' : 'flex-end',
          padding: isMobile ? '20px 20px 0px' : '0px',
          isolation: 'isolate',
          width: '100%',
          maxWidth: isMobile ? '100%' : '960px',
          minHeight: isMobile ? 'auto' : '400px',
          background: '#AFDDF5',
          borderRadius: '32px',
          flex: 'none',
          order: 0,
          flexGrow: 0,
          position: 'relative',
          overflow: 'hidden',
          gap: isMobile ? '30px' : '0px',
          margin: isMobile ? '0px' : '0 auto',
        }}
      >
        {/* Left Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: isMobile ? 'center' : 'flex-start',
            alignItems: isMobile ? 'center' : 'flex-start',
            padding: isMobile ? '0px' : '60px 50px 80px',
            gap: isMobile ? '24px' : '31.99px',
            width: isMobile ? '100%' : 'auto',
            maxWidth: isMobile ? '100%' : '480px',
            minHeight: isMobile ? 'auto' : 'auto',
            flex: isMobile ? 'none' : '0 0 460px',
            order: 0,
            flexGrow: 0,
            zIndex: 0,
            alignSelf: isMobile ? 'auto' : 'stretch',
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
              gap: isMobile ? '16px' : '16px',
              width: '100%',
              maxWidth: isMobile ? '100%' : '480px',
              minHeight: isMobile ? 'auto' : '214px',
              flex: 'none',
              order: 0,
              alignSelf: 'stretch',
              flexGrow: 0,
              paddingTop: isMobile ? '0px' : '0px',
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
                minHeight: '116px',
                flex: 'none',
                order: 0,
                alignSelf: 'stretch',
                flexGrow: 0,
              }}
            >
              {/* Heading 2 */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '0px',
                  width: '100%',
                  maxWidth: '480px',
                  minHeight: '116px',
                  flex: 'none',
                  order: 0,
                  alignSelf: 'stretch',
                  flexGrow: 0,
                }}
              >
                <h2
                  style={{
                    width: '100%',
                    maxWidth: isMobile ? '307.97px' : '480px',
                    minHeight: isMobile ? '87px' : 'auto',
                    fontFamily: 'var(--font-plus-jakarta)',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: isMobile ? '36px' : '42px',
                    lineHeight: isMobile ? '43px' : '52px',
                    display: 'block',
                    textAlign: isMobile ? 'center' : 'left',
                    letterSpacing: isMobile ? '-1px' : '-1.5px',
                    color: '#0F0F0F',
                    margin: 0,
                    marginTop: '30px',
                    whiteSpace: 'normal',
                    wordWrap: 'break-word',
                  }}
                >
                  {isMobile ? (
                    'Be the First to Experience Liqwifi'
                  ) : (
                    <>
                      Be the First to<br />Experience Liqwifi
                    </>
                  )}
                </h2>
              </div>
            </div>

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
                    maxWidth: isMobile ? '291.31px' : '460.52px',
                    minHeight: isMobile ? '109px' : '82px',
                    fontFamily: 'var(--font-plus-jakarta)',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '27px',
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: isMobile ? 'center' : 'left',
                    color: '#4B4B57',
                    flex: 'none',
                    order: 0,
                    alignSelf: 'stretch',
                    flexGrow: 0,
                    margin: 0,
                  }}
                >
                  Join the early access waitlist and be among the first to try cross-border transfers, smart loans and simple investment tools when we launch.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: isMobile ? 'center' : 'flex-start',
              padding: '0px',
              width: '100%',
              maxWidth: isMobile ? '100%' : '480px',
              minHeight: isMobile ? 'auto' : '62px',
              flex: 'none',
              order: 1,
              alignSelf: 'stretch',
              flexGrow: 0,
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
                padding: '15px 32px',
                gap: '8px',
                isolation: 'isolate',
                width: isMobile ? '100%' : '222px',
                maxWidth: isMobile ? '100%' : '222px',
                height: '62px',
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
              <span
                style={{
                  fontFamily: 'var(--font-plus-jakarta)',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '27px',
                  display: 'flex',
                  alignItems: 'center',
                  color: '#FFFFFF',
                }}
              >
                Join the waitlist
              </span>

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
        </div>

        {/* CTA Image - Phone Mockup */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: isMobile ? 'center' : 'flex-end',
            justifyContent: isMobile ? 'center' : 'flex-end',
            padding: '0px',
            position: isMobile ? 'relative' : 'relative',
            height: isMobile ? 'auto' : '100%',
            flex: isMobile ? 'none' : '1',
            order: 2,
            flexGrow: 0,
            zIndex: isMobile ? 1 : 2,
            width: isMobile ? '100%' : 'auto',
            maxWidth: isMobile ? '100%' : '380px',
            marginTop: isMobile ? '-20px' : '0px',
            paddingTop: isMobile ? '40px' : '0px',
            paddingRight: isMobile ? '0px' : '20px',
            paddingBottom: isMobile ? '0px' : '0px',
            alignSelf: isMobile ? 'auto' : 'stretch',
          }}
        >
          <div
            style={{
              width: isMobile ? '100%' : '360px',
              maxWidth: isMobile ? '100%' : '360px',
              height: isMobile ? 'auto' : '390px',
              aspectRatio: isMobile ? '408/435' : 'auto',
              flex: 'none',
              order: 0,
              alignSelf: isMobile ? 'center' : 'flex-end',
              flexGrow: 0,
              position: 'relative',
            }}
          >
            <Image
              src="/feature-section-mockup.png"
              alt="Liqwifi App Mockup"
              width={360}
              height={390}
              quality={100}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

