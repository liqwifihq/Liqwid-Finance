export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'Liqwifi',
    alternateName: 'Liqwid Finance',
    description: 'All-in-one finance app for money transfers, credit-score loans, and investments',
    url: 'https://liqwifi.com',
    logo: 'https://liqwifi.com/Liqwifi_logo.png',
    image: 'https://liqwifi.com/seo_image.png',
    slogan: 'Your Money, Loans & Investments in One Powerful App',
    sameAs: [
      // Add your social media URLs here when available
      // 'https://twitter.com/liqwifi',
      // 'https://facebook.com/liqwifi',
      // 'https://linkedin.com/company/liqwifi',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@liqwifi.com',
      contactType: 'Customer Service',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Global',
    },
    offers: {
      '@type': 'Offer',
      description: 'Join the waitlist for early access to Liqwifi',
      price: '0',
      priceCurrency: 'USD',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Liqwifi',
    url: 'https://liqwifi.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://liqwifi.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Liqwifi',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web, iOS, Android',
    description: 'All-in-one finance app for money transfers, credit-score loans, and investments',
    url: 'https://liqwifi.com',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'International money transfers',
      'Local money transfers',
      'Bill payments',
      'Credit-score based loans',
      'Investment options',
      'Financial dashboards',
      'Transaction calculators',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
    </>
  )
}


