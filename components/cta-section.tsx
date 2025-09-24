"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#80B6C1] to-[#458496]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Let's discuss how Pro-ICE can help accelerate your digital transformation and drive exceptional results for
            your organization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
           <a
  href="mailto:info@pro-ice.com.ng?subject=Business Inquiry&body=Hello Pro-ICE Team,%0D%0A%0D%0AI would like to discuss how Pro-ICE can help transform my business.%0D%0A%0D%0APlease contact me to schedule a consultation.%0D%0A%0D%0AThank you."
>
  <Button
    size="lg"
    className="bg-white text-[#80B6C1] hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
  >
    <Phone className="mr-2 h-5 w-5" /> Book a Free Consultation
  </Button>
</a>

            <Link href="/services">
  <Button
    variant="outline"
    size="lg"
    className="border-white text-white hover:bg-white hover:text-[#80B6C1] px-8 py-4 text-lg bg-transparent"
  >
    See How We Can Help You <ArrowRight className="ml-2 h-5 w-5" />
  </Button>
</Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
