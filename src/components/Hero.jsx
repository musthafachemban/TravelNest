import { useState, useEffect } from "react";
import React from "react";

const images = [
  [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  ],
  [
    "https://images.unsplash.com/photo-1519821172141-b5d8b6f04f71",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1493558103817-58b2924bce98"
  ],
  [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1"
  ]
];

export default function Hero() {
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const i1 = setInterval(() => setIndex1((i) => (i + 1) % images[0].length), 2500);
    const i2 = setInterval(() => setIndex2((i) => (i + 1) % images[1].length), 3000);
    const i3 = setInterval(() => setIndex3((i) => (i + 1) % images[2].length), 3500);

    return () => {
      clearInterval(i1);
      clearInterval(i2);
      clearInterval(i3);
    };
  }, []);

  return (
    
   <>
   {/* Booking Modal */}
{open && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-xl w-[90%] max-w-lg shadow-xl animate-fadeIn">
      <h2 className="text-2xl font-bold text-emerald-700 mb-4 text-center">
        Book Your Trip
      </h2>

      <div className="space-y-3">
        <select className="w-full p-3 border rounded-lg">
          <option>Select Destination</option>
          <option>Bali, Indonesia</option>
          <option>Dubai</option>
          <option>Maldives</option>
          <option>Switzerland</option>
        </select>

        <input type="date" className="w-full p-3 border rounded-lg" />

        <input type="date" className="w-full p-3 border rounded-lg" />

        <input
          type="number"
          min="1"
          placeholder="Guests"
          className="w-full p-3 border rounded-lg"
        />

        <select className="w-full p-3 border rounded-lg">
          <option>Travel Type</option>
          <option>Solo</option>
          <option>Couple / Honeymoon</option>
          <option>Family</option>
          <option>Friends / Group</option>
        </select>

        <button className="w-full bg-emerald-600 text-white p-3 rounded-lg hover:bg-emerald-700 transition">
          Confirm Booking
        </button>

        <button 
          onClick={() => setOpen(false)} 
          className="w-full bg-gray-200 p-3 rounded-lg hover:bg-gray-300 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

        <div className="relative h-[85vh] w-full overflow-hidden flex">
          
          {/* 3 image panels */}
          <div className="flex w-full h-full">
            {[index1, index2, index3].map((current, col) => (
              <div key={col} className="w-1/3 h-full relative overflow-hidden">
                {images[col].map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    className={`absolute h-full w-full object-cover transition-opacity duration-[1800ms] 
                    ${current === idx ? "opacity-100" : "opacity-0"}`}
                  />
                ))}
                <div className="absolute inset-0 bg-black/40" />
              </div>
            ))}
          </div>
    
          {/* Text + CTA */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
            <h1 className="text-4xl sm:text-6xl font-extrabold drop-shadow-lg">
              Discover Your Next Journey
            </h1>
            <p className="mt-3 sm:mt-4 text-lg sm:text-xl text-gray-200 font-light">
              Find exclusive travel packages & luxury escapes
            </p>
   
    
          </div>
        </div>
   </>
    
  );
}
