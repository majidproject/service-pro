"use client";

import { BookingProvider } from "@/context/BookingContext";
import { AuthProvider } from "@/context/AuthContext";
import { ServiceProvider } from "@/context/ServiceContext";

/**
 * MainProvider Component
 * A centralized wrapper for all global application context providers.
 * * This component ensures that the entire application tree has access to shared state logic
 * such as Authentication, Booking Management, and Service Data, keeping the root layout clean.
 */
export default function MainProvider({ children }: { children: React.ReactNode }) {
  return (
    // AuthProvider is placed at the top level to ensure user session data 
    // is available to all subsequent providers (e.g., for user-specific service filtering).
    <AuthProvider>
      <ServiceProvider>
        <BookingProvider>
          {children}
        </BookingProvider>
      </ServiceProvider>
    </AuthProvider>
  );
}