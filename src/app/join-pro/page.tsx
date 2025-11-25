"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useService } from "@/context/ServiceContext"; // دسترسی به دیتابیس خدمات
import { useAuth } from "@/context/AuthContext"; // دسترسی به اطلاعات کاربر
import { CATEGORIES } from "@/constants"; // برای پر کردن لیست کشویی دسته‌بندی‌ها
import { FiDollarSign, FiLayout, FiImage } from "react-icons/fi";

export default function JoinProPage() {
  const router = useRouter();
  const { addService } = useService();
  const { user } = useAuth();
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  // استیت‌های فرم
  const [formData, setFormData] = useState({
    title: "",
    category: CATEGORIES[0].name, // پیش‌فرض اولین دسته‌بندی باشد
    price: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // اگر کاربر لاگین نبود، یک اسم پیش‌فرض می‌گذاریم (برای تست)
    const providerName = user?.name || "New Professional";
    
    // شبیه‌سازی عکس (چون آپلود فایل واقعی نداریم، یک عکس رندوم از Unsplash می‌گذاریم)
    // بر اساس دسته‌بندی عکس را کمی مرتبط می‌کنیم (ترفند هوشمندانه)
    const randomId = Math.floor(Math.random() * 1000);
    // نکته: اگر لینک بالا کار نکرد، از یک لینک ثابت استفاده می‌کنیم:
    const serviceImage = `https://picsum.photos/id/${randomId}/800/600`;

    // تغییر منبع آواتار به یک عکس واقعی و مطمئن (از Picsum)
    // const randomId = Math.floor(Math.random() * 1000);
    // const serviceImage = `https://picsum.photos/id/${randomId}/800/600`;
    
    // این خط جدید برای آواتار است (استفاده از Picsum به جای DiceBear)
    const providerAvatar = `https://picsum.photos/seed/${providerName}/100/100`; 

    const newService = {
      id: Date.now(),
      title: formData.title,
      category: formData.category,
      price: Number(formData.price),
      image: serviceImage,
      rating: 5.0,
      reviews: 0,
      proName: providerName,
      proAvatar: providerAvatar, // <--- استفاده از متغیر اصلاح شده
    };

    // تاخیر مصنوعی برای حس واقعی بودن
    setTimeout(() => {
      addService(newService); // اضافه کردن به لیست کل خدمات
      router.push("/"); // بازگشت به صفحه اصلی برای دیدن نتیجه
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">
            Become a ServicePro
          </h1>
          <p className="text-gray-500 mt-2">
            Start earning money by offering your services to thousands of
            customers.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Service Title
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="e.g. Professional House Cleaning"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />
                <FiLayout className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Category & Price Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Category Select */}
              <div>
                {/* 1. اضافه کردن htmlFor که به آی‌دی پایین اشاره می‌کند */}
                <label
                  htmlFor="category-select"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Category
                </label>

                <select
                  id="category-select" // 2. اضافه کردن id یکتا
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat.name} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Starting Price ($)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    required
                    placeholder="80"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                  />
                  <FiDollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Photo Upload Mockup */}
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center bg-gray-50">
              <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-3 text-blue-600">
                <FiImage size={24} />
              </div>
              <h3 className="font-bold text-gray-900 text-sm">
                Upload Cover Photo
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                We&apos;ll use a default image for now.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full font-bold py-4 rounded-xl text-lg transition shadow-lg flex items-center justify-center gap-2
                ${
                  isSubmitting
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
            >
              {isSubmitting ? "Publishing..." : "Publish Service"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}