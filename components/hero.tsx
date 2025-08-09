"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/small.mp4" type="video/mp4" />
          {/* Fallback gradient background */}
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#80B6C1]/80 via-[#034F66]/60 to-[#458496]/80"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              People. <span className="text-white">Technology.</span>{" "}
              <span className="text-white">Performance.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            End-to-end Business Solutions and Technology Company, supporting businesses in their digital initiatives
            with rapid acceleration and workplace productivity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              size="lg"
              className="bg-[#80B6C1] hover:bg-[#458496] text-white px-8 py-4 text-lg"
              onClick={() =>
                (window.location.href =
                  "mailto:info@pro-ice.com.ng?subject=Business Inquiry&body=Hello Pro-ICE Team,%0D%0A%0D%0AI would like to discuss how Pro-ICE can help transform my business.%0D%0A%0D%0APlease contact me to schedule a consultation.%0D%0A%0D%0AThank you.")
              }
            >
              Talk to Us <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#80B6C1] px-8 py-4 text-lg bg-transparent"
            >
              <Play className="mr-2 h-5 w-5" /> Explore Services
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <div className="text-3xl font-bold text-white">20+</div>
              <div className="text-white/80">Local Resources</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">27+</div>
              <div className="text-white/80">Enterprise Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">10+</div>
              <div className="text-white/80">University Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">2</div>
              <div className="text-white/80">Office Locations</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section>
  )
}
