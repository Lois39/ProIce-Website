import Image from 'next/image'

export default function Careerpage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="w-full py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">

        {/* Page Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-[#034F66] sm:text-5xl">
            Careers at Pro-ICE Limited
          </h1>
          <p className="mt-4 text-lg text-[#569AA7] max-w-2xl mx-auto">
            Join a team where innovation meets excellence. Together, we create solutions that transform businesses and empower communities.
          </p>
        </div>

        {/* Header Section */}
        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* Image Block */}
          <div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/other3.png"
                alt="Team at work"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Text Block */}
          <div className="mt-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#034F66]">Join Our Team</h1>
            <h2 className="text-xl md:text-2xl font-semibold text-[#569AA7] mb-1">No Open Positions Right Now</h2>
            <p className="text-sm text-muted-foreground">
              Please check back later for updates.
            </p>
          </div>
        </div>

        {/* Our Culture */}
        <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#034F66] mb-4">Our Culture</h2>
            <p className="text-[#034F66] max-w-2xl mx-auto">
              We foster an environment where innovation thrives and team members grow professionally and personally.
            </p>

            <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-3">
              {/* Card 1 */}
              <div className="bg-card border-2 border-gray-200 p-6 rounded-lg shadow text-card-foreground text-center">
                <img
                  src="/IDS-Management-03.png"
                  alt="Collaborative Environment"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h4 className="text-xl font-semibold mb-2">Collaborative Environment</h4>
                <p className="text-muted-foreground text-sm">
                  We foster teamwork and open communication.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-card border-2 border-gray-200 p-6 rounded-lg shadow text-card-foreground text-center">
                <img
                  src="/Incident-response-01.png"
                  alt="Work-Life Balance"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h4 className="text-xl font-semibold mb-2">Work-Life Balance</h4>
                <p className="text-muted-foreground text-sm">
                  We value a healthy balance between work and personal life.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-card border-2 border-gray-200 p-6 rounded-lg shadow text-card-foreground text-center">
                <img
                  src="/Other-02.png"
                  alt="Continuous Learning"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h4 className="text-xl font-semibold mb-2">Continuous Learning</h4>
                <p className="text-muted-foreground text-sm">
                  We support ongoing development and growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Employee Benefits */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 items-center">
          {/* Text Block */}
          <div>
            <h2 className="text-3xl font-bold text-[#034F66] mb-4">Employee Benefits</h2>
            <ul className="text-[#034F66] space-y-3 text-base">
              <li>• Competitive Compensation</li>
              <li>• Health Coverage</li>
              <li>• Remote Flexibility</li>
              <li>• Wellness Stipend</li>
            </ul>
            <p className="mt-6 text-[#034F66] text-sm leading-relaxed">
              We provide comprehensive IT solutions designed to elevate your business.
              Our expertise spans across Web & Mobile Development, cybersecurity, and business support.
            </p>
          </div>

          {/* Image Block */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/Telecoms-2.png"
              alt="Team at work"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <a
            href="mailto:careers@yourcompany.com"
            className="inline-block bg-[#80B6C1] hover:bg-[#458496] text-white text-lg font-semibold py-3 px-6 rounded-md shadow hover:bg-primary/90 transition"
          >
            Submit Your Resume
          </a>
        </div>
      </div>
    </section>
  );
}
