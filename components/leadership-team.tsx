// "use client"

// import { motion } from "framer-motion"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { User } from "lucide-react"

// const leaders = [
//   {
//     name: "Adekunle Bamidele",
//     title: "Chief Technology & Strategy Officer (CTSO)",
//     experience: "18+ years",
//     expertise: ["ICT", "Telecoms", "Consulting", "Education", "Regulatory"],
//     functionalExperience: [
//       "Project Management",
//       "Client & Vendor Management",
//       "Sales",
//       "Business Process Automation",
//       "Cloud",
//       "Cyber Security",
//     ],
//     description:
//       "Kunle leads technology and innovation delivery team for Pro-ICE. He is responsible for design, implementation and solution delivery/support for RPA, IoT, Network and Cybersecurity, Cloud, Smart Energy and Telecoms consulting services.",
//   },
//   {
//     name: "Aliu Ajao",
//     title: "Executive Director",
//     experience: "20+ years",
//     expertise: [
//       "IT Solutions Consulting",
//       "Human Resources Management",
//       "Business Process Consulting",
//       "Education",
//       "Client Relationship Management",
//     ],
//     functionalExperience: [
//       "Team Leadership and Strategic Planning",
//       "Project and Contract Management",
//       "Business Development",
//       "Sales Enablement",
//       "Business Process Automation",
//     ],
//     description:
//       "Aliu manages the public sector for Pro-ICE. He has a bachelor's degree in Sociology and a master's degree in Industrial and Labour Relations. He is a core Business Development and People Management professional.",
//   },
// ]

// const advisors = [
//   {
//     name: "Niyi Yusuf",
//     title: "Advisory Board Member",
//     description:
//       "President of Nigeria Economic Summit Group, Former MD of Accenture Nigeria, and Current MD of Veraki. Over 25 years of experience leading complex Technology Transformation projects.",
//   },
//   {
//     name: "Ayoh John",
//     title: "Advisory Board Member",
//     description:
//       "Over 30 years of experience in Banking and Telecommunication sector. Former Director of Technology at Central Bank of Nigeria and CIO/Acting CTO at Celtel.",
//   },
//   {
//     name: "Kayode Sani-Olodo",
//     title: "Non-Executive Director",
//     description:
//       "Investor and technical advisor with 18 years of experience working with GTB and as a consultant to AWS Global clients in Texas-USA.",
//   },
// ]

// export function LeadershipTeam() {
//   return (
    // <section className="py-16">
    //   <motion.div
    //     initial={{ opacity: 0, y: 30 }}
    //     whileInView={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.8 }}
    //     viewport={{ once: true }}
    //     className="text-center mb-12"
    //   >
    //     <h2 className="text-3xl font-bold text-[#034F66] mb-4">Our Management Team</h2>
    //     <p className="text-lg text-[#569AA7] max-w-3xl mx-auto">
    //       Experienced leaders driving innovation and excellence in technology solutions.
    //     </p>
    //   </motion.div>

    //   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
    //     {leaders.map((leader, index) => (
    //       <motion.div
    //         key={index}
    //         initial={{ opacity: 0, y: 30 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8, delay: index * 0.1 }}
    //         viewport={{ once: true }}
    //       >
    //         <Card className="h-full">
    //           <CardHeader>
    //             <div className="flex items-start space-x-4">
    //               <div className="w-16 h-16 bg-[#80B6C1]/20 rounded-full flex items-center justify-center flex-shrink-0">
    //                 <User className="h-8 w-8 text-[#80B6C1]" />
    //               </div>
    //               <div>
    //                 <CardTitle className="text-xl text-[#034F66]">{leader.name}</CardTitle>
    //                 <p className="text-[#569AA7] font-medium">{leader.title}</p>
    //                 <Badge variant="outline" className="mt-2 border-[#80B6C1] text-[#80B6C1]">
    //                   {leader.experience} Experience
    //                 </Badge>
    //               </div>
    //             </div>
    //           </CardHeader>
    //           <CardContent className="space-y-4">
    //             <p className="text-[#569AA7] text-sm leading-relaxed">{leader.description}</p>

    //             <div>
    //               <h4 className="font-semibold text-[#034F66] mb-2">Industry Expertise:</h4>
    //               <div className="flex flex-wrap gap-2">
    //                 {leader.expertise.map((skill, skillIndex) => (
    //                   <Badge key={skillIndex} variant="secondary" className="text-xs">
    //                     {skill}
    //                   </Badge>
    //                 ))}
    //               </div>
    //             </div>

    //             <div>
    //               <h4 className="font-semibold text-[#034F66] mb-2">Functional Experience:</h4>
    //               <div className="flex flex-wrap gap-2">
    //                 {leader.functionalExperience.map((exp, expIndex) => (
    //                   <Badge key={expIndex} variant="outline" className="text-xs border-[#569AA7] text-[#569AA7]">
    //                     {exp}
    //                   </Badge>
    //                 ))}
    //               </div>
    //             </div>
    //           </CardContent>
    //         </Card>
    //       </motion.div>
    //     ))}
    //   </div>

    //   <motion.div
    //     initial={{ opacity: 0, y: 30 }}
    //     whileInView={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.8 }}
    //     viewport={{ once: true }}
    //     className="text-center mb-8"
    //   >
//         <h3 className="text-2xl font-bold text-[#034F66] mb-4">Our Advisory Board</h3>
//       </motion.div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {advisors.map((advisor, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: index * 0.1 }}
//             viewport={{ once: true }}
//           >
//             <Card className="h-full">
//               <CardHeader className="text-center">
//                 <div className="w-12 h-12 bg-[#458496]/20 rounded-full flex items-center justify-center mx-auto mb-3">
//                   <User className="h-6 w-6 text-[#458496]" />
//                 </div>
//                 <CardTitle className="text-lg text-[#034F66]">{advisor.name}</CardTitle>
//                 <p className="text-[#569AA7] text-sm font-medium">{advisor.title}</p>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-[#569AA7] text-sm leading-relaxed text-center">{advisor.description}</p>
//               </CardContent>
//             </Card>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   )
// }


"use client";
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User } from "lucide-react"
const leaders = [
  {
    name: "Adekunle Bamidele",
    title: "Chief Technology & Strategy Officer (CTSO)",
    experience: "18+ years",
    expertise: ["ICT", "Telecoms", "Consulting", "Education", "Regulatory"],
    functionalExperience: [
      "Project Management",
      "Client & Vendor Management",
      "Sales",
      "Business Process Automation",
      "Cloud",
      "Cyber Security",
    ],
    description:
      "Kunle leads technology and innovation delivery team for Pro-ICE. He is responsible for design, implementation and solution delivery/support for RPA, IoT, Network and Cybersecurity, Cloud, Smart Energy and Telecoms consulting services.",
  },
  {
    name: "Aliu Ajao",
    title: "Executive Director",
    experience: "20+ years",
    expertise: [
      "IT Solutions Consulting",
      "Human Resources Management",
      "Business Process Consulting",
      "Education",
      "Client Relationship Management",
    ],
    functionalExperience: [
      "Team Leadership and Strategic Planning",
      "Project and Contract Management",
      "Business Development",
      "Sales Enablement",
      "Business Process Automation",
    ],
    description:
      "Aliu manages the public sector for Pro-ICE. He has a bachelor's degree in Sociology and a master's degree in Industrial and Labour Relations. He is a core Business Development and People Management professional.",
  },
]
const timelineData = [
  {
    id: "1",
    title: "Consultation",
    description: "Understanding client needs and project goals.",
  },
  {
    id: "2",
    title: "Planning",
    description: "Designing and building tailored solutions.",
  },
  {
    id: "3",
    title: "Optimization",
    description: "Ensuring functionality, security, and performance.",
  },
  {
    id: "4",
    title: "Deployment",
    description: "Launching with ongoing maintenance and support.",
  },
];

// Change this to a named export to match how it's imported in AboutPage
export function LeadershipTeam({ className = "" }) {
  return (
    <section>
     <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-[#034F66] mb-4">Our Management Team</h2>
        <p className="text-lg text-[#569AA7] max-w-3xl mx-auto">
          Experienced leaders driving innovation and excellence in technology solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {leaders.map((leader, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-[#80B6C1]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="h-8 w-8 text-[#80B6C1]" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-[#034F66]">{leader.name}</CardTitle>
                    <p className="text-[#569AA7] font-medium">{leader.title}</p>
                    <Badge variant="outline" className="mt-2 border-[#80B6C1] text-[#80B6C1]">
                      {leader.experience} Experience
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-[#569AA7] text-sm leading-relaxed">{leader.description}</p>

                <div>
                  <h4 className="font-semibold text-[#034F66] mb-2">Industry Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-[#034F66] mb-2">Functional Experience:</h4>
                  <div className="flex flex-wrap gap-2">
                    {leader.functionalExperience.map((exp, expIndex) => (
                      <Badge key={expIndex} variant="outline" className="text-xs border-[#569AA7] text-[#569AA7]">
                        {exp}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      </section>
    <section className={`py-16 px-4 md:px-10 bg-white ${className}`}>
      {/* Section Heading */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:text-4xl text-3xl text-[#034F66] font-bold tracking-tighter"
        >
          How We Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[#569AA7] mt-4 text-base md:text-lg"
        >
          From consultation to deployment — we're with you every step of the way.
        </motion.p>
      </div>

      {/* Timeline Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {timelineData.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative bg-white border-2 border-gray-200 rounded-xl p-6 shadow text-center"
          >
            {/* Progress Dot */}
            <div className="flex justify-center mb-4">
              <div className="w-4 h-4 bg-blue-600 rounded-full relative">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-blue-200 animate-ping" />
              </div>
            </div>

            <h4 className="text-xl font-semibold text-[#034F66] tracking-tighter mb-2">{step.title}</h4>
            <p className="text-[#569AA7] text-sm">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
    </section>
  );
}

// Also add this for backward compatibility
export default LeadershipTeam;

