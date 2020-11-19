import React from "react";
import Header from "./Header";
import Carousell from "./Carousel.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
	return (
		<div>
			<Header />
			<Carousell />
		</div>
	);
};

export default Home;
