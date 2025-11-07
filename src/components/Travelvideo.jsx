import React from "react";

function Travelvideo() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
      
      {/* Left: YouTube Video */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-[420px] rounded-2xl"
            src="https://www.youtube.com/embed/Scxs7L0vhZ4?autoplay=1&mute=1&loop=1&playlist=Scxs7L0vhZ4"
            title="Travel Inspiration"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
        <div className="absolute inset-0 bg-black/20"></div>
        <h2 className="absolute bottom-5 left-5 text-white text-3xl font-bold drop-shadow">
          Explore the World with Us
        </h2>
      </div>

      {/* Right: Image collage */}
      <div className="grid grid-cols-2 gap-4">
        <img
          src="https://images.unsplash.com/photo-1493558103817-58b2924bce98"
          className="rounded-xl h-48 w-full object-cover shadow-lg hover:scale-105 transition"
          alt="travel 1"
        />
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          className="rounded-xl h-64 w-full object-cover shadow-lg hover:scale-105 transition"
          alt="travel 2"
        />
        <img
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
          className="rounded-xl h-64 w-full object-cover shadow-lg hover:scale-105 transition"
          alt="travel 3"
        />
        <img
          src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
          className="rounded-xl h-48 w-full object-cover shadow-lg hover:scale-105 transition"
          alt="travel 4"
        />
      </div>

    </div>
  );
}

export default Travelvideo;
