'use client'

import Image from 'next/image'
import { useIsMobile } from '@/hooks/useMediaQuery'

export default function Navigation() {
  const isMobile = useIsMobile()
  
  return (
    <nav
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: isMobile ? '10px 11px' : '0px',
        width: isMobile ? '100%' : '1169px',
        maxWidth: isMobile ? '100%' : '1169px',
        height: isMobile ? '60px' : '75px',
        borderRadius: '66px',
        flex: 'none',
        order: 0,
        alignSelf: 'stretch',
        flexGrow: 0,
        zIndex: 0,
        justifyContent: 'space-between',
        background: isMobile ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: isMobile ? 'blur(2.5px)' : 'blur(10px)',
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
          paddingLeft: '24px',
        }}
      >
        {/* Logo Icon */}
        <div
          style={{
            width: isMobile ? '82px' : '108.74px',
            height: isMobile ? '30.05px' : '43.14px',
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
              width: isMobile ? '82px' : '108.74px',
              height: isMobile ? '30.05px' : '43.14px',
              objectFit: 'contain',
            }}
            unoptimized
          />
        </div>
      </div>

      {/* Header Button - Exact CSS from Figma */}
      {!isMobile && (
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
            <button
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
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
