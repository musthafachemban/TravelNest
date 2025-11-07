import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BookingPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [persons, setPersons] = useState(1);
  const [days, setDays] = useState("3 Days / 2 Nights");
  const [purpose, setPurpose] = useState("Honeymoon");
  const [total, setTotal] = useState(0);
  const [advance] = useState(1000);

  useEffect(() => {
    if (state?.price) {
      const basePrice = Number(state.price.replace(/[^0-9.-]+/g, ""));
      const numDays = parseInt(days);
      setTotal(basePrice * persons * (numDays / 3));
    }
  }, [persons, days, state?.price]);

  if (!state) {
    return (
      <div className="text-center py-20 text-2xl text-gray-500">
        No package selected.
      </div>
    );
  }

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleProceedToPay = () => {
    if (!loggedInUser) {
      toast.warning("Please login to continue!", { position: "top-center" });
      navigate("/login");
    } else {
      toast.success("Your slot has been booked ! A confirmation email has been sent to your registered email", {
        position: "top-center",
        autoClose: 3000,
      });

      // Simulate booking confirmation mail (fake API)
      setTimeout(() => {
        toast.info("📩 A confirmation email has been sent to your registered email!", {
          position: "top-center",
          autoClose: 3000,
        });

        // Redirect to confirmation page (optional)
        navigate("/", {
          state: { ...state, persons, days, total, advance, user: loggedInUser },
        });
      }, 2000);
    }
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* --- Left Side: Summary + Options --- */}
        <div className="md:col-span-1 bg-white rounded-2xl shadow-lg border p-5">
          <h2 className="text-xl font-semibold text-blue-700 mb-3">
            Selected Package
          </h2>
          <img
            src={state.img}
            alt={state.package}
            className="w-full h-[180px] object-cover rounded-xl mb-3"
          />
          <h3 className="text-lg font-semibold text-gray-800">
            {state.destination} - {state.package}
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Base Price: <span className="font-semibold">{state.price}</span>
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Duration
              </label>
              <select
                value={days}
                onChange={(e) => setDays(e.target.value)}
                className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              >
                <option>3 Days / 2 Nights</option>
                <option>5 Days / 4 Nights</option>
                <option>7 Days / 6 Nights</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Purpose
              </label>
              <select
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              >
                <option>Honeymoon</option>
                <option>Couple</option>
                <option>Family</option>
                <option>Friends</option>
                <option>Solo</option>
              </select>
            </div>
          </div>
        </div>

        {/* --- Right Side: Form + Total --- */}
        <div className="md:col-span-2 bg-white rounded-2xl shadow-xl border p-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">
            Traveler Information
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contact Number
              </label>
              <input
                type="text"
                placeholder="+91 9876543210"
                className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Number of Persons
              </label>
              <input
                type="number"
                min="1"
                value={persons}
                onChange={(e) => setPersons(e.target.value)}
                className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Total Display */}
          <div className="mt-10 bg-blue-50 p-5 rounded-xl text-center">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Total Price: ${total.toLocaleString()}
            </h3>
            <p className="text-gray-600">
              Advance Payment: ${advance} (required to secure booking)
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex justify-end gap-4">
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
            >
              Back
            </button>

            <button
              onClick={handleProceedToPay}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Proceed to Pay
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
