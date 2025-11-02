import Link from 'next/link';

export default function RootCanalTherapyPost() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <img src="/aspen-dental-logo.jpg" alt="Aspen Dental Care Logo" className="h-10 w-auto" />
                <span className="text-2xl font-bold text-blue-600">Aspen Dental Care</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About Us</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
              <Link href="/portal" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Patient Portal
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Blog Post Header */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Endodontics
              </span>
              <span className="text-gray-500">November 1, 2025</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">5 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Understanding Root Canal Therapy: What You Need to Know
            </h1>
            <p className="text-xl text-gray-600">
              Learn about root canal therapy, when it's needed, and how modern techniques make the procedure comfortable and effective.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Post Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2>What is Root Canal Therapy?</h2>
          <p>
            Root canal therapy, also known as endodontic treatment, is a dental procedure designed to save a tooth that has become infected or severely damaged. Contrary to popular belief, root canal therapy is not painful—in fact, it's performed to relieve pain caused by infection.
          </p>

          <h2>When is Root Canal Therapy Needed?</h2>
          <p>
            Root canal therapy becomes necessary when the pulp (the soft tissue inside the tooth containing nerves and blood vessels) becomes infected or inflamed. This can happen due to:
          </p>
          <ul>
            <li>Deep cavities that reach the pulp</li>
            <li>Cracked or fractured teeth</li>
            <li>Repeated dental procedures on the same tooth</li>
            <li>Trauma to the tooth</li>
          </ul>

          <h2>The Root Canal Procedure</h2>
          <p>
            At Aspen Dental Care, we use modern techniques and anesthesia to ensure your comfort throughout the procedure:
          </p>
          <ol>
            <li><strong>Diagnosis:</strong> We use X-rays and clinical examination to determine if root canal therapy is needed.</li>
            <li><strong>Anesthesia:</strong> Local anesthesia is administered to numb the area.</li>
            <li><strong>Access:</strong> A small opening is made in the tooth to access the infected pulp.</li>
            <li><strong>Cleaning:</strong> The infected pulp is carefully removed and the canals are cleaned and shaped.</li>
            <li><strong>Filling:</strong> The canals are filled with a biocompatible material.</li>
            <li><strong>Restoration:</strong> The tooth is restored with a crown or filling for protection.</li>
          </ol>

          <h2>Myths About Root Canal Therapy</h2>
          <div className="bg-blue-50 p-6 rounded-lg my-8">
            <h3 className="text-blue-800 font-semibold mb-4">Common Misconceptions:</h3>
            <ul className="text-blue-700 space-y-2">
              <li><strong>Myth:</strong> Root canals are extremely painful</li>
              <li><strong>Fact:</strong> Modern techniques and anesthesia make the procedure comfortable</li>
              <li><strong>Myth:</strong> It's better to extract the tooth</li>
              <li><strong>Fact:</strong> Saving your natural tooth is always preferable when possible</li>
              <li><strong>Myth:</strong> Root canals cause illness</li>
              <li><strong>Fact:</strong> This myth has been thoroughly debunked by scientific research</li>
            </ul>
          </div>

          <h2>Benefits of Root Canal Therapy</h2>
          <p>
            Choosing root canal therapy offers several advantages:
          </p>
          <ul>
            <li><strong>Preserves Natural Teeth:</strong> Keeps your natural tooth instead of requiring extraction</li>
            <li><strong>Pain Relief:</strong> Eliminates the pain caused by infection</li>
            <li><strong>Restored Function:</strong> Allows normal chewing and speaking</li>
            <li><strong>Aesthetic Results:</strong> Maintains your natural smile</li>
            <li><strong>Cost-Effective:</strong> Often less expensive than tooth replacement options</li>
          </ul>

          <h2>Aftercare and Recovery</h2>
          <p>
            Recovery from root canal therapy is typically straightforward. Most patients can return to normal activities immediately, though you may experience mild discomfort for a few days. We recommend:
          </p>
          <ul>
            <li>Avoiding hard foods on the treated tooth until fully restored</li>
            <li>Maintaining excellent oral hygiene</li>
            <li>Attending follow-up appointments as scheduled</li>
            <li>Contacting us if you experience severe pain or swelling</li>
          </ul>

          <h2>Why Choose Aspen Dental Care?</h2>
          <p>
            At Aspen Dental Care, Dr. Dave brings years of experience in endodontic procedures. We use the latest technology, including digital X-rays and rotary instruments, to ensure precise and comfortable treatment. Our gentle approach and commitment to patient comfort make root canal therapy a stress-free experience.
          </p>

          <div className="bg-green-50 p-6 rounded-lg my-8">
            <h3 className="text-green-800 font-semibold mb-2">Ready to Schedule Your Root Canal?</h3>
            <p className="text-green-700 mb-4">
              Don't let tooth pain affect your quality of life. Contact us today to schedule a consultation and learn if root canal therapy is right for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="tel:+15107700393" className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors text-center">
                Call (510) 770-0393
              </Link>
              <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors text-center">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Back to Blog */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
            ← Back to Blog
          </Link>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/aspen-dental-logo.jpg" alt="Aspen Dental Care Logo" className="h-8 w-auto" />
                <span className="text-xl font-bold">Aspen Dental Care</span>
              </div>
              <p className="text-gray-400">
                Professional dental care services in Fremont, CA. Family and cosmetic dentistry with a gentle touch.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link href="/services/invisalign" className="text-gray-400 hover:text-white transition-colors">Invisalign</Link></li>
                <li><Link href="/services/cosmetic-dentistry" className="text-gray-400 hover:text-white transition-colors">Cosmetic Dentistry</Link></li>
                <li><Link href="/services/emergency-dentistry" className="text-gray-400 hover:text-white transition-colors">Emergency Care</Link></li>
                <li><Link href="/services/children-dentistry" className="text-gray-400 hover:text-white transition-colors">Children's Dentistry</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>📞 (510) 770-0393</p>
                <p>📧 dr.ndave.dds@gmail.com</p>
                <p>📍 Fremont, CA</p>
                <p>🕒 Mon-Fri: 9AM-6PM</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Aspen Dental Care. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}