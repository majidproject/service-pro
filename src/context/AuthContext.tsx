"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { User, AuthContextType } from "@/types";
import { useRouter } from "next/navigation";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const login = (email: string) => {
    // شبیه‌سازی کاربر (بعداً به API واقعی وصل می‌شود)
    setUser({
      id: "1",
      name: "Majid Dev",
      email: email,
      role: "user",
    });
    // بعد از لاگین برود به داشبورد
    router.push("/dashboard"); 
  };

  const logout = () => {
    setUser(null);
    // تغییر مهم: بعد از خروج برود به صفحه لاگین جدید
    router.push("/auth/login"); 
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}