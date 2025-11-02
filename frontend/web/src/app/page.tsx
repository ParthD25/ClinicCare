import Link from 'next/link';

export default function HomePage() {
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
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
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
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              ASPEN DENTAL CARE
              <span className="block text-2xl md:text-3xl text-blue-600 mt-2">
                Family and Cosmetic Dentistry
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              At Aspen Dental Care, we want to give each of our patients the most gentle and highest quality dental care possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+15107700393" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                Call: (510) 770-0393
              </Link>
              <Link href="mailto:dr.ndave.dds@gmail.com" className="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors">
                Email Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Cosmetic Dentistry', href: '/services/cosmetic-dentistry', icon: '✨' },
              { name: 'Invisalign', href: '/services/invisalign', icon: '🦷' },
              { name: 'Children Dentistry', href: '/services/children-dentistry', icon: '👶' },
              { name: 'Root Canal Therapy', href: '/services/root-canal-therapy', icon: '🔧' },
              { name: 'Crowns & Bridges', href: '/services/crown-bridge', icon: '👑' },
              { name: 'Gum Therapy', href: '/services/gum-therapy', icon: '🌿' },
              { name: 'Extraction', href: '/services/extraction', icon: '🦷' },
              { name: 'Bleaching', href: '/services/bleaching', icon: '✨' },
              { name: 'Denture', href: '/services/denture', icon: '🦷' },
              { name: 'TMJ Treatment', href: '/services/tmj-treatment', icon: '💆' },
              { name: 'Sedation Dentistry', href: '/services/sedation-dentistry', icon: '😴' },
              { name: 'Blog', href: '/blog', icon: '📝' }
            ].map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="bg-gray-50 p-6 rounded-lg hover:bg-blue-50 transition-colors group"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-blue-600 mt-2 group-hover:text-blue-700">Read more..</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">20+</div>
              <div className="text-gray-300">Years Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">5+</div>
              <div className="text-gray-300">Awards</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">2000+</div>
              <div className="text-gray-300">Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">174</div>
              <div className="text-gray-300">Tweets</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Patients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4">
                "Dr. Dave is awesome! I originally came here for an emergency root canal after previously being told by another dentist to take the tooth out. That was probably 3-4 years ago. Now I get cleanings every 3 months."
              </p>
              <p className="font-semibold text-gray-900">- Heather S.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4">
                "My kids and I have been coming here for 12 years. The front desk girls are very sweet and Dr. Dave is the best!! He is very patient and gentle with my kids and knows what he's doing."
              </p>
              <p className="font-semibold text-gray-900">- Raquelle D.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4">
                "IT IS OPEN, I had wisdom tooth extraction done today with Dr. Dave and it was painless. I highly recommend this place."
              </p>
              <p className="font-semibold text-gray-900">- Chirag D.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="mb-6">
                At Aspen Dental Care, we try to make your visit a very pleasant one. Dr. Dave is an experienced Fremont Dentist serving Fremont surrounding areas.
              </p>
              <div className="space-y-2">
                <p><strong>Phone:</strong> (510) 770-0393</p>
                <p><strong>Email:</strong> dr.ndave.dds@gmail.com</p>
                <p><strong>Address:</strong> 39489 Fremont Blvd, Fremont, CA 94538</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Connect with Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition-colors">
                  Facebook
                </a>
                <a href="#" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition-colors">
                  Yelp
                </a>
                <a href="#" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition-colors">
                  Google
                </a>
              </div>
            </div>
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
