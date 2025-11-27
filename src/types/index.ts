/**
 * Global Type Definitions
 * ------------------------
 * This file contains shared TypeScript interfaces used across the application.
 * Defining types here ensures consistency and type safety for Contexts, Components, and Hooks.
 */

// =========================================
// Booking Types
// =========================================

/**
 * Represents a single booking transaction.
 * Contains details about the service, pricing, and status.
 */
export interface Booking {
  id: string;
  serviceTitle: string;
  price: number;
  date: string;
  status: "Pending" | "Confirmed" | "Completed";
  proName: string;
  image: string;
}

/**
 * Booking Context State
 * Defines the shape of the BookingContext value.
 */
export interface BookingContextType {
  bookings: Booking[]; // List of all user bookings
  addBooking: (booking: Booking) => void; // Action to create a new booking
}

// =========================================
// Authentication Types
// =========================================

/**
 * User Profile
 * Represents the authenticated user's metadata.
 */
export interface User {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
}

/**
 * Authentication Context State
 * Defines the shape of the AuthContext value.
 */
export interface AuthContextType {
  user: User | null; // Current logged-in user (null if guest)
  login: (email: string) => void; // Action to simulate login
  logout: () => void; // Action to clear session
}

// =========================================
// Service Types
// =========================================

/**
 * Service Entity
 * Represents a service offered by a professional (Provider).
 */
export interface Service {
  id: number;
  title: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  proName: string;
  proAvatar: string;
  category: string;
}

/**
 * Service Context State
 * Defines the shape of the ServiceContext value.
 */
export interface ServiceContextType {
  services: Service[]; // List of all available services
  addService: (service: Service) => void; // Action to publish a new service
}