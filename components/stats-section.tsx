"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedCounter } from "react-animated-counter"; // ensure this package is installed via pnpm
import Card from "./Cards";

const stats = [
  { value: 7, label: "Happy Clients", suffix: "" },
  { value: 7, label: "Years Active", suffix: "" },
  { value: 50, label: "Projects Completed", suffix: "+" },
  { value: 17, label: "Partners", suffix: "+" },
];

export function StatsSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Side - Intro + Stats */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-[#034F66] tracking-tighter sm:text-4xl md:text-5xl">
              Welcome to Pro-ICE Limited
            </h2>
            <p className="text-xl text-[#569AA7] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              At Pro-ICE, we help you bring your ideas to life—whether it’s a loan app,
              an insurance website, or a custom business platform. From secure Web & Mobile
              Development to cybersecurity, business operations support, and team training,
              we offer the right tools to meet your goals.
            </p>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 gap-8 text-center w-full">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center justify-center space-y-1"
                >
                  <span className="text-4xl font-bold text-primary flex items-center">
                    <h3 style={{ color: "#034F66", fontSize: "2.5rem", fontWeight: "bold" }}>
  {stat.value}
</h3>

                    {stat.suffix}
                  </span>
                  <p className="text-sm text-[#569AA7]">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <button className="text-[#034F66]">
              <Link href="/about">Learn More About Us</Link>
            </button>
          </div>

          {/* Right Side - Visual Card */}
          <div className="flex flex-col items-center justify-center gap-8">
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
}
