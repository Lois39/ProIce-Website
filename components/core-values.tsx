"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Shield, Users, MessageCircle, Eye } from "lucide-react"

const values = [
  {
    title: "Truth",
    description: "We present thoughts and information exactly as they are",
    icon: Eye,
    color: "#80B6C1",
  },
  {
    title: "Responsibility",
    description: "We stand by what we believe to be fair",
    icon: Shield,
    color: "#458496",
  },
  {
    title: "Understanding",
    description: "We put ourselves in the situation of others to better experience how they feel",
    icon: Users,
    color: "#569AA7",
  },
  {
    title: "Sincerity",
    description: "We realistically interpret circumstances",
    icon: Heart,
    color: "#034F66",
  },
  {
    title: "Transparency",
    description: "We have nothing to hide",
    icon: MessageCircle,
    color: "#80B6C1",
  },
]

export function CoreValues() {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-[#034F66] mb-4">Our Core Values</h2>
        <p className="text-lg text-[#569AA7] max-w-3xl mx-auto">
          Innovation is driven when there is an alignment of vision and objectives – it is on this premise and
          philosophy that we engage our employees to deliver first class solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((value, index) => (
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
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3 mx-auto"
                  style={{ backgroundColor: `${value.color}20` }}
                >
                  <value.icon className="h-6 w-6" style={{ color: value.color }} />
                </div>
                <CardTitle className="text-xl text-[#034F66]">{value.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-[#569AA7] text-sm leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
