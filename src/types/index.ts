// src/types/index.ts

// شکل کلی یک سفارش
export interface Booking {
  id: string;
  serviceTitle: string;
  price: number;
  date: string;
  status: "Pending" | "Confirmed" | "Completed";
  proName: string;
  image: string;
}

// شکل کلی کوله‌پشتی (Context)
export interface BookingContextType {
  bookings: Booking[]; // لیست سفارش‌ها
  addBooking: (booking: Booking) => void; // تابعی برای ثبت سفارش
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
}

export interface AuthContextType {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
}

export interface Service {
  id: number;
  title: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  proName: string;
  proAvatar: string;
  category: string; // مثلاً Cleaning, Plumbing
}

export interface ServiceContextType {
  services: Service[];
  addService: (service: Service) => void;
}