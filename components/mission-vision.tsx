"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye } from "lucide-react"

export function MissionVision() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="h-full bg-gradient-to-br from-[#80B6C1]/10 to-white border-[#80B6C1]/20">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#80B6C1]/20 mb-4 mx-auto">
                <Eye className="h-8 w-8 text-[#80B6C1]" />
              </div>
              <CardTitle className="text-2xl text-[#034F66]">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-[#569AA7] leading-relaxed">
                To be the most sought-after business enabler in Nigeria.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="h-full bg-gradient-to-br from-[#458496]/10 to-white border-[#458496]/20">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#458496]/20 mb-4 mx-auto">
                <Target className="h-8 w-8 text-[#458496]" />
              </div>
              <CardTitle className="text-2xl text-[#034F66]">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-[#569AA7] leading-relaxed">
                To surpass clients' expectation on every engagement.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
