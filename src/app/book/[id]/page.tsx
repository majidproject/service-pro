import Image from "next/image";
import { notFound } from "next/navigation";
import { FEATURED_SERVICES } from "@/constants";
import BookingForm from "@/components/features/BookingForm"; // <--- 1. ایمپورت فرم جدید

interface BookingPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BookingPage({ params }: BookingPageProps) {
  const resolvedParams = await params;
  const service = FEATURED_SERVICES.find((item) => item.id === Number(resolvedParams.id));

  if (!service) {
    notFound();
  }

  const serviceFee = 10;
  const total = service.price + serviceFee;

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Complete your booking
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* ستون چپ: فقط کامپوننت فرم را صدا می‌زنیم */}
          <BookingForm
            total={total}
            serviceTitle={service.title}
            proName={service.proName}
            image={service.image}
          />

          {/* ستون راست: خلاصه سفارش (بدون تغییر) */}
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-10">
              <h3 className="font-bold text-gray-900 mb-4">Order Summary</h3>

              <div className="flex gap-4 mb-6 pb-6 border-b border-gray-100">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900">
                    {service.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    by {service.proName}
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-600 mb-6">
                <div className="flex justify-between">
                  <span>Service Price</span>
                  <span>${service.price}</span>
                </div>
                <div className="flex justify-between">
                  <span>Booking Fee</span>
                  <span>${serviceFee}</span>
                </div>
                <div className="flex justify-between font-bold text-gray-900 text-base border-t pt-3 mt-3">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </div>

              <div className="bg-blue-50 text-blue-700 text-xs p-3 rounded-lg leading-relaxed">
                <strong>Free Cancellation</strong> up to 24 hours before the
                appointment.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}