"use client"

import { ReactElement } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface IndustryCardProps {
  title: string
  description: string
  icon: ReactElement
  solutions: string[]
}

export function IndustryCard({ title, description, icon, solutions }: IndustryCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-[#80B6C1]/20 rounded-full flex items-center justify-center mx-auto mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl text-[#034F66]">{title}</CardTitle>
        <p className="text-[#569AA7] text-sm leading-relaxed">{description}</p>
      </CardHeader>
      <CardContent>
        <h4 className="font-semibold text-[#034F66] mb-3">Our Solutions:</h4>
        <div className="space-y-2">
          {solutions.map((solution, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#80B6C1] rounded-full"></div>
              <span className="text-[#569AA7] text-sm">{solution}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
