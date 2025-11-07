import { useState } from "react";
import { FiMenu, FiX, FiSearch, FiHeart, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow bg-white">
      {/* TOP BAR */}
      <div className="w-full bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6">
          {/* Logo */}
          <h1
            onClick={() => handleScroll("home")}
            className="text-2xl font-bold tracking-wide cursor-pointer"
          >
            TravelNest
          </h1>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            {/* 🔍 Inline Search */}
            <div className="flex items-center gap-2 bg-blue-500 rounded-full px-3 py-1 transition-all duration-300">
              <FiSearch
                size={18}
                className="cursor-pointer hover:text-gray-300"
                onClick={() => setShowSearch(!showSearch)}
              />

              {showSearch && (
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-white placeholder-gray-200 border-none outline-none w-56"
                />
              )}
            </div>

            <button className="flex items-center gap-2 hover:text-gray-300 transition">
              <FiHeart size={18} /> Wishlist
            </button>

            <Link
              to="/login"
              className="flex items-center gap-2 hover:text-gray-300 transition"
            >
              <FiUser size={18} /> Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* BOTTOM MENU BAR (Desktop) */}
      <div className="bg-white hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <ul className="flex justify-center gap-10 text-gray-700 font-medium">
            <li
              onClick={() => handleScroll("home")}
              className="hover:text-blue-600 cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => handleScroll("destinations")}
              className="hover:text-blue-600 cursor-pointer"
            >
              Destinations
            </li>
            <li
              onClick={() => handleScroll("Offer")}
              className="hover:text-blue-600 cursor-pointer"
            >
              Offer
            </li>
            <li
              onClick={() => handleScroll("contact")}
              className="hover:text-blue-600 cursor-pointer"
            >
              Contact
            </li>
          </ul>
        </div>
      </div>

      {/* ✅ MOBILE MENU (Visible when toggled) */}
      {open && (
        <div className="md:hidden bg-blue-600 text-white px-6 py-4 space-y-4">
          <ul className="flex flex-col gap-4 text-lg font-medium">
            <li
              onClick={() => handleScroll("home")}
              className="hover:text-gray-300 cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => handleScroll("destinations")}
              className="hover:text-gray-300 cursor-pointer"
            >
              Destinations
            </li>
            <li
              onClick={() => handleScroll("Offer")}
              className="hover:text-gray-300 cursor-pointer"
            >
              Offer
            </li>
            <li
              onClick={() => handleScroll("contact")}
              className="hover:text-gray-300 cursor-pointer"
            >
              Contact
            </li>
          </ul>

          {/* Mobile Icons Below Menu */}
          <div className="flex flex-col gap-3 pt-4 border-t border-blue-400">
            <button className="flex items-center gap-2 hover:text-gray-300 transition">
              <FiHeart size={18} /> Wishlist
            </button>

            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 hover:text-gray-300 transition"
            >
              <FiUser size={18} /> Sign In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
