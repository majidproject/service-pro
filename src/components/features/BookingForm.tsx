"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useBooking } from "@/context/BookingContext";
import { FiCalendar, FiMapPin, FiCreditCard, FiCheckCircle, FiLoader } from "react-icons/fi";

/**
 * Props definition for the BookingForm component.
 * It receives necessary service details to finalize the booking.
 */
interface BookingFormProps {
  total: number;
  serviceTitle: string;
  proName: string;
  image: string;
}

export default function BookingForm({ total, serviceTitle, proName, image }: BookingFormProps) {
  const router = useRouter();
  
  // Access global booking state to persist reservation data
  const { addBooking } = useBooking();
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Handles the booking submission process.
   * TODO: Integrate with real backend API for transaction processing.
   */
  const handleBooking = () => {
    setIsSubmitting(true);

    // Create a new booking object
    // NOTE: Generating a temporary ID based on timestamp for MVP purposes.
    const newBooking = {
      id: Date.now().toString(),
      serviceTitle,
      price: total,
      date: new Date().toLocaleDateString(), // Captures current date as booking date
      status: "Pending" as const,
      proName,
      image
    };

    // Save to client-side context storage
    addBooking(newBooking);

    // Simulate network latency before redirecting to success page
    setTimeout(() => {
      router.push("/book/success");
    }, 2000);
  };

  return (
    <div className="md:col-span-2 space-y-6">
      
      {/* Section: Date & Time Selection */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
          <FiCalendar className="text-blue-600" /> Date & Time
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <input 
            type="date" 
            aria-label="Select Booking Date" 
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none" 
          />
          <select 
            aria-label="Select Booking Time"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
          >
            <option>09:00 AM</option>
            <option>12:00 PM</option>
            <option>03:00 PM</option>
          </select>
        </div>
      </div>

      {/* Section: Location Input */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
          <FiMapPin className="text-blue-600" /> Location
        </h2>
        <textarea 
          placeholder="Enter your full address..." 
          aria-label="Enter Service Location"
          className="w-full p-3 border rounded-lg h-24 focus:ring-2 focus:ring-blue-600 outline-none resize-none"
        ></textarea>
      </div>

       {/* Section: Payment Information */}
       <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
          <FiCreditCard className="text-blue-600" /> Payment Method
        </h2>
        <div className="p-4 border rounded-lg bg-gray-50 text-gray-500 text-sm flex items-center gap-2">
          <FiCheckCircle className="text-green-500" />
          <span>Pay securely after the job is done. No card needed now.</span>
        </div>
      </div>

      {/* Submit Action Button */}
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