import React, {Component} from 'react';
import {Map, GoogleApiWrapper, InfoWindow, Marker, Polyline } from 'google-maps-react';
var data = require('./trips/2016-07-02--11-56-24.json');

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  createPolylinePath = () => {
    let path = [];

    for (let i = 0; i < data.coords.length; i++) {
      let latlon = {lat: data.coords[i].lat, lng: data.coords[i].lng};
      path.push(latlon);
    }

    return path;
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={{
          lat: 37.7749,
          lng: -122.4194
        }}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'San Francisco'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>

        <Polyline
          path={this.createPolylinePath()}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2} />

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey:
})(MapContainer);
