import React, { useEffect, useState } from "react";
import axios from "axios";

import "../../style/description.css";

const Description = () => {
	const [ride, setRide] = useState({});
	//   const { id } = match.params;

	useEffect(() => {
		axios
			.get(`https://gitbusters.herokuapp.com/api/rides/1`)
			.then((response) => response.data)
			.then((data) => setRide(data[0]));
	}, []);

	return (
		<div>
			<div className="descriptionPage">
				<div className="rideDescription">
					<div className="ridePicture">
						<img src={ride.photo} alt={ride.name} />
					</div>

					<div className="corpsdescription">
						<div className="infodescription">
							<div className="descriptionTitle">
								<h1 className="h1-description">{ride.name}</h1>

								<div className="priceLogo">
									<p>{ride.price}</p>

									<img
										className="image-icone"
										src="https://www.flaticon.com/svg/static/icons/svg/940/940971.svg"
										alt="price"
									/>
								</div>
							</div>
							<div className="description-bio"># {ride.description}</div>
							<div className="descriptionDetails">
								<div className="descriptionLogo">
									<img
										className="image-icone"
										src="https://www.flaticon.com/svg/static/icons/svg/3004/3004571.svg"
										alt="age"
									/>
									{ride.age} long and difficult winter{ride.age > 1 && "s"}
								</div>
								<div className="descriptionLogo">
									<img
										className="image-icone"
										src="https://www.flaticon.com/svg/static/icons/svg/615/615075.svg"
										alt="seats"
									/>
									{ride.seat} {ride.seat === 1 ? "person is" : "people are"}{" "}
									allowed for the ride.
								</div>
								<div className="descriptionLogo">
									<img
										className="image-icone"
										src="https://www.flaticon.com/svg/static/icons/svg/1616/1616487.svg"
										alt="fuel"
									/>
									{ride.fuel}.{" "}
									{ride.category === "horse" || "pony"
										? "That's the secret recipe to empower your mount !"
										: "That's how to make your engine going faster"}
								</div>
								<div className="descriptionLogo">
									<img
										className="image-icone"
										src="https://www.flaticon.com/svg/static/icons/svg/1020/1020258.svg"
										alt="location"
									/>
									{ride.place}
								</div>
							</div>
						</div>
					</div>

					<button className="myButton">Book</button>
				</div>
			</div>
		</div>
	);
};

export default Description;
