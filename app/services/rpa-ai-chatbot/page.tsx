import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatures } from "@/components/service-features"
import { ServiceBenefits } from "@/components/service-benefits"
import { ServiceProcess } from "@/components/service-process"
import { ServiceCTA } from "@/components/service-cta"
import { Bot } from "lucide-react"

const rpaAiData = {
  title: "Robotic Process Automation & AI Chatbot",
  subtitle: "Intelligent Automation for Enhanced Productivity",
  description:
    "RPA is the fastest-growing software sub-segment with year-over-year growth of more than 63 percent. We help businesses automate repetitive tasks and enhance customer experience with AI-powered solutions.",
  icon: <Bot className="h-8 w-8 text-[#034F66]" />,
  features: [
    {
      title: "Process Automation",
      description: "Automate repetitive, rule-based business processes to increase efficiency and reduce errors.",
    },
    {
      title: "AI-Powered Chatbots",
      description: "Intelligent chatbots with natural language understanding for customer service and support.",
    },
    {
      title: "UiPath Integration",
      description: "Certified UiPath implementations for enterprise-grade automation solutions.",
    },
    {
      title: "No-Code Authoring Tools",
      description: "User-friendly tools that allow business users to create and modify automation workflows.",
    },
    {
      title: "Enterprise Scalability",
      description: "Scalable automation solutions designed for enterprise productivity needs.",
    },
    {
      title: "Multi-Channel Support",
      description: "Chatbots that work across multiple channels including web, mobile, and messaging platforms.",
    },
  ],
  benefits: [
    "Increased revenue & lower costs",
    "Improved user experience",
    "Boosted employee productivity",
    "Reduced time to market",
    "24/7 automated customer support",
    "Improved accuracy and compliance",
  ],
  process: [
    {
      step: "Process Analysis",
      description: "Identify and analyze processes suitable for automation",
    },
    {
      step: "Solution Design",
      description: "Design RPA workflows and chatbot conversation flows",
    },
    {
      step: "Development",
      description: "Build and configure automation bots and AI chatbots",
    },
    {
      step: "Testing",
      description: "Comprehensive testing in controlled environments",
    },
    {
      step: "Deployment",
      description: "Production deployment with monitoring and maintenance",
    },
  ],
}

export default function RPAAIChatbotPage() {
  return (
    <main className="min-h-screen pt-20">
      <ServiceHero {...rpaAiData} />
      <ServiceFeatures features={rpaAiData.features} />
      <ServiceBenefits benefits={rpaAiData.benefits} />
      <ServiceProcess process={rpaAiData.process} />
      <ServiceCTA service="RPA & AI Chatbot" />
    </main>
  )
}
