import { PartnersHero } from "@/components/partners-hero"
import { PartnerCategories } from "@/components/partner-categories"
import { PartnerTestimonials } from "@/components/partner-testimonials"
import { PartnershipBenefits } from "@/components/partnership-benefits"

export default function PartnersPage() {
  return (
    <main className="min-h-screen pt-20">
      <PartnersHero />
      <PartnerCategories />
      <PartnershipBenefits />
      <PartnerTestimonials />
    </main>
  )
}
