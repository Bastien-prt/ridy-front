import React from "react";
import { render } from "react-dom";
import Carousel from "./Carousel.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  return (
    <div>
      {" "}
      Page home
      <Carousel />
    </div>
  );
};

// render(<App />, document.getElementById("root"));

export default Home;
