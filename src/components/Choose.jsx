import React from 'react'
import { ShieldCheck, Sparkles, PhoneCall, Globe } from "lucide-react";

function Choose() {
      const features = [
    {
      icon: <ShieldCheck size={40} />,
      title: "Trusted & Secure",
      desc: "We partner only with verified hotels, guides & operators to ensure a safe journey.",
    },
    {
      icon: <Sparkles size={40} />,
      title: "Premium Experience",
      desc: "Enjoy hand-picked travel packages crafted for comfort and unforgettable memories.",
    },
    {
      icon: <PhoneCall size={40} />,
      title: "24/7 Customer Support",
      desc: "We’re always here to assist you before, during & after your trip.",
    },
    {
      icon: <Globe size={40} />,
      title: "Global Destinations",
      desc: "Travel across the world with exclusive packages and guided tours.",
    },
  ];
  return (
        <div className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-4">
        Why Choose <span className="text-blue-600">Us</span>
      </h2>
      <p className="text-center text-gray-600 mb-12">
        We provide exceptional travel experiences blended with comfort,
        convenience, and trust.
      </p>

      <div className="grid md:grid-cols-4 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md border hover:shadow-xl transition"
          >
            <div className="text-blue-600 mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Choose