import Image from "next/image";
import { FiUsers, FiTarget, FiAward } from "react-icons/fi";

/**
 * About Us Page
 * -------------
 * A static informational page telling the company's story, mission, and team.
 * Designed to build trust and transparency with potential customers and providers.
 */

// Mock data for the team section
const TEAM_MEMBERS = [
  {
    name: "Alex Morgan",
    role: "Co-Founder & CEO",
    image: "https://picsum.photos/seed/alex/400/400",
  },
  {
    name: "Sarah Chen",
    role: "Head of Operations",
    image: "https://picsum.photos/seed/sarah_chen/400/400",
  },
  {
    name: "David Miller",
    role: "Lead Engineer",
    image: "https://picsum.photos/seed/david/400/400",
  },
  {
    name: "Emily Taylor",
    role: "Customer Success",
    image: "https://picsum.photos/seed/emily/400/400",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Hero Section: Mission Statement */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Empowering Local Professionals</h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            We are on a mission to simplify how people find trusted help for their homes, 
            while helping millions of professionals grow their businesses.
          </p>
        </div>
      </section>

      {/* 2. Key Values / Stats */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-50 rounded-2xl">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiUsers size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">50k+</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiTarget size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">120+</h3>
            <p className="text-gray-600">Service Categories</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl">
            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiAward size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">4.8/5</h3>
            <p className="text-gray-600">Average Rating</p>
          </div>
        </div>
      </section>

      {/* 3. Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-lg">
            <Image 
              src="https://picsum.photos/seed/office/800/600" 
              alt="Our office working environment"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in 2023, ServicePro started with a simple idea: it shouldn&apos;t be hard to find a reliable plumber or cleaner. 
              What began as a small project in a garage has now grown into a platform connecting thousands of neighbors.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe in the power of technology to build communities. Every booking on our platform supports a local entrepreneur and helps a neighbor get their to-do list done.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Meet the Team */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet the Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform">
                <Image 
                  src={member.image} 
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-gray-900">{member.name}</h3>
              <p className="text-sm text-blue-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}