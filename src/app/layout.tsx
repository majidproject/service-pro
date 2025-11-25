import type { Metadata } from "next";
import {Inter} from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MainProvider from "@/components/providers/MainProvider"; 
import "./globals.css"; 

const inter = Inter({subsets: ["latin"]});

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
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-gray-50`}>
        <MainProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </MainProvider>
      </body>
    </html>
  );
}