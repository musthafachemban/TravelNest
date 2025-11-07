import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function OfferPage() {
  const offer = {
    id: 1,
    title: "Exclusive Bali Getaway",
    description:
      "Experience pure bliss in Bali with our luxury tour packages. Choose the perfect duration for your vacation — each includes stay, meals, and guided tours.",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    ],
    packages: [
      {
        duration: "2 Days / 3 Nights",
        price: "$499",
        features: [
          "Beachfront resort stay",
          "Breakfast included",
          "Free airport pickup",
        ],
      },
      {
        duration: "4 Days / 5 Nights",
        price: "$799",
        features: [
          "Luxury sea-view room",
          "Water activities + sightseeing",
          "All meals included",
        ],
      },
      {
        duration: "6 Days / 7 Nights",
        price: "$1099",
        features: [
          "Private villa stay",
          "Guided tours + spa access",
          "All meals + transfers included",
        ],
      },
    ],
  };

  return (
    <>
      <Navbar />

      {/* Add top margin/padding so content isn’t hidden behind fixed Navbar */}
      <div className="max-w-6xl mx-auto px-6 py-20 mt-10">
        {/* Title */}
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          {offer.title}
        </h2>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {offer.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`offer ${index}`}
              className="w-full h-56 object-cover rounded-lg shadow-md"
            />
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed mb-10 text-center">
          {offer.description}
        </p>

        {/* Package Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offer.packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-xl border hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {pkg.duration}
              </h3>
              <p className="text-gray-800 font-bold mb-3">Price: {pkg.price}</p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                {pkg.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <Link
  to="/booking"
  state={{
    destination: offer.title,
    package: pkg.duration,
    price: pkg.price,
    img: offer.images[0],
  }}
  className="block text-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
>
  Book the Slot
</Link>

            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default OfferPage;
