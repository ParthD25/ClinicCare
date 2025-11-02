import Link from 'next/link';
import Image from 'next/image';

export default function InvisalignPage() {
  const benefits = [
    {
      title: 'Nearly Invisible',
      description: 'Clear aligners are virtually invisible when worn',
      icon: '👁️'
    },
    {
      title: 'Removable',
      description: 'Take them out to eat, brush, and floss normally',
      icon: '🔄'
    },
    {
      title: 'Comfortable',
      description: 'Smooth plastic aligners with no metal brackets or wires',
      icon: '😊'
    },
    {
      title: 'Effective',
      description: 'Treats a wide range of orthodontic issues',
      icon: '✅'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Initial consultation to determine if Invisalign is right for you',
      image: 'https://images.unsplash.com/photo-1606811951340-8c1b6b1f7b5f?w=300&h=200&fit=crop'
    },
    {
      step: '02',
      title: 'Custom Treatment Plan',
      description: 'Digital scan and 3D treatment plan created just for you',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop'
    },
    {
      step: '03',
      title: 'Receive Aligners',
      description: 'Get your series of custom aligners to wear throughout treatment',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop'
    },
    {
      step: '04',
      title: 'Wear & Progress',
      description: 'Change aligners every 1-2 weeks as your teeth gradually move',
      image: 'https://images.unsplash.com/photo-1588776815141-1a6b6c7b14b3?w=300&h=200&fit=crop'
    }
  ];

  const beforeAfterImages = [
    {
      before: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&sat=150&bri=110',
      description: 'Crowded teeth straightened'
    },
    {
      before: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop&sat=120',
      description: 'Overbite corrected'
    },
    {
      before: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=300&fit=crop&sat=130',
      description: 'Gap closure'
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
              Straighten Your Smile with Invisalign
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nearly invisible aligners that give you the smile you've always wanted
            </p>
          </div>

          {/* Before/After Hero */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="relative mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop"
                  alt="Before Invisalign treatment"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  BEFORE
                </div>
              </div>
              <p className="text-gray-600">Crooked, misaligned teeth</p>
            </div>
            <div className="text-center">
              <div className="relative mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop&sat=150&bri=110"
                  alt="After Invisalign treatment"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  AFTER
                </div>
              </div>
              <p className="text-gray-600">Straight, confident smile</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Invisalign?</h2>
            <p className="text-lg text-gray-600">The clear choice for modern orthodontic treatment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Invisalign Works</h2>
            <p className="text-lg text-gray-600">Simple, predictable treatment in just a few steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md"
                  />
                  <div className="absolute -top-3 -left-3 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Real Invisalign Results</h2>
            <p className="text-lg text-gray-600">See the amazing transformations our patients achieve</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beforeAfterImages.map((item, index) => (
              <div key={index} className="text-center">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <Image
                      src={item.before}
                      alt={`Before Invisalign - ${item.description}`}
                      width={150}
                      height={150}
                      className="rounded-lg"
                    />
                    <p className="text-sm text-gray-500 mt-2">Before</p>
                  </div>
                  <div>
                    <Image
                      src={item.after}
                      alt={`After Invisalign - ${item.description}`}
                      width={150}
                      height={150}
                      className="rounded-lg"
                    />
                    <p className="text-sm text-gray-500 mt-2">After</p>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900">{item.description}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Info */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Invisalign Treatment Details</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What Can Invisalign Treat?</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Crowded teeth
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Gaps between teeth
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Overbite and underbite
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Crossbite
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Open bite
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Treatment Timeline</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average Treatment Time</span>
                  <span className="font-semibold text-gray-900">12-18 months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Aligner Changes</span>
                  <span className="font-semibold text-gray-900">Every 1-2 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Wear Time</span>
                  <span className="font-semibold text-gray-900">20-22 hours/day</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Office Visits</span>
                  <span className="font-semibold text-gray-900">Every 6-8 weeks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Invisalign Journey Today</h2>
          <p className="text-xl mb-8">Get a free consultation and see if Invisalign is right for you.</p>
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