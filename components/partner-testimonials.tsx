"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Pro-ICE has been an exceptional partner in delivering UiPath automation solutions across Nigeria. Their technical expertise and client-focused approach make them a valuable alliance partner.",
    partner: "UiPath Alliance Program",
    role: "Technology Partner",
  },
  {
    quote:
      "The collaboration with Pro-ICE has enabled us to extend our cybersecurity solutions to the Nigerian market with confidence, knowing they have the expertise to deliver quality implementations.",
    partner: "Cyberteq Partnership",
    role: "Security Solutions Partner",
  },
  {
    quote:
      "Pro-ICE's deep understanding of IoT implementations and their ability to translate complex technology into business value makes them an ideal partner for our FirstPoint solutions.",
    partner: "FirstPoint Alliance",
    role: "IoT Solutions Partner",
  },
]

export function PartnerTestimonials() {
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
          <h2 className="text-4xl font-bold text-[#034F66] mb-4">What Our Partners Say</h2>
          <p className="text-xl text-[#569AA7] max-w-3xl mx-auto">
            Hear from our technology partners about our collaboration and joint success stories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-[#80B6C1] mb-4" />
                  <p className="text-[#569AA7] mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold text-[#034F66]">{testimonial.partner}</div>
                    <div className="text-[#80B6C1] text-sm">{testimonial.role}</div>
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
