"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#80B6C1]/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Pro-ICE Limited" width={80} height={80} className="w-100 h-100" />
            <div className="hidden sm:block">
              <div className="text-[#034F66] font-bold text-xl">Pro-ICE Limited</div>
              <div className="text-[#569AA7] text-sm">People • Technology • Performance</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-[#034F66] hover:text-[#80B6C1] transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-[#034F66] hover:text-[#80B6C1] transition-colors">
              About Us
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-[#034F66] hover:text-[#80B6C1] transition-colors">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/services">All Services</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/sharepoint-edms">SharePoint & EDMS</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/web-mobile-development">Web & Mobile Development</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/rpa-ai-chatbot">RPA & AI Chatbot</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/cybersecurity">Cybersecurity Solutions</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/cloud-services">Cloud Services</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/internet-of-things">Internet of Things</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/telecom-consulting">Telecom Consulting</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/industries" className="text-[#034F66] hover:text-[#80B6C1] transition-colors">
            Use Cases
            </Link>
            <Link href="/career" className="text-[#034F66] hover:text-[#80B6C1] transition-colors">
              Careers
            </Link>
            <Link href="/contact" className="text-[#034F66] hover:text-[#80B6C1] transition-colors">
              Contact
            </Link>
            <Button
              className="bg-[#80B6C1] hover:bg-[#458496] text-white"
              onClick={() =>
                (window.location.href =
                  "mailto:info@pro-ice.com.ng?subject=Business Inquiry&body=Hello Pro-ICE Team,%0D%0A%0D%0AI would like to discuss how Pro-ICE can help transform my business.%0D%0A%0D%0APlease contact me to schedule a consultation.%0D%0A%0D%0AThank you.")
              }
            >
              Talk to an Expert
            </Button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-[#034F66]">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-[#80B6C1]/20">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-[#034F66] hover:text-[#80B6C1] transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-[#034F66] hover:text-[#80B6C1] transition-colors">
                About Us
              </Link>
              <Link href="/services" className="text-[#034F66] hover:text-[#80B6C1] transition-colors">
                Services
              </Link>
              <Link href="/industries" className="text-[#034F66] hover:text-[#80B6C1] transition-colors">
              Use Cases
              </Link>
              <Link href="/career" className="text-[#034F66] hover:text-[#80B6C1] transition-colors">
              Careers
              </Link>
              <Link href="/contact" className="text-[#034F66] hover:text-[#80B6C1] transition-colors">
                Contact
              </Link>
              <Button
                className="bg-[#80B6C1] hover:bg-[#458496] text-white w-fit"
                onClick={() =>
                  (window.location.href =
                    "mailto:info@pro-ice.com.ng?subject=Business Inquiry&body=Hello Pro-ICE Team,%0D%0A%0D%0AI would like to discuss how Pro-ICE can help transform my business.%0D%0A%0D%0APlease contact me to schedule a consultation.%0D%0A%0D%0AThank you.")
                }
              >
                Talk to an Expert
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
