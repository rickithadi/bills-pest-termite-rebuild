export interface Service {
  name: string
  blurb: string
  description: string
  href: string
  icon: 'bug' | 'home' | 'rat' | 'skull' | 'bed' | 'bird' | 'building' | 'leaf'
}

export const services: Service[] = [
  {
    name: 'General Pest Control',
    blurb: 'Ants • Roaches • Spiders',
    description:
      'Professional pest control options for ants, cockroaches, spiders, crickets and other common Arizona household pests. Recurring programs are available when appropriate.',
    href: '#quote',
    icon: 'bug',
  },
  {
    name: 'Termite Control',
    blurb: 'Inspections • Treatment • Protection',
    description:
      'Termite inspections, treatment recommendations, new-construction pretreatment and ongoing protection options for Arizona residential and commercial properties.',
    href: '#quote',
    icon: 'home',
  },
  {
    name: 'Rodent Control',
    blurb: 'Rats • Mice • Pack Rats',
    description:
      'Rodent inspections, trapping, removal and structural exclusion options designed to address rodent activity and reduce accessible entry points.',
    href: '#quote',
    icon: 'rat',
  },
  {
    name: 'Scorpion Control',
    blurb: 'Arizona Desert Pests',
    description:
      'Scorpion-control options based on property conditions, activity areas, accessible entry points and other factors that contribute to Arizona scorpion problems.',
    href: '#quote',
    icon: 'skull',
  },
  {
    name: 'Bed Bug Treatment',
    blurb: 'Inspection • Treatment • Follow-Up',
    description:
      'Professional bed bug evaluation and treatment options selected according to activity, property conditions and necessary preparation and follow-up.',
    href: '#quote',
    icon: 'bed',
  },
  {
    name: 'Bird & Pigeon Control',
    blurb: 'Pigeons • Roofs • Solar Panels',
    description:
      'Bird exclusion, deterrent systems, netting and pigeon-control solutions for roofs, commercial buildings and rooftop solar panel installations.',
    href: '#quote',
    icon: 'bird',
  },
  {
    name: 'Commercial Pest Control',
    blurb: 'Offices • Restaurants • Facilities',
    description:
      'Pest-control programs for offices, restaurants, retail properties, warehouses and other facilities, with documentation and recurring monitoring available.',
    href: '#quote',
    icon: 'building',
  },
  {
    name: 'Eco-Friendly Options',
    blurb: 'EPA-Registered Products',
    description:
      'Environmentally responsible treatment plans that protect your family, pets and the surrounding ecosystem without sacrificing effectiveness.',
    href: '#quote',
    icon: 'leaf',
  },
]

export interface Plan {
  eyebrow: string
  name: string
  price: string
  priceNote: string
  feeNote: string
  description: string
  highlights: string[]
  cta: string
  href: string
  featured?: boolean
}

export const plans: Plan[] = [
  {
    eyebrow: 'Affordable General Pest Protection',
    name: 'Year-Round General Pest Control',
    price: '$40',
    priceNote: '/month starting at',
    feeNote: 'Initial treatment charge applies.',
    description:
      'Enjoy convenient year-round general pest-control service with an affordable monthly payment and regularly scheduled treatments.',
    highlights: [
      '12-month service program',
      'Service every other month',
      'Six scheduled services annually',
      'Ongoing general pest-control service',
    ],
    cta: 'Explore General Pest Control',
    href: '#quote',
  },
  {
    eyebrow: 'Comprehensive Termite Solution',
    name: 'Complete Termite Treatment & Renewable Warranty',
    price: 'Custom',
    priceNote: 'Quote',
    feeNote: 'Initial comprehensive treatment.',
    description:
      'For homeowners concerned about existing termite activity or seeking a comprehensive conventional treatment, our team provides property-specific termite recommendations with renewable warranty options.',
    highlights: [
      'Professional termite evaluation',
      'Comprehensive initial treatment',
      'Property-specific treatment plan',
      'Renewable yearly termite warranty',
    ],
    cta: 'Explore Complete Termite Treatment',
    href: '#quote',
    featured: true,
  },
  {
    eyebrow: 'Ongoing Termite Protection',
    name: 'Monthly Termite Protection Program',
    price: '$75',
    priceNote: '/month for qualifying properties',
    feeNote: 'Initial treatment charge applies.',
    description:
      'Our monthly termite protection program combines ongoing termite inspections and protection with complimentary exterior pest-control service for qualifying properties.',
    highlights: [
      'Monthly termite inspections',
      'Monthly exterior pest-control service',
      'Ongoing termite protection options',
      'Applicable program warranty benefits',
    ],
    cta: 'Explore the $75 Protection Program',
    href: '#quote',
  },
]

export interface Testimonial {
  name: string
  context?: string
  quote: string
  date?: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Jennifer M.',
    context: 'Phoenix, AZ',
    quote:
      'Bills Pest Termite Control found termite damage in our home that two other companies completely missed. Their thorough inspection and honest assessment saved us thousands of dollars. Highly recommend to any Phoenix homeowner.',
  },
  {
    name: 'Marcus T.',
    context: 'Mesa, AZ',
    quote:
      "We had a serious rodent problem in our restaurant. Bill's team responded the same day, handled everything professionally, and followed up twice to make sure the issue was fully resolved. Outstanding service from start to finish.",
  },
  {
    name: 'Sandra R.',
    context: 'Scottsdale, AZ',
    quote:
      'After struggling with pigeons on our commercial property for years, Bills solved the problem in one visit. Their humane deterrent system has been working perfectly for over a year. Worth every penny.',
  },
  {
    name: 'lynette polewka',
    quote:
      "My experience with Bill's Pest Control has been exceptional. Every interaction from first contact through the completion of services has been seamless and, best of all, friendly. It means a lot to have needed services done well...even more to feel you've been dealing with genuinely good people. Thanks!",
    date: '10/28/2026',
  },
  {
    name: 'Walori Pardini',
    quote:
      'The service technician for a termite inspection arrived right on time, was cordial and thorough with his examination throughout the house inside and out.',
    date: '10/30/2026',
  },
  {
    name: 'Cecelia Pilling',
    quote: 'Fantastic service from Joseph T. He was prompt, professional, and took care of our pigeon issue quickly. 5 Stars!',
    date: '10/30/2026',
  },
  {
    name: 'Gregory Nowak',
    quote: 'Great job getting rid of termites and keeping them out. Highly recommended.',
    date: '10/27/2026',
  },
  {
    name: 'Randal Fitch',
    quote: 'Knowledgeable, answered all my questions and concerns. The great part the price, way lower than I expected.',
    date: '11/03/2026',
  },
  {
    name: 'Adam Heller',
    quote: 'Super easy to work with and very friendly service, they whipped it out very quick - Office super easy to deal with too',
    date: '11/03/2026',
  },
  {
    name: 'Roger Jimenez',
    quote: 'Great communication and professional work.',
    date: '11/04/2026',
  },
]

export const faqs = [
  {
    q: 'What pests does Bill’s Pest & Termite Control treat?',
    a: 'Our services include many common Arizona pest concerns, including termites, ants, cockroaches, scorpions, rodents, bed bugs and pest birds. Availability depends on the property and service requested.',
  },
  {
    q: 'Do I need to know which pest I have before calling?',
    a: 'No. Describe what you are seeing or hearing and where it is occurring. An inspection or evaluation can help determine the likely pest and appropriate next step.',
  },
  {
    q: 'Do you provide residential and commercial pest control?',
    a: 'Yes. Bill’s provides pest-control services for residential properties and qualifying commercial properties throughout our service area.',
  },
  {
    q: 'Does every pest require the same treatment?',
    a: 'No. Treatment and control methods depend on pest identification, activity level, property conditions, access and inspection findings.',
  },
  {
    q: 'Do you offer free termite inspections?',
    a: 'Yes. We provide free termite inspections for residential and commercial properties throughout the Phoenix Valley, with a detailed, honest report and no obligation to purchase.',
  },
  {
    q: 'Do you offer financing for pest control services?',
    a: 'Yes. Qualifying customers can access 0% interest financing for up to 24 months on eligible pest and termite services through Wisetack. Ask our team about financing when you request your free quote.',
  },
]

export const locations = [
  {
    label: 'North & West Valley',
    name: 'Phoenix Main Office',
    address: '24820 N 16th Avenue, Suite 130, Phoenix, AZ 85085',
    serves: 'Serving Phoenix, Glendale, Peoria, Scottsdale, Anthem, Surprise and surrounding communities.',
    phone: '(602) 308-4510',
    tel: '+16023084510',
  },
  {
    label: 'East Valley',
    name: 'Mesa Office',
    address: '1616 E Main Street, Suite 254, Mesa, AZ 85203',
    serves: 'Serving Mesa, Chandler, Gilbert, Tempe, Queen Creek and surrounding East Valley communities.',
    phone: '(480) 637-0420',
    tel: '+14806370420',
  },
]

export const serviceAreas = [
  'Ahwatukee', 'Anthem', 'Apache Junction', 'Avondale', 'Buckeye', 'Cave Creek',
  'Chandler', 'Desert Hills', 'El Mirage', 'Fountain Hills', 'Gilbert', 'Glendale',
  'Goodyear', 'Laveen', 'Litchfield Park', 'Maricopa', 'Mesa', 'New River',
  'Paradise Valley', 'Peoria', 'Phoenix', 'Prescott Valley', 'Queen Creek',
  'San Tan Valley', 'Scottsdale', 'Sun City', 'Sun City West', 'Surprise',
  'Tempe', 'Tolleson', 'Waddell', 'Wickenburg', 'Youngtown',
]
