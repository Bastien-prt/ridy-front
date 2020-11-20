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
					<h1 className="presentation">Ridy.</h1>
					<h2>
						Rent your ride.
						<p>Anywhere, anytime.</p>
					</h2>
					<p className="informations"> We shall provide some carrots... </p>
				</div>
			</div>
			<div className="container-where">
				<p className="rent">Where shall you leave from? </p>

				<select name="city" id="city" onChange={HandleCity}>
					<option value="">Please select a city</option>
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
