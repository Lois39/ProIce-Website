import { MissionVision } from "@/components/mission-vision"
import { CompanyStats } from "@/components/company-stats"
import { CoreValues } from "@/components/core-values"
import { CompanyCulture } from "@/components/company-culture"
import { LeadershipTeam } from "@/components/leadership-team"

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#034F66] mb-4">About Pro-ICE Limited</h1>
          <p className="text-xl text-[#569AA7] max-w-3xl mx-auto">
            Established in 2018, Pro-ICE is an end-to-end Business Solutions and Technology Company, supporting
            businesses in their digital initiatives.
          </p>
        </div>

        <MissionVision />
        <CompanyStats />
        <CoreValues />
        <CompanyCulture />
        <LeadershipTeam />
      </div>
    </main>
  )
}
