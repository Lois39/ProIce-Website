"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

interface ServiceCTAProps {
  service: string
}

export function ServiceCTA({ service }: ServiceCTAProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-[#80B6C1] to-[#458496]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our {service} solutions can transform your business operations and drive growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-[#80B6C1] hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              onClick={() =>
                (window.location.href =
                  "mailto:info@pro-ice.com.ng?subject=Service Inquiry - " +
                  service +
                  "&body=Hello Pro-ICE Team,%0D%0A%0D%0AI am interested in your " +
                  service +
                  " services and would like to schedule a consultation.%0D%0A%0D%0APlease contact me to discuss my requirements.%0D%0A%0D%0AThank you.")
              }
            >
              <Phone className="mr-2 h-5 w-5" /> Contact Us Today
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#80B6C1] px-8 py-4 text-lg bg-transparent"
            >
              View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
