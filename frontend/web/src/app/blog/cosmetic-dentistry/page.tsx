import Link from 'next/link';

export default function CosmeticDentistryPost() {
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
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                Cosmetic Dentistry
              </span>
              <span className="text-gray-500">October 25, 2025</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">6 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cosmetic Dentistry: Transform Your Smile with Confidence
            </h1>
            <p className="text-xl text-gray-600">
              Explore the various cosmetic dentistry options available to enhance your smile and boost your self-confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Post Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2>What is Cosmetic Dentistry?</h2>
          <p>
            Cosmetic dentistry focuses on improving the appearance of your teeth, gums, and smile. While traditional dentistry focuses on oral health, cosmetic dentistry combines health and aesthetics to create beautiful, confident smiles. At Aspen Dental Care, we offer a comprehensive range of cosmetic treatments to help you achieve the smile you've always wanted.
          </p>

          <h2>Popular Cosmetic Dentistry Procedures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-blue-800 font-semibold mb-3">Teeth Whitening</h3>
              <p className="text-blue-700">
                Professional whitening treatments that safely remove stains and discoloration, restoring your teeth to their natural brightness.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-green-800 font-semibold mb-3">Dental Veneers</h3>
              <p className="text-green-700">
                Thin porcelain shells that cover the front of teeth to correct imperfections like chips, gaps, and discoloration.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-purple-800 font-semibold mb-3">Dental Bonding</h3>
              <p className="text-purple-700">
                A composite resin material applied to teeth to repair chips, close gaps, and improve the appearance of stained or misshapen teeth.
              </p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-yellow-800 font-semibold mb-3">Dental Crowns</h3>
              <p className="text-yellow-700">
                Custom-made caps that cover damaged or weakened teeth, restoring their shape, size, and strength while improving appearance.
              </p>
            </div>
          </div>

          <h2>Invisalign and Orthodontic Treatment</h2>
          <p>
            Straight teeth are not only beautiful but also healthier. Invisalign offers a discreet way to straighten teeth using clear, removable aligners. Unlike traditional braces, Invisalign aligners are virtually invisible and can be removed for eating and cleaning.
          </p>

          <h2>Gum Contouring and Reshaping</h2>
          <p>
            Sometimes called gum lifts, this procedure reshapes the gum line to create a more balanced and attractive smile. It's particularly beneficial for people with "gummy" smiles or uneven gum lines.
          </p>

          <h2>The Benefits of Cosmetic Dentistry</h2>
          <p>
            Beyond aesthetics, cosmetic dentistry offers numerous benefits:
          </p>
          <ul>
            <li><strong>Boosted Self-Confidence:</strong> A beautiful smile can improve your self-esteem and social interactions</li>
            <li><strong>Better Oral Health:</strong> Many cosmetic procedures also improve dental health</li>
            <li><strong>Improved Functionality:</strong> Corrected teeth often function better for eating and speaking</li>
            <li><strong>Long-Lasting Results:</strong> Modern cosmetic treatments provide durable, natural-looking results</li>
            <li><strong>Youthful Appearance:</strong> A bright, healthy smile can make you look younger</li>
          </ul>

          <h2>Is Cosmetic Dentistry Right for You?</h2>
          <p>
            Cosmetic dentistry can benefit almost anyone who wants to improve their smile. Common reasons people seek cosmetic treatment include:
          </p>
          <ul>
            <li>Stained or discolored teeth</li>
            <li>Chipped or cracked teeth</li>
            <li>Missing teeth</li>
            <li>Crooked or misaligned teeth</li>
            <li>Gaps between teeth</li>
            <li>Worn-down teeth</li>
            <li>Gummy smiles</li>
          </ul>

          <h2>The Treatment Process</h2>
          <p>
            At Aspen Dental Care, we follow a comprehensive approach to cosmetic dentistry:
          </p>
          <ol>
            <li><strong>Initial Consultation:</strong> We discuss your goals and examine your oral health</li>
            <li><strong>Treatment Planning:</strong> We create a customized plan based on your needs and budget</li>
            <li><strong>Preparation:</strong> Any necessary preparation work is completed</li>
            <li><strong>Treatment:</strong> The cosmetic procedure is performed with precision and care</li>
            <li><strong>Follow-up:</strong> We ensure you're satisfied with the results and provide maintenance guidance</li>
          </ol>

          <h2>Maintaining Your Cosmetic Results</h2>
          <div className="bg-blue-50 p-6 rounded-lg my-8">
            <h3 className="text-blue-800 font-semibold mb-4">Care Tips for Lasting Beauty:</h3>
            <ul className="text-blue-700 space-y-2">
              <li><strong>Daily Oral Hygiene:</strong> Brush twice daily and floss regularly</li>
              <li><strong>Regular Dental Visits:</strong> Professional cleanings every 6 months</li>
              <li><strong>Avoid Stain-Causing Foods:</strong> Limit coffee, tea, red wine, and tobacco</li>
              <li><strong>Wear Protection:</strong> Use mouthguards for sports or teeth grinding</li>
              <li><strong>Touch-Up Treatments:</strong> Periodic whitening or maintenance as needed</li>
            </ul>
          </div>

          <h2>Combining Health and Beauty</h2>
          <p>
            At Aspen Dental Care, we believe that oral health and aesthetics go hand in hand. Our cosmetic treatments not only enhance your appearance but also improve your overall dental health. Dr. Dave combines years of experience with the latest techniques to deliver results that look natural and last for years.
          </p>

          <h2>Financing Your Smile Makeover</h2>
          <p>
            We understand that cosmetic dentistry is an investment in yourself. We offer flexible financing options and work with most insurance providers to make treatment accessible. During your consultation, we'll discuss costs and payment options to find a solution that fits your budget.
          </p>

          <div className="bg-purple-50 p-6 rounded-lg my-8">
            <h3 className="text-purple-800 font-semibold mb-2">Ready to Transform Your Smile?</h3>
            <p className="text-purple-700 mb-4">
              Don't let dental imperfections hold you back. Contact Aspen Dental Care today to schedule a consultation and discover how cosmetic dentistry can give you the smile you've always dreamed of.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="tel:+15107700393" className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors text-center">
                Call (510) 770-0393
              </Link>
              <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors text-center">
                Schedule Consultation
              </Link>
            </div>
          </div>

          <h2>The Aspen Dental Care Difference</h2>
          <p>
            What sets Aspen Dental Care apart in cosmetic dentistry?
          </p>
          <ul>
            <li><strong>Personalized Approach:</strong> Each treatment plan is customized to your unique needs</li>
            <li><strong>Advanced Technology:</strong> We use the latest techniques and materials</li>
            <li><strong>Experienced Team:</strong> Dr. Dave's expertise ensures exceptional results</li>
            <li><strong>Comfortable Environment:</strong> Relaxing atmosphere for stress-free visits</li>
            <li><strong>Ongoing Support:</strong> We're here to maintain your beautiful smile for years to come</li>
          </ul>

          <p>
            Your smile is one of your most valuable assets. At Aspen Dental Care, we're committed to helping you achieve and maintain the beautiful, healthy smile you deserve. Contact us today to start your journey toward a more confident you.
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