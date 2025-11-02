import Link from 'next/link';
import Image from 'next/image';

export default function InvisalignPage() {
  const advantages = [
    {
      title: 'Nearly Invisible',
      description: 'Clear aligners are virtually invisible when worn, allowing you to straighten your teeth discreetly',
      icon: '👁️'
    },
    {
      title: 'Removable',
      description: 'Take them out to eat, brush, and floss normally - no food restrictions or difficult cleaning',
      icon: '🔄'
    },
    {
      title: 'Comfortable',
      description: 'Smooth plastic aligners with no metal brackets or wires that can irritate your mouth',
      icon: '😊'
    },
    {
      title: 'Predictable Results',
      description: 'Advanced 3D imaging technology shows exactly how your teeth will move throughout treatment',
      icon: '🎯'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Digital Consultation',
      description: 'Initial examination and digital scanning to create your custom treatment plan',
      image: 'https://images.unsplash.com/photo-1606811951340-8c1b6b1f7b5f?w=300&h=200&fit=crop'
    },
    {
      step: '02',
      title: '3D Treatment Plan',
      description: 'Computer-generated simulation shows your teeth moving step by step to final position',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop'
    },
    {
      step: '03',
      title: 'Custom Aligners',
      description: 'Series of clear, custom-made aligners fabricated specifically for your treatment',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop'
    },
    {
      step: '04',
      title: 'Wear & Progress',
      description: 'Change aligners every 1-2 weeks as teeth gradually move to desired positions',
      image: 'https://images.unsplash.com/photo-1588776815141-1a6b6c7b14b3?w=300&h=200&fit=crop'
    },
    {
      step: '05',
      title: 'Refinement & Retention',
      description: 'Fine-tune results with additional aligners and maintain with retainers',
      image: 'https://images.unsplash.com/photo-1606811985880-b4e6b6447c3d?w=300&h=200&fit=crop'
    }
  ];

  const treatmentCases = [
    {
      condition: 'Crowded Teeth',
      description: 'Teeth that are too close together, causing overlapping or rotation',
      before: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&sat=150&bri=110'
    },
    {
      condition: 'Gaps Between Teeth',
      description: 'Spaces between teeth that affect appearance and function',
      before: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop&sat=120'
    },
    {
      condition: 'Overbite/Underbite',
      description: 'Upper or lower teeth that protrude too far forward',
      before: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=300&fit=crop&sat=130'
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Invisalign Clear Aligners
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced clear aligner therapy for straighter teeth and a more confident smile
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What is Invisalign?</h2>
              <p className="text-gray-600 mb-6">
                Invisalign is the clear alternative to metal braces. Using advanced 3D computer imaging technology,
                Invisalign creates a series of clear, removable aligners that gradually move your teeth to their
                final desired position.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl mt-1">✓</span>
                  <span className="text-gray-700">FDA-approved polyurethane material</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl mt-1">✓</span>
                  <span className="text-gray-700">Custom-manufactured for each patient</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl mt-1">✓</span>
                  <span className="text-gray-700">Over 11 million patients treated worldwide</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl mt-1">✓</span>
                  <span className="text-gray-700">Clinically proven treatment effectiveness</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <Image
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&h=400&fit=crop"
                alt="Invisalign clear aligners"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advantages of Invisalign</h2>
            <p className="text-lg text-gray-600">Why millions choose Invisalign over traditional braces</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{advantage.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Invisalign Treatment Works</h2>
            <p className="text-lg text-gray-600">Step-by-step process using advanced digital technology</p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}>
                <div className="flex-1">
                  <div className="relative mb-4 lg:mb-0">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={400}
                      height={250}
                      className="rounded-lg shadow-md"
                    />
                    <div className="absolute -top-3 -left-3 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Conditions Treated</h2>
            <p className="text-lg text-gray-600">Invisalign can effectively treat a wide range of orthodontic issues</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {treatmentCases.map((case_, index) => (
              <div key={index} className="text-center">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <Image
                      src={case_.before}
                      alt={`Before treatment - ${case_.condition}`}
                      width={150}
                      height={150}
                      className="rounded-lg"
                    />
                    <p className="text-sm text-gray-500 mt-2">Before</p>
                  </div>
                  <div>
                    <Image
                      src={case_.after}
                      alt={`After treatment - ${case_.condition}`}
                      width={150}
                      height={150}
                      className="rounded-lg"
                    />
                    <p className="text-sm text-gray-500 mt-2">After</p>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{case_.condition}</h4>
                <p className="text-gray-600 text-sm">{case_.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Details */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Treatment Information</h2>
            <p className="text-lg text-gray-600">What to expect during your Invisalign treatment</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Treatment Duration</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Average Treatment Time</span>
                  <span className="font-semibold text-gray-900">12-18 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Aligner Changes</span>
                  <span className="font-semibold text-gray-900">Every 1-2 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Office Visits</span>
                  <span className="font-semibold text-gray-900">Every 6-8 weeks</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Daily Wear Requirements</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Daily Wear Time</span>
                  <span className="font-semibold text-gray-900">20-22 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Removal for Eating</span>
                  <span className="font-semibold text-gray-900">Allowed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Removal for Cleaning</span>
                  <span className="font-semibold text-gray-900">Required</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  SmartTrack material
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  ClinCheck software
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Progress tracking
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Refinement aligners
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Invisalign Technology</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">💻</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">ClinCheck Treatment Plan</h3>
                    <p className="text-gray-600">3D visualization of your complete treatment from start to finish</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">🧬</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">SmartTrack Material</h3>
                    <p className="text-gray-600">Advanced polyurethane material for better comfort and control</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">📱</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Progress Tracking</h3>
                    <p className="text-gray-600">Monitor your treatment progress with the Invisalign app</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">🎯</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Precision Movement</h3>
                    <p className="text-gray-600">Precise tooth movements for predictable, stable results</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Image
                src="https://images.unsplash.com/photo-1606811985880-b4e6b6447c3d?w=500&h=400&fit=crop"
                alt="Invisalign technology"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Transform Your Smile with Invisalign</h2>
          <p className="text-xl mb-8">Schedule a free consultation and discover if Invisalign is right for you.</p>
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