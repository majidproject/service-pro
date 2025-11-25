"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Booking, BookingContextType } from "@/types"; // استفاده از تایپ‌های گام ۹.۱

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookings, setBookings] = useState<Booking[]>([]);

  const addBooking = (booking: Booking) => {
    setBookings((prev) => [booking, ...prev]);
    console.log("Booking Saved:", booking); // برای تست در کنسول
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

// هوک اختصاصی برای استفاده راحت در صفحات
export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}