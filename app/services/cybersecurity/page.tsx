import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatures } from "@/components/service-features"
import { ServiceBenefits } from "@/components/service-benefits"
import { ServiceProcess } from "@/components/service-process"
import { ServiceCTA } from "@/components/service-cta"
import { Lock } from "lucide-react"

const features = [
  {
    title: "Penetration Testing & Red Team Exercises",
    description:
      "Comprehensive security assessments to identify vulnerabilities and test your defenses against real-world attack scenarios.",
  },
  {
    title: "Network & Infrastructure Security",
    description:
      "Advanced firewall management, intrusion detection systems, and network monitoring to protect your IT infrastructure.",
  },
  {
    title: "Identity & Access Management (IAM)",
    description:
      "Secure user authentication, authorization, and privileged access management to control system access.",
  },
  {
    title: "Security Operations Center (SOC)",
    description: "24/7 monitoring, threat detection, and incident response services to protect against cyber threats.",
  },
  {
    title: "Compliance Management",
    description:
      "GDPR, ISO 27001, and other regulatory compliance services to meet industry standards and requirements.",
  },
  {
    title: "Digital Forensics & Incident Response",
    description: "Expert investigation and recovery services for security incidents and cyber attacks.",
  },
]

const benefits = [
  "Proactive threat detection and prevention",
  "Reduced risk of data breaches and cyber attacks",
  "Regulatory compliance and audit readiness",
  "24/7 security monitoring and response",
  "Cost-effective security management",
  "Enhanced business continuity and resilience",
  "Expert security guidance and support",
  "Scalable security solutions for growth",
]

const process = [
  {
    step: "Security Assessment",
    description: "Comprehensive evaluation of your current security posture and identification of vulnerabilities.",
  },
  {
    step: "Risk Analysis",
    description: "Detailed analysis of security risks and their potential impact on your business operations.",
  },
  {
    step: "Solution Design",
    description: "Custom security architecture design tailored to your specific requirements and risk profile.",
  },
  {
    step: "Implementation",
    description: "Professional deployment of security solutions with minimal disruption to business operations.",
  },
  {
    step: "Monitoring & Support",
    description: "Continuous monitoring, maintenance, and support to ensure optimal security performance.",
  },
]

export default function CybersecurityPage() {
  return (
    <main className="min-h-screen pt-20">
      <ServiceHero
        title="Cybersecurity Solutions"
        subtitle="Comprehensive Protection for Your Digital Assets"
        description="At Pro-ICE, we understand the evolving threat landscape and help our clients secure their critical IT infrastructure and data. Our cybersecurity solutions provide proactive protection against internal and external threats, ensuring business continuity and regulatory compliance."
        icon={<Lock className="h-10 w-10 text-[#80B6C1]" />}
      />

      <ServiceFeatures features={features} />
      <ServiceBenefits benefits={benefits} />
      <ServiceProcess process={process} />
      <ServiceCTA service="Cybersecurity Solutions" />
    </main>
  )
}
