import { Hero } from "@/components/hero"
import { StatsSection } from "@/components/stats-section"
import { ServicesOverview } from "@/components/services-overview"
import { PartnersSlider } from "@/components/partners-slider"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <StatsSection />
      <ServicesOverview />
      <PartnersSlider />
      <CTASection />
    </main>
  )
}
