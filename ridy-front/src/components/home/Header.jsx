import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../style/css/Header.css";

const Header = () => {
	const [city, setCity] = useState("");

	const HandleCity = (e) => {
		setCity(e.target.value);
	};
	return (
		<div>
			<div className="container-content-banner">
				<div className="container-text-presentation">
					<h1 className="presentation">
						{" "}
						Rent your ride <p> anytime</p> <p>anywhere </p>{" "}
					</h1>
					<p className="informations"> We will provide you some carrots ... </p>
				</div>
			</div>
			<div className="container-where">
				<p className="rent"> Where do you want to rent ? </p>

				<select name="city" id="city" onChange={HandleCity}>
					<option value="">-- Please choose a city --</option>
					<option value="Bordeaux"> Bordeaux </option>
					<option value="Nantes"> Nantes </option>
					<option value="Toulouse"> Toulouse </option>
					<option value="Brest"> Brest </option>
					<option value="Bayonne"> Bayonne </option>
					<option value="Lyon"> Lyon </option>
				</select>
			</div>

			<div className="container-boutton">
				<Link
					to={{
						pathname: "/Map",
						state: { city },
					}}
					className="link-search"
				>
					{" "}
					Search{" "}
				</Link>
			</div>
		</div>
	);
};

export default Header;
