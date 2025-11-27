"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Service, ServiceContextType } from "@/types";
import { FEATURED_SERVICES } from "@/constants"; 

/**
 * Service Context
 * ----------------
 * Manages the global state of available services within the application.
 * It allows for reading the service list (used in Search/Home) and creating new services (Provider flow).
 */
const ServiceContext = createContext<ServiceContextType | undefined>(undefined);

export function ServiceProvider({ children }: { children: ReactNode }) {
  // Initialize state with mock data from constants to populate the UI immediately.
  // TODO: In a real application, this initial state should be empty [],
  // and data should be fetched from an API (e.g., useSWR or React Query) upon mount.
  const [services, setServices] = useState<Service[]>(FEATURED_SERVICES);

  /**
   * Adds a new service to the global list.
   * * @param newService - The service object created by the provider.
   * * NOTE: This updates the client-side state only. Data persists until a page refresh.
   * * TODO: Replace with an async API call (POST /api/services) to save data to the database.
   */
  const addService = (newService: Service) => {
    setServices((prev) => [newService, ...prev]); // Add the new service to the beginning of the list
  };

  return (
    <ServiceContext.Provider value={{ services, addService }}>
      {children}
    </ServiceContext.Provider>
  );
}

/**
 * Custom Hook: useService
 * Provides access to the ServiceContext data and actions.
 * Ensures type safety and validates provider wrapping.
 */
export function useService() {
  const context = useContext(ServiceContext);
  if (context === undefined) {
    throw new Error("useService must be used within a ServiceProvider");
  }
  return context;
}