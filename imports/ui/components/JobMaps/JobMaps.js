import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class JobMaps extends Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Map
          google={this.props.google}
          initialCenter={{
            lat: 40.854885,
            lng: -88.081807
          }}
          style={{
            width: "50%",
            height: "50%",
            position: "absolute",
            top: "50"
          }}
          zoom={14}
        >
          <Marker onClick={this.onMarkerClick} name={"Current location"} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDVeH1MZLc4kjzbFlgDeHRqAUtvsoUe2EI"
})(JobMaps);
