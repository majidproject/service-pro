"use client";

import { useAuth } from "@/context/AuthContext";
import { useBooking } from "@/context/BookingContext";
import { FiCheckCircle, FiClock, FiCreditCard } from "react-icons/fi";

/**
 * Dashboard Overview Page
 * -----------------------
 * Displays a summary of the user's activity and account status.
 * Features:
 * - Real-time statistics (Active Bookings, Completed Jobs, Total Spend).
 * - Recent activity feed showing the latest transactions.
 * - Personalized welcome message.
 */
export default function DashboardPage() {
  // Access global state for user details and booking history
  const { user } = useAuth();
  const { bookings } = useBooking();

  // ---------------------------------------------------------
  // Analytics Logic (Client-Side Calculation)
  // ---------------------------------------------------------
  // NOTE: In a production environment with large datasets, these calculations 
  // should be offloaded to the backend (e.g., GET /api/user/stats) to improve performance.

  // Count bookings that are currently in progress or waiting for confirmation
  const activeBookings = bookings.filter(
    (b) => b.status === "Pending" || b.status === "Confirmed"
  ).length;
  
  // Count successfully completed services
  const completedJobs = bookings.filter((b) => b.status === "Completed").length;
  
  // Calculate total lifetime spending by summing up price of all bookings
  const totalSpent = bookings.reduce((sum, booking) => sum + booking.price, 0);

  return (
    <div>
      {/* Personalized Header */}
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Welcome back, {user?.name || "User"}! 👋
      </h1>
      
      {/* Key Performance Indicators (KPI) Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* Card 1: Active Bookings */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                <FiClock size={24} />
            </div>
            <div>
                <div className="text-2xl font-bold text-gray-900">{activeBookings}</div>
                <div className="text-sm text-gray-500">Active Bookings</div>
            </div>
        </div>

        {/* Card 2: Completed Jobs */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                <FiCheckCircle size={24} />
            </div>
            <div>
                <div className="text-2xl font-bold text-gray-900">{completedJobs}</div>
                <div className="text-sm text-gray-500">Completed Jobs</div>
            </div>
        </div>

        {/* Card 3: Financials */}
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

      {/* Recent Activity Feed */}
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
                    {/* Display only the 3 most recent bookings */}
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