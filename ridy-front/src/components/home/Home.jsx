import React from "react";
import Header from "./Header";
import Carousel from "./Carousel.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel />
    </div>
  );
};

export default Home;
