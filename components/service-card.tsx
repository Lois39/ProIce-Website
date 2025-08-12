"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ReactElement } from "react"

interface ServiceCardProps {
  title: string
  description: string
  icon: ReactElement
  features: string[]
  useCases: string
  link: string
}

export function ServiceCard({ title, description, icon, features, useCases, link }: ServiceCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow flex flex-col">
      <CardHeader>
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-[#80B6C1]/20 rounded-lg flex items-center justify-center">
            {icon}
          </div>
          <CardTitle className="text-xl text-[#034F66]">{title}</CardTitle>
        </div>
        <p className="text-[#569AA7] leading-relaxed">{description}</p>
      </CardHeader>
      <CardContent className="space-y-6 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="font-semibold text-[#034F66] mb-3">Key Features:</h4>
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#80B6C1] rounded-full"></div>
                <span className="text-[#569AA7] text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-[#034F66] mb-2">Use Cases:</h4>
          <p className="text-[#569AA7] text-sm mb-4">{useCases}</p>

          <Link href={link}>
            <Button className="bg-[#80B6C1] hover:bg-[#458496] text-white w-fit">
              Learn More
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
