import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatures } from "@/components/service-features"
import { ServiceBenefits } from "@/components/service-benefits"
import { ServiceProcess } from "@/components/service-process"
import { ServiceCTA } from "@/components/service-cta"
import { Database } from "lucide-react"

const sharepointData = {
  title: "SharePoint & EDMS",
  subtitle: "Enterprise Document Management & Collaboration Solutions",
  description:
    "We help organizations leverage and optimize the use of their Microsoft licenses for Enterprise Automation and secured Electronic Document Management System.",
  icon: <Database className="h-8 w-8 text-[#034F66]" />,
  features: [
    {
      title: "Intranet on SharePoint",
      description:
        "Custom intranet solutions built on SharePoint for seamless internal communication and collaboration.",
    },
    {
      title: "Data Migration",
      description: "Secure and efficient migration of existing documents and data to SharePoint platform.",
    },
    {
      title: "Hybrid Design Implementation",
      description: "Flexible hybrid solutions that work both on-premises and in the cloud.",
    },
    {
      title: "Business Process Automation",
      description: "Automated workflows that streamline business processes and improve efficiency.",
    },
    {
      title: "Electronic Document Management",
      description: "Comprehensive EDMS solutions for secure document storage, retrieval, and management.",
    },
    {
      title: "Workflows & Approvals",
      description: "Custom workflow solutions for document approvals and business process management.",
    },
  ],
  benefits: [
    "Improved collaboration and communication",
    "Enhanced document security and compliance",
    "Streamlined business processes",
    "Reduced operational costs",
    "Better information governance",
    "Increased productivity and efficiency",
  ],
  process: [
    {
      step: "Assessment",
      description: "Analyze current document management processes and requirements",
    },
    {
      step: "Design",
      description: "Create custom SharePoint architecture and EDMS design",
    },
    {
      step: "Implementation",
      description: "Deploy SharePoint solutions and migrate existing data",
    },
    {
      step: "Training",
      description: "Comprehensive user training and change management",
    },
    {
      step: "Support",
      description: "Ongoing maintenance and support services",
    },
  ],
}

export default function SharePointEDMSPage() {
  return (
    <main className="min-h-screen pt-20">
      <ServiceHero {...sharepointData} />
      <ServiceFeatures features={sharepointData.features} />
      <ServiceBenefits benefits={sharepointData.benefits} />
      <ServiceProcess process={sharepointData.process} />
      <ServiceCTA service="SharePoint & EDMS" />
    </main>
  )
}
