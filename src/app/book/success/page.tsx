import Link from "next/link";
import { FiCheckCircle } from "react-icons/fi";

export default function SuccessPage() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-md w-full border border-gray-100">
        
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <FiCheckCircle className="text-green-600 w-12 h-12" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Your request has been sent to the professional. You will receive a confirmation email shortly.
        </p>

        <div className="space-y-3">
          <Link 
            href="/services" 
            className="block w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-3.5 rounded-xl transition-all"
          >
            Book Another Service
          </Link>
          <Link 
            href="/" 
            className="block w-full text-gray-500 hover:text-gray-900 font-medium py-2 transition-colors"
          >
            Return to Home
          </Link>
        </div>

      </div>
    </div>
  );
}