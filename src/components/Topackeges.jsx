import React from "react";
import { Link } from "react-router-dom";

function Topackeges() {
  const packages = [
    {
      place: "Bali, Indonesia",
      days: "5 Days / 4 Nights",
      price: "$699",
      img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    },
    {
      place: "Paris, France",
      days: "6 Days / 5 Nights",
      price: "$899",
      img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    },
    {
      place: "Maldives",
      days: "4 Days / 3 Nights",
      price: "$999",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      place: "Switzerland",
      days: "7 Days / 6 Nights",
      price: "$1199",
      img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Centered Heading */}
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">
        Best Tour Packages
      </h2>

      {/* Two Column Layout */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side Image */}
        <div className="relative h-[625px]">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Travel destination"
            className="rounded-2xl shadow-xl w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center">
            <h2 className="text-white text-4xl md:text-5xl font-bold text-center px-6">
              Discover Your Dream Destination ✈️
            </h2>
          </div>
        </div>

        {/* Right Side Packages */}
        <div className="grid sm:grid-cols-2 gap-6">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-xl overflow-hidden group hover:shadow-2xl transition duration-300"
            >
              <img
                src={pkg.img}
                alt={pkg.place}
                className="h-32 w-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{pkg.place}</h3>
                <p className="text-gray-500 text-sm mt-1">{pkg.days}</p>
                <p className="text-blue-600 font-bold text-lg mt-2">
                  {pkg.price}
                </p>
                <Link
  to="/offer"
  className="mt-3 block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
>
  Explore Package
</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Topackeges;
