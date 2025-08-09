import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { OfficeLocations } from "@/components/office-locations"

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#034F66] mb-4">Contact Us</h1>
          <p className="text-xl text-[#569AA7] max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ContactForm />
          <ContactInfo />
        </div>

        <OfficeLocations />
      </div>
    </main>
  )
}
