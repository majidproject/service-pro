import Hero from "@/components/features/Hero";
import Categories  from "@/components/features/Categories";
import FeaturedServices from "@/components/features/FeatureServices";
import WhyChooseUs from "@/components/features/WhyChooseUs";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <Categories />
      <FeaturedServices />
      <WhyChooseUs />
      
      {/* اینجا بعداً لیست خدمات را اضافه می‌کنیم */}
      <section className="container mx-auto px-4 py-10 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Trusted by thousands of professionals</h2>
        {/* Placeholder for trust signals */}
      </section>
    </div>
  );
}