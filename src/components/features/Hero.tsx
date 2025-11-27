"use client";

import { FiSearch } from "react-icons/fi";
import Link from "next/link";

/**
 * Hero Component
 * The main landing section of the application.
 * Features a prominent search bar and quick links to popular categories.
 * Uses CSS gradients for a modern grid background effect.
 */
export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      
      {/* Decorative Background: Subtle Grid Pattern */}
      {/* NOTE: Using CSS gradients to create a lightweight grid texture without external images */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Main Value Proposition */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            Hire the best <span className="text-blue-600">pros</span> <br />
            for any job.
          </h1>
          
          <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
            Millions of people use ServicePro to turn their to-do list into
            done. From cleaning to coding, we got you covered.
          </p>

          {/* Primary Search Bar Component */}
          <div className="bg-white p-2 rounded-full shadow-xl border border-gray-200 flex items-center max-w-2xl mx-auto transform hover:scale-[1.01] transition-transform duration-200">
            <div className="pl-6 text-gray-400">
              <FiSearch size={24} />
            </div>
            <input
              type="text"
              placeholder="What do you need help with?"
              aria-label="Search for services" // Accessibility improvement
              className="flex-1 p-4 outline-none text-gray-700 text-lg rounded-full placeholder:text-gray-400"
            />
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors hidden md:block"
              aria-label="Perform search"
            >
              Search
            </button>
          </div>

          {/* Quick Links: Popular Categories */}
          {/* Maps through popular tags to generate dynamic search links */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-gray-500">
            <span>Popular:</span>
            {["Home Cleaning", "Web Design", "Plumbing", "Moving"].map(
              (tag) => (
                <Link
                  key={tag}
                  href={`/services?q=${tag}`} // Deep linking to search results
                  className="bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 cursor-pointer transition hover:text-blue-600"
                  aria-label={`Search for ${tag}`}
                >
                  {tag}
                </Link>
              )
            )}
          </div>

        </div>
      </div>
    </section>
  );
}