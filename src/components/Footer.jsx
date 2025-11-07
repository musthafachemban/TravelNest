import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & About */}
        <div>
          <h2 className="text-3xl font-extrabold text-white mb-4 tracking-wide">
            TravelNest
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm">
            Discover breathtaking destinations and unforgettable adventures.  
            We bring you premium travel experiences with comfort and care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5 border-l-4 border-blue-600 pl-3">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-400">
            {["Home", "Destinations", "Packages", "Gallery", "Contact"].map((item, i) => (
              <li
                key={i}
                className="hover:text-blue-400 transition duration-300 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5 border-l-4 border-blue-600 pl-3">
            Contact Us
          </h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-blue-600 mt-1" />
              <span>Kochi, Kerala, India</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-600" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600" />
              <span>support@travelnest.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5 border-l-4 border-blue-600 pl-3">
            Stay Updated
          </h3>
          <p className="text-gray-400 mb-4 text-sm">
            Subscribe for exclusive offers, travel tips, and destination updates.
          </p>
          <div className="flex rounded-lg overflow-hidden border border-gray-700 focus-within:ring-2 focus-within:ring-blue-600">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-transparent text-gray-200 placeholder-gray-500 outline-none"
            />
            <button className="bg-blue-600 px-5 text-white hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 my-10"></div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>© {new Date().getFullYear()} TravelNest. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0 text-2xl">
          <FaFacebook className="hover:text-blue-500 transition transform hover:scale-110 cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 transition transform hover:scale-110 cursor-pointer" />
          <FaTwitter className="hover:text-sky-400 transition transform hover:scale-110 cursor-pointer" />
          <FaYoutube className="hover:text-red-500 transition transform hover:scale-110 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
