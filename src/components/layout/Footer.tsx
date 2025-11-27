import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

/**
 * Footer Component
 * Renders the persistent site-wide footer.
 * Organized into a 4-column grid layout for navigation links and a bottom bar for copyright/legal info.
 */
export default function Footer() {
  // Automatically calculate the current year for the copyright notice.
  // This prevents the footer from showing an outdated year (e.g., "2023") in the future.
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        
        {/* Top Section: 4-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand Identity & Mission */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-white tracking-tight mb-4 inline-block">
              Service<span className="text-blue-500">Pro</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              The most trusted marketplace for local services. Hire professionals with confidence.
            </p>
          </div>

          {/* Column 2: Company Links */}
          {/* TODO: Connect these links to actual CMS pages or static routes */}
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
            </ul>
          </div>

          {/* Column 3: Support Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/help" className="hover:text-white transition">Help Center</Link></li>
              <li><Link href="/safety" className="hover:text-white transition">Safety</Link></li>
              <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Column 4: Social Media Links */}
          {/* NOTE: Since these links contain only icons, 'aria-label' is required for screen readers. */}
          <div>
            <h4 className="text-white font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <FaTwitter />
              </a>
              <a 
                href="#" 
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-800 transition-colors"
              >
                <FaFacebook />
              </a>
              <a 
                href="#" 
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>&copy; {currentYear} ServicePro Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <span>Privacy Policy</span>
             <span>Sitemap</span>
          </div>
        </div>

      </div>
    </footer>
  );
}