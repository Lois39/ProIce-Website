import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatures } from "@/components/service-features"
import { ServiceBenefits } from "@/components/service-benefits"
import { ServiceProcess } from "@/components/service-process"
import { ServiceCTA } from "@/components/service-cta"
import { Wifi } from "lucide-react"

const features = [
  {
    title: "IoT Strategy & Consulting",
    description: "Comprehensive IoT strategy development from idea to implementation, tailored to your business needs.",
  },
  {
    title: "Sensor Data Analytics",
    description: "Advanced analytics and machine learning capabilities to extract valuable insights from sensor data.",
  },
  {
    title: "Device Management Platform",
    description: "Centralized platform for managing, monitoring, and controlling all your IoT devices and sensors.",
  },
  {
    title: "Real-time Monitoring Solutions",
    description: "Live monitoring dashboards and alerts for tracking device performance and operational metrics.",
  },
  {
    title: "Custom IoT Applications",
    description: "Tailored IoT solutions designed specifically for your industry and business requirements.",
  },
  {
    title: "Data Visualization & Reporting",
    description: "Interactive dashboards and automated reporting tools for better decision-making and insights.",
  },
]

const benefits = [
  "Improved operational efficiency and productivity",
  "Real-time visibility into business operations",
  "Predictive maintenance and reduced downtime",
  "Enhanced customer experience and satisfaction",
  "Data-driven decision making capabilities",
  "Cost reduction through automation",
  "New revenue streams and business models",
  "Competitive advantage through innovation",
]

const process = [
  {
    step: "Discovery & Planning",
    description: "Understand your business objectives and identify IoT opportunities for maximum impact.",
  },
  {
    step: "Solution Design",
    description: "Design comprehensive IoT architecture including devices, connectivity, and data processing.",
  },
  {
    step: "Prototype Development",
    description: "Build and test proof-of-concept solutions to validate functionality and performance.",
  },
  {
    step: "Implementation & Integration",
    description: "Deploy IoT solutions and integrate with existing systems and business processes.",
  },
  {
    step: "Monitoring & Optimization",
    description: "Continuous monitoring, maintenance, and optimization of your IoT ecosystem.",
  },
]

export default function InternetOfThingsPage() {
  return (
    <main className="min-h-screen pt-20">
      <ServiceHero
        title="Internet of Things"
        subtitle="Transforming Information Technology Operations"
        description="With our partnership with FirstPoint, we believe IoT will not only change IT operations but also transform the nature of business. From idea to design through advisory, innovation and strategy, we create tailored business cases to reach endless opportunities."
        icon={<Wifi className="h-10 w-10 text-[#80B6C1]" />}
      />

      <ServiceFeatures features={features} />
      <ServiceBenefits benefits={benefits} />
      <ServiceProcess process={process} />
      <ServiceCTA service="Internet of Things" />
    </main>
  )
}
