"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { User, AuthContextType } from "@/types";
import { useRouter } from "next/navigation";

/**
 * Authentication Context
 * ----------------------
 * Manages the global user session state across the application.
 * Handles login/logout logic and provides user metadata to protected routes.
 */
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  // State to hold the current authenticated user. Null means the user is a guest.
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  /**
   * Simulates the user login process.
   * * @param email - The email address provided in the login form.
   * * NOTE: This is a MOCK implementation for the frontend MVP.
   * TODO: In production, replace this with a real API call (e.g., POST /api/auth/login)
   * or integrate with an auth provider like NextAuth.js / Clerk / Firebase.
   */
  const login = (email: string) => {
    // Mock user object representing a successful backend response
    const mockUser: User = {
      id: "1",
      name: "Majid Dev",
      email: email,
      role: "user",
    };
    
    setUser(mockUser);
    
    // Redirect to the dashboard immediately after successful login
    router.push("/dashboard"); 
  };

  /**
   * Handles user logout.
   * Clears the global user state and redirects to the login page for security.
   */
  const logout = () => {
    setUser(null);
    router.push("/auth/login"); 
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

/**
 * Custom hook to access the AuthContext.
 * Ensures that the hook is consumed within a valid AuthProvider.
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}