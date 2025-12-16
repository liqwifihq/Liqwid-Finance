'use client'

import Image from 'next/image'
import { useIsMobile } from '@/hooks/useMediaQuery'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function InteractiveTools() {
  const isMobile = useIsMobile()
  const sectionRef = useScrollAnimation()
  
  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="fade-in-up"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: isMobile ? '40px' : '0px',
        paddingBottom: isMobile ? '50px' : '0px',
        paddingLeft: isMobile ? '30px' : '0px',
        paddingRight: isMobile ? '30px' : '0px',
        width: '100%',
        maxWidth: isMobile ? '100%' : '100%',
        minHeight: isMobile ? 'auto' : '2030.65px',
        background: '#FFFFFF',
        flex: 'none',
        order: 3,
        flexGrow: 0,
        zIndex: 3,
        margin: '0 auto',
        boxSizing: 'border-box',
      }}
    >
      {/* Container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: isMobile ? '0px' : '0px',
          gap: isMobile ? '39.99px' : '60px',
          width: '100%',
          maxWidth: isMobile ? '100%' : '960px',
          minHeight: isMobile ? 'auto' : '1930.65px',
          flex: 'none',
          order: 0,
          alignSelf: 'stretch',
          flexGrow: 0,
          margin: isMobile ? '0px' : '0 auto',
          paddingBottom: isMobile ? '0px' : '100px',
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
            gap: isMobile ? '16px' : '16px',
            width: '100%',
            maxWidth: isMobile ? '100%' : '960px',
            minHeight: isMobile ? 'auto' : '173px',
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
              width: '161px',
              height: '28px',
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
                width: '161px',
                height: '28px',
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
                  width: '161px',
                  height: '28px',
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
                    width: '161px',
                    height: '28px',
                    flex: 'none',
                    order: 0,
                    alignSelf: 'stretch',
                    flexGrow: 0,
                  }}
                >
                  {/* INTERACTIVE TOOLS */}
                  <span
                    style={{
                      width: '161px',
                      height: '28px',
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '16px',
                      lineHeight: '27px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textTransform: 'uppercase',
                      color: '#85D06A',
                      flex: 'none',
                      order: 0,
                      flexGrow: 0,
                    }}
                  >
                    INTERACTIVE TOOLS
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
              maxWidth: '960px',
              minHeight: '58px',
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
                maxWidth: '960px',
                minHeight: '58px',
                flex: 'none',
                order: 0,
                alignSelf: 'stretch',
                flexGrow: 0,
              }}
            >
              {/* Unlock the Power of Smart Money Tools */}
              <h2
                style={{
                  width: '100%',
                  maxWidth: isMobile ? '100%' : '960px',
                  minHeight: isMobile ? 'auto' : '58px',
                  fontFamily: 'var(--font-plus-jakarta)',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: isMobile ? 'clamp(28px, 7.5vw, 36px)' : '48px',
                  lineHeight: isMobile ? 'clamp(36px, 9.5vw, 43px)' : '58px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  letterSpacing: '-1.5px',
                  color: '#0F0F0F',
                  flex: 'none',
                  order: 0,
                  alignSelf: 'stretch',
                  flexGrow: 0,
                  margin: 0,
                }}
              >
                Unlock the Power of Smart Money Tools
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
              width: isMobile ? '100%' : '746px',
              maxWidth: isMobile ? '100%' : '746px',
              height: isMobile ? 'auto' : '55px',
              minHeight: isMobile ? '136px' : '55px',
              flex: 'none',
              order: 2,
              flexGrow: 0,
            }}
          >
            {/* We're building Liqwifi with intuitive calculators and dashboards that help you understand every naira you send, borrow and invest. Join the waitlist to be first to try them when they launch. */}
            <p
              style={{
                width: isMobile ? '100%' : '746px',
                maxWidth: isMobile ? '100%' : '746px',
                height: isMobile ? 'auto' : '55px',
                minHeight: isMobile ? 'auto' : '55px',
                fontFamily: 'var(--font-plus-jakarta)',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '27px',
                textAlign: 'center',
                color: '#4B4B57',
                flex: 'none',
                order: 0,
                flexGrow: 0,
                margin: 0,
              }}
            >
              We're building Liqwifi with intuitive calculators and dashboards that help you understand every naira you send, borrow and invest. Join the waitlist to be first to try them when they launch.
            </p>
          </div>
        </div>

        {/* Feature List */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0px',
            gap: isMobile ? '48px' : '104px',
            width: '100%',
            maxWidth: isMobile ? '100%' : '960px',
            minHeight: isMobile ? 'auto' : '1697.65px',
            flex: 'none',
            order: 1,
            alignSelf: 'stretch',
            flexGrow: 0,
          }}
        >
          {/* Features Card 1 */}
          {isMobile ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                gap: '24px',
              }}
            >
              {/* Image */}
              <div
                style={{
                  width: '100%',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative',
                  aspectRatio: '458/426',
                }}
              >
                <Image
                  src="/Feature Image1.png"
                  alt="Feature Image 1"
                  width={458}
                  height={426}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    borderRadius: '16px',
                  }}
                  unoptimized
                />
              </div>

              {/* Title */}
              <h3
                style={{
                  width: '100%',
                  fontFamily: 'var(--font-plus-jakarta)',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: 'clamp(24px, 6.5vw, 28px)',
                  lineHeight: 'clamp(32px, 8.5vw, 36px)',
                  textAlign: 'center',
                  letterSpacing: '-1px',
                  color: '#0F0F0F',
                  margin: 0,
                }}
              >
                Stay ahead with real-time money insights
              </h3>

              {/* Description */}
              <p
                style={{
                  width: '100%',
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
                Your Liqwifi home screen will update in real time as you spend, send and save. Spot patterns early, compare months at a glance and adjust quickly to stay on track with your goals.
              </p>

              {/* Button */}
              <a
                href="/waitlist"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '15px 32px',
                  gap: '8px',
                  width: '100%',
                  maxWidth: '100%',
                  height: '58px',
                  background: '#0F0F0F',
                  borderRadius: '58px',
                  border: 'none',
                  cursor: 'pointer',
                  marginTop: '8px',
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
                    color: '#FFFFFF',
                  }}
                >
                  Join the Waitlist
                </span>
              </a>
            </div>
          ) : (
            <div
              style={{
                width: '100%',
                maxWidth: isMobile ? '100%' : '960px',
                height: isMobile ? 'auto' : '496.55px',
                flex: 'none',
                order: 0,
                flexGrow: 0,
                position: 'relative',
                display: isMobile ? 'block' : 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: 'center',
                gap: isMobile ? '24px' : '40px',
              }}
            >
              {/* Image Box */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: isMobile ? '20px' : '25px 40px',
                  isolation: 'isolate',
                  position: 'relative',
                  height: isMobile ? 'auto' : '400px',
                  width: isMobile ? '100%' : '460px',
                  maxWidth: isMobile ? '100%' : '460px',
                  flex: isMobile ? 'none' : '0 0 460px',
                  borderRadius: '32px',
                }}
              >
                {/* Image Background */}
                <div
                  style={{
                    position: 'absolute',
                    left: '0px',
                    right: '0px',
                    top: '0px',
                    bottom: '0px',
                    borderRadius: '32px',
                    flex: 'none',
                    order: 0,
                    flexGrow: 0,
                    zIndex: 0,
                  }}
                >
                  <Image
                    src="/Image Background1.png"
                    alt="Image Background 1"
                    width={576}
                    height={496}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '32px',
                    }}
                    unoptimized
                  />
                </div>

                {/* Image */}
                <div
                  style={{
                    width: isMobile ? '100%' : '370px',
                    height: isMobile ? 'auto' : '340px',
                    borderRadius: '16px',
                    flex: 'none',
                    order: 1,
                    flexGrow: 1,
                    zIndex: 1,
                    position: 'relative',
                  }}
                >
                  <Image
                    src="/Feature Image1.png"
                    alt="Feature Image 1"
                    width={458}
                    height={426}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      borderRadius: '16px',
                    }}
                    unoptimized
                  />
                </div>
              </div>

              {/* Content */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  padding: '0px',
                  gap: '40px',
                  position: 'absolute',
                  height: '300.99px',
                  left: '55.1%',
                  right: '-0.1%',
                  top: 'calc(50% - 300.99px/2 + 0.19px)',
                }}
              >
                {/* Text */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    padding: '0px',
                    gap: '15.99px',
                    width: '518.4px',
                    height: '198.99px',
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
                      width: '518.4px',
                      height: '101px',
                      flex: 'none',
                      order: 0,
                      alignSelf: 'stretch',
                      flexGrow: 0,
                    }}
                  >
                    {/* Heading 3 */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        padding: '0px',
                        width: isMobile ? '100%' : '420px',
                        maxWidth: isMobile ? '100%' : '420px',
                        height: isMobile ? 'auto' : '101px',
                        flex: 'none',
                        order: 0,
                        alignSelf: 'stretch',
                        flexGrow: 0,
                      }}
                    >
                      {/* Stay ahead with real-time money insights */}
                      <h3
                        style={{
                          width: isMobile ? '100%' : '420px',
                          maxWidth: isMobile ? '100%' : '420px',
                          height: isMobile ? 'auto' : '101px',
                          fontFamily: 'var(--font-plus-jakarta)',
                          fontStyle: 'normal',
                          fontWeight: 700,
                          fontSize: isMobile ? 'clamp(24px, 6.5vw, 28px)' : '32px',
                          lineHeight: isMobile ? 'clamp(32px, 8.5vw, 36px)' : '44px',
                          display: 'flex',
                          alignItems: 'center',
                          letterSpacing: '-1px',
                          color: '#0F0F0F',
                          flex: 'none',
                          order: 0,
                          alignSelf: 'stretch',
                          flexGrow: 0,
                          margin: 0,
                        }}
                      >
                        Stay ahead with real-time money insights
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
                      width: isMobile ? '100%' : '400px',
                      maxWidth: isMobile ? '100%' : '400px',
                      height: isMobile ? 'auto' : '82px',
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
                        width: isMobile ? '100%' : '400px',
                        maxWidth: isMobile ? '100%' : '400px',
                        height: isMobile ? 'auto' : '82px',
                        flex: 'none',
                        order: 0,
                        alignSelf: 'stretch',
                        flexGrow: 0,
                      }}
                    >
                      {/* Your Liqwifi home screen will update in real time as you spend, send and save. Spot patterns early, compare months at a glance and adjust quickly to stay on track with your goals. */}
                      <p
                        style={{
                          width: isMobile ? '100%' : '400px',
                          maxWidth: isMobile ? '100%' : '400px',
                          height: isMobile ? 'auto' : '82px',
                          fontFamily: 'var(--font-plus-jakarta)',
                          fontStyle: 'normal',
                          fontWeight: 400,
                          fontSize: '16px',
                          lineHeight: '27px',
                          display: 'flex',
                          alignItems: 'center',
                          color: '#4B4B57',
                          flex: 'none',
                          order: 0,
                          alignSelf: 'stretch',
                          flexGrow: 0,
                          margin: 0,
                        }}
                      >
                        Your Liqwifi home screen will update in real time as you spend, send and save. Spot patterns early, compare months at a glance and adjust quickly to stay on track with your goals.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Container */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: '0px',
                    width: '222.01px',
                    height: '62px',
                    flex: 'none',
                    order: 1,
                    flexGrow: 0,
                  }}
                >
                  {/* Link - Primary Button */}
                  <a
                    href="/waitlist"
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '15px 32px',
                      gap: '8.01px',
                      isolation: 'isolate',
                      width: '222.01px',
                      height: '62px',
                      background: '#0F0F0F',
                      borderRadius: '58px',
                      flex: 'none',
                      order: 0,
                      flexGrow: 0,
                      position: 'relative',
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

                    {/* send icon */}
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
            </div>
          )}

          {/* Features Card 2 */}
          {isMobile ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                gap: '24px',
              }}
            >
              {/* Image */}
              <div
                style={{
                  width: '100%',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative',
                  aspectRatio: '458/423',
                }}
              >
                <Image
                  src="/feature image2.png"
                  alt="Feature Image 2"
                  width={458}
                  height={423}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    borderRadius: '16px',
                  }}
                  unoptimized
                />
              </div>

              {/* Title */}
              <h3
                style={{
                  width: '100%',
                  fontFamily: 'var(--font-plus-jakarta)',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: 'clamp(24px, 6.5vw, 28px)',
                  lineHeight: 'clamp(32px, 8.5vw, 36px)',
                  textAlign: 'center',
                  letterSpacing: '-1px',
                  color: '#0F0F0F',
                  margin: 0,
                }}
              >
                Loan & repayment calculators
              </h3>

              {/* Description */}
              <p
                style={{
                  width: '100%',
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
                Estimate how much you can borrow, preview monthly repayments and see how new loans affect your cash flow before you commit.
              </p>

              {/* Button */}
              <a
                href="/waitlist"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '15px 32px',
                  gap: '8px',
                  width: '100%',
                  maxWidth: '100%',
                  height: '58px',
                  background: '#0F0F0F',
                  borderRadius: '58px',
                  border: 'none',
                  cursor: 'pointer',
                  marginTop: '8px',
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
                    color: '#FFFFFF',
                  }}
                >
                  Join the Waitlist
                </span>
              </a>
            </div>
          ) : (
            <div
              style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                justifyContent: isMobile ? 'center' : 'flex-start',
                alignItems: 'center',
                padding: '0px',
                gap: isMobile ? '24px' : '40px',
                width: '100%',
                maxWidth: isMobile ? '100%' : '960px',
                height: isMobile ? 'auto' : '496.55px',
                flex: 'none',
                order: 1,
                flexGrow: 0,
              }}
            >
              {/* Content */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  padding: '0px',
                  gap: isMobile ? '24px' : '32px',
                  width: isMobile ? '100%' : '420px',
                  maxWidth: isMobile ? '100%' : '420px',
                  height: isMobile ? 'auto' : '223.99px',
                  flex: isMobile ? 'none' : '0 0 420px',
                  order: 0,
                }}
              >
                {/* Text */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    padding: '0px',
                    gap: '16px',
                    width: isMobile ? '100%' : '420px',
                    maxWidth: isMobile ? '100%' : '420px',
                    height: isMobile ? 'auto' : 'auto',
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
                      width: isMobile ? '100%' : '420px',
                      maxWidth: isMobile ? '100%' : '420px',
                      height: isMobile ? 'auto' : 'auto',
                      flex: 'none',
                      order: 0,
                      alignSelf: 'stretch',
                      flexGrow: 0,
                    }}
                  >
                    {/* Heading 3 */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        padding: '0px',
                        width: isMobile ? '100%' : '420px',
                        maxWidth: isMobile ? '100%' : '420px',
                        height: isMobile ? 'auto' : 'auto',
                        flex: 'none',
                        order: 0,
                        alignSelf: 'stretch',
                        flexGrow: 0,
                      }}
                    >
                      {/* Loan & repayment calculators */}
                      <h3
                        style={{
                          width: isMobile ? '100%' : '420px',
                          maxWidth: isMobile ? '100%' : '420px',
                          height: isMobile ? 'auto' : 'auto',
                          fontFamily: 'var(--font-plus-jakarta)',
                          fontStyle: 'normal',
                          fontWeight: 700,
                          fontSize: isMobile ? 'clamp(24px, 6.5vw, 28px)' : '32px',
                          lineHeight: isMobile ? 'clamp(32px, 8.5vw, 36px)' : '44px',
                          display: 'block',
                          textAlign: 'left',
                          letterSpacing: '-1px',
                          color: '#0F0F0F',
                          margin: 0,
                        }}
                      >
                        Loan & repayment calculators
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
                      width: isMobile ? '100%' : '420px',
                      maxWidth: isMobile ? '100%' : '420px',
                      height: isMobile ? 'auto' : 'auto',
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
                        width: isMobile ? '100%' : '420px',
                        maxWidth: isMobile ? '100%' : '420px',
                        height: isMobile ? 'auto' : 'auto',
                        flex: 'none',
                        order: 0,
                        alignSelf: 'stretch',
                        flexGrow: 0,
                      }}
                    >
                      {/* Estimate how much you can borrow, preview monthly repayments and see how new loans affect your cash flow before you commit. */}
                      <p
                        style={{
                          width: isMobile ? '100%' : '420px',
                          maxWidth: isMobile ? '100%' : '420px',
                          height: isMobile ? 'auto' : 'auto',
                          fontFamily: 'var(--font-plus-jakarta)',
                          fontStyle: 'normal',
                          fontWeight: 400,
                          fontSize: '16px',
                          lineHeight: '27px',
                          display: 'block',
                          textAlign: 'left',
                          color: '#4B4B57',
                          margin: 0,
                        }}
                      >
                        Estimate how much you can borrow, preview monthly repayments and see how new loans affect your cash flow before you commit.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Container */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: '0px',
                    width: '222.01px',
                    height: '62px',
                    flex: 'none',
                    order: 1,
                    flexGrow: 0,
                  }}
                >
                  {/* Link - Primary Button */}
                  <a
                    href="/waitlist"
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '15px 32px',
                      gap: '8.01px',
                      isolation: 'isolate',
                      width: '222.01px',
                      height: '62px',
                      background: '#0F0F0F',
                      borderRadius: '58px',
                      flex: 'none',
                      order: 0,
                      flexGrow: 0,
                      position: 'relative',
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

                    {/* send icon */}
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

              {/* Image Box */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: isMobile ? '20px' : '25px 40px',
                  isolation: 'isolate',
                  position: 'relative',
                  height: isMobile ? 'auto' : '400px',
                  width: isMobile ? '100%' : '460px',
                  maxWidth: isMobile ? '100%' : '460px',
                  flex: isMobile ? 'none' : '0 0 460px',
                  borderRadius: '32px',
                  order: 1,
                }}
              >
                {/* Image Background */}
                <div
                  style={{
                    position: 'absolute',
                    left: '0px',
                    right: '0px',
                    top: '0px',
                    bottom: '0px',
                    borderRadius: '32px',
                    flex: 'none',
                    order: 0,
                    flexGrow: 0,
                    zIndex: 0,
                  }}
                >
                  <Image
                    src="/Image Background2.png"
                    alt="Image Background 2"
                    width={576}
                    height={497}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '32px',
                    }}
                    unoptimized
                  />
                </div>

                {/* Image 1 */}
                <div
                  style={{
                    width: isMobile ? '100%' : '370px',
                    height: isMobile ? 'auto' : '340px',
                    borderRadius: '16px',
                    flex: 'none',
                    order: 1,
                    flexGrow: 1,
                    zIndex: 1,
                    position: 'relative',
                  }}
                >
                  <Image
                    src="/feature image2.png"
                    alt="Feature Image 2"
                    width={458}
                    height={423}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      borderRadius: '16px',
                    }}
                    unoptimized
                  />
                </div>
              </div>
            </div>
          )}

          {/* Features Card 3 */}
          {isMobile ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                gap: '24px',
              }}
            >
              {/* Image */}
              <div
                style={{
                  width: '100%',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative',
                  aspectRatio: '458/401',
                }}
              >
                <Image
                  src="/feature image 3.png"
                  alt="Feature Image 3"
                  width={458}
                  height={401}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    borderRadius: '16px',
                  }}
                  unoptimized
                />
              </div>

              {/* Title */}
              <h3
                style={{
                  width: '100%',
                  fontFamily: 'var(--font-plus-jakarta)',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: 'clamp(24px, 6.5vw, 28px)',
                  lineHeight: 'clamp(32px, 8.5vw, 36px)',
                  textAlign: 'center',
                  letterSpacing: '-1px',
                  color: '#0F0F0F',
                  margin: 0,
                }}
              >
                Transparent FX rates & low fees
              </h3>

              {/* Description */}
              <p
                style={{
                  width: '100%',
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
                No more guessing how much will actually land. Before you send, Liqwifi will show you the exchange rate, transfer fee and exact amount your recipient will receive, so every cross-border payment feels predictable and fair.
              </p>

              {/* Button */}
              <a
                href="/waitlist"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '15px 32px',
                  gap: '8px',
                  width: '100%',
                  maxWidth: '100%',
                  height: '58px',
                  background: '#0F0F0F',
                  borderRadius: '58px',
                  border: 'none',
                  cursor: 'pointer',
                  marginTop: '8px',
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
                    color: '#FFFFFF',
                  }}
                >
                  Join the Waitlist
                </span>
              </a>
            </div>
          ) : (
            <div
              style={{
                width: '100%',
                maxWidth: '1152px',
                height: '496.55px',
                flex: 'none',
                order: 2,
                flexGrow: 0,
                position: 'relative',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '60px',
              }}
            >
              {/* Image Box */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: isMobile ? '20px' : '25px 40px',
                  isolation: 'isolate',
                  position: 'relative',
                  height: isMobile ? 'auto' : '400px',
                  width: isMobile ? '100%' : '460px',
                  maxWidth: isMobile ? '100%' : '460px',
                  flex: isMobile ? 'none' : '0 0 460px',
                  borderRadius: '32px',
                }}
              >
                {/* Image Background */}
                <div
                  style={{
                    position: 'absolute',
                    left: '0px',
                    right: '0px',
                    top: '0px',
                    bottom: '0px',
                    borderRadius: '32px',
                    flex: 'none',
                    order: 0,
                    flexGrow: 0,
                    zIndex: 0,
                  }}
                >
                  <Image
                    src="/Image Background3.png"
                    alt="Image Background 3"
                    width={576}
                    height={497}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '32px',
                    }}
                    unoptimized
                  />
                </div>

                {/* Image */}
                <div
                  style={{
                    width: isMobile ? '100%' : '370px',
                    height: isMobile ? 'auto' : '320px',
                    borderRadius: '16px',
                    flex: 'none',
                    order: 1,
                    flexGrow: 1,
                    zIndex: 1,
                    position: 'relative',
                  }}
                >
                  <Image
                    src="/feature image 3.png"
                    alt="Feature Image 3"
                    width={458}
                    height={401}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      borderRadius: '16px',
                    }}
                    unoptimized
                  />
                </div>
              </div>

              {/* Content */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  padding: '0px',
                  gap: isMobile ? '24px' : '32px',
                  position: 'relative',
                  height: isMobile ? 'auto' : '278px',
                  flex: '1',
                }}
              >
                {/* Text */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    padding: '0px',
                    gap: '16px',
                    width: isMobile ? '100%' : '420px',
                    maxWidth: isMobile ? '100%' : '420px',
                    height: isMobile ? 'auto' : 'auto',
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
                      width: isMobile ? '100%' : '420px',
                      maxWidth: isMobile ? '100%' : '420px',
                      height: isMobile ? 'auto' : 'auto',
                      flex: 'none',
                      order: 0,
                      alignSelf: 'stretch',
                      flexGrow: 0,
                    }}
                  >
                    {/* Heading 3 */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        padding: '0px',
                        width: isMobile ? '100%' : '420px',
                        maxWidth: isMobile ? '100%' : '420px',
                        height: isMobile ? 'auto' : 'auto',
                        flex: 'none',
                        order: 0,
                        alignSelf: 'stretch',
                        flexGrow: 0,
                      }}
                    >
                      {/* Transparent FX rates & low fees */}
                      <h3
                        style={{
                          width: isMobile ? '100%' : '420px',
                          maxWidth: isMobile ? '100%' : '420px',
                          height: isMobile ? 'auto' : 'auto',
                          fontFamily: 'var(--font-plus-jakarta)',
                          fontStyle: 'normal',
                          fontWeight: 700,
                          fontSize: isMobile ? 'clamp(24px, 6.5vw, 28px)' : '32px',
                          lineHeight: isMobile ? 'clamp(32px, 8.5vw, 36px)' : '44px',
                          display: 'block',
                          textAlign: 'left',
                          letterSpacing: '-1px',
                          color: '#0F0F0F',
                          margin: 0,
                        }}
                      >
                        Transparent FX rates & low fees
                      </h3>
                    </div>
                  </div>

                  {/* Item1 */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      padding: '0px',
                      gap: '0px',
                      width: isMobile ? '100%' : '420px',
                      maxWidth: isMobile ? '100%' : '420px',
                      height: isMobile ? 'auto' : 'auto',
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
                        width: isMobile ? '100%' : '420px',
                        maxWidth: isMobile ? '100%' : '420px',
                        height: isMobile ? 'auto' : 'auto',
                        flex: 'none',
                        order: 0,
                        flexGrow: 0,
                      }}
                    >
                      {/* No more guessing how much will actually land. Before you send, Liqwifi will show you the exchange rate, transfer fee and exact amount your recipient will receive, so every cross-border payment feels predictable and fair. */}
                      <p
                        style={{
                          width: isMobile ? '100%' : '420px',
                          maxWidth: isMobile ? '100%' : '420px',
                          height: isMobile ? 'auto' : 'auto',
                          fontFamily: 'var(--font-plus-jakarta)',
                          fontStyle: 'normal',
                          fontWeight: 400,
                          fontSize: '16px',
                          lineHeight: '27px',
                          display: 'block',
                          textAlign: 'left',
                          color: '#4B4B57',
                          margin: 0,
                        }}
                      >
                        No more guessing how much will actually land. Before you send, Liqwifi will show you the exchange rate, transfer fee and exact amount your recipient will receive, so every cross-border payment feels predictable and fair.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Container */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: '0px',
                    width: '222.01px',
                    height: '62px',
                    flex: 'none',
                    order: 1,
                    flexGrow: 0,
                  }}
                >
                  {/* Link - Primary Button */}
                  <a
                    href="/waitlist"
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '15px 32px',
                      gap: '8.01px',
                      isolation: 'isolate',
                      width: '222.01px',
                      height: '62px',
                      background: '#0F0F0F',
                      borderRadius: '58px',
                      flex: 'none',
                      order: 0,
                      flexGrow: 0,
                      position: 'relative',
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

                    {/* send icon */}
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
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

