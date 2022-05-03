import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Destination from "./components/Destination";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero></Hero>
      <Destination></Destination>
      <Search></Search>
      <Carousel></Carousel>
      <Footer></Footer>
    </div>
  );
};

export default App;
