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

import { IndustryCard } from "@/components/industry-card"
import { Globe, Database, Cpu, Code, Shield, Cloud, Settings, Wifi, Phone } from "lucide-react" // added new icons

const industries = [
  {
    title: "Web Development",
    icon: <Globe className="h-8 w-8 text-[#034F66]" />,
    problem: "Ensuring trust and security between employers and workers while preventing fraudulent accounts.",
    solution: "Implemented robust KYC verification and blacklist features to verify identities and maintain platform integrity.",
    benefit: "Created a safe, credible environment that increased user trust and attracted more employers."
  },
  {
    title: "Financial Technology",
    icon: <Database className="h-8 w-8 text-[#034F66]" />,
    problem: "Delivering accurate credit score calculations quickly while protecting user privacy.",
    solution: "Optimized backend algorithms and secured API connections to process data efficiently without storing sensitive info.",
    benefit: "Provided fast, reliable insights that improved client credibility and customer retention."
  },
  {
    title: "Fintech & Payments",
    icon: <Cpu className="h-8 w-8 text-[#034F66]" />,
    problem: "Integrating multiple services like airtime purchase, wallet management, and estate payments into one app.",
    solution: "Developed a unified backend with secure APIs to handle all transactions efficiently in real time.",
    benefit: "Increased engagement by enabling customers to complete multiple transactions from one platform."
  },
  {
    title: "E-Learning Platforms",
    icon: <Code className="h-8 w-8 text-[#034F66]" />,
    problem: "Tracking student progress while enabling mentors to give real-time feedback.",
    solution: "Built interactive dashboards with automated notifications for students and mentors.",
    benefit: "Improved learning outcomes and mentor efficiency, attracting more institutions to the platform."
  },
  {
    title: "Cybersecurity",
    icon: <Shield className="h-8 w-8 text-[#034F66]" />,
    problem: "Risk of hacking, data theft, and cyber attacks.",
    solution: "Implement firewalls, encryption, and real-time threat monitoring.",
    benefit: "Protects sensitive data, builds customer trust, and ensures compliance."
  },
  {
    title: "Cloud Security Services",
    icon: <Cloud className="h-8 w-8 text-[#034F66]" />,
    problem: "Cloud data can be breached if not properly secured.",
    solution: "Apply advanced cloud security protocols and monitoring.",
    benefit: "Ensures safe, reliable, and cost-efficient cloud operations."
  },
  {
    title: "Managed IT Services",
    icon: <Settings className="h-8 w-8 text-[#034F66]" />,
    problem: "Technical issues disrupt daily operations.",
    solution: "Provide 24/7 IT monitoring and support.",
    benefit: "Reduces downtime and ensures smooth business operations."
  },
  {
    title: "Internet of Things (IoT)",
    icon: <Wifi className="h-8 w-8 text-[#034F66]" />,
    problem: "Lack of real-time data for decision-making.",
    solution: "Connect smart devices to gather and analyze data.",
    benefit: "Improves efficiency, cuts costs, and enables predictive maintenance."
  },
  {
    title: "Telecom Consulting",
    icon: <Phone className="h-8 w-8 text-[#034F66]" />,
    problem: "Poor communication systems slow down business operations.",
    solution: "Optimize telecom infrastructure and adopt modern communication tools.",
    benefit: "Improves team collaboration and customer communication."
  }
]

export default function IndustriesPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#034F66] mb-4">From Challenges to Scalable Solutions</h1>
          <p className="text-xl text-[#569AA7] max-w-3xl mx-auto">
            Turning complex problems into efficient, user-focused solutions delivering measurable results that help businesses grow, adapt, and thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl p-6 flex flex-col gap-4 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-4">
                {industry.icon}
                <h2 className="text-2xl font-bold text-[#034F66]">{industry.title}</h2>
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
