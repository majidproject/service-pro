"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Booking, BookingContextType } from "@/types"; 

/**
 * Booking Context
 * ----------------
 * Acts as the centralized state manager for the user's booking activities.
 * It handles the storage of booking records and provides methods to update the booking history.
 */
const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  // State to store the list of bookings.
  // NOTE: Currently using in-memory state. Data will be lost on page refresh.
  const [bookings, setBookings] = useState<Booking[]>([]);

  /**
   * Adds a new booking to the global state.
   * * @param booking - The booking object containing service and user details.
   * * TODO: In production, this should make a POST request to the backend (e.g., /api/bookings)
   * and potentially sync with LocalStorage for persistence.
   */
  const addBooking = (booking: Booking) => {
    setBookings((prev) => [booking, ...prev]); // Prepend new booking to the top of the list
    
    // Debug log to verify booking payload in development
    console.log("Booking Saved to Context:", booking); 
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

/**
 * Custom Hook: useBooking
 * Simplifies access to the BookingContext and ensures type safety.
 * Throws an error if used outside of the BookingProvider to prevent runtime bugs.
 */
export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}