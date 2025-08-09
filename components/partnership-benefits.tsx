"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Globe, Users, Zap } from "lucide-react"

const benefits = [
  {
    title: "Global Expertise",
    description: "Access to world-class technology solutions and best practices from leading global partners.",
    icon: Globe,
    color: "#80B6C1",
  },
  {
    title: "Proven Solutions",
    description: "Battle-tested technologies and methodologies that have been successful across industries.",
    icon: CheckCircle,
    color: "#458496",
  },
  {
    title: "Collaborative Approach",
    description: "Joint delivery models that combine our local expertise with global partner capabilities.",
    icon: Users,
    color: "#569AA7",
  },
  {
    title: "Innovation Access",
    description: "Early access to cutting-edge technologies and emerging solutions from our partners.",
    icon: Zap,
    color: "#034F66",
  },
]

export function PartnershipBenefits() {
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
          <h2 className="text-4xl font-bold text-[#034F66] mb-4">Partnership Benefits</h2>
          <p className="text-xl text-[#569AA7] max-w-3xl mx-auto">
            Our strategic partnerships enable us to deliver superior value and innovation to our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto"
                    style={{ backgroundColor: `${benefit.color}20` }}
                  >
                    <benefit.icon className="h-8 w-8" style={{ color: benefit.color }} />
                  </div>
                  <CardTitle className="text-lg text-[#034F66]">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#569AA7] text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
