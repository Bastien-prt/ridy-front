import React from "react";
import "./Carousel.css";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <div className="carousel">
    <Carousel autoPlay>
      <div>
        <img src="https://media.senscritique.com/media/000010056037/source_big/Halo_Combat_Evolved.jpg" />
        <p className="legend1">Legend 1</p>
        <div className="carousel-content">
          <p>
            This little rascal will take you everywhere you want if you feed him
            good quality carrots
          </p>
        </div>
      </div>
      <div>
        <img src="https://images-na.ssl-images-amazon.com/images/I/51rgXbmpRGL._AC_SY445_.jpg" />
        <p className="legend2">Legend 2</p>
        <div className="carousel-content">
          <p>This girl will tame you with her eyes. Don't ler her fool you.</p>
        </div>
      </div>
      <div>
        <img src="https://store-images.s-microsoft.com/image/apps.8340.69990143727992974.1a013d7b-2e62-4f4d-a174-a07a940b8151.a7e03e01-7cc2-4818-b25f-fb14bdad643c?mode=scale&q=90&h=225&w=150" />
        <p className="legend3">Legend 3</p>
        <div className="carousel-content">
          <p>
            Our clients keep telling us that he is the funniest horse we have.
            You will not forget your journey with him.
          </p>
        </div>
      </div>
    </Carousel>
  </div>
);
