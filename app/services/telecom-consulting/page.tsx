import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatures } from "@/components/service-features"
import { ServiceBenefits } from "@/components/service-benefits"
import { ServiceProcess } from "@/components/service-process"
import { ServiceCTA } from "@/components/service-cta"
import { Globe } from "lucide-react"

const features = [
  {
    title: "Network Evolution Strategy",
    description: "Strategic planning for network modernization and evolution to meet future demands and technologies.",
  },
  {
    title: "Mobile Network Launch Management",
    description: "End-to-end project management for new mobile network deployments and service launches.",
  },
  {
    title: "Spectrum Efficiency Improvement",
    description: "Optimization of 3G and 4G spectrum utilization to maximize network capacity and performance.",
  },
  {
    title: "Network Audit Services",
    description: "Comprehensive audits of global carrier service networks to identify optimization opportunities.",
  },
  {
    title: "Quality of Experience Optimization",
    description: "Enhancement of customer experience through network performance optimization and monitoring.",
  },
  {
    title: "CAPEX/OPEX Optimization",
    description:
      "Strategic cost optimization to maximize returns from capital expenditure and minimize operational costs.",
  },
]

const benefits = [
  "Enhanced network performance and reliability",
  "Improved customer satisfaction and retention",
  "Optimized network capacity and coverage",
  "Reduced operational and capital expenditure",
  "Competitive advantage in the market",
  "Regulatory compliance and standards adherence",
  "Future-ready network infrastructure",
  "Expert guidance from industry professionals",
]

const process = [
  {
    step: "Network Assessment",
    description: "Comprehensive evaluation of existing network infrastructure, performance, and capabilities.",
  },
  {
    step: "Strategy Development",
    description: "Create tailored strategies for network optimization, modernization, and expansion.",
  },
  {
    step: "Implementation Planning",
    description: "Detailed planning for network upgrades, deployments, and optimization initiatives.",
  },
  {
    step: "Execution & Management",
    description: "Professional project management and execution of network improvement initiatives.",
  },
  {
    step: "Performance Monitoring",
    description: "Continuous monitoring and optimization to ensure sustained network performance.",
  },
]

export default function TelecomConsultingPage() {
  return (
    <main className="min-h-screen pt-20">
      <ServiceHero
        title="Telecom Consulting"
        subtitle="Delivering Exceptional Quality of Experience"
        description="We help ICT firms, Telecom Regulatory bodies, and Operators deliver exceptional services that give them competitive edge in a highly demanding sector. Partnering with Cyberteq, we bring global expertise to the Nigerian market."
        icon={<Globe className="h-10 w-10 text-[#80B6C1]" />}
      />

      <ServiceFeatures features={features} />
      <ServiceBenefits benefits={benefits} />
      <ServiceProcess process={process} />
      <ServiceCTA service="Telecom Consulting" />
    </main>
  )
}
