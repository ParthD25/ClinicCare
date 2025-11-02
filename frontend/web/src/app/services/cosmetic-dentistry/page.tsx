import Link from 'next/link';

export default function CosmeticDentistryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                Aspen Dental Care
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/services" className="text-blue-600 font-semibold">Services</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About Us</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
              <Link href="/portal" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Patient Portal
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Cosmetic Dentistry</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your smile with our advanced cosmetic dentistry services
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>Composite Fillings</h2>
            <p>
              Composite resins, or tooth-colored fillings, provide good durability and resistance to fracture
              in small- to mid-size fillings that need to withstand moderate pressure from the constant stress of chewing.
              They can be used on either front or back teeth. They are a good choice for people who prefer that their
              fillings look more natural.
            </p>
            <p>
              It generally takes longer to place a composite filling than it does for a metal filling.
              That's because composite fillings require the tooth be kept clean and dry while the cavity is being filled.
              Tooth-colored fillings are now used more often than amalgam or gold fillings, probably due to cosmetics.
              In a society focused on a white, bright smile, people tend to want fillings that blend with the natural color of their teeth.
            </p>

            <h2>Flexible Partial Denture</h2>
            <p>
              The development of flexible partial denture materials has allowed dentists to rethink the possibilities
              of long-term treatment of partial edentulism. These materials can be used without the concurrent weaknesses
              of methylmethacrylate (ie, frequent fracture, poor retention, lack of stability) or the technical difficulties
              and expense of metal castings.
            </p>
            <p>
              It is the purpose of this article to review the previously introduced clasps that have been found to be
              exceptionally functional with flexible partial design and to introduce new variations in clasping and design expectations.
            </p>

            <h3>Valplast</h3>
            <p>
              Valplast is a flexible, nylon thermoplastic that is thinner and more translucent than traditional partials.
              Doctors appreciate the minimal prep, easy insertion and long term strength. Patients love Valplast's
              metal-free comfort and natural appearance.
            </p>

            <h3>TCS Unbreakable RPDs</h3>
            <p>
              The TCS Unbreakable RPDs are thin, flexible, lightweight, and extremely comfortable. Doctors and patients
              enjoy the unparalleled simplicity, comfort and aesthetics. Today, more and more dental practitioners are
              relying on nylon-based removable partial dentures for their patients.
            </p>

            <h2>Non-Metal Crown</h2>

            <h3>E.Max</h3>
            <p>
              The E-Max crown is a type of all-ceramic crown which is preferred for its longer lasting, aesthetic qualities.
              This crown and the Zirconia crown are worn due to their highly attractive appearance which ensures that they
              compliment the rest of your teeth.
            </p>
            <p>
              It is considered a good option for damaged, stained or poor quality teeth.
            </p>

            <h3>Zirconia</h3>
            <p>
              Zirconia (Zirconium Oxide) is a white powdered metal used to create dental frameworks for crowns, bridges
              and other dental substructures. It replaces gold or stainless steel used in the past, creates the appearance
              of a whiter more translucent tooth, and is transparent in xrays.
            </p>
            <p>
              Zirconia has been in use in cosmetic dentistry for many years to acheive the most aesthetic result possible,
              but has more recently become widely accepted as the dental material of choice.
            </p>

            <h2>Veneers</h2>
            <p>
              Dental veneers (sometimes called porcelain veneers or dental porcelain laminates) are wafer-thin,
              custom-made shells of tooth-colored materials designed to cover the front surface of teeth to improve
              your appearance. These shells are bonded to the front of the teeth changing their color, shape, size, or length.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Smile?</h2>
          <p className="text-xl mb-8">Schedule a consultation to discuss your cosmetic dentistry options.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+15107700393" className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Call: (510) 770-0393
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Aspen Dental Care. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}