import { ServiceCard } from "@/components/service-card"
import { Bot, Cloud, Database, Globe, Lock, Smartphone, Wifi } from "lucide-react"

const services = [
  {
    title: "SharePoint & EDMS",
    description:
      "Enterprise Document Management and SharePoint solutions for secure collaboration and workflow automation.",
    icon: <Database className="h-8 w-8 text-[#034F66]" />,
    features: [
      "Intranet on SharePoint",
      "Data Migration",
      "Hybrid Design Implementation",
      "Business Process Automation",
      "Workflows & EDMS",
    ],
    useCases: "Document management, team collaboration, workflow automation",
  },
  {
    title: "Web & Mobile App Development",
    description: "Customer-centric web and mobile applications designed for your business needs.",
    icon: <Smartphone className="h-8 w-8 text-[#034F66]" />,
    features: [
      "Custom Web Applications",
      "Mobile App Development",
      "API Development & Integration",
      "Payment System Integration",
      "Learning Management Systems",
      "Source Code Optimization",
    ],
    useCases: "E-commerce platforms, business applications, customer portals",
  },
  {
    title: "Robotic Process Automation & AI Chatbot",
    description: "Automate repetitive tasks and enhance customer experience with AI-powered solutions.",
    icon: <Bot className="h-8 w-8 text-[#034F66]" />,
    features: [
      "Process Automation",
      "AI-Powered Chatbots",
      "UiPath Integration",
      "No-Code Authoring Tools",
      "Enterprise Scalability",
      "Multi-language Support",
    ],
    useCases: "Customer service, data processing, workflow automation",
  },
  {
    title: "Cybersecurity Solutions",
    description: "Comprehensive security solutions to protect your digital assets and infrastructure.",
    icon: <Lock className="h-8 w-8 text-[#034F66]" />,
    features: [
      "Penetration Testing",
      "Network Security",
      "Identity & Access Management",
      "Security Operations Center",
      "Compliance Management",
      "Digital Forensics",
    ],
    useCases: "Data protection, compliance, threat detection and response",
  },
  {
    title: "Cloud Services",
    description: "Scalable cloud solutions for modern business infrastructure and operations.",
   icon: <Cloud className="h-8 w-8 text-[#034F66]" />,
    features: [
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)",
      "Software as a Service (SaaS)",
      "Cloud Migration",
      "Hybrid Cloud Solutions",
      "Cloud Security",
    ],
    useCases: "Business continuity, scalability, cost optimization",
  },
  {
    title: "Internet of Things",
    description: "Transform your operations with connected devices and smart solutions.",
    icon: <Wifi className="h-8 w-8 text-[#034F66]" />,
    features: [
      "IoT Strategy & Consulting",
      "Sensor Data Analytics",
      "Device Management",
      "Real-time Monitoring",
      "Custom IoT Solutions",
      "Data Visualization",
    ],
    useCases: "Smart buildings, industrial monitoring, asset tracking",
  },
  {
    title: "Telecom Consulting",
    description: "Expert consulting services for telecommunications and ICT infrastructure.",
    icon: <Globe className="h-8 w-8 text-[#034F66]" />,
    features: [
      "Network Evolution Strategy",
      "Mobile Network Management",
      "Spectrum Efficiency Improvement",
      "Network Audit Services",
      "Quality of Experience Optimization",
      "CAPEX/OPEX Optimization",
    ],
    useCases: "Network optimization, regulatory compliance, service quality",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#034F66] mb-4">Our Services</h1>
          <p className="text-xl text-[#569AA7] max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business processes and drive digital
            transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </main>
  )
}
