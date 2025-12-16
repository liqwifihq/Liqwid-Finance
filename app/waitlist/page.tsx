'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { useIsMobile, useIsTablet } from '@/hooks/useMediaQuery'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function WaitlistPage() {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    interests: [] as string[],
    hearAboutUs: '',
  })

  const totalSteps = 3

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Submit to API endpoint
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form')
      }

      // Show success modal
      setShowSuccessModal(true)
      
      // Auto redirect to home after 5.5 seconds (gives users time to read)
      setTimeout(() => {
        try {
          router.push('/')
        } catch (error) {
          console.error('Redirect error:', error)
          // Fallback to window.location if router.push fails
          window.location.href = '/'
        }
      }, 5500)
    } catch (error) {
      console.error('Form submission error:', error)
      // You can add error handling UI here
      alert('There was an error submitting your form. Please try again later.')
    }
  }

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showSuccessModal) {
        try {
          router.push('/')
        } catch (error) {
          console.error('Redirect error:', error)
          window.location.href = '/'
        }
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [showSuccessModal, router])

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName.trim() !== '' && formData.lastName.trim() !== ''
      case 2:
        return formData.email.trim() !== '' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
      case 3:
        return true // Step 3 is optional
      default:
        return false
    }
  }

  return (
    <div style={{ position: 'relative', width: '100vw', overflow: 'hidden', minHeight: '100vh', background: '#FFFFFF' }}>
      {/* Blur Shape Left */}
      <div
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
          zIndex: 0,
          width: isMobile ? 'auto' : isTablet ? 'calc(45% + 150px)' : 'calc(50% + 200px)',
        }}
      />

      {/* Blur Shape Right */}
      <div
        style={{
          position: 'absolute',
          height: isMobile ? '790.2px' : isTablet ? '650px' : '919.16px',
          left: isMobile ? '7.69%' : isTablet ? '70%' : '78.03%',
          right: isMobile ? '-7.69%' : isTablet ? '-8%' : '-9.03%',
          top: isMobile ? 'calc(50% - 790.2px/2 - 396.01px)' : isTablet ? 'calc(50% - 650px/2 - 200px)' : 'calc(50% - 919.16px/2 - 344.38px)',
          background: '#93E4F1',
          opacity: 0.3,
          filter: 'blur(50px)',
          borderRadius: isMobile ? '589.56px' : isTablet ? '500px' : '674.82px',
          transform: 'rotate(180deg)',
          zIndex: 1,
          width: isMobile ? 'auto' : isTablet ? 'calc(30% + 80px)' : 'calc(25% + 100px)',
        }}
      />

      {/* Form Section - Exactly 100vh */}
      <div 
        style={{
          width: '100%',
          height: isMobile ? '100dvh' : isTablet ? '100vh' : '100vh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          zIndex: 10,
          overflow: 'hidden',
        }}
      >
        {/* Navigation */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            padding: isMobile ? '12px 16px' : isTablet ? '16px 20px' : '20px 0px',
            zIndex: 20,
            position: 'relative',
            flexShrink: 0,
            boxSizing: 'border-box',
          }}
        >
          <Navigation />
        </div>

        {/* Main Content - Waitlist Form Section */}
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: isMobile ? '20px 16px' : isTablet ? '24px 32px' : '0px',
            width: '100%',
            maxWidth: isMobile ? '100%' : isTablet ? '600px' : '1440px',
            margin: '0 auto',
            flex: 1,
            justifyContent: 'center',
            gap: isMobile ? '20px' : isTablet ? '22px' : '24px',
            position: 'relative',
            zIndex: 10,
            boxSizing: 'border-box',
            overflowY: 'auto',
            minHeight: 0,
          }}
        >
          {/* Heading */}
          <h1
            style={{
              fontFamily: 'var(--font-plus-jakarta)',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: isMobile ? 'clamp(28px, 7vw, 40px)' : isTablet ? 'clamp(40px, 5vw, 48px)' : '56px',
              lineHeight: isMobile ? 'clamp(36px, 8vw, 48px)' : isTablet ? 'clamp(48px, 6vw, 56px)' : '64px',
              textAlign: 'center',
              color: '#0F0F0F',
              margin: 0,
              maxWidth: isMobile ? '100%' : isTablet ? '600px' : '700px',
              padding: isMobile ? '0px' : '0px',
            }}
          >
            Get Priority Access
          </h1>

          {/* Step Indicator */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: isMobile ? '10px' : '12px',
              marginTop: isMobile ? '4px' : isTablet ? '6px' : '8px',
            }}
          >
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                style={{
                  width: isMobile ? '8px' : isTablet ? '10px' : '12px',
                  height: isMobile ? '8px' : isTablet ? '10px' : '12px',
                  borderRadius: '50%',
                  background: step <= currentStep ? '#0F0F0F' : '#E5E7EB',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>

          {/* Multi-Step Form */}
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: isMobile ? '20px' : isTablet ? '22px' : '20px',
              width: '100%',
              maxWidth: isMobile ? '100%' : isTablet ? '500px' : '600px',
              padding: isMobile ? '0px' : isTablet ? '0px' : '0px',
              marginTop: isMobile ? '0px' : isTablet ? '4px' : '8px',
            }}
          >
            {/* Step 1: Name */}
            {currentStep === 1 && (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : isTablet ? 'row' : 'row',
                    gap: isMobile ? '12px' : '16px',
                    width: '100%',
                  }}
                >
                  <input
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    required
                    style={{
                      width: isMobile ? '100%' : 'auto',
                      flex: isMobile ? 'none' : 1,
                      height: isMobile ? '52px' : isTablet ? '54px' : '56px',
                      padding: isMobile ? '0px 16px' : isTablet ? '0px 18px' : '0px 20px',
                      borderRadius: '12px',
                      border: '1px solid #E5E7EB',
                      background: '#FFFFFF',
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: isMobile ? '15px' : isTablet ? '15px' : '16px',
                      lineHeight: isMobile ? '22px' : '24px',
                      color: '#0F0F0F',
                      outline: 'none',
                      boxSizing: 'border-box',
                      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                      transition: 'all 0.3s ease',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#9ECE58'
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(158, 206, 88, 0.1)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#E5E7EB'
                      e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)'
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    required
                    style={{
                      width: isMobile ? '100%' : 'auto',
                      flex: isMobile ? 'none' : 1,
                      height: isMobile ? '52px' : isTablet ? '54px' : '56px',
                      padding: isMobile ? '0px 16px' : isTablet ? '0px 18px' : '0px 20px',
                      borderRadius: '12px',
                      border: '1px solid #E5E7EB',
                      background: '#FFFFFF',
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: isMobile ? '15px' : isTablet ? '15px' : '16px',
                      lineHeight: isMobile ? '22px' : '24px',
                      color: '#0F0F0F',
                      outline: 'none',
                      boxSizing: 'border-box',
                      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                      transition: 'all 0.3s ease',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#9ECE58'
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(158, 206, 88, 0.1)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#E5E7EB'
                      e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)'
                    }}
                  />
                </div>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  style={{
                    width: '100%',
                    height: isMobile ? '52px' : isTablet ? '54px' : '56px',
                    padding: isMobile ? '0px 20px' : isTablet ? '0px 22px' : '0px 24px',
                    borderRadius: isMobile ? '12px' : '12px',
                    border: 'none',
                    background: isStepValid() ? '#0F0F0F' : '#E5E7EB',
                    fontFamily: 'var(--font-plus-jakarta)',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: isMobile ? '15px' : isTablet ? '15px' : '16px',
                    lineHeight: isMobile ? '22px' : '24px',
                    color: isStepValid() ? '#FFFFFF' : '#9CA3AF',
                    cursor: isStepValid() ? 'pointer' : 'not-allowed',
                    transition: 'all 0.3s ease',
                    boxShadow: isStepValid() ? '0 2px 8px rgba(15, 15, 15, 0.15)' : 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (isStepValid()) {
                      e.currentTarget.style.transform = 'translateY(-1px)'
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(15, 15, 15, 0.2)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isStepValid()) {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(15, 15, 15, 0.15)'
                    }
                  }}
                >
                  Next
                </button>
              </div>
            )}

            {/* Step 2: Email */}
            {currentStep === 2 && (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  width: '100%',
                }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  style={{
                    width: '100%',
                    height: isMobile ? '52px' : isTablet ? '54px' : '56px',
                    padding: isMobile ? '0px 16px' : isTablet ? '0px 18px' : '0px 20px',
                    borderRadius: isMobile ? '12px' : '12px',
                    border: '1px solid #E5E7EB',
                    background: '#FFFFFF',
                    fontFamily: 'var(--font-plus-jakarta)',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: isMobile ? '15px' : isTablet ? '15px' : '16px',
                    lineHeight: isMobile ? '22px' : '24px',
                    color: '#0F0F0F',
                    outline: 'none',
                    boxSizing: 'border-box',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s ease',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#9ECE58'
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(158, 206, 88, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#E5E7EB'
                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)'
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: isMobile ? '10px' : isTablet ? '11px' : '12px',
                    width: '100%',
                  }}
                >
                  <button
                    type="button"
                    onClick={handleBack}
                    style={{
                      flex: 1,
                      height: isMobile ? '52px' : isTablet ? '54px' : '56px',
                      padding: isMobile ? '0px 20px' : isTablet ? '0px 22px' : '0px 24px',
                      borderRadius: isMobile ? '12px' : '12px',
                      border: '1px solid #E5E7EB',
                      background: '#FFFFFF',
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: isMobile ? '15px' : isTablet ? '15px' : '16px',
                      lineHeight: isMobile ? '22px' : '24px',
                      color: '#0F0F0F',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#9ECE58'
                      e.currentTarget.style.background = '#F9FAFB'
                      e.currentTarget.style.transform = 'translateY(-1px)'
                      e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.1)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#E5E7EB'
                      e.currentTarget.style.background = '#FFFFFF'
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)'
                    }}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    style={{
                      flex: 1,
                      height: isMobile ? '52px' : isTablet ? '54px' : '56px',
                      padding: isMobile ? '0px 20px' : isTablet ? '0px 22px' : '0px 24px',
                      borderRadius: isMobile ? '12px' : '12px',
                      border: 'none',
                      background: isStepValid() ? '#0F0F0F' : '#E5E7EB',
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: isMobile ? '15px' : isTablet ? '15px' : '16px',
                      lineHeight: isMobile ? '22px' : '24px',
                      color: isStepValid() ? '#FFFFFF' : '#9CA3AF',
                      cursor: isStepValid() ? 'pointer' : 'not-allowed',
                      transition: 'all 0.3s ease',
                      boxShadow: isStepValid() ? '0 2px 8px rgba(15, 15, 15, 0.15)' : 'none',
                    }}
                    onMouseEnter={(e) => {
                      if (isStepValid()) {
                        e.currentTarget.style.transform = 'translateY(-1px)'
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(15, 15, 15, 0.2)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (isStepValid()) {
                        e.currentTarget.style.transform = 'translateY(0)'
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(15, 15, 15, 0.15)'
                      }
                    }}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Additional Details */}
            {currentStep === 3 && (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  width: '100%',
                }}
              >
                <input
                  type="tel"
                  placeholder="Phone Number (Optional)"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  style={{
                    width: '100%',
                    height: isMobile ? '52px' : isTablet ? '54px' : '56px',
                    padding: isMobile ? '0px 16px' : isTablet ? '0px 18px' : '0px 20px',
                    borderRadius: isMobile ? '12px' : '12px',
                    border: '1px solid #E5E7EB',
                    background: '#FFFFFF',
                    fontFamily: 'var(--font-plus-jakarta)',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: isMobile ? '15px' : isTablet ? '15px' : '16px',
                    lineHeight: isMobile ? '22px' : '24px',
                    color: '#0F0F0F',
                    outline: 'none',
                    boxSizing: 'border-box',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s ease',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#9ECE58'
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(158, 206, 88, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#E5E7EB'
                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)'
                  }}
                />
                <input
                  type="text"
                  placeholder="Country (Optional)"
                  value={formData.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                  style={{
                    width: '100%',
                    height: isMobile ? '52px' : isTablet ? '54px' : '56px',
                    padding: isMobile ? '0px 16px' : isTablet ? '0px 18px' : '0px 20px',
                    borderRadius: isMobile ? '12px' : '12px',
                    border: '1px solid #E5E7EB',
                    background: '#FFFFFF',
                    fontFamily: 'var(--font-plus-jakarta)',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: isMobile ? '15px' : isTablet ? '15px' : '16px',
                    lineHeight: isMobile ? '22px' : '24px',
                    color: '#0F0F0F',
                    outline: 'none',
                    boxSizing: 'border-box',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s ease',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#9ECE58'
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(158, 206, 88, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#E5E7EB'
                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)'
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    width: '100%',
                  }}
                >
                  <label
                    style={{
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: isMobile ? '13px' : '14px',
                      lineHeight: isMobile ? '18px' : '20px',
                      color: '#0F0F0F',
                    }}
                  >
                    Interests (Optional)
                  </label>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      flexWrap: 'nowrap',
                      gap: isMobile ? '4px' : isTablet ? '6px' : '8px',
                      justifyContent: 'flex-start',
                      width: '100%',
                      overflowX: 'auto',
                      WebkitOverflowScrolling: 'touch',
                    }}
                  >
                    {['Payments', 'Loans', 'Investments', 'All Features'].map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => handleInterestToggle(interest)}
                        style={{
                          padding: isMobile ? '6px 10px' : isTablet ? '7px 12px' : '8px 16px',
                          borderRadius: isMobile ? '16px' : '20px',
                          border: formData.interests.includes(interest) ? 'none' : '1px solid #E5E7EB',
                          background: formData.interests.includes(interest) ? '#0F0F0F' : '#FFFFFF',
                          fontFamily: 'var(--font-plus-jakarta)',
                          fontStyle: 'normal',
                          fontWeight: 400,
                          fontSize: isMobile ? '12px' : isTablet ? '13px' : '14px',
                          lineHeight: isMobile ? '18px' : '20px',
                          color: formData.interests.includes(interest) ? '#FFFFFF' : '#0F0F0F',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          whiteSpace: 'nowrap',
                          flexShrink: 0,
                        }}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>
                <select
                  value={formData.hearAboutUs}
                  onChange={(e) => handleInputChange('hearAboutUs', e.target.value)}
                  style={{
                    width: '100%',
                    height: isMobile ? '52px' : isTablet ? '54px' : '56px',
                    padding: isMobile ? '0px 16px' : isTablet ? '0px 18px' : '0px 20px',
                    borderRadius: isMobile ? '12px' : '12px',
                    border: '1px solid #E5E7EB',
                    background: '#FFFFFF',
                    fontFamily: 'var(--font-plus-jakarta)',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: isMobile ? '15px' : isTablet ? '15px' : '16px',
                    lineHeight: isMobile ? '22px' : '24px',
                    color: '#0F0F0F',
                    outline: 'none',
                    boxSizing: 'border-box',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#9ECE58'
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(158, 206, 88, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#E5E7EB'
                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <option value="">How did you hear about us? (Optional)</option>
                  <option value="social-media">Social Media</option>
                  <option value="friend">Friend/Colleague</option>
                  <option value="search">Search Engine</option>
                  <option value="advertisement">Advertisement</option>
                  <option value="other">Other</option>
                </select>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: isMobile ? '10px' : isTablet ? '11px' : '12px',
                    width: '100%',
                  }}
                >
                  <button
                    type="button"
                    onClick={handleBack}
                    style={{
                      flex: 1,
                      height: isMobile ? '52px' : isTablet ? '54px' : '56px',
                      padding: isMobile ? '0px 20px' : isTablet ? '0px 22px' : '0px 24px',
                      borderRadius: isMobile ? '12px' : '12px',
                      border: '1px solid #E5E7EB',
                      background: '#FFFFFF',
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: isMobile ? '15px' : isTablet ? '15px' : '16px',
                      lineHeight: isMobile ? '22px' : '24px',
                      color: '#0F0F0F',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#9ECE58'
                      e.currentTarget.style.background = '#F9FAFB'
                      e.currentTarget.style.transform = 'translateY(-1px)'
                      e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.1)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#E5E7EB'
                      e.currentTarget.style.background = '#FFFFFF'
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)'
                    }}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    style={{
                      flex: 1,
                      height: isMobile ? '52px' : isTablet ? '54px' : '56px',
                      padding: isMobile ? '0px 20px' : isTablet ? '0px 22px' : '0px 24px',
                      borderRadius: isMobile ? '12px' : '12px',
                      border: 'none',
                      background: '#0F0F0F',
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: isMobile ? '15px' : isTablet ? '15px' : '16px',
                      lineHeight: isMobile ? '22px' : '24px',
                      color: '#FFFFFF',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 2px 8px rgba(15, 15, 15, 0.15)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-1px)'
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(15, 15, 15, 0.2)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(15, 15, 15, 0.15)'
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            )}
          </form>
        </section>
      </div>

      {/* Footer - Below 100vh */}
      <div
        style={{
          width: '100%',
          position: 'relative',
          zIndex: 10,
          background: 'transparent',
        }}
      >
        <Footer />
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            background: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(4px)',
            animation: 'fadeIn 0.3s ease-in-out',
          }}
          onClick={() => {
            try {
              router.push('/')
            } catch (error) {
              console.error('Redirect error:', error)
              window.location.href = '/'
            }
          }}
        >
          <div
            style={{
              position: 'relative',
              width: isMobile ? '90%' : isTablet ? '85%' : '500px',
              maxWidth: isMobile ? '90%' : isTablet ? '450px' : '500px',
              background: '#FFFFFF',
              borderRadius: isMobile ? '20px' : '24px',
              padding: isMobile ? '28px 20px' : isTablet ? '40px 32px' : '48px 40px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              animation: 'slideUp 0.4s ease-out',
              transform: 'scale(1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: isMobile ? '20px' : isTablet ? '22px' : '24px',
              zIndex: 10000,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Success Icon */}
            <div
              style={{
                width: isMobile ? '70px' : isTablet ? '75px' : '80px',
                height: isMobile ? '70px' : isTablet ? '75px' : '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #9ECE58 0%, #93E4F1 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'scaleIn 0.5s ease-out 0.2s both',
              }}
            >
              <svg
                width={isMobile ? '35' : isTablet ? '38' : '40'}
                height={isMobile ? '35' : isTablet ? '38' : '40'}
                viewBox="0 0 24 24"
                fill="none"
                style={{
                  animation: 'checkmark 0.6s ease-out 0.4s both',
                }}
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="24"
                  strokeDashoffset="24"
                  style={{
                    animation: 'drawCheck 0.6s ease-out 0.4s forwards',
                  }}
                />
              </svg>
            </div>

            {/* Success Message */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: isMobile ? '10px' : '12px',
                textAlign: 'center',
                animation: 'fadeInUp 0.5s ease-out 0.3s both',
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-plus-jakarta)',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: isMobile ? '22px' : isTablet ? '28px' : '36px',
                  lineHeight: isMobile ? '28px' : isTablet ? '36px' : '44px',
                  color: '#0F0F0F',
                  margin: 0,
                }}
              >
                🎉 You're In!
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-plus-jakarta)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: isMobile ? '14px' : isTablet ? '15px' : '16px',
                  lineHeight: isMobile ? '20px' : isTablet ? '22px' : '24px',
                  color: '#4B4B57',
                  margin: 0,
                  maxWidth: isMobile ? '100%' : isTablet ? '380px' : '400px',
                }}
              >
                Welcome to the future of finance! We're building something amazing and we'll keep you updated every step of the way.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-plus-jakarta)',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: isMobile ? '13px' : '14px',
                  lineHeight: isMobile ? '18px' : '20px',
                  color: '#9ECE58',
                  margin: 0,
                  maxWidth: isMobile ? '100%' : isTablet ? '380px' : '400px',
                  marginTop: isMobile ? '6px' : '8px',
                }}
              >
                Get ready for early access, exclusive updates, and special perks! 🚀
              </p>
            </div>

            {/* Redirecting Message */}
            <div
              style={{
                fontFamily: 'var(--font-plus-jakarta)',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: isMobile ? '12px' : '14px',
                lineHeight: isMobile ? '16px' : '20px',
                color: '#9CA3AF',
                textAlign: 'center',
                animation: 'fadeIn 0.5s ease-out 0.6s both',
              }}
            >
              Taking you back home...
            </div>
          </div>
        </div>
      )}
    </div>
  )
}



