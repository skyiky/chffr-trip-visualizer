import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Map, GoogleApiWrapper, Polyline} from 'google-maps-react';
import './App.css';

var data = require('./trips/2016-07-02--11-56-24');

const mapStyles = {
  width: '100%',
  height: '100%',
};

export class MapContainer extends Component {
  state = {
    currentLatLng: {
      lat: data.coords[0].lat,
      lng: data.coords[0].lng
    }
  };

  getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          console.log(position.coords);
          this.setState(prevState => ({
            currentLatLng: {
              ...prevState.currentLatLng,
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          }))
        }
      )
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

    for (let i = 1; i < data.coords.length; i += 2) {
      let aLat = data.coords[i - 1].lat;
      let aLng = data.coords[i - 1].lng;

      let bLat = data.coords[i].lat;
      let bLng = data.coords[i].lng;

      let speedAverage = (data.coords[i - 1].speed + data.coords[i].speed) / 2;

      polylines.push(
        <Polyline
          path={this.createPolylinePath(aLat, aLng, bLat, bLng)}
          strokeColor={this.pathColor(speedAverage)}
          strokeOpacity={1}
          strokeWeight={6}
          key={i / 2}
        />
      );
    }

    return polylines;
  };

  resetCenter = () => {
    this.setState(prevState => ({
      ...prevState,
      currentLatLng: {
        ...prevState.currentLatLng,
        lat: data.coords[0].lat,
        lng: data.coords[0].lng
      }
    }))
  };

  render() {
    //{this.getGeoLocation()} // get current user location

    return (
      <div>
        <Map
          google={this.props.google}
          zoom={11}
          style={mapStyles}
          initialCenter={{
            lat: this.state.currentLatLng.lat,
            lng: this.state.currentLatLng.lng
          }}
          center={{
            lat: this.state.currentLatLng.lat,
            lng: this.state.currentLatLng.lng
          }}
        >
          {this.createPolyline()}
        </Map>
      </div>
    );
  }
}

MapContainer.propTypes = {

};

export default GoogleApiWrapper({
  apiKey: ''
})(MapContainer);
