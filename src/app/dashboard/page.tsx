"use client"; // <--- 1. حتما باید باشد چون داریم از کانتکست می‌خوانیم

import { useAuth } from "@/context/AuthContext";
import { useBooking } from "@/context/BookingContext";
import { FiCheckCircle, FiClock, FiCreditCard } from "react-icons/fi";

export default function DashboardPage() {
  const { user } = useAuth(); // گرفتن اسم کاربر
  const { bookings } = useBooking(); // گرفتن لیست سفارش‌ها

  // 2. محاسبات ریاضی (Analytics Logic)
  
  // تعداد سفارش‌های فعال (در انتظار یا تایید شده)
  const activeBookings = bookings.filter(b => b.status === "Pending" || b.status === "Confirmed").length;
  
  // تعداد کارهای تمام شده
  const completedJobs = bookings.filter(b => b.status === "Completed").length;
  
  // جمع کل پول خرج شده (جمع قیمت همه سفارش‌ها)
  // reduce یک تابع جاوااسکریپت است که روی لیست می‌چرخد و اعداد را جمع می‌کند
  const totalSpent = bookings.reduce((sum, booking) => sum + booking.price, 0);

  return (
    <div>
      {/* نمایش دینامیک اسم کاربر */}
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Welcome back, {user?.name || "User"}! 👋
      </h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* کارت ۱: سفارش‌های فعال */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                <FiClock size={24} />
            </div>
            <div>
                <div className="text-2xl font-bold text-gray-900">{activeBookings}</div>
                <div className="text-sm text-gray-500">Active Bookings</div>
            </div>
        </div>

        {/* کارت ۲: کارهای تمام شده */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                <FiCheckCircle size={24} />
            </div>
            <div>
                <div className="text-2xl font-bold text-gray-900">{completedJobs}</div>
                <div className="text-sm text-gray-500">Completed Jobs</div>
            </div>
        </div>

        {/* کارت ۳: کل هزینه */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                <FiCreditCard size={24} />
            </div>
            <div>
                <div className="text-2xl font-bold text-gray-900">${totalSpent}</div>
                <div className="text-sm text-gray-500">Total Spent</div>
            </div>
        </div>

      </div>

      {/* Recent Activity (لیست کوتاه شده) */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
            <h2 className="font-bold text-gray-900">Recent Activity</h2>
        </div>
        <div className="p-6">
            {bookings.length === 0 ? (
                <div className="text-center text-gray-400 py-6">
                    No recent activity to show.
                </div>
            ) : (
                <div className="space-y-4">
                    {/* نمایش ۳ سفارش آخر */}
                    {bookings.slice(0, 3).map((booking) => (
                        <div key={booking.id} className="flex items-center justify-between border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                            <div>
                                <div className="font-bold text-gray-800">{booking.serviceTitle}</div>
                                <div className="text-xs text-gray-500">{booking.date}</div>
                            </div>
                            <span className="text-sm font-bold text-blue-600">${booking.price}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
      </div>

    </div>
  );
}