"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Cloud, Shield, Smartphone, Wifi, Database } from "lucide-react"

const partnerCategories = [
  {
    title: "Automation & AI Partners",
    partners: [
      { name: "UiPath", logo: "/images/partners/uipath.png" },
      { name: "Druid AI", logo: "/images/partners/druid.png" },
      { name: "Microsoft", logo: "/images/partners/microsoft.png" },
    ],
    description: "Leading RPA and AI technology providers enabling intelligent automation solutions.",
    icon: Bot,
    color: "#80B6C1",
  },
  {
    title: "Cloud & Infrastructure",
    partners: [
      { name: "Microsoft Azure", logo: "/images/partners/microsoft.png" },
      { name: "AWS", logo: "/images/partners/NITDA.png" },
      { name: "Datora SA", logo: "/images/partners/datora.png" },
    ],
    description: "Cloud platform partners providing scalable infrastructure and services.",
    icon: Cloud,
    color: "#458496",
  },
  {
    title: "Cybersecurity Partners",
    partners: [
      { name: "Cyberteq", logo: "/images/partners/senhasegura.png" },
      { name: "Microsoft Security", logo: "/images/partners/microsoft.png" },
    ],
    description: "Security specialists ensuring comprehensive protection for our clients.",
    icon: Shield,
    color: "#569AA7",
  },
  {
    title: "IoT & Connectivity",
    partners: [
      { name: "FirstPoint", logo: "/images/partners/firstpoint.png" },
      { name: "Mage-network", logo: "/images/partners/shelt.png" },
    ],
    description: "IoT and network connectivity partners for smart solutions.",
    icon: Wifi,
    color: "#034F66",
  },
  {
    title: "Development Partners",
    partners: [
      { name: "Novigo", logo: "/images/partners/novigo.png" },
      { name: "Microsoft", logo: "/images/partners/microsoft.png" },
    ],
    description: "Technology partners for custom development and integration solutions.",
    icon: Smartphone,
    color: "#80B6C1",
  },
  {
    title: "Enterprise Solutions",
    partners: [
      { name: "Microsoft", logo: "/images/partners/microsoft.png" },
      { name: "SharePoint", logo: "/images/partners/amazon.png" },
    ],
    description: "Enterprise platform partners for business productivity solutions.",
    icon: Database,
    color: "#458496",
  },
]

export function PartnerCategories() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#034F66] mb-4">Partner Categories</h2>
          <p className="text-xl text-[#569AA7] max-w-3xl mx-auto">
            Our strategic partnerships span across various technology domains to provide comprehensive solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partnerCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    <category.icon className="h-8 w-8" style={{ color: category.color }} />
                  </div>
                  <CardTitle className="text-xl text-[#034F66]">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-[#569AA7] text-sm leading-relaxed">{category.description}</p>
                  <div className="space-y-2">
                  <div className="flex justify-center flex-wrap gap-3">
  {category.partners.map((partner, partnerIndex) => (
    <img
      key={partnerIndex}
      src={partner.logo}
      alt={`${partner.name} logo`}
      title={partner.name}
      className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
    />
  ))}
</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
