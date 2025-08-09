"use client"

import { motion } from "framer-motion"
import { Building2, Users, Award, MapPin } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: "20+",
    label: "Local Resources as Pro-ICE Employees",
    color: "#80B6C1",
  },
  {
    icon: Building2,
    number: "27+",
    label: "Enterprise Customers",
    color: "#458496",
  },
  {
    icon: Award,
    number: "10+",
    label: "Universities UiPath Alliance Partners",
    color: "#569AA7",
  },
  {
    icon: MapPin,
    number: "2",
    label: "Offices in Nigeria (Lagos and Abuja)",
    color: "#034F66",
  },
]

export function StatsSection() {
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
          <h2 className="text-4xl font-bold text-[#034F66] mb-4">Pro-ICE Ltd @ a Glance</h2>
          <p className="text-xl text-[#569AA7] max-w-3xl mx-auto">
            Established in 2018, we've grown to become a trusted technology partner for businesses across Nigeria and
            beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                style={{ backgroundColor: `${stat.color}20` }}
              >
                <stat.icon className="h-8 w-8" style={{ color: stat.color }} />
              </div>
              <div className="text-4xl font-bold mb-2" style={{ color: stat.color }}>
                {stat.number}
              </div>
              <div className="text-[#569AA7] text-sm leading-relaxed">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
