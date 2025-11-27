import Link from "next/link";
import { FiGrid, FiList, FiSettings, FiLogOut, FiUser, FiBriefcase } from "react-icons/fi";

/**
 * Dashboard Layout
 * ----------------
 * A nested layout component specifically for the /dashboard routes.
 * It implements a "Persistent Sidebar" pattern, keeping the navigation menu
 * fixed on the left while the main content area updates on the right.
 *
 * Features:
 * - Responsive Sidebar (Hidden on mobile, fixed on desktop).
 * - User Profile summary in the sidebar header.
 * - Centralized navigation links for Customer/Provider roles.
 */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-50 min-h-screen flex">
      
      {/* SIDEBAR COMPONENT
        Fixed position on desktop screens (md:flex).
        Hidden on mobile (handled by a separate mobile menu or future implementation).
      */}
      <aside className="w-64 bg-white border-r border-gray-100 hidden md:flex flex-col fixed h-full z-10">
        
        {/* User Profile Snippet */}
        <div className="p-6 border-b border-gray-100 flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <FiUser size={20} />
            </div>
            <div>
                <h3 className="font-bold text-gray-900 text-sm">Majid Dev</h3>
                <p className="text-gray-400 text-xs">majid@example.com</p>
            </div>
        </div>

        {/* Primary Navigation Menu */}
        <nav className="flex-1 p-4 space-y-1" aria-label="Dashboard Navigation">
            
            {/* Dashboard Home */}
            <Link 
              href="/dashboard" 
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors"
              aria-label="Overview"
            >
                <FiGrid size={18} />
                <span className="font-medium">Overview</span>
            </Link>
            
            {/* Customer Role: Bookings */}
            <Link 
              href="/dashboard/bookings" 
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors"
              aria-label="My Bookings"
            >
                <FiList size={18} />
                <span className="font-medium">My Bookings</span>
            </Link>

            {/* Provider Role: Services Management */}
            <Link 
              href="/dashboard/services" 
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors"
              aria-label="My Services"
            >
                <FiBriefcase size={18} />
                <span className="font-medium">My Services</span> 
            </Link>

            {/* Settings */}
            <Link 
              href="/dashboard/settings" 
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors"
              aria-label="Account Settings"
            >
                <FiSettings size={18} />
                <span className="font-medium">Settings</span>
            </Link>
        </nav>

        {/* Logout Action */}
        <div className="p-4 border-t border-gray-100">
            <Link 
              href="/" 
              className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors"
              aria-label="Log Out"
            >
                <FiLogOut size={18} />
                <span className="font-medium">Log Out</span>
            </Link>
        </div>

      </aside>

      {/* MAIN CONTENT AREA
        Pushed to the right by the sidebar width (md:ml-64).
        This renders the page.tsx content specific to the current route.
      */}
      <main className="flex-1 md:ml-64 p-8">
        {children}
      </main>

    </div>
  );
}