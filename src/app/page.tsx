import Hero from "@/components/features/Hero";
import Categories from "@/components/features/Categories";
import FeaturedServices from "@/components/features/FeatureServices";
import WhyChooseUs from "@/components/features/WhyChooseUs";

/**
 * Home Page (Landing Page)
 * ------------------------
 * The entry point of the application.
 * Responsibilities:
 * 1. Engage users with the Hero section (Search & Value Prop).
 * 2. Guide users via Categories navigation.
 * 3. Showcase top-rated services (FeaturedServices).
 * 4. Build trust with the "Why Choose Us" section.
 */
export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      
      {/* 1. Hero Section: Search & Intro */}
      <Hero />
      
      {/* 2. Browse by Category */}
      <Categories />
      
      {/* 3. Live Feed of Featured Services */}
      <FeaturedServices />
      
      {/* 4. Trust Signals & Benefits */}
      <WhyChooseUs />
      
      {/* 5. Social Proof / Trust Indicators (Placeholder)
        TODO: Create a dedicated <Testimonials /> component to replace this static section.
        This section helps in building credibility with new visitors.
      */}
      <section className="container mx-auto px-4 py-10 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Trusted by thousands of professionals</h2>
        <p className="text-gray-500 mt-2">Join the fastest-growing marketplace today.</p>
      </section>

    </div>
  );
}