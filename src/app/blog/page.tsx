import Image from "next/image";
import Link from "next/link";
import { FiCalendar, FiUser } from "react-icons/fi";

/**
 * Blog Page
 * ---------
 * Displays a list of articles and news updates related to home services.
 *
 * Architectural Note:
 * In a production environment, this page should utilize Next.js "Static Site Generation" (SSG)
 * or "Incremental Static Regeneration" (ISR). Data should be fetched from a Headless CMS
 * (like Sanity, Strapi, or Contentful) at build time to ensure optimal SEO performance.
 */

// Mock data for blog posts (Placeholder for CMS data)
const BLOG_POSTS = [
  {
    id: 1,
    title: "10 Tips for a Spotless Home",
    excerpt: "Discover professional cleaning secrets that will change your routine forever.",
    date: "Oct 24, 2023",
    author: "Sarah Jenkins",
    category: "Cleaning",
    image: "https://picsum.photos/seed/blog1/800/600",
  },
  {
    id: 2,
    title: "How to Fix a Leaky Faucet",
    excerpt: "A step-by-step guide to saving water and money with simple DIY plumbing.",
    date: "Nov 12, 2023",
    author: "Mike Wilson",
    category: "Plumbing",
    image: "https://picsum.photos/seed/blog2/800/600",
  },
  {
    id: 3,
    title: "Moving Day Checklist",
    excerpt: "Don't forget these essential items when planning your next big move.",
    date: "Dec 05, 2023",
    author: "Emma Thompson",
    category: "Moving",
    image: "https://picsum.photos/seed/blog3/800/600",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Latest Articles</h1>
          <p className="text-gray-600">
            Expert advice, tips, and stories from the ServicePro community.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col"
            >
              {/* Blog Thumbnail */}
              <div className="relative h-48 w-full">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 uppercase tracking-wide">
                  {post.category}
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><FiCalendar /> {post.date}</span>
                  <span className="flex items-center gap-1"><FiUser /> {post.author}</span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  {post.excerpt}
                </p>

                <Link 
                  href={`/blog/${post.id}`} 
                  className="text-blue-600 font-semibold text-sm hover:underline mt-auto inline-block"
                >
                  Read More &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}