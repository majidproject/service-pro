import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FEATURED_SERVICES } from "@/constants";
import { FiStar, FiCheck, FiMapPin, FiClock } from "react-icons/fi";

/**
 * Service Details Page
 * --------------------
 * A Server Component that renders the full details of a specific service.
 * It uses Dynamic Routing based on the service ID.
 *
 * NOTE: In Next.js 15, route params are asynchronous and must be awaited
 * before access. This component handles that resolution.
 */

interface ServicePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  // Await the params object to access the dynamic ID (Next.js 15 requirement)
  const resolvedParams = await params;
  
  // Lookup the service in the mock database (Constants)
  // TODO: Replace with a real database query (e.g., fetchServiceById(id))
  const service = FEATURED_SERVICES.find((item) => item.id === Number(resolvedParams.id));

  // Handle invalid IDs gracefully by rendering the 404 page
  if (!service) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* Hero Section with Background Image */}
      <div className="relative h-[400px] w-full">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          priority // Prioritize loading the LCP (Largest Contentful Paint) image
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white">
          <div className="container mx-auto">
             <span className="bg-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4 inline-block">
               Service Details
             </span>
             <h1 className="text-4xl md:text-6xl font-bold mb-4">{service.title}</h1>
             <div className="flex items-center gap-6 text-sm md:text-base">
                <span className="flex items-center gap-2">
                    <FiStar className="text-yellow-400"/> {service.rating} ({service.reviews} reviews)
                </span>
                <span className="flex items-center gap-2"><FiMapPin /> Toronto, ON</span>
             </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Main Content Column */}
          <div className="md:col-span-2 space-y-8">
            
            {/* Service Description Box */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About this Service</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Looking for reliable {service.title}? Our verified professionals are here to help. 
                We ensure high-quality service with a satisfaction guarantee. 
                Standard service includes assessment, execution, and clean-up.
              </p>
              
              <h3 className="font-bold text-gray-900 mb-4">What&apos;s Included:</h3>
              <ul className="grid gap-3">
                {['Background-checked Pro', 'Upfront Pricing', 'Satisfaction Guarantee', '24/7 Support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <FiCheck className="text-green-500 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Provider Profile Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6">
                <Image 
                    src={service.proAvatar} 
                    alt={service.proName} 
                    width={80} 
                    height={80} 
                    className="rounded-full bg-gray-100"
                />
                <div>
                    <h3 className="text-xl font-bold text-gray-900">{service.proName}</h3>
                    <p className="text-gray-500 text-sm mb-2">Professional Service Provider</p>
                    <div className="flex items-center gap-1 text-yellow-500 text-sm">
                        ⭐⭐⭐⭐⭐ <span className="text-gray-400 ml-2">(Verified Pro)</span>
                    </div>
                </div>
            </div>
          </div>

          {/* Sidebar: Booking Action Box */}
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 sticky top-24">
                <div className="text-center mb-6">
                    <span className="text-gray-500 text-sm">Starting price</span>
                    <div className="text-4xl font-bold text-blue-600">${service.price}</div>
                </div>

                <Link href={`/book/${service.id}`} 
                    className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl mb-4 transition-all shadow-blue-200 shadow-lg"
                >
                    Book Now
                </Link>
                
                <p className="text-xs text-center text-gray-400 mb-6">
                    You won&apos;t be charged until the job is done.
                </p>

                <div className="border-t border-gray-100 pt-4 space-y-3 text-sm text-gray-600">
                    <div className="flex justify-between">
                        <span className="flex items-center gap-2"><FiClock /> Duration</span>
                        <span>2 - 4 Hours</span>
                    </div>
                    {/* Note: 'FiCheck' was used here but 'FiCheckCircle' might be more appropriate visually, keeping it consistent for now */}
                    <div className="flex justify-between">
                        <span className="flex items-center gap-2"><FiCheck /> Instant Book</span>
                        <span className="text-green-600 font-bold">Available</span>
                    </div>
                </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}