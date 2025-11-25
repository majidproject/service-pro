"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Service, ServiceContextType } from "@/types";
import { FEATURED_SERVICES } from "@/constants"; // داده‌های اولیه را از اینجا می‌گیریم

const ServiceContext = createContext<ServiceContextType | undefined>(undefined);

export function ServiceProvider({ children }: { children: ReactNode }) {
  // مقدار اولیه state، همان لیست ثابت ماست (تا صفحه اول خالی نباشد)
  const [services, setServices] = useState<Service[]>(FEATURED_SERVICES);

  const addService = (newService: Service) => {
    setServices((prev) => [newService, ...prev]); // سرویس جدید بیاید اول لیست
  };

  return (
    <ServiceContext.Provider value={{ services, addService }}>
      {children}
    </ServiceContext.Provider>
  );
}

export function useService() {
  const context = useContext(ServiceContext);
  if (context === undefined) {
    throw new Error("useService must be used within a ServiceProvider");
  }
  return context;
}