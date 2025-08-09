import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"

export function OfficeLocations() {
  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#034F66] mb-4">Our Offices</h2>
        <p className="text-lg text-[#569AA7]">Visit us at our locations in Lagos and Abuja</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-[#034F66] flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-[#80B6C1]" />
              Lagos Office
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="font-medium text-[#034F66]">The Automation Center</p>
              <p className="text-[#569AA7]">
                4, Bishop Howell Street,
                <br />
                Off Bode Thomas,
                <br />
                Surulere, Lagos
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-[#034F66] flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-[#80B6C1]" />
              Abuja Office
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="font-medium text-[#034F66]">The Automation Center</p>
              <p className="text-[#569AA7]">
                1, Udo Udoma Street,
                <br />
                Asokoro,
                <br />
                FCT Abuja
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
