import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

import "../../style/css/MapContainer.css";
import axios from "axios";

const mapStyles = {
  width: "100%",
  height: "100%",
};

const MapContainer = ({ google }) => {
  const [info, setInfo] = useState("");
  const [newArray, setNewArray] = useState([]);
  const [objectStore, setObjectStore] = useState({});

  useEffect(() => {
    axios
      .get(`https://gitbusters.herokuapp.com/api/rides/`)
      .then((response) => response.data)
      .then((data) => setNewArray(data));
  }, []);

  const [stores, setStores] = useState([
    { latitude: 44.8115510558411, longitude: -0.5972854563965946 },
    { latitude: 44.80475549452777, longitude: -0.6309465089812427 },
    { latitude: 44.84089121384058, longitude: -0.5808519179932325 },
    { latitude: 44.83502127197189, longitude: -0.574980164319232 },
    { latitude: 44.849623961794585, longitude: -0.5751784382387548 },
    { latitude: 44.85589543401733, longitude: -0.5903870243578702 },
    { latitude: 44.84873951631123, longitude: -0.5588456712662726 },
    { latitude: 44.83020363562137, longitude: -0.5272349788806885 },
    { latitude: 44.8443910864143, longitude: -0.6520393168553262 },
    { latitude: 44.88140146099171, longitude: -0.6122024361043721 },
  ]);

  const handleClick = (array) => {
    setInfo(
      <div className='boxPoney'>
        <img className='image-map' src={array.photo} alt='yo' />
        <div className='box-info-poney'>
          <div className='info'> {array.name} </div>
          <div className='info'>
            {" "}
            {array.seat} people - {array.price} golden coins{" "}
          </div>
        </div>
        <Link to={`/description/${array.id}`}>
          <button className='bookNow'>Book now</button>
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
    <div className='map-box'>
      <p className='test1'>{info}</p>
      <Map
        google={google}
        zoom={11}
        style={mapStyles}
        initialCenter={{ lat: 44.833, lng: -0.5667 }}>
        {displayMarkers()}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDQ3MLXcFAxS3N8ZCdSYloha8UsTNk8h3Q",
})(MapContainer);
