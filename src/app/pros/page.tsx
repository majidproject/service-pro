"use client";

import Image from "next/image";
import Link from "next/link";
import { useService } from "@/context/ServiceContext";
import { FiStar, FiBriefcase, FiArrowRight } from "react-icons/fi";

/**
 * Professionals Page
 * ------------------
 * Displays a directory of all active professionals on the platform.
 * Since we don't have a dedicated "Users" API yet, we extract unique providers
 * dynamically from the list of available services.
 */
export default function ProsPage() {
  const { services } = useService();

  // 1. Extract unique professionals from the services list
  // We use a Map to ensure each professional appears only once.
  const uniquePros = Array.from(
    new Map(services.map(s => [s.proName, s])).values()
  );

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Top Professionals</h1>
          <p className="text-gray-600">
            Meet the talented experts ready to help you with your next project.
          </p>
        </div>

        {/* Pros Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uniquePros.map((pro) => {
            // Calculate total services count for this pro
            const serviceCount = services.filter(s => s.proName === pro.proName).length;

            return (
              <div key={pro.proName} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col items-center text-center">
                
                {/* Avatar */}
                <div className="relative w-24 h-24 mb-4">
                  <Image 
                    src={pro.proAvatar} 
                    alt={pro.proName} 
                    fill 
                    className="object-cover rounded-full border-4 border-gray-50"
                  />
                  <div className="absolute bottom-0 right-0 bg-blue-600 text-white p-1.5 rounded-full border-2 border-white">
                    <FiBriefcase size={12} />
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-gray-900 mb-1">{pro.proName}</h3>
                <p className="text-sm text-gray-500 mb-4">Professional Service Provider</p>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-xl mb-6">
                  <div className="flex items-center gap-1">
                    <FiStar className="text-yellow-400 fill-yellow-400" />
                    <span className="font-bold text-gray-900">5.0</span>
                  </div>
                  <div className="w-px h-4 bg-gray-300"></div>
                  <div>
                    <span className="font-bold text-gray-900">{serviceCount}</span> Services
                  </div>
                </div>

                {/* Action */}
                <Link 
                  href={`/services?q=${pro.proName}`} // Link to search page with pro's name pre-filled
                  className="w-full flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 text-gray-700 font-bold py-3 rounded-xl transition-all"
                >
                  View Profile <FiArrowRight />
                </Link>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}