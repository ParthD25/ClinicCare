import Link from 'next/link';
import Image from 'next/image';

export default function ChildrenDentistryPage() {
  const services = [
    {
      name: 'Dental Sealants',
      description: 'Protective coating applied to the chewing surfaces of back teeth to prevent cavities',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop',
      features: ['Painless application', 'Long-lasting protection', 'Prevents 80% of cavities']
    },
    {
      name: 'Fluoride Treatments',
      description: 'Professional application of fluoride to strengthen tooth enamel and prevent decay',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      features: ['Strengthens enamel', 'Prevents cavities', 'Safe for children']
    },
    {
      name: 'Air Abrasion',
      description: 'Gentle alternative to traditional drilling for removing small cavities',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
      features: ['No drilling noise', 'Minimal discomfort', 'Preserves healthy tooth structure']
    },
    {
      name: 'Composite Fillings',
      description: 'Tooth-colored fillings that blend naturally with your child\'s teeth',
      image: 'https://images.unsplash.com/photo-1588776815141-1a6b6c7b14b3?w=400&h=300&fit=crop',
      features: ['Natural appearance', 'Strong and durable', 'Same-day placement']
    },
    {
      name: 'Pulpotomy',
      description: 'Treatment for baby teeth with deep cavities to save the tooth until it falls out naturally',
      image: 'https://images.unsplash.com/photo-1606811985880-b4e6b6447c3d?w=400&h=300&fit=crop',
      features: ['Saves baby teeth', 'Pain relief', 'Maintains space for adult teeth']
    },
    {
      name: 'Stainless Steel Crowns',
      description: 'Durable crowns for baby teeth that need extra protection',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop',
      features: ['Very durable', 'Cost-effective', 'Maintains tooth function']
    }
  ];

  const ageGroups = [
    {
      age: 'Infants (0-2 years)',
      services: ['First dental visit', 'Oral health education', 'Teething guidance'],
      image: 'https://images.unsplash.com/photo-1544569226-44165ff6e324?w=300&h=200&fit=crop'
    },
    {
      age: 'Toddlers (2-5 years)',
      services: ['Preventive care', 'Fluoride treatments', 'Dental sealants'],
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&h=200&fit=crop'
    },
    {
      age: 'School Age (6-12 years)',
      services: ['Orthodontic evaluation', 'Cavity prevention', 'Emergency care'],
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=200&fit=crop'
    },
    {
      age: 'Teenagers (13-18 years)',
      services: ['Wisdom teeth evaluation', 'Sports dentistry', 'Cosmetic dentistry'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop'
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
              Pediatric Dental Care
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Gentle, comprehensive dental care designed specifically for children of all ages
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Pediatric Dentistry?</h2>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl mt-1">✓</span>
                  <span className="text-gray-700">Child-friendly environment with games and toys</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl mt-1">✓</span>
                  <span className="text-gray-700">Gentle techniques and local anesthesia for comfort</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl mt-1">✓</span>
                  <span className="text-gray-700">Focus on prevention to avoid future dental problems</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl mt-1">✓</span>
                  <span className="text-gray-700">Education for parents on proper oral hygiene</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl mt-1">✓</span>
                  <span className="text-gray-700">Early detection of orthodontic issues</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <Image
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&h=400&fit=crop"
                alt="Happy child at dentist"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Pediatric Services</h2>
            <p className="text-lg text-gray-600">Specialized treatments for healthy, happy smiles</p>
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

      {/* Age-Specific Care */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Age-Appropriate Care</h2>
            <p className="text-lg text-gray-600">Tailored dental care for every stage of childhood</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ageGroups.map((group, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image
                    src={group.image}
                    alt={group.age}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{group.age}</h3>
                  <ul className="space-y-2">
                    {group.services.map((service, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Space Maintenance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Space Maintenance</h2>
              <p className="text-gray-600 mb-6">
                When baby teeth are lost prematurely, space maintainers hold the space for adult teeth to come in properly.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">🦷</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Fixed Space Maintainers</h3>
                    <p className="text-gray-600">Cemented appliances that stay in place until adult teeth erupt</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">📏</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Removable Space Maintainers</h3>
                    <p className="text-gray-600">Custom appliances that can be taken out for cleaning</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">⏰</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Early Intervention</h3>
                    <p className="text-gray-600">Prevents costly orthodontic treatment later in life</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=400&fit=crop"
                alt="Space maintainer appliance"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Care */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Dental Care</h2>
            <p className="text-lg text-gray-600">We treat dental emergencies for children with care and compassion</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🦷</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Knocked-Out Teeth</h3>
              <p className="text-gray-600">Immediate care to save baby teeth and manage pain</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💔</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Severe Toothache</h3>
              <p className="text-gray-600">Pain relief and treatment for infected or damaged teeth</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Broken Teeth</h3>
              <p className="text-gray-600">Repair of chipped or fractured teeth with appropriate restorations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Give Your Child a Healthy Smile</h2>
          <p className="text-xl mb-8">Schedule your child's first dental visit and establish a lifetime of good oral health.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+15107700393" className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Call: (510) 770-0393
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Schedule Visit
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