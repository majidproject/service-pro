"use client"; // <--- چون می‌خواهیم از کانتکست بخوانیم

import Image from "next/image";
import Link from "next/link";
import { useBooking } from "@/context/BookingContext"; // اتصال به مغز سایت
import { FiCalendar, FiClock } from "react-icons/fi";

export default function MyBookingsPage() {
  const { bookings } = useBooking(); // دریافت لیست سفارش‌ها

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">My Bookings</h1>

      {bookings.length === 0 ? (
        /* --- حالت خالی (اگر سفارشی نبود) --- */
        <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
            <FiCalendar size={32} />
          </div>
          <h3 className="text-lg font-bold text-gray-900">No active bookings</h3>
          <p className="text-gray-500 mb-6">You haven&apos;t booked any services yet.</p>
          <Link 
            href="/services" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-colors"
          >
            Find a Service
          </Link>
        </div>
      ) : (
        /* --- نمایش لیست سفارش‌ها --- */
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div 
              key={booking.id} 
              className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6 items-center hover:shadow-md transition-shadow"
            >
              {/* عکس سرویس */}
              <div className="relative w-full md:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0">
                <Image 
                  src={booking.image} 
                  alt={booking.serviceTitle} 
                  fill 
                  className="object-cover" 
                />
              </div>

              {/* جزئیات سفارش */}
              <div className="flex-grow text-center md:text-left w-full">
                <div className="flex flex-col md:flex-row justify-between items-start mb-2">
                   <div>
                     <h3 className="text-lg font-bold text-gray-900">{booking.serviceTitle}</h3>
                     <p className="text-sm text-gray-500">Provider: {booking.proName}</p>
                   </div>
                   <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full uppercase mt-2 md:mt-0">
                     {booking.status}
                   </span>
                </div>

                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-600 mt-4">
                  <span className="flex items-center gap-1"><FiCalendar /> {booking.date}</span>
                  <span className="flex items-center gap-1"><FiClock /> 09:00 AM</span> {/* ساعت فعلاً فرضی */}
                  <span className="font-bold text-blue-600 ml-auto text-lg">${booking.price}</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}