import React, { useState, useEffect } from "react";
// import axios from "axios";

import { Carousel } from "react-responsive-carousel";

import "./Carousel.css";

const Carousell = () => {
	// const [picture, setPicture] = useState("");

	// useEffect(() => {
	// 	axios
	// 		.get(`https://gitbusters.herokuapp.com/api/rides/1`)
	// 		.then((response) => console.log(response));
	// }, []);

	return (
		<div className="carousel">
			<p className="rent">This month 3 best rides!</p>
			<Carousel autoPlay>
				<div>
					<img
						className="picture"
						src="https://horsefactsbymarshahubler.files.wordpress.com/2014/04/british-spotted-pony-1.jpg"
						alt="NightMare"
					/>
					<div className="carousel-content">
						<p>Nice pony, a bit grumpy when hungry.</p>
					</div>
				</div>
				<div>
					<img
						className="picture"
						src="https://www.connexionfrance.com/var/connexion/storage/images/_aliases/articleimage/media/images/brown-horse-in-field/1112142-1-eng-GB/Brown-horse-in-field.jpg"
						alt="Harry Trotter"
					/>
					<div className="carousel-content">
						<p>
							This nice horse will get you to your destination, but be patient,
							he can be a little mischievious!
						</p>
					</div>
				</div>
				<div>
					<img
						className="picture"
						src="https://france3-regions.francetvinfo.fr/image/1LOftSfF__BZyqbG2HJGeeGkByg/1200x900/regions/2020/06/26/5ef647bc0af88_52290083_256635521926291_3024432492858834944_o-4897792.jpg"
						alt="Maple Stirrup"
					/>
					<div className="carousel-content">
						<p>
							Maple Stirrup may be a mule, but he is very cosy and roomy. Buckle
							up for a ride you'll never forget!
						</p>
					</div>
				</div>
			</Carousel>
		</div>
	);
};

export default Carousell;
