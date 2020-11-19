import React, {Component}  from "react";

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
  };


class MapContainer extends Component {
    constructor(props){
        super(props)
        this.state={
            stores:[
                {latitude: 44.8115510558411, longitude: -0.5972854563965946},
                {latitude: 44.80475549452777, longitude: -0.6309465089812427},
                {latitude: 44.84089121384058, longitude: -0.5808519179932325},
                {latitude: 44.83502127197189, longitude: -0.574980164319232},
                {latitude: 44.849623961794585, longitude: -0.5751784382387548},
                {latitude: 44.85589543401733, longitude: -0.5903870243578702},
                {latitude: 44.84873951631123, longitude: -0.5588456712662726},
                {latitude: 44.83020363562137, longitude: -0.5272349788806885},
                {latitude: 44.8443910864143, longitude: -0.6520393168553262},
                {latitude: 44.88140146099171, longitude: -0.6122024361043721},
            ]
        }
    }
        displayMarkers = () => {
            return this.state.stores.map((store, index) => {
              return <Marker key={index} id={index} position={{
               lat: store.latitude,
               lng: store.longitude
             }}
             onClick={() => console.log("You clicked me!")} />
            })
          }
    

    render(){
        return (
            <div> 
                {/* <p>Hello sur map</p> */}
                <Map
                    google={this.props.google}
                    zoom={11}
                    style={mapStyles}
                    initialCenter={{ lat: 44.833, lng: -0.5667}}>

                    {this.displayMarkers()}
                

                </Map>

                

                

            </div>
        )
    }
    
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyDQ3MLXcFAxS3N8ZCdSYloha8UsTNk8h3Q'
  })(MapContainer);
  