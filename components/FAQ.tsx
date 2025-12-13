'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useIsMobile } from '@/hooks/useMediaQuery'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: 'What is Liqwifi?',
    answer: 'Liqwifi is a digital money app in development that will let you send and receive money locally and internationally, pay bills, access loans based on your credit score, and grow your money through simple investment plans, all in one place.',
  },
  {
    question: 'Why should I join the waitlist?',
    answer: 'By joining the waitlist, you\'ll be among the first to access Liqwifi when we launch. Early members get priority onboarding, better transaction limits, exclusive early features, and special perks as a thank you for your early support.',
  },
  {
    question: 'Does it cost anything to join the waitlist?',
    answer: 'No, joining the waitlist is completely free. There are no charges or fees to sign up. We\'ll notify you when Liqwifi is ready, and you can decide then if you want to use the app.',
  },
  {
    question: 'When will Liqwifi launch?',
    answer: 'We\'re working hard to bring Liqwifi to you as soon as possible. While we don\'t have an exact launch date yet, we\'ll keep all waitlist members updated on our progress and will notify you as soon as we\'re ready to launch.',
  },
  {
    question: 'Which countries will you support?',
    answer: 'We\'re starting with support for multiple countries across different regions. Our initial launch will focus on key markets, and we plan to expand to more countries based on demand. Join the waitlist to be notified about availability in your country.',
  },
  {
    question: 'Is Liqwifi a bank?',
    answer: 'No, Liqwifi is not a bank. We\'re a financial technology platform that partners with licensed financial institutions to provide you with money transfer, payment, loan, and investment services. Your funds are held with our regulated banking partners.',
  },
  {
    question: 'How will you contact me after I sign up?',
    answer: 'We\'ll contact you via the email address you provide when joining the waitlist. You\'ll receive updates about our launch progress, early access opportunities, and important announcements. We respect your privacy and will never spam you.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0)
  const isMobile = useIsMobile()

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: isMobile ? '60px 20px 40px' : '60px 30px 70px',
        isolation: 'isolate',
        width: '100%',
        maxWidth: '100%',
        height: 'auto',
        minHeight: isMobile ? 'auto' : '1183px',
        flex: 'none',
        order: 5,
        flexGrow: 0,
        zIndex: 5,
        position: 'relative',
        margin: '0 auto',
        overflow: 'visible',
        boxSizing: 'border-box',
      }}
    >
      {/* Blur Shape Left */}
      <div
        style={{
          position: 'absolute',
          width: '283px',
          height: '808px',
          left: '-62.5px',
          top: '-137.5px',
          background: 'linear-gradient(90deg, #CBFE91 0%, #D6F3F4 100%)',
          opacity: 0.3,
          filter: 'blur(50px)',
          borderRadius: '545.5px',
          transform: 'rotate(90deg)',
          flex: 'none',
          order: 0,
          flexGrow: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Blur Shape Right */}
      <div
        style={{
          position: 'absolute',
          width: isMobile ? '371px' : '668px',
          height: isMobile ? 'auto' : '271px',
          right: isMobile ? '-100px' : '-125px',
          top: isMobile ? '406.65px' : '-230px',
          bottom: isMobile ? '407.64px' : 'auto',
          background: '#93E4F1',
          opacity: 0.15,
          filter: 'blur(50px)',
          borderRadius: isMobile ? '404.94px' : '469.5px',
          transform: 'rotate(180deg)',
          flex: 'none',
          order: 1,
          flexGrow: 0,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Container → Content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0px',
          gap: isMobile ? '40px' : '60px',
          width: '100%',
          maxWidth: isMobile ? '100%' : '1200px',
          height: 'auto',
          flex: 'none',
          order: 2,
          flexGrow: 0,
          zIndex: 2,
          position: 'relative',
        }}
      >
        {/* Section Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0px',
            gap: isMobile ? '16px' : '16px',
            width: '100%',
            maxWidth: isMobile ? '100%' : '636px',
            height: 'auto',
            minHeight: isMobile ? 'auto' : 'auto',
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
              alignItems: 'flex-start',
              padding: '0px',
              width: '34px',
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
                width: '34px',
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
                  alignItems: 'flex-start',
                  padding: '0px',
                  width: '34px',
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
                    alignItems: 'flex-start',
                    padding: '0px',
                    width: '34px',
                    height: '28px',
                    flex: 'none',
                    order: 0,
                    alignSelf: 'stretch',
                    flexGrow: 0,
                  }}
                >
                  <span
                    style={{
                      width: '34px',
                      height: '28px',
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '16px',
                      lineHeight: '27px',
                      display: 'flex',
                      alignItems: 'center',
                      textTransform: 'uppercase',
                      color: '#85D06A',
                      flex: 'none',
                      order: 0,
                      flexGrow: 0,
                    }}
                  >
                    FAQ
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Heading 2 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0px',
              width: '636px',
              maxWidth: '100%',
              height: '58px',
              flex: 'none',
              order: 1,
              alignSelf: 'stretch',
              flexGrow: 0,
            }}
          >
            <h2
              style={{
                width: isMobile ? '100%' : '636px',
                maxWidth: '100%',
                height: isMobile ? 'auto' : '58px',
                minHeight: isMobile ? 'auto' : '58px',
                fontFamily: 'var(--font-plus-jakarta)',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: isMobile ? 'clamp(28px, 7.5vw, 36px)' : '48px',
                lineHeight: isMobile ? 'clamp(36px, 9.5vw, 43px)' : '58px',
                textAlign: 'center',
                letterSpacing: isMobile ? '-1px' : '-1.5px',
                color: '#0F0F0F',
                margin: 0,
              }}
            >
              {isMobile ? (
                <>
                  Frequently Asked
                  <br />
                  Questions
                </>
              ) : (
                'Frequently Asked Questions'
              )}
            </h2>
          </div>

          {/* Subtitle */}
          <p
            style={{
              width: isMobile ? '100%' : '636px',
              maxWidth: '100%',
              height: isMobile ? 'auto' : '28px',
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
            Discover the Powerful Features That Make Liqwify the Ultimate Finance Solution
          </p>
        </div>

        {/* Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0px',
            width: '100%',
            maxWidth: '1164px',
            height: 'auto',
            flex: 'none',
            order: 1,
            flexGrow: 0,
          }}
        >
          {/* Desktop Q1 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0px',
              gap: '16px',
              width: '100%',
              maxWidth: '1164px',
              height: 'auto',
              flex: 'none',
              order: 0,
              alignSelf: 'stretch',
              flexGrow: 0,
            }}
          >
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: isMobile ? '23.3px 24px 24px' : '24px',
                    gap: isOpen ? '24px' : '0px',
                    width: isMobile ? '100%' : '1164px',
                    maxWidth: '100%',
                    height: isOpen ? 'auto' : isMobile ? '115.3px' : '82px',
                    background: '#F9FAFB',
                    borderRadius: '24px',
                    flex: 'none',
                    order: index,
                    alignSelf: 'stretch',
                    flexGrow: 0,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onClick={() => toggleFAQ(index)}
                >
                  {/* Question */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      padding: '0px',
                      gap: '20px',
                      width: '100%',
                      maxWidth: '1116px',
                      height: '34px',
                      flex: 'none',
                      order: 0,
                      alignSelf: 'stretch',
                      flexGrow: 0,
                    }}
                  >
                    {/* Question Text */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        padding: '0px',
                        width: '1066px',
                        maxWidth: 'calc(100% - 50px)',
                        height: '34px',
                        flex: 'none',
                        order: 0,
                        flexGrow: 0,
                      }}
                    >
                      <span
                        style={{
                          width: isMobile ? '252px' : 'auto',
                          maxWidth: isMobile ? '252px' : '100%',
                          height: isMobile ? 'auto' : '34px',
                          minHeight: isMobile ? '31px' : '34px',
                          fontFamily: 'var(--font-plus-jakarta)',
                          fontStyle: 'normal',
                          fontWeight: 700,
                          fontSize: isMobile ? '18px' : '20px',
                          lineHeight: isMobile ? '31px' : '34px',
                          display: 'flex',
                          alignItems: 'center',
                          color: '#0F0F0F',
                          flex: 'none',
                          order: 0,
                          flexGrow: 0,
                        }}
                      >
                        {faq.question}
                      </span>
                    </div>

                    {/* Icon */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                        padding: '0px',
                        width: '30px',
                        height: '30px',
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
                          width: '30px',
                          height: '30px',
                          flex: 'none',
                          order: 0,
                          flexGrow: 0,
                          position: 'relative',
                        }}
                      >
                        {isOpen ? (
                          // Minus icon (horizontal line)
                          <div
                            style={{
                              position: 'absolute',
                              left: '20.83%',
                              right: '20.83%',
                              top: '50%',
                              bottom: '50%',
                              borderTop: '2.5px solid #000000',
                              width: '60%',
                              height: '0px',
                              transform: 'translateY(-50%)',
                            }}
                          />
                        ) : (
                          // Plus icon
                          <div
                            style={{
                              position: 'absolute',
                              left: '20.83%',
                              right: '20.83%',
                              top: '20.83%',
                              bottom: '20.83%',
                              width: '60%',
                              height: '60%',
                            }}
                          >
                            {/* Horizontal line */}
                            <div
                              style={{
                                position: 'absolute',
                                left: '0%',
                                right: '0%',
                                top: '50%',
                                bottom: '50%',
                                borderTop: '2.5px solid #000000',
                                width: '100%',
                                height: '0px',
                                transform: 'translateY(-50%)',
                              }}
                            />
                            {/* Vertical line */}
                            <div
                              style={{
                                position: 'absolute',
                                left: '50%',
                                top: '0%',
                                bottom: '0%',
                                borderLeft: '2.5px solid #000000',
                                width: '0px',
                                height: '100%',
                                transform: 'translateX(-50%)',
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Answer */}
                  {isOpen && (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: '0px',
                        width: '100%',
                        maxWidth: '1116px',
                        height: 'auto',
                        flex: 'none',
                        order: 1,
                        alignSelf: 'stretch',
                        flexGrow: 0,
                      }}
                    >
                      {/* Answer Content */}
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                            padding: '0px',
                            width: '100%',
                            maxWidth: '1116px',
                            height: 'auto',
                          flex: 'none',
                          order: 0,
                          flexGrow: 1,
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                                padding: '0px',
                                width: '100%',
                                maxWidth: '1026.72px',
                                height: 'auto',
                            flex: 'none',
                            order: 0,
                            flexGrow: 0,
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'flex-start',
                              padding: '0px',
                              width: '100%',
                              maxWidth: '1026.72px',
                              height: 'auto',
                              flex: 'none',
                              order: 0,
                              alignSelf: 'stretch',
                              flexGrow: 0,
                            }}
                          >
                            <p
                              style={{
                                width: '100%',
                                maxWidth: isMobile ? '277.84px' : '1026.72px',
                                height: 'auto',
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
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

