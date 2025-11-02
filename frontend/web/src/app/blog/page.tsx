import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    id: 'root-canal-therapy',
    title: 'Understanding Root Canal Therapy: What You Need to Know',
    excerpt: 'Learn about root canal therapy, when it\'s needed, and how modern techniques make the procedure comfortable and effective.',
    date: 'November 1, 2025',
    readTime: '5 min read',
    image: '/aspen-dental-logo.jpg',
    category: 'Endodontics'
  },
  {
    id: 'children-dentistry',
    title: 'Children\'s Dentistry: Building Healthy Smiles from a Young Age',
    excerpt: 'Discover the importance of pediatric dentistry and how early dental care sets the foundation for lifelong oral health.',
    date: 'October 28, 2025',
    readTime: '4 min read',
    image: '/aspen-dental-logo.jpg',
    category: 'Pediatric Dentistry'
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry: Transform Your Smile with Confidence',
    excerpt: 'Explore the various cosmetic dentistry options available to enhance your smile and boost your self-confidence.',
    date: 'October 25, 2025',
    readTime: '6 min read',
    image: '/aspen-dental-logo.jpg',
    category: 'Cosmetic Dentistry'
  }
];

export default function BlogPage() {
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

      {/* Blog Header */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Dental Health Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest dental health tips, treatment insights, and wellness advice from Aspen Dental Care.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    <Link href={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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