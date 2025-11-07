import React from "react";
import { useParams } from "react-router-dom";
import { destination } from "../components/Destination";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";


export default function DestinationDetail() {
  const navigate = useNavigate();
  const { name } = useParams();
  const place = destination.find((d) => d.slug === name);

  if (!place) {
    return (
      <div className="text-center py-20 text-2xl text-gray-500">
        Destination not found
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16">
        {/* Destination Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 mb-6 text-center">
          {place.name}
        </h1>

        {/* Destination Image */}
        <div className="relative mb-10 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={place.img}
            alt={place.name}
            className="w-full h-[300px] sm:h-[380px] object-cover brightness-90 hover:brightness-100 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        {/* Info */}
        <p className="text-gray-700 text-lg sm:text-xl mb-10 leading-relaxed text-center sm:text-left">
          {place.info}
        </p>

        {/* Packages Section */}
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
          Exclusive Packages
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {place.packages.map((pkg, i) => (
            <div
              key={i}
              className="relative h-[320px] rounded-2xl overflow-hidden shadow-lg group"
            >
              {/* Background Image */}
              <img
                src={pkg.img}
                alt={pkg.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent group-hover:via-black/40 transition-all duration-300"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                <p className="text-sm mb-4">{pkg.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-yellow-300 font-semibold text-lg">
                    {pkg.price}
                  </span>
               <button
  onClick={() =>
    navigate("/booking", {
      state: {
        destination: place.name,
        package: pkg.title,
        price: pkg.price,
        img: pkg.img,
      },
    })
  }
  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
>
  Book Now
</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
