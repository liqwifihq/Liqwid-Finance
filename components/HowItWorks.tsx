'use client'

import Image from 'next/image'
import { useIsMobile, useIsTablet, useIsSmallDesktop } from '@/hooks/useMediaQuery'

export default function HowItWorks() {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const isSmallDesktop = useIsSmallDesktop()
  
  return (
    <div 
      id="getting-started" 
      style={{ 
        position: 'relative', 
        width: '100%', 
        maxWidth: '100%',
        overflow: 'visible', 
        scrollMarginTop: isMobile ? '100px' : isTablet ? '85px' : isSmallDesktop ? '85px' : '100px'
      }}
    >
      {/* Blur Shape Left - Spreads out 100vw like hero section */}
      <div
        style={{
          position: 'absolute',
          height: '808px',
          left: 'calc(50% - 720px - 14.08% * 1440px / 100)',
          top: '0px',
          background: 'linear-gradient(90deg, #CBFE91 0%, #D6F3F4 100%)',
          opacity: 0.3,
          filter: 'blur(50px)',
          borderRadius: '555.2px',
          transform: 'rotate(90deg)',
          zIndex: 0,
          width: 'calc(14.08% * 1440px / 100 + 93.08% * 1440px / 100)',
        }}
      >
        <img
          src="/Blurred Shape Left.png"
          alt="Blur Shape Left"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            mixBlendMode: 'multiply',
          }}
        />
      </div>

      {/* Blur Shape Right - Spreads out 100vw like hero section */}
      <div
        style={{
          position: 'absolute',
          height: isMobile ? '362px' : '362px',
          left: isMobile ? '91.54%' : 'calc(50% - 720px + 61.25% * 1440px / 100)',
          right: isMobile ? '-41.54%' : 'auto',
          top: isMobile ? '-100px' : '0px',
          background: '#E3AAAA',
          opacity: 0.15,
          filter: 'blur(50px)',
          borderRadius: isMobile ? '278.5px' : '541px',
          transform: 'rotate(180deg)',
          zIndex: 1,
          width: isMobile ? 'auto' : 'calc(11.25% * 1440px / 100)',
        }}
      >
        <img
          src="/Blurred Shape Right.png"
          alt="Blur Shape Right"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            mixBlendMode: 'multiply',
          }}
        />
      </div>

    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: isMobile ? '40px' : isTablet ? '100px' : '20px',
        paddingBottom: isMobile ? '60px' : isTablet ? '100px' : '40px',
        paddingLeft: isMobile ? '30px' : isTablet ? '40px' : '0px',
        paddingRight: isMobile ? '30px' : isTablet ? '40px' : '0px',
        isolation: 'isolate',
        width: '100%',
        maxWidth: isMobile ? '100%' : '100%',
        minHeight: isMobile ? 'auto' : isTablet ? 'auto' : '1143px',
        background: isMobile ? 'linear-gradient(180deg, rgba(203, 254, 145, 0.1) 0%, rgba(255, 255, 255, 1) 30%)' : isTablet ? '#FFFFFF' : '#FFFFFF',
        flex: 'none',
        order: 2,
        flexGrow: 0,
        zIndex: 2,
        position: 'relative',
        overflow: 'visible',
        margin: '0 auto',
        boxSizing: 'border-box',
      }}
    >

      {/* Container → Feature Tabs */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0px',
          gap: isMobile ? '40px' : isTablet ? '80px' : '56px',
          width: isMobile ? '100%' : isTablet ? '100%' : '100%',
          maxWidth: isMobile ? '100%' : isTablet ? '750px' : '960px',
          minHeight: isMobile ? 'auto' : isTablet ? 'auto' : '1013px',
          flex: 'none',
          order: 2,
          flexGrow: 0,
          zIndex: 2,
          margin: '0 auto',
        }}
      >
        {/* Section Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0px',
            gap: isMobile ? '16px' : isTablet ? '20px' : '16px',
            width: '100%',
            maxWidth: isMobile ? '100%' : isTablet ? '750px' : '960px',
            minHeight: isMobile ? 'auto' : isTablet ? 'auto' : '173px',
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
              width: isMobile ? 'auto' : isTablet ? 'auto' : '123px',
              height: isMobile ? 'auto' : isTablet ? 'auto' : '28px',
              flex: 'none',
              order: 0,
              flexGrow: 0,
            }}
          >
            {/* Default */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px',
                width: isMobile ? 'auto' : isTablet ? 'auto' : '123px',
                height: isMobile ? 'auto' : isTablet ? 'auto' : '28px',
                flex: 'none',
                order: 0,
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
                  width: isMobile ? 'auto' : isTablet ? 'auto' : '123px',
                  height: isMobile ? 'auto' : isTablet ? 'auto' : '28px',
                  flex: 'none',
                  order: 0,
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
                    width: isMobile ? 'auto' : isTablet ? 'auto' : '123px',
                    height: isMobile ? 'auto' : isTablet ? 'auto' : '28px',
                    flex: 'none',
                    order: 0,
                    alignSelf: 'stretch',
                    flexGrow: 0,
                  }}
                >
                  {/* HOW IT WORKS */}
                  <span
                    style={{
                      width: isMobile ? 'auto' : isTablet ? 'auto' : '123px',
                      height: isMobile ? 'auto' : isTablet ? 'auto' : '28px',
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: isMobile ? '16px' : isTablet ? '14px' : '16px',
                      lineHeight: isMobile ? '27px' : isTablet ? '24px' : '27px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textTransform: 'uppercase',
                      color: isMobile ? '#85D06A' : isTablet ? '#6BE06A' : '#85D06A',
                      flex: 'none',
                      order: 0,
                      flexGrow: 0,
                      letterSpacing: isTablet ? '0.5px' : '0px',
                    }}
                  >
                    HOW IT WORKS
                  </span>
                </div>
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
              width: '100%',
              maxWidth: isMobile ? '100%' : isTablet ? '750px' : '960px',
              minHeight: isMobile ? 'auto' : isTablet ? 'auto' : '58px',
              flex: 'none',
              order: 1,
              alignSelf: 'stretch',
              flexGrow: 0,
            }}
          >
            {/* Heading 2 */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '0px',
                width: '100%',
                maxWidth: isMobile ? '100%' : isTablet ? '750px' : '960px',
                minHeight: isMobile ? 'auto' : isTablet ? 'auto' : '58px',
                flex: 'none',
                order: 0,
                alignSelf: 'stretch',
                flexGrow: 0,
              }}
            >
              {/* Designed to Make Getting Started Simple */}
              <h2
                style={{
                  width: '100%',
                  maxWidth: isMobile ? '100%' : isTablet ? '750px' : '960px',
                  minHeight: isMobile ? 'auto' : isTablet ? 'auto' : '58px',
                  fontFamily: 'var(--font-plus-jakarta)',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: isMobile ? 'clamp(28px, 7.5vw, 36px)' : isTablet ? '52px' : '48px',
                  lineHeight: isMobile ? 'clamp(36px, 9.5vw, 43px)' : isTablet ? '1.2' : '58px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  letterSpacing: isMobile ? '-1px' : isTablet ? '-1.5px' : '-1.5px',
                  color: '#0F0F0F',
                  flex: 'none',
                  order: 0,
                  alignSelf: 'stretch',
                  flexGrow: 0,
                  margin: 0,
                }}
              >
                Designed to Make Getting Started Simple
              </h2>
            </div>
          </div>

          {/* Container */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0px',
              width: isMobile ? '100%' : isTablet ? '100%' : '540px',
              maxWidth: isMobile ? '100%' : isTablet ? '700px' : '540px',
              height: isMobile ? 'auto' : isTablet ? 'auto' : '55px',
              minHeight: isMobile ? 'auto' : isTablet ? 'auto' : '55px',
              flex: 'none',
              order: 2,
              flexGrow: 0,
            }}
          >
            {/* From joining the waitlist to managing transfers, loans and investments, Liqwifi is being built so anyone can get up and running in minutes. */}
            <p
              style={{
                width: isMobile ? '100%' : isTablet ? '100%' : '540px',
                maxWidth: isMobile ? '100%' : isTablet ? '700px' : '540px',
                height: isMobile ? 'auto' : isTablet ? 'auto' : '55px',
                minHeight: isMobile ? 'auto' : isTablet ? 'auto' : '55px',
                fontFamily: 'var(--font-plus-jakarta)',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: isMobile ? '16px' : isTablet ? '19px' : '16px',
                lineHeight: isMobile ? '27px' : isTablet ? '1.5' : '27px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: isMobile ? '#4B4B57' : isTablet ? '#4B5563' : '#4B4B57',
                flex: 'none',
                order: 0,
                alignSelf: 'stretch',
                flexGrow: 0,
                margin: 0,
                marginTop: isMobile ? '0px' : isTablet ? '24px' : '30px',
              }}
            >
              From joining the waitlist to managing transfers, loans and investments, Liqwifi is being built so anyone can get up and running in minutes.
            </p>
          </div>
        </div>

        {/* Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: isMobile ? 'flex-start' : isTablet ? 'center' : 'flex-start',
            padding: '0px',
            width: '100%',
            maxWidth: isMobile ? '100%' : isTablet ? '750px' : '960px',
            minHeight: isMobile ? 'auto' : isTablet ? 'auto' : '784px',
            flex: 'none',
            order: 1,
            alignSelf: 'stretch',
            flexGrow: 0,
          }}
        >
          {/* Desktop Tab 1 */}
          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : isTablet ? 'column' : 'row',
              alignItems: isMobile ? 'flex-start' : isTablet ? 'center' : 'flex-start',
              padding: '0px',
              gap: isMobile ? '24px' : isTablet ? '0px' : '40px',
              width: '100%',
              maxWidth: isMobile ? '100%' : isTablet ? '700px' : '960px',
              minHeight: isMobile ? 'auto' : isTablet ? 'auto' : '784px',
              flex: 'none',
              order: 0,
              alignSelf: 'stretch',
              flexGrow: 0,
            }}
          >
            {/* Tabs */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: isMobile ? 'flex-start' : isTablet ? 'flex-start' : 'flex-start',
                padding: '0px',
                isolation: 'isolate',
                width: isMobile ? '100%' : isTablet ? '100%' : '480px',
                maxWidth: isMobile ? '100%' : isTablet ? '700px' : '480px',
                height: isMobile ? 'auto' : isTablet ? 'auto' : '784px',
                flex: 'none',
                order: 0,
                flexGrow: 0,
                gap: isMobile ? '24px' : isTablet ? '52px' : '0px',
              }}
            >
              {/* Tab 1 - Join the Waitlist - Only show on tablet */}
              {isTablet && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    padding: '0px',
                    gap: '10px',
                    width: '100%',
                    flex: 'none',
                    order: 0,
                    flexGrow: 0,
                  }}
                >
                  <h3
                    style={{
                      width: '100%',
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontStyle: 'normal',
                      fontWeight: 600,
                      fontSize: '24px',
                      lineHeight: '1.2',
                      color: '#1A1A1A',
                      margin: 0,
                    }}
                  >
                    Join the Waitlist
                  </h3>
                  <p
                    style={{
                      width: '100%',
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '17px',
                      lineHeight: '1.5',
                      color: '#4B5563',
                      margin: 0,
                    }}
                  >
                    Share a few details so we can reserve your spot and keep you updated as Liqwifi gets ready to launch in your country.
                  </p>
                </div>
              )}
              {/* Tab 2 */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  padding: isMobile ? '0px' : isTablet ? '0px' : '36px 20px 36px 16px',
                  gap: isMobile ? '8px' : isTablet ? '10px' : '16px',
                  isolation: 'isolate',
                  width: isMobile ? '100%' : isTablet ? '100%' : '528px',
                  maxWidth: isMobile ? '100%' : isTablet ? '100%' : '528px',
                  height: isMobile ? 'auto' : isTablet ? 'auto' : '196px',
                  minHeight: isMobile ? 'auto' : isTablet ? 'auto' : '196px',
                  background: isMobile ? 'transparent' : isTablet ? 'transparent' : '#F9FAFB',
                  flex: 'none',
                  order: 1,
                  alignSelf: 'stretch',
                  flexGrow: 0,
                  zIndex: 1,
                  position: 'relative',
                }}
              >
                {/* Container */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    padding: '0px',
                    gap: isMobile ? '8px' : '8px',
                    width: isMobile ? '100%' : '428px',
                    maxWidth: isMobile ? '100%' : '428px',
                    height: isMobile ? 'auto' : '124px',
                    minHeight: isMobile ? 'auto' : '124px',
                    flex: 'none',
                    order: 1,
                    flexGrow: isMobile ? 0 : 1,
                    zIndex: 1,
                  }}
                >
                  {/* Container */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      padding: '0px',
                      width: isMobile ? '100%' : '428px',
                      maxWidth: isMobile ? '100%' : '428px',
                      height: isMobile ? 'auto' : '34px',
                      minHeight: isMobile ? 'auto' : '34px',
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
                        alignItems: 'flex-start',
                        padding: '0px',
                        width: isMobile ? '100%' : '428px',
                        maxWidth: isMobile ? '100%' : '428px',
                        height: isMobile ? 'auto' : '34px',
                        minHeight: isMobile ? 'auto' : '34px',
                        flex: 'none',
                        order: 0,
                        alignSelf: 'stretch',
                        flexGrow: 0,
                      }}
                    >
                      {/* Get Your Early Access Invite */}
                      <h3
                        style={{
                          width: isMobile ? '100%' : isTablet ? '100%' : '428px',
                          maxWidth: isMobile ? '100%' : isTablet ? '100%' : '428px',
                          height: isMobile ? 'auto' : isTablet ? 'auto' : '34px',
                          minHeight: isMobile ? 'auto' : isTablet ? 'auto' : '34px',
                          fontFamily: 'var(--font-plus-jakarta)',
                          fontStyle: 'normal',
                          fontWeight: isTablet ? 600 : 700,
                          fontSize: isMobile ? '18px' : isTablet ? '24px' : '20px',
                          lineHeight: isMobile ? '27px' : isTablet ? '1.2' : '34px',
                          display: 'flex',
                          alignItems: 'center',
                          color: isTablet ? '#1A1A1A' : '#0F0F0F',
                          flex: 'none',
                          order: 0,
                          alignSelf: 'stretch',
                          flexGrow: 0,
                          margin: 0,
                          marginBottom: isMobile ? '8px' : isTablet ? '0px' : '0px',
                        }}
                      >
                        Get Your Early Access Invite
                      </h3>
                    </div>
                  </div>

                  {/* Container */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      padding: '0px',
                      width: isMobile ? '100%' : '428px',
                      maxWidth: isMobile ? '100%' : '428px',
                      height: isMobile ? 'auto' : '82px',
                      minHeight: isMobile ? 'auto' : '82px',
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
                        width: isMobile ? '100%' : '428px',
                        maxWidth: isMobile ? '100%' : '428px',
                        height: isMobile ? 'auto' : '82px',
                        minHeight: isMobile ? 'auto' : '82px',
                        flex: 'none',
                        order: 0,
                        alignSelf: 'stretch',
                        flexGrow: 0,
                      }}
                    >
                      {/* When we roll out, you'll receive a unique invite link with simple instructions to download the app and verify your identity securely. */}
                      <p
                        style={{
                          width: isMobile ? '100%' : '428px',
                          maxWidth: isMobile ? '100%' : '428px',
                          height: isMobile ? 'auto' : '82px',
                          minHeight: isMobile ? 'auto' : '82px',
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
                        When we roll out, you'll receive a unique invite link with simple instructions to download the app and verify your identity securely.
                      </p>
                    </div>
                  </div>
                </div>

                {/* HorizontalBorder - Hidden on tablet */}
                {!isTablet && (
                  <div
                    style={{
                      position: 'absolute',
                      left: '0%',
                      right: '0%',
                      top: '0%',
                      bottom: '-0.75%',
                      flex: 'none',
                      order: 2,
                      flexGrow: 0,
                      zIndex: 2,
                      borderBottom: '1px dashed rgba(0, 0, 0, 0.1)',
                    }}
                  />
                )}
              </div>

              {/* Tab 3 */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  padding: isMobile ? '0px' : isTablet ? '0px' : '36px 20px 36px 16px',
                  gap: isMobile ? '8px' : isTablet ? '10px' : '16px',
                  isolation: 'isolate',
                  width: isMobile ? '100%' : isTablet ? '100%' : '528px',
                  maxWidth: isMobile ? '100%' : isTablet ? '100%' : '528px',
                  height: isMobile ? 'auto' : isTablet ? 'auto' : '196px',
                  minHeight: isMobile ? 'auto' : isTablet ? 'auto' : '196px',
                  background: isMobile ? 'transparent' : isTablet ? 'transparent' : '#F9FAFB',
                  flex: 'none',
                  order: 1,
                  alignSelf: 'stretch',
                  flexGrow: 0,
                  zIndex: 1,
                  position: 'relative',
                }}
              >
                {/* Container */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    padding: '0px',
                    gap: isMobile ? '8px' : '8px',
                    width: isMobile ? '100%' : '428px',
                    maxWidth: isMobile ? '100%' : '428px',
                    height: isMobile ? 'auto' : '124px',
                    minHeight: isMobile ? 'auto' : '124px',
                    flex: 'none',
                    order: 1,
                    flexGrow: isMobile ? 0 : 1,
                    zIndex: 1,
                  }}
                >
                  {/* Container */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      padding: '0px',
                      width: isMobile ? '100%' : '428px',
                      maxWidth: isMobile ? '100%' : '428px',
                      height: isMobile ? 'auto' : '34px',
                      minHeight: isMobile ? 'auto' : '34px',
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
                        alignItems: 'flex-start',
                        padding: '0px',
                        width: isMobile ? '100%' : '428px',
                        maxWidth: isMobile ? '100%' : '428px',
                        height: isMobile ? 'auto' : '34px',
                        minHeight: isMobile ? 'auto' : '34px',
                        flex: 'none',
                        order: 0,
                        alignSelf: 'stretch',
                        flexGrow: 0,
                      }}
                    >
                      {/* Set Up Your Money Hub */}
                      <h3
                        style={{
                          width: isMobile ? '100%' : isTablet ? '100%' : '428px',
                          maxWidth: isMobile ? '100%' : isTablet ? '100%' : '428px',
                          height: isMobile ? 'auto' : isTablet ? 'auto' : '34px',
                          minHeight: isMobile ? 'auto' : isTablet ? 'auto' : '34px',
                          fontFamily: 'var(--font-plus-jakarta)',
                          fontStyle: 'normal',
                          fontWeight: isTablet ? 600 : 700,
                          fontSize: isMobile ? '18px' : isTablet ? '24px' : '20px',
                          lineHeight: isMobile ? '27px' : isTablet ? '1.2' : '34px',
                          display: 'flex',
                          alignItems: 'center',
                          color: isTablet ? '#1A1A1A' : '#0F0F0F',
                          flex: 'none',
                          order: 0,
                          alignSelf: 'stretch',
                          flexGrow: 0,
                          margin: 0,
                          marginBottom: isMobile ? '8px' : isTablet ? '0px' : '0px',
                        }}
                      >
                        Set Up Your Money Hub
                      </h3>
                    </div>
                  </div>

                  {/* Container */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      padding: '0px',
                      width: isMobile ? '100%' : '428px',
                      maxWidth: isMobile ? '100%' : '428px',
                      height: isMobile ? 'auto' : '82px',
                      minHeight: isMobile ? 'auto' : '82px',
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
                        width: isMobile ? '100%' : '428px',
                        maxWidth: isMobile ? '100%' : '428px',
                        height: isMobile ? 'auto' : '82px',
                        minHeight: isMobile ? 'auto' : '82px',
                        flex: 'none',
                        order: 0,
                        alignSelf: 'stretch',
                        flexGrow: 0,
                      }}
                    >
                      {/* Set up your account or wallets, choose your main currency, and personalize alerts, budgets and preferred corridors. */}
                      <p
                        style={{
                          width: isMobile ? '100%' : isTablet ? '100%' : '428px',
                          maxWidth: isMobile ? '100%' : isTablet ? '100%' : '428px',
                          height: isMobile ? 'auto' : isTablet ? 'auto' : '82px',
                          minHeight: isMobile ? 'auto' : isTablet ? 'auto' : '82px',
                          fontFamily: 'var(--font-plus-jakarta)',
                          fontStyle: 'normal',
                          fontWeight: 400,
                          fontSize: isMobile ? '16px' : isTablet ? '17px' : '16px',
                          lineHeight: isMobile ? '27px' : isTablet ? '1.5' : '27px',
                          display: 'flex',
                          alignItems: 'flex-start',
                          textAlign: 'left',
                          color: isTablet ? '#4B5563' : '#4B4B57',
                          flex: 'none',
                          order: 0,
                          alignSelf: 'stretch',
                          flexGrow: 0,
                          margin: 0,
                        }}
                      >
                        Set up your account or wallets, choose your main currency, and personalize alerts, budgets and preferred corridors.
                      </p>
                    </div>
                  </div>
                </div>

                {/* HorizontalBorder - Hidden on mobile */}
                {!isMobile && (
                <div
                  style={{
                    position: 'absolute',
                    left: '0%',
                    right: '0%',
                    top: '0%',
                    bottom: '-0.75%',
                    flex: 'none',
                    order: 2,
                    flexGrow: 0,
                    zIndex: 2,
                    borderBottom: '1px dashed rgba(0, 0, 0, 0.1)',
                  }}
                />
                )}
              </div>

              {/* Tab 4 */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  padding: isMobile ? '0px' : isTablet ? '0px' : '36px 20px 36px 16px',
                  gap: isMobile ? '8px' : isTablet ? '10px' : '16px',
                  isolation: 'isolate',
                  width: isMobile ? '100%' : isTablet ? '100%' : '528px',
                  maxWidth: isMobile ? '100%' : isTablet ? '100%' : '528px',
                  height: isMobile ? 'auto' : isTablet ? 'auto' : '196px',
                  minHeight: isMobile ? 'auto' : isTablet ? 'auto' : '196px',
                  background: isMobile ? 'transparent' : isTablet ? 'transparent' : '#F9FAFB',
                  flex: 'none',
                  order: 2,
                  alignSelf: 'stretch',
                  flexGrow: 0,
                  zIndex: 2,
                  position: 'relative',
                }}
              >
                {/* Container */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    padding: '0px',
                    gap: isMobile ? '8px' : '8px',
                    width: isMobile ? '100%' : '428px',
                    maxWidth: isMobile ? '100%' : '428px',
                    height: isMobile ? 'auto' : '124px',
                    minHeight: isMobile ? 'auto' : '124px',
                    flex: 'none',
                    order: 1,
                    flexGrow: isMobile ? 0 : 1,
                    zIndex: 1,
                  }}
                >
                  {/* Container */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      padding: '0px',
                      width: isMobile ? '100%' : '428px',
                      maxWidth: isMobile ? '100%' : '428px',
                      height: isMobile ? 'auto' : '34px',
                      minHeight: isMobile ? 'auto' : '34px',
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
                        alignItems: 'flex-start',
                        padding: '0px',
                        width: isMobile ? '100%' : '428px',
                        maxWidth: isMobile ? '100%' : '428px',
                        height: isMobile ? 'auto' : '34px',
                        minHeight: isMobile ? 'auto' : '34px',
                        flex: 'none',
                        order: 0,
                        alignSelf: 'stretch',
                        flexGrow: 0,
                      }}
                    >
                      {/* Start Sending, Borrowing & Investing */}
                      <h3
                        style={{
                          width: isMobile ? '100%' : isTablet ? '100%' : '428px',
                          maxWidth: isMobile ? '100%' : isTablet ? '100%' : '428px',
                          height: isMobile ? 'auto' : isTablet ? 'auto' : '34px',
                          minHeight: isMobile ? 'auto' : isTablet ? 'auto' : '34px',
                          fontFamily: 'var(--font-plus-jakarta)',
                          fontStyle: 'normal',
                          fontWeight: isTablet ? 600 : 700,
                          fontSize: isMobile ? '18px' : isTablet ? '24px' : '20px',
                          lineHeight: isMobile ? '27px' : isTablet ? '1.2' : '34px',
                          display: 'flex',
                          alignItems: 'center',
                          color: isTablet ? '#1A1A1A' : '#0F0F0F',
                          flex: 'none',
                          order: 0,
                          alignSelf: 'stretch',
                          flexGrow: 0,
                          margin: 0,
                          marginBottom: isMobile ? '8px' : isTablet ? '0px' : '0px',
                        }}
                      >
                        Start Sending, Borrowing & Investing
                      </h3>
                    </div>
                  </div>

                  {/* Container */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      padding: '0px',
                      width: isMobile ? '100%' : '428px',
                      maxWidth: isMobile ? '100%' : '428px',
                      height: isMobile ? 'auto' : '82px',
                      minHeight: isMobile ? 'auto' : '82px',
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
                        width: isMobile ? '100%' : '428px',
                        maxWidth: isMobile ? '100%' : '428px',
                        height: isMobile ? 'auto' : '82px',
                        minHeight: isMobile ? 'auto' : '82px',
                        flex: 'none',
                        order: 0,
                        alignSelf: 'stretch',
                        flexGrow: 0,
                      }}
                    >
                      {/* Once you're set up, you'll be able to send money locally and internationally, explore credit-score–based loans and try simple investment plans all in one app. */}
                      <p
                        style={{
                          width: isMobile ? '100%' : isTablet ? '100%' : '428px',
                          maxWidth: isMobile ? '100%' : isTablet ? '100%' : '428px',
                          height: isMobile ? 'auto' : isTablet ? 'auto' : '82px',
                          minHeight: isMobile ? 'auto' : isTablet ? 'auto' : '82px',
                          fontFamily: 'var(--font-plus-jakarta)',
                          fontStyle: 'normal',
                          fontWeight: 400,
                          fontSize: isMobile ? '16px' : isTablet ? '17px' : '16px',
                          lineHeight: isMobile ? '27px' : isTablet ? '1.5' : '27px',
                          display: 'flex',
                          alignItems: 'flex-start',
                          textAlign: 'left',
                          color: isTablet ? '#4B5563' : '#4B4B57',
                          flex: 'none',
                          order: 0,
                          alignSelf: 'stretch',
                          flexGrow: 0,
                          margin: 0,
                        }}
                      >
                        Once you're set up, you'll be able to send money locally and internationally, explore credit-score–based loans and try simple investment plans all in one app.
                      </p>
                    </div>
                  </div>
                </div>

                {/* HorizontalBorder - Hidden on mobile */}
                {!isMobile && (
                <div
                  style={{
                    position: 'absolute',
                    left: '0%',
                    right: '0%',
                    top: '0%',
                    bottom: '-0.75%',
                    flex: 'none',
                    order: 2,
                    flexGrow: 0,
                    zIndex: 2,
                    borderBottom: '1px dashed rgba(0, 0, 0, 0.1)',
                  }}
                />
                )}

                {/* Border */}
                <div
                  style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    left: '0%',
                    right: '0%',
                    top: '0%',
                    bottom: '0.08%',
                    borderWidth: '1px 1px 0px 1px',
                    borderStyle: 'dashed',
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                    flex: 'none',
                    order: 4,
                    flexGrow: 0,
                    zIndex: 4,
                  }}
                />
              </div>
            </div>

            {/* Image Bg - Desktop and Small Desktop (not tablet) */}
            {!isTablet && (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '0px',
                  width: isMobile ? '100%' : '440px',
                  maxWidth: isMobile ? '100%' : '440px',
                  height: isMobile ? 'auto' : '480px',
                  minHeight: isMobile ? 'auto' : '480px',
                  aspectRatio: isMobile ? '636/691.26' : 'auto',
                  borderRadius: isMobile ? '16px' : '32px',
                  flex: 'none',
                  order: 1,
                  flexGrow: 0,
                  background: '#F9FAFB',
                  marginTop: isMobile ? '24px' : '0px',
                }}
              >
                <Image
                  src="/double_mockup.png"
                  alt="Double Phone Mockup"
                  width={440}
                  height={480}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    borderRadius: isMobile ? '16px' : '32px',
                  }}
                  unoptimized
                />
              </div>
            )}
          </div>
        </div>

        {/* Phone Mockups for Tablet - Overlapping Design */}
        {isTablet && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0px',
              width: '100%',
              maxWidth: '750px',
              height: 'auto',
              marginTop: '80px',
              position: 'relative',
            }}
          >
            {/* Left Phone - Front */}
            <div
              style={{
                position: 'relative',
                width: '350px',
                height: '700px',
                zIndex: 10,
                marginRight: '-40px',
              }}
            >
              <Image
                src="/double_mockup.png"
                alt="Phone Mockup Dashboard"
                width={350}
                height={700}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
                unoptimized
              />
            </div>
            {/* Right Phone - Behind */}
            <div
              style={{
                position: 'relative',
                width: '350px',
                height: '700px',
                zIndex: 5,
                marginLeft: '-40px',
              }}
            >
              <Image
                src="/double_mockup.png"
                alt="Phone Mockup Exchange"
                width={350}
                height={700}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
                unoptimized
              />
            </div>
          </div>
        )}
      </div>
    </section>
    </div>
  )
}

