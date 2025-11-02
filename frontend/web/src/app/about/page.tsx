import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Lead Dentist',
      credentials: 'DDS, MS - Periodontics',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop',
      bio: 'Dr. Johnson has over 15 years of experience in comprehensive dental care, specializing in cosmetic and restorative dentistry.'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Orthodontist',
      credentials: 'DDS, MS - Orthodontics',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop',
      bio: 'Specializing in Invisalign and traditional orthodontics, Dr. Chen helps patients achieve beautiful, healthy smiles.'
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Pediatric Dentist',
      credentials: 'DDS, FAAPD',
      image: 'https://images.unsplash.com/photo-1594824804732-ca8db723f8fa?w=300&h=300&fit=crop',
      bio: 'Dr. Rodriguez creates positive dental experiences for children, ensuring they develop healthy habits for life.'
    }
  ];

  const values = [
    {
      title: 'Patient-Centered Care',
      description: 'We prioritize your comfort and well-being, providing gentle, compassionate dental care in a welcoming environment.',
      icon: '👥'
    },
    {
      title: 'Advanced Technology',
      description: 'We utilize the latest dental technology and techniques to provide the highest quality care with optimal results.',
      icon: '🔬'
    },
    {
      title: 'Preventive Focus',
      description: 'We emphasize prevention and education to help you maintain optimal oral health and avoid future dental issues.',
      icon: '🛡️'
    },
    {
      title: 'Continuing Education',
      description: 'Our team stays current with the latest advancements in dentistry through ongoing professional development.',
      icon: '📚'
    }
  ];

  const stats = [
    { number: '15+', label: 'Years of Experience' },
    { number: '5000+', label: 'Happy Patients' },
    { number: '50+', label: 'Continuing Education Hours' },
    { number: '24/7', label: 'Emergency Care' }
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
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
              <Link href="/about" className="text-blue-600 font-semibold">About Us</Link>
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
              About Aspen Dental Care
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Committed to providing exceptional dental care with compassion, expertise, and the latest technology in a comfortable, patient-centered environment.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <span className="text-3xl">🏆</span>
                <p className="text-sm text-gray-600 mt-2">Award-Winning Care</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <span className="text-3xl">❤️</span>
                <p className="text-sm text-gray-600 mt-2">Patient First</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <span className="text-3xl">🔬</span>
                <p className="text-sm text-gray-600 mt-2">Advanced Technology</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2010, Aspen Dental Care has been serving the community with exceptional dental care for over 15 years.
                Our mission is to provide comprehensive, patient-centered dental services that enhance oral health and overall well-being.
              </p>
              <p className="text-gray-600 mb-6">
                We believe that everyone deserves access to high-quality dental care in a comfortable, welcoming environment.
                Our team of experienced professionals is dedicated to staying at the forefront of dental technology and techniques.
              </p>
              <p className="text-gray-600">
                From routine cleanings to complex restorative procedures, we provide personalized care tailored to each patient's unique needs and goals.
              </p>
            </div>
            <div className="text-center">
              <Image
                src="https://images.unsplash.com/photo-1606811985880-b4e6b6447c3d?w=500&h=400&fit=crop"
                alt="Aspen Dental Care office"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">What drives us to provide exceptional care</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">Experienced professionals dedicated to your oral health</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-1">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-3">{member.credentials}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Facilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">State-of-the-Art Facilities</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">🦷</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Digital X-Ray Technology</h3>
                    <p className="text-gray-600">Advanced imaging with minimal radiation exposure</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">💻</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Electronic Health Records</h3>
                    <p className="text-gray-600">Secure, paperless patient records for better care coordination</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">🪑</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Comfortable Treatment Rooms</h3>
                    <p className="text-gray-600">Modern, private rooms designed for patient comfort</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">🧼</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Sterilization Center</h3>
                    <p className="text-gray-600">Hospital-grade sterilization for maximum safety</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=400&fit=crop"
                alt="Modern dental facility"
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
          <h2 className="text-3xl font-bold mb-4">Experience the Aspen Dental Care Difference</h2>
          <p className="text-xl mb-8">Schedule your appointment today and discover why thousands of patients trust us with their oral health.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+15107700393" className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Call: (510) 770-0393
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Schedule Appointment
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