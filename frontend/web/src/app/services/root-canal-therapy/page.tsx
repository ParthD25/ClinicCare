import Link from 'next/link';
import Image from 'next/image';

export default function RootCanalTherapyPage() {
  const treatments = [
    {
      name: 'Root Canal Treatment',
      description: 'Treatment for teeth with infected or inflamed pulp tissue',
      image: 'https://images.unsplash.com/photo-1606811951340-8c1b6b1f7b5f?w=400&h=300&fit=crop',
      features: ['Saves natural tooth', 'Eliminates infection', 'Pain relief', 'Restores function']
    },
    {
      name: 'Root Canal Retreatment',
      description: 'Re-treatment when initial root canal therapy has failed',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      features: ['Addresses failed treatment', 'Removes infection', 'Saves tooth again', 'Advanced techniques']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Diagnosis & X-Rays',
      description: 'Thorough examination and digital X-rays to assess the tooth and surrounding bone',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop'
    },
    {
      step: '02',
      title: 'Local Anesthesia',
      description: 'Comfortable numbing of the area to ensure a pain-free procedure',
      image: 'https://images.unsplash.com/photo-1588776815141-1a6b6c7b14b3?w=300&h=200&fit=crop'
    },
    {
      step: '03',
      title: 'Access & Cleaning',
      description: 'Careful removal of infected pulp tissue and thorough cleaning of root canals',
      image: 'https://images.unsplash.com/photo-1606811985880-b4e6b6447c3d?w=400&h=300&fit=crop'
    },
    {
      step: '04',
      title: 'Filling & Sealing',
      description: 'Root canals are filled with biocompatible material and sealed to prevent reinfection',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=200&fit=crop'
    },
    {
      step: '05',
      title: 'Restoration',
      description: 'Placement of a crown or filling to restore the tooth to full function',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=200&fit=crop'
    }
  ];

  const benefits = [
    {
      title: 'Save Your Natural Tooth',
      description: 'Avoid extraction and maintain your natural smile',
      icon: '🦷'
    },
    {
      title: 'Pain Relief',
      description: 'Eliminate tooth pain and discomfort from infection',
      icon: '😌'
    },
    {
      title: 'Prevent Further Damage',
      description: 'Stop infection from spreading to surrounding teeth and bone',
      icon: '🛡️'
    },
    {
      title: 'Restore Function',
      description: 'Return to normal eating, speaking, and smiling',
      icon: '🍽️'
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
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Root Canal Therapy
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced endodontic treatment to save your natural teeth and eliminate infection
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">When is Root Canal Treatment Needed?</h2>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 text-xl">⚠️</span>
                  <span className="text-gray-700">Severe tooth pain or sensitivity to hot/cold</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 text-xl">⚠️</span>
                  <span className="text-gray-700">Swelling or tenderness in gums</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 text-xl">⚠️</span>
                  <span className="text-gray-700">Darkening of the tooth</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 text-xl">⚠️</span>
                  <span className="text-gray-700">Pus drainage or bad taste in mouth</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 text-xl">⚠️</span>
                  <span className="text-gray-700">Failed previous root canal treatment</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <Image
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&h=400&fit=crop"
                alt="Root canal therapy"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Root Canal Services</h2>
            <p className="text-lg text-gray-600">Comprehensive endodontic treatment options</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatments.map((treatment, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={treatment.image}
                    alt={treatment.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{treatment.name}</h3>
                  <p className="text-gray-600 mb-4">{treatment.description}</p>
                  <ul className="space-y-1 mb-4">
                    {treatment.features.map((feature, idx) => (
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Root Canal Process</h2>
            <p className="text-lg text-gray-600">Step-by-step treatment for optimal results</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Root Canal Treatment</h2>
            <p className="text-lg text-gray-600">Why choose root canal therapy over extraction</p>
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

      {/* Technology Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Endodontic Technology</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">🔍</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Digital Radiography</h3>
                    <p className="text-gray-600">Precise imaging with minimal radiation for accurate diagnosis</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">⚙️</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Rotary Endodontics</h3>
                    <p className="text-gray-600">Advanced rotary instruments for efficient and precise cleaning</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">🦷</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Operating Microscope</h3>
                    <p className="text-gray-600">Enhanced magnification for thorough treatment of complex cases</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">🛡️</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Apex Locator</h3>
                    <p className="text-gray-600">Electronic measurement for precise root canal length determination</p>
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

      {/* Myths vs Facts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Root Canal Myths vs Facts</h2>
            <p className="text-lg text-gray-600">Setting the record straight</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold text-red-600 mb-2">Myth: Root canals are extremely painful</h3>
              <p className="text-gray-700">With modern local anesthesia and techniques, root canal treatment is no more uncomfortable than getting a filling.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="font-semibold text-green-600 mb-2">Fact: Root canals save natural teeth</h3>
              <p className="text-gray-700">Saving your natural tooth is always preferable to extraction and replacement with artificial teeth.</p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold text-red-600 mb-2">Myth: Root canals cause illness</h3>
              <p className="text-gray-700">This myth has been thoroughly debunked. Root canals treat infection and prevent it from spreading.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="font-semibold text-green-600 mb-2">Fact: Success rates are high</h3>
              <p className="text-gray-700">Modern root canal treatment has success rates over 95% when performed by experienced endodontists.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't Delay Treatment</h2>
          <p className="text-xl mb-8">Early root canal treatment prevents complications and saves your natural tooth.</p>
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