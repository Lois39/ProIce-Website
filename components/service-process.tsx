"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ProcessStep {
  step: string
  description: string
}

interface ServiceProcessProps {
  process: ProcessStep[]
}

export function ServiceProcess({ process }: ServiceProcessProps) {
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
          <h2 className="text-4xl font-bold text-[#034F66] mb-4">Our Process</h2>
          <p className="text-xl text-[#569AA7] max-w-3xl mx-auto">
            Our proven methodology ensures successful project delivery and client satisfaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="h-full text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#80B6C1] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg text-[#034F66]">{step.step}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#569AA7] text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>

              {/* Arrow connector for desktop */}
              {index < process.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-[#80B6C1]"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-[#80B6C1] border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
