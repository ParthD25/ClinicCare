import Link from 'next/link';

export default function ChildrenDentistryPost() {
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
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Pediatric Dentistry
              </span>
              <span className="text-gray-500">October 28, 2025</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">4 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Children's Dentistry: Building Healthy Smiles from a Young Age
            </h1>
            <p className="text-xl text-gray-600">
              Discover the importance of pediatric dentistry and how early dental care sets the foundation for lifelong oral health.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Post Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2>Why Children's Dentistry Matters</h2>
          <p>
            Children's dentistry is more than just treating cavities—it's about establishing lifelong habits and preventing future dental problems. At Aspen Dental Care, we believe that starting dental care early is the key to a lifetime of healthy smiles.
          </p>

          <h2>When Should Children First Visit the Dentist?</h2>
          <p>
            The American Academy of Pediatric Dentistry recommends that children visit the dentist by their first birthday or within six months of their first tooth erupting. Early visits help:
          </p>
          <ul>
            <li>Monitor tooth development and oral growth</li>
            <li>Identify potential orthodontic issues early</li>
            <li>Establish a positive relationship with dental care</li>
            <li>Educate parents on proper oral hygiene</li>
          </ul>

          <h2>Common Childhood Dental Issues</h2>
          <div className="bg-yellow-50 p-6 rounded-lg my-8">
            <h3 className="text-yellow-800 font-semibold mb-4">Watch for These Signs:</h3>
            <ul className="text-yellow-700 space-y-2">
              <li><strong>Tooth Decay:</strong> Often caused by sugary drinks and poor oral hygiene</li>
              <li><strong>Thumb Sucking:</strong> Can affect tooth alignment if continued past age 3</li>
              <li><strong>Early Tooth Loss:</strong> Baby teeth are important space holders</li>
              <li><strong>Grinding:</strong> Common in children and may require intervention</li>
              <li><strong>Mouth Breathing:</strong> Can affect jaw development and tooth alignment</li>
            </ul>
          </div>

          <h2>Preventive Care for Children</h2>
          <p>
            Prevention is the cornerstone of children's dentistry. We focus on:
          </p>
          <ul>
            <li><strong>Regular Check-ups:</strong> Every 6 months for monitoring and cleaning</li>
            <li><strong>Fluoride Treatments:</strong> Strengthens enamel and prevents decay</li>
            <li><strong>Dental Sealants:</strong> Protects molars from cavities</li>
            <li><strong>Education:</strong> Teaching proper brushing and flossing techniques</li>
            <li><strong>Diet Counseling:</strong> Guidance on nutrition for healthy teeth</li>
          </ul>

          <h2>Making Dental Visits Fun and Stress-Free</h2>
          <p>
            At Aspen Dental Care, we understand that children can be anxious about dental visits. Our pediatric-friendly approach includes:
          </p>
          <ul>
            <li>Child-sized dental chairs and equipment</li>
            <li>Colorful, welcoming environment</li>
            <li>Positive reinforcement and praise</li>
            <li>Distraction techniques and entertainment</li>
            <li>Parent involvement in the process</li>
          </ul>

          <h2>The Importance of Baby Teeth</h2>
          <p>
            Baby teeth may be temporary, but they're incredibly important:
          </p>
          <ul>
            <li><strong>Speech Development:</strong> Help children learn to speak clearly</li>
            <li><strong>Proper Nutrition:</strong> Enable children to chew food properly</li>
            <li><strong>Space Holders:</strong> Reserve space for permanent teeth</li>
            <li><strong>Self-Esteem:</strong> Contribute to a child's confidence and smile</li>
          </ul>

          <h2>Transitioning to Adult Dentistry</h2>
          <p>
            As children grow, their dental needs change. We help families transition from pediatric to adult care by:
          </p>
          <ul>
            <li>Monitoring the eruption of permanent teeth</li>
            <li>Assessing orthodontic needs</li>
            <li>Teaching advanced oral hygiene techniques</li>
            <li>Preparing teens for independent dental care</li>
          </ul>

          <h2>Emergency Dental Care for Children</h2>
          <p>
            Dental emergencies can happen to children too. Common pediatric dental emergencies include:
          </p>
          <ul>
            <li>Knocked-out baby teeth (usually don't need re-implantation)</li>
            <li>Knocked-out permanent teeth (requires immediate attention)</li>
            <li>Tooth fractures or cracks</li>
            <li>Severe toothaches or infections</li>
            <li>Lost fillings or broken appliances</li>
          </ul>

          <div className="bg-green-50 p-6 rounded-lg my-8">
            <h3 className="text-green-800 font-semibold mb-2">Schedule Your Child's First Dental Visit</h3>
            <p className="text-green-700 mb-4">
              Early dental care sets the foundation for a lifetime of healthy smiles. Contact us today to schedule your child's first dental appointment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="tel:+15107700393" className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors text-center">
                Call (510) 770-0393
              </Link>
              <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors text-center">
                Book Appointment
              </Link>
            </div>
          </div>

          <h2>Partnering with Parents</h2>
          <p>
            We believe that parents are our partners in children's dental health. We provide guidance on:
          </p>
          <ul>
            <li>Choosing the right toothbrush and toothpaste</li>
            <li>Establishing a consistent oral hygiene routine</li>
            <li>Making healthy food choices</li>
            <li>Recognizing signs of dental problems</li>
            <li>Managing dental anxiety</li>
          </ul>

          <p>
            At Aspen Dental Care, we're committed to making every child's dental experience positive and educational. Our goal is to help children develop healthy habits that will serve them throughout their lives.
          </p>
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