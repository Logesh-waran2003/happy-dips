import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '../components/landing/Hero'
import { ProductShowcase } from '../components/landing/ProductShowcase'
import { AboutSection } from '../components/landing/AboutSection'
import { ContactSection } from '../components/landing/ContactSection'

import { FeaturedSection } from '../components/landing/FeaturedSection'
import { MetricsSection } from '../components/landing/MetricsSection'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <main className="bg-cream min-h-screen">
      <Hero />
      <FeaturedSection />
      <ProductShowcase />
      <MetricsSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
