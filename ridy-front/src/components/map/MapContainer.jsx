import React, {Component}  from "react";

import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
  };

  
export class MapContainer extends Component {
    render(){
        return (
            <div> 
                <p>Hello sur map</p>
                <Map
                    google={this.props.google}
                    zoom={12}
                    style={mapStyles}
                    initialCenter={{ lat: 44.833, lng: -0.5667}}
                />
                
            </div>
        )
    }
    
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyDQ3MLXcFAxS3N8ZCdSYloha8UsTNk8h3Q'
  })(MapContainer);
  