"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-[#034F66]">Let's Talk</CardTitle>
        <p className="text-[#569AA7]">
          Ready to transform your business? Send us a message and we'll get back to you within 24 hours.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#034F66] mb-2">
                Full Name *
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="border-[#80B6C1]/30 focus:border-[#80B6C1]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#034F66] mb-2">
                Email Address *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="border-[#80B6C1]/30 focus:border-[#80B6C1]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-[#034F66] mb-2">
              Company Name
            </label>
            <Input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              className="border-[#80B6C1]/30 focus:border-[#80B6C1]"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#034F66] mb-2">
              Message *
            </label>
            <Textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="border-[#80B6C1]/30 focus:border-[#80B6C1]"
              placeholder="Tell us about your project or how we can help..."
            />
          </div>

          <Button type="submit" className="w-full bg-[#80B6C1] hover:bg-[#458496] text-white">
            Send Message <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
