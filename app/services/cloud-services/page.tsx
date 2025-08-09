import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatures } from "@/components/service-features"
import { ServiceBenefits } from "@/components/service-benefits"
import { ServiceProcess } from "@/components/service-process"
import { ServiceCTA } from "@/components/service-cta"
import { Cloud } from "lucide-react"

const features = [
  {
    title: "Infrastructure as a Service (IaaS)",
    description:
      "Scalable computing resources including virtual machines, storage, and networking infrastructure on-demand.",
  },
  {
    title: "Platform as a Service (PaaS)",
    description:
      "Complete development and deployment environment in the cloud for building, testing, and managing applications.",
  },
  {
    title: "Software as a Service (SaaS)",
    description:
      "Ready-to-use software applications delivered over the internet with automatic updates and maintenance.",
  },
  {
    title: "Cloud Migration Services",
    description: "Seamless migration of your existing applications and data to cloud platforms with minimal downtime.",
  },
  {
    title: "Hybrid Cloud Solutions",
    description:
      "Integrated on-premises and cloud infrastructure for optimal flexibility, security, and cost-effectiveness.",
  },
  {
    title: "Cloud Security & Compliance",
    description: "Comprehensive security measures and compliance frameworks to protect your cloud-based assets.",
  },
]

const benefits = [
  "Reduced capital expenditure on IT infrastructure",
  "Improved scalability and flexibility",
  "Enhanced business agility and innovation",
  "Automatic software updates and maintenance",
  "Global accessibility and collaboration",
  "Disaster recovery and business continuity",
  "Pay-as-you-use cost model",
  "Environmental sustainability benefits",
]

const process = [
  {
    step: "Cloud Readiness Assessment",
    description: "Evaluate your current infrastructure and applications for cloud migration readiness.",
  },
  {
    step: "Strategy Development",
    description: "Create a comprehensive cloud strategy aligned with your business objectives and requirements.",
  },
  {
    step: "Architecture Design",
    description: "Design optimal cloud architecture considering performance, security, and cost factors.",
  },
  {
    step: "Migration & Deployment",
    description: "Execute seamless migration with minimal disruption to your business operations.",
  },
  {
    step: "Optimization & Management",
    description: "Continuous monitoring, optimization, and management of your cloud environment.",
  },
]

export default function CloudServicesPage() {
  return (
    <main className="min-h-screen pt-20">
      <ServiceHero
        title="Cloud Services"
        subtitle="Expanding Opportunities Beyond Limits"
        description="Transform your business with our comprehensive cloud services. We help organizations leverage the power of cloud computing to achieve greater agility, scalability, and cost-effectiveness while maintaining security and compliance."
        icon={<Cloud className="h-10 w-10 text-[#80B6C1]" />}
      />

      <ServiceFeatures features={features} />
      <ServiceBenefits benefits={benefits} />
      <ServiceProcess process={process} />
      <ServiceCTA service="Cloud Services" />
    </main>
  )
}
