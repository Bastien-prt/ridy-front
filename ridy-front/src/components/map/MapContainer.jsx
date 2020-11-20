import React, { useState, useEffect }  from "react";

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import '../../style/css/MapContainer.css'
import axios from 'axios';

const mapStyles = {
    width: '100%',
    height: '100%',
  };

  const MapContainer = ({google}) => {
    const[info, setInfo]=useState("");
    const[newArray, setNewArray]= useState([])
    const[objectStore, setObjectStore]= useState({})
   
    useEffect(() => {
      axios
        .get(`https://gitbusters.herokuapp.com/api/rides/`)
        .then((response) => (response.data))
        .then((data) => setNewArray(data));
    }, []);


        const handleClick=(array)=>{  
          setInfo(<div className = "boxPoney">
            <img className="image-map" src={array.photo}  alt="yo" />
            <div className="box-info-poney">
              <div className="info"> {array.name} </div>
              <div className="info"> {array.seat} people  - {array.price} golden coins </div>
            </div>
          
          <button className="bookNow">Book now</button>
          </div>)
          
        }
        
        const displayMarkers = (e) => {
            return newArray.map((array) => {
              return <Marker key={array.id} id={array.id} position={{
               lat: array.latitude,
               lng: array.longitude
             }}
             
             onClick={() => handleClick(array)} />
             
            
            }) 
          }   
          
        return (
               <div className="map-box">       
                  <p className="test1">{info}</p> 
                      <Map
                          google={google}
                          zoom={11}
                          style={mapStyles}
                          initialCenter={{ lat: 44.833, lng: -0.5667}}>   
                          {displayMarkers() } 
                          
                     </Map>                        
                </div>
           
                  )  
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDQ3MLXcFAxS3N8ZCdSYloha8UsTNk8h3Q'
  })(MapContainer);
