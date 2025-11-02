import Link from 'next/link';
import Image from 'next/image';

export default function ChildrenDentistryPage() {
  const services = [
    {
      name: 'First Dental Visit',
      description: 'Gentle introduction to dental care for infants and toddlers',
      image: 'https://images.unsplash.com/photo-1606811951340-8c1b6b1f7b5f?w=400&h=300&fit=crop',
      age: 'Ages 1-3'
    },
    {
      name: 'Preventive Care',
      description: 'Regular check-ups, cleanings, and fluoride treatments',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      age: 'All Ages'
    },
    {
      name: 'Cavity Treatment',
      description: 'Painless fillings and sealants to protect young smiles',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
      age: 'Ages 3+'
    },
    {
      name: 'Orthodontic Evaluation',
      description: 'Early assessment for braces or Invisalign Teen',
      image: 'https://images.unsplash.com/photo-1588776815141-1a6b6c7b14b3?w=400&h=300&fit=crop',
      age: 'Ages 7+'
    },
    {
      name: 'Emergency Care',
      description: 'Prompt treatment for dental injuries and pain',
      image: 'https://images.unsplash.com/photo-1606811985880-b4e6b6447c3d?w=400&h=300&fit=crop',
      age: 'All Ages'
    },
    {
      name: 'Sedation Options',
      description: 'Gentle sedation for anxious children',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop',
      age: 'Ages 3+'
    }
  ];

  const funFacts = [
    {
      fact: 'Did you know? Baby teeth help children speak clearly and chew properly!',
      icon: '🗣️'
    },
    {
      fact: 'Kids should have their first dental visit by age 1!',
      icon: '👶'
    },
    {
      fact: 'Regular dental check-ups can prevent 80% of cavities!',
      icon: '🦷'
    },
    {
      fact: 'Healthy smiles boost confidence and school performance!',
      icon: '📚'
    }
  ];

  const tips = [
    {
      title: 'Make Brushing Fun',
      description: 'Use colorful toothbrushes and play music during brushing time',
      icon: '🎵'
    },
    {
      title: 'Healthy Snacks',
      description: 'Choose fruits, vegetables, and cheese instead of sugary treats',
      icon: '🍎'
    },
    {
      title: 'Regular Check-ups',
      description: 'Visit the dentist every 6 months for preventive care',
      icon: '📅'
    },
    {
      title: 'Lead by Example',
      description: 'Children learn by watching - brush and floss together!',
      icon: '👨‍👩‍👧‍👦'
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
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pediatric Dentistry for Happy, Healthy Smiles
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Creating positive dental experiences for children of all ages in a fun, friendly environment
            </p>
            <div className="flex justify-center space-x-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <span className="text-3xl">👶</span>
                <p className="text-sm text-gray-600 mt-2">Infants Welcome</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <span className="text-3xl">🦷</span>
                <p className="text-sm text-gray-600 mt-2">Pain-Free Care</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <span className="text-3xl">🎉</span>
                <p className="text-sm text-gray-600 mt-2">Fun Environment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Pediatric Services</h2>
            <p className="text-lg text-gray-600">Comprehensive dental care tailored for children</p>
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
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded text-sm font-semibold">
                    {service.age}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
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

      {/* Fun Facts Section */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dental Fun Facts for Kids!</h2>
            <p className="text-lg text-gray-600">Interesting facts to make learning about teeth fun</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {funFacts.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <p className="text-gray-700 font-medium">{item.fact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Tips Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tips for Parents</h2>
            <p className="text-lg text-gray-600">Help your child develop healthy dental habits</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tips.map((tip, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{tip.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Aspen Dental Care for Your Child?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Pediatric Specialist</h3>
              <p className="text-gray-600">Board-certified pediatric dentist with extensive experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎪</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Kid-Friendly Office</h3>
              <p className="text-gray-600">Colorful waiting area, toys, and a welcoming atmosphere</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Evening and weekend appointments to fit your family's schedule</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Schedule Your Child's First Visit</h2>
          <p className="text-xl mb-8">Make dental care a positive experience from the start. Free consultation for new patients.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+15107700393" className="bg-white text-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Call: (510) 770-0393
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Book Appointment
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