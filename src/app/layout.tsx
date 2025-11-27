import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MainProvider from "@/components/providers/MainProvider";
import "./globals.css";

/**
 * Root Layout
 * -----------
 * This is the top-level layout component for the entire application.
 * It defines the global HTML structure, applies base fonts, and wraps the app
 * with essential context providers.
 *
 * Key Responsibilities:
 * 1. Setting up the HTML/Body tags with language and direction attributes.
 * 2. Loading and applying the global font (Inter).
 * 3. Injecting global providers (Auth, Booking, Service) via MainProvider.
 * 4. Rendering the persistent Header and Footer.
 */

// Initialize the Inter font from Google Fonts with Latin subset support.
const inter = Inter({ subsets: ["latin"] });

/**
 * Global Metadata Configuration
 * Used by Next.js to generate the <head> tags for SEO optimization.
 */
export const metadata: Metadata = {
  title: "ServicePro | Find Local Professionals",
  description: "Hire the best local professionals for any job",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      {/* Layout Strategy:
        - 'flex flex-col min-h-screen': Ensures the footer always sticks to the bottom 
          even if the page content is short (Sticky Footer pattern).
        - 'bg-gray-50': Sets a light background color for the entire app.
      */}
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-gray-50`}
      >
        {/* Wrap the application in MainProvider to expose global contexts (Auth, Booking, etc.) */}
        <MainProvider>
          <Header />
          
          {/* Main content area grows to fill available space */}
          <main className="flex-grow">
            {children}
          </main>
          
          <Footer />
        </MainProvider>
      </body>
    </html>
  );
}