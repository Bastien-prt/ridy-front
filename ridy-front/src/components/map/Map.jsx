import React, { useState, useEffect } from "react";
import axios from "axios";

const Map = ({ location }) => {
  const { city } = location.state;
  const [cityRides, setCityRides] = useState([]);

  useEffect(() => {
    axios
      .get(`https://gitbusters.herokuapp.com/api/rides`)
      .then((result) => result.data)
      .then((data) =>
        setCityRides(data.filter((cityRide) => cityRide.city === city))
      );
  }, [city]);

  return (
    <div>
      {cityRides.map((cityRideOne) => (
        <div> {cityRideOne.name}</div>
      ))}
    </div>
  );
};

export default Map;
