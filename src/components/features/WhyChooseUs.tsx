import { FiShield, FiDollarSign, FiHeadphones } from "react-icons/fi";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FiShield className="w-10 h-10 text-blue-600" />,
      title: "Vetted Professionals",
      description: "Every pro on ServicePro is background-checked and rated by neighbors like you."
    },
    {
      icon: <FiDollarSign className="w-10 h-10 text-green-600" />,
      title: "Upfront Pricing",
      description: "See the price before you book. No hidden fees, no last-minute surprises."
    },
    {
      icon: <FiHeadphones className="w-10 h-10 text-purple-600" />,
      title: "24/7 Support",
      description: "Our dedicated support team is here to help you every step of the way."
    }
  ];

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why use ServicePro?</h2>
          <p className="text-gray-600 text-lg">
            We make it easy to hire the right professional for any project, big or small.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}