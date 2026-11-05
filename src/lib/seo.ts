export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: "Bill's Pest & Termite Control",
  description:
    'Family-owned Arizona pest and termite control company serving Metropolitan Phoenix since 1992. Three generations of local experience in general pest control, termite inspection and treatment, rodent control, scorpion control, bed bug treatment, and bird and pigeon control.',
  url: 'https://billstermiteco.com/',
  telephone: '+1-602-308-4510',
  image: 'https://i0.wp.com/billstermiteco.com/wp-content/uploads/Phoenix-Pest-and-Termite-Control.jpeg?w=1200&ssl=1',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '24820 N 16th Ave Suite 130',
    addressLocality: 'Phoenix',
    addressRegion: 'AZ',
    postalCode: '85085',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.71154729407327,
    longitude: -112.09426652594655,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/BillsPestTermiteControl/',
    'https://x.com/bills_pest',
    'https://www.instagram.com/billspesttermite/',
    'https://www.linkedin.com/company/bills-pest-termite-control',
    'https://www.youtube.com/@BillsPestControl',
    'https://www.tiktok.com/@bills_pest_control',
    'https://www.pinterest.com/billspest/',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '8000',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Pest & Termite Control Services',
    itemListElement: [
      'General Pest Control',
      'Termite Control',
      'Rodent Control',
      'Scorpion Control',
      'Bed Bug Treatment',
      'Bird & Pigeon Control',
      'Commercial Pest Control',
    ].map((name) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name },
    })),
  },
}
