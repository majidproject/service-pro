"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useBooking } from "@/context/BookingContext"; // <--- 1. ایمپورت هوک
import { FiCalendar, FiMapPin, FiCreditCard, FiCheckCircle, FiLoader } from "react-icons/fi";

// ورودی‌های جدید برای ذخیره دقیق اطلاعات
interface BookingFormProps {
  total: number;
  serviceTitle: string; // اسم سرویس رو هم می‌گیریم
  proName: string;      // اسم متخصص
  image: string;        // عکس سرویس
}

export default function BookingForm({ total, serviceTitle, proName, image }: BookingFormProps) {
  const router = useRouter();
  const { addBooking } = useBooking(); // <--- 2. دریافت تابع ذخیره از کانتکست
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBooking = () => {
    setIsSubmitting(true);

    // 3. ساختن آبجکت سفارش
    const newBooking = {
      id: Date.now().toString(), // یک آی‌دی تصادفی بر اساس زمان
      serviceTitle,
      price: total,
      date: new Date().toLocaleDateString(), // تاریخ امروز
      status: "Pending" as const,
      proName,
      image
    };

    // 4. ذخیره در حافظه مرکزی
    addBooking(newBooking);

    // 5. انتقال به صفحه موفقیت
    setTimeout(() => {
      router.push("/book/success");
    }, 2000);
  };

  return (
    <div className="md:col-span-2 space-y-6">
      {/* ... (بخش‌های تقویم و آدرس و پرداخت بدون تغییر می‌مانند) ... */}
      
      {/* برای خلوت شدن پیام، کدهای HTML وسط را تکرار نمی‌کنم چون تغییری ندارند. 
          فقط دقت کن که در props بالا موارد جدید اضافه شد و تابع handleBooking تغییر کرد.
          اگر کد کامل HTML وسط را هم می‌خواهی بگو دوباره بفرستم. */}

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
          <FiCalendar className="text-blue-600" /> Date & Time
        </h2>
        {/* ... inputs ... */}
         <div className="grid grid-cols-2 gap-4">
          <input type="date" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none" />
          <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none">
            <option>09:00 AM</option>
            <option>12:00 PM</option>
            <option>03:00 PM</option>
          </select>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
          <FiMapPin className="text-blue-600" /> Location
        </h2>
        <textarea 
          placeholder="Enter your full address..." 
          className="w-full p-3 border rounded-lg h-24 focus:ring-2 focus:ring-blue-600 outline-none resize-none"
        ></textarea>
      </div>

       <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
          <FiCreditCard className="text-blue-600" /> Payment Method
        </h2>
        <div className="p-4 border rounded-lg bg-gray-50 text-gray-500 text-sm flex items-center gap-2">
          <FiCheckCircle className="text-green-500" />
          <span>Pay securely after the job is done. No card needed now.</span>
        </div>
      </div>

      <button 
        onClick={handleBooking}
        disabled={isSubmitting}
        className={`w-full font-bold py-4 rounded-xl text-lg transition shadow-lg flex items-center justify-center gap-2
          ${isSubmitting ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"}`}
      >
        {isSubmitting ? (
          <>
            <FiLoader className="animate-spin" /> Processing...
          </>
        ) : (
          `Confirm & Book ($${total})`
        )}
      </button>

    </div>
  );
}