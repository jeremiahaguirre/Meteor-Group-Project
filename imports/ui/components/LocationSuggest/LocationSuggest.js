import React, { Component } from "react";
import Geosuggest, { Suggest } from "react-geosuggest";
import "./geo.css";

export class LocationSuggest extends Component {
  render() {
    return (
      <div>
        <Geosuggest
          placeholder="Start typing!"
          initialValue="Metrotown"
          onSuggestSelect={values => this.props.handleLocationChange(values)}
          location={new google.maps.LatLng(53.558572, 9.9278215)}
          radius="20"
        />
      </div>
    );
  }
}

export default LocationSuggest;
