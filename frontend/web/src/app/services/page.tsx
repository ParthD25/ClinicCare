import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      name: 'Cosmetic Dentistry',
      description: 'Transform your smile with our advanced cosmetic dentistry services including composite fillings, veneers, and more.',
      href: '/services/cosmetic-dentistry',
      icon: '✨'
    },
    {
      name: 'Invisalign',
      description: 'Straighten your teeth discreetly with clear aligners. No metal brackets or wires needed.',
      href: '/services/invisalign',
      icon: '🦷'
    },
    {
      name: 'Children Dentistry',
      description: 'Gentle, caring dental care for children of all ages in a friendly, comfortable environment.',
      href: '/services/children-dentistry',
      icon: '👶'
    },
    {
      name: 'Root Canal Therapy',
      description: 'Save your natural teeth with our expert root canal treatments performed with precision and care.',
      href: '/services/root-canal-therapy',
      icon: '🔧'
    },
    {
      name: 'Crowns & Bridges',
      description: 'Restore damaged teeth with durable crowns and bridges that look and feel natural.',
      href: '/services/crown-bridge',
      icon: '👑'
    },
    {
      name: 'Gum Therapy',
      description: 'Maintain healthy gums with our comprehensive gum therapy and periodontal treatments.',
      href: '/services/gum-therapy',
      icon: '🌿'
    },
    {
      name: 'Extraction',
      description: 'Safe and comfortable tooth extractions performed by experienced dental professionals.',
      href: '/services/extraction',
      icon: '🦷'
    },
    {
      name: 'Bleaching',
      description: 'Brighten your smile with professional teeth whitening treatments for lasting results.',
      href: '/services/bleaching',
      icon: '✨'
    },
    {
      name: 'Denture',
      description: 'Custom dentures and partial dentures that restore your smile and chewing ability.',
      href: '/services/denture',
      icon: '🦷'
    },
    {
      name: 'TMJ Treatment',
      description: 'Relieve jaw pain and TMJ disorders with our specialized treatments and therapies.',
      href: '/services/tmj-treatment',
      icon: '💆'
    },
    {
      name: 'Sedation Dentistry',
      description: 'Relax during your dental procedures with our comfortable sedation options.',
      href: '/services/sedation-dentistry',
      icon: '😴'
    }
  ];

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Dental Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive dental care for the whole family with gentle, high-quality treatments
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Schedule Your Appointment?</h2>
          <p className="text-xl mb-8">Contact us today to discuss your dental needs and get started on your smile transformation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+15107700393" className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Call: (510) 770-0393
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Us
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