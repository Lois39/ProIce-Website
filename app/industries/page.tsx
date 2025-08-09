import { IndustryCard } from "@/components/industry-card"
import { Building2, GraduationCap, Heart, Landmark, Radio, Smartphone } from "lucide-react"

const industries = [
  {
    title: "Education",
    description:
      "Empowering educational institutions with modern technology solutions for enhanced learning experiences.",
   icon: <GraduationCap className="h-8 w-8 text-[#034F66]" />,
    solutions: [
      "Learning Management Systems",
      "Student Information Systems",
      "Campus Automation",
      "Digital Libraries",
      "Online Assessment Platforms",
    ],
  },
  {
    title: "Telecommunications",
    description: "Supporting telecom operators with network optimization and infrastructure solutions.",
    icon: <Radio className="h-8 w-8 text-[#034F66]" />,
    solutions: [
      "Network Quality Optimization",
      "Spectrum Management",
      "Infrastructure Monitoring",
      "Service Quality Assurance",
      "Regulatory Compliance",
    ],
  },
  {
    title: "Government",
    description: "Digital transformation solutions for public sector efficiency and citizen services.",
    icon: <Landmark className="h-8 w-8 text-[#034F66]" />,
    solutions: [
      "E-Government Platforms",
      "Document Management",
      "Citizen Service Portals",
      "Process Automation",
      "Data Security & Compliance",
    ],
  },
  {
    title: "Finance",
    description: "Secure and compliant technology solutions for financial institutions.",
    icon: <Building2 className="h-8 w-8 text-[#034F66]" />,
    solutions: [
      "Core Banking Systems",
      "Payment Processing",
      "Risk Management",
      "Regulatory Reporting",
      "Cybersecurity Solutions",
    ],
  },
  {
    title: "Healthcare",
    description: "Healthcare technology solutions for improved patient care and operational efficiency.",
    icon: <Heart className="h-8 w-8 text-[#034F66]" />,
    solutions: [
      "Electronic Health Records",
      "Telemedicine Platforms",
      "Medical Device Integration",
      "Healthcare Analytics",
      "Compliance Management",
    ],
  },
  {
    title: "Technology",
    description: "Supporting tech companies with scalable infrastructure and development solutions.",
    icon: <Smartphone className="h-8 w-8 text-[#034F66]" />,
    solutions: [
      "Cloud Infrastructure",
      "DevOps Solutions",
      "API Development",
      "Mobile Applications",
      "System Integration",
    ],
  },
]

export default function IndustriesPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#034F66] mb-4">Industries We Serve</h1>
          <p className="text-xl text-[#569AA7] max-w-3xl mx-auto">
            Delivering specialized technology solutions across diverse industries with deep domain expertise and proven
            results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <IndustryCard key={index} {...industry} />
          ))}
        </div>
      </div>
    </main>
  )
}
