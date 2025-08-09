import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatures } from "@/components/service-features"
import { ServiceBenefits } from "@/components/service-benefits"
import { ServiceProcess } from "@/components/service-process"
import { ServiceCTA } from "@/components/service-cta"
import { Smartphone } from "lucide-react"

const webMobileData = {
  title: "Web & Mobile App Development",
  subtitle: "Custom Applications Designed for Your Business Needs",
  description:
    "We help clients design customer-centric web and mobile applications that drive business growth and enhance user experience.",
  icon: <Smartphone className="h-8 w-8 text-[#034F66]" />,
  features: [
    {
      title: "Custom Web Applications",
      description: "Tailored web applications built with modern technologies and frameworks.",
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
    },
    {
      title: "Web Portal & Payment Integration",
      description: "Secure web portals with integrated payment processing systems.",
    },
    {
      title: "Learning Management Systems",
      description: "Custom LMS solutions for educational institutions and corporate training.",
    },
    {
      title: "API Development & Integration",
      description: "RESTful APIs and third-party service integrations for seamless connectivity.",
    },
    {
      title: "Source Code Optimization",
      description: "Code review, optimization, and audit services for existing applications.",
    },
  ],
  benefits: [
    "Enhanced customer engagement",
    "Improved business processes",
    "Scalable and maintainable solutions",
    "Cross-platform compatibility",
    "Secure and reliable applications",
    "Faster time-to-market",
  ],
  process: [
    {
      step: "Discovery",
      description: "Understanding business requirements and user needs",
    },
    {
      step: "Design",
      description: "UI/UX design and technical architecture planning",
    },
    {
      step: "Development",
      description: "Agile development with regular client feedback",
    },
    {
      step: "Testing",
      description: "Comprehensive testing across devices and platforms",
    },
    {
      step: "Deployment",
      description: "Production deployment and ongoing maintenance",
    },
  ],
}

export default function WebMobileDevelopmentPage() {
  return (
    <main className="min-h-screen pt-20">
      <ServiceHero {...webMobileData} />
      <ServiceFeatures features={webMobileData.features} />
      <ServiceBenefits benefits={webMobileData.benefits} />
      <ServiceProcess process={webMobileData.process} />
      <ServiceCTA service="Web & Mobile Development" />
    </main>
  )
}
