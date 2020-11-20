import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

import "../../style/css/MapContainer.css";

const mapStyles = {
	width: "100%",
	height: "100%",
};

const MapContainer = ({ google, location }) => {
	const { city } = location.state;
	const [info, setInfo] = useState("");
	const [newArray, setNewArray] = useState([]);

	useEffect(() => {
		axios
			.get("https://gitbusters.herokuapp.com/api/rides")
			.then((result) => result.data)
			.then((data) => setNewArray(data.filter((item) => item.city === city)));
	}, [city]);

	let coordCity = {};
	let coordBordeaux = { lat: 44.833, lng: -0.5667 };
	let coordNantes = { lat: 47.218371, lng: -1.553621 };
	let coordToulouse = { lat: 43.604652, lng: 1.444209 };
	let coordBrest = { lat: 48.390394, lng: -4.486076 };
	let coordBayonne = { lat: 43.492949, lng: -1.474841 };
	let coordLyon = { lat: 45.764043, lng: 4.835659 };

	switch (city) {
		default:
			coordCity = coordBordeaux;
			break;
		case "Nantes":
			coordCity = coordNantes;
			break;
		case "Toulouse":
			coordCity = coordToulouse;
			break;
		case "Brest":
			coordCity = coordBrest;
			break;
		case "Bayonne":
			coordCity = coordBayonne;
			break;
		case "Lyon":
			coordCity = coordLyon;
			break;
	}

	const handleClick = (array) => {
		setInfo(
			<div className="boxPoney">
				<img className="image-map" src={array.photo} alt="yo" />
				<div className="box-info-poney">
					<div className="info"> {array.name} </div>
					<div className="info">
						{" "}
						{array.seat} {array.seat > 1 ? "people" : "person"} - {array.price}{" "}
						golden coin{array.price > 1 && "s"}
					</div>
				</div>
				<Link to={`/description/${array.id}`}>
					<button className="bookNow">More info</button>
				</Link>
			</div>
		);
	};

	const displayMarkers = (e) => {
		return newArray.map((array) => {
			return (
				<Marker
					key={array.id}
					id={array.id}
					position={{
						lat: array.latitude,
						lng: array.longitude,
					}}
					onClick={() => handleClick(array)}
				/>
			);
		});
	};

	return (
		<div className="map-box">
			<p className="test1">{info}</p>

			<Map
				google={google}
				zoom={11}
				style={mapStyles}
				initialCenter={coordCity}
			>
				{displayMarkers()}
			</Map>
		</div>
	);
};

export default GoogleApiWrapper({
	apiKey: "AIzaSyDQ3MLXcFAxS3N8ZCdSYloha8UsTNk8h3Q",
})(MapContainer);
