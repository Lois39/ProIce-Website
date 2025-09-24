// import { IndustryCard } from "@/components/industry-card"function IndustryCard({ title, description, icon, problem, solution, benefit }) {
// import { Building2, GraduationCap, Heart, Landmark, Radio, Smartphone } from "lucide-react"

// const industries = [
//   {
//     title: "Education",
//     description:
//       "Empowering educational institutions with modern technology solutions for enhanced learning experiences.",
//    icon: <GraduationCap className="h-8 w-8 text-[#034F66]" />,
//     solutions: [
//       "Learning Management Systems",
//       "Student Information Systems",
//       "Campus Automation",
//       "Digital Libraries",
//       "Online Assessment Platforms",
//     ],
//   },
//   {
//     title: "Telecommunications",
//     description: "Supporting telecom operators with network optimization and infrastructure solutions.",
//     icon: <Radio className="h-8 w-8 text-[#034F66]" />,
//     solutions: [
//       "Network Quality Optimization",
//       "Spectrum Management",
//       "Infrastructure Monitoring",
//       "Service Quality Assurance",
//       "Regulatory Compliance",
//     ],
//   },
//   {
//     title: "Government",
//     description: "Digital transformation solutions for public sector efficiency and citizen services.",
//     icon: <Landmark className="h-8 w-8 text-[#034F66]" />,
//     solutions: [
//       "E-Government Platforms",
//       "Document Management",
//       "Citizen Service Portals",
//       "Process Automation",
//       "Data Security & Compliance",
//     ],
//   },
//   {
//     title: "Finance",
//     description: "Secure and compliant technology solutions for financial institutions.",
//     icon: <Building2 className="h-8 w-8 text-[#034F66]" />,
//     solutions: [
//       "Core Banking Systems",
//       "Payment Processing",
//       "Risk Management",
//       "Regulatory Reporting",
//       "Cybersecurity Solutions",
//     ],
//   },
//   {
//     title: "Healthcare",
//     description: "Healthcare technology solutions for improved patient care and operational efficiency.",
//     icon: <Heart className="h-8 w-8 text-[#034F66]" />,
//     solutions: [
//       "Electronic Health Records",
//       "Telemedicine Platforms",
//       "Medical Device Integration",
//       "Healthcare Analytics",
//       "Compliance Management",
//     ],
//   },
//   {
//     title: "Technology",
//     description: "Supporting tech companies with scalable infrastructure and development solutions.",
//     icon: <Smartphone className="h-8 w-8 text-[#034F66]" />,
//     solutions: [
//       "Cloud Infrastructure",
//       "DevOps Solutions",
//       "API Development",
//       "Mobile Applications",
//       "System Integration",
//     ],
//   },
// ]

// export default function IndustriesPage() {
//   return (
//     <main className="min-h-screen pt-20">
//       <div className="container mx-auto px-4 py-16">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-[#034F66] mb-4">Industries We Serve</h1>
//           <p className="text-xl text-[#569AA7] max-w-3xl mx-auto">
//             Delivering specialized technology solutions across diverse industries with deep domain expertise and proven
//             results.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {industries.map((industry, index) => (
//             <IndustryCard key={index} {...industry} />
//           ))}
//         </div>
//       </div>
//     </main>
//   )
// }

import Link from "next/link"
import { Globe, Database, Cpu, Code, Shield, Cloud, Settings, Wifi, Phone } from "lucide-react"

const industries = [
  {
    title: "Financial Services & Banking",
    link: "/services/cybersecurity",
    icon: <Globe className="h-8 w-8 text-[#034F66]" />,
    problem: "Rising cyber fraud, compliance requirements, digital customer expectations.",
    solution: "Core banking security, fraud monitoring, regulatory compliance dashboards, secure transactions.",
    benefit: " Enhanced trust, fraud reduction, regulatory alignment, stronger customer retention."
  },
  {
    title: "Healthcare / HealthTech",
    link: "/services/cloud-services",
    icon: <Database className="h-8 w-8 text-[#034F66]" />,
    problem: "Data breaches, lack of integration, patient confidentiality risks.",
    solution: "Encrypted health record systems, telemedicine platforms, compliance (HIPAA, NDPR).",
    benefit: " Safer patient care, reliable data access, reduced operational errors."
  },
  {
    title: "Education & EdTech",
    link: "/services/web-mobile-development",
    icon: <Cpu className="h-8 w-8 text-[#034F66]" />,
    problem: "Outdated learning platforms, limited digital security for students, fragmented tools.",
    solution: "Secure LMS platforms, student data protection, cloud-based collaboration.",
    benefit: "Engaged learners, scalable remote education, trusted student data environments."
  },
  {
    title: "Energy & Utilities",
    link: "/services/cybersecurity",
    icon: <Code className="h-8 w-8 text-[#034F66]" />,
    problem: "SCADA/OT system vulnerabilities, downtime risks, rising cyberattacks.",
    solution: "ndustrial control cybersecurity, predictive maintenance dashboards, secure IoT for utilities.",
    benefit: " Improved uptime, resilience against attacks, cost savings, regulatory compliance."
  },
  {
    title: "Government / Public Sector",
    link: "/services/telecom-consulting",
    icon: <Shield className="h-8 w-8 text-[#034F66]" />,
    problem: "Legacy systems & weak cybersecurity posture",
    solution: "IT modernization, zero-trust frameworks, cybersecurity awareness training.",
    benefit: "Stronger data protection, more efficient services, increased public trust."
  },
  // {
  //   title: "Retail & E-Commerce",
  //   link: "/services/web-mobile-development",
  //   icon: <Cloud className="h-8 w-8 text-[#034F66]" />,
  //   problem: "Payment fraud & unstable online platforms.",
  //   solution: "Secure payment gateways, scalable mobile/web apps, cybersecurity monitoring.",
  //   benefit: "Increased sales reliability, customer confidence, and smoother shopping experiences."
  // },
  {
    title: "Manufacturing & Industrial",
    link: "/services/rpa-ai-chatbot",
    icon: <Settings className="h-8 w-8 text-[#034F66]" />,
    problem: "IoT device vulnerabilities, supply chain risks, production downtime.",
    solution: "Endpoint monitoring, digital twin simulations, AI-driven predictive maintenance.",
    benefit: "Stronger supply chain, higher productivity, lower downtime costs."
  },
  // {
  //   title: "Logistics & Transportation",
  //   link: "/services/internet-of-things",
  //   icon: <Wifi className="h-8 w-8 text-[#034F66]" />,
  //   problem: "Tracking inefficiencies & weak data protection.",
  //   solution: "GPS-enabled fleet management, secure mobile apps, real-time dashboards.",
  //   benefit: "Reduced delays, optimized delivery operations, and customer transparency."
  // },
  // {
  //   title: "Real Estate & Construction",
  //   link: "/services/web-mobile-development",
  //   icon: <Phone className="h-8 w-8 text-[#034F66]" />,
  //   problem: "Data silos, poor project coordination, and cyber risks.",
  //   solution: "Centralized project management software, secure document storage, cloud access.",
  //   benefit: "Better collaboration, reduced delays, and secure handling of sensitive contracts."
  // }
]

export default function IndustriesPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#034F66] mb-4">How Pro-ICE Powers Sector-Focused Solutions</h1>
          <p className="text-xl text-[#569AA7] max-w-3xl mx-auto">
          6 Strategic Use Cases Powered by Pro-ICE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl p-6 flex flex-col gap-4 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-4">
                {industry.icon}
                <Link href={industry.link}>
                  <h2 className="text-2xl font-bold text-[#034F66] hover:text-[#569AA7] transition-colors">
                    {industry.title}
                  </h2>
                </Link>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg text-[#034F66]">Problem</h3>
                <p className="text-[#569AA7]">{industry.problem}</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg text-[#034F66]">Solution</h3>
                <p className="text-[#569AA7]">{industry.solution}</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg text-[#034F66]">Benefit</h3>
                <p className="text-[#569AA7]">{industry.benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
