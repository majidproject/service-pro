import { CATEGORIES } from "@/constants";
import Link from "next/link";

export default function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* تیتر بخش */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Explore by Category</h2>
          <p className="text-gray-600">Find the right professional for your specific need.</p>
        </div>

        {/* شبکه کارت‌ها */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <Link 
              key={cat.name} 
              href={`/services?category=${cat.name}`}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100 group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 ${cat.color} group-hover:scale-110 transition-transform`}>
                {cat.icon}
              </div>
              <h3 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                {cat.name}
              </h3>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}