import React, {Component} from 'react';
import {Map, GoogleApiWrapper, InfoWindow, Marker, Polyline } from 'google-maps-react';
var data = require('./trips/2016-07-02--11-56-24.json');

const mapStyles = {
  width: '100%',
  height: '100%',
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

  createPolylinePath = (aLat, aLng, bLat, bLng) => {
    let path = [];

    let latlonA = {lat: aLat, lng: aLng};
    let latlonB = {lat: bLat, lng: bLng};

    path.push(latlonA);
    path.push(latlonB);

    return path;
  };

  pathColor = (speed) => {
    if (speed < 1) {
      return "#FF0000"
    } else if (speed < 5) {
      return "#FF3300"
    } else if (speed < 10) {
      return "#ff6600"
    } else if (speed < 15) {
      return "#ff9900"
    } else if (speed < 20) {
      return "#FFCC00"
    } else if (speed < 30) {
      return "#FFFF00"
    } else if (speed < 40) {
      return "#ccff00"
    } else if (speed < 50) {
      return "#99ff00"
    } else if (speed < 60) {
      return "#66ff00"
    } else if (speed < 70) {
      return "#33ff00"
    } else {
      return "#00FF00"
    }
  };

  createPolyline = () => {
    let polylines = [];

    for (let i = 1; i < data.coords.length; i+=2) {
      let aLat = data.coords[i-1].lat;
      let aLng = data.coords[i-1].lng;

      let bLat = data.coords[i].lat;
      let bLng = data.coords[i].lng;

      let speedAverage = (data.coords[i-1].speed + data.coords[i].speed)/2;

      polylines.push(
        <Polyline
          path={this.createPolylinePath(aLat, aLng, bLat, bLng)}
          strokeColor={this.pathColor(speedAverage)}
          strokeOpacity={1}
          strokeWeight={5}
          key={i/2}
        />
      );
    }

    return polylines;
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

        {this.createPolyline()}

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBKDop5hhdUm7i49gwOHU-PAUM7rNhIrY1M'
})(MapContainer);
