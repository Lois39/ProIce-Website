// "use client"

// import { motion } from "framer-motion"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { ArrowRight, Bot, Cloud, Database, Globe, Lock, Smartphone, Wifi } from "lucide-react"
// import Link from "next/link"

// const services = [
//   {
//     title: "SharePoint & EDMS",
//     description: "Enterprise Document Management and collaboration solutions",
//     icon: Database,
//     color: "#80B6C1",
//   },
//   {
//     title: "Web & Mobile Development",
//     description: "Custom applications designed for your business needs",
//     icon: Smartphone,
//     color: "#458496",
//   },
//   {
//     title: "RPA & AI Chatbot",
//     description: "Automate processes and enhance customer experience",
//     icon: Bot,
//     color: "#569AA7",
//   },
//   {
//     title: "Cybersecurity Solutions",
//     description: "Comprehensive security for your digital assets",
//     icon: Lock,
//     color: "#034F66",
//   },
//   {
//     title: "Cloud Services",
//     description: "Scalable cloud infrastructure and solutions",
//     icon: Cloud,
//     color: "#80B6C1",
//   },
//   {
//     title: "Internet of Things",
//     description: "Connected devices and smart solutions",
//     icon: Wifi,
//     color: "#458496",
//   },
//   {
//     title: "Telecom Consulting",
//     description: "Expert consulting for telecommunications infrastructure",
//     icon: Globe,
//     color: "#569AA7",
//   },
// ]

// export function ServicesOverview() {
//   return (
//     <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-bold text-[#034F66] mb-4">Our Technology Services</h2>
//           <p className="text-xl text-[#569AA7] max-w-3xl mx-auto">
//             Comprehensive solutions designed to accelerate your business processes and drive digital transformation.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <Card className="h-full hover:shadow-lg transition-shadow border-0 bg-white">
//                 <CardHeader className="text-center pb-4">
//                   <div
//                     className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto"
//                     style={{ backgroundColor: `${service.color}20` }}
//                   >
//                     <service.icon className="h-8 w-8" style={{ color: service.color }} />
//                   </div>
//                   <CardTitle className="text-xl text-[#034F66]">{service.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent className="text-center">
//                   <CardDescription className="text-[#569AA7] mb-4">{service.description}</CardDescription>
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     className="border-[#80B6C1] text-[#80B6C1] hover:bg-[#80B6C1] hover:text-white bg-transparent"
//                   >
//                     Learn More <ArrowRight className="ml-2 h-4 w-4" />
//                   </Button>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <Link href="/services">
//             <Button size="lg" className="bg-[#80B6C1] hover:bg-[#458496] text-white px-8 py-4">
//               Explore All Services <ArrowRight className="ml-2 h-5 w-5" />
//             </Button>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, Database, Lock, Smartphone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    title: "SharePoint & EDMS",
    description: "Enterprise Document Management and collaboration solutions",
    icon: Database,
    color: "#80B6C1",
  },
  {
    title: "Web & Mobile Development",
    description: "Custom applications designed for your business needs",
    icon: Smartphone,
    color: "#458496",
  },
  {
    title: "RPA & AI Chatbot",
    description: "Automate processes and enhance customer experience",
    icon: Bot,
    color: "#569AA7",
  },
  {
    title: "Cybersecurity Solutions",
    description: "Comprehensive security for your digital assets",
    icon: Lock,
    color: "#034F66",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#034F66] mb-4">Our Featured Services</h2>
          <p className="text-xl text-[#569AA7] max-w-3xl mx-auto">
            We offer a wide range of IT services to empower your business. Here's a glimpse of what we do.
          </p>
        </motion.div>

        {/* Services grid with center image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left column services */}
          <div className="flex flex-col gap-8">
            {services.slice(0, 2).map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center md:text-right"
              >
               <div
  className="flex items-center justify-center h-16 rounded-full mb-4"
  style={{ backgroundColor: `${service.color}20` }}
>
  <service.icon className="h-8 w-8" style={{ color: service.color }} />
</div>

                <h3 className="text-xl font-bold text-[#034F66] text-center">{service.title}</h3>
                <p className="text-[#569AA7] text-center">{service.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Center image */}
          <div className="flex justify-center">
            <Image
              src="/pie.png" // <-- replace with your image path
              alt="Service Illustration"
              width={300}
              height={300}
              className="max-w-full h-auto"
            />
          </div>

          {/* Right column services */}
          <div className="flex flex-col gap-8">
            {services.slice(2, 4).map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center md:text-left"
              >
                <div
  className="flex items-center justify-center h-16 rounded-full mb-4"
  style={{ backgroundColor: `${service.color}20` }}
>
  <service.icon className="h-8 w-8" style={{ color: service.color }} />
</div>

                <h3 className="text-xl font-bold text-[#034F66] text-center">{service.title}</h3>
                <p className="text-[#569AA7] text-center">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/services">
            <Button size="lg" className="bg-[#80B6C1] hover:bg-[#458496] text-white px-8 py-4">
              View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
