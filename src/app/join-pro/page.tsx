"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useService } from "@/context/ServiceContext";
import { useAuth } from "@/context/AuthContext";
import { CATEGORIES } from "@/constants";
import { FiDollarSign, FiLayout, FiImage } from "react-icons/fi";

/**
 * JoinProPage Component
 * ---------------------
 * Represents the "Become a Pro" provider flow.
 * Allows users to publish new services to the platform.
 * Features a form with client-side validation and simulated image generation.
 */
export default function JoinProPage() {
  const router = useRouter();
  
  // Access global contexts for service management and user authentication
  const { addService } = useService();
  const { user } = useAuth();
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form state management
  const [formData, setFormData] = useState({
    title: "",
    category: CATEGORIES[0].name, // Default to the first category
    price: "",
    description: "",
  });

  /**
   * Handles the service publication process.
   * Simulates an API call and redirects the user to the home page upon success.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Fallback for guest users (for testing purposes)
    const providerName = user?.name || "New Professional";
    
    // TODO: Implement real file upload using a cloud storage provider (e.g., AWS S3, Cloudinary).
    // CURRENT WORKAROUND: Generating dynamic images via Picsum to simulate uploaded content.
    const randomId = Math.floor(Math.random() * 1000);
    const serviceImage = `https://picsum.photos/id/${randomId}/800/600`;
    
    // Generating a consistent avatar based on the provider's name (simulated)
    const providerAvatar = `https://picsum.photos/seed/${providerName}/100/100`;

    // Construct the new service object
    const newService = {
      id: Date.now(), // Generate a temporary unique ID
      title: formData.title,
      category: formData.category,
      price: Number(formData.price),
      image: serviceImage,
      rating: 5.0, // New services start with a perfect rating to boost visibility (Gamification)
      reviews: 0,
      proName: providerName,
      proAvatar: providerAvatar,
    };

    // Simulate network latency
    setTimeout(() => {
      addService(newService); // Update global state
      router.push("/"); // Redirect to Landing Page to see the new card
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Become a ServicePro</h1>
          <p className="text-gray-500 mt-2">Start earning money by offering your services to thousands of customers.</p>
        </div>

        {/* Service Creation Form */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Input: Service Title */}
            <div>
              <label htmlFor="service-title" className="block text-sm font-medium text-gray-700 mb-2">
                Service Title
              </label>
              <div className="relative">
                <input 
                  id="service-title"
                  type="text" 
                  required
                  placeholder="e.g. Professional House Cleaning"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                />
                <FiLayout className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Row: Category & Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Input: Category Selection */}
              <div>
                <label htmlFor="category-select" className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select 
                  id="category-select"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                >
                  {CATEGORIES.map(cat => (
                    <option key={cat.name} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
              </div>

              {/* Input: Price */}
              <div>
                <label htmlFor="service-price" className="block text-sm font-medium text-gray-700 mb-2">
                  Starting Price ($)
                </label>
                <div className="relative">
                  <input 
                    id="service-price"
                    type="number" 
                    required
                    placeholder="80"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                  />
                  <FiDollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>

            {/* UI Component: Photo Upload Mockup */}
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center bg-gray-50">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-3 text-blue-600">
                    <FiImage size={24} />
                </div>
                <h3 className="font-bold text-gray-900 text-sm">Upload Cover Photo</h3>
                <p className="text-xs text-gray-500 mt-1">We&apos;ll use a default image for now.</p>
            </div>

            {/* Action Button */}
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full font-bold py-4 rounded-xl text-lg transition shadow-lg flex items-center justify-center gap-2
                ${isSubmitting ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"}`}
            >
              {isSubmitting ? "Publishing..." : "Publish Service"}
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}