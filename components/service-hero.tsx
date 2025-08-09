"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ReactElement } from "react"

interface ServiceHeroProps {
  title: string
  subtitle: string
  description: string
  icon: ReactElement
}

export function ServiceHero({ title, subtitle, description, icon }: ServiceHeroProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-[#80B6C1]/10 via-white to-[#569AA7]/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#80B6C1]/20 mb-6">
            {icon}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-[#034F66] mb-4">{title}</h1>
          <p className="text-2xl text-[#569AA7] mb-6 font-medium">{subtitle}</p>
          <p className="text-lg text-[#569AA7] mb-8 leading-relaxed max-w-3xl mx-auto">{description}</p>

          <Button
            size="lg"
            className="bg-[#80B6C1] hover:bg-[#458496] text-white px-8 py-4"
            onClick={() =>
              (window.location.href =
                "mailto:info@pro-ice.com.ng?subject=Service Inquiry - " +
                title +
                "&body=Hello Pro-ICE Team,%0D%0A%0D%0AI am interested in learning more about your " +
                title +
                " services.%0D%0A%0D%0APlease contact me to discuss my requirements.%0D%0A%0D%0AThank you.")
            }
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
