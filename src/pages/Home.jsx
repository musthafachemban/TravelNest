import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Topackeges from "../components/Topackeges";
import Choose from "../components/Choose";
import Testimonials from "../components/Testimonials";
import Travelvideo from "../components/Travelvideo";

function Home() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="destinations">
        <Destination />
      </div>
      <div id="packages">
        <Topackeges />
      </div>
      <div id="choose">
        <Choose />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="travelvideo">
        <Travelvideo />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}

export default Home;
