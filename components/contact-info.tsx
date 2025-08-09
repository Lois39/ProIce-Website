import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, Clock, Globe } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-[#034F66] flex items-center">
            <Mail className="mr-2 h-5 w-5 text-[#80B6C1]" />
            Email Us
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-[#569AA7] mb-2">General Inquiries:</p>
          <a href="mailto:info@pro-ice.com.ng" className="text-[#80B6C1] hover:text-[#458496] font-medium">
            info@pro-ice.com.ng
          </a>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-[#034F66] flex items-center">
            <Phone className="mr-2 h-5 w-5 text-[#80B6C1]" />
            Call Us
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            <p className="text-[#80B6C1] font-medium">+234 813 181 7157</p>
            <p className="text-[#80B6C1] font-medium">+234 816 089 7211</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-[#034F66] flex items-center">
            <Globe className="mr-2 h-5 w-5 text-[#80B6C1]" />
            Website
          </CardTitle>
        </CardHeader>
        <CardContent>
          <a href="https://www.pro-ice.com.ng" className="text-[#80B6C1] hover:text-[#458496] font-medium">
            www.pro-ice.com.ng
          </a>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-[#034F66] flex items-center">
            <Clock className="mr-2 h-5 w-5 text-[#80B6C1]" />
            Business Hours
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-1 text-[#569AA7]">
            <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p>Saturday: 9:00 AM - 2:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
