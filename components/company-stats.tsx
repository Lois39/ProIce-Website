"use client"

import { motion } from "framer-motion"

export function CompanyStats() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#80B6C1]/5 to-white rounded-lg">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-[#034F66] mb-4">Pro-ICE Ltd @ a Glance</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-[#80B6C1] mb-2">20+</div>
            <div className="text-[#569AA7] text-sm">Technology Product Partnerships</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-[#458496] mb-2">2018</div>
            <div className="text-[#569AA7] text-sm">Year Established</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-[#569AA7] mb-2">100%</div>
            <div className="text-[#569AA7] text-sm">Accuracy in Automation</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-[#034F66] mb-2">6+</div>
            <div className="text-[#569AA7] text-sm">Years of Excellence</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
