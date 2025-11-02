import Link from 'next/link';
import Image from 'next/image';

export default function DentalImplantsPage() {
  const implantTypes = [
    {
      name: 'Single Tooth Implants',
      description: 'Individual implant placement for one missing tooth, including crown restoration',
      image: 'https://images.unsplash.com/photo-1606811951340-8c1b6b1f7b5f?w=400&h=300&fit=crop',
      features: ['Natural appearance', 'Preserves adjacent teeth', 'Long-term durability']
    },
    {
      name: 'Multiple Tooth Implants',
      description: 'Placement of several implants to replace multiple missing teeth',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      features: ['Stable support', 'Individual crowns', 'Bone preservation']
    },
    {
      name: 'Implant-Supported Bridges',
      description: 'Bridge restorations anchored by dental implants instead of natural teeth',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
      features: ['No damage to natural teeth', 'Fixed restoration', 'Excellent stability']
    },
    {
      name: 'Full Arch Implants',
      description: 'Complete restoration of upper or lower arch with implant-supported dentures',
      image: 'https://images.unsplash.com/photo-1588776815141-1a6b6c7b14b3?w=400&h=300&fit=crop',
      features: ['All-on-4 technique', 'Immediate function', 'No removable parts']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation & Planning',
      description: 'Comprehensive examination, digital X-rays, and 3D imaging to assess bone quality and plan implant placement',
      image: 'https://images.unsplash.com/photo-1606811985880-b4e6b6447c3d?w=300&h=200&fit=crop'
    },
    {
      step: '02',
      title: 'Implant Surgery',
      description: 'Precise surgical placement of titanium implant posts into the jawbone under local anesthesia',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=200&fit=crop'
    },
    {
      step: '03',
      title: 'Osseointegration Period',
      description: '3-6 month healing phase where the implant fuses with the surrounding bone tissue',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=200&fit=crop'
    },
    {
      step: '04',
      title: 'Abutment & Restoration',
      description: 'Placement of abutment connector and attachment of custom-made crown or prosthesis',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop'
    },
    {
      step: '05',
      title: 'Final Adjustments',
      description: 'Fine-tuning of bite and aesthetics for optimal comfort and appearance',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop'
    }
  ];

  const benefits = [
    {
      title: 'Permanent Tooth Replacement',
      description: 'Durable, long-lasting solution that can last a lifetime with proper care',
      icon: '♾️'
    },
    {
      title: 'Natural Appearance & Function',
      description: 'Implants look, feel, and function just like natural teeth',
      icon: '✨'
    },
    {
      title: 'Bone Preservation',
      description: 'Prevents bone loss and maintains facial structure',
      icon: '🦴'
    },
    {
      title: 'No Impact on Adjacent Teeth',
      description: 'Unlike bridges, implants don\'t require alteration of healthy neighboring teeth',
      icon: '🦷'
    },
    {
      title: 'Improved Oral Health',
      description: 'Easier to clean and maintain than traditional restorations',
      icon: '🧼'
    },
    {
      title: 'Restored Confidence',
      description: 'Eat, speak, and smile with complete confidence',
      icon: '😊'
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
              Dental Implants
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced surgical placement of titanium implants that serve as artificial tooth roots
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What Are Dental Implants?</h2>
              <p className="text-gray-600 mb-6">
                Dental implants are titanium posts that are surgically placed into the jawbone to serve as artificial tooth roots.
                They provide a strong foundation for replacement teeth that look, feel, and function like natural teeth.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl mt-1">✓</span>
                  <span className="text-gray-700">Titanium alloy construction for biocompatibility</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl mt-1">✓</span>
                  <span className="text-gray-700">Osseointegration with living bone tissue</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl mt-1">✓</span>
                  <span className="text-gray-700">Over 95% success rate with proper care</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl mt-1">✓</span>
                  <span className="text-gray-700">FDA-approved materials and techniques</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <Image
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&h=400&fit=crop"
                alt="Dental implant structure"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Implant Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Implant Treatment Options</h2>
            <p className="text-lg text-gray-600">Comprehensive solutions for every dental restoration need</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {implantTypes.map((type, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
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
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <ul className="space-y-1 mb-4">
                    {type.features.map((feature, idx) => (
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

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Implant Placement Process</h2>
            <p className="text-lg text-gray-600">Step-by-step surgical and restorative process</p>
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

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Dental Implants</h2>
            <p className="text-lg text-gray-600">Why implants are the gold standard for tooth replacement</p>
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

      {/* Technology Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Implant Technology</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">🔬</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">3D Cone Beam CT Imaging</h3>
                    <p className="text-gray-600">Precise 3D imaging for accurate implant placement planning</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">⚕️</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Surgical Guides</h3>
                    <p className="text-gray-600">Computer-guided surgery for optimal precision and safety</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">🦴</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Bone Grafting</h3>
                    <p className="text-gray-600">Advanced techniques to rebuild bone when needed</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">🎨</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Digital Restorations</h3>
                    <p className="text-gray-600">CAD/CAM technology for precise, custom restorations</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Image
                src="https://images.unsplash.com/photo-1606811985880-b4e6b6447c3d?w=500&h=400&fit=crop"
                alt="Advanced dental implant technology"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Candidacy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Are You a Candidate for Implants?</h2>
            <p className="text-lg text-gray-600">Most patients with missing teeth can benefit from implants</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Good Candidates Include:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Patients with one or more missing teeth
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Individuals with adequate bone density
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Those committed to good oral hygiene
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Non-smokers or those willing to quit
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Patients in good general health
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Treatment May Include:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Bone grafting for insufficient bone
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Sinus lifts for upper jaw implants
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Treatment of gum disease first
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Temporary solutions during healing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Restore Your Smile with Dental Implants</h2>
          <p className="text-xl mb-8">Schedule a comprehensive consultation to determine if implants are right for you.</p>
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