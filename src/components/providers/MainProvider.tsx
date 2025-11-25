"use client";

import { BookingProvider } from "@/context/BookingContext";
import { AuthProvider } from "@/context/AuthContext";
import { ServiceProvider } from "@/context/ServiceContext";

export default function MainProvider({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ServiceProvider>
        <BookingProvider>
          {children}
        </BookingProvider>
      </ServiceProvider>
    </AuthProvider>
  );
}