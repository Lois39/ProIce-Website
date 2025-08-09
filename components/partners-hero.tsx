"use client"

import { motion } from "framer-motion"

export function PartnersHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#80B6C1]/10 via-white to-[#569AA7]/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#034F66] mb-6">Our Global Partners</h1>
          <p className="text-xl text-[#569AA7] mb-8 leading-relaxed">
            Together with our in-house skilled resources, we collaborate with Global Partners and leverage best-in-class
            Technology Solutions to deliver exceptional services to our clients.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#80B6C1]">20+</div>
              <div className="text-[#569AA7]">Technology Partnerships</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#458496]">10+</div>
              <div className="text-[#569AA7]">University Alliances</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#569AA7]">Global</div>
              <div className="text-[#569AA7]">Reach & Expertise</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#034F66]">6+</div>
              <div className="text-[#569AA7]">Years of Partnerships</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
