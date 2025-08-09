"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Scale, Heart, Zap } from "lucide-react"

const culturePoints = [
  {
    title: "Never-ending Learning Process",
    description:
      "As an organization that thrives on innovation, there is always something exciting to be abreast of. R&D activities that set us up for continuous development.",
    icon: BookOpen,
    color: "#80B6C1",
  },
  {
    title: "Work Life Balance",
    description:
      "In-spite of the lofty expectations we demand of our employees, we understand that productivity is connected to a balanced life. We are deliberate in creating a healthy work environment with flexibilities that our teams deserve.",
    icon: Scale,
    color: "#458496",
  },
  {
    title: "Work and Passion Go Hand-in-Hand",
    description: "We believe your best work is delivered when you are passionate about what you do.",
    icon: Heart,
    color: "#569AA7",
  },
  {
    title: "Working with the Latest Technology",
    description:
      "Innovation is the major reason we are in business – we are up to date with new technologies and how to convert them into practical advantages for our clients.",
    icon: Zap,
    color: "#034F66",
  },
]

export function CompanyCulture() {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-[#034F66] mb-4">Our Culture</h2>
        <p className="text-lg text-[#569AA7] max-w-3xl mx-auto">
          We believe in the power of individuals to form collaborative teams and networks.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {culturePoints.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full"
                    style={{ backgroundColor: `${point.color}20` }}
                  >
                    <point.icon className="h-6 w-6" style={{ color: point.color }} />
                  </div>
                  <CardTitle className="text-lg text-[#034F66]">{point.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[#569AA7] leading-relaxed">{point.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
