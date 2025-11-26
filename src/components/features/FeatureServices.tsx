"use client"; // <--- 1. تبدیل به کلاینت کامپوننت (چون به کانتکست وصل می‌شود)

import Image from "next/image";
import Link from "next/link";
import { useService } from "@/context/ServiceContext"; // <--- 2. اتصال به دیتابیس خدمات
import { FiStar } from "react-icons/fi";

export default function FeaturedServices() {
  // 3. گرفتن لیست خدمات از کانتکست (شامل سرویس جدید تو)
  const { services } = useService();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="flex items-center justify-between mb-10">
            <div>
                <h2 className="text-3xl font-bold text-gray-900">Trending Services</h2>
                <p className="text-gray-500 mt-1">Most booked services by your neighbors this week.</p>
            </div>
            <Link href="/services" className="text-blue-600 font-semibold hover:underline hidden md:block">
                View all services &rarr;
            </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 4. حلقه روی لیست خدمات زنده (services) */}
          {services.map((service) => (
            <div key={service.id} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              
              <Link href={`/services/${service.id}`} className="relative h-48 overflow-hidden block">
                <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-gray-800 flex items-center gap-1 shadow-sm">
                    <FiStar className="text-yellow-400 fill-yellow-400" />
                    {service.rating} ({service.reviews})
                </div>
              </Link>

              <div className="p-5 flex flex-col flex-grow">
                <Link href={`/services/${service.id}`}>
                    <h3 className="font-bold text-lg text-gray-900 mb-2 hover:text-blue-600 transition">
                        {service.title}
                    </h3>
                </Link>
                
                <div className="flex items-center gap-2 mb-4">
                    <Image 
                        src={service.proAvatar} 
                        alt={service.proName} 
                        width={24} 
                        height={24} 
                        className="rounded-full bg-gray-100"
                    />
                    <span className="text-sm text-gray-500">by {service.proName}</span>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                    <div>
                        <span className="text-xs text-gray-400 uppercase font-bold">Starting at</span>
                        <div className="text-lg font-bold text-blue-600">${service.price}</div>
                    </div>
                    <Link 
                        href={`/services/${service.id}`}
                        className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                    >
                        Book Now
                    </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
            <Link href="/services" className="text-blue-600 font-semibold hover:underline">
                View all services &rarr;
            </Link>
        </div>

      </div>
    </section>
  );
}