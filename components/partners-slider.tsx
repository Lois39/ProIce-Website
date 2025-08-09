"use client"

import { motion } from "framer-motion"

const partners = [
  {
    name: "UiPath",
    logo: "/images/partners/uipath.png",
  },
  {
    name: "Microsoft",
    logo: "/images/partners/microsoft.png",
  },
  {
    name: "Senhasegura",
    logo: "/images/partners/senhasegura.png",
  },
  {
    name: "FirstPoint",
    logo: "/images/partners/firstpoint.png",
  },
  {
    name: "Datora SA",
    logo: "/images/partners/datora.png",
  },
  {
    name: "Shelt",
    logo: "/images/partners/shelt.png",
  },
  {
    name: "Novigo",
    logo: "/images/partners/novigo.png",
  },
  {
    name: "Druid AI",
    logo: "/images/partners/druid.png",
  },
  {
    name: "NITDA",
    logo: "/images/partners/NITDA.png",
  },
  {
    name: "Amazon Web Services",
    logo: "/images/partners/amazon.png",
  },
  {
    name: "IBM",
    logo: "/images/partners/ibm.png",
  },
  {
    name: "Sophos",
    logo: "/images/partners/sophos.png",
  },
];

export function PartnersSlider() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#034F66] mb-4">Our Partners</h2>
          <p className="text-lg text-[#569AA7] max-w-3xl mx-auto">
            Together with our in-house skilled resources, we collaborate with Global Partners and leverage best-in-class
            Technology Solutions to deliver exceptional services to our clients.
          </p>
        </motion.div>

        <div className="overflow-hidden">
          <motion.div
            animate={{ x: [0, -100 * partners.length] }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex space-x-16 whitespace-nowrap"
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
