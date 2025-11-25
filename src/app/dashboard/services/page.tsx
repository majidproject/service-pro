"use client";

import Image from "next/image";
import Link from "next/link";
import { useService } from "@/context/ServiceContext";
import { useAuth } from "@/context/AuthContext";
import { FiPlus, FiBriefcase, FiStar, FiEdit2 } from "react-icons/fi";

export default function MyServicesPage() {
  const { services } = useService(); // کل خدمات سایت
  const { user } = useAuth(); // کاربر لاگین شده

  // فیلتر کردن: فقط خدماتی که اسم پرووایدرش با اسم من یکی باشد
  const myServices = services.filter(service => service.proName === user?.name);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">My Services</h1>
        <Link 
            href="/join-pro" 
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded-lg transition"
        >
            <FiPlus /> New Service
        </Link>
      </div>

      {myServices.length === 0 ? (
        /* --- حالت خالی --- */
        <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
            <FiBriefcase size={32} />
          </div>
          <h3 className="text-lg font-bold text-gray-900">You haven't posted any services</h3>
          <p className="text-gray-500 mb-6">Start earning by offering your skills to neighbors.</p>
          <Link 
            href="/join-pro" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-colors"
          >
            Create Your First Service
          </Link>
        </div>
      ) : (
        /* --- لیست خدمات من --- */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myServices.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
              
              <div className="relative h-40">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                   <FiStar className="text-yellow-400 fill-yellow-400" /> {service.rating}
                </div>
              </div>

              <div className="p-5">
                <div className="text-xs text-blue-600 font-bold uppercase mb-1">{service.category}</div>
                <h3 className="font-bold text-gray-900 mb-4">{service.title}</h3>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <span className="font-bold text-lg">${service.price}</span>
                    <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600 text-sm font-medium transition">
                        <FiEdit2 size={16} /> Edit
                    </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}