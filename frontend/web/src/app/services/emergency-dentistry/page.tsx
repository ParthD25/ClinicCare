import Link from 'next/link';
import Image from 'next/image';

export default function EmergencyDentistryPage() {
  const emergencySigns = [
    {
      title: 'Severe Tooth Pain',
      description: 'Intense, persistent pain that interferes with eating, sleeping, or daily activities',
      icon: '😣',
      urgent: true
    },
    {
      title: 'Knocked-Out Tooth',
      description: 'A permanent tooth that has been completely displaced from its socket',
      icon: '🦷',
      urgent: true
    },
    {
      title: 'Broken or Cracked Tooth',
      description: 'A tooth that has been fractured or broken, especially if causing pain',
      icon: '💔',
      urgent: true
    },
    {
      title: 'Lost Filling or Crown',
      description: 'A dental restoration that has fallen out, exposing sensitive tooth structure',
      icon: '🔧',
      urgent: false
    },
    {
      title: 'Swelling or Abscess',
      description: 'Facial swelling, pus, or signs of infection around teeth or gums',
      icon: '🔴',
      urgent: true
    },
    {
      title: 'Bleeding Gums',
      description: 'Uncontrolled bleeding from gums that won\'t stop with pressure',
      icon: '🩸',
      urgent: true
    }
  ];

  const services = [
    {
      name: 'Same-Day Emergency Care',
      description: 'Immediate treatment for urgent dental problems',
      features: ['Walk-ins welcome', 'Pain relief', 'Temporary solutions']
    },
    {
      name: 'Tooth Extractions',
      description: 'Safe removal of damaged or infected teeth',
      features: ['Local numbing', 'Comfortable procedure', 'Post-care instructions']
    },
    {
      name: 'Infection Treatment',
      description: 'Antibiotics and drainage for dental infections',
      features: ['Prescription medication', 'Abscess drainage', 'Follow-up care']
    },
    {
      name: 'Broken Tooth Repair',
      description: 'Emergency bonding and temporary crowns',
      features: ['Pain relief', 'Protection', 'Permanent repair planning']
    },
    {
      name: 'Lost Restoration Replacement',
      description: 'Temporary replacement of lost fillings or crowns',
      features: ['Same-day service', 'Protection', 'Permanent restoration']
    },
    {
      name: 'Trauma Care',
      description: 'Treatment for dental injuries from accidents',
      features: ['Splinting', 'Root canal', 'Restorative treatment']
    }
  ];

  const whatToDo = [
    {
      situation: 'Knocked-Out Tooth',
      steps: [
        'Handle tooth by the crown only',
        'Rinse gently with water (no soap)',
        'Try to reinsert in socket if possible',
        'Keep moist in milk or saliva',
        'Call immediately for emergency care'
      ]
    },
    {
      situation: 'Severe Pain',
      steps: [
        'Rinse mouth with warm water',
        'Use dental floss to remove food particles',
        'Take over-the-counter pain reliever',
        'Apply cold compress to reduce swelling',
        'Contact dentist immediately'
      ]
    },
    {
      situation: 'Broken Tooth',
      steps: [
        'Save any broken pieces',
        'Rinse mouth with warm water',
        'Apply gauze if bleeding',
        'Take pain medication if needed',
        'Seek immediate dental care'
      ]
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
      <section className="bg-gradient-to-r from-red-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Dental Emergency Care
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              When you need immediate dental care, we're here to help. 24/7 emergency support available.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <span className="text-3xl">🚨</span>
                <p className="text-sm text-gray-600 mt-2">24/7 Support</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <span className="text-3xl">⚡</span>
                <p className="text-sm text-gray-600 mt-2">Same-Day Care</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <span className="text-3xl">🩹</span>
                <p className="text-sm text-gray-600 mt-2">Pain Relief</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Signs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">When is it a Dental Emergency?</h2>
            <p className="text-lg text-gray-600">Know the signs that require immediate attention</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencySigns.map((sign, index) => (
              <div key={index} className={`p-6 rounded-lg border-2 ${sign.urgent ? 'border-red-200 bg-red-50' : 'border-yellow-200 bg-yellow-50'}`}>
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-3">{sign.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900">{sign.title}</h3>
                  {sign.urgent && (
                    <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      URGENT
                    </span>
                  )}
                </div>
                <p className="text-gray-600">{sign.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Dental Services</h2>
            <p className="text-lg text-gray-600">Comprehensive care when you need it most</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Do */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What to Do in a Dental Emergency</h2>
            <p className="text-lg text-gray-600">Quick actions to take while seeking professional care</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whatToDo.map((situation, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{situation.situation}</h3>
                <ol className="space-y-2">
                  {situation.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">
                        {idx + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Emergency Dental Care?</h2>
          <p className="text-xl mb-8">Don't wait - contact us immediately for urgent dental problems</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-blue-700 p-6 rounded-lg">
              <div className="text-4xl mb-3">📞</div>
              <h3 className="text-xl font-semibold mb-2">Call Now</h3>
              <p className="text-lg font-bold">(510) 770-0393</p>
              <p className="text-sm">24/7 Emergency Line</p>
            </div>
            <div className="bg-blue-700 p-6 rounded-lg">
              <div className="text-4xl mb-3">🏥</div>
              <h3 className="text-xl font-semibold mb-2">Walk-Ins Welcome</h3>
              <p className="text-lg">Same-Day Appointments</p>
              <p className="text-sm">No Appointment Needed</p>
            </div>
            <div className="bg-blue-700 p-6 rounded-lg">
              <div className="text-4xl mb-3">🚑</div>
              <h3 className="text-xl font-semibold mb-2">After Hours</h3>
              <p className="text-lg">Emergency Coverage</p>
              <p className="text-sm">Call for Instructions</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="text-center mb-4">
              <p className="text-white text-lg font-semibold mb-2">For immediate life-threatening emergencies:</p>
              <p className="text-white text-2xl font-bold">🚨 CALL 911 🚨</p>
            </div>
            <Link href="tel:+15107700393" className="bg-red-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition-colors">
              Dental Emergency: (510) 770-0393
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Get Directions
            </Link>
          </div>
        </div>
      </section>

      {/* Prevention */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Prevent Dental Emergencies</h2>
            <p className="text-lg text-gray-600">Simple steps to avoid dental emergencies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧼</span>
              </div>
              <h3 className="font-semibold mb-2">Daily Oral Care</h3>
              <p className="text-gray-600 text-sm">Brush twice daily, floss daily, use mouthwash</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍⚕️</span>
              </div>
              <h3 className="font-semibold mb-2">Regular Check-ups</h3>
              <p className="text-gray-600 text-sm">Visit dentist every 6 months for preventive care</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="font-semibold mb-2">Protect Your Teeth</h3>
              <p className="text-gray-600 text-sm">Wear mouthguards for sports and grinding guards</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍎</span>
              </div>
              <h3 className="font-semibold mb-2">Healthy Diet</h3>
              <p className="text-gray-600 text-sm">Limit sugary foods and drinks, choose healthy snacks</p>
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