import Link from "next/link";
import { FiGrid, FiList, FiSettings, FiLogOut, FiUser, FiBriefcase } from "react-icons/fi";

export default function DashboardLayout({
  children, // این children همون صفحات متغیر (page.tsx) هستن
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-50 min-h-screen flex">
      
      {/* --- SIDEBAR (ثابت) --- */}
      <aside className="w-64 bg-white border-r border-gray-100 hidden md:flex flex-col fixed h-full">
        
        {/* User Info Mockup */}
        <div className="p-6 border-b border-gray-100 flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <FiUser size={20} />
            </div>
            <div>
                <h3 className="font-bold text-gray-900 text-sm">Majid Dev</h3>
                <p className="text-gray-400 text-xs">majid@example.com</p>
            </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-4 space-y-1">
            <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors">
                <FiGrid size={18} />
                <span className="font-medium">Overview</span>
            </Link>
            <Link href="/dashboard/bookings" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors">
                <FiList size={18} />
                <span className="font-medium">My Bookings</span>
            </Link>
            <Link href="/dashboard/services" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors">
                <FiBriefcase size={18} />
                <span className="font-medium">My Services</span> 
            </Link>
            <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors">
                <FiSettings size={18} />
                <span className="font-medium">Settings</span>
            </Link>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-gray-100">
            <Link href="/" className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors">
                <FiLogOut size={18} />
                <span className="font-medium">Log Out</span>
            </Link>
        </div>

      </aside>

      {/* --- MAIN CONTENT (متغیر) --- */}
      {/* چون سایدبار fixed هست، باید به محتوا margin-left بدیم */}
      <main className="flex-1 md:ml-64 p-8">
        {children}
      </main>

    </div>
  );
}