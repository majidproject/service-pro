"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useService } from "@/context/ServiceContext";
import { FiSearch, FiFilter, FiStar } from "react-icons/fi";

/**
 * ServiceSearchContent Component
 * ------------------------------
 * Handles the logic for searching and filtering services.
 * Features:
 * - URL-based state synchronization (shareable search links).
 * - Client-side filtering by keyword and category.
 * - Responsive grid layout for results.
 */
function ServiceSearchContent() {
  const { services } = useService(); // Access global service data
  const searchParams = useSearchParams();

  // Retrieve initial filters from URL parameters (e.g., ?q=cleaning&category=Home Cleaning)
  const initialQuery = searchParams.get("q") || "";
  const initialCategory = searchParams.get("category") || "";

  const [searchTerm, setSearchTerm] = useState(initialQuery);

  /**
   * Sync local state with URL changes.
   * This ensures that if the user clicks "Back" or uses a deep link, the UI updates accordingly.
   * Conditional check prevents unnecessary re-renders.
   */
  useEffect(() => {
    if (initialQuery && initialQuery !== searchTerm) {
      setSearchTerm(initialQuery);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialQuery]);

  // Filter Logic: Matches title/category against search term AND category filter
  const filteredServices = services.filter((service) => {
    const matchesSearch = 
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.proName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = initialCategory 
      ? service.category === initialCategory 
      : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
        {/* Search Header & Filter Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {initialCategory ? `${initialCategory} Services` : "All Services"}
            </h1>
            <p className="text-gray-500 mt-1">
              Found {filteredServices.length} result(s).
            </p>
          </div>
          
          {/* Search Input Field */}
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search services..."
              aria-label="Search services"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Results Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredServices.map((service) => (
              <Link 
                key={service.id} 
                href={`/services/${service.id}`}
                aria-label={`View details for ${service.title}`}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all group block"
              >
                {/* Service Thumbnail */}
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-gray-800 flex items-center gap-1">
                    <FiStar className="text-yellow-400 fill-yellow-400" />
                    {service.rating}
                  </div>
                </div>
                
                {/* Service Info */}
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition">
                    {service.title}
                  </h3>
                  <div className="text-xs text-gray-500 mb-3">{service.category}</div>
                  <div className="flex items-center justify-between mt-auto">
                     <span className="text-xs text-gray-500">Starting at</span>
                     <span className="font-bold text-blue-600">${service.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* Empty State Display */
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                <FiFilter size={32} />
            </div>
            <h3 className="text-lg font-bold text-gray-900">No services found</h3>
            <p className="text-gray-500">Try adjusting your search terms.</p>
            {(searchTerm || initialCategory) && (
                <Link href="/services" className="text-blue-600 text-sm font-bold mt-2 inline-block hover:underline">
                    Clear all filters
                </Link>
            )}
          </div>
        )}
    </>
  );
}

/**
 * AllServicesPage (Main Page Component)
 * -------------------------------------
 * Wraps the search logic in a Suspense boundary.
 * NOTE: Suspense is required in Next.js App Router when using useSearchParams
 * to prevent de-opting to client-side rendering for the entire route.
 */
export default function AllServicesPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <Suspense fallback={<div className="text-center py-20">Loading services...</div>}>
          <ServiceSearchContent />
        </Suspense>
      </div>
    </div>
  );
}