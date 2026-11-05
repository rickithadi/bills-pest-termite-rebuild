import { useEffect } from 'react'
import JsonLd from '../components/JsonLd'
import { localBusinessSchema } from '../lib/seo'
import Hero from '../sections/Hero'
import TrustBar from '../sections/TrustBar'
import Services from '../sections/Services'
import Testimonials from '../sections/Testimonials'
import Pricing from '../sections/Pricing'
import WhyUs from '../sections/WhyUs'
import AboutTeaser from '../sections/AboutTeaser'
import Locations from '../sections/Locations'
import BlogPreview from '../sections/BlogPreview'
import FAQ from '../sections/FAQ'
import FinalCTA from '../sections/FinalCTA'

export default function Home() {
  useEffect(() => {
    document.title = "Pest Control Phoenix AZ | Bill's Pest & Termite Control"
  }, [])

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <Hero />
      <TrustBar />
      <Services compact />
      <Testimonials compact />
      <Pricing />
      <WhyUs />
      <AboutTeaser />
      <Locations />
      <BlogPreview />
      <FAQ />
      <FinalCTA />
    </>
  )
}
