import Link from 'next/link';
import Image from 'next/image';

export default function DentalImplantsPage() {
  const benefits = [
    {
      title: 'Natural Look & Feel',
      description: 'Implants look and function just like natural teeth',
      icon: '✨'
    },
    {
      title: 'Permanent Solution',
      description: 'Designed to last a lifetime with proper care',
      icon: '♾️'
    },
    {
      title: 'Preserve Bone Structure',
      description: 'Prevent bone loss that occurs with missing teeth',
      icon: '🦴'
    },
    {
      title: 'Restore Confidence',
      description: 'Eat, speak, and smile with complete confidence',
      icon: '😊'
    },
    {
      title: 'No Impact on Adjacent Teeth',
      description: 'Unlike bridges, implants don\'t affect neighboring teeth',
      icon: '🦷'
    },
    {
      title: 'Improved Oral Health',
      description: 'Easier to clean and maintain than traditional restorations',
      icon: '🧼'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Comprehensive exam, X-rays, and treatment planning',
      image: 'https://images.unsplash.com/photo-1606811951340-8c1b6b1f7b5f?w=300&h=200&fit=crop'
    },
    {
      step: '02',
      title: 'Implant Placement',
      description: 'Surgical placement of the titanium implant post',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop'
    },
    {
      step: '03',
      title: 'Healing Period',
      description: '3-6 months for osseointegration (implant-bone bonding)',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop'
    },
    {
      step: '04',
      title: 'Abutment & Crown',
      description: 'Placement of connector and custom-made crown',
      image: 'https://images.unsplash.com/photo-1588776815141-1a6b6c7b14b3?w=300&h=200&fit=crop'
    }
  ];

  const implantTypes = [
    {
      name: 'Single Tooth Implant',
      description: 'Replace one missing tooth with a natural-looking implant',
      image: 'https://images.unsplash.com/photo-1606811985880-b4e6b6447c3d?w=300&h=250&fit=crop',
      ideal: 'Perfect for single tooth replacement'
    },
    {
      name: 'Multiple Implants',
      description: 'Replace several missing teeth with individual implants',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=250&fit=crop',
      ideal: 'Ideal for non-adjacent missing teeth'
    },
    {
      name: 'Implant-Supported Bridge',
      description: 'Bridge supported by implants instead of natural teeth',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=250&fit=crop',
      ideal: 'Great for multiple adjacent missing teeth'
    },
    {
      name: 'All-on-4 Implants',
      description: 'Full arch restoration supported by just 4 implants',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=250&fit=crop',
      ideal: 'Complete smile restoration solution'
    }
  ];

  const testimonials = [
    {
      name: 'Robert Chen',
      quote: 'The implants feel so natural, I forget they\'re not my real teeth. Worth every penny!',
      rating: 5,
      treatment: 'All-on-4 Implants'
    },
    {
      name: 'Maria Gonzalez',
      quote: 'I can finally eat my favorite foods again. The difference is incredible!',
      rating: 5,
      treatment: 'Multiple Implants'
    },
    {
      name: 'David Thompson',
      quote: 'Best investment I\'ve made in my health. My confidence is back!',
      rating: 5,
      treatment: 'Single Tooth Implant'
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
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Dental Implants: Your Permanent Smile Solution
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Restore your smile with natural-looking, permanent tooth replacements that feel just like your real teeth.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <span className="text-3xl">💎</span>
                <p className="text-sm text-gray-600 mt-2">Premium Quality</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <span className="text-3xl">♾️</span>
                <p className="text-sm text-gray-600 mt-2">Lifetime Solution</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <span className="text-3xl">😄</span>
                <p className="text-sm text-gray-600 mt-2">Natural Results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Dental Implants?</h2>
            <p className="text-lg text-gray-600">The superior choice for tooth replacement</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Implant Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Implant Solutions for Every Need</h2>
            <p className="text-lg text-gray-600">Find the perfect implant option for your situation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {implantTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={type.image}
                    alt={type.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{type.name}</h3>
                  <p className="text-gray-600 mb-3">{type.description}</p>
                  <p className="text-sm text-blue-600 font-medium">{type.ideal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Implant Process</h2>
            <p className="text-lg text-gray-600">Your journey to a perfect smile</p>
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

      {/* Technology & Materials */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Technology & Premium Materials</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">🔬</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">3D Imaging & Planning</h3>
                    <p className="text-gray-600">Precise digital planning for optimal results</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">⚕️</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Titanium Implants</h3>
                    <p className="text-gray-600">Medical-grade titanium that integrates with your bone</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">🎨</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Custom Crowns</h3>
                    <p className="text-gray-600">Porcelain crowns matched to your natural teeth</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">🦠</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Sterile Environment</h3>
                    <p className="text-gray-600">Hospital-grade sterilization and safety protocols</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Image
                src="https://images.unsplash.com/photo-1606811985880-b4e6b6447c3d?w=500&h=400&fit=crop"
                alt="Advanced dental technology"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Patient Success Stories</h2>
            <p className="text-lg text-gray-600">Real patients, real transformations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <span className="text-yellow-400 text-lg">
                    {'★'.repeat(testimonial.rating)}
                  </span>
                  <span className="ml-2 text-sm text-gray-600">{testimonial.treatment}</span>
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Financing Options</h2>
          <p className="text-lg text-gray-600 mb-8">Make your dream smile affordable with our financing plans</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-3">💳</div>
              <h3 className="font-semibold mb-2">Credit Cards</h3>
              <p className="text-gray-600 text-sm">Major credit cards accepted</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-3">📄</div>
              <h3 className="font-semibold mb-2">Payment Plans</h3>
              <p className="text-gray-600 text-sm">Interest-free options available</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-3">🏦</div>
              <h3 className="font-semibold mb-2">Third-Party Financing</h3>
              <p className="text-gray-600 text-sm">CareCredit and other options</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Restore Your Smile?</h2>
          <p className="text-xl mb-8">Schedule a free consultation to learn if dental implants are right for you.</p>
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