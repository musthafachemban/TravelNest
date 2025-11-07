import React from "react";
import { Link } from "react-router-dom";

// ✅ move this outside the component
export const destination = [
  {
    name: "Bali, Indonesia",
    slug: "bali",
    desc: "Tropical paradise with stunning beaches & temples",
    img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    info: "Bali is famous for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs.",
    packages: [
      {
        title: "Honeymoon Package",
        price: "$999",
        img: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
        desc: "A romantic escape featuring private villas, candlelight dinners, and sunset cruises."
      },
      {
        title: "Adventure Package",
        price: "$799",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        desc: "Thrill-seekers can enjoy rafting, surfing, and jungle treks."
      },
      {
        title: "Family Fun Package",
        price: "$899",
        img: "https://images.unsplash.com/photo-1600359755046-9fbc5f8a84e7",
        desc: "Fun for all ages — theme parks, water adventures, and cultural tours."
      },
      {
        title: "Luxury Escape Package",
        price: "$1499",
        img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
        desc: "Stay in private resorts with spa treatments and world-class dining."
      },
      {
        title: "Cultural Discovery Package",
        price: "$699",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        desc: "Temple visits, Balinese dance shows, and traditional cuisine."
      },
      {
        title: "Eco Adventure Package",
        price: "$749",
        img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
        desc: "Discover Bali’s greenery through hikes, waterfalls, and rice terraces."
      },
    ],
  },
  {
    name: "Maldives",
    slug: "maldives",
    desc: "Luxury overwater villas & crystal-clear lagoons",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    info: "The Maldives is known for its white sand beaches, coral reefs, and turquoise waters.",
    packages: [
      {
        title: "Couple Retreat",
        price: "$1299",
        img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
        desc: "Romantic overwater villa stay with private dinner on the beach."
      },
      {
        title: "Scuba Diving Experience",
        price: "$899",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        desc: "Dive into coral reefs filled with marine life and beauty."
      },
      {
        title: "Island Hopping",
        price: "$999",
        img: "https://images.unsplash.com/photo-1526481280691-906b3f0408d7",
        desc: "Explore 5+ local islands with guided snorkeling tours."
      },
      {
        title: "Luxury Spa Retreat",
        price: "$1399",
        img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
        desc: "Exclusive spa, private pool villa, and fine dining experience."
      },
      {
        title: "Water Sports Package",
        price: "$849",
        img: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
        desc: "Includes jet skiing, kayaking, and windsurfing adventures."
      },
      {
        title: "Sunset Cruise Package",
        price: "$699",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        desc: "Sail into the sunset with champagne and live music."
      },
    ],
  },
  {
    name: "Paris, France",
    slug: "paris",
    desc: "City of love, lights & timeless romance",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    info: "Paris is known for art, gastronomy, and culture — perfect for a romantic or cultural escape.",
    packages: [
      {
        title: "Romantic Getaway",
        price: "$1099",
        img: "https://images.unsplash.com/photo-1494972308805-463bc619d34e",
        desc: "A luxurious trip with Eiffel Tower dinner and Seine river cruise."
      },
      {
        title: "Art & Culture Tour",
        price: "$899",
        img: "https://images.unsplash.com/photo-1500336624523-d727130c3328",
        desc: "Visit the Louvre, Musée d’Orsay, and historic cathedrals."
      },
      {
        title: "Parisian Food Walk",
        price: "$699",
        img: "https://images.unsplash.com/photo-1532634896-26909d0d4b9a",
        desc: "Indulge in croissants, macarons, and authentic French wine."
      },
      {
        title: "Luxury Shopping Experience",
        price: "$1299",
        img: "https://images.unsplash.com/photo-1545235617-9465d2a55698",
        desc: "Personal shopping at Champs-Élysées and Le Marais."
      },
      {
        title: "Photography Tour",
        price: "$799",
        img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
        desc: "Guided photoshoot at Paris landmarks with professional photographer."
      },
      {
        title: "Historical Tour",
        price: "$849",
        img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
        desc: "Visit Versailles Palace and Notre-Dame Cathedral."
      },
    ],
  },
  {
    name: "Dubai, UAE",
    slug: "dubai",
    desc: "Modern luxury in the desert with iconic skylines",
    img: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92",
    info: "Dubai offers luxury shopping, futuristic architecture, and thrilling desert adventures.",
    packages: [
      {
        title: "Desert Safari",
        price: "$999",
        img: "https://images.unsplash.com/photo-1558979158-65a1eaa08691",
        desc: "Dune bashing, camel rides, and Arabian nights under the stars."
      },
      {
        title: "Luxury Shopping Spree",
        price: "$1299",
        img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        desc: "Experience shopping in the world’s largest malls and boutiques."
      },
      {
        title: "Sky Adventure",
        price: "$1499",
        img: "https://images.unsplash.com/photo-1500048993953-d23a436266cf",
        desc: "Helicopter rides, skydiving, and Burj Khalifa experiences."
      },
      {
        title: "Beachside Relaxation",
        price: "$899",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        desc: "Relax at Jumeirah Beach with luxury spa and beach villas."
      },
      {
        title: "Cultural Heritage Tour",
        price: "$699",
        img: "https://images.unsplash.com/photo-1526153502084-1d6fd84cf0b3",
        desc: "Explore old Dubai’s souks, museums, and local cuisine."
      },
      {
        title: "Nightlife Experience",
        price: "$1099",
        img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
        desc: "Enjoy rooftop lounges, luxury dining, and city skyline views."
      },
    ],
  },
  {
    name: "Switzerland",
    slug: "switzerland",
    desc: "Snow-capped peaks, crystal lakes & serene beauty",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    info: "Switzerland is perfect for scenic train rides, lakeside villages, and alpine adventures.",
    packages: [
      {
        title: "Alpine Ski Adventure",
        price: "$1399",
        img: "https://images.unsplash.com/photo-1602416011068-4e61d9e98a56",
        desc: "Ski through the Swiss Alps and enjoy cozy chalet stays."
      },
      {
        title: "Swiss Scenic Rail Tour",
        price: "$1199",
        img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
        desc: "Experience the Glacier Express and breathtaking landscapes."
      },
      {
        title: "Lake Geneva Getaway",
        price: "$999",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        desc: "Relax by the lake, enjoy vineyards, and explore charming towns."
      },
      {
        title: "Mountain Retreat",
        price: "$1299",
        img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
        desc: "Private cabins, spa therapy, and scenic cable car rides."
      },
      {
        title: "Chocolate & Cheese Tour",
        price: "$799",
        img: "https://images.unsplash.com/photo-1500336624523-d727130c3328",
        desc: "Taste authentic Swiss chocolate and cheese at mountain dairies."
      },
      {
        title: "Adventure Trekking",
        price: "$899",
        img: "https://images.unsplash.com/photo-1558981403-c5f9891aa1b5",
        desc: "Guided hikes through alpine trails and waterfalls."
      },
    ],
  },
  {
    name: "Thailand",
    slug: "thailand",
    desc: "Vibrant culture, street food & island paradise",
    img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
    info: "Thailand offers tropical beaches, ornate temples, and flavorful cuisine.",
    packages: [
      {
        title: "Island Hopping Tour",
        price: "$899",
        img: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
        desc: "Visit Phi Phi, Krabi, and Phuket in one amazing trip."
      },
      {
        title: "Bangkok Explorer",
        price: "$749",
        img: "https://images.unsplash.com/photo-1562564055-71e051d33c19",
        desc: "Discover temples, floating markets, and street food delights."
      },
      {
        title: "Cultural Discovery",
        price: "$699",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        desc: "Explore ancient temples and Thai traditions in Chiang Mai."
      },
      {
        title: "Adventure Jungle Safari",
        price: "$999",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        desc: "Ziplining, elephant sanctuaries, and waterfalls in Khao Sok."
      },
      {
        title: "Luxury Beach Retreat",
        price: "$1299",
        img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
        desc: "Private resort villas, spa days, and sunset dinners."
      },
      {
        title: "Wellness & Yoga Retreat",
        price: "$899",
        img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
        desc: "Rejuvenate with meditation, organic meals, and ocean views."
      },
    ],
  },
];


export default function Destination() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">
        Popular Destinations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {destination.map((place, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
          >
            <div className="relative h-80 w-full overflow-hidden">
              <img
                src={place.img}
                alt={place.name}
                className="h-full w-full object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition">
                {place.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{place.desc}</p>

              <Link
                to={`/destination/${place.slug}`}
                className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition w-fit inline-block"
              >
                Explore Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
