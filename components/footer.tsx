import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#034F66] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Pro-ICE Limited"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div>
                <div className="font-bold text-lg">Pro-ICE Limited</div>
                <div className="text-[#80B6C1] text-sm">People • Technology • Performance</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              End-to-end Business Solutions and Technology Company, supporting businesses in their digital initiatives
              since 2018.
            </p>
            <div className="flex space-x-4">
              <Linkedin className="h-5 w-5 text-[#80B6C1] hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-[#80B6C1] hover:text-white cursor-pointer transition-colors" />
              <Facebook className="h-5 w-5 text-[#80B6C1] hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#80B6C1]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-300 hover:text-white transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-300 hover:text-white transition-colors">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#80B6C1]">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/sharepoint-edms" className="text-gray-300 hover:text-white transition-colors">
                  SharePoint & EDMS
                </Link>
              </li>
              <li>
                <Link href="/services/web-mobile-development" className="text-gray-300 hover:text-white transition-colors">
                  Web & Mobile Development
                </Link>
              </li>
              <li>
                <Link href="/services/rpa-ai-chatbot" className="text-gray-300 hover:text-white transition-colors">
                  RPA & AI Chatbot
                </Link>
              </li>
              <li>
                <Link href="/services/cybersecurity" className="text-gray-300 hover:text-white transition-colors">
                  Cybersecurity Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-services" className="text-gray-300 hover:text-white transition-colors">
                  Cloud Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#80B6C1]">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-[#80B6C1] mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:info@pro-ice.com.ng" className="text-gray-300 hover:text-white transition-colors">
                    info@pro-ice.com.ng
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-[#80B6C1] mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <div>+234 816 089 7211</div>
                  <div>+234 813 181 7157</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-[#80B6C1] mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <div className="font-medium mb-1">Lagos Office:</div>
                  <div>4, Bishop Howell Street, Off Bode Thomas Surulere, Lagos</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-[#80B6C1] mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <div className="font-medium mb-1">Abuja Office:</div>
                  <div>1, Udo Udoma Street, Asokoro, FCT Abuja</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#458496] mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">© 2025 Pro-ICE Limited. All rights reserved.</div>
            <div className="text-gray-300 text-sm">
              Website:{" "}
              <a href="https://www.pro-ice.com.ng" className="text-[#80B6C1] hover:text-white transition-colors">
                www.pro-ice.com.ng
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
