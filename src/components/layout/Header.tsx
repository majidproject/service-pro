"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import { useAuth } from "@/context/AuthContext";
import { FiMenu, FiX, FiUser, FiSearch, FiLogOut } from "react-icons/fi";

/**
 * Header Component
 * The main navigation bar of the application.
 * Features:
 * - Responsive design (Desktop/Mobile views).
 * - Dynamic authentication state (Show Login vs User Profile).
 * - Mobile navigation drawer.
 */
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Access authentication state to determine which actions to render
  const { user, logout } = useAuth(); 

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 font-sans">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Brand Logo Area */}
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                S
            </div>
            <Link href="/" className="text-xl font-bold text-gray-900 tracking-tight">
              Service<span className="text-blue-600">Pro</span>
            </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.key} 
              href={link.href}
              className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* User Actions Area (Auth-dependent) */}
        <div className="hidden md:flex items-center gap-4">
            <button 
              className="text-gray-500 hover:text-blue-600 p-2"
              aria-label="Search services"
            >
                <FiSearch size={20} />
            </button>

            {/* Conditional Rendering based on Auth Status */}
            {user ? (
                // Authenticated View: Show User Profile & Logout
                <div className="flex items-center gap-4 border-l pl-4 ml-2 border-gray-200">
                    <Link href="/dashboard" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium text-sm transition">
                        <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 border border-blue-100">
                            <FiUser size={16} />
                        </div>
                        <span className="font-bold">{user.name}</span>
                    </Link>
                    
                    <button 
                        onClick={logout} 
                        className="text-gray-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition" 
                        title="Log Out"
                        aria-label="Log Out"
                    >
                        <FiLogOut size={18} />
                    </button>
                </div>
            ) : (
                // Guest View: Show Login & Sign Up
                <>
                    <Link href="/auth/login" className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium text-sm">
                        <FiUser size={18} />
                        <span>Log In</span>
                    </Link>
                    <Link 
                        href="/join-pro" 
                        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg"
                    >
                        Join as a Pro
                    </Link>
                </>
            )}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
            className="md:hidden text-gray-700 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
            <div className="flex flex-col p-4 gap-4">
                {NAV_LINKS.map((link) => (
                    <Link 
                        key={link.key} 
                        href={link.href}
                        className="text-gray-600 font-medium py-2 border-b border-gray-50"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {link.label}
                    </Link>
                ))}
                
                {/* Mobile Auth Actions */}
                {user ? (
                    <>
                        <Link href="/dashboard" className="text-blue-600 font-bold py-2 border-b border-gray-50">
                            Dashboard ({user.name})
                        </Link>
                        <button onClick={logout} className="text-red-500 font-medium py-2 text-left">
                            Log Out
                        </button>
                    </>
                ) : (
                    <Link href="/auth/login" className="text-blue-600 font-bold py-2">
                        Log In / Sign Up
                    </Link>
                )}
            </div>
        </div>
      )}
    </header>
  );
}