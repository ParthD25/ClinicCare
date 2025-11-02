import Link from 'next/link';
import Image from 'next/image';

export default function CosmeticDentistryPage() {
  const services = [
    {
      name: 'Teeth Whitening',
      description: 'Professional whitening for a brighter, more confident smile',
      image: 'https://images.unsplash.com/photo-1606811951340-8c1b6b1f7b5f?w=400&h=300&fit=crop',
      features: ['In-office treatment', 'Custom trays', 'Lasting results']
    },
    {
      name: 'Porcelain Veneers',
      description: 'Custom shells that transform the appearance of your teeth',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      features: ['Natural appearance', 'Durable material', 'Color correction']
    },
    {
      name: 'Dental Crowns',
      description: 'Full coverage restorations for damaged or weakened teeth',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
      features: ['Strong protection', 'Natural look', 'Long-lasting']
    },
    {
      name: 'Composite Bonding',
      description: 'Tooth-colored resin to repair chips, cracks, and discoloration',
      image: 'https://images.unsplash.com/photo-1588776815141-1a6b6c7b14b3?w=400&h=300&fit=crop',
      features: ['Same-day results', 'Affordable', 'Conservative treatment']
    },
    {
      name: 'Invisalign Clear Aligners',
      description: 'Nearly invisible aligners for straighter teeth',
      image: 'https://images.unsplash.com/photo-1606811985880-b4e6b6447c3d?w=400&h=300&fit=crop',
      features: ['Removable', 'Comfortable', 'Discreet']
    },
    {
      name: 'Smile Makeover',
      description: 'Comprehensive treatment plan for your perfect smile',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop',
      features: ['Customized plan', 'Multiple treatments', 'Life-changing results']
    }
  ];

  const beforeAfterImages = [
    {
      before: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&sat=150&bri=110',
      treatment: 'Teeth Whitening'
    },
    {
      before: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop&sat=120',
      treatment: 'Porcelain Veneers'
    },
    {
      before: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=300&fit=crop&sat=130',
      treatment: 'Dental Crowns'
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

      {/* Hero Section with Before/After */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Transform Your Smile
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern cosmetic dentistry solutions for the smile you've always wanted
            </p>
          </div>

          {/* Before/After Hero */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="relative mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop"
                  alt="Before cosmetic dentistry"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  BEFORE
                </div>
              </div>
              <p className="text-gray-600">Discolored, uneven teeth</p>
            </div>
            <div className="text-center">
              <div className="relative mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop&sat=150&bri=110"
                  alt="After cosmetic dentistry"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  AFTER
                </div>
              </div>
              <p className="text-gray-600">Bright, confident smile</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Cosmetic Services</h2>
            <p className="text-lg text-gray-600">Choose from our range of modern cosmetic dentistry treatments</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-1 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="block text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Real Results</h2>
            <p className="text-lg text-gray-600">See the transformation our patients experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beforeAfterImages.map((item, index) => (
              <div key={index} className="text-center">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <Image
                      src={item.before}
                      alt={`Before ${item.treatment}`}
                      width={150}
                      height={150}
                      className="rounded-lg"
                    />
                    <p className="text-sm text-gray-500 mt-2">Before</p>
                  </div>
                  <div>
                    <Image
                      src={item.after}
                      alt={`After ${item.treatment}`}
                      width={150}
                      height={150}
                      className="rounded-lg"
                    />
                    <p className="text-sm text-gray-500 mt-2">After</p>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900">{item.treatment}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Aspen Dental Care</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Care</h3>
              <p className="text-gray-600">Experienced cosmetic dentist with 20+ years of experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Latest Technology</h3>
              <p className="text-gray-600">State-of-the-art equipment for the best results</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💫</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Natural Results</h3>
              <p className="text-gray-600">Beautiful, natural-looking smiles that last</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Smile?</h2>
          <p className="text-xl mb-8">Schedule a free consultation and see what cosmetic dentistry can do for you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+15107700393" className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Call: (510) 770-0393
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Free Consultation
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