import React from 'react'
import { Star } from "lucide-react";

function Testimonials() {
      const reviews = [
    {
      name: "Aisha Rahman",
      location: "Mumbai, India",
      review:
        "The Bali trip was beyond amazing! Everything was perfectly organized and the support team guided us throughout the journey.",
      rating: 5,
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Rohit Sharma",
      location: "Delhi, India",
      review:
        "Great travel experience! Hotels were clean, guides were professional and itinerary was well-planned. Highly recommended!",
      rating: 4,
      img: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      name: "Sneha Patel",
      location: "Ahmedabad, India",
      review:
        "Loved the Maldives package! Sunset cruise, private villa, and delicious food. Truly a dream vacation!",
      rating: 5,
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];
  return (
      <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          What Our <span className="text-blue-600">Travelers</span> Say
        </h2>
        <p className="text-gray-600 mb-12">
          Real stories from customers who trusted us with their holiday dreams.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={r.img}
                  className="w-14 h-14 rounded-full border-2 border-blue-500"
                />
                <div className="text-left">
                  <h3 className="font-semibold text-lg">{r.name}</h3>
                  <p className="text-sm text-gray-500">{r.location}</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4">{r.review}</p>

              <div className="flex gap-1 text-amber-400">
                {[...Array(r.rating)].map((_, idx) => (
                  <Star key={idx} size={18} fill="currentColor" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials