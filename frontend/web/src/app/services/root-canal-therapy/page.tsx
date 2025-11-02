import Link from 'next/link';
import Image from 'next/image';

export default function RootCanalTherapyPage() {
  const benefits = [
    {
      title: 'Save Your Natural Tooth',
      description: 'Keep your original tooth instead of extracting it',
      icon: '🦷'
    },
    {
      title: 'Pain Relief',
      description: 'Eliminate tooth pain and infection',
      icon: '😌'
    },
    {
      title: 'Restore Function',
      description: 'Return to normal eating and speaking',
      icon: '🍽️'
    },
    {
      title: 'Prevent Spread',
      description: 'Stop infection from affecting other teeth',
      icon: '🛡️'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Diagnosis',
      description: 'X-rays and examination to confirm root canal is needed',
      image: 'https://images.unsplash.com/photo-1606811951340-8c1b6b1f7b5f?w=300&h=200&fit=crop'
    },
    {
      step: '02',
      title: 'Anesthesia',
      description: 'Local anesthesia ensures you feel comfortable throughout',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop'
    },
    {
      step: '03',
      title: 'Cleaning',
      description: 'Remove infected pulp and clean the root canal system',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop'
    },
    {
      step: '04',
      title: 'Sealing',
      description: 'Fill and seal the canal, then place a crown for protection',
      image: 'https://images.unsplash.com/photo-1588776815141-1a6b6c7b14b3?w=300&h=200&fit=crop'
    }
  ];

  const mythsVsFacts = [
    {
      myth: 'Root canals are extremely painful',
      fact: 'Modern root canals are no more painful than getting a filling',
      icon: '❌'
    },
    {
      myth: 'Root canals cause illness',
      fact: 'Root canals treat infection and prevent it from spreading',
      icon: '✅'
    },
    {
      myth: 'Extraction is better than root canal',
      fact: 'Saving your natural tooth is always better than replacement',
      icon: '✅'
    },
    {
      myth: 'Root canals require multiple visits',
      fact: 'Most can be completed in just one or two appointments',
      icon: '✅'
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
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Root Canal Therapy: Save Your Smile
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Modern root canal treatment that eliminates pain and saves your natural tooth
            </p>
            <div className="flex justify-center space-x-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <span className="text-3xl">🦷</span>
                <p className="text-sm text-gray-600 mt-2">Save Your Tooth</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <span className="text-3xl">😌</span>
                <p className="text-sm text-gray-600 mt-2">Pain-Free</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <span className="text-3xl">⚡</span>
                <p className="text-sm text-gray-600 mt-2">Quick Recovery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Root Canal Therapy?</h2>
            <p className="text-lg text-gray-600">The benefits of saving your natural tooth</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What to Expect During Treatment</h2>
            <p className="text-lg text-gray-600">A simple, straightforward procedure</p>
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

      {/* Myths vs Facts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Myths vs Facts About Root Canals</h2>
            <p className="text-lg text-gray-600">Separating fact from fiction</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mythsVsFacts.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-red-600 mb-2">Myth: {item.myth}</h3>
                    <p className="text-green-600 font-medium">Fact: {item.fact}</p>
                  </div>
                </div>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Technology for Better Results</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">🔍</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Digital X-Rays</h3>
                    <p className="text-gray-600">Precise imaging with minimal radiation exposure</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">🦷</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Rotary Endodontics</h3>
                    <p className="text-gray-600">Advanced tools for efficient, comfortable treatment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">💻</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">3D Imaging</h3>
                    <p className="text-gray-600">Complete visualization of tooth structure</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">🛡️</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Sterilization</h3>
                    <p className="text-gray-600">Hospital-grade sterilization for your safety</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Image
                src="https://images.unsplash.com/photo-1606811985880-b4e6b6447c3d?w=500&h=400&fit=crop"
                alt="Modern dental technology"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Patient Success Stories</h2>
            <p className="text-lg text-gray-600">Real patients share their root canal experiences</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 text-lg">★★★★★</span>
                <span className="ml-2 text-gray-600">Sarah M.</span>
              </div>
              <p className="text-gray-700 italic">
                "I was terrified of root canals, but Dr. Smith made it completely painless.
                I can't believe I waited so long to get it done!"
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 text-lg">★★★★★</span>
                <span className="ml-2 text-gray-600">Mike R.</span>
              </div>
              <p className="text-gray-700 italic">
                "The procedure was quick and I was back to work the next day.
                Saved my tooth and eliminated the pain - couldn't be happier!"
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 text-lg">★★★★★</span>
                <span className="ml-2 text-gray-600">Jennifer L.</span>
              </div>
              <p className="text-gray-700 italic">
                "Modern root canals are nothing like the horror stories.
                I was comfortable throughout and the results are amazing."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't Wait - Save Your Tooth Today</h2>
          <p className="text-xl mb-8">Early treatment prevents complications and saves your natural tooth.</p>
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